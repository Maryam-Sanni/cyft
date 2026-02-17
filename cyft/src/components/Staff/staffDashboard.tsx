import { Bell, LogOut } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload } from "lucide-react";
import Task from "../../assets/Task.png";
import Staff from "../../assets/Staff.png";
import { useNavigate } from "react-router-dom";
  
export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  staffName: string;
  assignedDate: string;
  status: "IN_PROGRESS" | "COMPLETED" | "REJECTED" | null;
  submissionText?: string;
  submissionFiles?: string;
  rejectionReason?: string;
  reviewStatus?: "PENDING" | "APPROVED" | "REJECTED";
  createdAt: string;
  submissionId: string;
}

export default function StaffDashboard() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const navigate = useNavigate();
    const UserEmail = localStorage.getItem("UserEmail")
    const STAT_ORDER = [
        "Tasks Assigned",
        "Tasks In Progress",
        "Tasks Completed",
        "Tasks Rejected",
      ] as const;
      
      const [tasksState, setTasksState] = useState<Record<typeof STAT_ORDER[number], any[]>>({
        "Tasks Assigned": [],
        "Tasks In Progress": [],
        "Tasks Completed": [],
        "Tasks Rejected": [],
      });      
      const statusMap: Record<string, keyof typeof derivedTaskData> = {
        IN_PROGRESS: "Tasks In Progress",
        COMPLETED: "Tasks Completed",
        REJECTED: "Tasks Rejected",
      };      
      const mapFetchedTasksToState = (fetchedTasks: any[]) => {
        const newState: Record<typeof STAT_ORDER[number], any[]> = {
          "Tasks Assigned": [], // could fill in later if needed
          "Tasks In Progress": [],
          "Tasks Completed": [],
          "Tasks Rejected": [],
        };
      
        fetchedTasks.forEach((task) => {
          const key = statusMap[task.status] || "Tasks Assigned";
      
          newState[key].push({
            ...task,
            actionLabel:
              task.status === "IN_PROGRESS"
                ? "Submit Report"
                : task.status === "COMPLETED"
                ? "Update Report"
                : "View Report",
            submittedDate: task.submissionText ? task.createdAt : undefined,
            submission: task.submissionText
              ? {
                  text: task.submissionText,
                  files: task.submissionFiles || [],
                }
              : undefined,
          });
        });
      
        return newState;
      };
      
      const fetchMyTasks = async () => {
        const token = localStorage.getItem("token");
      
        const res = await fetch("http://localhost:5000/tasks/my-tasks", {
          headers: { Authorization: `Bearer ${token}` },
        });
      
        if (!res.ok) throw new Error("Failed to fetch tasks");
      
        const data = await res.json();
      
        // map backend tasks to your dashboard state
        const mappedState = mapFetchedTasksToState(data);
      
        setTasksState(mappedState); // updates derivedTaskData automatically
      };        

  useEffect(() => {
    fetchMyTasks();
}, []);

const derivedTaskData = useMemo((): Record<typeof STAT_ORDER[number], any[]> => {
  const tasksAssigned = Object.entries(tasksState)
    .flatMap(([status, tasks]) =>
      tasks.map((task) => ({ ...task, status }))
    );

  return {
    "Tasks Assigned": tasksAssigned,
    "Tasks In Progress": tasksState["Tasks In Progress"] || [],
    "Tasks Completed": tasksState["Tasks Completed"] || [],
    "Tasks Rejected": tasksState["Tasks Rejected"] || [],
  };
}, [tasksState]);
        
      
      const [activeStat, setActiveStat] = useState<typeof STAT_ORDER[number]>(
        "Tasks Assigned"
      );
      
      const stats = STAT_ORDER.map((label) => ({
        label,
        value: String(derivedTaskData[label]?.length ?? 0).padStart(2, "0"),
      }));      
      
      const getStatusDot = (status: string) => {
        switch (status) {
          case "Tasks Completed":
            return "bg-green-500";
          case "Tasks Rejected":
            return "bg-red-500";
          case "Tasks In Progress":
            return "bg-amber-500";
          default:
            return "bg-gray-400";
        }
      };      

      const CountdownCard = ({
        value,
        label,
      }: {
        value: string;
        label: string;
      }) => (
        <div className="flex flex-col items-center bg-[#F7ECEC] rounded-md px-1 py-1 min-w-[34px]">
          <span className="text-sm font-mono font-semibold text-gray-800">
            {value}
          </span>
          <span className="text-[8px] uppercase tracking-wide text-gray-500">
            {label}
          </span>
        </div>
      );      
            

      const useCountdown = (deadline: string) => {
        const parseDDMMYYYY = (dateStr: string) => {
          const [day, month, year] = dateStr.split("-").map(Number);
          return new Date(year, month - 1, day, 23, 59, 59);
        };
      
        const getParts = () => {
          const now = Date.now();
          const end = parseDDMMYYYY(deadline).getTime();
          const diff = end - now;
      
          if (diff <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };
      
          const totalSeconds = Math.floor(diff / 1000);
          const days = Math.floor(totalSeconds / (3600 * 24));
          const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
          const minutes = Math.floor((totalSeconds % 3600) / 60);
          const seconds = totalSeconds % 60;
      
          const pad = (n: number) => String(n).padStart(2, "0");
      
          return { days: pad(days), hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds) };
        };
      
        const [countdown, setCountdown] = useState(getParts());
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCountdown(getParts());
          }, 1000);
      
          return () => clearInterval(interval);
        }, [deadline]);
      
        return countdown;
      };

      const TaskCountdown = ({ deadline }: { deadline: string }) => {
        const countdown = useCountdown(deadline);
        return (
          <div className="flex gap-1 mt-1 md:mt-0">
            <CountdownCard value={countdown.days} label="Days" />
            <CountdownCard value={countdown.hours} label="Hrs" />
            <CountdownCard value={countdown.minutes} label="Min" />
            <CountdownCard value={countdown.seconds} label="Sec" />
          </div>
        );
      };      
    
// State for task reports and files
const [taskTexts, setTaskTexts] = useState<{ [key: string]: string }>({});
const [taskFiles, setTaskFiles] = useState<{ [key: string]: File[] }>({});

// Handle text change
const handleTextChange = (status: string, index: number, value: string) => {
  const key = `${status}-${index}`;
  setTaskTexts((prev) => ({ ...prev, [key]: value }));
};

// Handle file upload
const handleFileChange = (status: string, index: number, files: FileList | null) => {
  if (!files) return;
  const key = `${status}-${index}`;
  setTaskFiles((prev) => ({ ...prev, [key]: Array.from(files) }));
};

const handleSubmitTask = async (task: any, index: number) => {
  const token = localStorage.getItem("token");

  const key = `${task.status}-${index}`;
  const text = taskTexts[key] ?? "";
  const files = taskFiles[key] ?? [];

  // Convert files to just names or upload them to server first
  // For simplicity, just send file names
  const fileNames = files.map((f) => f.name);

  const payload = {
    taskId: task.id,
    text,
    files: fileNames,
  };

  try {
    const res = await fetch("http://localhost:5000/tasks/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Failed to submit task");

    const data = await res.json();
    alert(data.message);
    fetchMyTasks(); // Refresh tasks after submission
  } catch (err: any) {
    alert(err.message);
  }
};
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0EBE9] to-white p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
        <img
                  src={Staff}
                  alt={"staff"}
                  className="w-20 h-20"
                  />
          <div>
            <h1 className="text-lg md:text-xl lg:text-[24px] font-normal">Staff Account</h1>
            <p className="text-sm text-[#838383]">{UserEmail}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
  {/* Bell */}
  <div onClick={() => navigate("/staff-announcement")} className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
          <Bell size={18} />
        </div>

        <div onClick={() => navigate("/staff")} className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
          <LogOut size={18} />
        </div>
</div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
          <motion.div
          key={stat.label}
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            setActiveStat(stat.label);
            setExpandedIndex(null);
          }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-[#F9F6F6] shadow-sm p-6 border border-white cursor-pointer hover:shadow-md transition"
          >
            <div className="flex gap-2 mb-2">
                <img
                  src={Task}
                  alt={stat.label}
                  className="w-6 h-6 cursor-pointer"
                  />
            <p className="text-sm lg:text-md">{stat.label}</p>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-[42px] mt-5 font-medium">
              {stat.value}
            </h2>
          </motion.div>
        ))}
      </div>

      {/* Tasks Section */}
      <h2 className="text-lg font-medium lg:text-3xl mb-4 mt-12">{activeStat}</h2>
      {derivedTaskData[activeStat].length === 0 && (
    <div className="flex flex-col items-center gap-4 mt-12">
        <img
            src={Task}
            alt="No tasks"
            className="w-16 h-16 opacity-50"
        />
        <p className="text-gray-500 text-sm">No tasks available</p>
        </div>
)}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {derivedTaskData[activeStat].map((task, index) => {

  return (
  <div key={index} className="rounded-xl bg-[#EAE2E2] shadow-sm p-6 border border-[#F8F8F8] hover:shadow-md transition">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
  {/* Left: Task title and dot */}
  <div className="flex gap-2 items-center">
    <img src={Task} alt="task icon" className="w-6 h-6" />
    <h3 className="font-normal">{task.title}</h3>
    <span className={`w-2.5 h-2.5 rounded-full ${getStatusDot(task.status)}`} />
  </div>

  {/* Right: Button + Countdown */}
  <div className="flex items-end gap-3 justify-end">
  {task.status === "Tasks In Progress" && task.deadline && (
  <TaskCountdown deadline={task.deadline} />
)}
      <button
        onClick={() =>
          setExpandedIndex(index === expandedIndex ? null : index)
        }
        className="bg-gradient-to-br from-[#FFE6E0] to-[#F2F2F2] px-4 py-2 rounded-lg shadow-lg text-sm font-medium hover:shadow-md transition"
      >
        {index === expandedIndex ? "Collapse" : "Expand"}
      </button>
  </div>
</div>


    <div className="border-t border-w-2 border-gray-300 mt-3 mb-3"/>

    <div className="bg-[#E6DCDC] p-3 rounded-lg">
    <h3 className="font-medium">Task Description</h3>
    <p className="text-sm mt-2">{task.description}</p>
    </div>

    <AnimatePresence>
      {expandedIndex === index && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden bg-[#E6DCDC] p-3 rounded-lg mt-4" 
        >
          {/* Submit Text */}
            <div className="mt-6">
            <h3 className="font-medium mb-2">
  {task.status === "Tasks In Progress" ? "Submit Report" : "Submitted Report"}
</h3>

<textarea
  placeholder="Write here..."
  value={taskTexts[`${task.status}-${index}`] ?? task.submission?.text ?? ""}
  readOnly={task.status !== "Tasks In Progress"}
  onChange={(e) => handleTextChange(task.status, index, e.target.value)}
  className="w-full rounded-xl bg-[#F7ECEC] p-4 text-sm focus:outline-none resize-none h-24 focus:h-30 transition-height duration-300"
/>
            </div>

            {task.status == "Tasks Rejected" && (
                <div>
            <div className="mt-3">
              <h3 className="font-medium mb-2 text-red-400">
                Rejection Reason
              </h3>

              <textarea
                placeholder="Rejection reason..."
                readOnly
                value={task.rejectionReason || ""}
                className="w-full rounded-xl bg-white/70 border border-red-400 p-4 text-sm focus:outline-none resize-none h-24"
              />
            </div>
  </div>
)} 

{task.status !== "Tasks In Progress" && task.submissionFiles && (
    <div className="mt-2">
    <h3 className="font-semibold">Submitted File</h3>
    <a
      href={task.submissionFiles}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      {task.submissionFiles.split("/").pop()} {/* shows filename */}
    </a>
      <h3 className="font-medium mb-2 mt-3 text-[13px]">Submitted: {task.submittedDate}</h3>
    </div>
  )} 

{task.status !== "Tasks Completed" && (
    <div>
            <div className="mt-4">
              <label className="flex items-center gap-2 border border-dashed border-gray-400 rounded-md p-2 text-sm text-gray-600 cursor-pointer hover:bg-gray-100 transition">
              <Upload size={18} />
    Upload Document
    <input
      type="file"
      multiple
      className="hidden"
      onChange={(e) => handleFileChange(task.status, index, e.target.files)}
    />
              </label>
            </div>

          {/* Actions */}
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <button className="w-full md:w-1/2 border border-[#DE6328] text-[#DE6328] rounded-xl py-3 font-medium hover:bg-orange-50 transition">
                Save as Draft
              </button>

              <button
    onClick={() => handleSubmitTask(task, index)}
    className="w-full md:w-1/2 bg-[#DE6328] text-white rounded-xl py-3 font-medium shadow-md hover:shadow-lg transition"
  >
    Mark as Completed
  </button>
            </div>
            </div>
)}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  );
})}

        </div>
    </div>
  );
}
