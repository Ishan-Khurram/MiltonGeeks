/*
 * File: Benefits.tsx
 * Description: Benefits page, why  people trust us, choose us / what makes us different.
 *
 * Author: Ishan Khurram (mo.ishan.khurram@gmail.com)
 * Created: 2025-10-24
 * Last Updated: 2025-10-24
 *
 * Notes:
 * - <any quick implementation notes or gotchas>
 *
 * Changelog:
 * - 2025-10-24: Initial version.
 *
 */

import wrench from "../assets/wrench-icon.png";
import localhelp from "../card-images/local-help.png";
export default function Serivces() {
  return (
    <section id="benefits" className="bg-[#f6f7f9]">
      {/* Title text and blurb */}
      <div className="mx-auto max-w-6xl px-6 py-10 text-center">
        <p className="inline-flex items-center gap-2 rounded-full bg-lime-300/90 px-3 py-1 text-sm font-medium text-black">
          <span className="opacity-80">Benefits</span>
        </p>
        <h1 className="text-[60px] font-extrabold leading-tight tracking-tight text-slate-900 md-text-[60px]">
          Tech made simple.
        </h1>
        <h1 className="text-[60px] font-extrabold leading-tight tracking-tight text-slate-900 md-text-[60px]">
          Support made human.
        </h1>
        <p className="mt-7 text-[18px] leading-7 text-slate-600 font-bold font-thin">
          {" "}
          Our focus is simple - treat every client with patience, explain every
          fix clearly, and make technology feel less like a headache, and more
          like a helping hand.
        </p>
      </div>
      {/* 5 cards, 2 on top, 3 at the bottom. */}
      {/* The first 2:  */}
      <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center place-items-stretch max-w-7xl mx-auto px-30 pb-16">
        <div className="bg-[#f8f9fb] rounded-3xl shadow-md p-6 max-w-lg hover:shadow-lg transition-shadow">
          <img
            src={localhelp}
            alt="local help"
            className="w-60 h-60 mb-8 mx-auto"
          />
          <h2 className="text-slate-900 text-[30px] font-semibold mb-2 leading-tight tracking-tight pr-10">
            Local and Community Focused
          </h2>
          <p className="text-slate-600 font-bold leading-6 text-[16px]">
            We're your neighbours, not a call center. Expect friendly service,
            fair treatment and familiar faces you can trust.
          </p>
        </div>
        <div className="bg-[#f8f9fb] rounded-3xl shadow-md p-6 max-w-lg hover:shadow-lg transition-shadow">
          <img
            src={localhelp}
            alt="local help"
            className="w-60 h-60 mb-8 mx-auto"
          />
          <h2 className="text-slate-900 text-[30px] font-semibold mb-2 leading-tight tracking-tight pr-10">
            Honest and Transparent Service
          </h2>
          <p className="text-slate-600 font-bold leading-6 text-[16px]">
            No upselling, no hidden fees, just clear pricing and straight
            forward solutions that you can rely on.
          </p>
        </div>
      </section>
      {/* The last 3: */}
      <section className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center place-items-stretch max-w-7xl mx-auto px-30 pb-16">
        <div className="bg-[#f8f9fb] rounded-3xl shadow-md p-6 max-w-lg hover:shadow-lg transition-shadow">
          <img
            src={localhelp}
            alt="local help"
            className="w-60 h-60 mb-8 mx-auto"
          />
          <h2 className="text-slate-900 text-[30px] font-semibold mb-2 leading-tight tracking-tight pr-10">
            Fast and Reliable Help
          </h2>
          <p className="text-slate-600 font-bold leading-6 text-[16px]">
            When your tech acts up, we respond within the same day. No waiting
            for answers. We offer reliable help when you need it most.
          </p>
        </div>
        <div className="bg-[#f8f9fb] rounded-3xl shadow-md p-6 max-w-lg hover:shadow-lg transition-shadow">
          <img
            src={localhelp}
            alt="local help"
            className="w-60 h-60 mb-8 mx-auto"
          />
          <h2 className="text-slate-900 text-[30px] font-semibold mb-2 leading-tight tracking-tight pr-10">
            Personalized Support
          </h2>
          <p className="text-slate-600 font-bold leading-6 text-[16px]">
            We handle work efficiently while keeping you informed. Questions are
            always welcome, and we make sure you understand what's being done.
          </p>
        </div>
        <div className="bg-[#f8f9fb] rounded-3xl shadow-md p-6 max-w-lg hover:shadow-lg transition-shadow">
          <img
            src={localhelp}
            alt="local help"
            className="w-60 h-60 mb-8 mx-auto"
          />
          <h2 className="text-slate-900 text-[30px] font-semibold mb-2 leading-tight tracking-tight pr-10">
            Clear Communication
          </h2>
          <p className="text-slate-600 font-bold leading-6 text-[16px]">
            We speak in terms you can understand, so you know what's being done
            and why. Clear, simple, and transparent every step.
          </p>
        </div>
      </section>
      {/* 3 Other base points that arent as stick out as the others. */}
      {/* Title */}
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h1 className="text-[48px] font-extrabold leading-tight tracking-tight text-slate-900 md-text-[60px]">
          Need more reasons?
        </h1>
      </div>

      <section className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-30 pb-16">
        {/* Card 1 */}
        <div className="flex items-start gap-4">
          <img src={wrench} alt="Computer Repair Icon" className="w-12 h-12" />
          <div>
            <h4 className="text-slate-900 font-semibold text-lg mb-1">
              Comprehensive Repairs
            </h4>
            <p className="text-slate-700 leading-relaxed">
              From hardware to software, we handle it all.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-4">
          <img src={wrench} alt="Computer Repair Icon" className="w-12 h-12" />
          <div>
            <h4 className="text-slate-900 font-semibold text-lg mb-1">
              Smart Recommendations
            </h4>
            <p className="text-slate-700 leading-relaxed">
              We suggest what truly works best for you.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start gap-4">
          <img src={wrench} alt="Computer Repair Icon" className="w-12 h-12" />
          <div>
            <h4 className="text-slate-900 font-semibold text-lg mb-1">
              Sustainable Solutions
            </h4>
            <p className="text-slate-700 leading-relaxed">
              We repair, not replace. Better for you and the planet.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
