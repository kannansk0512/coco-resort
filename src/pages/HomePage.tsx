import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { HOTEL, IMAGES, ROOMS, AMENITIES, TESTIMONIALS, GALLERY_IMAGES } from "@/data/hotel-data";
import SectionHeading from "@/components/SectionHeading";
import BookingCTA from "@/components/BookingCTA";
import {
  Waves,
  CarFront,
  Croissant,
  Wifi,
  Sparkles,
  UtensilsCrossed,
  Trees,
  Coffee,
} from "lucide-react";

/* ── Hero ── */
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={IMAGES.hero}
        alt="UDS COCO Resort aerial view with pool and mountains"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="overlay-dark" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-gold font-body font-bold">
          Welcome to
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-primary-foreground mt-4 leading-tight">
          {HOTEL.name}
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-body mt-6 font-light max-w-2xl mx-auto">
          {HOTEL.tagline} — Surrounded by the Western Ghats, enjoy year-round pleasant weather and unmatched tranquility.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/accommodations"
            className="gold-gradient px-8 py-4 font-body font-bold uppercase tracking-wider text-primary rounded hover:opacity-90 transition-opacity"
          >
            Explore Rooms
          </Link>
          <Link
            to="/contact"
            className="border border-gold/50 px-8 py-4 font-body uppercase tracking-wider text-primary-foreground rounded hover:bg-gold/10 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

/* ── About ── */
function AboutSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={IMAGES.pool}
            alt="Resort swimming pool"
            className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            loading="lazy"
            width={1280}
            height={854}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-body font-bold">About Us</span>
          <h2 className="text-3xl md:text-4xl font-heading mt-3 text-foreground">
            A Serene Haven in the Heart of Tamil Nadu
          </h2>
          <p className="mt-6 font-body text-muted-foreground leading-relaxed">
            {HOTEL.description}
          </p>
          <p className="mt-4 font-body text-muted-foreground leading-relaxed">
            With our warm hospitality, world-class amenities, and proximity to nature's wonders including the Anamalai Tiger Reserve and Amaravathi Dam, every moment at UDS COCO is an experience to cherish.
          </p>
          <div className="mt-8 flex gap-8">
            <div>
              <span className="text-3xl font-heading text-gold">{HOTEL.rating}</span>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mt-1">Guest Rating</p>
            </div>
            <div>
              <span className="text-3xl font-heading text-gold">{HOTEL.reviewCount}+</span>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mt-1">Reviews</p>
            </div>
            <div>
              <span className="text-3xl font-heading text-gold">365</span>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mt-1">Days of Sunshine</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Featured Rooms ── */
function FeaturedRooms() {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Accommodations"
          title="Handcrafted Comfort"
          description="Each room is thoughtfully designed to blend luxury with the natural beauty of the Western Ghats."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {ROOMS.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link
                to={`/room/${room.id}`}
                className="group block"
              >
                <article className="overflow-hidden rounded-3xl bg-white/40 backdrop-blur-sm border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.14)]">
                  
                  <div className="relative overflow-hidden rounded-[1.4rem] m-3">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-72 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                      width={1280}
                      height={854}
                    />

                    {/* Soft dark overlay for smoother hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                    {/* Soft highlight to reduce harsh edge feeling */}
                    <div className="absolute inset-0 rounded-[1.4rem] ring-1 ring-white/20 pointer-events-none" />

                    {/* Price badge */}
                    <div className="absolute top-4 right-4 rounded-full bg-[#d9bf86] px-4 py-2 text-xs sm:text-sm font-semibold text-[#153c3a] shadow-md transition-transform duration-300 group-hover:scale-105">
                      From ₹{room.price.toLocaleString()}
                    </div>
                  </div>

                  <div className="px-5 pb-6 pt-2">
                    <span className="text-xs uppercase tracking-[0.25em] text-gold font-body">
                      {room.type}
                    </span>

                    <h3 className="text-2xl font-heading mt-2 text-foreground transition-colors duration-300 group-hover:text-primary">
                      {room.name}
                    </h3>

                    <p className="text-sm md:text-base text-muted-foreground font-body mt-3 leading-7 line-clamp-3">
                      {room.description}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 group-hover:gap-3">
                      Explore Room
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

        <div className="text-center mt-14">
          <Link
            to="/accommodations"
            className="inline-flex items-center justify-center rounded-full border border-gold/40 px-8 py-3 font-body uppercase tracking-[0.2em] text-foreground text-sm transition-all duration-300 hover:bg-gold/10 hover:shadow-md"
          >
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  );

}


/* ── Amenities ── */
function AmenitiesHighlight() {
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

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Amenities"
          title="Everything You Need"
          description="From our infinity pool to our in-room coffee makers, every detail is designed for your comfort."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
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
                <div className="relative h-full overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.10)]">
                  {/* Premium hover layer */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-[#123c37]/95" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4b06a]/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 px-5 py-7 md:px-6 md:py-8 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d4b06a]/20 bg-[#faf6ef] transition-all duration-500 group-hover:border-white/15 group-hover:bg-white/10">
                      <Icon className="h-6 w-6 text-[#b9934c] transition-all duration-500 group-hover:text-[#f0ddb2] group-hover:scale-105" />
                    </div>

                    <h4 className="mt-5 text-[15px] md:text-[16px] font-heading text-foreground transition-colors duration-500 group-hover:text-white">
                      {a.name}
                    </h4>

                    <p className="mt-3 text-[13px] leading-7 font-body text-muted-foreground transition-colors duration-500 group-hover:text-white/78">
                      {a.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
/* ── Testimonials ── */
function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const t = TESTIMONIALS[current];

  return (
    <section className="section-padding bg-primary">
      <div className="max-w-4xl mx-auto">
        <SectionHeading subtitle="Testimonials" title="Guest Experiences" light />
        <div className="relative text-center">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-lg md:text-xl font-body italic text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
              "{t.text}"
            </p>
            <p className="mt-6 text-gold font-heading text-lg">{t.name}</p>
          </motion.div>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:border-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrent((current + 1) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:border-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Gallery Preview ── */
function GalleryPreview() {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Gallery" title="Moments at COCO" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.slice(0, 6).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="overflow-hidden rounded-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width={1280}
                height={854}
              />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-block border border-gold/50 px-8 py-3 font-body uppercase tracking-wider text-foreground rounded hover:bg-gold/10 transition-colors text-sm"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedRooms />
      <AmenitiesHighlight />
      <TestimonialsSection />
      <GalleryPreview />
      <BookingCTA />
    </>
  );
}
