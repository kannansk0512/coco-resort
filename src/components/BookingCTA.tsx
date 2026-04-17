import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IMAGES } from "@/data/hotel-data";

export default function BookingCTA() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <img
        src={IMAGES.natureView}
        alt="Western Ghats panorama"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1280}
        height={854}
      />
      <div className="overlay-dark" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6"
      >
        <h2 className="text-3xl md:text-5xl font-heading text-primary-foreground mb-4">
          Begin Your Escape
        </h2>
        <p className="text-primary-foreground/80 font-body max-w-lg mx-auto mb-8">
          Discover the tranquility of the Western Ghats. Book your stay and create memories that last a lifetime.
        </p>
        <Link
          to="/contact"
          className="inline-block gold-gradient px-8 py-4 font-body font-bold uppercase tracking-wider text-primary rounded hover:opacity-90 transition-opacity"
        >
          Reserve Your Stay
        </Link>
      </motion.div>
    </section>
  );
}
