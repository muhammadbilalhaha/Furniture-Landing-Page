import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerParent, EASE } from "../lib/motion";

const HERO_IMG =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80";

export default function Hero() {
  return (
    <section className="relative bg-lavender">
      {/* MOBILE + TABLET: stacked layout */}
      <div className="lg:hidden">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="w-full h-[260px] sm:h-[380px] md:h-[460px] overflow-hidden"
        >
          <img
            src={HERO_IMG}
            alt="Bright living room with a rattan chair, plants, and neutral textiles"
            className="w-full h-full object-cover"
            fetchpriority="high"
          />
        </motion.div>

        <motion.div
          variants={staggerParent(0.1, 0.1)}
          initial="hidden"
          animate="visible"
          className="container-x py-8 sm:py-10"
        >
          <motion.span variants={fadeUp} className="eyebrow block mb-3">
            New Arrival
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-[1.75rem] sm:text-4xl font-bold text-navy leading-tight"
          >
            Discover Our
            <br />
            New Collection
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-muted text-sm sm:text-base leading-relaxed max-w-md"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6">
            <motion.a
              href="#shop"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="inline-flex items-center justify-center px-7 py-3 rounded-pill
                         bg-navy text-white text-sm font-semibold tracking-wide
                         hover:bg-navy-deep transition-colors"
            >
              BUY NOW
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* DESKTOP: overlay layout */}
      <div className="hidden lg:block relative">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="relative w-full h-[560px] xl:h-[620px] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80"
            alt="Bright living room with a rattan chair, plants, and neutral textiles"
            className="absolute inset-0 w-full h-full object-cover"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30" />
        </motion.div>

        <div className="container-x absolute inset-0 flex items-center">
          <div className="w-full flex justify-end">
            <motion.div
              variants={staggerParent(0.1, 0.2)}
              initial="hidden"
              animate="visible"
              className="w-full max-w-md xl:max-w-lg bg-lavender/95 backdrop-blur-sm
                         rounded-lg p-10 xl:p-12 shadow-soft"
            >
              <motion.span variants={fadeUp} className="eyebrow block mb-4">
                New Arrival
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="text-4xl xl:text-5xl font-bold text-navy leading-tight"
              >
                Discover Our
                <br />
                New Collection
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-5 text-muted text-base leading-relaxed"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-7">
                <motion.a
                  href="#shop"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-pill
                             bg-navy text-white text-sm font-semibold tracking-wide
                             hover:bg-navy-deep transition-colors"
                >
                  BUY NOW
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}