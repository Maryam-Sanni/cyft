import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function GalleryImage({
  src,
  onClick,
}: {
  src: string;
  onClick: (src: string) => void;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer"
      onClick={() => onClick(src)}
    >
      {!loaded && <div className="absolute inset-0 bg-[#DE6328]/10 animate-pulse" />}
      <img
        src={src}
        alt="Event"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-64 object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default function EventsGallery() {
  const [popupImage, setPopupImage] = useState<string | null>(null);
const [images, setImages] = useState<string[]>([]);
  const cloudName = 'cyftconsulting'; // Replace with your cloud name
  const tagName = 'training';     // Replace with your tag
  const url = `https://res.cloudinary.com/${cloudName}/image/list/${tagName}.json`;
  
  useEffect(() => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // 'data.resources' is an array of image objects matching the tag
      const images = data.resources;
     console.log(images);
     setImages(images.map((img: { public_id: string }) => `https://res.cloudinary.com/${cloudName}/image/upload/${img.public_id}.jpg`));
    })
    .catch(error => console.error('Error fetching images:', error));
}, []);

  return (
    <div className="min-h-screen bg-white mt-10">
      <Header />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back button */}
          <button
            onClick={() => window.history.back()}
            className="mb-6 px-4 py-2 text-black transition cursor-pointer hover:text-orange-800 flex items-center gap-1 font-medium"
          >
            ← Back to Gallery
          </button>

          <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-12">
            Trainings Gallery
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((src, i) => (
              <GalleryImage key={i} src={src} onClick={setPopupImage} />
            ))}

            {images.length === 0 && (
              <p className="text-gray-500 col-span-full text-center h-[500px]">
                No images found for training.
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />

      {/* Popup / Lightbox */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setPopupImage(null)}
        >
          <img
            src={popupImage}
            alt="Event Large"
            className="max-h-[90%] max-w-[90%] rounded-xl shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
