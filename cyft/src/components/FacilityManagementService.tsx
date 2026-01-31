import {
  Snowflake,        // HVAC
  Zap,              // Electrical
  Droplets,         // Plumbing & Water
  Building2,        // Structural
  SprayCan,         // Cleaning
  ShieldCheck,      // Security
  Trees,            // Landscaping
  Trash2,           // Waste
  Cpu,              // BMS
  Wifi,             // IoT
  Lock,             // Smart Security
  BatteryCharging,  // Energy
  Waves,            // Water Management
  Layers,           // Integrated FM
  AlertTriangle,    // Compliance & Safety
  Siren             // Emergency
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
  { id: 1, title: "HVAC Systems", icon: Snowflake, description: "Heating, ventilation and air-conditioning systems ensuring comfort and air quality." },
  { id: 2, title: "Electrical Systems", icon: Zap, description: "Reliable electrical installations, maintenance and power management solutions." },
  { id: 3, title: "Plumbing & Water", icon: Droplets, description: "Efficient water supply, drainage and plumbing infrastructure management." },
  { id: 4, title: "Structural Maintenance", icon: Building2, description: "Ongoing structural upkeep to ensure building integrity and safety." },
  { id: 5, title: "Cleaning Services", icon: SprayCan, description: "Professional cleaning solutions for hygienic and healthy environments." },
  { id: 6, title: "Security Services", icon: ShieldCheck, description: "Comprehensive physical and operational security management." },
  { id: 7, title: "Soft FM – Landscaping", icon: Trees, description: "Landscape design and maintenance for functional outdoor spaces." },
  { id: 8, title: "Waste Management", icon: Trash2, description: "Efficient waste collection, disposal and sustainability practices." },
  { id: 9, title: "BMS Systems", icon: Cpu, description: "Building Management Systems for centralized monitoring and control." },
  { id: 10, title: "IoT Sensors", icon: Wifi, description: "Smart sensor integration for real-time facility monitoring." },
  { id: 11, title: "Smart Security", icon: Lock, description: "Technology-driven access control and surveillance solutions." },
  { id: 12, title: "Energy Management", icon: BatteryCharging, description: "Optimized energy usage to reduce cost and environmental impact." },
  { id: 13, title: "Water Management", icon: Waves, description: "Smart water usage, monitoring and conservation solutions." },
  { id: 14, title: "Integrated FM Solutions", icon: Layers, description: "End-to-end facility management under a single coordinated system." },
  { id: 15, title: "Compliance & Safety", icon: AlertTriangle, description: "Ensuring regulatory compliance and workplace safety standards." },
  { id: 16, title: "Emergency Services", icon: Siren, description: "Rapid-response support for critical and emergency situations." },
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
        Comprehensive Facility Management Solutions
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
