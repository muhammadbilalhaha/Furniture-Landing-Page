import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const INSTAGRAM_TILES = [
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=400&q=80",
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x py-12 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
          {/* Left: brand copy */}
          <div>
            <h3 className="text-2xl font-bold text-white">Beauty Care</h3>
            <p className="mt-5 text-sm leading-relaxed text-white/70 max-w-md">
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="mt-6 text-base font-semibold text-white">Follow Us</p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-white hover:text-white/70 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-white/70 transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white hover:text-white/70 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Instagram Shop grid */}
          <div>
            <h4 className="text-base font-semibold text-white">
              Instagram Shop
            </h4>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {INSTAGRAM_TILES.map((src, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={`Instagram post ${i + 1}`}
                  className="relative block overflow-hidden rounded-md aspect-square group"
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Furniture. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}