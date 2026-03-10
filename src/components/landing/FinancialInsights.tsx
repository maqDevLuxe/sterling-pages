import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    tag: "Market Commentary",
    title: "Navigating Volatility: A Framework for 2026",
    date: "March 2026",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
  },
  {
    tag: "Tax Strategy",
    title: "The New Landscape of International Tax Compliance",
    date: "February 2026",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    tag: "Private Markets",
    title: "Why Family Offices Are Doubling Down on Venture",
    date: "January 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
];

const FinancialInsights = () => (
  <section id="insights" className="section-padding">
    <div className="max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between mb-16"
      >
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Research & Analysis
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light">
            Financial Insights
          </h2>
        </div>
        <a
          href="#"
          className="hidden md:flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-primary hover:text-gold-light transition-colors font-body"
        >
          View All <ArrowUpRight size={14} />
        </a>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <motion.article
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[16/10] overflow-hidden mb-6">
              <motion.img
                src={a.image}
                alt={a.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <p className="text-xs tracking-[0.15em] uppercase text-primary mb-2 font-body">
              {a.tag}
            </p>
            <h3 className="font-display text-lg md:text-xl mb-2 group-hover:text-primary transition-colors duration-300">
              {a.title}
            </h3>
            <p className="text-xs text-cream-muted font-body">{a.date}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default FinancialInsights;
