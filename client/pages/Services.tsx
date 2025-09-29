import { ArrowUpRight, Compass, Hexagon, ShieldCheck, Workflow } from "lucide-react";
import Link from "next/link";

const advisoryTracks = [
  {
    title: "Market entry studio",
    description:
      "Deploy bespoke corridor strategies, licensing roadmaps, and partner diligence with regional specialists.",
    icon: Compass,
    bullet: "LATAM, EMEA, APAC expansion"
  },
  {
    title: "Operational excellence",
    description:
      "Rewire treasury, risk, and customer operations with automation frameworks tuned for premium brands.",
    icon: Workflow,
    bullet: "End-to-end operating playbooks"
  },
  {
    title: "Compliance architecture",
    description:
      "Design resilient, audit-ready governance across PCI, SOC 2, PSD2, and localized regulations.",
    icon: ShieldCheck,
    bullet: "Policy drafting and implementation"
  },
];

const engagementPillars = [
  {
    title: "Launch orchestration",
    description:
      "Dedicated payment architects, solution engineers, and risk strategists guide your entire go-live.",
  },
  {
    title: "Embedded enablement",
    description:
      "Weekly enablement sprints embed within your teams to accelerate adoption with measurable milestones.",
  },
  {
    title: "Executive governance",
    description:
      "Quarterly business reviews, benchmarking reports, and proactive optimization recommendations.",
  },
];

export default function Services() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative mx-auto w-full max-w-6xl px-6 pt-24 lg:px-10">
        <div className="absolute inset-0 -z-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
        <div className="relative z-10 space-y-8 px-6 py-16 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60"
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
            Back to overview
          </Link>
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-[hsl(var(--secondary))] sm:text-5xl">
              Signature services engineered for marquee payment launches.
            </h1>
            <p className="text-base text-foreground/70">
              Engage our payments architects, compliance strategists, and solution engineers to accelerate your rollout.
              Each engagement is bespoke, governed with precision, and measured by tangible business outcomes.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advisoryTracks.map((track) => (
              <div key={track.title} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20">
                  <track.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-foreground/90">{track.title}</h2>
                  <p className="text-sm text-foreground/65">{track.description}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-foreground/50">{track.bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 lg:px-10">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] px-6 py-12 shadow-inner-card lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">
                <Hexagon className="h-4 w-4" />
                Engagement model
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-[hsl(var(--secondary))] sm:text-4xl">
                A concierge-led experience from discovery to scale.
              </h2>
              <p className="text-base text-foreground/70">
                Our program management office partners with your executives weekly, ensuring deliverables are ahead of
                schedule and governance remains audit-ready.
              </p>
              <ul className="space-y-3 text-sm text-foreground/65">
                {engagementPillars.map((pillar) => (
                  <li key={pillar.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-inner-card">
                    <h3 className="text-base font-semibold text-foreground/85">{pillar.title}</h3>
                    <p className="mt-2 text-sm text-foreground/60">{pillar.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-inner-card">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">Engagement requests</p>
              <p className="text-2xl font-semibold text-[hsl(var(--secondary))]">Reserve your advisory launch window.</p>
              <p className="text-sm text-foreground/65">
                Submit your objectives and timelines so we can align the right program leads for your engagement.
              </p>
              <form className="space-y-4 text-sm text-foreground/70">
                <input
                  required
                  placeholder="Executive sponsor"
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary/60 focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Enterprise email"
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary/60 focus:outline-none"
                />
                <textarea
                  rows={4}
                  placeholder="Tell us about your target corridors, volumes, and success metrics."
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[hsl(var(--primary))] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Submit request
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
