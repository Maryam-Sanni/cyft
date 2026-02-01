import { Building2, FileCheck2, Wallet } from "lucide-react";
// import arrowprocess from "../assets/Vector.png";
import { useNavigate } from "react-router-dom";

export default function OurProcess() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
          Our Process
        </h2>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border border-orange-400 flex items-center justify-center mb-4">
            <Building2 className="text-[#DE6328]" size={24} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
            Facility Assessment & Planning
            </h3>
            <p className="text-gray-600 text-sm max-w-xs">
            We assess your facility, identify operational needs, safety requirements,
    and service priorities, then develop a structured management plan tailored
    to your space.
            </p>
          </div>

          {/* Arrow */}
          {/* <img src={arrowprocess} alt="Arrow" className="w-[86px] h-[20px]" /> */}

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border border-orange-400 flex items-center justify-center mb-4">
            <Wallet className="text-[#DE6328]" size={24} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
            Service Agreement & Payment Setup
            </h3>
            <p className="text-gray-600 text-sm max-w-xs">
            We present clear service terms, transparent pricing, and flexible payment
    options—ensuring approvals are completed smoothly before operations begin.
            </p>
          </div>

          {/* Arrow */}

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border border-orange-400 flex items-center justify-center mb-4">
              <FileCheck2 className="text-[#DE6328]" size={24} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
            Operations & Ongoing Management
            </h3>
            <p className="text-gray-600 text-sm max-w-xs">
            Our team handles daily operations, maintenance coordination, monitoring, and
  reporting—keeping your facility safe, efficient, and fully functional at all
  times.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-14">
          <button 
          onClick={() => {navigate("/contact")}}
          className="bg-[#DE6328] hover:bg-orange-500 text-white px-8 py-3 rounded-full font-medium transition">
            Book an Appointment
          </button>
          {/* <button className="border border-[#DE6328] text-[#DE6328] hover:bg-orange-50 px-8 py-3 rounded-full font-medium transition">
            Check Pricing
          </button> */}
        </div>
      </div>
    </section>
  );
}
