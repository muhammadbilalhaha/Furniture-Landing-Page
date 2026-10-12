import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  staggerParent,
  viewportOnce,
} from "../lib/motion";

export default function BeautifySpace() {
  return (
    <section id="about" className="bg-lavender">
      <div className="container-x section-y">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            variants={staggerParent(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-md mx-auto lg:mx-0 text-center lg:text-left"
          >
            <motion.h2 variants={fadeUp} className="text-h2 text-navy">
              Beautify Your Space
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-muted leading-relaxed"
            >
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-7 flex justify-center lg:justify-start"
            >
              <motion.a
                href="#"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-pill
                           bg-navy text-white text-sm font-semibold tracking-wide
                           hover:bg-navy-deep transition-colors"
              >
                LEARN MORE
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image with green circle accent */}
          <div className="relative flex justify-center lg:justify-end mt-2 lg:mt-0">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              aria-hidden="true"
              className="hidden sm:block absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2
                         w-48 md:w-56 lg:w-72 h-48 md:h-56 lg:h-72 rounded-full bg-accent-green z-0"
            />
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative z-10 w-full max-w-sm lg:max-w-md aspect-[4/5] overflow-hidden rounded-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80"
                alt="Woman wearing a straw hat, seated in a styled interior"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}