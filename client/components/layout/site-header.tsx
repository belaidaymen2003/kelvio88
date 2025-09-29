"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import  Logo  from "../../../public/KelvioLogo.png";
import Image from "next/image";
const navItems = [
  { label: "Home", href: "/" },
  { label: "Exchange", href: "#exchange" },
  { label: "Corridors", href: "#corridors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Services", href: "/services" },
];

export const SiteHeader = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleNavigate = () => setOpen(false);

  return (
    <header className="absolute top-0 z-50 w-full ">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/5 to-transparent opacity-10" />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-6  lg:px-10">
        <Link
          href="/"
          className="group relative inline-flex items-center gap-2 text-lg font-semibold tracking-tight"
          onClick={handleNavigate}
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 via-accent/30 to-secondary/30 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <Image src={Logo} alt="Kelvio" className="relative h-40 w-40 rounded-full object-contain shadow-sm" />

        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium text-foreground/70 lg:flex">
          {navItems.map((item) => {
            const isHash = item.href.startsWith("#");
            const isActive =
              !isHash &&
              (pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href)));

            const linkClass = cn(
              "relative rounded-full px-4 py-2 transition-all duration-300",
              "hover:text-foreground",
              isActive && "text-foreground",
            );

            if (isHash) {
              return (
                <a key={item.label} href={item.href} className={linkClass}>
                  {item.label}
                </a>
              );
            }

            return (
              <Link key={item.label} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#login"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-8 py-2 text-sm font-medium text-foreground/80 transition-all duration-300 hover:border-primary/40 hover:text-foreground"
          >
            Login
          </a>
          <Link
            href="/services"
            className="relative inline-flex items-center gap-2 rounded-full cmn-btn px-6 py-2 text-sm font-semibold shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            onClick={handleNavigate}
          >
            Open a free account
          </Link>
        </div>

        <button
          type="button"
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-foreground/70 transition-all duration-300 hover:border-white/30 hover:text-foreground lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span
            className={cn(
              "absolute h-px w-6 bg-current transition-all duration-300",
              open ? "translate-y-0 rotate-45" : "-translate-y-2",
            )}
          />
          <span
            className={cn(
              "absolute h-px w-6 bg-current transition-all duration-300",
              open ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "absolute h-px w-6 bg-current transition-all duration-300",
              open ? "translate-y-0 -rotate-45" : "translate-y-2",
            )}
          />
          <span
            className={cn(
              "absolute h-10 w-10 rounded-full bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20 opacity-0 blur-2xl transition-opacity duration-500",
              open && "opacity-100",
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden",
          open
            ? "pointer-events-auto max-h-[420px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <div className="mx-6 mb-6 rounded-3xl border border-white/10 bg-glass p-6 shadow-inner-card">
          <nav className="space-y-3 text-sm font-medium">
            {navItems.map((item) => {
              const isHash = item.href.startsWith("#");

              if (isHash) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block rounded-2xl bg-white/5 px-5 py-3 text-foreground/80 transition-all hover:bg-white/10 hover:text-foreground"
                    onClick={handleNavigate}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-2xl bg-white/5 px-5 py-3 text-foreground/80 transition-all hover:bg-white/10 hover:text-foreground"
                  onClick={handleNavigate}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#login"
              className="text-sm font-medium text-foreground/80 text-center"
              onClick={handleNavigate}
            >
              Login
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-2xl cmn-btn px-5 py-3 text-sm font-semibold shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
              onClick={handleNavigate}
            >
              Open a free account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
