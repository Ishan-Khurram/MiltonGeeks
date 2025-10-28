/*
 * File: Services.tsx
 * Description: Home page, houses simple text as well as contact form.
 *
 * Author: Ishan Khurram (mo.ishan.khurram@gmail.com)
 * Created: 2025-10-23
 * Last Updated: 2025-10-23
 *
 * Notes:
 * - <any quick implementation notes or gotchas>
 *
 * Changelog:
 * - 2025-10-23: Initial version.
 *
 */

export default function Services() {
  return (
    <section id="services" className="bg-[#ffffff]">
      <div className="mx-auto max-w-4xl px-6 py-6 pt-10 text-center">
        <p className="inline-flex items-center gap-2 rounded-full bg-lime-300/90 px-3 py-1 text-sm font-medium text-black">
          <span className="opacity-80">Services</span>
        </p>
        <h1 className="text-[60px] font-extrabold leading-tight tracking-tight text-slate-900 md-text-[60px]">
          Get your technology working the way it should
        </h1>
        <p className="mt-7 text-[18px] leading-7 text-slate-600 font-bold font-thin">
          {" "}
          We listen, explain, and resolve - taking the confusion out of modern
          technology.
        </p>
      </div>
      {/* Cards for information. 6 total, 3 on top, 3 on the bottom. */}
      {/* Computer repair and maintenance */}
      <section className="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols-3 gap-6 place-items-stretch max-w-6xl mx-auto sm:grid-cols-2 px-10 pb-15">
          {/* Computer repair and maintenance */}
          <div className="bg-[#bcff1c] rounded-3xl shadow-md p-6 max-w-sm hover:shadow-lg transition-shadow ">
            <img
              src="/src/assets/wrench-icon.png"
              alt="Repair Icon"
              className="w-12 h-12 mb-8"
            ></img>
            <h2 className="text-slate-900 text-[30px] font-semibold mb-2 leading-tight tracking-tight">
              Computer Repairs and Maintenance
            </h2>
            <p className="text-slate-600 font-bold leading-6 text-[16px]">
              Expert diagnostics, reliable repairs, and long-term maintenance to
              keep your computer or laptop running at its best.
            </p>
          </div>

          {/* Virus and Malware Removal */}
          <div className="bg-[#bcff1c] rounded-3xl shadow-md p-6 max-w-sm hover:shadow-lg transition-shadow ">
            <img
              src="/src/assets/wrench-icon.png"
              alt="Repair Icon"
              className="w-12 h-12 mb-8"
            ></img>
            <h2 className="text-slate-900 text-[30px] font-semibold mb-2 leading-tight tracking-tight">
              Virus and Malware Removal
            </h2>
            <p className="text-slate-600 font-bold leading-6 text-[16px]">
              Keep your personal information safe with complete virus cleanup,
              protection setup, and ongoing security recommendations.
            </p>
          </div>

          {/* Data Transfer and Backup */}
          <div className="bg-[#bcff1c] rounded-3xl shadow-md p-6 max-w-sm hover:shadow-lg transition-shadow ">
            <img
              src="/src/assets/wrench-icon.png"
              alt="Repair Icon"
              className="w-12 h-12 mb-8"
            ></img>
            <h2 className="text-slate-900 text-[30px] font-semibold mb-2 leading-tight tracking-tight">
              {" "}
              Data Transfer and Backups
            </h2>
            <p className="text-slate-600 font-bold leading-6 text-[16px]">
              Safeguard your important files and memories with expert transfers,
              reliable backup solutions, and smooth migration support.
            </p>
          </div>

          {/* Tech set-up and support */}
          <div className="bg-[#bcff1c] rounded-3xl shadow-md p-6 max-w-sm hover:shadow-lg transition-shadow ">
            <img
              src="/src/assets/wrench-icon.png"
              alt="Repair Icon"
              className="w-12 h-12 mb-8"
            ></img>
            <h2 className="text-slate-900 text-[30px] font-semibold mb-2 leading-tight tracking-tight">
              {" "}
              Tech Set-Up and Support
            </h2>
            <p className="text-slate-600 font-bold leading-6 text-[16px]">
              We help you understand your devices — from printers to phones —
              explained step-by-step with patience and care.
            </p>
          </div>

          {/* Custom builds and upgrades */}
          <div className="bg-[#bcff1c] rounded-3xl shadow-md p-6 max-w-sm hover:shadow-lg transition-shadow ">
            <img
              src="/src/assets/wrench-icon.png"
              alt="Repair Icon"
              className="w-12 h-12 mb-8"
            ></img>
            <h2 className="text-slate-900 text-[30px] font-semibold mb-2 leading-tight tracking-tight">
              {" "}
              Custom Builds and Upgrades
            </h2>
            <p className="text-slate-600 font-bold leading-6 text-[16px]">
              Need better performance or a brand new setup? We build and upgrade
              systems tailored to your needs, preferences, and workflow.
            </p>
          </div>

          {/* and more */}
          <div className="bg-[#bcff1c] rounded-3xl shadow-md p-6 max-w-sm hover:shadow-lg transition-shadow ">
            <img
              src="/src/assets/wrench-icon.png"
              alt="Repair Icon"
              className="w-12 h-12 mb-8"
            ></img>
            <h2 className="text-slate-900 text-[30px] font-semibold mb-2 leading-tight tracking-tight">
              {" "}
              And Much More to Offer
            </h2>
            <p className="text-slate-600 font-bold leading-6 text-[16px]">
              No matter the issue, we’ve got you covered. Contact us with any
              tech problem and we’ll work together to find the best solution.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
