import { X, ChevronDown } from "lucide-react";
// import { useState } from "react";

interface AssignTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AssignTaskModal({
  isOpen,
  onClose,
}: AssignTaskModalProps) {
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     staff: "",
//     dueDate: "",
//     file: null,
//   });

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
        <div className="space-y-5 mt-20 mb-20">

          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

  {/* Email */}
  <input
            type="text"
            placeholder="Email"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Assign Staff */}
          <div className="relative">
            <select
              className="w-full border border-gray-200 rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Department</option>
              <option>Event Management</option>
              <option>Facility Management</option>
              <option>Human Capacity Development</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>


          {/* Assign Button */}
          <button className="w-full bg-[#E06222] hover:bg-orange-400 text-white font-medium py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg">
            ASSIGN
          </button>

        </div>
      </div>
    </div>
  );
}
