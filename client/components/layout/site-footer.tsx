import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";

const footerLinks = [
  {
    title: "Solutions",
    links: [
      { label: "Payment Orchestration", href: "#solutions" },
      { label: "Fraud Intelligence", href: "#fraud" },
      { label: "Treasury Automation", href: "#treasury" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Services", href: "/services" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Developer Center", href: "#developers" },
      { label: "Pricing", href: "#pricing" },
      { label: "System Status", href: "#status" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com",
  },
  {
    label: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
  },
  {
    label: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com",
  },
];

export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-white/10 bg-gradient-to-b from-transparent via-white/[0.02] to-white/[0.04] py-16">
      <div className="pointer-events-none absolute inset-x-0 -top-16 mx-auto h-40 w-[min(720px,90%)] rounded-full bg-gradient-to-b from-primary/30 via-accent/20 to-transparent blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 lg:flex-row lg:justify-between lg:px-10">
        <div className="max-w-md space-y-6">
          <Link href="/" className="inline-flex items-center gap-3 text-2xl font-semibold">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fcfea9b446ade4a14ad598e7555e5744f%2Fa12c9b461f574ccf841a98580502af05?format=webp&width=800" alt="Kelvio" className="h-11 w-11 rounded-full object-contain shadow-sm" />
            <span className="text-foreground text-xl font-semibold">Kelvio</span>
          </Link>
          <p className="text-sm text-foreground/70">
            Kelvio orchestrates global payments with bank-grade security, adaptive
            routing, and AI-powered risk intelligence designed for enterprise
            scale.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-foreground/70 transition-all duration-300 hover:border-primary/40 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid flex-1 gap-10 text-sm text-foreground/70 sm:grid-cols-2 lg:grid-cols-3">
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => {
                  const isRoute = link.href.startsWith("/");

                  if (isRoute) {
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mx-auto mt-16 flex w-full max-w-7xl flex-col gap-6 px-6 text-xs text-foreground/60 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <p>© {year} Kelvio. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#privacy" className="transition-colors hover:text-foreground">
            Privacy policy
          </a>
          <a href="#terms" className="transition-colors hover:text-foreground">
            Terms & compliance
          </a>
          <a href="#cookies" className="transition-colors hover:text-foreground">
            Cookie preferences
          </a>
        </div>
      </div>
    </footer>
  );
};
