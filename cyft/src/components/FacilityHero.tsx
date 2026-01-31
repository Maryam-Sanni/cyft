import facilityHero from "../assets/Facility.png";
import arrowLong from "../assets/arrow-long.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative lg:h-[1024px] lg:w-[1440px] min-h-[550px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
{/* Mobile only: object-cover */}
<div className="block lg:hidden">
  <img
    src={facilityHero}
    alt="Hero"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
</div>

{/* Desktop only: default / object-center */}
<div className="hidden lg:block">
  <img
    src={facilityHero}
    alt="Hero"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
</div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex h-full mt-0 lg:mt-[500px]">
        <div className="">
          <h1 className="text-black text-[32px] md:text-5xl lg:text-[80px] font-bold">
          Facility Management
          </h1>

          <p className="mt-6 text-black/80 text-md md:text-[18px] lg:text-[24px] max-w-[600px] mx-auto">
          Organized management and flawless execution <br/> for every premises
          </p>

          <button 
          onClick={() => {navigate("/contact")}}
          className="lg:mt-15 mt-10 lg:w-[389px] w-[200px] inline-flex flex justify-between gap-3 bg-[#DE6328] text-white px-4 py-2 border-1 border-white rounded-full lg:text-[22px] text-md font-bold hover:bg-orange-500 transition">
            Get in touch
            <img src={arrowLong} alt="Arrow" className="w-auto h-auto justify-right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
