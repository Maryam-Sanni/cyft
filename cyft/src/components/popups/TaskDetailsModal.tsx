import { X } from "lucide-react";
import type { Task } from "../Staff/staffAdmin";

interface Props {
  task: Task | null;
  onClose: () => void;
}

export default function TaskDetailsModal({ task, onClose }: Props) {
  if (!task) return null;

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

          {task.status === "completed" && (
            <div>
          <h2 className="font-semibold">
            Submitted Report
          </h2>
          <p className="text-gray-600">{task.submittedReport}</p>

          </div>
          )}


<p className="text-sm text-gray-500">
            Assigned to: {task.assignedTo}
          </p>
          <p className="text-sm text-gray-500">
            Assigned date: {task.assignedDate}
          </p>
        </div>

        {/* Conditional Buttons */}
        {task.status !== "ongoing" && (
          <div className="flex gap-4 mt-8">
            <button className="flex-1 border border-orange-500 text-orange-500 rounded-full py-2 hover:bg-orange-50 transition">
              RETURN TASK
            </button>

            <button className="flex-1 bg-orange-500 text-white rounded-full py-2 hover:bg-orange-600 transition">
              {task.status === "rejected"
                ? "REVIEW AS FINISHED"
                : "MARK AS FINISHED"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
