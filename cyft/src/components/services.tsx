import { useState } from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import arrowLong from "../assets/arrow-long.png";

const services = {
    events: {
      label: "Events Management",
      bg: "bg-[#F7F7F7]",
      title: "Seamless Event Planning & Execution",
      description:
        "From corporate conferences to private celebrations, we handle every detail to deliver memorable and flawlessly managed events.",
      image: service1,
    },
    facility: {
      label: "Facility Management",
      bg: "bg-[#F6B76F]",
      title: "Reliable Facility Operations",
      description:
        "We maintain and manage your facilities with structured processes, ensuring smooth day-to-day operations and long-term efficiency",
      image: service2,
    },
    training: {
      label: "Training",
      bg: "bg-[#B0C1E9]",
      title: "Professional Training & Development",
      description:
        "We provide targeted training programs to equip your team with the skills and knowledge needed for optimal performance",
      image: service3,
    },
  } as const;

type ServiceKey = keyof typeof services;

export default function OurServices() {
    const [active, setActive] = useState<ServiceKey>("events"); 
    const service = services[active]; 

  return (
    <section className={`w-full py-16 px-4 transition-colors duration-300 ${service.bg}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[42px] font-bold text-gray-900">Our Services</h2>
          <div className="mt-6 inline-flex flex-wrap gap-2 bg-[#EEEEEE] p-2 rounded-full justify-center">
  {Object.keys(services).map((key) => (
    <button
      key={key}
      onClick={() => setActive(key as ServiceKey)}
      className={`px-4 py-2 rounded-full transition text-sm md:text-[18px] ${
        active === key
          ? "bg-white shadow text-gray-900"
          : "text-gray-500 hover:text-gray-900"
      }`}
    >
      {/* Short label for mobile */}
      <span className="inline sm:hidden">
        {key === "events"
          ? "Events"
          : key === "facility"
          ? "Facility"
          : "Training"}
      </span>
      {/* Full label for desktop */}
      <span className="hidden sm:inline">{services[key as ServiceKey].label}</span>
    </button>
  ))}
</div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
  {/* Text */}
  <div className="space-y-6 flex flex-col justify-center items-start lg:items-start">
    <h3 className="text-3xl md:text-[42px] font-bold text-gray-900 leading-tight">
      {service.title}
    </h3>
    <p className="text-gray-600 max-w-xl text-sm md:text-[24px]">{service.description}</p>
    <button className="inline-flex items-center gap-2 bg-[#DE6328] text-white px-4 py-2 rounded-full text-md font-normal hover:bg-orange-500 transition">
      Get in touch
      <img src={arrowLong} alt="Arrow" className="w-auto h-auto" />
    </button>
  </div>

  {/* Image */}
  <div className="w-full flex justify-center">
    <img
      src={service.image}
      alt={service.title}
      className="w-[470px] h-[300px] md:h-[470px] object-cover rounded-2xl"
    />
  </div>
</div>

      </div>
    </section>
  );
}
