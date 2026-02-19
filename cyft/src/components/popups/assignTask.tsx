import { X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface AssignTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Staff {
  id: string;
  name: string;
  email: string;
  department: string;
}

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
  staffname: string;
  createdat: string
  submissionfiles: string;
  submissionid: string;
  submissiontext?: string;
  rejectionreason?: string;
  reviewstatus?: "PENDING" | "APPROVED" | "REJECTED";
}

const API_URL = import.meta.env.VITE_API_URL

export default function AssignTaskModal({
  isOpen,
  onClose,
}: AssignTaskModalProps) {
  const [staffData, setStaffData] = useState<Staff[]>([]);
  const [selectedStaff, setSelectedStaff] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchAllTasks = async () => {
       const token = localStorage.getItem("token");
     
       const res = await fetch(`${API_URL}/tasks/all`, {
         headers: { Authorization: `Bearer ${token}` }
       });
     
       if (!res.ok) throw new Error("Failed to fetch tasks");
     
       const data = await res.json();
       setTasks(data); // tasks = state in your component
       localStorage.setItem("tasks", JSON.stringify(data)); 
     };
   
 const ongoing = tasks.filter(t => t.status === "IN_PROGRESS");
 localStorage.setItem("ongoingCount", ongoing.length.toString());
 const completed = tasks.filter(t => t.status === "COMPLETED");
 localStorage.setItem("completedCount", completed.length.toString());
 const rejected = tasks.filter(t => t.status === "REJECTED");
 localStorage.setItem("rejectedCount", rejected.length.toString());
  
useEffect(() => {
  const fetchStaff = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}/staff`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data: Staff[] = await res.json();
    setStaffData(data);
    localStorage.setItem("staffCount", data.length.toString()); 
  };

  fetchStaff();
}, []);

const handleCreateTask = async () => {
  try {
    const token = localStorage.getItem("token");
    await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description, assignedTo: selectedStaff, deadline }),
    });
    toast.success("Task created!");
    onClose();
    fetchAllTasks();
  } catch (err) {
    toast.error("Error creating task");
  }
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      
      {/* Modal Card */}
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 relative animate-scaleIn">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Assign New Task</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            <X size={16} />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-5 mt-10 mb-10">

          {/* Task Title */}
          <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Task Description */}
          <textarea
            rows={4}
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Assign Staff */}
          <div className="relative">
          <select
  value={selectedStaff}
  onChange={(e) => setSelectedStaff(e.target.value)}
  className="w-full border border-gray-200 rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400"
>
  <option value="">Assign Staff</option>

  {staffData.map((staff) => (
    <option key={staff.id} value={staff.id}>
      {staff.name} ({staff.department})
    </option>
  ))}
</select>
            <ChevronDown
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>

          {/* Due Date */}
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Assign Button */}
          <button onClick={handleCreateTask} className="w-full bg-[#E06222] hover:bg-orange-400 text-white font-medium py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg">
            ASSIGN
          </button>

        </div>
      </div>
    </div>
  );
}
