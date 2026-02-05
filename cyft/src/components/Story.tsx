import nigeriaMap from "../assets/ng.svg";

const locations = [
    { name: "Lagos", x: "38%", y: "70%" },
    { name: "Abuja", x: "48%", y: "45%" },
    { name: "Port Harcourt", x: "42%", y: "78%" },
    { name: "Enugu", x: "55%", y: "65%" },
    { name: "Kano", x: "60%", y: "20%" },
    { name: "Ibadan", x: "34%", y: "60%" },
    { name: "Kaduna", x: "52%", y: "35%" },
    { name: "Benin City", x: "40%", y: "68%" },
  ];  

export default function OurStoryNigeria() {
  return (
    <section className="w-full bg-white mb-30">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — Nigeria Map */}
        <div className="relative w-full max-w-md mx-auto">
          
          {/* Flag background */}
          <div className="absolute inset-0 nigeria-flag-wave" />

          {/* Nigeria map mask */}
          <img
            src={nigeriaMap}
            alt="Map of Nigeria"
            className="relative z-10 w-full nigeria-map-animate"
          />

          {/* Locations */}
          {locations.map((loc, i) => (
            <div
              key={i}
              className="absolute z-20 flex flex-col items-center"
              style={{ left: loc.x, top: loc.y }}
            >
              <span className="w-2.5 h-2.5 bg-white border-2 border-[#DE6328] rounded-full animate-pulse" />
              <span className="mt-1 text-xs text-gray-900 font-medium">
                {loc.name}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT — Story */}
        <div>
          {/* <span className="inline-block mb-4 px-3 py-1 text-sm rounded-full bg-[#F0EBE9] text-gray-600">
            Our Story
          </span> */}

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Proudly Nigerian. Purposefully built.
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            CYFT was founded in Nigeria with a clear focus on doing things the
            right way bringing structure, professionalism, and care to how
            people, spaces, and experiences are managed.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Our journey began with events management and grew as we identified
            wider needs across facility operations and human capacity
            development.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Today, we work across multiple locations, supporting organizations
            with practical solutions rooted in local understanding and global
            standards.
          </p>
        </div>
      </div>
    </section>
  );
}
