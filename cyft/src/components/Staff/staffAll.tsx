import { useEffect, useState } from "react";
import {
  Bell,
  Search,
  Plus,
  Trash2,
  LogOut,
} from "lucide-react";
import Staff from "../../assets/Logo2.png";
import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, UsersRound } from "lucide-react";
import AddStaff from "../popups/AddStaff";

interface Staff {
  id: string;
  email: string;
  name: string;
  department: string;
  isActive: boolean;
  dateCreated: string;
}

const tabs = [
  "All Staff",
  "Event Management",
  "Facility Management",
  "Human Capacity Development",
];

export default function StaffPage() {
  const [activeTab, setActiveTab] = useState("All Staff");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;
  const [staffData, setStaffData] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaff = async () => {
      const token = localStorage.getItem("token"); // Admin JWT
      try {
        const res = await fetch("http://localhost:5000/staff", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch staff");
        }

        const data: Staff[] = await res.json();
        setStaffData(data);
      } catch (err: any) {
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  const handleDelete = async (staffId: string, staffEmail: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this staff?");
    if (!confirmDelete) return;
  
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/staff/${staffId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id: staffId, email: staffEmail }), // <-- send email too
      });
  
      if (!res.ok) throw new Error("Failed to delete staff");
  
      alert("Staff deleted successfully!");
      setStaffData(prev => prev.filter(staff => staff.id !== staffId));
    } catch (err: any) {
      alert(err.message);
    }
  };
  
  
  if (loading) return <p>Loading staff...</p>;

  const baseClasses =
    "text-md flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200";

  const activeClasses =
    "font-medium bg-[#F6F6F6] border border-white shadow-sm";

  const inactiveClasses =
    "text-[#838383] bg-[#E6E5E5] hover:bg-[#dcdcdc]";

  const filteredStaff =
    activeTab === "All Staff"
      ? staffData
      : staffData?.filter(
          (staff) => staff.department === activeTab
        );

        const searchedStaff = filteredStaff.filter((staff) =>
          (staff.name?.toLowerCase() || staff.email.toLowerCase()).includes(search.toLowerCase())
        );        

// Get initials safely
function getInitials(name: string | null) {
  if (!name) return "??"; // fallback for null/empty
  const names = name.split(" ");
  if (names.length === 1) return names[0][0].toUpperCase();
  return (names[0][0] + names[1][0]).toUpperCase();
}

// Get avatar color safely
function getAvatarColor(name: string | null) {
  const colors = [
    "bg-orange-200 text-orange-700",
    "bg-blue-200 text-blue-700",
    "bg-green-200 text-green-700",
    "bg-purple-200 text-purple-700",
    "bg-pink-200 text-pink-700",
  ];

  if (!name || name.length === 0) return colors[0]; // fallback color

  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
}
  
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

      {/* Search + Add */}
      <div className="flex flex-col md:flex-row align-right items-right mb-6 gap-4 justify-end mt-5">
        <div className="relative w-full md:w-1/3">
          <Search
            size={14}
            className="absolute left-3 top-3 text-black"
          />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FFF1EE]/50 shadow focus:outline-none transition"
          />
        </div>

        <button onClick={() => setOpen(true)} className="flex items-center gap-2 bg-gradient-to-br from-[#FFE6E0] to-[#F2F2F2] text-sm shadow px-4 py-2 rounded-xl hover:shadow-md transition">
          <Plus size={14} />
          Add New Staff
        </button>
      </div>

      {/* Card Container */}
      <div className="bg-[#f8f4f2] rounded-2xl shadow-md p-6">
        {/* Tabs */}
        <div className="flex gap-8 border-b border-gray-300 pb-4 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-md whitespace-nowrap pb-2 ${
                activeTab === tab
                  ? "border-b-2 border-orange-500 font-medium"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b text-[18px]">
                <th className="pb-3">Names</th>
                <th className="pb-3">Department</th>
                <th className="pb-3">Creation Date</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {searchedStaff.map((staff, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="py-4 flex items-center gap-3">
                  <div
  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${getAvatarColor(
    staff.name
  )}`}
>
  {getInitials(staff.name)}
</div>
                    <div>
                      <p className="font-medium text-[18px]">
                        {staff.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {staff.email}
                      </p>
                    </div>
                  </td>

                  <td className="text-[16px]">{staff.department}</td>
                  <td className="text-[16px]">{staff.dateCreated}</td>

                  <td className="text-right">
                    <button onClick={() => handleDelete(staff.id, staff.email)}
                    className="p-2 rounded-lg hover:shadow hover:bg-red-50 transition">
                      <Trash2
                        size={16}
                        className="text-gray-600"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
          <p>Showing 1 - {searchedStaff.length}</p>

          <div className="flex gap-3">
            <button className="font-medium text-black">1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>8</button>
            <button>9</button>
          </div>
        </div>
      </div>
      <AddStaff
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
