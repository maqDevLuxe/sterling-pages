import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const LegacyPlanning = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section id="legacy" ref={ref} className="section-padding">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Generational Wealth
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light mb-8 leading-tight">
            Legacy Planning <br />
            <span className="italic text-primary">Beyond Generations</span>
          </h2>
          <p className="text-cream-muted text-sm leading-relaxed mb-6 font-body font-light">
            We architect multi-generational wealth structures that endure. From
            dynasty trusts and family governance frameworks to philanthropic
            vehicles, every element is designed with permanence in mind.
          </p>
          <div className="space-y-4 mb-10">
            {["Dynasty Trust Architecture", "Family Office Structuring", "Philanthropic Advisory", "Tax-Efficient Succession"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-cream-muted text-sm font-body">{item}</span>
                </div>
              )
            )}
          </div>
          <a
            href="#consultation"
            className="inline-block px-8 py-3 border border-primary text-primary text-xs tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body"
          >
            Schedule a Review
          </a>
        </motion.div>

        <motion.div
          style={{ y: imgY }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
              alt="Prestigious corporate building"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="glass-card p-6">
              <p className="text-xs tracking-[0.2em] uppercase text-primary mb-1 font-body">
                Average Client Tenure
              </p>
              <p className="font-display text-3xl text-foreground">22 Years</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegacyPlanning;
