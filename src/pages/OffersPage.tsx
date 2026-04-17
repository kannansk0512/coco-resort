import { motion } from "framer-motion";
import { OFFERS } from "@/data/hotel-data";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";

export default function OffersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[340px] h-[42vh] bg-primary flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-primary/95" />
        <div className="relative max-w-7xl mx-auto w-full px-6 pt-24 md:pt-28">
          <div className="flex items-center justify-center text-center">
            <SectionHeading
              subtitle="Special"
              title="Offers & Promotions"
              light
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OFFERS.map((o, i) => (
              <motion.article
                key={o.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-[30px] border border-black/5 bg-[#fcfaf6] px-7 py-7 shadow-[0_10px_28px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
              >
                {/* subtle premium glow */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

                {/* discount badge */}
                <div className="inline-flex items-center rounded-full border border-gold/25 bg-gold/10 px-4 py-2">
                  <span className="text-[1rem] font-heading font-semibold text-gold">
                    {o.discount}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-[1.9rem] leading-tight font-heading text-foreground">
                    {o.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-8 text-muted-foreground font-body max-w-[52ch]">
                    {o.description}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px w-10 bg-gold/60" />
                    <p className="text-[11px] uppercase tracking-[0.24em] text-gold font-body">
                      {o.validUntil}
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center mt-7 rounded-full border border-gold/40 px-6 py-3 text-xs font-body font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:bg-gold/10 hover:border-gold/60"
                  >
                    Claim Offer
                  </Link>
                </div>

                {/* inner outline */}
                <div className="pointer-events-none absolute inset-[10px] rounded-[22px] border border-black/0 transition-all duration-500 group-hover:border-gold/10" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}