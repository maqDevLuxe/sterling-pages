import { motion } from "framer-motion";

const allocations = [
  { label: "Public Equities", pct: 35, color: "bg-primary" },
  { label: "Fixed Income", pct: 20, color: "bg-forest" },
  { label: "Private Equity", pct: 18, color: "bg-gold-dark" },
  { label: "Real Assets", pct: 15, color: "bg-forest-light" },
  { label: "Alternatives", pct: 8, color: "bg-cream-muted" },
  { label: "Cash & Equiv.", pct: 4, color: "bg-charcoal-lighter" },
];

const AssetAllocation = () => (
  <section className="section-padding">
    <div className="max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-body">
          Strategic Allocation
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-light">
          Model Portfolio
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Bar chart mockup */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 space-y-5"
        >
          {allocations.map((a, i) => (
            <div key={a.label}>
              <div className="flex justify-between text-xs mb-2 font-body">
                <span className="text-cream-muted">{a.label}</span>
                <span className="text-primary">{a.pct}%</span>
              </div>
              <div className="h-2 bg-charcoal-lighter rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${a.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  className={`h-full ${a.color} rounded-full`}
                />
              </div>
            </div>
          ))}
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-cream-muted font-body">
              Balanced Growth Profile · $10M+ Minimum · Updated Q1 2026
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <p className="font-display text-5xl text-primary mb-2">14.2%</p>
            <p className="text-xs tracking-[0.15em] uppercase text-cream-muted font-body">
              Annualized Return (10Y)
            </p>
          </div>
          <div className="gold-line" />
          <div>
            <p className="font-display text-5xl text-foreground mb-2">0.68</p>
            <p className="text-xs tracking-[0.15em] uppercase text-cream-muted font-body">
              Sharpe Ratio
            </p>
          </div>
          <div className="gold-line" />
          <div>
            <p className="font-display text-5xl text-foreground mb-2">-8.3%</p>
            <p className="text-xs tracking-[0.15em] uppercase text-cream-muted font-body">
              Max Drawdown (2020)
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AssetAllocation;
