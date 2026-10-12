import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { CATEGORIES } from "../data/products";
import { fadeUp, staggerParent, viewportOnce } from "../lib/motion";

export default function BrowseRange() {
  return (
    <section id="collections" className="bg-white">
      <div className="container-x section-y">
        <SectionHeading
          title="Browse The Range"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8"
        >
          {CATEGORIES.map((cat) => (
            <motion.a
              key={cat.id}
              variants={fadeUp}
              href="#"
              className="group block focus-visible:outline-none"
              aria-label={`Shop ${cat.label}`}
            >
              <div className="overflow-hidden rounded-lg aspect-[5/4] sm:aspect-[4/5] bg-lavender">
                <img
                  src={cat.image}
                  alt={cat.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700
                             ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-center font-semibold text-navy text-base">
                {cat.label}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}