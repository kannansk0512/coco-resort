import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { HOTEL } from "@/data/hotel-data";
import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[340px] h-[42vh] bg-primary flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-primary/95" />
        <div className="relative max-w-7xl mx-auto w-full px-6 pt-24 md:pt-28">
          <div className="flex items-center justify-center text-center">
            <SectionHeading
              subtitle="Get in Touch"
              title="Contact & Booking"
              light
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {submitted ? (
                <div className="bg-card rounded-lg p-12 text-center border border-border">
                  <span className="text-5xl">✉️</span>
                  <h3 className="text-2xl font-heading mt-6 text-foreground">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground font-body mt-4">
                    We've received your inquiry. Our team will get back to you
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 gold-gradient px-6 py-3 font-body font-bold uppercase tracking-wider text-sm text-primary rounded"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs uppercase tracking-widest text-muted-foreground font-body mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full bg-card border border-border rounded px-4 py-3 font-body text-foreground focus:outline-none focus:border-gold transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-widest text-muted-foreground font-body mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full bg-card border border-border rounded px-4 py-3 font-body text-foreground focus:outline-none focus:border-gold transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs uppercase tracking-widest text-muted-foreground font-body mb-2"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full bg-card border border-border rounded px-4 py-3 font-body text-foreground focus:outline-none focus:border-gold transition-colors"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="guests"
                        className="block text-xs uppercase tracking-widest text-muted-foreground font-body mb-2"
                      >
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        className="w-full bg-card border border-border rounded px-4 py-3 font-body text-foreground focus:outline-none focus:border-gold transition-colors"
                      >
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-widest text-muted-foreground font-body mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full bg-card border border-border rounded px-4 py-3 font-body text-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="Tell us about your preferred dates, room type, or any special requests..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gold-gradient px-8 py-4 font-body font-bold uppercase tracking-wider text-primary rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-heading text-foreground mb-6">
                  Resort Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-body font-bold text-foreground text-sm">
                        Location
                      </h4>
                      <p className="text-sm text-muted-foreground font-body mt-1">
                        {HOTEL.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-body font-bold text-foreground text-sm">
                        Phone
                      </h4>
                      <a
                        href={`tel:${HOTEL.phone}`}
                        className="text-sm text-muted-foreground font-body mt-1 hover:text-gold"
                      >
                        {HOTEL.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-body font-bold text-foreground text-sm">
                        Email
                      </h4>
                      <a
                        href={`mailto:${HOTEL.email}`}
                        className="text-sm text-muted-foreground font-body mt-1 hover:text-gold"
                      >
                        {HOTEL.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-body font-bold text-foreground text-sm">
                        Check-in / Check-out
                      </h4>
                      <p className="text-sm text-muted-foreground font-body mt-1">
                        Check-in: {HOTEL.checkIn} · Check-out: {HOTEL.checkOut}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Full-width map below */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-14"
          >
            <div className="overflow-hidden rounded-[22px] border border-border bg-card shadow-[0_10px_28px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3 border-b border-border px-5 py-4 bg-secondary/40">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h4 className="text-sm font-body font-bold text-foreground">
                    Resort Location
                  </h4>
                  <p className="text-sm text-muted-foreground font-body mt-0.5">
                    {HOTEL.address}
                  </p>
                </div>
              </div>

              <div className="p-3">
                <div className="overflow-hidden rounded-[16px]">
                  <iframe
                    src={HOTEL.mapEmbedUrl}
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Resort location"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}