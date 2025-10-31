import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import emailSubmission from "../components/EmailData";

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // mark mounted so portals have a target
  useEffect(() => setMounted(true), []);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onMouseDown={(e) => {
        // Close when clicking the backdrop (not inner panel)
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl ring-1 ring-black/5">
        <div className="mb-4 flex items-start justify-between">
          <h2
            id="contact-modal-title"
            className="text-center text-2xl font-semibold text-slate-900 flex-1"
          >
            Secure your spot now
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="rounded-md p-1 text-slate-500 hover:bg-slate-100"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <p className="mt-2 text-center text-sm text-slate-500">
          Need a hand with your tech? Send us a quick message — we’ll get back
          to you right away to schedule your repair.
        </p>

        <form
          className="mt-2 space-y-3"
          onSubmit={async (e) => {
            await emailSubmission(e);
            setOpen(false);
          }}
        >
          <input
            name="name"
            required
            type="text"
            placeholder="Name"
            className="w-full inline-block p-[15px] text-[16px] leading-[1.4em] rounded-lg bg-[#ebebeb] text-gray-500 border-none outline-none shadow-[inset_0_0_0_1px_transparent] focus:shadow-[inset_0_0_0_1px_rgba(124,58,237,0.75)] transition-shadow"
            autoFocus
          />

          {/* Honeypot */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <input
            name="phone"
            required
            type="tel"
            placeholder="Phone Number"
            className="w-full inline-block p-[15px] text-[16px] leading-[1.4em] rounded-lg bg-[#ebebeb] text-gray-500 border-none outline-none shadow-[inset_0_0_0_1px_transparent] focus:shadow-[inset_0_0_0_1px_rgba(124,58,237,0.75)] transition-shadow"
          />

          <textarea
            name="message"
            required
            placeholder="Message"
            rows={3}
            className="w-full inline-block p-[15px] text-[16px] leading-[1.4em] rounded-lg bg-[#ebebeb] text-gray-500 border-none outline-none shadow-[inset_0_0_0_1px_transparent] focus:shadow-[inset_0_0_0_1px_rgba(124,58,237,0.75)] transition-shadow"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-violet-600 py-3 text-center text-white font-semibold hover:bg-[#1F76D2] transition-colors"
          >
            Submit
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-slate-500 font-bold">
          Need help now? Call us @{" "}
          <span className="underline font-bold">(647) 574 0861</span>
        </p>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full bg-[#fffff] text-[#1F76D2] px-4 py-2 hover:bg-[#F8F8F8] transition outline-1"
      >
        Contact
      </button>

      {open && mounted && createPortal(modal, document.body)}
    </>
  );
}
