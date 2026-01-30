import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import arrowLong from "../assets/arrow-long-orange.png";

    const SERVICES: Service[] = [
        {
            id: 1,
          service: "exhibition-booths",
          title: "Exhibition Booths",
          image: "https://via.placeholder.com/120",
          description: "A branded display space designed to showcase products, services, or ideas at exhibitions, attracting visitors and facilitating engagement and interaction.",
          fulldescription: "A professionally branded display space strategically designed to showcase products, services, or ideas at exhibitions and trade shows. It is crafted to capture attention, attract the right audience, communicate brand value clearly, and encourage meaningful interaction, engagement, and lasting impressions with visitors.",
          details: [
            { heading: "2x2 White Panel Shell Scheme Exhibition Booth", items: ["Table, Chairs, Facia Name, Spotlight, Power Outlet, Waste Bin"] },
            { heading: "2x2 White Panel Shell Scheme Exhibition Booth", items: ["Table, Chairs, Facia Name, Spotlight, Power Outlet, Waste Bin"] },
          ],
        },
        {
            id:2,
          service: "event-management",
          title: "Core Event Management Services",
          image: "https://via.placeholder.com/120",
          description: "Professional planning and execution of essential event components, ensuring seamless coordination, efficiency, and high-quality event delivery.",
          fulldescription: "A professionally branded display space strategically designed to showcase products, services, or ideas at exhibitions and trade shows. It is crafted to capture attention, attract the right audience, communicate brand value clearly, and encourage meaningful interaction, engagement, and lasting impressions with visitors.",
          details: [
            { heading: "2x2 White Panel Shell Scheme Exhibition Booth", items: ["Table, Chairs, Facia Name, Spotlight, Power Outlet, Waste Bin"] },
            { heading: "2x2 White Panel Shell Scheme Exhibition Booth", items: ["Table, Chairs, Facia Name, Spotlight, Power Outlet, Waste Bin"] },
          ],
        },
        {
            id:3,
            service: "specialized-events",
            title: "Specialized Events Packages",
            description:
              "Curated event solutions tailored to specific needs, offering customized planning, design, and execution for unique and impactful experiences.",
            image: "https://via.placeholder.com/120",
            fulldescription: "A professionally branded display space strategically designed to showcase products, services, or ideas at exhibitions and trade shows. It is crafted to capture attention, attract the right audience, communicate brand value clearly, and encourage meaningful interaction, engagement, and lasting impressions with visitors.",
            details: [
                { heading: "2x2 White Panel Shell Scheme Exhibition Booth", items: ["Table, Chairs, Facia Name, Spotlight, Power Outlet, Waste Bin"] },
                { heading: "2x2 White Panel Shell Scheme Exhibition Booth", items: ["Table, Chairs, Facia Name, Spotlight, Power Outlet, Waste Bin"] },
              ],
          },
          {
            id:4,
            service: "packages-ultra",
            title: "Events Packages Ultra",
            description:
              "Additional event service options designed to enhance the main package, providing added features, upgrades, and flexible customization.",
            image: "https://via.placeholder.com/120",
            fulldescription: "A professionally branded display space strategically designed to showcase products, services, or ideas at exhibitions and trade shows. It is crafted to capture attention, attract the right audience, communicate brand value clearly, and encourage meaningful interaction, engagement, and lasting impressions with visitors.",
            details: [
                { heading: "2x2 White Panel Shell Scheme Exhibition Booth", items: ["Table, Chairs, Facia Name, Spotlight, Power Outlet, Waste Bin"] },
                { heading: "2x2 White Panel Shell Scheme Exhibition Booth", items: ["Table, Chairs, Facia Name, Spotlight, Power Outlet, Waste Bin"] },
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
  };  

export default function EventsManagementServices() {
    const [activeService, setActiveService] = useState<Service | null>(null);

  if (!activeService) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl lg:text-[48px] font-semibold text-center mb-15">
          Events Management Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="border lg:h-[200px] lg:w-[559px] border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() => setActiveService(service)}
            >
              <div className="flex gap-4 items-start">
                <div>
                  <h3 className="font-semibold text-lg lg:text-[24px] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm lg:text-[16px] text-gray-600 mb-3">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-[#DE6328] text-sm font-normal hover:gap-3 transition-all mt-4">
                Read More  <img src={arrowLong} alt="Arrow" className="w-auto h-auto justify-right" />
              </button>
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setActiveService(null)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
       
      </div>

      <h2 className="text-3xl lg:text-[48px] font-semibold text-center mb-15">
          Events Management Services
        </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left info panel */}
        <div className="p-6">
        <div
              className="items-center justify-center border lg:h-[350px] lg:w-[559px] border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="flex gap-4 items-start">
                <div>
                  <h3 className="font-semibold text-lg lg:text-[36px] mb-10">
                    {activeService.title}
                  </h3>
                  <p className="text-sm lg:text-[16px] text-gray-600 mb-3">
                    {activeService.fulldescription}
                  </p>
                </div>
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mt-10">
        {SERVICES.filter((s) => s.id !== activeService?.id).map((service) => (
          <div
          key={service.id}
          className="flex items-center justify-center border bg-[#FFEAD2] border-[#F6973F] rounded-lg p-2 shadow-sm hover:shadow-md transition cursor-pointer"
          onClick={() => setActiveService(service)}
        >
          <h3 className="font-semibold text-[#DE6328] text-md text-center">{service.title}</h3>
        </div>        
         ))}
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
    </section>
  );
}
