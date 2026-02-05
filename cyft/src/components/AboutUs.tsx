import Header from "./Header";
import Footer from "./Footer"
import { motion } from "framer-motion";
// import aboutImg from "../assets/About.png"
import type { Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/About3.png";
import img2 from "../assets/About4.png";
import img3 from "../assets/H9.png";
import OurTeam from "./OurTeam";
import FAQs from "./FAQs"
import AboutHero from "./AboutHero"
import OurStoryNigeria from "./Story";

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
  
  const VALUES: Value[] = [
    { id: 1, tag: "01", color: "#4D46C7", title: "Integrity", description: "We strive to meet customer expectations, follow policies and procedures, and are honest and transparent with customer issues." },
    { id: 2, tag: "02", color: "#EE2A52", title: "Quality", description: "We strive to have a clear understanding of the client’s expectations, budget, and turnaround time; and ensure that the organization’s offerings are fit for purpose." },
    { id: 3, tag: "03", color: "#FAB33F", title: "Teamwork", description: "Our Team has a sense of shared purpose, develop mutual trust and respect with clients, and is constantly willing to uphold accountability, either as individuals or collectively as a team." },
  ];

  const VALUES2: Value[] = [
    { id: 4, tag: "04", color: "#3FFA3F", title: "Passion", description: "We show the clients a sense of enthusiasm, and a desire to articulate activities creatively to meet the clients’ predetermined objectives." },
    { id: 5, tag: "05", color: "#068399", title: "Innovation", description: "We generate original ideas, collaborate, and improve upon existing solutions to either solve clients’ problems or meet clients’ needs." },
  ];

  type Value = {
    id: number,
    title: string;
    description: string;
    tag: string;
    color: string
  };  

const AboutPage = () => {
    const navigate = useNavigate();

  return (
    <div>
    <Header />

<AboutHero />

      <div className="max-w-7xl mx-auto w-full px-5 lg:mt-18 mt-5 lg:mb-15 mb-5 items-center text-left">

          {/* Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="space-y-4">
              <h3 className="text-[24px] lg:text-[36px] font-semibold text-gray-900">Our Vision</h3>
              <p className="text-gray-600 text-[16px]">
              To revolutionize Nigeria's Consultancy Management culture and represent the country globally by aligning with diverse clients' expectations and ensuring inclusiveness across all levels.
              </p>
            </div>

            {/* Card 2 */}
            <div className="space-y-4">
              <h3 className="text-[24px] lg:text-[36px] font-semibold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 text-[16px]">
              To be the first choice for exceptional business solutions, delivering unmatched quality through our committed staff, creativity, innovation, and unwavering dedication to client satisfaction.
              </p>
            </div>
          </div>
      </div>

      <div className="space-y-6 items-center max-w-7xl mx-auto px-4 text-center mt-20 mb-20">
            <span className="text-[14px] font-medium tracking-widest text-[#676767] uppercase">
              ABOUT US
            </span>
            <h2 className="text-3xl md:text-[42px] font-bold text-gray-900 leading-tight mt-3">
              Our Core Values
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-xl text-sm md:text-[16px] mt-5 mx-auto text-center">
            At CYFT Consulting LTD, we take pride in offering more than just products; we offer an experience. Here's what makes us unique:
            </p>
          </div>

      {/* GRID CONTAINER */}
      <div className="lg:px-60 px-5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        {VALUES.map((value) => {

          return (
            <motion.div
              key={value.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
              }}
              className="relative overflow-hidden rounded-2xl p-8 bg-white transition-all"
            >
              {/* Glow overlay */}
              <div
  className="absolute inset-0 opacity-0 hover:opacity-100 transition"
  style={{
    background: `linear-gradient(135deg, ${value.color}1A, transparent)`
  }}
/>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  style={{
                    backgroundColor: `${value.color}1A`,
                  }}
                  className="w-10 h-10 rounded-full flex items-center font-bold text-[24px] mb-4"
                >
                 {value.tag}
                </motion.div>

                <h3 className="font-semibold text-[16px] lg:text-[18px] mb-2">
                  {value.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mt-10">
                  {value.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      </div>

      {/* GRID CONTAINER2 */}
      <div className="flex justify-center px-5 lg:px-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
      >
        {VALUES2.map((value) => {

          return (
            <motion.div
              key={value.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
              }}
              className="relative overflow-hidden rounded-2xl p-8 bg-white transition-all"
            >
              {/* Glow overlay */}
              <div
  className="absolute inset-0 opacity-0 hover:opacity-100 transition"
  style={{
    background: `linear-gradient(135deg, ${value.color}1A, transparent)`
  }}
/>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  style={{
                    backgroundColor: `${value.color}1A`,
                  }}
                  className="w-10 h-10 rounded-full flex items-center font-bold text-[24px] mb-4"
                >
                 {value.tag}
                </motion.div>

                <h3 className="font-semibold text-[16px] lg:text-[18px] mb-2">
                  {value.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mt-10">
                  {value.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      </div>

      <OurStoryNigeria />
      
      <div className="w-full lg:py-30 py-10 mt-10 transition-colors duration-300 bg-[#FAD6AD] justify-center">
        <div className="flex">

      <div className="hidden lg:block flex flex-col ml-30">
      <motion.img
        src={img1}
        className="w-[500px] lg:h-[210px] h-[115px] object-cover rounded-4xl mb-8"
      />

      <motion.img
        src={img2}
        className="w-[500px] lg:h-[210px] h-[115px] object-cover rounded-4xl mb-8"
      />

      <motion.img
        src={img3}
        className="w-[500px] lg:h-[210px] h-[115px] object-cover rounded-4xl mb-8"
      />

      </div>

      <div className="flex flex-col lg:gap-8 gap-5 lg:ml-30 ml-5">
     
      <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-[42px] font-bold text-gray-900 leading-tight">
              Why Choose Cyft<br className="hidden md:block" /> Consulting LTD?
            </h2>
          </div>

              <div> 
              <div
              className="flex items-center gap-2 text-[20px] font-medium">
                <CheckCircle /> Comprehensive Expertise
              </div>
              <p className="text-sm lg:text-[15px] mt-1 lg:w-[500px] text-black/80">
              End-to-end solutions across facility management, event execution, and human capacity development.
              </p>
              </div>

              <div className="mt-[-5px]"> 
              <div
              className="flex items-center gap-2 text-[20px] font-medium">
                <CheckCircle /> Technology Leadership
              </div>
              <p className="text-sm lg:text-[15px] mt-1 lg:w-[500px] text-black/80">
              Innovative technology integration across facilities, events, and human capacity development.
              </p>
              </div>

              <div className="mt-[-5px]"> 
              <div
              className="flex items-center gap-2 text-[20px] font-medium">
                <CheckCircle /> Cost Optimization
              </div>
              <p className="text-sm lg:text-[15px] mt-1 lg:w-[500px] text-black/80">
              A strategic approach to reducing operational costs while enhancing service delivery.
              </p>
              </div>

              <div className="mt-[-5px]"> 
              <div
              className="flex items-center gap-2 text-[20px] font-medium">
                <CheckCircle /> 24/7 Support
              </div>
              <p className="text-sm lg:text-[15px] mt-1 lg:w-[500px] text-black/80">
              Day-and-night monitoring backed by responsive support and emergency action.
              </p>
              </div>

              <div className="mt-[-5px]"> 
              <div
              className="flex items-center gap-2 text-[20px] font-medium">
                <CheckCircle /> Compliance Assurance
              </div>
              <p className="text-sm lg:text-[15px] mt-1 lg:w-[500px] text-black/80">
              Compliance-driven operations supported by strong risk management.
              </p>
              </div>


        {/* Desktop CTA */}
        <button onClick={() => {navigate("/contact")}} className="hidden md:block bg-[#DE6328] w-full h-[50px] text-white rounded-full font-semibold hover:bg-orange-500 transition-all cursor-pointer">
          Get in touch
        </button>

      </div>

      </div>

      </div>

      <OurTeam />
      <FAQs />
    <Footer />
    </div>
  );
};

export default AboutPage;

{/* <div className="mb-10">
  <img
    src={aboutImg}
    alt="About Us"
    className="inset-0 w-full lg:h-[516px] h-[300px] object-cover"
  />
  <div className="absolute lg:h-[516px] h-[300px] inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
  <motion.div
    className="absolute lg:top-80 top-40 left-10 text-white pointer-events-none"
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
      About Us
    </motion.p>
  </motion.div>
  </div>  */}