import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/ilm-ziyo-logo.jpg.asset.json";
import { NAV, SITE, telHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/80 shadow-soft backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "container-site flex items-center justify-between gap-6 transition-all duration-500",
          scrolled ? "py-3" : "py-5 md:py-6",
        )}
      >
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative block size-11 overflow-hidden rounded-2xl bg-card shadow-soft md:size-12">
            <img
              src={logo.url}
              alt="Ilm-u Ziyo logotipi"
              width={48}
              height={48}
              className="size-full object-cover transition-transform duration-700 group-hover:rotate-[360deg]"
            />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors",
                isActive(item.to) ? "text-foreground" : "text-foreground/70 hover:text-foreground",
              )}
            >
              {item.label}
              {isActive(item.to) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-4 -bottom-0.5 h-[3px] rounded-full bg-brand"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref(SITE.phones[0])}
            className="group hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-ink-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift sm:inline-flex md:text-base"
          >
            <Phone className="size-4 transition-transform group-hover:rotate-12" />
            {SITE.phones[0]}
          </a>
          <button
            type="button"
            aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-foreground/15 bg-card lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t bg-background lg:hidden"
          >
            <div className="container-site flex flex-col py-4">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    to={item.to}
                    className={cn(
                      "block rounded-xl px-3 py-3 font-display text-2xl font-semibold",
                      isActive(item.to) ? "text-brand" : "text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={telHref(SITE.phones[0])}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 font-bold text-ink-foreground"
              >
                <Phone className="size-4" /> {SITE.phones[0]}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
