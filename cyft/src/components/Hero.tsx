import { useState } from "react";
import heroImage from "../assets/Hero1.png";
import heroImage2 from "../assets/Hero2.png";
import heroImage3 from "../assets/Hero3.png";
import arrowLong from "../assets/arrow-long.png";
import { Check } from "lucide-react";

const Hero = () => {
    const [currentHero, setCurrentHero] = useState(heroImage);

    const heroImages = [heroImage, heroImage2, heroImage3];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="sm-hidden">
      <img
  src={currentHero}
  alt="Hero"
  className="absolute inset-0 w-full h-full"
/>
</div>

<div className="lg-hidden">
<img
  src={currentHero}
  alt="Hero"
  className="absolute inset-0 w-full h-full object-cover lg:object-center"
/>
</div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex h-full">
        <div className="mt-[-80px]">
          <h1 className="text-white text-4xl md:text-6xl lg:text-[80px] font-bold leading-tight">
            Structured Event Planning & <br />
            Reliable Facility Operations
          </h1>

          <p className="mt-6 text-white/80 text-md md:text-[18px] lg:text-[24px] leading-relaxed max-w-[600px] mx-auto">
            End-to-end management services built for consistency,
            accountability and results.
          </p>

          <button className="mt-8 lg:w-[389px] w-[200px] inline-flex flex justify-between gap-3 bg-[#DE6328] text-white px-4 py-3 border-1 border-white rounded-full lg:text-[24px] text-md font-bold hover:bg-orange-500 transition">
            Get in touch
            <img src={arrowLong} alt="Arrow" className="w-auto h-auto justify-right" />
          </button>
        </div>
      </div>
       {/* Transparent box with circles */}
       <div className="absolute h-10 border-1 border-white left-6 lg:left-12 bottom-10 lg:top-1/2 lg:transform lg:-translate-y-1/2 bg-white/20 rounded-xl px-2 py-2 flex gap-3 z-20">
       {heroImages.map((img, index) => (
  <button
    key={index}
    onClick={() => setCurrentHero(img)}
    className={`relative w-5 h-5 rounded-full border-2 border-white flex items-center justify-center ${
      index === 0
        ? "bg-[#DE6328]"
        : index === 1
        ? "bg-[#385650]"
        : "bg-[#D6D3CE]"
    }`}
  >
    {currentHero === img && (
      <Check className="text-white"/>
    )}
  </button>
))}
      </div>
    </section>
  );
};

export default Hero;
