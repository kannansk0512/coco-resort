import { motion } from "framer-motion";
import { MapPin, Star, Clock } from "lucide-react";
import { ATTRACTIONS, HOTEL } from "@/data/hotel-data";
import SectionHeading from "@/components/SectionHeading";
import BookingCTA from "@/components/BookingCTA";

export default function AttractionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[340px] h-[42vh] bg-primary flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-primary/95" />
        <div className="relative max-w-7xl mx-auto w-full px-6 pt-24 md:pt-28">
          <div className="flex items-center justify-center text-center">
            <SectionHeading
              subtitle="Explore"
              title="Nearby Attractions"
              light
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {ATTRACTIONS.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group"
              >
                <article className="relative h-full overflow-hidden rounded-[24px] border border-black/5 bg-white px-6 py-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_38px_rgba(0,0,0,0.09)]">
                  {/* premium top accent */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-70" />

                  {/* subtle inner border */}
                  <div className="pointer-events-none absolute inset-[1px] rounded-[23px] ring-1 ring-transparent transition-all duration-500 group-hover:ring-gold/10" />

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <h3 className="text-[1.35rem] leading-tight font-heading text-foreground transition-colors duration-300 group-hover:text-primary">
                      {a.name}
                    </h3>

                    <div className="flex items-center gap-1.5 rounded-full border border-gold/15 bg-[#faf6ef] px-3 py-1.5 text-gold shrink-0">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span className="text-sm font-body">{a.rating}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground font-body">
                    {a.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-gold font-body">
                    <Clock className="w-3.5 h-3.5" />
                    {a.distance}
                  </div>
                </article>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          {/* Map */}
<div className="max-w-5xl mx-auto overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
  
  {/* Header */}
  <div className="flex items-center gap-3 border-b border-black/5 px-5 py-3 bg-[#fcfaf6]">
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10">
      <MapPin className="w-4 h-4 text-gold" />
    </div>
    <span className="font-body text-sm text-foreground">
      {HOTEL.address}
    </span>
  </div>

  {/* Map */}
  <div className="p-2">
    <div className="overflow-hidden rounded-[18px]">
      <iframe
        src={HOTEL.mapEmbedUrl}
        width="100%"
        height="280"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Resort location on Google Maps"
      />
    </div>
  </div>
</div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}