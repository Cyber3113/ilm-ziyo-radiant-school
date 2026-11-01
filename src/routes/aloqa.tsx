import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EASE, Reveal } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";
import { admissionSchema, GRADES, TRACKS } from "@/lib/admission";
import { SITE, telHref } from "@/lib/site";
import { cn } from "@/lib/utils";

type Search = { sinf?: string };

export const Route = createFileRoute("/aloqa")({
  validateSearch: (s: Record<string, unknown>): Search => {
    const raw = s["sinf"];
    const v = raw == null ? undefined : String(raw);
    return v && GRADES.includes(v) ? { sinf: v } : {};
  },
  head: () => ({
    meta: [
      { title: "Manzil va aloqa — Ilm-u Ziyo maktabi, Denov" },
      {
        name: "description",
        content:
          "Ilm-u Ziyo maktabi: Denov, Istiqbol MFY, Turkiston ko'chasi 177A. Telefon: +998 99 242 42 12. Bepul sinov darsiga yoziling.",
      },
      { property: "og:title", content: "Bizga keling yoki yozing — Ilm-u Ziyo maktabi" },
      {
        property: "og:description",
        content: "Manzil, telefon raqamlar va qabulga yozilish formasi.",
      },
    ],
  }),
  component: Contact,
});

const FAQ = [
  { q: "Qanday yoshdan qabul qilasizlar?", a: "1-sinfdan 11-sinfgacha qabul qilamiz." },
  { q: "Bepul sinov darsi qanday o'tadi?", a: "Bepul sinov darsi 1 hafta davom etadi. Farzandingiz darslarga qatnashib, maktab bilan yaqindan tanishadi." },
  { q: "Qo'shimcha to'lov bormi?", a: "Yo'q, qo'shimcha to'lovlar mavjud emas." },
  {
    q: "Narxlar qancha?",
    a: "Narxlar telefon orqali aniqlanadi. Qo'ng'iroq qiling, batafsil aytib beramiz.",
  },
];

const MAP_SRC = "https://www.google.com/maps?q=38.266957,67.904024&z=17&output=embed";

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Manzil va aloqa"
        title="Bizga keling yoki yozing."
        highlight="yozing."
        subtitle="Narxlar va qabul shartlari bo'yicha telefon orqali ma'lumot beramiz."
      />

      <section className="container-site mt-16 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col gap-4">
          <InfoCard icon={MapPin} title="Manzil" delay={0}>
            <p>{SITE.address}</p>
            <p className="text-sm">Mo'ljal: {SITE.landmark}</p>
          </InfoCard>
          <InfoCard icon={Phone} title="Telefon" delay={0.08}>
            {SITE.phones.map((p) => (
              <a key={p} href={telHref(p)} className="block transition-colors hover:text-brand">
                {p}
              </a>
            ))}
          </InfoCard>
          <Reveal delay={0.16} className="mt-2 flex flex-wrap gap-3">
            {SITE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-ink px-6 py-3 font-bold transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-ink-foreground"
              >
                {s.label}
              </a>
            ))}
          </Reveal>
        </div>

        <AdmissionForm />
      </section>

      <section className="container-site mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="overflow-hidden rounded-[2rem] bg-sand shadow-soft"
        >
          <iframe
            title="Ilm-u Ziyo xaritada"
            src={MAP_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full border-0 md:h-[480px]"
          />
        </motion.div>
      </section>

      <section className="container-site mt-24 md:mt-32">
        <div className="grid gap-10 border-t pt-14 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 className="text-4xl font-bold md:text-5xl">Ko'p so'raladigan savollar</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible defaultValue="q0">
              {FAQ.map((f, i) => (
                <AccordionItem key={f.q} value={`q${i}`} className="border-foreground/15">
                  <AccordionTrigger className="py-6 font-display text-xl font-bold hover:no-underline md:text-2xl [&>svg]:size-6 [&>svg]:text-brand">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-lg text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
  delay,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group flex items-start gap-5 rounded-3xl bg-card p-6 shadow-soft transition-all duration-500 hover:translate-x-1 hover:shadow-lift md:p-7">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-brand-foreground transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105">
          <Icon className="size-6" />
        </div>
        <div className="text-lg text-muted-foreground">
          <p className="mb-1 font-bold text-foreground">{title}</p>
          {children}
        </div>
      </div>
    </Reveal>
  );
}

function AdmissionForm() {
  const { sinf } = Route.useSearch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");
  const [grade, setGrade] = useState(sinf ?? "");
  const [track, setTrack] = useState("");
  const [errors, setErrors] = useState<Partial<Record<"name" | "phone" | "grade" | "track", string>>>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (sinf) setGrade(sinf);
  }, [sinf]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const res = admissionSchema.safeParse({ name, phone, grade, track });
    if (!res.success) {
      const errs: Partial<Record<"name" | "phone" | "grade" | "track", string>> = {};
      for (const issue of res.error.issues) errs[issue.path[0] as "name" | "phone" | "grade" | "track"] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    toast.success("Ariza qabul qilindi!", {
      description: "Tez orada siz bilan bog'lanamiz.",
    });
  };

  const field =
    "w-full rounded-2xl border-2 border-input bg-background px-5 py-4 text-lg outline-none transition-all focus:border-brand focus:bg-card focus:shadow-soft";

  return (
    <Reveal delay={0.1} id="ariza" className="scroll-mt-28">
      <div className="relative overflow-hidden rounded-[2rem] bg-card p-7 shadow-lift md:p-10">
        <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-sun/20 blur-3xl" />
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="ok"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex min-h-[460px] flex-col items-center justify-center text-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
              >
                <CheckCircle2 className="size-20 text-brand" />
              </motion.div>
              <h3 className="mt-6 text-3xl font-bold">Rahmat, {name.trim()}!</h3>
              <p className="mt-3 max-w-sm text-lg text-muted-foreground">
                Arizangiz qabul qilindi. Tez orada telefon orqali bog'lanamiz.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setName("");
                  setPhone("+998 ");
                  setGrade("");
                  setTrack("");
                }}
                className="mt-8 font-bold text-brand underline underline-offset-4"
              >
                Yana ariza yuborish
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={onSubmit}
              noValidate
              className="relative flex flex-col gap-5"
            >
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">Qabulga yozilish</h2>

              <label className="flex flex-col gap-2">
                <span className="font-bold">Ism</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Farzandingizning ismi"
                  className={cn(field, errors.name && "border-destructive")}
                />
                {errors.name && <span className="text-sm text-destructive">{errors.name}</span>}
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-bold">Telefon</span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  inputMode="tel"
                  placeholder="+998 __ ___ __ __"
                  className={cn(field, errors.phone && "border-destructive")}
                />
                {errors.phone && <span className="text-sm text-destructive">{errors.phone}</span>}
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-bold">Sinf</span>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className={cn(field, "cursor-pointer appearance-none", !grade && "text-muted-foreground", errors.grade && "border-destructive")}
                >
                  <option value="">Tanlang</option>
                  {GRADES.map((g) => (
                    <option key={g} value={g}>
                      {g}-sinf
                    </option>
                  ))}
                </select>
                {errors.grade && <span className="text-sm text-destructive">{errors.grade}</span>}
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-bold">Yo'nalish</span>
                <select
                  value={track}
                  onChange={(e) => setTrack(e.target.value)}
                  className={cn(field, "cursor-pointer appearance-none", !track && "text-muted-foreground", errors.track && "border-destructive")}
                >
                  <option value="">Tanlang</option>
                  {TRACKS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.track && <span className="text-sm text-destructive">{errors.track}</span>}
              </label>

              <button
                type="submit"
                className="group mt-3 inline-flex items-center justify-center gap-3 rounded-full bg-sun px-8 py-5 text-lg font-bold text-sun-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0.5"
              >
                Bepul sinov darsiga yozilish
                <Send className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
              </button>
              <p className="text-sm text-muted-foreground">
                Ariza yuborilgach, ma'lumot telefon orqali beriladi.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}
