import { motion } from "framer-motion";
import {
  Waves,
  CarFront,
  Croissant,
  Wifi,
  Sparkles,
  UtensilsCrossed,
  Trees,
  Coffee,
  ArrowRight,
} from "lucide-react";
import { AMENITIES, IMAGES } from "@/data/hotel-data";
import SectionHeading from "@/components/SectionHeading";
import BookingCTA from "@/components/BookingCTA";

export default function AmenitiesPage() {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    pool: Waves,
    parking: CarFront,
    breakfast: Croissant,
    wifi: Wifi,
    spa: Sparkles,
    restaurant: UtensilsCrossed,
    garden: Trees,
    coffee: Coffee,
  };

  const amenityImages: Record<string, string> = {
    pool: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    parking: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80",
    breakfast: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&q=80",
    wifi: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    spa: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    restaurant: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
    garden: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    coffee: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  };

  const featureImages = [
    {
      src: IMAGES.pool,
      title: "Infinity Pool",
      desc: "Take a refreshing dip with views of the Western Ghats stretching before you.",
    },
    {
      src: IMAGES.spa,
      title: "Spa & Wellness",
      desc: "Rejuvenate body and mind with our curated Ayurvedic treatments.",
    },
    {
      src: IMAGES.restaurant,
      title: "Fine Dining",
      desc: "Savor authentic South Indian cuisine and international dishes.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[340px] h-[42vh] bg-primary flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-primary/95" />
        <div className="relative max-w-7xl mx-auto w-full px-6 pt-24 md:pt-28">
          <div className="flex items-center justify-center text-center">
            <SectionHeading
              subtitle="Experience"
              title="Resort Amenities"
              light
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          {/* Amenities grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mb-24">
            {AMENITIES.map((a, i) => {
              const Icon = icons[a.icon];

              return (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group"
                >
                  <div className="relative h-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.10)]">
                    {/* Hover image */}
                    <div className="absolute inset-0 opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                      <img
                        src={amenityImages[a.icon]}
                        alt={a.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/55" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4b06a]/60 to-transparent" />
                    </div>

                    <div className="relative z-10 px-5 py-6 md:px-6 md:py-7 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#d4b06a]/20 bg-[#faf6ef] transition-all duration-500 group-hover:border-white/15 group-hover:bg-white/10">
                        <Icon className="h-5 w-5 text-[#b9934c] transition-all duration-500 group-hover:text-[#f0ddb2] group-hover:scale-105" />
                      </div>

                      <h3 className="mt-4 text-[15px] md:text-base font-heading text-foreground transition-colors duration-500 group-hover:text-white">
                        {a.name}
                      </h3>

                      <p className="mt-2 text-xs md:text-sm leading-6 font-body text-muted-foreground transition-colors duration-500 group-hover:text-white/78 line-clamp-2">
                        {a.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Feature sections */}
          <div className="space-y-20">
            {featureImages.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-white p-3 shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
                    <div className="relative overflow-hidden rounded-[22px]">
                      <img
                        src={f.src}
                        alt={f.title}
                        className="w-full h-[320px] md:h-[380px] lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                        width={1280}
                        height={854}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
                      <div className="absolute inset-0 rounded-[22px] ring-1 ring-white/15 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="max-w-xl">
                    <span className="inline-block text-[11px] uppercase tracking-[0.28em] text-gold font-body mb-4">
                      Signature Experience
                    </span>

                    <h3 className="text-3xl md:text-4xl lg:text-[2.8rem] leading-tight font-heading text-foreground">
                      {f.title}
                    </h3>

                    <div className="mt-5 h-px w-16 bg-gradient-to-r from-gold/70 to-gold/20" />

                    <p className="mt-6 text-[15px] md:text-base leading-8 font-body text-muted-foreground">
                      {f.desc}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-primary font-body">
                      Discover More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}