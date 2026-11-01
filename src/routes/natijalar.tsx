import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Award, Camera, Medal, Quote } from "lucide-react";
import { CardCarousel } from "@/components/site/CardCarousel";
import { CtaBanner } from "@/components/site/CtaBanner";
import { CountUp, EASE, Reveal } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/natijalar")({
  head: () => ({
    meta: [
      { title: "Natijalar va fikrlar — Ilm-u Ziyo maktabi" },
      {
        name: "description",
        content: "Ilm-u Ziyo o'quvchilari natijalari: olimpiada g'oliblari, imtihon natijalari va ota-onalarning fikrlari.",
      },
      { property: "og:title", content: "O'quvchilarimiz erishgan natijalar — Ilm-u Ziyo" },
      {
        property: "og:description",
        content: "Olimpiada g'oliblari, imtihon natijalari va ota-onalarning fikrlari.",
      },
    ],
  }),
  component: Results,
});

// Example figures — replace with the school's real numbers.
const STATS = [
  { value: 25, suffix: "+", label: "Olimpiada g'oliblari soni" },
  { value: 86, suffix: "", label: "Imtihonda ball o'rtachasi" },
  { value: 10, suffix: "", label: "Maktab tajribasi, yil" },
];

const REVIEWS = Array.from({ length: 5 }, (_, i) => ({
  text: "[Ota-onaning haqiqiy fikri shu yerda bo'ladi.]",
  name: "[Ism]",
  grade: `[${i + 3}-sinf]`,
}));

const GALLERY = [
  { label: "[G'olib fotosurati]", icon: Medal },
  { label: "[Sertifikat]", icon: Award },
  { label: "[Tadbir fotosurati]", icon: Camera },
];

function Results() {
  return (
    <>
      <PageHero
        eyebrow="Natijalar"
        title="O'quvchilarimiz erishgan natijalar"
        highlight="natijalar"
        subtitle="Olimpiada g'oliblari, imtihon natijalari va ota-onalarning fikrlari."
      />

      <section className="container-site mt-16">
        <div className="grid border-y md:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.12}
              className={"py-10 md:px-10 " + (i > 0 ? "border-t md:border-l md:border-t-0" : "md:pl-0")}
            >
              <p className="font-display text-7xl font-extrabold text-brand md:text-8xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-lg text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-site mt-24 md:mt-32">
        <CardCarousel
          title={<h2 className="text-4xl font-bold md:text-5xl">Ota-onalar fikrlari</h2>}
        >
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              className="group flex h-full flex-col rounded-[2rem] bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <Quote className="size-10 text-sun transition-transform duration-500 group-hover:-rotate-12" />
              <p className="mt-6 flex-1 text-xl font-medium leading-relaxed">{r.text}</p>
              <div className="mt-8 flex items-center gap-4 border-t pt-6">
                <div className="flex size-12 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-brand-foreground">
                  {i + 1}
                </div>
                <div>
                  <p className="font-bold">{r.name}</p>
                  <p className="text-sm text-muted-foreground">{r.grade} ota-onasi</p>
                </div>
              </div>
            </article>
          ))}
        </CardCarousel>
      </section>

      <section className="container-site mt-24 md:mt-32">
        <div className="border-t pt-14">
          <Reveal>
            <h2 className="text-4xl font-bold md:text-5xl">Olimpiada yutuqlari</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {GALLERY.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 40, rotate: i === 1 ? 0 : i === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
                className="group relative flex aspect-[4/3.1] flex-col justify-end overflow-hidden rounded-[2rem] bg-sand p-7"
              >
                <div className="absolute inset-0 paper-grain opacity-50" />
                <g.icon className="absolute right-7 top-7 size-10 text-ink/25 transition-all duration-500 group-hover:scale-125 group-hover:text-sun" />
                <p className="relative text-muted-foreground">{g.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Farzandingiz ham shu natijalarga erishsin." />
    </>
  );
}
