import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { GALLERY_IMAGES } from "@/data/hotel-data";
import SectionHeading from "@/components/SectionHeading";

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const categories = ["all", "rooms", "outdoors", "dining"];
  const filtered =
    filter === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[340px] h-[42vh] bg-primary flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-primary/95" />
        <div className="relative max-w-7xl mx-auto w-full px-6 pt-24 md:pt-28">
          <div className="flex items-center justify-center text-center">
            <SectionHeading subtitle="Explore" title="Photo Gallery" light />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-14 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-lg text-sm font-body uppercase tracking-[0.16em] capitalize transition-all duration-300 ${
                  filter === c
                    ? "gold-gradient text-primary font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                    : "border border-border/80 bg-transparent text-muted-foreground hover:border-gold/60 hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={`${filter}-${img.alt}-${i}`}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.35 }}
                  className="group cursor-pointer"
                  onClick={() => setLightbox(i)}
                >
                  <div className="relative overflow-hidden rounded-[24px] border border-black/5 bg-white p-3 shadow-[0_10px_28px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]">
                    <div className="relative overflow-hidden rounded-[18px]">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-[240px] md:h-[280px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        loading="lazy"
                        width={1280}
                        height={854}
                      />

                      {/* subtle premium overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />

                      {/* soft inner ring */}
                      <div className="absolute inset-0 rounded-[18px] ring-1 ring-white/15 pointer-events-none" />

                      {/* caption */}
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-sm md:text-base font-heading text-white/95 tracking-[0.02em]">
                          {img.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 md:top-6 md:right-6 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/15 transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <img
                  src={filtered[lightbox]?.src}
                  alt={filtered[lightbox]?.alt}
                  className="w-full max-h-[80vh] object-contain rounded-[18px]"
                />

                {filtered[lightbox]?.alt && (
                  <div className="pt-4 px-1 text-center">
                    <p className="text-sm md:text-base font-body text-white/80">
                      {filtered[lightbox]?.alt}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}