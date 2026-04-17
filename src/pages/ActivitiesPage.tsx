import { motion } from "framer-motion";
import { ACTIVITIES } from "@/data/hotel-data";
import SectionHeading from "@/components/SectionHeading";
import BookingCTA from "@/components/BookingCTA";

export default function ActivitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[340px] h-[42vh] bg-primary flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-primary/95" />
        <div className="relative max-w-7xl mx-auto w-full px-6 pt-24 md:pt-28">
          <div className="flex items-center justify-center text-center">
            <SectionHeading
              subtitle="Discover"
              title="Activities & Experiences"
              light
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {ACTIVITIES.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src={a.image}
                    alt={a.name}
                    className="w-full h-60 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                    width={1280}
                    height={854}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-black/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                  <div className="absolute inset-0 rounded-[22px] ring-1 ring-black/5 pointer-events-none" />
                </div>

                <div className="pt-5">
                  <h3 className="text-[1.7rem] leading-tight font-heading text-foreground">
                    {a.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-8 text-muted-foreground font-body">
                    {a.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}