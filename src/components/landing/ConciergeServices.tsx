import { motion } from "framer-motion";
import { Plane, Building2, GraduationCap, Heart } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Aviation & Yachting",
    desc: "Fractional ownership structuring, fleet management, and bespoke travel logistics.",
  },
  {
    icon: Building2,
    title: "Real Estate Advisory",
    desc: "Off-market trophy properties, international residency programs, and estate acquisition.",
  },
  {
    icon: GraduationCap,
    title: "Next-Gen Education",
    desc: "Elite boarding school placement, university admissions advisory, and heir mentorship programs.",
  },
  {
    icon: Heart,
    title: "Philanthropy Design",
    desc: "Foundation establishment, impact measurement, and legacy-aligned charitable giving strategies.",
  },
];

const ConciergeServices = () => (
  <section id="services" className="section-padding bg-charcoal-light">
    <div className="max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-body">
          White Glove Service
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          Exclusive Concierge
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass-card p-10 group hover:border-primary/20 transition-all duration-500"
          >
            <s.icon
              className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300"
              size={28}
              strokeWidth={1.5}
            />
            <h3 className="font-display text-xl mb-3">{s.title}</h3>
            <p className="text-cream-muted text-sm leading-relaxed font-body font-light">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ConciergeServices;
