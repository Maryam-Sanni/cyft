import { CheckCircle, Users, TrendingUp, Briefcase, BookOpen } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer"
import TrainingHero from "./TrainingHero"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import OurApproach from "./OurApproachTr";

const services = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Workforce Training",
      description:
        "Customized training programs that build technical, operational, and soft skills aligned with your organization’s goals.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Leadership Development",
      description:
        "Practical leadership programs that strengthen decision-making, communication, and people management skills.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Organizational Development",
      description:
        "We help design structures, processes, and cultures that support performance, accountability, and growth.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Career & Skills Development",
      description:
        "Programs focused on professional growth, role readiness, and long-term career sustainability.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Assessment & Evaluation",
      description:
        "Skills gap analysis, performance assessment, and competency mapping to guide targeted development efforts.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Building & Culture",
      description:
        "Engagement-driven sessions that improve collaboration, trust, and workplace alignment.",
    },
  ];

export default function HumanCapacityDevelopmentPage() {
    const navigate = useNavigate();

  return (
    <div>
    <Header />
    <main className="bg-[#F0EBE9] text-gray-900">
      {/* HERO */}
      <TrainingHero />

      {/* WHY IT MATTERS */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Why human capacity matters</h2>
            <p className="text-gray-600 mb-6">
              Organizations grow when their people grow. Skills, mindset, and
              leadership capacity directly impact productivity, innovation, and
              long-term success.
            </p>
            <p className="text-gray-600">
              Our approach focuses on real-world application—not theory—so
              learning translates into measurable performance improvements.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
  <StatCard
    title="Stronger Teams"
    detail="Aligned skills and shared goals improve collaboration and trust."
  />
  <StatCard
    title="Better Leadership"
    detail="Confident leaders make clearer decisions and guide teams effectively."
  />
  <StatCard
    title="Higher Performance"
    detail="Focused development turns effort into measurable results."
  />
  <StatCard
    title="Future Readiness"
    detail="People equipped for change help organizations adapt and grow."
  />
</div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-10 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading animation */}

        <div className="space-y-6 items-center max-w-7xl mx-auto px-4 text-center">
            <span className="text-[14px] font-medium tracking-widest text-[#676767] uppercase">
              HUMAN CAPACITY DEVELOPMENT
            </span>
            <h2 className="text-3xl md:text-[42px] font-bold text-gray-900 leading-tight mt-3 mb-10">
            What we offer
            </h2>
          </div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </motion.div>
      </div>
    </section>


<OurApproach />

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto bg-[#131313] rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-semibold max-w-2xl">
            Ready to invest in your people?
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl">
            Let’s design a human capacity development solution that fits your
            organization’s needs and future ambitions.
          </p>
          <button 
          onClick={() => {navigate("/contact")}}
          className="mt-8 px-6 py-3 rounded-xl bg-white text-gray-900 font-medium hover:bg-[#DE6328] hover:text-white transition">
            Talk to us
          </button>
        </div>
      </section>
    </main>
    <Footer />
    </div>
  );
}

/* COMPONENTS */

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
      <motion.div
        variants={{
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
              ease: "easeOut",
            },
          },
        }}
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow"
      >
        <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#DE6328] mb-4 text-white">
          {icon}
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </motion.div>
    );
  }  

  function StatCard({
    title,
    detail,
  }: {
    title: string;
    detail: string;
  }) {
    const [flipped, setFlipped] = useState(false);
  
    return (
      <div
        className="relative group perspective cursor-pointer"
        onClick={() => setFlipped((prev) => !prev)}
      >
        {/* Orange splash */}
        <div className="absolute inset-0 rounded-2xl bg-[#F0EBE9] transform rotate-[-3deg] scale-105 opacity-90 transition-transform duration-500 group-hover:rotate-[-5deg]" />
  
        {/* Card */}
        <div
          className={`relative h-32 w-full transition-transform duration-700 transform-style-preserve-3d
          ${flipped ? "rotate-y-180" : ""}
          md:group-hover:rotate-y-180`}
        >
          {/* Front */}
          <div className="absolute inset-0 bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-center backface-hidden shadow-sm">
            <h4 className="font-medium text-[#131313] text-center">
              {title}
            </h4>
          </div>
  
          {/* Back */}
          <div className="absolute inset-0 bg-[#131313] rounded-2xl p-6 flex items-center justify-center rotate-y-180 backface-hidden shadow-lg">
            <p className="text-sm text-gray-200 text-center leading-relaxed">
              {detail}
            </p>
          </div>
        </div>
      </div>
    );
  }  
  

      {/* <section className="px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block mb-4 px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600">
            Human Capacity Development
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold max-w-3xl leading-tight">
            Building people, strengthening teams, and preparing organizations
            for sustainable growth.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl">
            We design and deliver practical training, leadership development,
            and workforce solutions that help individuals and organizations
            perform at their best—today and in the future.
          </p>
        </div>
      </section> */}