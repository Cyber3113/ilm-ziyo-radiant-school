import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE, WordsReveal } from "./motion";

export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  aside,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  aside?: ReactNode;
}) {
  return (
    <section className="container-site relative pt-12 md:pt-20">
      <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold text-brand shadow-soft"
          >
            <span className="size-2 rounded-full bg-sun" />
            {eyebrow}
          </motion.p>
          <h1 className="text-5xl font-extrabold leading-[0.98] md:text-7xl lg:text-[5.5rem]">
            <WordsReveal text={title} highlight={highlight} delay={0.1} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-2xl"
          >
            {subtitle}
          </motion.p>
        </div>
        {aside}
      </div>
    </section>
  );
}
