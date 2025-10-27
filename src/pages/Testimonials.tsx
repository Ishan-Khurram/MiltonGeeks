/*
 * File: Testimonials.tsx
 * Description: Testimonials from current/past customers. add metrics, then real stories.
 *
 * Author: Ishan Khurram (mo.ishan.khurram@gmail.com)
 * Created: 2025-10-25
 * Last Updated: 2025-10-25
 *
 * Notes:
 * - <any quick implementation notes or gotchas>
 *
 * Changelog:
 * - 2025-10-25: Initial version.
 *
 */

import TestimonialCarousel from "../components/TestimonialsCarousel";

export default function Testimonials() {
  return (
    <div className="bg-[#ffffff]">
      <section className="mx-auto max-w-6xl px-6 pt-15 text-center">
        {/* You can bet on it title with a metrics tag above to match the updates one from home */}
        <p className="inline-flex items-center gap-2 rounded-full bg-lime-300/90 px-3 py-1 text-sm font-medium text-black">
          <span className="opacity-80">Metrics</span>
        </p>
        <h1 className="py-5 text-[48px] font-extrabold leading-tight tracking-tight text-slate-900 md-text-[60px]">
          You can bet on it
        </h1>
      </section>
      {/* Metrics displayed: devices repaired, average customer rating, average response time */}
      {/* Metrics displayed: devices repaired, average customer rating, average response time */}
      <section className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-10 py-8 text-center divide-x-2 divide-[#1F76D2]">
        {/* Average Response Time */}
        <div className="flex flex-col items-center">
          <h1 className="text-[#1F76D2] text-7xl font-extrabold leading-none">
            12h
          </h1>
          <p className="text-slate-900 text-lg font-thin mt-2">
            Average on-site time
          </p>
        </div>

        {/* Devices Repaired */}
        <div className="flex flex-col items-center">
          <h1 className="text-[#1F76D2] text-7xl font-extrabold leading-none">
            1000+
          </h1>
          <p className="text-slate-900 text-lg font-thin mt-2">
            Devices repaired
          </p>
        </div>

        {/* Customer Rating */}
        <div className="flex flex-col items-center">
          <h1 className="text-[#1F76D2] text-7xl font-extrabold leading-none">
            4.9★
          </h1>
          <p className="text-slate-900 text-lg font-thin mt-2">
            Average customer rating
          </p>
        </div>
      </section>
      {/* add 4 cards for each different type of client.
      1 senior
      1 parents (family tech)
      business tech help
      teenager pc build */}
      {/* Title */}
      <section className="mx-auto max-w-6xl px-6 pt-15 text-center">
        <h1 className="pt-8 text-[48px] font-extrabold leading-tight tracking-tight text-slate-400 md-text-[60px]">
          Real stories.
        </h1>
        <h1 className="py text-[48px] font-extrabold leading-tight tracking-tight text-slate-900 md-text-[60px]">
          Don't take our word for it.
        </h1>
      </section>
      {/* Create Carousel with Customer Cards with Reviews. */}
      <section className="place-items-stretch max-w-6xl mx-auto sm:grid-cols-1 px-10 pb-15">
        <TestimonialCarousel />
      </section>
    </div>
  );
}
