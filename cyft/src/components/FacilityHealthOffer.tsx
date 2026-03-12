import arrowLong from "../assets/arrow-long-orange.png";
import Image from "../assets/H9.png";
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
              WHAT WE OFFER
              </span>
  
              <h2 className="text-3xl md:text-[42px] font-bold text-gray-900 leading-tight mt-[25px]">
              Facility Intelligence <br /> in Real Time
              </h2>
  
              <p className="text-gray-600 leading-relaxed max-w-xl text-sm md:text-[18px] mt-3">
              The CYFT Facility Health Platform is a cloud-based monitoring system that provides real-time visibility into facility infrastructure. Using mobile-friendly checklists, automated fuel monitoring, and intelligent dashboards, facility teams can track the health of critical infrastructure from any internet-connected device.
              </p>
  
              <button 
              onClick={() => navigate("/gallery")} 
              className="flex items-center gap-2 text-[#DE6328] text-sm font-normal hover:gap-3 transition-all mt-4">
                Book a Demo  <img src={arrowLong} alt="Arrow" className="w-auto h-auto justify-right" />
              </button>
            </div>

             <div className="hidden md:block" >
                <img
                  src={Image}
                  alt="Facility-health"
                  className="relative w-full h-[280px] md:h-[420px] object-cover rounded-3xl shadow-l"
                />
                </div>


          </div>
        </div>
      </section>
    );
  }