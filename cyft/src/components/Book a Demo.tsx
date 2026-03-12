import { useState } from "react";
import { Calendar, User, Mail, Phone, Layers } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer"

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    preferredDate: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace this with your API call
    console.log("Demo Request Submitted:", formData);
    alert("Thank you! Your demo request has been submitted.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      preferredDate: "",
      message: "",
    });
  };

  return (
    <div>
    <Header />
    <section className="max-w-4xl mx-auto px-6 py-16 lg:mt-30 mt-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-[44px] font-bold mb-4">
          Book a Demo
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Schedule a personalized walkthrough of the CYFT Facility Health Platform. See how real-time monitoring, predictive maintenance, and actionable insights can transform your facility management.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-md space-y-6">
        {/* Name */}
        <div className="flex items-center gap-3 border-b border-gray-200 py-2">
          <User className="text-[#DE6328] w-5 h-5" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full border-none focus:ring-0 text-gray-700 outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 border-b border-gray-200 py-2">
          <Mail className="text-[#DE6328] w-5 h-5" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full border-none focus:ring-0 text-gray-700 outline-none"
          />
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 border-b border-gray-200 py-2">
          <Phone className="text-[#DE6328] w-5 h-5" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full border-none focus:ring-0 text-gray-700 outline-none"
          />
        </div>

        {/* Company */}
        <div className="flex items-center gap-3 border-b border-gray-200 py-2">
          <Layers className="text-[#DE6328] w-5 h-5" />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            required
            className="w-full border-none focus:ring-0 text-gray-700 outline-none"
          />
        </div>

        {/* Preferred Date */}
        <div className="flex items-center gap-3 border-b border-gray-200 py-2">
          <Calendar className="text-[#DE6328] w-5 h-5" />
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
            className="w-full border-none focus:ring-0 text-gray-700 outline-none"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col border-b border-gray-200 py-2">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional Information (optional)"
            rows={4}
            className="w-full border-none focus:ring-0 text-gray-700 resize-none outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#FFA85C] text-white font-semibold py-4 rounded-full hover:bg-[#DE6328] transition"
        >
          Submit Request
        </button>
      </form>
    </section>
    <Footer />
    </div>
  );
}