import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import arrowLong from "../assets/arrow-long-orange.png";
import booth from "../assets/booth.png"
import coreEvent from "../assets/coreEvent.png"
import specialEvent from "../assets/specialEvent.png"
import eventUltra from "../assets/eventUltra.png"
import {
  Store,
  Workflow,
  Sparkles,
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

    const SERVICES: Service[] = [
        {
            id: 1,
          service: "exhibition-booths",
          title: "Exhibition Booths",
          image: booth,
          icon: Store,
          alias: "Booths",
          description: "A branded display space designed to showcase products, services, or ideas at exhibitions, attracting visitors and facilitating engagement and interaction.",
          fulldescription: "A professionally branded display space strategically designed to showcase products, services, or ideas at exhibitions and trade shows. It is crafted to capture attention, attract the right audience, communicate brand value clearly, and encourage meaningful interaction, engagement, and lasting impressions with visitors.",
          details: [
            { heading: "Table, Chairs, Facia Name, Spotlight, Power Outlet, Waste Bin", items: ["2m x 2m White Panel Shell Scheme Exhibition Booth"] },
            { heading: "", items: ["2m x 3m White Panel Shell Scheme Exhibition Booth"] },
            { heading: "", items: ["3m x 3m White Panel Shell Scheme Exhibition Booth"] },
            { heading: "", items: ["3m x 4m White Panel Shell Scheme Exhibition Booth"] },
          ],
        },
        {
            id:2,
          service: "event-management",
          title: "Core Event Management Services",
          image: coreEvent,
          icon: Workflow,
          alias: "Core Services",
          description: "Professional planning and execution of essential event components, ensuring seamless coordination, efficiency, and high-quality event delivery.",
          fulldescription: "A professionally branded display space strategically designed to showcase products, services, or ideas at exhibitions and trade shows. It is crafted to capture attention, attract the right audience, communicate brand value clearly, and encourage meaningful interaction, engagement, and lasting impressions with visitors.",
          details: [
            { heading: "", items: ["Full-Service Event Planning and Coordination"] },
            { heading: "", items: ["Venue Sourcing and Booking"] },
            { heading: "", items: ["Events Design and Styling"] },
            { heading: "", items: ["Audio-Visual Equipments and Technical Support"] },
            { heading: "", items: ["Photography and Videography Services"] },
            { heading: "", items: ["Events Marketing and Promotional Materials"] },
            { heading: "", items: ["Events Design and Styling"] },
            { heading: "", items: ["Guest Registration and Management Systems"] },
            { heading: "", items: ["Wedding Planning Services"] },
            { heading: "", items: ["Exhibition Solutions and Trade Show Management"] },
            { heading: "", items: ["Transportation and Logistics Coordination"] },
            { heading: "", items: ["Conferences and Seminar Management"] },
            { heading: "", items: ["Corporate Event Solutions"] },
            { heading: "", items: ["Social Celebration Planning"] },
            { heading: "", items: ["Fund Raising and Charity Events Coordination"] },
            { heading: "", items: ["Product Launch Events"] },
            { heading: "", items: ["Government and Diplomatic Events"] },
            { heading: "", items: ["Destination Events Management"] },
          ],
        },
        {
            id:3,
            service: "specialized-events",
            title: "Specialized Events Packages",
            description:
              "Curated event solutions tailored to specific needs, offering customized planning, design, and execution for unique and impactful experiences.",
            image: specialEvent,
            icon: Sparkles,
            alias: "Specialized",
            fulldescription: "A professionally branded display space strategically designed to showcase products, services, or ideas at exhibitions and trade shows. It is crafted to capture attention, attract the right audience, communicate brand value clearly, and encourage meaningful interaction, engagement, and lasting impressions with visitors.",
            details: [
              { heading: "", items: ["Vacation Services"] },
              { heading: "", items: ["Tourism Services"] },
              { heading: "", items: ["Parties Services"] },
              { heading: "", items: ["Weddings & Celebrations"] },
              { heading: "", items: ["Corporate Retreats"] },
              { heading: "", items: ["Wellness & Retreats"] },
              { heading: "", items: ["Events Design and Styling"] },
              { heading: "", items: ["Adventure & Sports"] },
              { heading: "", items: ["Wedding Planning Services"] },
              { heading: "", items: ["Educational & Cultural Immersion"] },
              { heading: "", items: ["Milestone Celebrations"] },
              ],
          },
          {
            id:4,
            service: "packages-ultra",
            title: "Events Packages Ultra",
            description:
              "Additional event service options designed to enhance the main package, providing added features, upgrades, and flexible customization.",
            image: eventUltra,
            icon: Layers,
            alias: "Ultra",
            fulldescription: "A professionally branded display space strategically designed to showcase products, services, or ideas at exhibitions and trade shows. It is crafted to capture attention, attract the right audience, communicate brand value clearly, and encourage meaningful interaction, engagement, and lasting impressions with visitors.",
            details: [
              { heading: "", items: ["BOOTH MANAGEMENT SERVICES"] },
              { heading: "", items: ["INTERPRETATION SERVICES"] },
              { heading: "", items: ["CLIENT ENGAGEMENT PERSONNEL SERVICES"] },
              { heading: "", items: ["SECURITY SERVICES"] },
              ],
          },
      ];

type Service = {
    id: number,
    service: string; 
    title: string;
    description: string;
    fulldescription: string;
    details: { heading: string; items: string[] }[];
    image: string;
    icon: any;
    alias: string;
  };  

export default function EventsManagementServices() {
    const [activeService, setActiveService] = useState<Service | null>(null);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
      setExpandedId((prev) => (prev === id ? null : id));
    };
    
  if (!activeService) {
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
        <h2 className="text-3xl lg:text-[48px] font-semibold text-center mb-15">
          Events Management Services
        </h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {SERVICES.map((service) => {
    const Icon = service.icon;
    const isOpen = expandedId === service.id;

    return (
      <motion.div
        key={service.id}
        layout
        className="border border-gray-100 rounded-lg p-5 shadow-sm bg-white"
      >
        {/* Top content */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Icon className="text-[#DE6328]" size={20} />
              <h3 className="font-semibold text-lg lg:text-[22px]">
                {service.title}
              </h3>
            </div>

            <p className="text-sm text-gray-600">
              {service.description}
            </p>

            <button
              onClick={() => toggleExpand(service.id)}
              className="flex items-center gap-2 text-[#DE6328] text-sm mt-4"
            >
              {isOpen ? "Show Less" : "Read More"}
              <img src={arrowLong} alt="" />
            </button>
          </div>

          {/* <img
            src={service.image}
            alt={service.title}
            className="w-24 h-24 object-contain"
          /> */}
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="mt-6 overflow-hidden"
            >

              {/* Details in 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className=""
                  >
                    <h4 className="font-semibold mb-1 text-sm">
                      {detail.heading}
                    </h4>
                    <ul className="text-sm text-gray-700 list-disc pl-4">
                      {detail.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  })}
</div>

        </motion.div>
        </AnimatePresence>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
       <motion.div
        key="detail"
        initial={{ opacity: 0, x: 60, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -60, scale: 0.98 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
      <div className="flex items-center gap-3">
        <button
          onClick={() => setActiveService(null)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left info panel */}
        <div className="p-6">
        <motion.div
  layout
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  className="items-center justify-center border border-gray-100 rounded-lg p-8 shadow-sm"
>
                <div>
                  <h3 className="font-semibold text-lg lg:text-[36px] mb-3">
                    {activeService.title}
                  </h3>
                  <div className="flex gap-4 items-start">
                  <p className="text-sm lg:text-[16px] text-gray-600 mb-3">
                    {activeService.fulldescription}
                  </p>
                  {/* <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-24 h-24 object-contain"
                /> */}
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-3 md:grid-cols-3 gap-5 mt-10">
  {SERVICES.filter((s) => s.id !== activeService?.id).map((service) => {
    const Icon = service.icon;

    return (
      <div
        key={service.id}
        onClick={() => setActiveService(service)}
        className="flex flex-col items-center justify-center gap-2 border bg-[#FFEAD2] border-[#F6973F] rounded-lg p-3 shadow-sm hover:shadow-md transition cursor-pointer"
      >
        {/* Icon */}
        <div className="w-10 h-10 rounded-full bg-[#DE6328]/10 flex items-center justify-center">
          <Icon className="text-[#DE6328]" size={20} />
        </div>

        {/* Title */}
        <h3 className="font-semibold text-[#DE6328] text-sm text-center leading-tight">
          {service.alias}
        </h3>
      </div>
    );
  })}
</div>
         
        </div>

        {/* Right scrollable list */}
        <div className="p-6 max-h-[420px] overflow-y-auto lg:ml-10">
             <div className="p-6 max-h-[420px] overflow-y-auto">
            {activeService.details.map((detail, idx) => (
              <div key={idx} className="mb-4 border-b pb-2 last:border-b-0 border-[#F6973F]">
                <h4 className="font-semibold mb-2 lg:text-[18px]">{detail.heading}</h4>
                <ul className="text-gray-700">
                  {detail.items.map((item, index) => (
                      <li
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
}
