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
  BookOpenText          // Emergency
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";

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
  { id: 7, title: "Landscaping", icon: Trees, description: "Landscape design and maintenance for functional outdoor spaces." },
  { id: 8, title: "Waste Management", icon: Trash2, description: "Efficient waste collection, disposal and sustainability practices." },
  { id: 9, title: "BMS Systems", icon: Cpu, description: "Building Management Systems for centralized monitoring and control." },
  { id: 10, title: "IoT Sensors", icon: Wifi, description: "Smart sensor integration for real-time facility monitoring." },
  { id: 11, title: "Smart Security", icon: Lock, description: "Technology-driven access control and surveillance solutions." },
  { id: 12, title: "Energy Management", icon: BatteryCharging, description: "Optimized energy usage to reduce cost and environmental impact." },
  { id: 13, title: "Water Management", icon: Waves, description: "Smart water usage, monitoring and conservation solutions." },
  { id: 14, title: "Integrated FM Solutions", icon: Layers, description: "End-to-end facility management under a single coordinated system." },
  { id: 15, title: "Compliance & Safety", icon: AlertTriangle, description: "Ensuring regulatory compliance and workplace safety standards." },
  { id: 16, title: "Facility Audit", icon: BookOpenText, description: "Comprehensive facility assessment to identify risks, inefficiencoes, and improvement opportunties." },
];


type Service = {
    id: number,
    title: string;
    description: string;
    icon: any;
  };

  type IntroScene = {
    type: "intro" | "closing";
    duration: number;
    title: string;
    subtitle: string;
  };

  type PainScene = {
    type: "pain";
    duration: number;
    title: string;
    items: string[];
  };

  type ServicesScene = {
    type: "services";
    duration: number;
    title: string;
    items: Service[];
  };

    type AllScene = {
    type: "all";
    duration: number;
    title: string;
    items: Service[];
  };

  type Scene = IntroScene | PainScene | ServicesScene | AllScene;

  const SCENES: Scene[] = [
  {
    type: "intro",
    duration: 3000,
    title: "Facility management shouldn’t feel like a chore.",
    subtitle: "Too many systems. Too many failures. Too much stress.",
  },
{
  type: "pain",
  duration: 6000,
  title: "Common daily challenges",
  items: [
    "HVAC breakdowns",
    "Electrical faults",
    "Water leaks",
    "Unexpected power outages",
    "Security system failures",
    "Unresponsive maintenance teams",
  ],
},
  {
    type: "services",
    duration: 6000,
    title: "We simplify everything with integrated solutions",
    items: SERVICES.slice(0, 4),
  },
  {
    type: "services",
    duration: 6000,
    title: "Complete facility coverage",
    items: SERVICES.slice(4, 8),
  },
  {
    type: "services",
    duration: 6000,
    title: "Smart & sustainable systems",
    items: SERVICES.slice(8, 12),
  },
  {
    type: "all",
    duration: 15000,
    title: "Complete Facility Ecosystem",
    items: SERVICES,
  },
  {
    type: "closing",
    duration: 4000,
    title: "Everything. Connected. Managed.",
    subtitle: "One system. Total control.",
  },
];

export default function EventsManagementServices() {
  const [sceneIndex, setSceneIndex] = useState(0);

useEffect(() => {
  const current = SCENES[sceneIndex];

  const timer = setTimeout(() => {
    setSceneIndex((prev) => (prev + 1) % SCENES.length);
  }, current.duration);

  return () => clearTimeout(timer);
}, [sceneIndex]);

  const scene = SCENES[sceneIndex];
  const words = scene.title?.split(" ") || [];
  const sceneVariants = {
  initial: { opacity: 0, y: 20, scale: 0.99 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 1.01 },
};

const [progress, setProgress] = useState(0);

useEffect(() => {
  const target = ((sceneIndex + 1) / SCENES.length) * 100;

  let frame: number;

  const animate = () => {
    setProgress((prev) => {
      const diff = target - prev;

      // stop when close enough
      if (Math.abs(diff) < 0.1) return target;

      // move in small increments (the “bits” effect)
      return prev + diff * 0.08;
    });

    frame = requestAnimationFrame(animate);
  };

  animate();

  return () => cancelAnimationFrame(frame);
}, [sceneIndex]);

    return (
      <div className="lg:mt-[-40px]">

    <div className="w-full h-screen bg-white text-black flex items-center justify-center relative overflow-hidden">

      {/* 🌫 Cinematic layered background */}
<motion.div
  className="absolute inset-0"
  style={{
    background:
      "radial-gradient(circle at 20% 20%, rgba(255,165,0,0.05), transparent 45%), radial-gradient(circle at 80% 60%, rgba(0,0,0,0.02), transparent 50%)",
  }}
/>

      {/* 🌫 Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none bg-[url('/noise.png')]" />

      <AnimatePresence mode="wait">

  <motion.div
    key={sceneIndex}
    variants={sceneVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="relative z-10 text-center max-w-5xl px-6"
  >

          {/* INTRO / CLOSING */}
          {(scene.type === "intro" || scene.type === "closing") && (
            <>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold mb-4 flex flex-wrap justify-center gap-x-2 sm:gap-x-3">
                {words.map((word: string, i: number) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-xl"
              >
                {scene.subtitle}
              </motion.p>
            </>
          )}

          {/* PAIN SCENE */}
{scene.type === "pain" && (
  <>
    <h2 className="text-3xl sm:text-4xl mb-8 font-semibold text-center">
      {scene.title}
    </h2>

    <div className="relative max-w-2xl mx-auto">

      {/* vertical timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />

      <div className="space-y-5">
        {scene.items?.map((item: string, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              delay: i * 0.15,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative pl-12 pr-4 py-4
              bg-white border border-gray-100
              rounded-xl
              shadow-[0_8px_25px_rgba(0,0,0,0.03)]
              hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)]
              transition-all duration-300
            "
          >
            {/* dot on timeline */}
            <div className="absolute left-3 top-5 w-2.5 h-2.5 rounded-full bg-orange-400" />

            {/* “speaking to user” framing */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </>
)}

          {/* SERVICES SCENE */}
          {scene.type === "services" && (
            <>
              <h2 className="text-3xl mb-10 font-semibold">
                {scene.title}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                {scene.items.map((service: any, i: number) => {
                  const Icon = service.icon;
                  const isPrimary = i === 0;

                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{
                        opacity: 1,
                        scale: isPrimary ? 1.02 : 1,
                      }}
                      transition={{ delay: i * 0.12 }}
                      whileHover={{ y: -6, scale: 1.03 }}
                      className={`
                        relative bg-white border rounded-2xl lg:p-8 p-4 flex flex-col items-center text-center lg:gap-4 gap-2
                        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                        transition-all duration-300
                        ${isPrimary ? "border-orange-200" : "border-gray-100"}
                        before:absolute before:inset-0 before:rounded-2xl
                        before:opacity-0 hover:before:opacity-100
                        before:transition
                        before:bg-gradient-to-b before:from-orange-50/40 before:to-transparent
                      `}
                    >
                      <div className="w-8 lg:w-14 h-8 lg:h-14 rounded-xl bg-orange-100 flex items-center justify-center">
                       <Icon className="text-orange-500" size={window.innerWidth < 640 ? 14 : 26} />
                      </div>

                      <h3 className="text-sm lg:text-lg font-semibold">
                        {service.title}
                      </h3>

                      <p className="text-[10px] lg:text-sm text-gray-500">
                        {service.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </>
          )}

          {/* FINAL SCENE */}
{scene.type === "all" && (
  <>
    <h2 className="text-3xl sm:text-4xl mb-10 font-semibold text-center">
      Complete Facility Ecosystem
    </h2>

    {/* ecosystem stage */}
    <div className="relative w-full flex justify-center items-center">

      {/* ambient glow field */}
      <div className="absolute w-[600px] h-[600px] bg-orange-100/20 rounded-full blur-3xl animate-pulse" />

      {/* subtle orbit lines (fake depth) */}
      <div className="absolute w-[420px] h-[420px] border border-gray-100 rounded-full opacity-40" />
      <div className="absolute w-[300px] h-[300px] border border-gray-100 rounded-full opacity-30" />

      <div className="relative flex flex-wrap justify-center items-center gap-6 max-w-4xl">

        {SERVICES.map((service: any, i: number) => {
          const Icon = service.icon;

          const sizeClass =
            i % 5 === 0
              ? "w-32 h-32"
              : i % 3 === 0
              ? "w-28 h-28"
              : "w-24 h-24";

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: [0, i % 2 === 0 ? 10 : -10, 0],
                y: [0, i % 3 === 0 ? -8 : 6, 0],
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.15,
                zIndex: 20,
              }}
              className={`
                ${sizeClass}
                relative rounded-full
                bg-white border border-gray-100
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                flex flex-col items-center justify-center
                text-center cursor-pointer
                transition-all duration-300
              `}
            >
              {/* hover glow */}
              <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition bg-orange-50/50 blur-xl" />

              <div className="relative flex flex-col items-center gap-1 px-2">
                <Icon className="text-orange-500" size={22} />

                <span className="text-[11px] font-medium leading-tight">
                  {service.title}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </>
)}

        </motion.div>
      </AnimatePresence>

      {/* 📊 Progress timeline bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 overflow-hidden">
     <motion.div
  className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400"
  animate={{ width: `${progress}%` }}
  transition={{ duration: 0 }}
/>
      </div>
    </div>

    </div>
    );
  }
