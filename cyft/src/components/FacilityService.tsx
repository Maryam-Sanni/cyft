import ProjectImage from "../assets/ProjectsImage.png";
import arrowLong from "../assets/arrow-long.png";

export default function OurServices() {
 
  return (
    <section className="w-full py-16 px-4 transition-colors duration-300 bg-[#FAD6AD]">
      <div className="max-w-7xl mx-auto">

  {/* Text */}
  <div className="space-y-6 flex flex-col justify-center items-start lg:items-start">
    <h3 className="text-3xl md:text-[42px] font-bold text-[#DE6328] leading-tight">
    Facility Management Services
    </h3>
    <p className="text-gray-600 max-w-xl text-sm md:text-[18px]">Reliable solutions that ensure efficient operations, maintenance, and a safe, well-managed environment.</p>
    <div className="w-full flex justify-center mt-7 lg:mt-15">
    <img
      src={ProjectImage}
      alt={"Project-Image"}
      className="w-full h-full object-cover"
    />
  </div>

  <button className="inline-flex justify-center mt-8 items-center gap-2 bg-[#DE6328] text-white px-4 py-2 rounded-full text-md font-normal hover:bg-orange-500 transition">
     Book an Appointment
      <img src={arrowLong} alt="Arrow" className="w-auto h-auto" />
    </button>
</div>

      </div>
    </section>
  );
}
