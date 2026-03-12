import Header from "./Header";
import FacilityHero from "./FacilityHealthHero";
import FacilityHealthOffer from "./FacilityHealthOffer";
import HowItWorks from "./FacilityHealth-HowItWorks";
import Services from "./FacilityHealthService";
import Assessment from "./FacilityAssessmentPage";
import Compliance from "./FacilityCompliance";
import Footer from "./Footer"
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
    <Header />
    <FacilityHero />
    <FacilityHealthOffer />
    <HowItWorks />
    <Services />
    <Assessment />
    <Compliance />
<section className="bg-[#FAD6AD] py-20 px-6 mb-12 mt-12">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl lg:text-[44px] font-bold mb-4">
      Ready to Transform Your Facility Management?
    </h2>
    <p className="text-lg mb-12">
      Experience predictive maintenance, real-time monitoring, and data-driven insights
      with the CYFT Facility Health Platform. Take control of your facility today.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      {/* Contact Us Button */}
      <button
        onClick={() => navigate("/contact")}
        className="flex justify-center items-center gap-2 text-white bg-[#DE6328] px-6 py-4 rounded-full text-md font-semibold hover:bg-gray-100 hover:text-[#DE6328] transition"
      >
        Contact Us
        <ArrowRight size={20} />
      </button>

      {/* Book a Demo Button */}
      <button
        onClick={() => navigate("/book-demo")}
        className="flex justify-center items-center gap-2 border border-[#DE6328] text-[#DE6328] px-6 py-4 rounded-full text-md font-semibold hover:bg-white hover:text-[#DE6328] transition"
      >
        Book a Demo
        <ArrowRight size={20} />
      </button>
    </div>
  </div>
</section>
      <Footer />
    </div>
  );
};

export default LandingPage;