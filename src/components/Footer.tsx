import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Star,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";
import { HOTEL } from "@/data/hotel-data";

const quickLinks = [
  { label: "Accommodations", path: "/accommodations" },
  { label: "Amenities", path: "/amenities" },
  { label: "Gallery", path: "/gallery" },
  { label: "Activities", path: "/activities" },
  { label: "Offers", path: "/offers" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com/", icon: Facebook },
  { label: "YouTube", href: "https://youtube.com/", icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-primary text-primary-foreground"
      role="contentinfo"
    >
      {/* subtle top divider glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.2fr_0.9fr_1.1fr_0.9fr] gap-12 lg:gap-14 items-start">
          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="text-[2rem] leading-none font-heading font-semibold tracking-tight text-gold">
              {HOTEL.shortName}
            </h3>

            <p className="mt-6 text-[15px] leading-8 text-primary-foreground/78 font-body">
              {HOTEL.description}
            </p>

            {/* Social */}
            <div className="mt-8">
              <h4 className="text-sm uppercase tracking-[0.22em] text-gold font-body font-semibold mb-4">
                Connect
              </h4>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/12 bg-white/5 text-primary-foreground/72 transition-all duration-300 hover:border-gold/35 hover:bg-gold/10 hover:text-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.22em] text-gold font-body font-semibold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="inline-flex text-[15px] text-primary-foreground/78 hover:text-gold transition-colors duration-300 font-body"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.22em] text-gold font-body font-semibold mb-6">
              Contact
            </h4>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-4 w-4 text-gold shrink-0" />
                <span className="text-[15px] leading-8 text-primary-foreground/78 font-body">
                  {HOTEL.address}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <a
                  href={`tel:${HOTEL.phone}`}
                  className="text-[15px] text-primary-foreground/78 hover:text-gold transition-colors duration-300 font-body"
                >
                  {HOTEL.phone}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <a
                  href={`mailto:${HOTEL.email}`}
                  className="text-[15px] text-primary-foreground/78 hover:text-gold transition-colors duration-300 font-body break-all"
                >
                  {HOTEL.email}
                </a>
              </div>
            </div>
          </div>

          {/* Hotel Info */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.22em] text-gold font-body font-semibold mb-6">
              Hotel Info
            </h4>

            <div className="space-y-4 text-[15px] text-primary-foreground/78 font-body">
              <p className="leading-7">
                <span className="text-primary-foreground/90">Check-in:</span>{" "}
                {HOTEL.checkIn}
              </p>

              <p className="leading-7">
                <span className="text-primary-foreground/90">Check-out:</span>{" "}
                {HOTEL.checkOut}
              </p>

              <div className="flex items-center gap-2 pt-1">
                <span className="text-primary-foreground/90">Rating:</span>
                <Star className="h-4 w-4 fill-gold text-gold" />
                <span>
                  {HOTEL.rating}/5 ({HOTEL.reviewCount} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 lg:mt-16 border-t border-primary-foreground/10 pt-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-xs sm:text-sm text-primary-foreground/55 font-body">
              © {new Date().getFullYear()} {HOTEL.name}. All rights reserved.
            </p>

            <p className="text-xs sm:text-sm text-primary-foreground/55 font-body">
              Designed &amp; Developed by{" "}
              <span className="text-gold/90"></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}