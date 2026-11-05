import { Link } from "@tanstack/react-router";
import logo from "@/assets/ilm-ziyo-logo.jpg";
import { NAV, SITE, telHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t md:mt-32">
      <div className="container-site grid gap-10 py-12 md:grid-cols-3 md:py-14">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              className="size-10 rounded-xl object-cover"
            />
            <p className="font-display text-lg font-bold">
              {SITE.name} <span className="font-normal text-muted-foreground">· {SITE.branch}</span>
            </p>
          </div>
          <p className="mt-4 max-w-xs text-muted-foreground">{SITE.address}</p>
        </div>

        <div className="flex flex-col gap-2 md:items-center">
          {SITE.phones.map((p) => (
            <a
              key={p}
              href={telHref(p)}
              className="text-lg font-semibold transition-colors hover:text-brand"
            >
              {p}
            </a>
          ))}
          <nav className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="hover:text-foreground">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap gap-2 md:justify-end">
          {SITE.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="h-fit rounded-full border border-foreground/20 px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-brand-foreground"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="container-site pb-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} {SITE.fullName}. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
