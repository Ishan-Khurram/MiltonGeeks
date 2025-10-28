import React, {
  useCallback,
  useEffect,
  useState,
  ComponentPropsWithRef,
} from "react";
import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

export default function TestimonialCarousel() {
  // Initialize carousel logic
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  //   Initialize left and right buttons
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  // Initialize dot buttons
  type UseDotButtonType = {
    selectedIndex: number;
    scrollSnaps: number[];
    onDotButtonClick: (index: number) => void;
  };

  const useDotButton = (
    emblaApi: EmblaCarouselType | undefined
  ): UseDotButtonType => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onDotButtonClick = useCallback(
      (index: number) => {
        if (!emblaApi) return;
        emblaApi.scrollTo(index);
      },
      [emblaApi]
    );

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
      setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
      if (!emblaApi) return;

      onInit(emblaApi);
      onSelect(emblaApi);
      emblaApi
        .on("reInit", onInit)
        .on("reInit", onSelect)
        .on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    return {
      selectedIndex,
      scrollSnaps,
      onDotButtonClick,
    };
  };

  type PropType = ComponentPropsWithRef<"button">;

  const DotButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props;
    return (
      <button type="button" {...restProps}>
        {children}
      </button>
    );
  };

  // ⬇️ PLACE IT RIGHT HERE (after setup, before return)
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="relative max-w-6xl mx-auto pt-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {/* Card 1 - Senior long term resident*/}
          <div className="flex-[0_0_100%]">
            <div
              className="
            bg-[#bcfe1d] 
            p-6 
            rounded-lg 
            shadow-md 
            grid 
            grid-cols-[40%_60%]  
            gap-6 
            items-center
            
          "
            >
              {/* Left Side - Image */}
              <div className="flex justify-center items-center px-6">
                <img
                  src="/public/card-images/local-help.png"
                  alt="Customer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Right Side - Review Content */}
              <div>
                <p className="text-slate-700 italic px-6">
                  “I’m in my 70s and not great with computers, but Ishan was so
                  kind and professional. He fixed my laptop right in my living
                  room and made sure I understood what went wrong. It’s nice to
                  see young people who are honest, respectful, and really know
                  what they’re doing. I’ll be calling him again if I ever have
                  issues.”
                </p>
                <h4 className="text-slate-900 font-semibold mt-4">
                  — Elizabeth C.
                </h4>
                <h4 className="text-slate-500 font-medium">
                  Longtime Milton Resident
                </h4>
              </div>
            </div>
          </div>
          {/* Card 2 - Mother/Father of 3 */}
          <div className="flex-[0_0_100%]">
            <div
              className="
            bg-[#f6f7f9] 
            p-6 
            rounded-lg 
            shadow-md 
            grid 
            grid-cols-[40%_60%]  
            gap-6 
            items-center
            
          "
            >
              {/* Left Side - Image */}
              <div className="flex justify-center items-center px-6">
                <img
                  src="/public/card-images/local-help.png"
                  alt="Customer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Right Side - Review Content */}
              <div>
                <p className="text-slate-700 italic px-6">
                  “Between my own work laptop and my kids’ school tablets,
                  there’s always something acting up — slow performance, updates
                  not installing, or apps not working right. Ishan has helped us
                  through all of it and always explains things clearly. He’s
                  quick, reliable, and saves me so much time when I’m already
                  juggling work and family. It’s such a relief knowing we have
                  someone we can count on when tech gets frustrating.”
                </p>
                <h4 className="text-slate-900 font-semibold mt-4">
                  — Nicole A.
                </h4>
                <h4 className="text-slate-500 font-medium">
                  Mother of Three, Milton Resident
                </h4>
              </div>
            </div>
          </div>
          {/* Card 3 - Small Business Fix */}
          <div className="flex-[0_0_100%]">
            <div
              className="
            bg-[#bcfe1d] 
            p-6 
            rounded-lg 
            shadow-md 
            grid 
            grid-cols-[40%_60%]  
            gap-6 
            items-center
            
          "
            >
              {/* Left Side - Image */}
              <div className="flex justify-center items-center px-6">
                <img
                  src="/public/card-images/local-help.png"
                  alt="Customer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Right Side - Review Content */}
              <div>
                <p className="text-slate-700 italic px-6">
                  “I run a small photography business and needed reliable
                  computers and storage for editing and backups. Ishan came by,
                  set up two desktop workstations, configured our network, and
                  made sure everything was running efficiently. He even
                  recommended a backup plan that’s already saved us once.
                  Dependable and professional — highly recommended.”
                </p>
                <h4 className="text-slate-900 font-semibold mt-4">
                  — Sarah L.
                </h4>
                <h4 className="text-slate-500 font-medium">
                  Small Business Owner
                </h4>
              </div>
            </div>
          </div>
          {/* Card 4 - Teenager PC Build*/}
          <div className="flex-[0_0_100%]">
            <div
              className="
            bg-[#f6f7f9] 
            p-6 
            rounded-lg 
            shadow-md 
            grid 
            grid-cols-[40%_60%]  
            gap-6 
            items-center
            
          "
            >
              {/* Left Side - Image */}
              <div className="flex justify-center items-center px-6">
                <img
                  src="/public/card-images/local-help.png"
                  alt="Customer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Right Side - Review Content */}
              <div>
                <p className="text-slate-700 italic px-6">
                  “I’d been saving up to build my own gaming PC but didn’t want
                  to mess anything up. Ishan helped me choose the right parts,
                  built everything cleanly, and explained how each piece worked
                  so I could upgrade in the future. The setup looks amazing,
                  runs super smooth, and I learned a ton in the process.”
                </p>
                <h4 className="text-slate-900 font-semibold mt-4">
                  — Rayaan K.
                </h4>
                <h4 className="text-slate-500 font-medium">
                  Highschool Student, First-Time PC Builder.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls row BELOW the carousel */}
      <div className="px-8 mt-4 flex items-center justify-between">
        {/* Dots: bottom-left */}
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, i) => (
            <DotButton
              key={i}
              onClick={() => onDotButtonClick(i)}
              aria-current={selectedIndex === i ? "true" : undefined}
              className={[
                "w-6 h-6 rounded-full bg-[#f8f9fb] shadow hover:bg-slate-100 text-slate-700",
                "grid place-items-center transition-opacity",
                selectedIndex === i ? "opacity-100" : "opacity-40",
              ].join(" ")}
            >
              x
            </DotButton>
          ))}
        </div>

        {/* Arrows: bottom-right */}
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="bg-[#f8f9fb] rounded-full shadow px-4 py-2 hover:bg-slate-100 text-slate-700"
          >
            ⇐
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="bg-[#f8f9fb] rounded-full shadow px-4 py-2 hover:bg-slate-100 text-slate-700"
          >
            ⇒
          </button>
        </div>
      </div>
    </section>
  );
}
