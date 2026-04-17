import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ROOMS } from "@/data/hotel-data";
import SectionHeading from "@/components/SectionHeading";
import BookingCTA from "@/components/BookingCTA";

export default function AccommodationsPage() {
  const [filter, setFilter] = useState("All");
  const types = ["All", ...Array.from(new Set(ROOMS.map((r) => r.type)))];
  const filtered =
    filter === "All" ? ROOMS : ROOMS.filter((r) => r.type === filter);

  return (
    <>
      {/* Hero banner */}
      <section className="relative bg-primary min-h-[340px] h-[42vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 pt-24 md:pt-28">
          <div className="flex items-center justify-center text-center">
            <SectionHeading
              subtitle="Stay With Us"
              title="Our Accommodations"
              light
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-5 py-2.5 rounded-lg text-sm font-body uppercase tracking-wider transition-all duration-300 ${
                  filter === t
                    ? "gold-gradient text-primary font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                    : "border border-border/80 text-muted-foreground hover:border-gold/60 hover:text-gold bg-transparent"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filtered.map((room, i) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Link to={`/room/${room.id}`} className="group block h-full">
                  <article className="h-full overflow-hidden rounded-2xl bg-white border border-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_18px_36px_rgba(0,0,0,0.10)]">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-[18px] m-3">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-60 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                        width={1280}
                        height={854}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/22 via-black/6 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                      <div className="absolute top-3 left-3">
                        <div className="rounded-full bg-primary/88 backdrop-blur-sm px-3 py-1.5 text-xs font-body text-primary-foreground shadow-sm">
                          Up to {room.guests} guests
                        </div>
                      </div>

                      <div className="absolute top-3 right-3">
                        <div className="rounded-full gold-gradient px-3 py-1.5 text-xs font-body font-semibold text-primary shadow-sm">
                          ₹{room.price.toLocaleString()}/night
                        </div>
                      </div>

                      <div className="absolute inset-0 rounded-[18px] ring-1 ring-white/15 pointer-events-none" />
                    </div>

                    {/* Content */}
                    <div className="px-4 pb-5 pt-1">
                      <span className="text-[11px] uppercase tracking-[0.16em] text-gold font-body">
                        {room.type} · {room.size}
                      </span>

                      <h3 className="text-[1.7rem] leading-tight font-heading mt-2 text-foreground transition-colors duration-300 group-hover:text-primary">
                        {room.name}
                      </h3>

                      <p className="text-sm leading-7 text-muted-foreground font-body mt-2 min-h-[84px]">
                        {room.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {room.amenities.slice(0, 4).map((a) => (
                          <span
                            key={a}
                            className="text-[11px] bg-secondary/90 px-2.5 py-1 rounded-full font-body text-muted-foreground border border-black/5 transition-all duration-300 group-hover:bg-secondary"
                          >
                            {a}
                          </span>
                        ))}
                        {room.amenities.length > 4 && (
                          <span className="text-[11px] px-1 py-1 text-gold font-body">
                            +{room.amenities.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="mt-4 flex items-center gap-2 text-sm font-body text-primary">
                        <span className="transition-all duration-300 group-hover:tracking-wide">
                          Explore Room
                        </span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}