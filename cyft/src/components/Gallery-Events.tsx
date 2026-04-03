import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

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

const categories = ["exhibition", "catering", "decoration", "branding"];
const categoryCovers: Record<string, string> = {
  exhibition: "https://res.cloudinary.com/cyftconsulting/image/upload/v1770296453/Event1_pyopi2.jpg",
  catering: "https://res.cloudinary.com/cyftconsulting/image/upload/v1775213554/catering_lh0njl.jpg",
  decoration: "https://res.cloudinary.com/cyftconsulting/image/upload/v1775213566/deco_eo9ysi.jpg",
  branding: "https://res.cloudinary.com/cyftconsulting/image/upload/f_jpg/v1773656448/IMG_0332_ysfiml.heic",
};
const cloudName = "cyftconsulting";

export default function EventsGallery() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [gallery, setGallery] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState(false);
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [recent, setRecent] = useState<string[]>([]);

  // Fetch per category (lazy)
  const fetchCategoryImages = async (tag: string) => {
    try {
      setLoading(true);

      if (gallery[tag]) {
        setLoading(false);
        return;
      }

      const res = await fetch(
        `https://res.cloudinary.com/${cloudName}/image/list/${tag}.json`
      );

      const data = await res.json();

      const images = (data.resources || []).map(
        (img: { public_id: string }) =>
          `https://res.cloudinary.com/${cloudName}/image/upload/${img.public_id}.jpg`
      );

      setGallery((prev) => ({
        ...prev,
        [tag]: images,
      }));
    } catch (err) {
      console.error("Error fetching category:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = async (cat: string) => {
    setActiveCategory(cat);
    await fetchCategoryImages(cat);

    // Recently viewed logic (max 3)
    setRecent((prev) => {
      const updated = [cat, ...prev.filter((c) => c !== cat)];
      return updated.slice(0, 3);
    });
  };

  return (
    <div className="min-h-screen bg-white mt-10">
      <Header />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
            {/* Back button */}
            <button
            onClick={() => window.history.back()}
            className="mb-6 px-4 py-2 text-black transition cursor-pointer hover:text-orange-800 flex items-center gap-1 font-medium"
          >
            ← Back to Gallery
          </button>
          <h1 className="text-3xl font-semibold text-center mb-10">
            Events Gallery {activeCategory ? `- ${activeCategory}` : ""}
          </h1>

          {/* Recently viewed */}
          {recent.length > 0 && !activeCategory && (
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">
                Recently viewed
              </p>

              <div className="flex gap-2 flex-wrap">
                {recent.map((r) => (
                  <button
                    key={r}
                    onClick={() => handleCategoryClick(r)}
                    className="px-3 py-1 text-sm rounded-full bg-orange-100 hover:bg-orange-200 transition"
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* CATEGORY GRID */}
          {!activeCategory ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
            >
              {categories.map((cat) => {
                const cover = categoryCovers[cat];

                return (
                  <motion.div
                    key={cat}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCategoryClick(cat)}
                    className="cursor-pointer"
                  >
                    <div className="relative rounded-2xl overflow-hidden h-64 bg-gray-100">
                      {cover ? (
                        <img
                          src={cover}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex flex-col gap-2 items-center justify-center">
                          <div className="w-10 h-10 bg-gray-300 animate-pulse rounded-full" />
                          <div className="w-20 h-3 bg-gray-300 animate-pulse rounded" />
                        </div>
                      )}
                    </div>

                    <p className="mt-3 text-center font-medium capitalize">
                      {cat}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            // CATEGORY VIEW
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <button
                  onClick={() => setActiveCategory(null)}
                  className="mb-6 px-4 py-2 hover:text-orange-800 transition"
                >
                  ← Back to Categories
                </button>

                {!loading &&
  (!gallery[activeCategory] || gallery[activeCategory].length === 0) && (
    <p className="text-gray-500 col-span-full text-center h-[500px]">
      No images found for {activeCategory}.
    </p>
)}

                {loading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-64 bg-gray-200 animate-pulse rounded-2xl"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {(gallery[activeCategory] || []).map((src, i) => (
                      <GalleryImage
                        key={i}
                        src={src}
                        onClick={setPopupImage}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      <Footer />

      {/* LIGHTBOX */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setPopupImage(null)}
        >
          <img
            src={popupImage}
            className="max-h-[90%] max-w-[90%] rounded-xl"
          />
        </div>
      )}
    </div>
  );
}