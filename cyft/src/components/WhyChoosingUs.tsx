// import arrowLong from "../assets/arrow-long-orange.png";

export default function WhyChoosingUs() {
  return (
    <section className="w-full bg-white py-16 px-4 lg:mt-15 mt-[-50px] lg:mb-15 mb-1">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
          {/* Left Title */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-[42px] font-bold text-gray-900 leading-tight">
              Why <br className="hidden md:block" /> Choose Us
            </h2>
          </div>

          {/* Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="space-y-4">
              <h3 className="text-[24px] font-semibold text-gray-900">Structured Processes</h3>
              <p className="text-gray-600 text-[16px] leading-relaxed">
                We work with clear systems and procedures that ensure efficient planning and consistent results.
              </p>
              {/* <button className="flex items-center gap-2 text-[#DE6328] text-sm font-normal hover:gap-3 transition-all">
                More Info  <img src={arrowLong} alt="Arrow" className="w-auto h-auto justify-right" />
              </button> */}
            </div>

            {/* Card 2 */}
            <div className="space-y-4">
              <h3 className="text-[24px] font-semibold text-gray-900">Dependable Delivery</h3>
              <p className="text-gray-600 text-[16px] leading-relaxed">
                We deliver services as agreed, meet timelines and maintain standards across all events and operations.
              </p>
              {/* <button className="flex items-center gap-2 text-[#DE6328] text-sm font-normal hover:gap-3 transition-all">
                More Info <img src={arrowLong} alt="Arrow" className="w-auto h-auto justify-right" />
              </button> */}
            </div>

            {/* Card 3 */}
            <div className="space-y-4">
              <h3 className="text-[24px] font-semibold text-gray-900">Clear Accountability</h3>
              <p className="text-gray-600 text-[16px] leading-relaxed">
                We take responsibility for every assignment with proper supervision, communication and follow through.
              </p>
              {/* <button className="flex items-center gap-2 text-[#DE6328] text-sm font-normal hover:gap-3 transition-all">
                More Info <img src={arrowLong} alt="Arrow" className="w-auto h-auto justify-right" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
