import Link from "next/link";

const NotFound = () => {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-6 py-24 lg:px-10">
      <div className="absolute inset-0 -z-10 rounded-[2.5rem] border border-white/10 bg-glass shadow-inner-card" />
      <div className="relative z-10 mx-auto max-w-2xl space-y-8 text-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary via-accent to-secondary" />
          Error 404
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-[hsl(var(--secondary))] sm:text-5xl">
          The page you’re looking for has been moved into another ledger.
        </h1>
        <p className="text-base text-foreground/70">
          Double-check the URL or let us guide you back to the dashboard so your
          transactions can stay on course.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[hsl(var(--primary))] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
          >
            Return home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-foreground/80 transition-all duration-300 hover:border-primary/40 hover:text-foreground"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
