import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const platforms = [
  {
    name: "Book Direct",
    href: "https://your-direct-booking-link.com",
    logo: "/booking-logos/direct.png",
    featured: true,
  },
  {
    name: "MakeMyTrip",
    href: "https://www.makemytrip.com/",
    logo: "/booking-logos/makemytrip.png",
  },
  {
    name: "Goibibo",
    href: "https://www.goibibo.com/",
    logo: "/booking-logos/goibibo.png",
  },
  {
    name: "Booking.com",
    href: "https://www.booking.com/",
    logo: "/booking-logos/bookingcom.png",
  },
];

export default function BookingOptionsModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center px-4">
      {/* backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* modal */}
      <div className="relative w-full max-w-lg rounded-[26px] bg-white shadow-[0_28px_80px_rgba(0,0,0,0.25)] overflow-hidden">
        
        {/* header */}
        <div className="px-6 py-5 border-b border-black/5 flex justify-between items-start">
          <div>
            <p className="text-[11px] tracking-[0.22em] uppercase text-gold">
              Booking Options
            </p>
            <h2 className="mt-2 text-2xl font-heading text-foreground">
              Book Your Stay
            </h2>
          </div>

          <button onClick={onClose}>
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <div className="p-6 space-y-4">

          {/* ⭐ Featured Direct Booking */}
          {platforms
            .filter((p) => p.featured)
            .map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-gold/30 bg-[#fcfaf6] px-4 py-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
              >
                <img
                  src={p.logo}
                  className="h-10 w-10 object-contain"
                />

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-heading text-primary">
                      {p.name}
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 bg-gold/10 text-gold rounded-full uppercase tracking-wider">
                      Best Option
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Best rates & direct support
                  </p>
                </div>

                <ExternalLink className="w-4 h-4 text-gold" />
              </a>
            ))}

          {/* Other platforms */}
          <div className="space-y-2 pt-2">
            {platforms
              .filter((p) => !p.featured)
              .map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-black/5 px-4 py-3 transition hover:bg-secondary/40"
                >
                  <img
                    src={p.logo}
                    className="h-8 w-8 object-contain"
                  />

                  <span className="flex-1 text-sm font-body text-foreground">
                    {p.name}
                  </span>

                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-gold" />
                </a>
              ))}
          </div>

        </div>
      </div>
    </div>
  );
}