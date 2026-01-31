import { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import Logo2 from "../assets/Logo2.png"
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className={`
          max-w-7xl mx-auto flex items-center justify-between
          transition-all duration-500 ease-out
          ${
            scrolled
              ? "lg:mt-2 px-6 py-2 lg:bg-white/80 lg:backdrop-blur-xl lg:shadow-lg lg:border lg:border-white/40 lg:rounded-full bg-white"
              : "mt-1 lg:mt-5 px-8 py-3 lg:bg-white/50 lg:backdrop-blur-md rounded-full border-white"
          }
        `}
      >
        {/* Logo */}

{/* Mobile only: object-cover */}
<div onClick={() => {navigate("/home")}} className="block lg:hidden">
<img
          src={Logo2}
          alt="Logo"
          className={`transition-all duration-500 cursor-pointer ${
            scrolled ? "h-[42px] w-[80px]" : "lg:h-[50px] lg:w-[90px] h-[42px] w-[80px]"
          }`}
        />
</div>

{/* Desktop only: default / object-center */}
<div onClick={() => {navigate("/home")}} className="hidden lg:block">
<img
          src={Logo2}
          alt="Logo"
          className={`transition-all duration-500 cursor-pointer ${
            scrolled ? "h-[42px] w-[80px]" : "lg:h-[50px] lg:w-[90px] h-[42px] w-[80px]"
          }`}
        />
</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-14 text-[16px] text-black font-medium">
          <a href="/home" className="hover:text-[#DE6328] transition">
            Home
          </a>

          {/* Services Dropdown */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-[#DE6328] transition">
              Services <ChevronDown className="w-4 h-4"/>
            </div>

            <div className="absolute top-full mt-4 w-72 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <ul className="py-4 text-sm text-gray-700">
                <li 
                onClick={() => {navigate("/events-management")}}
                className="px-6 py-3 hover:bg-gray-100/70 cursor-pointer">
                  Event Management
                </li>
                <li 
                onClick={() => {navigate("/facility-management")}}
                className="px-6 py-3 hover:bg-gray-100/70 cursor-pointer">
                  Facility Management
                </li>
                <li className="px-6 py-3 hover:bg-gray-100/70 cursor-pointer">
                  Human Capacity Development
                </li>
              </ul>
            </div>
          </div>

          <a href="#" className="hover:text-[#DE6328] transition">
            About Us
          </a>
          <a href="/contact" className="hover:text-[#DE6328] transition">
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <button onClick={() => {navigate("/contact")}} className="hidden md:block bg-[#DE6328] w-[163px] h-[40px] text-white rounded-full font-medium hover:bg-orange-500 transition-all shadow-md cursor-pointer">
          Get in touch
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-3xl font-semibold"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
{/* Mobile Overlay */}
{mobileOpen && (
  <div
    className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
    onClick={() => setMobileOpen(false)}
  >
    {/* Slide-in Menu */}
    <div
      className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl p-6 transition-transform duration-500"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <img src={Logo} alt="Logo" className="h-10" />
        <button
          onClick={() => setMobileOpen(false)}
          className="text-3xl font-light"
        >
          ×
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col space-y-6 text-lg font-medium">
        <a href="/home" onClick={() => setMobileOpen(false)}>
          Home
        </a>

        {/* Services */}
        <div>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center justify-between w-full"
          >
            Services
            <span className="text-sm">
              {servicesOpen ? "−" : "+"}
            </span>
          </button>

          {servicesOpen && (
            <div className="ml-4 mt-4 space-y-4 text-sm text-gray-600">
              <p
               onClick={() => {navigate("/events-management")}}
              >Event Management</p>
              <p
              onClick={() => {navigate("/facility-management")}}
              >Facility Management</p>
              <p>Human Capacity Development</p>
            </div>
          )}
        </div>

        <a href="#" onClick={() => setMobileOpen(false)}>
          About Us
        </a>

        <a href="/contact" onClick={() => setMobileOpen(false)}>
          Contact
        </a>
      </nav>

      {/* CTA */}
      <button onClick={() => {navigate("/contact")}} className="mt-10 w-full bg-[#DE6328] h-[48px] text-white rounded-full font-medium shadow-lg cursor-pointer">
        Get in touch
      </button>
    </div>
  </div>
)}
    </header>
  );
};

export default Header;
