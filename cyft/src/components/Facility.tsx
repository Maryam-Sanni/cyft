import Header from "./Header";
import FacilityHero from "./FacilityHero";
import Footer from "./Footer"
import Process from "./OurProcessFa"
import Industries from "./industries"
import FaciltyService from "./FacilityServices"
import FacilityManagement from "./FacilityManagementService"
import FacilityComprehensive from "./FacilityComprehensive"

const LandingPage = () => {
  return (
    <div>
    <Header />
    <FacilityHero />
        <FacilityComprehensive />
    <Process />
    <Industries />

        <FacilityManagement />
<FaciltyService />

    <Footer />
    </div>
  );
};

export default LandingPage;