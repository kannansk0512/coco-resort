import { HOTEL } from "@/data/hotel-data";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${HOTEL.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20make%20a%20booking.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="flex items-center gap-3 rounded-full bg-primary px-4 py-2.5 border border-gold/30 shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_36px_rgba(0,0,0,0.24)]">
        
        {/* Icon (fixed + clean) */}
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 border border-gold/30">
          <svg
            viewBox="0 0 32 32"
            className="h-5 w-5 text-gold"
            fill="currentColor"
          >
            <path d="M19.11 17.53c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.52-.44-.45-.61-.46l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.93-.96 2.27s.98 2.63 1.11 2.81c.14.18 1.92 2.93 4.65 4.11.65.28 1.15.45 1.54.57.65.21 1.24.18 1.7.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/>
            <path d="M16.02 2.67c-7.36 0-13.33 5.97-13.33 13.33 0 2.35.61 4.64 1.77 6.65L2.67 29.33l6.84-1.79c1.94 1.06 4.13 1.62 6.37 1.62 7.36 0 13.33-5.97 13.33-13.33S23.38 2.67 16.02 2.67zm0 24.23c-2.03 0-4.02-.54-5.77-1.55l-.41-.24-4.06 1.06 1.08-3.95-.26-.41a11.18 11.18 0 01-1.71-5.99c0-6.2 5.04-11.24 11.24-11.24S27.27 9.62 27.27 15.82 22.23 26.9 16.02 26.9z"/>
          </svg>
        </div>

        {/* Text */}
        <div className="flex flex-col leading-none">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold/70 font-body">
            Quick Help
          </span>
          <span className="text-sm font-body text-white">
            Chat on WhatsApp
          </span>
        </div>
      </div>
    </a>
  );
}