import office from "../assets/Office.png";
import government from "../assets/Government.png"
import health from "../assets/Health.png"
import event from "../assets/Event-Center.png"
import education from "../assets/Education.png"
import hotel from "../assets/Hotel.png"
import retail from "../assets/Retail.png"
import realEstate from "../assets/Real-estate.png"
import industry from "../assets/industry.png"

const industries = [
  {
    title: "Corporate Offices",
    description:
      "Workspace optimization, technology integration, employee experience",
    image: office,
  },
  {
    title: "Government Buildings",
    description:
      "Security protocols, accessibility compliance, cost optimization",
    image: government,
  },
  {
    title: "Healthcare Facilities",
    description:
      "Infection control, medical equipment maintenance, regulatory  compliance",
    image: health,
  },
  {
    title: "Event Centers",
    description:
      "Event setup support, crowd management systems, flexible space  configuration",
    image: event,
  },
  {
    title: "Educational Institutions",
    description:
      "Safety systems, learning environment optimization, energy efficiency",
    image: education,
  },
  {
    title: "Hotels & Apartments",
    description:
      "Guest experience optimization, housekeeping coordination, amenity management",
    image: hotel,
  },
  {
    title: "Retail & Commercial",
    description:
      "Customer experience enhancement, security, energy management",
    image: retail,
  },
  {
    title: "Real Estate",
    description:
      "Property maintenance, tenant relations, asset value preservation",
    image: realEstate,
  },
  {
    title: "Industrial Facilities",
    description:
      "Equipment maintenance, safety compliance, operational efficiency",
    image: industry,
  },
];
  
  export default function IndustriesServices() {
    return (
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-10 mt-20">
            Industries We Serve
          </h2>
  
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-30 gap-y-5">
          {industries.map((item, index) => (
  <div
    key={index}
    className="items-start gap-4 border-b border-[#F6973F] pb-2"
  >
    <div className="flex-shrink-0 w-20 h-20 mb-2 rounded-md flex items-center justify-center">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 object-contain"
      />
    </div>

    <div>
      <h3 className="font-semibold text-gray-900 mb-1">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed max-w-md">
        {item.description}
      </p>
    </div>
  </div>
))}

          </div>
        </div>
      </section>
    );
  }
  