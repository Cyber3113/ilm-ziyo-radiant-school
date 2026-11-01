import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Globe2, Puzzle, UserRoundCheck } from "lucide-react";
import { CtaBanner } from "@/components/site/CtaBanner";
import { EASE, Reveal } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";
import { GRADES } from "@/lib/admission";

export const Route = createFileRoute("/dasturlar")({
  head: () => ({
    meta: [
      { title: "Dasturlar — 1–11-sinflar | Ilm-u Ziyo maktabi" },
      {
        name: "description",
        content:
          "1–11-sinflar uchun chuqurlashtirilgan ta'lim dasturlari. 9–11-sinflarda IT, Yuridik va Tibbiyot yo'nalishlari.",
      },
      { property: "og:title", content: "Ilm-u Ziyo ta'lim dasturlari — 1–11-sinflar" },
      {
        property: "og:description",
        content: "Asosiy fanlar chuqurlashtirilgan dasturda, 9–11-sinflarda kasbga yo'naltirilgan yo'nalishlar.",
      },
    ],
  }),
  component: Programs,
});

function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Dasturlar"
        title="1–11-sinflar uchun ta'lim dasturlari"
        subtitle="Asosiy fanlar chuqurlashtirilgan dasturda. 9–11-sinflarda esa kasbga yo'naltirilgan yo'nalishni tanlaysiz."
      />
      <Grades />
      <Tracks />
      <Extras />
      <CtaBanner title="Qaysi yo'nalish farzandingizga mos?" />
    </>
  );
}

function Grades() {
  return (
    <section className="container-site mt-20">
      <Reveal>
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Sinflar bo'yicha</h2>
      </Reveal>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:gap-4 lg:grid-cols-6">
        {GRADES.map((g, i) => (
          <motion.div
            key={g}
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
          >
            <Link
              to="/aloqa"
              hash="ariza"
              search={{ sinf: g }}
              className="group relative flex h-24 items-center justify-center overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:h-28"
            >
              <span className="absolute inset-0 translate-y-full bg-ink transition-transform duration-500 ease-out group-hover:translate-y-0" />
              <span className="relative font-display text-4xl font-bold transition-colors duration-300 group-hover:text-sun">
                {g}
              </span>
              <span className="absolute bottom-3 text-xs font-semibold text-ink-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                sinf
              </span>
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
        >
          <Link
            to="/aloqa"
            hash="ariza"
            className="relative flex h-24 items-center justify-center gap-2 rounded-3xl bg-brand font-bold text-brand-foreground shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift md:h-28"
          >
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-sun" />
              <span className="relative inline-flex size-2.5 rounded-full bg-sun" />
            </span>
            Qabul ochiq
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CodeArt() {
  return (
    <svg viewBox="0 0 200 140" className="h-32 w-auto md:h-36" aria-hidden>
      <rect x="40" y="18" width="120" height="82" rx="10" className="fill-none stroke-brand" strokeWidth="10" />
      <rect x="28" y="108" width="144" height="12" rx="6" className="fill-brand" />
      <g className="transition-transform duration-500 group-hover:-translate-x-1">
        <path d="M86 44 L72 59 L86 74" className="fill-none stroke-sun" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <path d="M104 40 L96 78" className="stroke-ink-foreground" strokeWidth="6" strokeLinecap="round" />
      <g className="transition-transform duration-500 group-hover:translate-x-1">
        <path d="M114 44 L128 59 L114 74" className="fill-none stroke-sun" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function ScaleArt() {
  return (
    <svg viewBox="0 0 200 140" className="h-32 w-auto md:h-36" aria-hidden>
      <line x1="100" y1="14" x2="100" y2="122" className="stroke-ink" strokeWidth="7" strokeLinecap="round" />
      <rect x="76" y="118" width="48" height="8" rx="4" className="fill-ink" />
      <g className="origin-[100px_34px] transition-transform duration-700 group-hover:rotate-[-8deg]">
        <line x1="50" y1="34" x2="150" y2="34" className="stroke-ink" strokeWidth="7" strokeLinecap="round" />
        <path d="M50 34 L36 78 M50 34 L64 78" className="stroke-ink" strokeWidth="3" />
        <path d="M34 78 Q50 92 66 78 Z" className="fill-brand" />
        <path d="M150 34 L136 78 M150 34 L164 78" className="stroke-ink" strokeWidth="3" />
        <path d="M134 78 Q150 92 166 78 Z" className="fill-brand" />
      </g>
    </svg>
  );
}

function CrossArt() {
  return (
    <svg viewBox="0 0 200 140" className="h-32 w-auto transition-transform duration-700 group-hover:scale-110 md:h-36" aria-hidden>
      <rect x="78" y="14" width="44" height="112" rx="14" className="fill-ink-foreground" />
      <rect x="44" y="48" width="112" height="44" rx="14" className="fill-ink-foreground" />
      <rect x="84" y="54" width="32" height="32" rx="6" className="fill-brand" />
    </svg>
  );
}

const TRACKS = [
  {
    title: "Meditsina",
    text: "Biologiya, kimyo va anatomiya. Laboratoriya mashg'ulotlari va tibbiy terminologiya.",
    tags: ["Biologiya", "Kimyo", "Laboratoriya"],
    art: <CrossArt />,
    bg: "bg-brand",
  },
  {
    title: "IT",
    text: "Dasturlash asoslari, matematika va algoritmlar. Kichik loyihalar bilan ishlaysiz.",
    tags: ["Python", "Matematika", "Loyiha"],
    art: <CodeArt />,
    bg: "bg-ink",
  },
  {
    title: "Biznes",
    text: "Iqtisodiyot asoslari, moliyaviy savodxonlik va tadbirkorlik. Real biznes loyihalar ustida ishlaysiz.",
    tags: ["Iqtisodiyot", "Moliya", "Tadbirkorlik"],
    art: <ScaleArt />,
    bg: "bg-sand",
  },
];

function Tracks() {
  return (
    <section className="container-site mt-24 md:mt-32">
      <div className="border-t pt-14">
        <Reveal>
          <h2 className="text-4xl font-bold md:text-5xl">Yo'nalishlar (9–11-sinflar)</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Har bir yo'nalishda maxsus fanlar, amaliy mashg'ulotlar va imtihonga tayyorgarlik.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TRACKS.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.12} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                <div className={`flex h-56 items-center justify-center ${t.bg} transition-all duration-500`}>
                  {t.art}
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-3xl font-bold">{t.title}</h3>
                  <p className="mt-3 flex-1 text-muted-foreground">{t.text}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand/10 px-3 py-1 text-sm font-bold text-brand"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const EXTRAS = [
  {
    icon: Globe2,
    title: "Rus tilida ta'lim",
    text: "Rus tilida o'qitish imkoniyati, o'quvchi darajasiga qarab.",
  },
  {
    icon: Puzzle,
    title: "Qo'shimcha to'garaklar",
    text: "Robototexnika · San'at · Sport · Shaxmat · Ingliz tili suhbati.",
  },
  {
    icon: UserRoundCheck,
    title: "Individual yondashuv",
    text: "Har bir o'quvchi uchun alohida reja va ota-onalar bilan muntazam aloqa.",
  },
];

function Extras() {
  return (
    <section className="container-site mt-20">
      <div className="grid gap-10 border-t pt-14 md:grid-cols-3">
        {EXTRAS.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.1}>
            <div className="group">
              <e.icon className="mb-5 size-9 text-brand transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
              <h3 className="text-2xl font-bold">{e.title}</h3>
              <p className="mt-3 text-lg text-muted-foreground">{e.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
