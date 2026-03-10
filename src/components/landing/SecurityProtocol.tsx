import { motion } from "framer-motion";
import { Lock, Eye, Fingerprint, Server } from "lucide-react";

const protocols = [
  {
    icon: Lock,
    title: "Bank-Grade Encryption",
    desc: "256-bit AES encryption for all data at rest and in transit. SOC 2 Type II certified infrastructure.",
  },
  {
    icon: Eye,
    title: "Absolute Discretion",
    desc: "Strict NDA protocols, anonymous transaction routing, and compartmentalized information architecture.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Access",
    desc: "Multi-factor authentication with biometric verification for all portfolio access and transactions.",
  },
  {
    icon: Server,
    title: "Swiss Data Residency",
    desc: "Primary data centers in Switzerland with redundant backups across secure jurisdictions.",
  },
];

const SecurityProtocol = () => (
  <section className="section-padding bg-charcoal-light">
    <div className="max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-body">
          Your Security
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-light mb-6">
          Discretion & Protocol
        </h2>
        <p className="text-cream-muted text-sm max-w-xl mx-auto font-body font-light leading-relaxed">
          Our commitment to confidentiality is absolute. Every interaction is
          protected by institutional-grade security and unwavering discretion.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {protocols.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 text-center group hover:border-primary/20 transition-all duration-500"
          >
            <div className="w-14 h-14 mx-auto mb-6 border border-primary/30 rounded-full flex items-center justify-center group-hover:border-primary/60 transition-colors duration-300">
              <p.icon className="text-primary" size={22} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-base mb-3">{p.title}</h3>
            <p className="text-cream-muted text-xs leading-relaxed font-body font-light">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SecurityProtocol;
