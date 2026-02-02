import arrowLong from "../assets/arrow-long-orange.png";
import Gallery1 from "../assets/Gallery1.png";
import Gallery2 from "../assets/Gallery2.png";
import Gallery3 from "../assets/Gallery3.png";
import MobileGallery from "../assets/mobile-gallery.png";
import { useNavigate } from "react-router-dom";

export default function GallerySection() {
  const navigate = useNavigate();

    return (
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  
            {/* Content */}
            <div className="space-y-6 mt-[-50px] lg:mt-0">
              <span className="text-[18px] font-medium tracking-widest text-[#DE6328] uppercase">
              GALLERY
              </span>
  
              <h2 className="text-3xl md:text-[42px] font-bold text-gray-900 leading-tight mt-[25px]">
              Explore Our <br /> Expertise Firsthand, <br /> Up Close
              </h2>
  
              <p className="text-gray-600 leading-relaxed max-w-xl text-sm md:text-[18px] mt-3">
              Because results speak for themselves, these highlights capture our events, facility management, and training initiatives across different engagements.
              </p>
  
              <button 
              onClick={() => navigate("/gallery")} 
              className="flex items-center gap-2 text-[#DE6328] text-sm font-normal hover:gap-3 transition-all mt-4">
                More Info  <img src={arrowLong} alt="Arrow" className="w-auto h-auto justify-right" />
              </button>
            </div>

             {/* Image Layout (Desktop) */}
             <div className="hidden sm:grid grid-cols-2 gap-4">
{/* Left stacked images */}
<div className="flex flex-col gap-6">
<img
src={Gallery1}
alt="Event crowd"
className="w-full h-auto object-cover rounded-2xl"
/>


<img
src={Gallery2}
alt="Facility management work"
className="w-full h-auto object-cover rounded-2xl mt-[-80px]"
/>
</div>


{/* Right tall image */}
<div className="relative mt-0 lg:mt-[180px]">
              {/* Background shape */}
              <div className="hidden md:block absolute -top-15 -right-1 w-[280px] bg-[#F7F7F7] rounded-3xl" />
  
              <img
               src={Gallery3}
                alt="Event setup"
                className="relative w-full lg:h-[445px] h-[380px] object-cover rounded-3xl shadow-lg"
              />
            </div>
            </div>

 {/* Image Layout (Mobile) */}
 <div className="relative w-full h-full sm:hidden mt-10 flex justify-center">
  {/* Bottom image */}
  <img
    src={MobileGallery}
    alt="Event setup"
    className="w-full h-auto object-cover rounded-3xl"
  />
</div>


          </div>
        </div>
      </section>
    );
  }