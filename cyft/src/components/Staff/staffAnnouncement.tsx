import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { useEffect } from "react";
import logo from "../../assets/Logo2.png"

type Notification = {
  id: number;
  title: string;
  message: string;
  createdBy: "ADMIN" | "STAFF";
  CreatorId: string;
  creatorName?: string;
  createdAt: string;
  seenBy: { name: string; time: string }[];
};

export default function NotificationsPage() {
  const [openCreate, setOpenCreate] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const API_URL = import.meta.env.VITE_API_URL

    const headers = () => ({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    });
  
    // Fetch announcements
    const fetchAnnouncements = async () => {
      const res = await fetch(`${API_URL}/announcements`, { headers: headers() });
      if (!res.ok) throw new Error("Failed to fetch announcements");
      return res.json();
    };
  
    // Create announcement
    const createAnnouncement = async (title?: string, description?: string) => {
      const res = await fetch(`${API_URL}/announcements`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ title, description }),
      });
      if (!res.ok) throw new Error("Failed to create announcement");
      return res.json();
    };
  
    // Mark as seen
    const markSeen = async (id: number) => {
      const res = await fetch(`${API_URL}/announcements/${id}/seen`, {
        method: "POST",
        headers: headers(),
      });
      if (!res.ok) throw new Error("Failed to mark announcement as seen");
    };
  
    // Load & format announcements
    const loadAnnouncements = async () => {
      try {
        const data = await fetchAnnouncements();
        const formatted = data.map((a: any) => ({
          id: a.id,
          title: a.title ?? "No title",
          message: a.description ?? "",
          CreatorId: a.createdBy,
          createdBy: a.createdByRole,
          creatorName: a.creatorName,
          createdAt: new Date(a.createdAt).toLocaleString(),
          seenBy: a.seenBy.map((s: any) => ({
            name: s.name,
            time: new Date(s.seenAt).toLocaleString(),
          })),
        }));
        setNotifications(formatted);
      } catch (err) {
        console.error(err);
      }
    };
  
    useEffect(() => {
      loadAnnouncements();
    }, []);
  
    // Open an announcement
    const openAnnouncement = async (n: Notification) => {
      setOpenId(n.id);
      await markSeen(n.id);
      loadAnnouncements();
    };
  
    // Send a new announcement
    const handleSend = async () => {
      if (!title && !message) return;
      await createAnnouncement(title, message);
      setOpenCreate(false);
      setTitle("");
      setMessage("");
      loadAnnouncements();
    };
     
const [openId, setOpenId] = useState<number | null>(null);

      const handleDelete = async (id: number) => {
        if (!confirm("Delete this announcement?")) return;
      
        await fetch(`${API_URL}/announcements/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      
        setNotifications((prev) => prev.filter((n) => n.id !== id));
        setOpenId(null);
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
  className="bg-[#DE6328] text-white rounded-full text-3xl font-medium hover:opacity-90 w-10 h-10 pt-1 flex items-center justify-center"
>
  +
</button>
      </div>

{notifications.length === 0 && (
  <div className="text-center text-gray-500 mt-20">
    No announcements yet
    </div>
   ) }

      {/* Notification List */}
      <div className="space-y-2">
      {notifications.map((n) => {
  // Toggle open state
  const isOpen = openId === n.id;
  const currentUserId = localStorage.getItem("id");

  const canDelete = currentUserId === n.CreatorId;

  const handleToggle = async () => {
    if (!isOpen) {
      // Only mark seen when opening
      await openAnnouncement(n);
    } else {
      setOpenId(null); // close
    }
  };

  return (
    <div
      key={n.id}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden"
    >
      {/* Header */}
      <button
        onClick={handleToggle}
        className="w-full flex items-start gap-3 p-4 text-left hover:bg-gray-50"
      >
        {n.createdBy === "ADMIN" ? (
        <img
          src={logo}
          alt="Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      ) : (
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
          {n.creatorName ? n.creatorName[0] : "S"}
        </div>
      )}

        <div className="flex-1">

          <p className="text-sm text-gray-600 line-clamp-2 mt-1">{n.title}</p>
          <p className="text-md text-gray-800">{n.message}</p>

          <p className="text-sm text-gray-400 mt-2">{n.createdAt}</p>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="px-4 pb-4"
          >
            {/* Seen By */}
            <div className="mt-4">
            <p className="text-sm font-medium text-gray-500 mb-2">Created by</p>
            <p className="text-sm font-medium text-gray-900">
            {n.createdBy === "ADMIN" ? "Admin" : n.creatorName}
          </p>
          </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500 mb-2">Seen by</p>

              {n.seenBy.length === 0 ? (
                <p className="text-xs text-gray-400">No views yet</p>
              ) : (
                <ul className="space-y-1">
                  {n.seenBy.map((s, i) => (
                    <li
                      key={i}
                      className="flex justify-between text-sm text-gray-600"
                    >
                      <span>{s.name || "Admin"}</span>
                      <span className="text-gray-400">{s.time}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Actions */}
            {canDelete && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => handleDelete(n.id)}
                  className="text-xs text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
})}

</div>


      {/* Create Notification Modal */}
      <AnimatePresence>
        {openCreate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          >

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 relative animate-scaleIn"
            >
                          <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Create Announcement</h2>
          <button
            onClick={() => setOpenCreate(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            <X size={16} />
          </button>
        </div>

              <div className="space-y-4 mt-20 mb-20">
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
<button
          onClick={handleSend}
          className="mt-6 w-full bg-[#E06222] hover:bg-orange-400 text-white font-medium py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Send Announcement
        </button>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}