import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import useScrollLock from "../lib/useScrollLock";
import { EASE } from "../lib/motion";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Shop", href: "#shop" },
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function MobileMenu({ open, onClose }) {
  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/40 z-40 lg:hidden"
            aria-hidden="true"
          />
          <motion.aside
            key="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-lift flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between px-5 h-16 border-b border-line">
              <span className="font-bold text-lg text-navy">Furniture</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 -mr-2 rounded-md hover:bg-navy/5 transition-colors"
              >
                <X className="w-5 h-5 text-navy" aria-hidden="true" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-5 py-6">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: EASE,
                      delay: 0.1 + i * 0.05,
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="block py-4 px-2 text-lg font-medium text-ink
                                 hover:text-navy rounded-md hover:bg-navy/5 transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-30 w-full bg-white">
        <div
          className={`w-full border-b transition-colors duration-300 ${
            scrolled ? "border-line" : "border-transparent"
          }`}
        >
          <div className="container-x flex items-center justify-between h-14 sm:h-16 lg:h-20">
            <a
              href="/"
              className="font-bold text-lg sm:text-xl lg:text-2xl text-navy tracking-tight"
            >
              Furniture
            </a>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-6 xl:gap-10">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-ink/80 hover:text-navy transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-2
                         rounded-md hover:bg-navy/5 transition-colors"
            >
              <Menu className="w-6 h-6 text-navy" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}