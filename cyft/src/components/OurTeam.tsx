// import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import member1 from "../assets/person.png";
import Cayford from "../assets/cayford.png";
import Uti from "../assets/Uti.jpg";

const TEAM = [
  {
    id: 1,
    name: "Cynthia F.",
    role: "Managing Director",
    image: member1,
    email: "cynthia@cyftconsulting.com",
    phone: "+234 806 581 9693",
  },
  {
    id: 2,
    name: "Cayford D.",
    role: "Facility Management Proffesional",
    image: Cayford,
    email: "cayford@cyftconsulting.com",
    phone: "+234 816 803 0975",
  },
  {
    id: 3,
    name: "Utibe E.",
    role: "Events Management Proffesional",
    image: Uti,
    email: "utibe@cyftconsulting.com",
    phone: "+234 814 419 3064",
  },
];

export default function OurTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
            Crafting Excellence as a Team
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our success is built on the dedication and excellence of our team who work together to deliver exceptional results and create lasting value for our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {TEAM.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative group inline-block w-48 h-48 mx-auto rounded-lg overflow-hidden">
                {/* Headshot */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay with icons on the right */}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-col gap-3 mr-2
                                opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={`mailto:${member.email}`}
                    className="bg-white p-2 rounded-full shadow hover:bg-[#DE6328] hover:text-white transition"
                  >
                    <Mail size={16} />
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="bg-white p-2 rounded-full shadow hover:bg-[#DE6328] hover:text-white transition"
                  >
                    <Phone size={16} />
                  </a>
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm mb-4 text-black/90">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
