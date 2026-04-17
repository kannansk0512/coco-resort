import { motion } from "framer-motion";

interface Props {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

export default function SectionHeading({ subtitle, title, description, light }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      {subtitle && (
        <span className="text-xs uppercase tracking-[0.3em] text-gold font-body font-bold">{subtitle}</span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading mt-3 ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl mx-auto font-body text-base leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
      <div className="mt-6 mx-auto w-16 h-0.5 gold-gradient rounded-full" />
    </motion.div>
  );
}
