import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";

/** Horizontal card slider with the design's round prev (outline) / next (sun) buttons. */
export function CardCarousel({ title, children }: { title?: ReactNode; children: ReactNode[] }) {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: true, dragFree: false });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    setSnaps(api.scrollSnapList());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", () => setSnaps(api.scrollSnapList()));
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <div>
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>{title}</div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            aria-label="Oldingi"
            onClick={() => api?.scrollPrev()}
            className="inline-flex size-14 items-center justify-center rounded-full border-2 border-ink text-ink transition-all hover:-translate-x-0.5 hover:bg-ink hover:text-ink-foreground active:scale-95"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Keyingi"
            onClick={() => api?.scrollNext()}
            className="inline-flex size-14 items-center justify-center rounded-full bg-sun text-sun-foreground transition-all hover:translate-x-0.5 hover:shadow-lift active:scale-95"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>

      <div ref={ref} className="-mx-3 overflow-hidden px-0 py-2">
        <div className="flex">
          {children.map((child, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full px-3 sm:basis-1/2 lg:basis-1/3">
              {child}
            </div>
          ))}
        </div>
      </div>

      {snaps.length > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`${i + 1}-slayd`}
              onClick={() => api?.scrollTo(i)}
              className={
                "h-2 rounded-full transition-all duration-500 " +
                (i === selected ? "w-8 bg-brand" : "w-2 bg-foreground/20 hover:bg-foreground/40")
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
