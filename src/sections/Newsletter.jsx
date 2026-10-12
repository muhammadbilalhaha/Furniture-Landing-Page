import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce, EASE } from "../lib/motion";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    // UI demo only — no backend connected.
    setStatus("success");
    setMessage("Thanks — you're on the list. (Demo only — nothing was stored.)");
    setEmail("");
  };

  return (
    <section id="contact" className="bg-lavender">
      <div className="container-x section-y">
        <motion.div
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-xl mx-auto text-center flex flex-col items-center gap-4"
        >
          <motion.h2 variants={fadeUp} className="text-h2 text-navy">
            Join Our Mailing List
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted leading-relaxed text-sm sm:text-base"
          >
            Sign up to receive inspiration, product updates,
            <br className="hidden sm:block" /> and special offers from our team.
          </motion.p>

          <motion.form
            variants={fadeUp}
            onSubmit={onSubmit}
            noValidate
            className="w-full mt-4"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex w-full max-w-md mx-auto">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") {
                    setStatus("idle");
                    setMessage("");
                  }
                }}
                placeholder="example@gmail.com"
                aria-invalid={status === "error"}
                aria-describedby="newsletter-status"
                className={`flex-1 min-w-0 px-4 py-3 bg-white text-ink text-sm
                            border transition-colors rounded-l-sm focus:outline-none
                            ${
                              status === "error"
                                ? "border-red-500"
                                : "border-line focus:border-navy"
                            }`}
              />
              <button
                type="submit"
                className="px-5 sm:px-8 py-3 bg-navy text-white text-sm font-semibold
                           rounded-r-sm hover:bg-navy-deep transition-colors shrink-0"
              >
                Submit
              </button>
            </div>

            <AnimatePresence>
              {message && (
                <motion.p
                  id="newsletter-status"
                  role="status"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className={`mt-3 text-sm ${
                    status === "error" ? "text-red-600" : "text-accent-green"
                  }`}
                >
                  {message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}