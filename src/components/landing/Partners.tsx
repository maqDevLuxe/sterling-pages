import { motion } from "framer-motion";

const partners = [
  "Goldman Sachs", "J.P. Morgan", "BlackRock", "Morgan Stanley",
  "UBS", "Credit Suisse", "Rothschild & Co", "Lazard",
];

const Partners = () => (
  <section className="section-padding border-t border-border">
    <div className="max-w-[1400px] mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs tracking-[0.3em] uppercase text-cream-muted mb-16 font-body"
      >
        Institutional Partners & Custodians
      </motion.p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
        {partners.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center justify-center"
          >
            <span className="font-display text-lg md:text-xl text-cream-muted/40 hover:text-primary transition-colors duration-500 tracking-wider">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
