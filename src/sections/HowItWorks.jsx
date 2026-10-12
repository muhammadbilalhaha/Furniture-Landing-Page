import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { STEPS } from "../data/products";
import { fadeUp, staggerParent, viewportOnce } from "../lib/motion";

export default function HowItWorks() {
  return (
    <section id="shop" className="bg-white">
      <div className="container-x section-y">
        <SectionHeading
          title="How It Works"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          className="mb-14 sm:mb-16"
        />

        <motion.div
          variants={staggerParent(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-3 gap-14 sm:gap-10 lg:gap-8"
        >
          {STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-full max-w-sm sm:max-w-none mx-auto">
                <div className="overflow-hidden rounded-lg aspect-[4/3] bg-lavender">
                  <img
                    src={step.image}
                    alt={step.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span
                  className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-12 h-12 rounded-full
                             bg-ink text-white flex items-center justify-center font-semibold text-sm
                             border-4 border-white"
                  aria-hidden="true"
                >
                  {step.number}.
                </span>
              </div>
              <h3 className="mt-10 text-h3 text-navy">{step.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed max-w-xs px-2">
                {step.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}