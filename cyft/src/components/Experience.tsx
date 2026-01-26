import Experience from "../assets/experience.png";
import arrowLong from "../assets/arrow-long-orange.png";

export default function ExperienceSection() {
    return (
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              {/* Background shape */}
              <div className="hidden md:block absolute -top-8 -left-8 w-full h-full bg-[#F7F7F7] rounded-3xl" />
  
              <img
                src= {Experience}
                alt="Event experience"
                className="relative w-full h-[280px] md:h-[420px] object-cover rounded-3xl shadow-lg"
              />
            </div>
  
            {/* Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <span className="text-[18px] font-medium tracking-widest text-[#DE6328] uppercase">
                Experiences
              </span>
  
              <h2 className="text-3xl md:text-[42px] font-bold text-gray-900 leading-tight mt-[25px]">
                We Provide You The <br /> Best Experience
              </h2>
  
              <p className="text-gray-600 leading-relaxed max-w-xl text-sm md:text-[18px] mt-3">
                You don’t have to worry about coordination, timelines, operational gaps, or staff readiness, because we manage every detail with structure, professionalism, and clear accountability from start to finish.
              </p>
  
              <button className="flex items-center gap-2 text-[#DE6328] text-sm font-normal hover:gap-3 transition-all mt-4">
                More Info  <img src={arrowLong} alt="Arrow" className="w-auto h-auto justify-right" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  