import FAQCard from "../components/FaqCard";
import Footer from "../components/Footer";

export default function Faq() {
  return (
    <div id="faq" className="bg-[#f6f7f9]">
      {/* Title and tag */}
      <section className="text-center  mx-auto max-w-6xl pt-10">
        <p className="inline-flex items-center gap-2 rounded-full bg-lime-300/90 px-3 py-1 text-sm font-medium text-black">
          <span className="opacity-80">FAQs</span>
        </p>
        <h1 className="pt-5 text-[48px] font-extrabold leading-tight tracking-tight text-slate-400 md-text-[60px]">
          Still not convinced?
        </h1>
        <h1 className="py text-[48px] font-extrabold leading-tight tracking-tight text-slate-900 md-text-[60px]">
          We've got the answers
        </h1>
      </section>
      {/* FAQ table */}
      <section className="mx-auto max-w-6xl px-6 py-15">
        <FAQCard />
      </section>
      {/* Extra contact message */}
      <section>
        <h4 className="text-center text-[18px] text-slate-900 pb-10">
          Still have more questions? Contact us directly @ (647) 574-0861
        </h4>
      </section>
      {/* Footer goes here */}
      <section>
        <Footer />
      </section>
    </div>
  );
}
