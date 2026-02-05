import ProjectImage from "../assets/PictureRoll.png";
import arrowLong from "../assets/arrow-long.png";
import { useNavigate } from "react-router-dom";

export default function OurServices() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-15 mt-10 transition-colors duration-300 bg-[#FAD6AD] justify-center">
      <div>

  {/* Text */}
  <div className="space-y-6 flex flex-col justify-center">
  <div className="flex flex-col items-center text-center">
    <h3 className="text-3xl md:text-[42px] font-bold text-[#DE6328] leading-tight justify-center">
    Facility Management Services
    </h3>
    <p className="text-gray-600 max-w-xl text-sm md:text-[18px]">Reliable solutions that ensure efficient operations, maintenance, and a safe, well-managed environment.</p>
    </div>
    <div
  onClick={() => navigate("/gallery")}
  className="relative w-full overflow-hidden mt-7 lg:mt-15 cursor-pointer"
>
  <div className="marquee">
    <img src={ProjectImage} alt="Gallery strip" />
    <img src={ProjectImage} alt="Gallery strip duplicate" />
  </div>
</div>
  <div className="flex justify-center mt-20">
  <button
    onClick={() => navigate("/contact")}
    className="inline-flex justify-center items-center w-[250px] gap-2 bg-[#DE6328] text-white px-4 py-3 rounded-full text-md font-medium hover:bg-orange-500 transition"
  >
    Book an Appointment
    <img src={arrowLong} alt="Arrow" className="w-auto h-auto" />
  </button>
</div>
</div>

      </div>
    </section>
  );
}
