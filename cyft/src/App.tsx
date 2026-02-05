import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
// import ComingSoon from "./components/ComingSoon";
import Connect from "./components/Connect";
import Contact from "./components/Contact"
import Events from "./components/Events";
import Facility from "./components/Facility";
import Resources from "./components/Resources";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./components/GalleryPage";
import AboutUs from "./components/AboutUs";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/Privacy";
import Training from "./components/Training";
import GalleryEvents from "./components/Gallery-Events";
import GalleryFacility from "./components/Gallery-Facility";
import GalleryTraining from "./components/Gallery-Training";

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
     
      <Routes>
        {/* <Route path="/" element={<ComingSoon />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events-management" element={<Events />} />
        <Route path="/facility-management" element={<Facility />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/training" element={<Training />} />
        <Route path="/events-gallery" element={<GalleryEvents />} />
        <Route path="/facility-gallery" element={<GalleryFacility />} />
        <Route path="/training-gallery" element={<GalleryTraining />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

