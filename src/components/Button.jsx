import { motion } from "framer-motion";
import { EASE } from "../lib/motion";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-wide " +
  "transition-colors duration-200 select-none disabled:opacity-50 disabled:pointer-events-none " +
  "focus-visible:outline-none";

const variants = {
  primary: "bg-navy text-white hover:bg-navy-deep border border-navy",
  secondary:
    "bg-transparent text-navy border border-navy/40 hover:border-navy hover:bg-navy/5",
  ghost: "bg-transparent text-navy hover:text-navy-soft",
  flat: "bg-navy text-white hover:bg-navy-deep",
};

const sizes = {
  sm: "text-xs px-5 py-2.5 rounded-pill",
  md: "text-sm px-7 py-3 rounded-pill",
  lg: "text-sm px-9 py-3.5 rounded-pill",
  form: "text-sm px-8 py-3",
};

export default function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  icon: Icon,
  iconPosition = "right",
  ...props
}) {
  const MotionTag = motion(Tag);
  return (
    <MotionTag
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: EASE }}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon className="w-4 h-4" aria-hidden="true" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className="w-4 h-4" aria-hidden="true" />
      )}
    </MotionTag>
  );
}