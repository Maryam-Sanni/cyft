import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

interface AssignTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStaffCreated?: () => void; // callback to refresh staff list
}

const API_URL = import.meta.env.VITE_API_URL

export default function AssignTaskModal({
  isOpen,
  onClose,
  onStaffCreated,
}: AssignTaskModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tempPassword, setTempPassword] = useState("");

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTempPassword("");

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/staff`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to create staff");
      }

      const data = await res.json();
      setTempPassword(data.tempPassword);
      setForm({ name: "", email: "", department: "" });

      // Optional: Refresh staff list in parent
      if (onStaffCreated) onStaffCreated();
      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
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
        <form onSubmit={handleSubmit} className="space-y-5 mt-20 mb-20">

          {/* Name */}
          <input
    type="text"
    name="name"
    placeholder="Name"
    value={form.name}
    onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

  {/* Email */}
  <input
    type="email"
    name="email"
    placeholder="Email"
    value={form.email}
    onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Assign Staff */}
          <div className="relative">
            <select
                          name="department"
                          value={form.department}
                          onChange={handleChange}
                          required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select Department</option>
              <option value="Event Management">Event Management</option>
              <option value="Facility Management">Facility Management</option>
              <option value="Human Capacity Development">Human Capacity Development</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Success Message */}
          {tempPassword && (
            <p className="text-green-600">
              Staff created! Temporary password: <b>{tempPassword}</b>
            </p>
          )}

          {/* Assign Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E06222] hover:bg-orange-400 text-white font-medium py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {loading ? "Creating..." : "CREATE STAFF"}
          </button>

        </form>
      </div>
    </div>
  );
}
