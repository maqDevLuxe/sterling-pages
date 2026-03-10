import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CinematicPromo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 -top-[10%] h-[130%]"
      >
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80"
          alt="Luxury financial district skyline"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/50" />
      </motion.div>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6 font-body">
            A Tradition of Trust
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-7xl font-light max-w-4xl leading-tight italic">
            "Wealth is not about having, <br className="hidden md:block" />
            it is about becoming."
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicPromo;
