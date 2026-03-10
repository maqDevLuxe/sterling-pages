import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

const ConsultationCTA = () => (
  <>
    {/* CTA Section */}
    <section id="consultation" className="section-padding bg-charcoal-light relative overflow-hidden">
      <div className="absolute inset-0 geo-lines opacity-20" />
      <div className="max-w-[800px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="gold-line w-16 mx-auto mb-10" />
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6 font-body">
            By Invitation & Referral
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Request a <br />
            <span className="italic text-primary">Private Consultation</span>
          </h2>
          <p className="text-cream-muted text-sm leading-relaxed mb-12 font-body font-light max-w-lg mx-auto">
            We accept a limited number of new relationships each year. Share your
            objectives and a senior advisor will reach out within 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:advisory@meridiancapital.com"
              className="magnetic-btn inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-body hover:bg-gold-light transition-colors duration-300"
            >
              Request Introduction <ArrowUpRight size={14} />
            </a>
            <a
              href="tel:+12125551987"
              className="magnetic-btn inline-flex items-center justify-center gap-2 px-10 py-4 border border-border text-foreground text-xs tracking-[0.2em] uppercase font-body hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Phone size={14} /> Speak Privately
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Footer */}
    <footer className="py-16 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center">
                <span className="font-display text-primary text-sm font-bold">M</span>
              </div>
              <span className="font-display text-lg tracking-[0.2em] text-foreground uppercase">
                Meridian
              </span>
            </div>
            <p className="text-cream-muted text-xs leading-relaxed font-body font-light">
              Private Wealth Management <br />
              Est. 1987
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary mb-4 font-body">
              Services
            </h4>
            <ul className="space-y-2">
              {["Wealth Management", "Legacy Planning", "Tax Advisory", "Family Office"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-cream-muted text-xs hover:text-primary transition-colors font-body">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary mb-4 font-body">
              Firm
            </h4>
            <ul className="space-y-2">
              {["About Us", "Leadership", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-cream-muted text-xs hover:text-primary transition-colors font-body">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary mb-4 font-body">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-primary" />
                <span className="text-cream-muted text-xs font-body">advisory@meridiancapital.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-primary" />
                <span className="text-cream-muted text-xs font-body">+1 (212) 555-1987</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-primary" />
                <span className="text-cream-muted text-xs font-body">Park Avenue, New York</span>
              </div>
            </div>
          </div>
        </div>

        <div className="gold-line mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream-muted text-[10px] font-body tracking-wider">
            © 2026 Meridian Capital Group. All rights reserved. SEC Registered Investment Advisor.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Disclosures", "ADV"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-cream-muted text-[10px] hover:text-primary transition-colors font-body tracking-wider"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default ConsultationCTA;
