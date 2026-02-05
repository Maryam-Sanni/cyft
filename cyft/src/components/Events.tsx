import Header from "./Header";
import EventHero from "./EventHero";
import Footer from "./Footer"
import Service from "./EventManagementService"
import ProjectImage from "../assets/PictureRoll.png";
import BoothPricing from "./BoothCalculator"
import Process from "./OurProcessEv"
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
    <Header />
    <EventHero />
    <Service />
    <Process />
    <div className="text-center items-center">
    <h2 className="text-2xl md:text-[36px] font-semibold text-gray-900 mt-20">Explore Our Projects</h2>
    <div
  onClick={() => navigate("/gallery")}
  className="relative w-full overflow-hidden mt-7 lg:mt-15 cursor-pointer"
>
  <div className="marquee">
    <img src={ProjectImage} alt="Gallery strip" />
    <img src={ProjectImage} alt="Gallery strip duplicate" />
  </div>
</div>
  <h2 className="text-2xl md:text-[36px] font-semibold text-gray-900 mt-20 lg:mt-30">Get Cost Estimate</h2>
<BoothPricing />


    </div>
    <Footer />
    </div>
  );
};

export default LandingPage;