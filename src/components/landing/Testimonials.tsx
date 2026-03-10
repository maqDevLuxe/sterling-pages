import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Meridian has been the cornerstone of our family's financial strategy for two decades. Their discretion is matched only by their performance.",
    name: "J. Harrington III",
    title: "Chairman, Harrington Holdings",
  },
  {
    quote:
      "In thirty years of managing institutional capital, I've never encountered a team with such depth of expertise and genuine care for their clients.",
    name: "Dr. Elisabeth Crane",
    title: "Former CIO, Crane Foundation",
  },
  {
    quote:
      "They don't just manage wealth — they understand what it means. The peace of mind they provide is invaluable.",
    name: "Sir Michael K.",
    title: "Private Client, London",
  },
];

const Testimonials = () => (
  <section className="section-padding">
    <div className="max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-body">
          Client Voices
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          Trusted by the Distinguished
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-10 flex flex-col justify-between"
          >
            <div>
              <Quote className="text-primary/30 mb-6" size={28} strokeWidth={1} />
              <p className="text-foreground text-sm leading-relaxed font-body font-light italic mb-8">
                "{t.quote}"
              </p>
            </div>
            <div>
              <div className="gold-line mb-4" />
              <p className="font-display text-sm text-foreground">{t.name}</p>
              <p className="text-xs text-cream-muted font-body mt-1">{t.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
