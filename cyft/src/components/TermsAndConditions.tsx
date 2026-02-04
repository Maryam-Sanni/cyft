import Header from "./Header";
import Footer from "./Footer"

export default function TermsAndConditions() {
    return (
        <div>
       <Header />      
      <section className="py-20 bg-white mt-10">
        <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl lg:text-4xl font-semibold mb-8">
  <span className="text-gray-900">Terms & </span>
  <span className="text-[#DE6328]">Conditions</span>
</h1>
          <p className="mb-4 text-gray-700">
            Welcome to our company website. By accessing or using our services, you agree to comply with the following terms and conditions.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Services</h2>
          <p className="text-gray-700 mb-4">
            We provide services in Events Management, Facility Management, and Human Capacity Development. All services are provided based on the agreements with our clients.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Booking & Payments</h2>
          <p className="text-gray-700 mb-4">
            Bookings for events or services must be confirmed with a formal agreement and payment terms. Payment schedules and amounts will be agreed upon prior to service delivery.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Client Responsibilities</h2>
          <p className="text-gray-700 mb-4">
            Clients must provide accurate information, timely approvals, and access to venues or resources required for service execution.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Liability</h2>
          <p className="text-gray-700 mb-4">
            We are not liable for indirect, incidental, or consequential damages. Our maximum liability is limited to the fees paid for the specific service.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">5. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            All materials, designs, and content provided by us remain our property unless explicitly transferred in writing.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">6. Amendments</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to update these terms at any time. Clients will be notified of significant changes.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">7. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These terms are governed by the laws of Nigeria. Any disputes will be resolved in accordance with local regulations.
          </p>
  
          <p className="text-gray-700 mt-6">
            By using our services, you agree to these terms and conditions.
          </p>
        </div>
      </section>
      <Footer />
      </div>
    );
  }
  