import {
  Snowflake,        // HVAC
  Zap,              // Electrical
  Droplets,         // Plumbing & Water
  Building2,        // Structural
  SprayCan,         // Cleaning
  ShieldCheck,      // Security
  Trash2,           // Waste
  Cpu,              // BMS
  BatteryCharging,  // Energy
  AlertTriangle,    // Compliance & Safety
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // ✅ fixed
    },
  },
};

export const iconVariants: Variants = {
  hidden: {
    scale: 0,
    rotate: -45,
  },
  show: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 18,
    },
  },
};

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Power Supply",
    icon: BatteryCharging,
    description:
      "Monitoring incoming power supply, distribution stability, and backup readiness to ensure uninterrupted facility operations.",
  },
  {
    id: 2,
    title: "Generator Health",
    icon: Cpu,
    description:
      "Tracking generator performance, fuel levels, operating hours, and maintenance status to prevent unexpected power failures.",
  },
  {
    id: 3,
    title: "Electrical Systems",
    icon: Zap,
    description:
      "Inspection and monitoring of electrical panels, wiring, voltage levels, and circuit safety to maintain reliable power infrastructure.",
  },
  {
    id: 4,
    title: "HVAC Systems",
    icon: Snowflake,
    description:
      "Monitoring heating, ventilation, and air-conditioning systems to maintain optimal indoor climate and air quality.",
  },
  {
    id: 5,
    title: "Water & Plumbing",
    icon: Droplets,
    description:
      "Supervising water supply, plumbing infrastructure, drainage systems, and leak detection across the facility.",
  },
  {
    id: 6,
    title: "Fire Safety",
    icon: AlertTriangle,
    description:
      "Routine inspection of fire extinguishers, alarms, suppression systems, and safety equipment to ensure emergency readiness.",
  },
  {
    id: 7,
    title: "Waste Management",
    icon: Trash2,
    description:
      "Coordinating waste collection, disposal procedures, and environmental compliance for a clean and sustainable facility.",
  },
  {
    id: 8,
    title: "Pest Control",
    icon: ShieldCheck,
    description:
      "Monitoring pest prevention measures and scheduled treatments to maintain hygienic and pest-free environments.",
  },
  {
    id: 9,
    title: "Cleanliness & Hygiene",
    icon: SprayCan,
    description:
      "Ensuring high standards of sanitation, cleaning operations, and hygiene compliance across all facility spaces.",
  },
  {
    id: 10,
    title: "General Maintenance",
    icon: Building2,
    description:
      "Routine maintenance of facility infrastructure including structural elements, fittings, and general building systems.",
  },
];

type Service = {
    id: number,
    title: string;
    description: string;
    icon: any;
  };  

export default function EventsManagementServices() {

    return (
<section className="max-w-6xl mx-auto px-4 py-12">
  <AnimatePresence mode="wait">
    <motion.div
      key="list"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <h2 className="text-3xl lg:text-[48px] font-semibold text-center mb-16">
      Infrastructure Categories Monitored
      </h2>

      {/* GRID CONTAINER */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {SERVICES.map((service) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
              }}
              className="relative overflow-hidden border border-gray-100 rounded-2xl p-6 bg-white transition-all"
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-[#DE6328]/10 to-transparent" />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  className="w-12 h-12 rounded-xl bg-[#DE6328]/10 flex items-center justify-center mb-4"
                >
                  <Icon className="text-[#DE6328]" size={22} />
                </motion.div>

                <h3 className="font-semibold text-lg lg:text-[22px] mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  </AnimatePresence>
</section>
    );
  }
