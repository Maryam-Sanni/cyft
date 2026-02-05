import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import img1 from "../assets/G1.png";
import img2 from "../assets/G11.png";
import img3 from "../assets/Event2.jpg";
import img4 from "../assets/G9.png";
import img5 from "../assets/experience.png";
import img6 from "../assets/Event4.jpg";
import img7 from "../assets/G12.png";
import eventImg from "../assets/Event3.jpg"
import facilityImg from "../assets/G7.png"
import trainingImg from "../assets/G8.png"

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Gallery() {
    const [phase, setPhase] = useState("blank");

    useEffect(() => { 
      // Show gallery after 5s
      setTimeout(() => setPhase("gallery"), 500);
    }, []);
    
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="max-w-[1300px] mx-auto lg:px-20 px-3 py-20">

      <div className="relative min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center mt-[-180px] mb-[-200px] lg:mb-10 lg:mt-10">

{/* GALLERY */}
{phase === "gallery" && 
  <motion.div
    initial="hidden"
    animate="show"
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.5 // slow reveal image-by-image
        }
      }
    }}
    className="grid grid-cols-3 gap-6 items-start mt-10"
  >

      {/* TITLE (appears first) */}
      <motion.div
        variants={item}
        className="flex flex-col lg:gap-8 gap-4"
      >
        <h2 className="text-black font-semibold lg:text-[54px] text-[21px] leading-tight lg:mt-[50px] lg:mb-[70px]">
          Explore Our <br />
          <span className="text-[#DE6328]">Gallery</span>
        </h2>

        <motion.img src={img1} className="w-[355px] lg:h-[273px] h-[173px] object-cover" variants={item} />
        <motion.img src={img2} className="w-[355px] lg:h-[290px] h-[190px] object-cover" variants={item} />
      </motion.div>

      <div className="flex flex-col lg:gap-8 gap-5">
      {/* IMAGE 3 */}
      <motion.img
        src={img3}
        variants={item}
        className="w-[355px] lg:h-[425px] h-[215px] object-cover"
      />

      {/* IMAGE 4 */}
      <motion.img
        src={img4}
        variants={item}
        className="w-[355px] lg:h-[425px] h-[215px] object-cover"
      />
</div>

<div className="flex flex-col lg:gap-8 gap-5">
      {/* IMAGE 5 */}
      <motion.img
        src={img5}
        variants={item}
        className="w-[355px] lg:h-[225px] h-[115px] object-cover"
      />

      {/* IMAGE 7 */}
      <motion.img
        src={img7}
        variants={item}
        className="w-[355px] lg:h-[370px] h-[180px] object-cover"
      />

      {/* IMAGE 6 */}
      <motion.img
        src={img6}
        variants={item}
        className="w-[355px] lg:h-[225px] h-[115px] object-cover"
      />
              </div>

    </motion.div>
      }
    </div>

      <motion.div
  className="relative w-full lg:h-[520px] md:h-[520px] h-[300px] overflow-hidden mt-20"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {/* Background image */}
  <img
    src={eventImg}
    alt="Event Management"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

  {/* Swirl Text Wrapper */}
  <motion.div
    className="absolute bottom-10 left-10 text-white pointer-events-none"
    initial={{ opacity: 0, rotate: -15, y: 60 }}
    whileInView={{ opacity: 1, rotate: 0, y: 0 }}
    whileHover={{ opacity: 1, rotate: 0, y: 0 }}
    transition={{
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    }}
    viewport={{ once: true }}
  >
    <motion.p
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      whileHover={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.15 }}
      className="text-3xl md:text-5xl font-semibold leading-tight"
    >
      Event
    </motion.p>

    <motion.h2
      initial={{ x: 30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      whileHover={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-3xl md:text-5xl font-semibold leading-tight"
    >
      Management
    </motion.h2>
  </motion.div>
</motion.div>

<motion.div
  className="relative w-full lg:h-[520px] md:h-[520px] h-[300px] overflow-hidden mt-10"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {/* Background image */}
  <img
    src={facilityImg}
    alt="Event Management"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

  {/* Swirl Text Wrapper */}
  <motion.div
    className="absolute bottom-10 left-10 text-white pointer-events-none"
    initial={{ opacity: 0, rotate: -15, y: 60 }}
    whileInView={{ opacity: 1, rotate: 0, y: 0 }}
    whileHover={{ opacity: 1, rotate: 0, y: 0 }}
    transition={{
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    }}
    viewport={{ once: true }}
  >
    <motion.p
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      whileHover={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.15 }}
      className="text-3xl md:text-5xl font-semibold leading-tight"
    >
     Facility
    </motion.p>

    <motion.h2
      initial={{ x: 30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      whileHover={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-3xl md:text-5xl font-semibold leading-tight"
    >
      Management
    </motion.h2>
  </motion.div>
</motion.div>

<motion.div
  className="relative w-full lg:h-[520px] md:h-[520px] h-[300px] overflow-hidden mt-10"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {/* Background image */}
  <img
    src={trainingImg}
    alt="Event Management"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

  {/* Swirl Text Wrapper */}
  <motion.div
    className="absolute bottom-10 left-10 text-white pointer-events-none"
    initial={{ opacity: 0, rotate: -15, y: 60 }}
    whileInView={{ opacity: 1, rotate: 0, y: 0 }}
    whileHover={{ opacity: 1, rotate: 0, y: 0 }}
    transition={{
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    }}
    viewport={{ once: true }}
  >
    <motion.p
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      whileHover={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.15 }}
      className="text-3xl md:text-5xl font-semibold leading-tight"
    >
      Human
    </motion.p>

    <motion.h2
      initial={{ x: 30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      whileHover={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-3xl md:text-5xl font-semibold leading-tight"
    >
      Capacity Development
    </motion.h2>
  </motion.div>
</motion.div>

    </section>

      <Footer />
    </div>
  );
}


{/* HANDWRITING */}
{/* <AnimatePresence>
  {phase === "write" && (
    <motion.h2
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="lg:text-[64px] text-2xl text-[#DE6328] font-semibold text-center"
    >
      {"Explore Our Gallery".split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }} // letters appear one after another
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
  )}
</AnimatePresence> */}

{/* PAINT WIPE */} 
{/* {phase === "wipe" && 
( <motion.div initial={{ x: "-100%" }} 
animate={{ x: "100%" }} 
transition={{ duration: 0.8, ease: "easeInOut" }} 
className="absolute top-1/2 h-[40px] w-full bg-[#DE6328]" />
 )} */}

{/* <div className="grid grid-cols-3 gap-6 items-start">
<div className="flex flex-col lg:gap-8 gap-4">
  <h2 className="text-black font-semibold lg:text-[54px] text-[21px] leading-tight lg:mt-[50px] mt- lg:mb-[70px]">
  Explore Our <br/><span className="text-[#DE6328]">Gallery</span>
  </h2>

  <img
    src={img1}
    alt=""
    className="w-[355px] lg:h-[273px] h-[173px] object-cover"
  />

  <img
    src={img2}
    alt=""
    className="w-[355px] lg:h-[290px] h-[190px] object-cover"
  />
</div>

<div className="flex flex-col lg:gap-8 gap-5">
  <img
    src={img3}
    alt=""
    className="w-[355px] lg:h-[425px] h-[215px] object-cover"
  />

  <img
    src={img4}
    alt=""
    className="w-[355px] lg:h-[425px] h-[215px] object-cover"
  />
</div>

<div className="flex flex-col lg:gap-8 gap-5">
<img
    src={img5}
    alt=""
    className="w-[355px] lg:h-[225px] h-[115px] object-cover"
  />
  <img
    src={img7}
    alt=""
    className="w-[355px] lg:h-[370px] h-[180px] object-cover"
  />

  <img
    src={img6}
    alt=""
    className="w-[355px] lg:h-[225px] h-[115px] object-cover"
  />
</div>

</div> */}

// useEffect(() => {
  // Start handwriting after 0.5s
  // setTimeout(() => setPhase("write"), 500);

  // Start wipe after 3s
  // setTimeout(() => setPhase("wipe"), 3000);

  // Show gallery after 4.5s
//   setTimeout(() => setPhase("gallery"), 500);
// }, []);