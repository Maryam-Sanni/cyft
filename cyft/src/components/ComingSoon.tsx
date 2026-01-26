export default function Home() {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#DE6328] to-[#385650] text-white">
        <div className="text-center px-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We’re Working on It ✨
          </h1>
  
          <p className="text-lg opacity-90 mt-10">
            CYFT Consulting is currently under development.  
          </p>

          <p className="text-lg opacity-90 mb-10">
            Please check back soon 
          </p>
  
          <span className="text-sm opacity-75">
            © {new Date().getFullYear()} CYFT Consulting
          </span>
        </div>
      </main>
    );
  }
  