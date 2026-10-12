import { Truck, Headphones, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: Truck, title: "Free Delivery", text: "Lorem ipsum dolor sit amet." },
  { icon: Headphones, title: "Support 24/7", text: "Lorem ipsum dolor sit amet." },
  { icon: ShieldCheck, title: "100% Authentic", text: "Lorem ipsum dolor sit amet." },
];

export default function TrustStrip() {
  return (
    <section className="bg-lavender">
      <div className="container-x py-7 sm:py-8 lg:py-10">
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-12">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex items-start sm:items-center gap-4 text-left"
            >
              <Icon
                className="w-7 h-7 sm:w-8 sm:h-8 text-navy shrink-0 mt-0.5 sm:mt-0"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-navy text-sm">{title}</p>
                <p className="text-xs text-muted mt-0.5">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}