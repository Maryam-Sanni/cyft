import { X, Upload, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

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

export default function AssignTaskModal({
  isOpen,
  onClose,
}: AssignTaskModalProps) {
  const [staffData, setStaffData] = useState<Staff[]>([]);
  const [selectedStaff, setSelectedStaff] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  
useEffect(() => {
  const fetchStaff = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:5000/staff", {
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
    await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description, assignedTo: selectedStaff, deadline }),
    });
    alert("Task created!");
  } catch (err) {
    alert("Error creating task");
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
        <div className="space-y-5">

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

          {/* File Upload */}
          <label className="flex items-center gap-3 border border-dashed border-gray-300 rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-50 transition">
            <Upload size={16} />
            <span className="text-sm text-gray-600">Add File</span>
            <input type="file" className="hidden" />
          </label>

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
