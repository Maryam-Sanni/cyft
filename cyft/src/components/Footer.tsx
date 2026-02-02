import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
  import { FaTiktok } from "react-icons/fa6";
  import Logo from "../assets/Logo2.png";
  import { useNavigate } from "react-router-dom";

  const Footer = () => {
    const navigate = useNavigate();

    return (
      <footer className="bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo + Description */}
          <div className="space-y-4 mr-[100px]">
            <img
              src={Logo}
              alt="CYFT Consulting"
              className="w-28"
            />
            <p className="text-[15px] text-gray-600 max-w-xs">
              We provide excellent service underpinned by structured, end-to-end management tailored to your needs.
            </p>
          </div>
  
          {/* Services */}
          <div>
            <h4 className="text-[#DE6328] font-normal mb-4 text-[17px]">
              Services
            </h4>
            <ul className="space-y-2 text-[15px] text-gray-600 cursor-pointer">
              <li
              onClick={() => {navigate("/events-management")}}
              >Event Management</li>
              <li
              onClick={() => {navigate("/facility-management")}}
              >Facility Management</li>
              <li>Training</li>
            </ul>
          </div>
  
          {/* Get in touch */}
          <div>
            <h4 className="text-[#DE6328] font-normal mb-4 text-[17px]">
              Get in touch
            </h4>
            <ul className="space-y-2 text-[15px] text-gray-600 cursor-pointer">
              <li
              onClick={() => {navigate("/contact")}}
              >Contact Us</li>
              <li>About Us</li>
              <li
              onClick={() => {navigate("/resources")}}
              >Resources</li>
            </ul>
          </div>
  
          {/* Follow Us */}
          <div>
            <h4 className="text-[#DE6328] font-normal text-[17px] mb-4">
              Follow Us
            </h4>
            <ul className="space-y-3 text-[15px] text-gray-600">
              <li className="flex items-center gap-2">
              <a
    href="https://www.facebook.com/share/14T66surrqr/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
                <FaFacebookF className="text-black w-5 h-5"/> Facebook
                </a>
              </li>
              <li className="flex items-center gap-2">
              <a
    href="https://www.tiktok.com/@cyftconsultingltd?_r=1&_t=ZS-93OeVwCuzhs"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
                <FaTiktok className="text-black w-5 h-5"/> TikTok
                </a>
              </li>
              <li className="flex items-center gap-2">
              <a
    href="https://www.instagram.com/cyft_consultingltd?igsh=NDlwd2E3Y2Z6Zmti"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
                <FaInstagram className="text-black w-5 h-5"/> Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
              <a
    href="https://www.linkedin.com/company/cyft-consulting-ltd/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
                <FaLinkedinIn className="text-black w-5 h-5"/> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Bottom bar */}
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
            <span>Copyright © {new Date().getFullYear()}</span>
  
            <div className="flex gap-6">
              <span className="cursor-pointer hover:text-gray-700">
                Terms & Conditions
              </span>
              <span className="cursor-pointer hover:text-gray-700">
                Privacy Policy
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  