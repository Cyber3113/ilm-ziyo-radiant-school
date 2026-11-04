import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import classroom from "@/assets/classroom.jpg";
import hasan from "@/assets/teacher-hasan.jpg.asset.json";
import umid from "@/assets/teacher-umid.jpg.asset.json";
import shahboz from "@/assets/teacher-shahboz.jpg.asset.json";
import { CardCarousel } from "@/components/site/CardCarousel";
import { CtaBanner } from "@/components/site/CtaBanner";
import { EASE, Reveal } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/ustozlar")({
  head: () => ({
    meta: [
      { title: "Ustozlar — Ilm-u Ziyo maktabi" },
      {
        name: "description",
        content: "Ilm-u Ziyo ustozlari: har bir ustoz o'z fanining mutaxassisi. Matematika, ona tili, ingliz tili va boshqa fanlar.",
      },
      { property: "og:title", content: "Farzandingizni o'rgatadigan ustozlar — Ilm-u Ziyo" },
      {
        property: "og:description",
        content: "Tajribali ustozlar jamoasi va ota-onalar bilan muntazam aloqa.",
      },
    ],
  }),
  component: Teachers,
});

const TEACHERS = [
  { subject: "Tarix", name: "Xasan Danyarov", years: 4, photo: hasan.url },
  { subject: "Matematika", name: "Umid Qayumov", years: 6, photo: umid.url },
  { subject: "Kimyo", name: "Shahboz", years: 5, photo: shahboz.url },
];

function Teachers() {
  return (
    <>
      <PageHero
        eyebrow="Ustozlar"
        title="Farzandingizni o'rgatadigan ustozlar"
        highlight="ustozlar"
        subtitle="Har bir ustoz o'z fanining mutaxassisi. Quyidagi kartalarni o'ng va chap tugmalar bilan aylantiring."
      />

      <section className="container-site mt-16">
        <CardCarousel>
          {TEACHERS.map((t, i) => (
            <TeacherCard key={t.name} {...t} index={i} />
          ))}
        </CardCarousel>
      </section>

      <section className="container-site mt-24 md:mt-32">
        <div className="grid items-center gap-12 border-t pt-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(10% 10% 10% 10% round 2rem)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 2rem)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: EASE }}
            className="relative overflow-hidden rounded-[2rem] bg-ink"
          >
            <motion.img
              src={classroom}
              alt="Ilm-u Ziyo sinf xonasida dars"
              width={1280}
              height={896}
              loading="lazy"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: EASE }}
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>
          <Reveal delay={0.15}>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Ustozlar jamoasi haftalik yig'ilishda o'quvchilar natijasini ko'rib chiqadi.
            </h2>
            <p className="mt-6 flex items-start gap-3 text-lg text-muted-foreground">
              <MessageCircle className="mt-1 size-5 shrink-0 text-brand" />
              Ota-onalar istalgan vaqtda ustoz bilan bog'lanishi mumkin.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner title="Ustozlar bilan tanishib chiqing." />
    </>
  );
}

function TeacherCard({ subject, name, years, photo, index }: { subject: string; name: string; years: number; photo: string; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: EASE }}
      className="group h-full overflow-hidden rounded-[2rem] bg-card shadow-soft transition-shadow duration-500 hover:shadow-lift"
    >
      <div className="relative flex aspect-[4/3.6] items-center justify-center overflow-hidden bg-sand">
        <img
          src={photo}
          alt={`${name} — ${subject} ustozi`}
          loading="lazy"
          className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-7">
        <p className="text-sm font-bold text-brand">{subject}</p>
        <h3 className="mt-2 text-2xl font-bold">{name}</h3>
        <p className="mt-3 text-muted-foreground">{years} yillik tajriba</p>
      </div>
    </motion.article>
  );
}
