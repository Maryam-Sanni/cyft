import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ComingSoon from "./components/ComingSoon";
import Connect from "./components/Connect";
import Contact from "./components/Contact"
import Events from "./components/Events";
import Facility from "./components/Facility";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events-management" element={<Events />} />
        <Route path="/facility-management" element={<Facility />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

