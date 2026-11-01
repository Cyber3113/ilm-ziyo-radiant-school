import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function TrialButton({
  className,
  pressed = false,
  label = "Bepul sinov darsiga yozilish",
}: {
  className?: string;
  /** Adds the chunky ink "press" shadow used in the hero. */
  pressed?: boolean;
  label?: string;
}) {
  return (
    <Link
      to="/aloqa"
      hash="ariza"
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 rounded-full bg-sun px-7 py-4 text-base font-bold text-sun-foreground transition-all duration-300 hover:-translate-y-0.5 active:translate-y-1 md:px-9 md:py-5 md:text-lg",
        pressed && "shadow-press hover:shadow-[0_10px_0_0_var(--ink)] active:shadow-[0_2px_0_0_var(--ink)]",
        className,
      )}
    >
      <span className="relative z-10">{label}</span>
      <ArrowRight className="relative z-10 size-5 transition-transform duration-300 group-hover:translate-x-1" />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
      >
        <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-card/40 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
      </span>
    </Link>
  );
}
