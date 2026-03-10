import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[10%] h-[120%]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </motion.div>

      {/* Floating geometric lines */}
      <div className="absolute inset-0 geo-lines opacity-30" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="h-px bg-primary mb-10"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs tracking-[0.4em] uppercase text-primary mb-8 font-body"
        >
          Est. 1987 — Private Wealth Advisory
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] max-w-5xl tracking-tight"
        >
          <span className="text-foreground">Your Legacy,</span>
          <br />
          <span className="italic text-primary">Our Stewardship</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 text-cream-muted text-sm md:text-base max-w-xl leading-relaxed font-body font-light"
        >
          Preserving and growing generational wealth through bespoke strategies,
          institutional discipline, and absolute discretion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#consultation"
            className="magnetic-btn px-10 py-4 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-body hover:bg-gold-light transition-colors duration-300"
          >
            Begin Your Journey
          </a>
          <a
            href="#strategies"
            className="magnetic-btn px-10 py-4 border border-border text-foreground text-xs tracking-[0.2em] uppercase font-body hover:border-primary hover:text-primary transition-all duration-300"
          >
            Our Approach
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="text-primary" size={18} />
      </motion.div>
    </section>
  );
};

export default Hero;
