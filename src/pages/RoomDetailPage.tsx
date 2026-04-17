import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Maximize,
  Check,
} from "lucide-react";
import { ROOMS } from "@/data/hotel-data";
import BookingCTA from "@/components/BookingCTA";
import BookingOptionsModal from "@/components/BookingOptionsModal";

export default function RoomDetailPage() {
  const { id } = useParams();
  const room = ROOMS.find((r) => r.id === id);

  const [imgIndex, setImgIndex] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-heading text-foreground">
            Room not found
          </h1>
          <Link to="/accommodations" className="text-gold mt-4 inline-block">
            ← Back to Accommodations
          </Link>
        </div>
      </div>
    );
  }

  /* ✅ Proper image handling */
  const images =
    room.images && room.images.length > 0
      ? room.images
      : [
          room.image,
          "/rooms/sample-2.jpg",
          "/rooms/sample-3.jpg",
        ];

  const prev = () =>
    setImgIndex((i) => (i - 1 + images.length) % images.length);

  const next = () => setImgIndex((i) => (i + 1) % images.length);

  return (
    <>
      <div className="pt-20" />

      <section className="max-w-7xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span>/</span>
          <Link to="/accommodations" className="hover:text-gold">
            Accommodations
          </Link>
          <span>/</span>
          <span className="text-foreground">{room.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* 🔥 IMAGE SECTION (REDUCED SIZE) */}
          <div>
            <div className="relative overflow-hidden rounded-xl">
              <motion.img
                key={imgIndex}
                src={images[imgIndex]}
                alt={room.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-[320px] lg:h-[420px] object-cover"
              />

              {/* arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>

            {/* 🔥 SMALL THUMBNAILS */}
            {images.length > 1 && (
              <div className="flex gap-2 mt-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={`overflow-hidden rounded-md border ${
                      imgIndex === i
                        ? "border-gold"
                        : "border-border"
                    }`}
                  >
                    <img
                      src={img}
                      className="w-20 h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* DETAILS */}
          <div>
            <span className="text-xs uppercase tracking-widest text-gold font-bold">
              {room.type}
            </span>

            <h1 className="text-3xl font-heading mt-2">
              {room.name}
            </h1>

            <p className="text-muted-foreground mt-4 leading-relaxed">
              {room.description}
            </p>

            <div className="flex gap-6 mt-5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-gold" />
                {room.guests} Guests
              </div>

              <div className="flex items-center gap-2">
                <Maximize size={16} className="text-gold" />
                {room.size}
              </div>
            </div>

            {/* Amenities */}
            <div className="mt-7">
              <h3 className="text-xs uppercase text-gold tracking-widest mb-3">
                Room Amenities
              </h3>

              <div className="grid grid-cols-2 gap-2 text-sm">
                {room.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2">
                    <Check size={14} className="text-gold" />
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* PRICE BOX (COMPACT) */}
            <div className="mt-8 p-5 border rounded-xl bg-card">
              <div className="flex items-end gap-2">
                <span className="text-2xl font-heading text-gold">
                  ₹{room.price.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground">
                  / night
                </span>
              </div>

              <p className="text-xs text-muted-foreground mt-1">
                Inclusive of breakfast · Free cancellation
              </p>

              <button
                onClick={() => setBookingOpen(true)}
                className="w-full mt-5 gold-gradient py-3 font-bold rounded"
              >
                Book This Room
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />

      {/* Modal */}
      <BookingOptionsModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
}