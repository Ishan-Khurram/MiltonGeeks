import React, { useState } from "react";

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  {
    q: "Is my data safe while you are working on my device?",
    a: "Absolutely. Your privacy and data security are our top priorities. We never access personal files unless it’s necessary for troubleshooting, and all data remains on your device at all times.",
  },
  {
    q: "What happens if something goes wrong after the repair?",
    a: "Every repair is backed by our satisfaction guarantee. If an issue related to the original repair occurs shortly after service, we’ll take another look at no additional cost to make it right.",
  },
  {
    q: "Can I trust the quality of your work?",
    a: "Yes. We take pride in doing things properly the first time. Every job—hardware or software—is handled with care, using quality parts, proper tools, and thoroughly tested before being returned.",
  },
  {
    q: "What are your hours of operation?",
    a: "We operate Monday through Friday from 9 AM to 7 PM, with weekend appointments available upon request. Because we travel directly to our customers, we’re fully appointment-based and happy to find a time that fits your schedule.",
  },

  {
    q: "Do you have an in-person store?",
    a: "No, we don’t have a physical storefront. We come directly to you, providing professional, on-site repairs and setup services for your convenience—saving you time and hassle.",
  },
  {
    q: "Do you have a referral program?",
    a: "Yes! When you refer someone who completes a service with us, both you and your referral receive a discount on your next repair or setup service.",
  },
  {
    q: "Are there any repairs you don't do?",
    a: "We specialize in laptop and desktop hardware and software repairs. For phones and tablets, we handle software-related issues such as app errors, updates, and setup problems. We don’t perform physical repairs like screen or port replacements.",
  },
  {
    q: "What methods of payment do you accept?",
    a: "E-transfer and cash are preferred for convenience, but we also accept card payments through Square for those who prefer debit or credit.",
  },
];

export default function FAQCard() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="rounded-xl bg-white shadow-sm">
      <ul className="divide-y-[1.5px] divide-slate-200">
        {faqs.map((item, i) => (
          <li key={i}>
            <FAQItem
              {...item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FAQItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  const id = q.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="px-6 py-4">
      {/* Question row */}
      <button
        className="w-full flex items-center justify-between gap-4 text-left focus:outline-none"
        aria-expanded={open}
        aria-controls={`${id}-answer`}
        onClick={onToggle}
      >
        <p className="text-[18px] leading-[135%] font-medium text-slate-900">
          {q}
        </p>

        {/* Plus -> X */}
        <span
          className={[
            "relative shrink-0 size-5 opacity-30 transition-transform",
            open ? "rotate-45" : "",
          ].join(" ")}
          aria-hidden="true"
        >
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] rounded bg-black"></span>
          <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] rounded bg-black"></span>
        </span>
      </button>

      {/* Answer */}
      <div
        id={`${id}-answer`}
        className={[
          "grid transition-all duration-300 ease-out",
          open
            ? "grid-rows-[1fr] opacity-100 mt-2"
            : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <p className="text-[16px] leading-[135%] text-slate-600">{a}</p>
        </div>
      </div>
    </div>
  );
}
