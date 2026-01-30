import { useState } from "react";
import { motion } from "framer-motion";
import Experience from "../assets/experience.png";
import Gallery1 from "../assets/experience2.png";
import arrowLong from "../assets/arrow-long-orange.png";

export default function ExperienceSection() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Flip Card */}
          <div className="relative order-2 lg:order-1 w-full h-[280px] md:h-[420px] perspective">
            <motion.div
              className="w-full h-full relative "
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Front Image */}
              {!flipped && (
                <div>
                  <div className="hidden md:block absolute -top-8 -left-8 w-full h-full bg-[#F7F7F7] rounded-3xl" />
                <img
                  src={Experience}
                  alt="Experience"
                  className="relative w-full h-[280px] md:h-[420px] object-cover rounded-3xl shadow-l"
                />
                </div>
              )}

              {/* Back Image + Full Description */}
              {flipped && (
                  <div>
                  <div className="hidden md:block absolute -top-8 -left-8 w-full h-full bg-[#F7F7F7] rounded-3xl" />
                <div className="absolute w-full h-full rounded-3xl overflow-hidden backface-hidden flex flex-col">
                  <img
                    src={Gallery1}
                    alt="Detailed Experience"
                    className="relative w-full h-[280px] md:h-[420px] object-cover rounded-3xl shadow-l"
                  />
                </div>
                </div>
              )}
            </motion.div>
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

            {flipped && (
            <div className="flex items-center">
                    <p className="text-gray-600 leading-relaxed max-w-xl text-sm md:text-[18px] mt-3">
                      Our events are fully curated with attention to every detail. From operational readiness to guest engagement, we make every experience unforgettable. Our team ensures timelines, coordination, and staff readiness are all perfectly managed.
                    </p>
                  </div>
            )}

            {/* More Info Button */}
            <button
              className="flex items-center gap-2 text-[#DE6328] text-sm font-normal hover:gap-3 transition-all mt-4"
              onClick={() => setFlipped(!flipped)}
            >
              {flipped ? "Less Info" : "More Info"}  
              <img src={arrowLong} alt="Arrow" className="w-auto h-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
