import Logo from "../assets/Logo.png";

const Header = () => {
    return (
      <header className="absolute top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="h-auto w-auto" />
  
          {/* Nav */}
          <nav className="hidden md:flex items-center gap-18 text-lg text-white font-medium">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">Services</a>
            <a href="#" className="hover:text-white">About Us</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
  
          {/* CTA */}
          <button className="bg-[#DE6328] text-white lg:px-10 w-[100px] lg:w-auto py-2.5 rounded-full lg:text-md text-sm font-semibold hover:bg-orange-500 transition border-1 border-white">
            Get in touch
          </button>
        </div>
      </header>
    );
  };
  
  export default Header;
  