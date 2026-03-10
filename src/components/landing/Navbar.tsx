import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Strategies", href: "#strategies" },
  { label: "Legacy", href: "#legacy" },
  { label: "Services", href: "#services" },
  { label: "Global Reach", href: "#global" },
  { label: "Insights", href: "#insights" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card py-4"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center">
            <span className="font-display text-primary text-sm font-bold">M</span>
          </div>
          <span className="font-display text-lg tracking-[0.2em] text-foreground uppercase">
            Meridian
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-cream-muted text-xs tracking-[0.15em] uppercase hover:text-primary transition-colors duration-300 font-body"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#consultation"
            className="px-6 py-2.5 border border-primary text-primary text-xs tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body"
          >
            Private Consultation
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mt-2 mx-6 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-cream-muted text-sm tracking-[0.1em] uppercase hover:text-primary transition-colors font-body"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#consultation"
                className="mt-2 px-6 py-3 border border-primary text-primary text-xs tracking-[0.15em] uppercase text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body"
              >
                Private Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
