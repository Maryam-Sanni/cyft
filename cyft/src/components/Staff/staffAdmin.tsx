import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { Bell, Plus, CheckCircle, XCircle, Users, LogOut } from "lucide-react";
import Task from "../../assets/Task.png";
import Staff from "../../assets/Logo2.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { LayoutDashboard, UsersRound } from "lucide-react";
import AssignTaskModal from "../popups/assignTask";
import TaskPage  from "./AdminTasksPage";

const data = [
  { day: "Mon 20", thisWeek: 3, lastWeek: 1 },
  { day: "Tue 21", thisWeek: 2, lastWeek: 4 },
  { day: "Wed 22", thisWeek: 8, lastWeek: 3 },
  { day: "Thu 23", thisWeek: 3, lastWeek: 1 },
  { day: "Fri 24", thisWeek: 1, lastWeek: 4 },
  { day: "Sat 25", thisWeek: 2, lastWeek: 6 },
  { day: "Sun 26", thisWeek: 5, lastWeek: 7 },
];

export type TaskStatus = "ongoing" | "completed" | "rejected";

export interface Task {
  id: number;
  title: string;
  description: string;
  assignedTo: string;
  assignedDate: string;
  status: TaskStatus;
  submittedReport?: string;
}

export const tasks: Task[] = [
  // 🔵 ONGOING TASKS
  {
    id: 1,
    title: "Prepare Q2 Event Budget",
    description:
      "Prepare a detailed financial breakdown for the Q2 corporate event including venue, logistics, marketing, and contingency costs.",
    assignedTo: "Chinedu Okafor",
    assignedDate: "05-03-2025",
    status: "ongoing",
  },
  {
    id: 2,
    title: "Venue Inspection – Lekki",
    description:
      "Visit the Lekki event center to inspect facilities, confirm hall capacity, parking availability, and safety compliance.",
    assignedTo: "Aisha Bello",
    assignedDate: "06-03-2025",
    status: "ongoing",
  },
  {
    id: 3,
    title: "Design Event Flyer",
    description:
      "Create a promotional flyer design for the Annual Business Summit including sponsor logos and speaker highlights.",
    assignedTo: "Tolu Adeyemi",
    assignedDate: "07-03-2025",
    status: "ongoing",
  },

  // 🟢 COMPLETED TASKS
  {
    id: 4,
    title: "Contact Zenith Bank",
    description:
      "Reach out to Zenith Bank concerning their exhibition booth requirements and provide a cost breakdown.",
    assignedTo: "David Smith",
    assignedDate: "28-02-2025",
    status: "completed",
    submittedReport:
      "Client has agreed to the proposed cost structure. Awaiting final written approval. Invoice drafted and attached.",
  },
  {
    id: 5,
    title: "Confirm Catering Services",
    description:
      "Finalize catering menu selection and confirm service timeline with approved vendor.",
    assignedTo: "Ifeoma Nwosu",
    assignedDate: "25-02-2025",
    status: "completed",
    submittedReport:
      "Menu approved by management. Vendor confirmed availability. Deposit payment completed.",
  },
  {
    id: 6,
    title: "Secure Media Partnership",
    description:
      "Negotiate media partnership deal with Lagos Business Radio for event publicity coverage.",
    assignedTo: "Emeka Obi",
    assignedDate: "24-02-2025",
    status: "completed",
    submittedReport:
      "Media partner confirmed. Promotional slots scheduled for two weeks before event.",
  },

  // 🔴 REJECTED TASKS
  {
    id: 7,
    title: "Draft Sponsorship Proposal",
    description:
      "Prepare sponsorship proposal document outlining partnership tiers and associated benefits.",
    assignedTo: "Fatima Yusuf",
    assignedDate: "01-03-2025",
    status: "rejected",
    submittedReport:
      "Proposal drafted but requires additional financial projections and sponsor visibility metrics.",
  },
  {
    id: 8,
    title: "Book Guest Speaker Flights",
    description:
      "Arrange travel bookings for keynote speakers arriving from Abuja and Port Harcourt.",
    assignedTo: "Samuel Adekunle",
    assignedDate: "02-03-2025",
    status: "rejected",
    submittedReport:
      "Flight options provided but pricing exceeded allocated travel budget.",
  },
  {
    id: 9,
    title: "Set Up Event Registration Page",
    description:
      "Develop and deploy an online registration page with payment integration and confirmation emails.",
    assignedTo: "Blessing Eze",
    assignedDate: "03-03-2025",
    status: "rejected",
    submittedReport:
      "Page deployed successfully but payment gateway integration failed during testing.",
  },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [activeStatus, setActiveStatus] = useState<
  "ongoing" | "completed" | "rejected" | null
>(null);

  const baseClasses =
    "text-md flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200";

  const activeClasses =
    "font-medium bg-[#F6F6F6] border border-white shadow-sm";

  const inactiveClasses =
    "text-[#838383] bg-[#E6E5E5] hover:bg-[#dcdcdc]";

  return (
    <div className="min-h-screen bg-[#f3efed] p-4 md:p-8">
      {/* Header */}
      <div className="flex justify-center mb-3 px-4 py-2 gap-6">
            {/* Dashboard */}
      <button
        onClick={() => navigate("/admin-dashboard")}
        className={`${baseClasses} ${
          isActive("/admin-dashboard")
            ? activeClasses
            : inactiveClasses
        }`}
      >
        <LayoutDashboard size={16} />
        Dashboard
      </button>

      {/* Staff */}
      <button
        onClick={() => navigate("/admin-staff")}
        className={`${baseClasses} ${
          isActive("/admin-staff")
            ? activeClasses
            : inactiveClasses
        }`}
      >
        <UsersRound size={16} />
        Staff
      </button>
          </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
  <img
    src={Staff}
    alt="staff"
    className="w-10 h-10 object-contain"
  />
</div>
          <div>
            <h1 className="text-lg md:text-xl lg:text-[24px] font-normal">Cyft Admin</h1>
            <p className="text-sm text-[#838383]">info@cyftconsulting.com</p>
          </div>
        </div>

        <div className="flex items-center">
        <div onClick={() => navigate("/staff-announcement")} className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
          <Bell size={18} />
        </div>

        <div onClick={() => navigate("/staff")} className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
          <LogOut size={18} />
        </div>
        </div>

      </div>

      {/* Chart Card */}
      <div className="bg-[#f8f4f2] rounded-2xl shadow-md p-6 mb-10">
        <h3 className="text-lg lg:text-[24px] mb-6">
          Weekly Tasks Completed
        </h3>

        <div className="w-full h-[300px]">
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="thisWeek"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 4 }}
                name="This week"
              />
              <Line
                type="monotone"
                dataKey="lastWeek"
                stroke="#e879f9"
                strokeWidth={3}
                dot={{ r: 4 }}
                name="Last week"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Ongoing */}
        <StatCard
          icon={<Plus size={18} />}
          title="Ongoing Tasks"
          value="07"
          status="ongoing"
          onSelect={setActiveStatus}
          button="+ Add New"
        />

        {/* Completed */}
        <StatCard
          icon={<CheckCircle size={18} />}
          title="Completed Tasks"
          status="completed"
          onSelect={setActiveStatus}
          value="02"
        />

        {/* Rejected */}
        <StatCard
          icon={<XCircle size={18} />}
          title="Rejected Tasks"
          status="rejected"
          onSelect={setActiveStatus}
          value="05"
        />

        {/* Staff */}
        <StatCard
          icon={<Users size={18} />}
          status=""
          title="Total Number of Staffs"
          onSelect={() => {}}
          value="24"
        />
      </div>
      <TaskPage status={activeStatus}/>
    </div>
  );
}

/* ---------- Reusable Stat Card ---------- */

function StatCard({
  title,
  value,
  button,
  status,
  onSelect
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  status: "ongoing" | "completed" | "rejected" | "";
  onSelect: (status: "ongoing" | "completed" | "rejected") => void;
  button?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => status && onSelect(status)}
      className={`bg-white rounded-2xl shadow-md p-6 relative ${
        status ? "cursor-pointer hover:shadow-lg" : ""
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
      <img
                  src={Task}
                  alt="icon"
                  className="w-6 h-6 cursor-pointer"
                  />
        <h4 className="text-sm lg:text-md">{title}</h4>
      </div>

      <p className="text-2xl md:text-3xl lg:text-[42px] mt-5 font-medium">{value}</p>

      {button && (
        <button onClick={() => setOpen(true)} className="absolute top-6 right-6 text-sm bg-gradient-to-br from-[#FFE6E0] to-[#F2F2F2] px-3 py-1 rounded-lg shadow hover:shadow-md transition">
          {button}
        </button>
      )}
      <AssignTaskModal
  isOpen={open}
  onClose={() => setOpen(false)}
/>
    </div>
  );
}
