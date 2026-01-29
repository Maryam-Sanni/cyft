import {
    FaInstagram,
    FaFacebookF,
    FaTiktok,
    FaLinkedinIn,
    FaGlobe,
    FaEnvelope
  } from "react-icons/fa";
  
  import Logo from "../assets/Logo2.png";
  
  export default function Connect() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#DE6328] to-[#385650] flex items-center justify-center px-4">
        <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl p-6 text-center">
          
          {/* Logo */}
          <div className="w-24 h-24 mx-auto rounded-full bg-white flex items-center justify-center shadow-lg">
            <img
              src={Logo}
              alt="CYFT Consulting Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
  
          <h1 className="mt-4 text-xl font-bold text-gray-900">
            CYFT Consulting
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Connect with us
          </p>
  
          {/* Links */}
          <div className="space-y-3">
            <LinkButton
              icon={<FaGlobe />}
              text="Visit Website"
              href="https://cyftconsulting.com"
            />
  
            <LinkButton
              icon={<FaEnvelope />}
              text="Email Us"
              href="https://mail.google.com/mail/?view=cm&to=info@cyftconsulting.com&su=Inquiry%20from%20CYFT%20Website&body=Hello%20CYFT%2C"
            />
  
            <LinkButton
              icon={<FaInstagram />}
              text="Instagram"
              href="https://www.instagram.com/cyft_consultingltd?igsh=NDlwd2E3Y2Z6Zmti"
            />
  
            <LinkButton
              icon={<FaFacebookF />}
              text="Facebook"
              href="https://www.facebook.com/share/14T66surrqr/?mibextid=wwXIfr"
            />
  
            <LinkButton
              icon={<FaTiktok />}
              text="TikTok"
              href="https://www.tiktok.com/@cyftconsultingltd?_r=1&_t=ZS-93OeVwCuzhs"
            />
  
            <LinkButton
              icon={<FaLinkedinIn />}
              text="LinkedIn"
              href="https://www.linkedin.com/company/cyft-consulting-ltd/"
            />
          </div>
  
          {/* Footer */}
          <p className="text-xs text-gray-400 mt-6">
            © {new Date().getFullYear()} CYFT Consulting
          </p>
        </div>
      </main>
    );
  }
  
  function LinkButton({
    icon,
    text,
    href,
  }: {
    icon: React.ReactNode;
    text: string;
    href: string;
  }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-100 hover:bg-[#DE6328] transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <span className="text-[#DE6328] group-hover:text-white text-lg">
          {icon}
        </span>
        <span className="font-medium text-lg text-gray-700 group-hover:text-white">
          {text}
        </span>
      </a>
    );
  }
  