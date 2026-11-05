import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { CardCarousel } from "@/components/site/CardCarousel";
import { CtaBanner } from "@/components/site/CtaBanner";
import { CountUp, Reveal } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/natijalar")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Natijalar va fikrlar — Ilm-u Ziyo maktabi" },
      {
        name: "description",
        content: "Ilm-u Ziyo o'quvchilari natijalari: imtihon natijalari va ota-onalarning fikrlari.",
      },
      { property: "og:title", content: "O'quvchilarimiz erishgan natijalar — Ilm-u Ziyo" },
      {
        property: "og:description",
        content: "Imtihon natijalari va ota-onalarning fikrlari.",
      },
    ],
  }),
  component: Results,
});

// Example figures — replace with the school's real numbers.
const STATS = [
  { value: 86, suffix: "", label: "Imtihonda ball o'rtachasi" },
  { value: 10, suffix: "", label: "Maktab tajribasi, yil" },
];

// Sample reviews — replace with real parents' feedback.
const REVIEWS = [
  { text: "Qizim matematikani yaxshi ko'rib qoldi. Ustozlar har bir bolaga alohida e'tibor berishadi.", name: "Gulnora opa", grade: "5-sinf" },
  { text: "O'g'limning baholari ikki oyda sezilarli yaxshilandi. Ustozlar bilan doim aloqadamiz.", name: "Bahodir aka", grade: "7-sinf" },
  { text: "Sinflar kichik, shuning uchun bola darsda yo'qolib qolmaydi. Juda mamnunmiz.", name: "Dilfuza opa", grade: "3-sinf" },
  { text: "Farzandim tarix va kimyoga qiziqib qoldi. Maktab muhiti iliq va tartibli.", name: "Sherzod aka", grade: "9-sinf" },
  { text: "Bepul sinov darsidan keyin hech ikkilanmasdan shu maktabni tanladik.", name: "Nodira opa", grade: "6-sinf" },
];

function Results() {
  return (
    <>
      <PageHero
        eyebrow="Natijalar"
        title="O'quvchilarimiz erishgan natijalar"
        highlight="natijalar"
        subtitle="Imtihon natijalari va ota-onalarning fikrlari."
      />

      <section className="container-site mt-16">
        <div className="grid border-y md:grid-cols-2">
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

      <CtaBanner title="Farzandingiz ham shu natijalarga erishsin." />
    </>
  );
}
