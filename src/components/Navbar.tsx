import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { HOTEL } from "@/data/hotel-data";
import BookingOptionsModal from "@/components/BookingOptionsModal";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Accommodations", path: "/accommodations" },
  { label: "Amenities", path: "/amenities" },
  { label: "Gallery", path: "/gallery" },
  { label: "Activities", path: "/activities" },
  { label: "Offers", path: "/offers" },
  { label: "Attractions", path: "/attractions" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const isHome = location.pathname === "/";
  const isTransparent = !scrolled && isHome;
  const navBg =
    scrolled || !isHome
      ? "bg-primary/95 backdrop-blur-md shadow-lg"
      : "bg-transparent";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-full px-8 xl:px-12 flex items-center justify-between py-3">
          {/* LOGO */}
          <Link to="/" className="flex items-center shrink-0" aria-label="Home">
            <img
              src="/logo.png"
              alt="UDS Coco Logo"
              className={`h-14 w-auto object-contain transition-all duration-500 ${
                isTransparent ? "brightness-0 invert drop-shadow-lg" : ""
              }`}
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-xs xl:text-sm font-body tracking-wide uppercase transition-colors duration-300 whitespace-nowrap ${
                  location.pathname === l.path
                    ? "text-gold"
                    : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Phone */}
            <a
              href={`tel:${HOTEL.phone}`}
              className="hidden md:flex items-center gap-2 text-xs xl:text-sm text-primary-foreground/80 hover:text-gold transition-colors whitespace-nowrap"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
              <span className="font-body">{HOTEL.phone}</span>
            </a>

            {/* Book Button */}
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="hidden md:inline-flex items-center justify-center gold-gradient px-6 py-2.5 text-xs xl:text-sm font-body font-bold uppercase tracking-wider text-primary rounded whitespace-nowrap hover:opacity-90 transition"
            >
              Book Now
            </button>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-primary-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-primary/95 backdrop-blur-md overflow-hidden"
            >
              <div className="flex flex-col gap-4 px-6 py-6">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    className={`text-sm font-body tracking-wider uppercase ${
                      location.pathname === l.path
                        ? "text-gold"
                        : "text-primary-foreground/80"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}

                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="gold-gradient px-5 py-3 text-center font-body font-bold uppercase tracking-wider text-primary rounded mt-2"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <BookingOptionsModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
}