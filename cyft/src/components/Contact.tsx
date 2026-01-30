import ContactImage from "../assets/contact-image.png"; 
import Header from "./Header";
import Footer from "./Footer";
import { FiPhoneCall, FiMail } from "react-icons/fi";

const GetInTouch = () => {
  return (
    <section id="contact" className="relative bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative mt-30 mb-20 lg:mt-50 lg:mb:100 grid grid-cols-12 bg-white shadow-xl overflow-hidden">

          {/* Left - Form (takes 8/12) */}
          <div className="col-span-12 lg:col-span-8 p-10 lg:p-16 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <span className="lg:text-[50px] text-4xl font-bold">Get in</span>
                <span className="lg:text-[50px] text-4xl font-bold text-[#DE6328]"> Touch</span>
              </div>
              <p className="mb-8 max-w-md font-medium">
                Start a conversation on facility management, event execution, and capacity building.
              </p>

              <form className="space-y-5 lg:mr-20">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DE6328]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DE6328]"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DE6328]"
                />
                <select className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DE6328]">
                  <option>Service of interest</option>
                  <option>Event Management</option>
                  <option>Facility Management</option>
                  <option>Human Capacity Development</option>
                </select>
                <button
                  type="submit"
                  className="w-full h-12 bg-[#DE6328] text-white rounded-md font-medium hover:bg-orange-500 transition"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm lg:mr-20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#DE6328]/10 flex items-center justify-center text-[#DE6328] shrink-0">
                  <FiPhoneCall size={16} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">EVENTS</p>
                  <p className="text-gray-500 text-sm">+234 706 661 5407</p>
                  <p className="text-gray-500 text-sm">+234 806 581 9693</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#DE6328]/10 flex items-center justify-center text-[#DE6328] shrink-0">
                  <FiPhoneCall size={16} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">FACILITY</p>
                  <p className="text-gray-500 text-sm">+234 818 888 8112</p>
                  <p className="text-gray-500 text-sm">+234 806 581 9693</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#DE6328]/10 flex items-center justify-center text-[#DE6328] shrink-0">
                  <FiMail size={16} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">EMAIL</p>
                  <p className="text-gray-500 text-sm">info@cyftconsulting.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Orange Background (takes 4/12) */}
          <div className="hidden lg:block col-span-12 lg:col-span-4 relative bg-[#F6973F] flex justify-center items-center">
            {/* Image in the middle */}
            <div className="absolute -left-24 top-20 lg:-left-24 bg-white overflow-hidden shadow-2xl z-10">
              <img
                src={ContactImage}
                alt="Contact"
                className="w-full h-[550px] object-cover"
              />
            </div>

            {/* Optional accent circles */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-[#DE6328]/30 rounded-full" />
            <div className="absolute bottom-4 left-4 w-20 h-20 bg-[#DE6328]/30 rounded-full" />
          </div>

        </div>
      </div>
      <Footer />
    </section>
  );
};

export default GetInTouch;
