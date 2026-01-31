import { CalendarCheck, CreditCard, ClipboardList } from "lucide-react";
// import arrowprocess from "../assets/Vector.png";

export default function OurProcess() {
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
              <CalendarCheck className="text-[#DE6328]" size={24} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Consultation & Planning
            </h3>
            <p className="text-gray-600 text-sm max-w-xs">
              We begin with a detailed consultation to understand your vision,
              event goals, budget, and timeline—then craft a tailored plan to
              bring it all together seamlessly.
            </p>
          </div>

          {/* Arrow */}
          {/* <img src={arrowprocess} alt="Arrow" className="w-[86px] h-[20px]" /> */}

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border border-orange-400 flex items-center justify-center mb-4">
              <CreditCard className="text-[#DE6328]" size={24} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Transparent Payment Process
            </h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Our secure and transparent payment process ensures clear pricing,
              easy confirmations, and peace of mind before we move forward.
            </p>
          </div>

          {/* Arrow */}

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border border-orange-400 flex items-center justify-center mb-4">
              <ClipboardList className="text-[#DE6328]" size={24} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Execution & Delivery
            </h3>
            <p className="text-gray-600 text-sm max-w-xs">
              From vendor coordination to on-site management, we execute every
              detail with precision—so you can relax and enjoy a flawless event.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-14">
          <button className="bg-[#DE6328] hover:bg-orange-500 text-white px-8 py-3 rounded-full font-medium transition">
            Book an Appointment
          </button>
          <button className="border border-[#DE6328] text-[#DE6328] hover:bg-orange-50 px-8 py-3 rounded-full font-medium transition">
            Check Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
