import { motion } from "framer-motion";
import { TrendingUp, Shield, Globe, Landmark, BarChart3, Gem } from "lucide-react";

const strategies = [
  {
    icon: TrendingUp,
    title: "Equity Growth",
    desc: "Curated portfolios of blue-chip equities and pre-IPO opportunities across global markets.",
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    icon: Shield,
    title: "Capital Preservation",
    desc: "Conservative strategies designed to protect principal across market cycles.",
    span: "",
  },
  {
    icon: Globe,
    title: "Global Macro",
    desc: "Thematic positions across currencies, commodities, and sovereign debt.",
    span: "",
  },
  {
    icon: Landmark,
    title: "Real Assets",
    desc: "Trophy real estate, infrastructure, and tangible asset allocation.",
    span: "md:col-span-2",
  },
  {
    icon: BarChart3,
    title: "Alternatives",
    desc: "Private equity, venture capital, and hedge fund access.",
    span: "",
  },
  {
    icon: Gem,
    title: "Collectibles & Art",
    desc: "Advisory for fine art, rare wines, and luxury asset portfolios.",
    span: "",
  },
];

const WealthStrategies = () => (
  <section id="strategies" className="section-padding">
    <div className="max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-body">
          Investment Philosophy
        </p>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light">
          Wealth Strategies
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {strategies.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass-card p-8 group hover:border-primary/30 transition-all duration-500 ${s.span} ${
              s.featured ? "flex flex-col justify-between min-h-[320px]" : ""
            }`}
          >
            <div>
              <s.icon
                className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300"
                size={s.featured ? 32 : 24}
                strokeWidth={1.5}
              />
              <h3 className={`font-display ${s.featured ? "text-2xl md:text-3xl" : "text-lg"} mb-3`}>
                {s.title}
              </h3>
            </div>
            <p className="text-cream-muted text-sm leading-relaxed font-body font-light">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WealthStrategies;
