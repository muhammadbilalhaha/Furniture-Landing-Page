import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "../lib/motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  titleAs: TitleTag = "h2",
}) {
  const alignment =
    align === "center"
      ? "text-center items-center mx-auto"
      : "text-left items-start";

  return (
    <motion.div
      variants={staggerParent(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex flex-col gap-3 max-w-xl ${alignment} ${className}`}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className="eyebrow">
          {eyebrow}
        </motion.span>
      )}
      {title && (
        <motion.div variants={fadeUp}>
          <TitleTag className="text-h2">{title}</TitleTag>
        </motion.div>
      )}
      {description && (
        <motion.p
          variants={fadeUp}
          className="text-muted leading-relaxed text-sm sm:text-base"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}