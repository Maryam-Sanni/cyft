import { tasks } from "./staffAdmin";
import type { Task } from "../Staff/staffAdmin";
import { useState } from "react";
import TaskDetailsModal from "../popups/TaskDetailsModal";

export default function AdminTasksPage({
    status,
  }: {
    status: "ongoing" | "completed" | "rejected" | null;
  }) {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  
    // 👇 show nothing if no status selected
    if (!status) return null;
  
    const filteredTasks = tasks.filter(
      (task) => task.status === status
    );
  
    const pageTitle =
      status === "ongoing"
        ? "Ongoing Tasks"
        : status === "completed"
        ? "Completed Tasks"
        : "Rejected Tasks";
  
    return (
      <div className="bg-[#f3efed]">
        <h1 className="text-2xl font-medium mt-15 mb-4">{pageTitle}</h1>
  
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#f8f4f2]">
              <tr>
                <th className="p-4">Task Title</th>
                <th className="p-4">Description</th>
                <th className="p-4">Assigned To</th>
                <th className="p-4">Assigned Date</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
  
            <tbody>
              {filteredTasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium">{task.title}</td>
                  <td className="p-4 text-gray-600">
                    {task.description.slice(0, 40)}...
                  </td>
                  <td className="p-4">{task.assignedTo}</td>
                  <td className="p-4">{task.assignedDate}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => setSelectedTask(task)}
                      className=" bg-gradient-to-br from-[#FFE6E0] to-[#F2F2F2] px-4 py-1 rounded-full text-sm hover:bg-orange-600 transition"
                    >
                      Open
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <TaskDetailsModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
        />
      </div>
    );
  }
  
