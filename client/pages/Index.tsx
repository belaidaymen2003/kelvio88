import React, { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ArrowUpRightSquare,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CirclePlay,
  CreditCard,
  Globe2,
  MapPin,
  ShieldCheck,
  Sparkle,
  Star,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";
import Link from "next/link";

const originCountries = [
  { code: "AE", name: "United Arab Emirates" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "SG", name: "Singapore" },
];

const destinationOptions = [
  { code: "SA", name: "Saudi Arabia" },
  { code: "QA", name: "Qatar" },
  { code: "FR", name: "France" },
  { code: "CN", name: "China" },
  { code: "NG", name: "Nigeria" },
];

const payoutMethods = [
  { id: "instant", label: "Instant wallet credit" },
  { id: "express", label: "Express branch pickup" },
  { id: "swift", label: "SWIFT settlement" },
];

const cityOptions = [
  "Riyadh",
  "Jeddah",
  "Doha",
  "Paris",
  "Shanghai",
  "Lagos",
];

const conciergeHighlights = [
  {
    title: "Concierge onboarding",
    description: "Dedicated architects align policies, corridors, and risk guardrails before your first transaction.",
    pill: "72h go-live",
  },
  {
    title: "Granular controls",
    description: "Role-aware console with instant limits, beneficiary management, and secure approvals.",
    pill: "Bank-grade",
  },
];

const velocityHighlights = [
  {
    title: "One tap disbursements",
    description: "Dispatch multi-currency payouts across 184 markets with real-time compliance checks embedded.",
    action: "Schedule demo",
  },
  {
    title: "Diverse funding rails",
    description: "Blend cards, ACH, RTP, and treasury balances to maximize cost efficiency without losing speed.",
    action: "Explore rails",
  },
];

const exchangeRates = [
  { corridor: "USD �� AED", buy: 3.66, sell: 3.68 },
  { corridor: "EUR → USD", buy: 1.08, sell: 1.10 },
  { corridor: "GBP �� SAR", buy: 4.66, sell: 4.71 },
  { corridor: "SGD → CNY", buy: 5.28, sell: 5.35 },
  { corridor: "AED → NGN", buy: 403.0, sell: 409.0 },
  { corridor: "USD → INR", buy: 82.5, sell: 82.9 },
];

const corridorCards = [
  { flag: "AE", name: "Middle East", descriptor: "10 premium corridors" },
  { flag: "EU", name: "Eurozone", descriptor: "SEPA & instant" },
  { flag: "AF", name: "Africa", descriptor: "Fintech & bank mesh" },
  { flag: "AS", name: "Asia-Pacific", descriptor: "RTP optimisation" },
  { flag: "US", name: "North America", descriptor: "FedNow & RTP" },
  { flag: "SA", name: "Latin America", descriptor: "Pix & SPEI" },
  { flag: "CN", name: "Greater China", descriptor: "Cross-border CNH" },
  { flag: "IN", name: "South Asia", descriptor: "UPI & wallets" },
  { flag: "NG", name: "West Africa", descriptor: "NGN & CFA" },
  { flag: "AU", name: "Oceania", descriptor: "NPP ready" },
  { flag: "ZA", name: "Southern Africa", descriptor: "ZAR & multi FX" },
  { flag: "TR", name: "Türkiye", descriptor: "Dual currency" },
  { flag: "KW", name: "Kuwait", descriptor: "Cross-border KWD" },
  { flag: "QA", name: "Qatar", descriptor: "QAR priority" },
  { flag: "BH", name: "Bahrain", descriptor: "GCC instant" },
  { flag: "EG", name: "Egypt", descriptor: "EGP stabilization" },
];

const processSteps = [
  {
    title: "Register for free",
    description:
      "Simply sign up online for free and verify your identity.",
    linkLabel: "",
  },
  {
    title: "Set up your transfer",
    description:
      "Add a recipient’s details and choose which currency.",
    linkLabel: "",
  },
  {
    title: "Make your payment",
    description:
      "Send us your funds with a bank transfer and we’ll notify you.",
    linkLabel: "",
  },
  {
    title: "You're all done!",
    description:
      "We inform you when the money has been sent and provide confirmation.",
    linkLabel: "",
  },
];

const stepIcons = [
  "https://cdn.builder.io/api/v1/image/assets%2Fb07161314e6e460a86182c01a942c953%2F2876b3c084214169bd24125e6d16f163?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Fb07161314e6e460a86182c01a942c953%2F0510fc0e8a274e7089c08425a0e7ec36?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Fb07161314e6e460a86182c01a942c953%2F9813ae3997fb41b793f298b922d4f878?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Fb07161314e6e460a86182c01a942c953%2F9e2ef32785c0473aac0c91e08331765f?format=webp&width=800",
];

const testimonials = [
  {
    quote:
      "We replicated Yamersal’s velocity with enterprise governance. Approval uplift exceeded every projection.",
    name: "Layla Al-Hassan",
    role: "Chief Payments Officer, Arcline"
  },
  {
    quote:
      "Treasury visibility is unparalleled. Multi-entity FX hedging now executes in minutes, not days.",
    name: "James Hart",
    role: "Global Treasurer, ZenithTrust"
  },
];

const faqs = [
  {
    question: "How fast can Kelvio activate a new payout corridor?",
    answer:
      "Most corridors are activated within 72 hours once KYC and due diligence artefacts are approved. Highly regulated corridors may require additional onboarding steps coordinated by our compliance desk.",
  },
  {
    question: "Do you support real-time FX rate locking?",
    answer:
      "Yes. Kelvio offers intraday locking, laddered hedging, and automated forward contracts managed through the treasury console with live exposure reporting.",
  },
  {
    question: "Can operators manage limits and approvals per role?",
    answer:
      "Granular RBAC allows you to set transaction ceilings, corridor access, dual approvals, and session-based controls tailored to each operator profile.",
  },
  {
    question: "How do developers integrate with Kelvio?",
    answer:
      "SDKs ship with both REST and GraphQL coverage, sandbox environments, event webhooks, and observability pipelines for Datadog, Splunk, and more.",
  },
];

const FlagBadge = ({ code }: { code: string }) => {
  const key = String(code || "");
  const codeLower = key.toLowerCase();
  const isIso2 = /^[a-z]{2}$/.test(codeLower);
  const src = isIso2 ? `https://flagcdn.com/w80/${codeLower}.png` : null;

  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/6 bg-transparent text-sm font-semibold tracking-[0.25em] text-foreground/90 shadow-sm overflow-hidden">
      {src ? (
        <img src={src} alt={key} className="h-full w-full object-cover" />
      ) : (
        <span className="text-xs">{key}</span>
      )}
    </span>
  );
};

export default function Index() {
  const [origin, setOrigin] = useState(originCountries[0]);
  const [destination, setDestination] = useState(destinationOptions[0]);
  const [payout, setPayout] = useState(payoutMethods[0]);
  const [city, setCity] = useState(cityOptions[0]);
  const [amount, setAmount] = useState(25000);

  const { fee, total, receive } = useMemo(() => {
    const fxRate = destination.code === "NG" ? 402.4 : destination.code === "FR" ? 3.78 : 3.65;
    const feeRate = payout.id === "instant" ? 0.012 : payout.id === "express" ? 0.008 : 0.006;
    const computedFee = amount * feeRate;
    const computedTotal = amount + computedFee;
    const computedReceive = computedTotal * fxRate;
    return {
      fee: computedFee,
      total: computedTotal,
      receive: computedReceive,
    };
  }, [amount, destination.code, payout.id]);

  return (
    <div className="space-y-32 pb-32">
      <section
        id="hero"
        className="relative mx-auto w-full  overflow-hidden  px-6 pt-24 lg:px-10 lg:pt-28"
      >
  <video className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40" autoPlay muted loop playsInline>
  <source src="/0_Earth_Global_1920x1080.mov" type="video/quicktime" />
  <source src="/0_Earth_Global_1920x1080.mp4" type="video/mp4" />
  <source src="/0_Earth_Global_1920x1080.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>
        <div className="absolute inset-0 -z-10  opacity-70">
          <div className="absolute inset-0 hero-bg" />
          <div className="absolute -left-40 -top-20 h-96 w-96 rounded-full hero-blob-1 opacity-90" />
          <div className="absolute -right-36 top-8 h-80 w-80 rounded-full hero-blob-2 opacity-90" />
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,96L80,80C160,64,320,32,480,26.7C640,21,800,43,960,56C1120,69,1280,75,1360,78.7L1440,82V120H1360C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120H0Z" fill="url(#g)" opacity="0.6" />
              <defs>
                <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="rgba(17,94,73,0.18)" />
                  <stop offset="100%" stopColor="rgba(230,190,60,0.06)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="relative grid gap-12 px-6 py-16 lg:grid-cols-[1.15fr,0.85fr] lg:px-12">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary via-accent to-secondary" />
              Premium payout gateway
            </div>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-[hsl(var(--secondary))] sm:text-5xl lg:text-[56px]">
                Kelvio — Pay Anyone, Anywhere
              </h1>
              <p className="text-lg text-foreground/75">
                Inspired by Yamersal’s precision, our platform delivers concierge onboarding, adaptive compliance, and
                instant settlement intelligence across every corridor you scale into.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#exchange"
                className="cmn-btn inline-flex items-center justify-center gap-2 px-8 py-3"
              >
                Open a free account
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-8 py-3 text-sm font-medium text-foreground/80 transition-all duration-300 hover:border-primary/40 hover:text-foreground"
              >
                See how it works
              </Link>
            </div>
            <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-inner-card sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <div className="space-y-1 text-sm text-foreground/70">
                <p className="font-semibold text-foreground/85">140,000+ operators routed premium flows with Kelvio.</p>
                <p>98.7% satisfaction, audited every quarter.</p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/55">
                SOC2 • PCI • ISO
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -right-20 top-10 hidden h-44 w-44 rounded-full bg-hero blur-3xl opacity-60 lg:block" />
            <div className="relative rounded-[1.5rem] border border-white/6 bg-neutral-900/80 p-6 shadow-lg">
              <div className="flex items-center justify-between text-sm text-foreground/60">
                <span className="text-sm font-medium">Model a payout</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-foreground/60">
                  <Sparkle className="h-3.5 w-3.5" />
                  AI pricing
                </span>
              </div>

              {/* Top money input */}
              <div className="mt-4 rounded-xl dark-surface p-4 text-foreground">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-foreground/60">You send</div>
                    <div className="text-2xl font-semibold">{amount.toLocaleString('en-US')}</div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border px-3 py-2 surface-pill">
                    <span className="text-sm font-semibold">USD</span>
                    <ChevronDown className="h-4 w-4 text-foreground/60" />
                  </div>
                </div>
              </div>

              <a className="mt-3 inline-flex items-center gap-2 text-sm text-primary/80">
                <CirclePlay className="h-4 w-4" />
                Show calculation
              </a>

              <div className="mt-3 space-y-2 rounded-xl dark-surface p-4 text-sm text-foreground">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-sm text-foreground/70">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs">-</span>
                    <span>Our fee</span>
                  </div>
                  <div className="font-semibold text-foreground/90">${fee.toFixed(2)}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-sm text-foreground/70">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs">=</span>
                    <span>We'll Convert</span>
                  </div>
                  <div className="font-semibold text-foreground/90">${(amount - fee).toLocaleString('en-US')}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-sm text-foreground/70">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs">×</span>
                    <span>Kelvio Rate</span>
                  </div>
                  <div className="font-semibold text-foreground/90">{(receive / total).toFixed(4)}</div>
                </div>
              </div>

              <div className="mt-4 rounded-xl dark-surface p-4 text-foreground">
                <div className="text-xs text-foreground/60">Recipient gets</div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-semibold">{receive.toLocaleString('en-US', { maximumFractionDigits: 2 })}</div>
                  <div className="inline-flex items-center gap-2 rounded-full border px-3 py-2 surface-pill">
                    <span className="text-sm font-semibold">AUS</span>
                    <ChevronDown className="h-4 w-4 text-foreground/60" />
                  </div>
                </div>
              </div>

              <button type="button" className="mt-4 alt-cta">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>


      <section
        id="exchange"
        className="relative mx-auto w-full max-w-7xl px-6 lg:px-10"
      >
        <div className="absolute inset-0 -z-10 rounded-[3rem] border border-primary/20 bg-gradient-to-br from-primary/25 via-accent/20 to-secondary/25 shadow-glow" />
        <div className="relative px-6 py-16 text-foreground lg:px-12">
          <div className="flex flex-col gap-6 text-center">
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
              <TrendingUp className="h-4 w-4" />
              Live FX matrix
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Premium corridors with transparent spreads and blended fees.
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-white/80">
              Indicative wholesale rates, refreshed continuously by Kelvio treasury desks. Lock pricing in the console or
              connect via API for automated rate capture.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 shadow-inner-card">
            <table className="w-full min-w-[640px] text-left text-sm text-white/80">
              <thead>
                <tr className="border-b border-white/20 text-xs uppercase tracking-[0.35em] text-white/60">
                  <th className="px-6 py-4">Corridor</th>
                  <th className="px-6 py-4">Buy</th>
                  <th className="px-6 py-4">Sell</th>
                  <th className="px-6 py-4 text-right">Trend</th>
                </tr>
              </thead>
              <tbody>
                {exchangeRates.map((rate) => (
                  <tr key={rate.corridor} className="border-b border-white/10 last:border-none">
                    <td className="px-6 py-5 text-base font-semibold text-white">
                      <div className="flex items-center gap-3">
                        {(() => {
                          const parts = rate.corridor.match(/[A-Z]{2,4}/g) || [];
                          const map: Record<string, string> = {
                            USD: "us",
                            AED: "ae",
                            EUR: "eu",
                            GBP: "gb",
                            SGD: "sg",
                            NGN: "ng",
                            INR: "in",
                            CNY: "cn",
                            AUD: "au",
                            SAR: "sa",
                    
                          };

                          const left = parts[0] ? map[parts[0]] || parts[0].slice(0,2).toLowerCase() : null;
                          const right = parts[1] ? map[parts[1]] || parts[1].slice(0,2).toLowerCase() : null;

                          return (
                            <div className="flex items-center gap-3">
                              {left ? <FlagBadge code={left.toUpperCase()} /> : null}
                              {right ? <FlagBadge code={right.toUpperCase()} /> : null}
                              <span className="ml-2">{rate.corridor}</span>
                            </div>
                          );
                        })()}
                      </div>
                    </td>
                    <td className="px-6 py-5">{rate.buy.toFixed(2)}</td>
                    <td className="px-6 py-5">{rate.sell.toFixed(2)}</td>
                    <td className="px-6 py-5 text-right">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                        <ArrowDownRight className="h-3 w-3" />
                        Stable
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        id="corridors"
        className="mx-auto w-full max-w-7xl px-6 lg:px-10"
      >
        <div className="space-y-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">
            <Globe2 className="h-4 w-4" />
            Where can you disburse?
          </span>

          {/* Luxury country flags row */}
          <div className="mx-auto flex w-fit items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <FlagBadge code="AE" />
              <FlagBadge code="SA" />
              <FlagBadge code="GB" />
              <FlagBadge code="FR" />
              <FlagBadge code="CH" />
              <FlagBadge code="US" />
            </div>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-[hsl(var(--secondary))] sm:text-4xl">
            Curated luxury corridors ready for immediate launch.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-foreground/65">
            Each corridor includes localized compliance playbooks, settlement windows, and beneficiary verification to
            keep every payout seamless.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {corridorCards.map((card) => (
            <div key={card.name} className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-inner-card transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <FlagBadge code={card.flag} />
                <ChevronRight className="h-4 w-4 text-foreground/40" />
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-lg font-semibold text-foreground/85">{card.name}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">{card.descriptor}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/55">
                Launch corridor
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
         id="steps"
         className="mx-auto w-full max-w-7xl px-6 lg:px-2"
       >
         <div className="px-6 py-12 lg:px-2">
           {/* HOW IT WORKS - four step illustrated flow */}
           <div className="mt-10 w-full">
             <div className="text-center">
               <h2 className="text-3xl font-extrabold text-[hsl(var(--secondary))] sm:text-4xl">Just few steps to start</h2>
               <p className="mx-auto mt-2 max-w-2xl text-sm text-foreground/65">It's easier than you think. Follow 3 simple easy steps</p>
             </div>

             <div className="mt-8 flex w-full flex-col items-center  lg:flex-row lg:items-center lg:justify-between">
               {processSteps.map((step, i) => (
                 <React.Fragment key={step.title}>
                   <div className="flex w-full   flex-col items-center text-center relative z-10">
                     <div className="flex h-20 w-20 items-center justify-center">
                       <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-primary/30 shadow-glow">
                         <img src={stepIcons[i]} alt={step.title} className="h-10 w-10 object-contain tint-green" />
                       </span>
                     </div>

                     <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                     <p className="mt-2 text-sm text-foreground/65">{step.description}</p>
                   </div>

                   {i < processSteps.length - 1 && (
                     <div className="flex items-center justify-center px-6 text-primary/60 -mt-6" aria-hidden>
                       <svg width="132" height="28" viewBox="0 0 132 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-32">
                         <path d="M10 18 C42 6, 90 6, 122 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                         <path d="M114 10 L122 18 L114 26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                       </svg>
                     </div>
                   )}
                 </React.Fragment>
               ))}
             </div>
           </div>
         </div>
       </section>







       




     </div>
   );
 }
