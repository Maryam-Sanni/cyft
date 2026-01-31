import Header from "./Header";
import FacilityHero from "./FacilityHero";
import Footer from "./Footer"
import Process from "./OurProcessFa"
import Industries from "./industries"
import FaciltyService from "./FacilityService"
import FacilityManagement from "./FacilityManagementService"

const LandingPage = () => {
  return (
    <div>
    <Header />
    <FacilityHero />
    <Industries />
    <Process />
    <FacilityManagement />
<FaciltyService />

    <Footer />
    </div>
  );
};

export default LandingPage;