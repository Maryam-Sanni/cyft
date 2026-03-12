import { useState } from "react";
import {
  ClipboardCheck,
  Fuel,
  Cloud,
  LayoutDashboard,
  ChevronDown
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

type Service = {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon: any;
};

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Manual Data Entry",
    icon: ClipboardCheck,
    description:
      "Facility staff perform routine inspections using the platform directly from mobile devices or laptops.",
    details: [
      "Tick inspection checklists",
      "Enter measurements (temperature, voltage)",
      "Upload photos of issues",
      "Add maintenance notes",
    ],
  },
  {
    id: 2,
    title: "Automated Monitoring (ATG)",
    icon: Fuel,
    description:
      "Automatic Tank Gauging sensors track generator fuel levels in real time with zero manual input.",
    details: [
      "Real-time fuel monitoring",
      "Consumption tracking",
      "Automatic alerts",
      "24/7 monitoring dashboard",
    ],
  },
  {
    id: 3,
    title: "Cloud Processing",
    icon: Cloud,
    description:
      "All facility inspection data is securely processed in the cloud to generate intelligent insights.",
    details: [
      "Health score calculations",
      "Issue detection",
      "Critical alerts",
      "Historical trend tracking",
    ],
  },
  {
    id: 4,
    title: "Executive Dashboard",
    icon: LayoutDashboard,
    description:
      "Management can monitor the health of their entire facility through a powerful real-time dashboard.",
    details: [
      "Infrastructure health score",
      "Maintenance history",
      "Repair cost projections",
      "Downloadable reports",
    ],
  },
];

export default function PlatformWorkflow() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      {/* Heading */}

      <div className="text-center mb-14">
        <h2 className="text-3xl lg:text-[44px] font-semibold mb-4">
          How the CYFT Facility Health Platform Works
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          The platform combines routine inspections, automated monitoring,
          cloud intelligence, and executive dashboards to give organizations
          complete visibility into their facility infrastructure.
        </p>
      </div>

      {/* Workflow Cards */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-8"
      >
        {SERVICES.map((service) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0px 18px 40px rgba(0,0,0,0.06)",
              }}
              className="border border-gray-100 rounded-2xl p-7 bg-white transition-all"
            >

              {/* Icon + Title */}

              <div className="flex items-start gap-4 mb-4">

                <div className="w-11 h-11 rounded-xl bg-[#DE6328]/10 flex items-center justify-center">
                  <Icon className="text-[#DE6328]" size={20} />
                </div>

                <h3 className="font-semibold text-lg lg:text-[22px]">
                  {service.title}
                </h3>

              </div>

              {/* Description */}

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Expand Button */}

              <button
                onClick={() => toggleExpand(service.id)}
                className="flex items-center gap-2 text-[#DE6328] text-sm font-medium mt-5"
              >
                {expanded === service.id ? "Hide features" : "View features"}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    expanded === service.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Expand Section */}

              <AnimatePresence>
                {expanded === service.id && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-5 text-sm text-gray-700 space-y-2 overflow-hidden"
                  >
                    {service.details.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2"
                      >
                        <span className="mt-[6px] w-[6px] h-[6px] bg-[#DE6328] rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}