import { useState } from "react";
import testimonial1 from "../assets/testimonial1.png"
import testimonial2 from "../assets/testimonial2.png"
import testimonial3 from "../assets/testimonial3.png"

const reviews = [
  {
    name: "John Carter",
    role: "Corporate Client",
    image: "https://i.pravatar.cc/100?img=12",
    bgImage: testimonial1,
    text: "The team handled our annual conference flawlessly. Every detail was well thought out and professionally executed.",
    rating: 5,
  },
  {
    name: "Aisha Bello",
    role: "Event Host",
    image: "https://i.pravatar.cc/100?img=32",
    bgImage: testimonial2,
    text: "From planning to execution, everything was seamless. I didn’t have to worry about anything on the day of the event.",
    rating: 5,
  },
  {
    name: "Michael Grant",
    role: "Facility Manager",
    image: "https://i.pravatar.cc/100?img=45",
    bgImage: testimonial3,
    text: "Their facility management services are reliable and efficient. Our operations have improved significantly.",
    rating: 4,
  },
  {
    name: "Sarah Williams",
    role: "Training Coordinator",
    image: "https://i.pravatar.cc/100?img=20",
    bgImage: testimonial1,
    text: "The training sessions were practical, engaging, and very impactful for our team.",
    rating: 5,
  },
  {
    name: "David Okoye",
    role: "Business Owner",
    image: "https://i.pravatar.cc/100?img=58",
    bgImage: testimonial2,
    text: "Professional, organized, and dependable. I would absolutely recommend their services.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const visibleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

const visible = Array.from({ length: visibleCount }).map(
  (_, i) => reviews[(index + i) % reviews.length]
);

const [touchStart, setTouchStart] = useState<number | null>(null);
const [touchEnd, setTouchEnd] = useState<number | null>(null);

const minSwipeDistance = 50;

const onTouchStart = (e: React.TouchEvent) => {
  setTouchEnd(null);
  setTouchStart(e.targetTouches[0].clientX);
};

const onTouchMove = (e: React.TouchEvent) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return;

  const distance = touchStart - touchEnd;

  if (distance > minSwipeDistance) {
    // swipe left → next
    setIndex((index + 1) % reviews.length);
  }

  if (distance < -minSwipeDistance) {
    // swipe right → previous
    setIndex((index - 1 + reviews.length) % reviews.length);
  }
};

  return (
    <section className="w-full bg-white px-4 mb-20 lg:mt-0 mt-[-30px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[18px] font-medium tracking-widest text-[#DE6328] uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-[42px] font-bold text-gray-900 mt-3">
            Our Client Reviews
          </h2>
        </div>

        {/* Cards */}
        <div
  className="relative grid grid-cols-1 md:grid-cols-3 gap-10"
  onTouchStart={onTouchStart}
  onTouchMove={onTouchMove}
  onTouchEnd={onTouchEnd}
>
          {visible.map((review, i) => (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden shadow-lg bg-gray-100"
            >
              {/* Background image placeholder */}
              <img
  src={review.bgImage}
  alt=""
  className="h-[506px] w-full object-cover"
/>

              {/* Review Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-[32px] px-6 pt-14 pb-8 text-center">
                {/* Avatar notch */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="w-22 h-22 rounded-full bg-white flex items-center justify-center">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                  </div>
                </div>

                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                <p className="text-sm text-gray-500 mb-4">{review.role}</p>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  “{review.text}”
                </p>

                <div className="flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span
                      key={idx}
                      className={`text-sm ${
                        idx < review.rating ? "text-orange-500" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Navigation */}
          <button
            onClick={() => setIndex((index - 1 + reviews.length) % reviews.length)}
            className="md:flex absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow rounded-full items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={() => setIndex((index + 1) % reviews.length)}
            className="md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow rounded-full items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
