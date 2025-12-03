/*
 * File: Services.tsx
 * Description: Services page, houses simple text as well as contact form.
 *
 * Author: Ishan Khurram (mo.ishan.khurram@gmail.com)
 * Created: 2025-10-23
 * Last Updated: 2025-10-23
 *
 * Notes:
 * - resend requires lots of fixes with config files.
 *
 * Changelog:
 * - 2025-10-23: Initial version.
 *
 */
import BrandCarousel from "../components/BrandCarousel";
import emailSubmission from "../components/EmailData";
export default function Home() {
  /* Brands for the carousel at the bottom of the home page */
  const BRANDS = [
    { name: "HP", logoSrc: "/logos/hp.svg" },
    { name: "ASUS", logoSrc: "/logos/asus.svg" },
    { name: "Dell", logoSrc: "/logos/dell.svg" },
    { name: "Lenovo", logoSrc: "/logos/lenovo.svg" },
    { name: "Apple", logoSrc: "/logos/apple.svg" },
    { name: "Samsung", logoSrc: "/logos/samsung.svg" },
    { name: "Acer", logoSrc: "/logos/acer.svg" },
    { name: "MSI", logoSrc: "/logos/msibusiness.svg" },
    { name: "LG", logoSrc: "/logos/lg.svg" },
    { name: "Alienware", logoSrc: "/logos/alienware.svg" },
  ];

  return (
    <section className="bg-[#f6f7f9] overflow-x-hidden pt-24">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* 2-column layout */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* LEFT: blurb */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-lime-300/90 px-3 py-1 text-sm font-medium text-black">
              <span className="opacity-80">Need a Geek? Contact us! →</span>
            </p>

            <h1 className="mt-4 text-[60px] font-extrabold leading-tight tracking-tight text-slate-900 md:text-[60px]">
              We speak geek
              <span className="relative mx-2 inline-block">
                <span className="absolute -bottom-1 left-0 right-0 h-2 rounded bg-violet-400/70"></span>
                <span className="relative">so you don't have to</span>
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-[18px] leading-7 text-slate-600 font-bold">
              From stubborn computers to tricky setups, we make technology
              simple, patient, and stress-free by offering convenient in-home
              repair services.
            </p>

            {/* optional: logos/ratings row */}
            {/* optional: logos/ratings row */}
            <div className="mt-6 flex items-center gap-4 text-slate-500">
              {/* Stacked avatars */}
              <div className="flex -space-x-3">
                <div className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/PUja2jlMhB77g7YskLJxlVzkBAA.jpg?scale-down-to=512"
                    alt="Happy customer 1"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/0OBj7uN1ncKrMVzB0GprNt5uI.jpg?scale-down-to=512"
                    alt="Happy customer 2"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/lVDVGe7ZXiK6CfmkoqwS5fUXY.jpg?scale-down-to=512"
                    alt="Happy customer 3"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/JhbGle453RWF0QjzZnSxbtxRBiA.jpg?scale-down-to=512"
                    alt="Happy customer 4"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Rating text + stars */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-0.5 text-lg text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="ml-1 text-sm font-semibold text-slate-900">
                    5.0
                  </span>
                  <span className="text-xs text-slate-500">/ 5.0 rating</span>
                </div>
                <p className="text-xs text-slate-500">
                  Trusted by Milton families and local businesses
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: form card */}
          <div className="lg:justify-self-end">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl ring-1 ring-black/5">
              <h2 className="text-center text-2xl font-semibold text-slate-900">
                Secure your spot now
              </h2>
              <p className="mt-2 text-center text-sm text-slate-500">
                Get fast, reliable tech help from your local experts. <br />
                Fill out the form and we’ll reach out shortly.
              </p>

              <form className="mt-6 space-y-3" onSubmit={emailSubmission}>
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Name"
                  className="w-full inline-block p-[15px] text-[16px] leading-[1.4em] rounded-lg bg-[#ebebeb] text-gray-500 border-none outline-none shadow-[inset_0_0_0_1px_transparent] focus:shadow-[inset_0_0_0_1px_rgba(124,58,237,0.75)] transition-shadow"
                />
                {/* Honeypot to defer bots */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
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

              <p className="mt-4 text-center text-s text-slate-500 font-bold">
                Need help now? Call us @{" "}
                <span className="underline font-bold">(647) 574 0861</span>
              </p>
            </div>
          </div>
        </div>
        <div className="pt-9 overflow-hidden flex items-center [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [mask-size:100%_100%] [mask-repeat:repeat]">
          {/* Add carousel here with  "brands we fix everyday" with the logo of the company with their name besides them */}
          {/* HP, ASUS, Dell, Lenovo, Apple, Samsung, Acer, MSI, LG, Microsoft, Google*/}
          <BrandCarousel title="Brands We Fix Everyday" items={BRANDS} />
        </div>
      </div>
    </section>
  );
}
