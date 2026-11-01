import { motion } from "motion/react";
import { TrialButton } from "./TrialButton";
import { EASE } from "./motion";

export function CtaBanner({ title }: { title: string }) {
  return (
    <section className="container-site mt-24 md:mt-32">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-14 text-ink-foreground md:rounded-[2.5rem] md:px-16 md:py-20"
      >
        {/* Decorative rotating rings */}
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-[26rem] md:-right-10">
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-gold/30" />
          <div className="absolute inset-12 rounded-full border border-brand/50" />
          <div className="absolute inset-28 rounded-full bg-brand/20 blur-2xl" />
        </div>
        <div aria-hidden className="pointer-events-none absolute -bottom-20 left-1/3 size-56 rounded-full bg-sun/15 blur-3xl" />

        <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <h2 className="max-w-xl text-4xl font-bold leading-[1.05] md:text-6xl">{title}</h2>
          <TrialButton className="shrink-0" />
        </div>
      </motion.div>
    </section>
  );
}
