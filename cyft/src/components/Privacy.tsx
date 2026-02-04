import Header from "./Header";
import Footer from "./Footer"

export default function PrivacyPolicy() {
    return (
        <div>
       <Header />    
      <section className="py-20 bg-white mt-10">
        <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl lg:text-4xl font-semibold mb-8">
  <span className="text-gray-900">Privacy </span>
  <span className="text-[#DE6328]">Policy</span>
</h1>
          <p className="mb-4 text-gray-700">
            We value your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Information Collection</h2>
          <p className="text-gray-700 mb-4">
            We may collect personal information such as your name, email, phone number, and organization details when you interact with our services or website.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Information</h2>
          <p className="text-gray-700 mb-4">
            Your information is used to provide services, respond to inquiries, send updates, and improve our offerings. We do not sell your personal data to third parties.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement reasonable security measures to protect your data from unauthorized access, alteration, or disclosure.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
          <p className="text-gray-700 mb-4">
            Our website may use cookies and similar technologies to enhance your browsing experience. You can control cookie settings via your browser.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">5. Third-Party Services</h2>
          <p className="text-gray-700 mb-4">
            We may use third-party service providers to support our operations. These providers are contractually obligated to keep your data secure.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">6. User Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the right to access, correct, or request deletion of your personal information. Contact us to exercise these rights.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this policy from time to time. Changes will be posted on this page, and significant updates will be communicated.
          </p>
  
          <p className="text-gray-700 mt-6">
            By using our website and services, you consent to this privacy policy.
          </p>
        </div>
      </section>
      <Footer />
      </div>
    );
  }
  