import { useEffect, useState } from "react";
import aboutImg from "../assets/About2.png";

// Carefully written, natural-sounding copy (no AI-ish fluff)
const words = [
  { text: "We’re", tone: "dark" },
  { text: "a", tone: "dark" },
  { text: "trusted", tone: "dark" },
  { text: "events", tone: "dark" },
  { text: "and", tone: "dark" },
  { text: "facilities", tone: "dark" },
  { text: "management", tone: "dark" },
  { text: "company", tone: "dark" },
  { text: "helping", tone: "dark" },
  { text: "organizations", tone: "dark" },
  { text: "create", tone: "dark" },
  { text: "impactful", tone: "dark" },
  { text: "experiences", tone: "dark" },

  // softer continuation
  { text: "that", tone: "light" },
  { text: "run", tone: "light" },
  { text: "smoothly,", tone: "light" },
  { text: "optimize", tone: "light" },
  { text: "spaces,", tone: "light" },
  { text: "and", tone: "light" },
  { text: "strengthen", tone: "light" },
  { text: "human", tone: "light" },
  { text: "capacity.", tone: "light" },
];

export default function HeroSection() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= words.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-6 py-16 bg-[#F0EBE9]">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block mb-4 px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600 lg:mt-20 mt-5">
          Who We Are
        </span>

        <h1 className="text-2xl md:text-4xl font-semibold leading-tight max-w-4xl">
          {words.slice(0, visibleCount).map((word, i) => (
            <span
              key={i}
              className={`mr-2 inline-block animate-fadeIn ${
                word.tone === "light" ? "text-gray-500" : "text-gray-900"
              }`}
            >
              {word.text}
            </span>
          ))}
        </h1>

        <div className="mt-12">
          <img
            src={aboutImg}
            alt="Team collaboration meeting"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

/* Add to globals.css

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.35s ease-out forwards;
}
*/