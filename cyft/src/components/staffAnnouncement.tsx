import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

type Notification = {
  id: number;
  title: string;
  message: string;
  createdBy: "admin" | "staff";
  creatorName?: string;
  createdAt: string;
  deliveredTo: string[];
  seenBy: { name: string; time: string }[];
};

export default function NotificationsPage() {
  const [active, setActive] = useState<Notification | null>(null);
  const [openCreate, setOpenCreate] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Training Schedule Updated",
      message:
        "The fire safety training has been rescheduled to Friday at 10 AM in the main conference hall.",
      createdBy: "admin",
      createdAt: "Today, 9:30 AM",
      deliveredTo: ["All Staff"],
      seenBy: [
        { name: "John Smith", time: "Today 9:45 AM" },
        { name: "Mary Ann", time: "Today 9:50 AM" },
      ],
    },
    {
      id: 2,
      title: "Event Setup Completed",
      message:
        "Stage and lighting setup for the annual summit is complete. Please verify all equipment is in working order.",
      createdBy: "staff",
      creatorName: "Tunde Bello",
      createdAt: "Yesterday, 4:10 PM",
      deliveredTo: ["All Staff", "Admin"],
      seenBy: [{ name: "Admin", time: "Yesterday 4:30 PM" }],
    },
    {
        id: 3,
        title: "Facility Maintenance Alert",
        message: "The air conditioning on the 3rd floor will be down for maintenance from 2 PM to 5 PM today. Plan accordingly.",
        createdBy: "admin",
        createdAt: "Today, 8:00 AM",
        deliveredTo: ["All Staff"],
        seenBy: [
          { name: "Tunde Bello", time: "02-12-2026 8:15 AM" },
          { name: "Seun Ogun", time: "02-12-2026 8:20 AM" },
        ],
      },
      {
        id: 4,
        title: "New Event Booking",
        message: "A new corporate client has booked the main hall for a workshop next Monday. Event team, please prepare the space.",
        createdBy: "staff",
        creatorName: "Mary Ann",
        createdAt: "02-10-2026, 2:30 PM",
        deliveredTo: ["All Staff", "Admin"],
        seenBy: [
          { name: "John Smith", time: "02-10-2026 2:45 PM" },
          { name: "Admin", time: "02-10-2026 3:00 PM" },
        ],
      },
      {
        id: 5,
        title: "Monthly Safety Drill",
        message: "Reminder: Monthly safety drill will be conducted this Thursday at 11 AM. Attendance is mandatory.",
        createdBy: "admin",
        createdAt: "02-07-2026, 7:00 AM",
        deliveredTo: ["All Staff"],
        seenBy: [
          { name: "Mary Ann", time: "02-07-2026 7:15 AM" },
          { name: "Tunde Bello", time: "02-07-2026 7:20 AM" },
        ],
      },
      {
        id: 6,
        title: "Training Material Uploaded",
        message: "New training materials for the Customer Service workshop have been uploaded to the internal portal.",
        createdBy: "staff",
        creatorName: "Seun Ogun",
        createdAt: "01-29-2026, 10:00 AM",
        deliveredTo: ["All Staff", "Admin"],
        seenBy: [
          { name: "Admin", time: "01-29-2026 10:15 AM" },
          { name: "Mary Ann", time: "01-29-2026 10:20 AM" },
          { name: "Tunde Bello", time: "01-30-2026 4:20 AM" },
          { name: "John Smith", time: "02-01-2026 4:45 PM" },
        ],
      },
    ]);

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [role, setRole] = useState<"admin" | "staff">("admin");

    const handleSend = () => {
        if (!title || !message) return;
    
        const newNotification: Notification = {
          id: Date.now(), // simple unique id
          title,
          message,
          createdBy: role,
          creatorName: role === "staff" ? "You" : undefined,
          createdAt: "Just now",
          deliveredTo: ["All Staff", "Admin"], // customize if needed
          seenBy: [],
        };
    
        // Add to top of array
        setNotifications((prev) => [newNotification, ...prev]);
        setOpenCreate(false);
    
        // Reset form
        setTitle("");
        setMessage("");
      };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0EBE9] to-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
      <ArrowLeft
      onClick={() => window.history.back()}
      className="w-5 h-5 text-gray-600 cursor-pointer" />
        <h1 className="text-2xl font-bold">Announcements</h1>
        </div>

        <button
          onClick={() => setOpenCreate(true)}
          className="bg-[#DE6328] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90"
        >
          Create Announcement
        </button>
      </div>

      {/* Notification List */}
      <div className="space-y-3">
        {notifications.map((n) => (
          <button
            key={n.id}
            onClick={() => setActive(n)}
            className={`w-full text-left bg-white shadow-sm p-2 rounded-lg border border-[#F9F6F6] transition hover:shadow-sm
              ${
                n.createdBy === "admin"
                  ? "border-[#DE6328]/30"
                  : "border-gray-200"
              }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{n.title}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {n.message}
                </p>
              </div>

              <span
                className={`text-xs font-medium px-2 py-1 rounded-full
                  ${
                    n.createdBy === "admin"
                      ? "bg-[#DE6328]/10 text-[#DE6328]"
                      : "bg-gray-50 text-gray-600"
                  }`}
              >
                {n.createdBy === "admin"
                  ? "Admin"
                  : n.creatorName ?? "Staff"}
              </span>
            </div>

            <p className="text-xs text-gray-400 mt-2">{n.createdAt}</p>
          </button>
        ))}
      </div>

      {/* Details Drawer */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-xl p-6 z-50"
          >
            <button
              onClick={() => setActive(null)}
              className="text-sm text-gray-500 hover:text-[#DE6328]"
            >
              Close
            </button>

            <h2 className="mt-4 text-xl font-semibold">{active.title}</h2>
            <p className="mt-2 text-gray-600">{active.message}</p>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="font-medium text-gray-700">Created By</p>
                <p className="text-gray-600">
                  {active.createdBy === "admin"
                    ? "Admin"
                    : active.creatorName}
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-700">Delivered To</p>
                <p className="text-gray-600">
                  {active.deliveredTo.join(", ")}
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-700">Seen By</p>
                <ul className="mt-2 space-y-1">
                  {active.seenBy.map((s, i) => (
                    <li
                      key={i}
                      className="flex justify-between text-gray-600"
                    >
                      <span>{s.name}</span>
                      <span className="text-xs text-gray-400">{s.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Create Notification Modal */}
      <AnimatePresence>
        {openCreate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-[#F0EBE9] rounded-xl p-6 w-full max-w-md"
            >
              <h3 className="text-lg font-semibold mb-4">
                Create Announcement
              </h3>

              <div className="space-y-4">
                <input
          type="text"
          placeholder="Announcement Title"
          className="w-full p-3 rounded-md border mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
               <textarea
          placeholder="Announcement Message"
          className="w-full p-3 rounded-md border mb-3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <select
          className="w-full p-3 rounded-md border mb-3"
          value={role}
          onChange={(e) => setRole(e.target.value as "admin" | "staff")}
        >
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
        </select>
<button
          onClick={handleSend}
          className="w-full bg-[#DE6328] text-white py-2 rounded-md font-medium"
        >
          Send Announcement
        </button>

                <button
                  onClick={() => setOpenCreate(false)}
                  className="w-full text-sm text-gray-600"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
