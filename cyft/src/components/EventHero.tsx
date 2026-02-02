import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import arrowLong from "../assets/arrow-long.png";
import { motion } from "framer-motion";

// replace these with your real images
import img1 from "../assets/E1.png";
import img2 from "../assets/E2.png";
import img3 from "../assets/E3.png";
import img4 from "../assets/E4.png";
import img5 from "../assets/E5.png";

import type { Variants } from "framer-motion";

const iconVariant: Variants = {
  hidden: {
    opacity: 0,
    y: -120,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // ✅ valid
    },
  },
};

const DotGrid = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    {[...Array(9)].map((_, i) => (
      <circle key={i} cx={(i % 3) * 6 + 2} cy={Math.floor(i / 3) * 6 + 2} r="1.2" />
    ))}
  </svg>
);

const Waves = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 6c3 3 6 3 9 0s6-3 9 0" />
    <path d="M3 12c3 3 6 3 9 0s6-3 9 0" />
  </svg>
);

const Lines = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <rect x="4" y="5" width="16" height="2" />
    <rect x="4" y="11" width="16" height="2" />
    <rect x="4" y="17" width="16" height="2" />
  </svg>
);

const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const CircleDot = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
    <circle cx="8" cy="8" r="3" />
  </svg>
);

const Plus = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11 5h2v14h-2z" />
    <path d="M5 11h14v2H5z" />
  </svg>
);

const Diamond = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l10 10-10 10L2 12 12 2z" />
  </svg>
);

const icons = [
  {
    Icon: DotGrid,
    className: "top-[380px] left-[18%]",
    bg: "bg-[#FFE7DB]",
    delay: 0,
  },
  {
    Icon: Waves,
    className: "top-[460px] left-[35%]",
    bg: "",
    delay: 0.15,
  },
  {
    Icon: Lines,
    className: "top-[420px] right-[28%]",
    bg: "bg-[#FFF1E8]",
    delay: 0.3,
  },
  {
    Icon: ArrowUpRight,
    className: "top-[400px] right-[18%]",
    bg: "",
    delay: 0.45,
  },
  {
    Icon: CircleDot,
    className: "top-[610px] left-[53%]",
    bg: "bg-[#FFE7DB]",
    delay: 0.6,
  },
  {
    Icon: Plus,
    className: "top-[520px] right-[40%]",
    bg: "",
    delay: 0.75,
  },
  {
    Icon: Diamond,
    className: "top-[340px] left-[42%]",
    bg: "bg-[#FFF1E8]",
    delay: 0.9,
  },
];

const mobileCenterVariant: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatVariant: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const touchVariant: Variants = {
  rest: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    boxShadow: "0px 12px 30px rgba(0,0,0,0.18)",
  },
  hover: {
    scale: 1.05,
    rotateX: -6,
    rotateY: 6,
    boxShadow: "0px 22px 45px rgba(222,99,40,0.35)",
    transition: { type: "spring", stiffness: 200 },
  },
  tap: {
    scale: 1.12,
    rotateX: -10,
    rotateY: 10,
    boxShadow: "0px 30px 60px rgba(222,99,40,0.5)",
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

const loadVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Hero = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement | null>(null);

  // subtle parallax on desktop
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e:any) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;

      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const imageConfig = [
    { src: img1, w: "w-[297px]", h: "h-[342px]", y: "translate-y-6" },
    { src: img2, w: "w-[172px]", h: "h-[301px]", y: "-translate-y-[-60px]" },
    { src: img3, w: "w-[242px]", h: "h-[236px]", y: "translate-y-30" }, // center
    { src: img4, w: "w-[172px]", h: "h-[301px]", y: "-translate-y-[-60px]" },
    { src: img5, w: "w-[297px]", h: "h-[342px]", y: "translate-y-6" },
  ];  

  return (
    <section
      ref={containerRef}
      className="relative min-h-[800px] lg:min-h-[980px] flex items-center justify-center overflow-hidden bg-[#F0EBE9]"
    >
      
      {/* Decorative icons */}
     <div className="absolute inset-0 z-10">
  {icons.map(({ Icon, className, bg, delay }, i) => (
    <motion.div
      key={i}
      variants={iconVariant}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      drag
      dragElastic={0.18}
      dragMomentum={false}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.25 }}
      className={`absolute ${className}
        flex items-center justify-center
        cursor-grab active:cursor-grabbing
        ${bg ? `${bg} w-10 h-10 rounded-xl` : ""}
        text-[#DE6328]`}
    >
      <Icon />
    </motion.div>
  ))}
</div>

      {/* Floating image system */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Desktop layout */}
<div className="hidden lg:block absolute bottom-[50px] w-full">
  <div className="max-w-[1300px] mx-auto flex justify-between items-start px-12">
    {imageConfig.map((img, i) => (
      <div
        key={i}
        className={`image-rise ${img.w} ${img.h} ${img.y}
          rounded-3xl overflow-hidden shadow-lg
          transition-all duration-300 ease-out
          hover:-translate-y-2 hover:shadow-2xl mr-5 mb-10`}
        style={{ animationDelay: `${i * 140}ms` }}
      >
        <img
          src={img.src}
          alt=""
          className="w-full h-full object-cover transition-transform duration-500
          hover:scale-110"
        />
      </div>
    ))}
  </div>
</div>

{/* Mobile Hero Visual */}
<div className="lg:hidden relative mt-[380px] h-[460px] perspective-[1200px]">

  {/* Center Image – H1 */}
  <motion.div
  custom={0}
  variants={loadVariant}
  initial="hidden"
  animate="visible"
  className="relative z-20 mx-auto w-[315px] h-[315px]
    rounded-3xl overflow-hidden"
>
  <motion.div
    variants={mobileCenterVariant}
    initial="hidden"
    animate="visible"
    className="relative z-20 mx-auto w-[315px] h-[315px]
      rounded-3xl overflow-hidden"
  >
    <motion.div
      variants={touchVariant}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="w-full h-full rounded-3xl bg-white shadow-2xl"
      style={{ transformStyle: "preserve-3d" }}
    >
      <img
        src={img1}
        alt=""
        className="w-full h-full object-cover"
      />
    </motion.div>
  </motion.div>
  </motion.div>

  {/* Circle – Left (H2) */}
  <motion.div
  custom={1}
  variants={loadVariant}
  initial="hidden"
  animate="visible"
  className="absolute top-[-4%] left-[-1%] z-30 rotate-[-10deg]"
>
  <motion.div
    variants={floatVariant}
    custom={0}
    animate="animate"
    className="absolute top-[-4%] left-[-1%] z-30 rotate-[-10deg]"
  >
    <motion.div
      variants={touchVariant}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="w-[140px] h-[140px]
        rounded-full overflow-hidden bg-white shadow-xl"
    >
      <img src={img2} className="w-full h-full object-cover" />
    </motion.div>
  </motion.div>
  </motion.div>

  {/* Circle – Right (H3) */}
  <motion.div
  custom={2}
  variants={loadVariant}
  initial="hidden"
  animate="visible"
  className="absolute bottom-[12%] right-[4%] z-30"
>
  <motion.div
    variants={floatVariant}
    animate="animate"
    className="absolute bottom-[12%] right-[4%] z-30"
  >
    <motion.div
      variants={touchVariant}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="w-[140px] h-[140px]
        rounded-full overflow-hidden bg-white shadow-xl"
    >
      <img src={img4} className="w-full h-full object-cover" />
    </motion.div>
  </motion.div>
  </motion.div>

</div>

      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 lg:mt-[-280px] mt-[-350px]">
        <h1 className="text-black text-[32px] md:text-5xl lg:text-[80px] font-bold">
        Event Management
        </h1>

        <p className="mt-6 text-black/80 text-md md:text-lg lg:text-xl max-w-xl mx-auto">
        Structured planning and seamless execution <br/> for every occasion
        </p>

        <button onClick={() => navigate("/contact")} 
        className="group lg:mt-15 mt-7 lg:w-[389px] w-[180px] cursor-pointer inline-flex items-center justify-between gap-4 bg-[#DE6328] text-white lg:px-6 lg:py-3 py-2 px-3 lg:text-lg text-md rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all" >
           Get in touch <img src={arrowLong} alt="" className="transition-transform group-hover:translate-x-2" /> 
           </button>
      </div>
    </section>
  );
};

export default Hero;
