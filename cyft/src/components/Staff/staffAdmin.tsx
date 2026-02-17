import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { Bell, Plus, CheckCircle, XCircle, Users, LogOut } from "lucide-react";
import Task from "../../assets/Task.png";
import Staff from "../../assets/Logo2.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { LayoutDashboard, UsersRound } from "lucide-react";
import AssignTaskModal from "../popups/assignTask";
import TaskPage  from "./AdminTasksPage";

// const data = [
//   { day: "Mon 20", thisWeek: 3, lastWeek: 1 },
//   { day: "Tue 21", thisWeek: 2, lastWeek: 4 },
//   { day: "Wed 22", thisWeek: 8, lastWeek: 3 },
//   { day: "Thu 23", thisWeek: 3, lastWeek: 1 },
//   { day: "Fri 24", thisWeek: 1, lastWeek: 4 },
//   { day: "Sat 25", thisWeek: 2, lastWeek: 6 },
//   { day: "Sun 26", thisWeek: 5, lastWeek: 7 },
// ];

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

export type TaskStatus = "IN_PROGRESS" | "COMPLETED" | "REJECTED" | null;

export default function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  // Helper to get week number (0 = Sunday, 1 = Monday,...)
  const getWeekNumber = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear =
      (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };
  
  // Get current week and last week numbers
  const now = new Date();
  const thisWeekNum = getWeekNumber(now);
  const lastWeekNum = thisWeekNum - 1;
  
  // Initialize data
  const data = [
    { day: "Mon", thisWeek: 0, lastWeek: 0 },
    { day: "Tue", thisWeek: 0, lastWeek: 0 },
    { day: "Wed", thisWeek: 0, lastWeek: 0 },
    { day: "Thu", thisWeek: 0, lastWeek: 0 },
    { day: "Fri", thisWeek: 0, lastWeek: 0 },
    { day: "Sat", thisWeek: 0, lastWeek: 0 },
    { day: "Sun", thisWeek: 0, lastWeek: 0 },
  ];
  
  // Count tasks per day
  tasks.forEach((task: Task) => {
    const date = new Date(task.createdAt);
    const dayIndex = date.getDay(); // 0 = Sunday, 1 = Monday ...
    const weekNum = getWeekNumber(date);
  
    if (weekNum === thisWeekNum) {
      data[dayIndex === 0 ? 6 : dayIndex - 1].thisWeek += 1; // shift Sun to end
      data[dayIndex === 0 ? 6 : dayIndex - 1].day = `${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][dayIndex === 0 ? 6 : dayIndex - 1]} ${date.getDate()}`;
    } else if (weekNum === lastWeekNum) {
      data[dayIndex === 0 ? 6 : dayIndex - 1].lastWeek += 1;
    }
  });
  
  console.log(data);
  
  const isActive = (path: string) => location.pathname === path;
  const [activeStatus, setActiveStatus] = useState<
 "IN_PROGRESS" | "COMPLETED" | "REJECTED" | null
>(null);

  const baseClasses =
    "text-md flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200";

  const activeClasses =
    "font-medium bg-[#F6F6F6] border border-white shadow-sm";

  const inactiveClasses =
    "text-[#838383] bg-[#E6E5E5] hover:bg-[#dcdcdc]";

  return (
    <div className="min-h-screen bg-[#f3efed] p-4 md:p-8">
      {/* Header */}
      <div className="flex justify-center mb-3 px-4 py-2 gap-6">
            {/* Dashboard */}
      <button
        onClick={() => navigate("/admin-dashboard")}
        className={`${baseClasses} ${
          isActive("/admin-dashboard")
            ? activeClasses
            : inactiveClasses
        }`}
      >
        <LayoutDashboard size={16} />
        Dashboard
      </button>

      {/* Staff */}
      <button
        onClick={() => navigate("/admin-staff")}
        className={`${baseClasses} ${
          isActive("/admin-staff")
            ? activeClasses
            : inactiveClasses
        }`}
      >
        <UsersRound size={16} />
        Staff
      </button>
          </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
  <img
    src={Staff}
    alt="staff"
    className="w-10 h-10 object-contain"
  />
</div>
          <div>
            <h1 className="text-lg md:text-xl lg:text-[24px] font-normal">Cyft Admin</h1>
            <p className="text-sm text-[#838383]">info@cyftconsulting.com</p>
          </div>
        </div>

        <div className="flex items-center">
        <div onClick={() => navigate("/staff-announcement")} className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
          <Bell size={18} />
        </div>

        <div onClick={() => navigate("/staff")} className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
          <LogOut size={18} />
        </div>
        </div>

      </div>

      {/* Chart Card */}
      <div className="bg-[#f8f4f2] rounded-2xl shadow-md p-6 mb-10">
        <h3 className="text-lg lg:text-[24px] mb-6">
          Weekly Tasks Completed
        </h3>

        <div className="w-full h-[300px]">
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="thisWeek"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 4 }}
                name="This week"
              />
              <Line
                type="monotone"
                dataKey="lastWeek"
                stroke="#e879f9"
                strokeWidth={3}
                dot={{ r: 4 }}
                name="Last week"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Ongoing */}
        <StatCard
          icon={<Plus size={18} />}
          title="Ongoing Tasks"
          value={localStorage.getItem("ongoingCount") || "0"}
          status="IN_PROGRESS"
          onSelect={setActiveStatus}
          button="+ Add New"
        />

        {/* Completed */}
        <StatCard
          icon={<CheckCircle size={18} />}
          title="Completed Tasks"
          status="COMPLETED"
          onSelect={setActiveStatus}
          value={localStorage.getItem("completedCount") || "0"}
        />

        {/* Rejected */}
        <StatCard
          icon={<XCircle size={18} />}
          title="Rejected Tasks"
          status="REJECTED"
          onSelect={setActiveStatus}
          value={localStorage.getItem("rejectedCount") || "0"}
        />

        {/* Staff */}
        <StatCard
          icon={<Users size={18} />}
          status=""
          title="Total Number of Staffs"
          onSelect={() => {}}
          value={localStorage.getItem("staffCount") || "0"}
        />
      </div>
      <TaskPage status={activeStatus}/>
    </div>
  );
}

/* ---------- Reusable Stat Card ---------- */

function StatCard({
  title,
  value,
  button,
  status,
  onSelect
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  status: "IN_PROGRESS" | "COMPLETED" | "REJECTED" | "";
  onSelect: (status: "IN_PROGRESS" | "COMPLETED" | "REJECTED" | null) => void;
  button?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => status && onSelect(status)}
      className={`bg-white rounded-2xl shadow-md p-6 relative ${
        status ? "cursor-pointer hover:shadow-lg" : ""
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
      <img
                  src={Task}
                  alt="icon"
                  className="w-6 h-6 cursor-pointer"
                  />
        <h4 className="text-sm lg:text-md">{title}</h4>
      </div>

      <p className="text-2xl md:text-3xl lg:text-[42px] mt-5 font-medium">{value}</p>

      {button && (
        <button onClick={() => setOpen(true)} className="absolute top-6 right-6 text-sm bg-gradient-to-br from-[#FFE6E0] to-[#F2F2F2] px-3 py-1 rounded-lg shadow hover:shadow-md transition">
          {button}
        </button>
      )}
      <AssignTaskModal
  isOpen={open}
  onClose={() => setOpen(false)}
/>
    </div>
  );
}
