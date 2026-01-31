import Header from "./Header";
import EventHero from "./EventHero";
import Footer from "./Footer"
import Service from "./EventManagementService"
import ProjectImage from "../assets/ProjectsImage.png";
import BoothPricing from "./BoothCalculator"
import Process from "./OurProcessEv"

const LandingPage = () => {
  return (
    <div>
    <Header />
    <EventHero />
    <Service />
    <Process />
    <div className="text-center items-center">
    <h2 className="text-2xl md:text-[36px] font-semibold text-gray-900 mt-20">Explore Our Projects</h2>
    <div className="w-full flex justify-center mt-7 lg:mt-15">
    <img
      src={ProjectImage}
      alt={"Project-Image"}
      className="w-full h-full object-cover"
    />
  </div>
  <h2 className="text-2xl md:text-[36px] font-semibold text-gray-900 mt-20 lg:mt-30">Get Cost Estimate</h2>
<BoothPricing />


    </div>
    <Footer />
    </div>
  );
};

export default LandingPage;