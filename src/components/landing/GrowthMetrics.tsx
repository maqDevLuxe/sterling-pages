import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const metrics = [
  { value: 47, suffix: "B+", label: "Assets Under Advisory", prefix: "$" },
  { value: 36, suffix: "+", label: "Years of Excellence", prefix: "" },
  { value: 98, suffix: "%", label: "Client Retention Rate", prefix: "" },
  { value: 12, suffix: "", label: "Global Offices", prefix: "" },
];

const AnimatedCounter = ({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref} className="gold-text font-display text-5xl md:text-7xl font-light">
      {prefix}{count}{suffix}
    </span>
  );
};

const GrowthMetrics = () => (
  <section className="section-padding border-t border-b border-border">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} />
            <div className="gold-line w-12 mx-auto my-4" />
            <p className="text-cream-muted text-xs tracking-[0.15em] uppercase font-body">
              {m.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GrowthMetrics;
