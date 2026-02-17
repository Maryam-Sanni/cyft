import { X } from "lucide-react";
import type { Task } from "../Staff/staffAdmin";
import { useState } from "react";

interface Props {
  task: Task | null;
  onClose: () => void;
  fetchAllTasks: () => void;
}

export default function TaskDetailsModal({ task, onClose, fetchAllTasks }: Props) {
  if (!task) return null;

  const handleAccept = async (taskId: string, submissionId: string) => {
    const token = localStorage.getItem("token"); // Admin JWT
  
    try {
      const res = await fetch("http://localhost:5000/tasks/accept", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ taskId, submissionId }),
      });
  
      if (!res.ok) throw new Error("Failed to accept task");
  
      const data = await res.json();
      alert(data.message); // "Task accepted"
      
      // Optionally refresh the tasks list
      fetchAllTasks();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const [rejectTask, setRejectTask] = useState(false);
  const [reason, setReason] = useState("");
  const handleReject = async (taskId: string, submissionId: string) => {
    setRejectTask(true);
  if (!reason) {
      alert("Please provide a reason for rejection");
      return;
    }

    const token = localStorage.getItem("token"); // Admin JWT
  
    try {
      const res = await fetch("http://localhost:5000/tasks/reject", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ taskId, submissionId, reason }),
      });
  
      if (!res.ok) throw new Error("Failed to reject task");
  
      const data = await res.json();
      alert(data.message); // "Task rejected"
  
      // Optionally refresh the tasks list
      setRejectTask(false);
      fetchAllTasks();
    } catch (err: any) {
      alert(err.message);
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg relative">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold capitalize">
            {task.status} Task
          </h2>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border flex items-center justify-center"
          >
            <X size={16} />
          </button>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">{task.title}</h3>

          <p className="text-gray-600">{task.description}</p>

          {task.reviewStatus === "PENDING" && (
            <div>
          <h2 className="font-semibold">
            Submitted Report
          </h2>
          <p className="text-gray-600">{task.submissionText}</p>

          </div>
          )}

{task.submissionFiles && (
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
    </div>
  )} 

<p className="text-sm text-gray-500">
            Assigned to: {task.staffName}
          </p>
          <p className="text-sm text-gray-500">
            Assigned date: {task.createdAt}
          </p>
        </div>

        {task.status === "REJECTED" || rejectTask && (
        <textarea
                placeholder="Rejection reason..."
                readOnly
                value={task.rejectionReason || ""}
                onChange={(e) => setReason(e.target.value)}
                className="w-full rounded-xl bg-white/70 border border-red-400 p-4 text-sm focus:outline-none resize-none h-24"
              />
        )}

        {/* Conditional Buttons */}
        {task.reviewStatus === "PENDING" && (
          <div className="flex gap-4 mt-8">
            <button onClick={() => handleReject(task.id, task.submissionId)} className="flex-1 border border-orange-500 text-orange-500 rounded-full py-2 hover:bg-orange-50 transition">
              RETURN TASK
            </button>

            <button onClick={() => handleAccept(task.id, task.submissionId)} className="flex-1 bg-orange-500 text-white rounded-full py-2 hover:bg-orange-400 transition">
            MARK AS FINISHED
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
