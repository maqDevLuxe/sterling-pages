import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const offices = [
  { city: "New York", region: "Americas HQ", x: "23%", y: "35%" },
  { city: "London", region: "EMEA HQ", x: "47%", y: "28%" },
  { city: "Zürich", region: "Private Banking", x: "50%", y: "30%" },
  { city: "Singapore", region: "Asia-Pacific HQ", x: "76%", y: "55%" },
  { city: "Dubai", region: "Middle East", x: "60%", y: "42%" },
  { city: "Hong Kong", region: "Greater China", x: "79%", y: "43%" },
];

const GlobalReach = () => (
  <section id="global" className="section-padding bg-charcoal-light">
    <div className="max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-body">
          Worldwide Presence
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          Global Reach
        </h2>
      </motion.div>

      {/* Map area */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative aspect-[2/1] glass-card overflow-hidden mb-12"
      >
        {/* Simplified world outline with dots */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full relative">
            {/* Grid lines */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute w-full h-px bg-border/30"
                style={{ top: `${(i + 1) * 11}%` }}
              />
            ))}
            {[...Array(12)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute h-full w-px bg-border/30"
                style={{ left: `${(i + 1) * 8}%` }}
              />
            ))}

            {/* Office markers */}
            {offices.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="absolute group cursor-pointer"
                style={{ left: office.x, top: office.y }}
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <div className="absolute w-8 h-8 -left-2.5 -top-2.5 border border-primary/30 rounded-full" />
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 glass-card px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    <p className="text-xs font-display text-foreground">{office.city}</p>
                    <p className="text-[10px] text-cream-muted font-body">{office.region}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Office list */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {offices.map((office, i) => (
          <motion.div
            key={office.city}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <MapPin className="text-primary mx-auto mb-2" size={16} strokeWidth={1.5} />
            <p className="font-display text-sm text-foreground">{office.city}</p>
            <p className="text-[10px] text-cream-muted font-body">{office.region}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GlobalReach;
