import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ComingSoon from "./components/ComingSoon";
import Connect from "./components/Connect";

// import other pages later
// import Dashboard from "./pages/Dashboard";
// import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/connect" element={<Connect />} />

        {/* Future routes */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

