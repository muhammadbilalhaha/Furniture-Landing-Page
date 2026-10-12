import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { INSPIRATION } from "../data/products";
import { fadeUp, staggerParent, viewportOnce } from "../lib/motion";

const SHAPE_CLASS = {
  left: "rounded-tl-[80px] rounded-br-[80px]",
  right: "rounded-tr-[80px] rounded-bl-[80px]",
  none: "rounded-none",
};

export default function Inspiration() {
  return (
    <section className="bg-white">
      <div className="container-x section-y">
        <SectionHeading
          title="Inspiration Collection"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={staggerParent(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 items-center"
        >
          {INSPIRATION.map((item, i) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className={`
                overflow-hidden ${SHAPE_CLASS[item.shape]}
                aspect-[4/5] sm:aspect-[3/4]
                max-w-sm sm:max-w-none mx-auto sm:mx-0 w-full
                ${i === 1 ? "sm:scale-[1.02]" : ""}
              `}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}