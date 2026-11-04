import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { GraduationCap, MapPin, Sparkles, Users } from "lucide-react";
import type { MouseEvent } from "react";
import heroPortrait from "@/assets/hero-portrait.png.asset.json";
import { CtaBanner } from "@/components/site/CtaBanner";
import { EASE, Reveal, WordsReveal } from "@/components/site/motion";
import { TrialButton } from "@/components/site/TrialButton";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ilm-u Ziyo maktabi — Farzandingiz uchun kuchli poydevor" },
      {
        name: "description",
        content:
          "Sifatli ta'lim, tajribali ustozlar va individual yondashuv. 1–11-sinflar, Denov shahridagi xususiy maktab. Bepul sinov darsiga yoziling.",
      },
      { property: "og:title", content: "Ilm-u Ziyo maktabi — Farzandingiz uchun kuchli poydevor" },
      {
        property: "og:description",
        content: "1–11-sinflar uchun sifatli ta'lim, tajribali ustozlar va kichik guruhlar. Denov.",
      },
    ],
  }),
  component: Home,
});

const FEATURES = [
  {
    icon: Users,
    title: "Kichik guruhlar",
    text: "Sinfda joylar cheklangan. Ustoz har bir o'quvchiga e'tibor beradi.",
  },
  {
    icon: GraduationCap,
    title: "Tajribali ustozlar",
    text: "Har bir fan bo'yicha o'z ustozi, tajribasi bilan.",
  },
  {
    icon: MapPin,
    title: "Qulay joylashuv",
    text: "Denov, Istiqbol MFY. Turon mehmonxonasi yaqinida.",
  },
];

const SUBJECTS = [
  "Matematika",
  "Ona tili",
  "Ingliz tili",
  "Rus tili",
  "Fizika",
  "Kimyo",
  "Biologiya",
  "Tarix",
  "IT va dasturlash",
  "Huquq",
  "Robototexnika",
  "Shaxmat",
];

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhyUs />
      <CtaBanner title="Farzandingizni bepul sinov darsiga olib keling." />
    </>
  );
}

function Hero() {
  return (
    <section className="container-site relative pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-7 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold shadow-soft"
          >
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-brand" />
            </span>
            2026–2027 o'quv yiliga qabul ochiq
          </motion.p>

          <h1 className="text-[2.9rem] font-extrabold leading-[0.95] sm:text-6xl md:text-7xl xl:text-[4.6rem]">
            <WordsReveal
              text="Farzandingiz uchun kuchli poydevor shu yerda boshlanadi."
              highlight="kuchli"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            className="mt-8 max-w-xl text-lg text-muted-foreground md:text-2xl"
          >
            Sifatli ta'lim, tajribali ustozlar va individual yondashuv. 1–11-sinflar, Denov shahridagi xususiy maktab.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6"
          >
            <TrialButton pressed />
            <Link
              to="/dasturlar"
              className="group relative text-lg font-bold"
            >
              Dasturlarni ko'rish
              <span className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-ink transition-transform duration-500 group-hover:scale-x-0" />
              <span className="absolute -bottom-1 left-0 h-[3px] w-full origin-right scale-x-0 rounded-full bg-brand transition-transform delay-200 duration-500 group-hover:origin-left group-hover:scale-x-100" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 max-w-md border-l-4 border-brand pl-5 text-lg"
          >
            <strong>Sinflardagi joylar cheklangan.</strong>{" "}
            <span className="text-muted-foreground">Qabul davom etmoqda.</span>
          </motion.div>
        </div>

        <HeroArt />
      </div>
    </section>
  );
}

function HeroArt() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ perspective: 1000 }}
      className="relative mx-auto aspect-square w-full max-w-[560px]"
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry }}
        className="paper-grain relative size-full rounded-[2.5rem] bg-sand/60"
      >
        {/* Rings */}
        <div className="absolute inset-[6%] animate-spin-slow rounded-full border-2 border-dashed border-gold/60" />
        <div className="absolute inset-[13%] rounded-full border border-gold/40" />
        <div className="absolute inset-[22%] rounded-full bg-sun/30 blur-3xl" />

        {/* Logo */}
        <div className="absolute inset-[18%] animate-float">
          <img
            src={heroPortrait.url}
            alt="Ilm-u Ziyo maktabi"
            width={640}
            height={640}
            className="size-full rounded-full object-cover object-[50%_15%] shadow-lift"
          />
        </div>

        {/* Orbiting chips */}
        <FloatChip className="left-[-4%] top-[14%]" delay={1.0}>
          <Sparkles className="size-4 text-sun" /> 1–11-sinflar
        </FloatChip>
        <FloatChip className="right-[-3%] top-[46%]" delay={1.2}>
          <Users className="size-4 text-brand" /> Kichik guruhlar
        </FloatChip>
        <FloatChip className="bottom-[8%] left-[8%]" delay={1.4}>
          <MapPin className="size-4 text-brand" /> {SITE.branch}
        </FloatChip>
      </motion.div>
    </motion.div>
  );
}

function FloatChip({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5, ease: EASE },
        y: { delay: delay + 0.5, duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
      className={
        "absolute inline-flex items-center gap-2 rounded-full bg-card px-4 py-2.5 text-sm font-bold shadow-lift " +
        className
      }
    >
      {children}
    </motion.div>
  );
}

function Marquee() {
  const items = [...SUBJECTS, ...SUBJECTS];
  return (
    <div className="relative -rotate-1 overflow-hidden border-y border-ink bg-ink py-5 text-ink-foreground">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl font-semibold md:text-3xl">
            {s}
            <span className="text-sun">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function WhyUs() {
  return (
    <section className="container-site mt-24 md:mt-32">
      <div className="grid gap-12 border-t pt-14 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <h2 className="text-4xl font-bold md:text-6xl">Nega aynan biz?</h2>
          <p className="mt-5 max-w-sm text-lg text-muted-foreground">
            Har bir farzand — alohida dunyo. Biz uni tushunib, qo'llab-quvvatlab o'qitamiz.
          </p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.12}>
              <div className="group h-full rounded-3xl bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-brand text-brand-foreground transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <f.icon className="size-6" />
                </div>
                <h3 className="text-2xl font-bold">{f.title}</h3>
                <p className="mt-3 text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
