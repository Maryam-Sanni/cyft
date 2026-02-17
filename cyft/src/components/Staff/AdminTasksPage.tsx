import type { Task } from "../Staff/staffAdmin";
import { useState, useEffect } from "react";
import TaskDetailsModal from "../popups/TaskDetailsModal";

export default function AdminTasksPage({
    status,
  }: {
    status: "IN_PROGRESS" | "COMPLETED" | "REJECTED" | null;
  }) {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [tasks, setTasks] = useState<Task[]>([]);

    const fetchAllTasks = async () => {
      const token = localStorage.getItem("token");
    
      const res = await fetch("http://localhost:5000/tasks/all", {
        headers: { Authorization: `Bearer ${token}` }
      });
    
      if (!res.ok) throw new Error("Failed to fetch tasks");
    
      const data = await res.json();
      setTasks(data); // tasks = state in your component
      localStorage.setItem("tasks", JSON.stringify(data)); 
    };
    
  useEffect(() => {
    fetchAllTasks();
}, []);
  
const ongoing = tasks.filter(t => t.status === "IN_PROGRESS");
localStorage.setItem("ongoingCount", ongoing.length.toString());
const completed = tasks.filter(t => t.status === "COMPLETED");
localStorage.setItem("completedCount", completed.length.toString());
const rejected = tasks.filter(t => t.status === "REJECTED");
localStorage.setItem("rejectedCount", rejected.length.toString());

    // 👇 show nothing if no status selected
    if (!status) return null;
  
    const filteredTasks = tasks.filter(
      (task) => task.status === status
    );
  
    const pageTitle =
      status === "IN_PROGRESS"
        ? "Ongoing Tasks"
        : status === "COMPLETED"
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
                  <td className="p-4">{task.staffName}</td>
                  <td className="p-4">{task.createdAt}</td>
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
          fetchAllTasks={fetchAllTasks}
          onClose={() => setSelectedTask(null)}
        />
      </div>
    );
  }
  
