import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "About",
  description:
    "Koovis AI is a product company founded by Rajesh Kolachana — 11 years in ML engineering, 7 at Amazon. Based in Hyderabad, India. Building AI products that work.",
};

const principles = [
  {
    title: "Ship, Don\u2019t Demo",
    desc: "Working software in production beats a perfect prototype every time. If it doesn\u2019t serve real users, it doesn\u2019t count.",
  },
  {
    title: "Honest Architecture",
    desc: "Simplest solution that works. Sometimes the answer isn\u2019t ML. Sometimes it\u2019s a SQL query. Optimize for results, not complexity.",
  },
  {
    title: "Own the Outcome",
    desc: "We use everything we build. Every day. If it\u2019s not good enough for us, it\u2019s not good enough to ship.",
  },
  {
    title: "Build in Public",
    desc: "Share what works, what breaks, and how we fix it. Trust is earned through honesty, not ad spend.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <SectionLabel>About</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-5">
            A product company, not a{" "}
            <em>consulting firm.</em>
          </SectionTitle>
        </AnimateIn>
      </section>

      {/* ==================== COMPANY STORY ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <AnimateIn>
            <p className="text-base leading-relaxed text-content-muted">
              Koovis AI builds AI-powered products. Not consulting. Not client
              work. We build our own tools, ship them, and iterate based on real
              usage.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-content-muted">
              Incorporated April 2026 as Koovis AI Pvt Ltd in India. Based in
              Hyderabad. Three products: personal AI (Koovis), quantitative
              trading (WealthPilot), and AI pre-visualization for cinema
              (Koovis Studios).
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <p className="mt-5 text-base leading-relaxed text-content font-medium">
              The best AI products come from engineers who build for themselves
              first. Everything we ship is something we use daily.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== VISION ==================== */}
      <section className="border-t border-content/10 bg-accent/[0.03] py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <AnimateIn>
            <h2 className="font-serif text-2xl font-semibold text-content">
              Our Vision
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-content-muted">
              Build AI products people rely on every day. Not the flashiest. Not
              the most hyped. The most useful. Products that work reliably, solve
              real problems, and earn trust through consistent performance.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== FOUNDER SECTION ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Founder</SectionLabel>
          </AnimateIn>

          <div className="mt-10 grid gap-12 sm:gap-16 md:grid-cols-[200px_1fr] md:gap-16 lg:gap-20">
            {/* Photo placeholder */}
            <AnimateIn delay={0.1}>
              <div className="flex flex-col items-center gap-5 lg:items-start lg:sticky lg:top-32">
                <div className="flex h-[160px] w-[160px] sm:h-[200px] sm:w-[200px] items-center justify-center rounded-2xl bg-surface-elevated border border-content/10 shadow-lg shadow-accent/5">
                  <span className="font-serif text-5xl font-semibold text-accent/80 select-none">
                    RK
                  </span>
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="font-serif text-2xl font-semibold text-content">
                    Rajesh Kolachana
                  </h2>
                  <p className="mt-1 font-jetbrains text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    Founder &amp; CEO
                  </p>
                  <p className="mt-1 text-sm text-content-dim">
                    Hyderabad, India
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Bio */}
            <div className="flex flex-col gap-5">
              <AnimateIn delay={0.15}>
                <h3 className="text-lg font-semibold text-content">
                  Why I&apos;m building this
                </h3>
                <p className="mt-3 text-base leading-relaxed text-content-muted">
                  11 years building ML systems. 7 at Amazon as a Senior Data
                  Scientist — recommendation engines, NLP, advertising
                  optimization, forecasting. Systems serving millions across
                  global marketplaces.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <p className="text-base leading-relaxed text-content-muted">
                  Started in structural engineering (IIT Roorkee, IISc Bangalore,
                  GATE AIR 5 — top 0.013% nationally). Pivoted to data science
                  when I realized the same mathematical frameworks model human
                  behavior, markets, and decisions.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.25}>
                <p className="text-base leading-relaxed text-content-muted">
                  Before Amazon: InMobi (Rising Star Award, scaled an ad account
                  from $3K to $80K daily) and AgreeYa Solutions (pricing
                  optimization for Best Buy, Sam&apos;s Club, Dick&apos;s
                  Sporting Goods).
                </p>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <h3 className="mt-3 text-lg font-semibold text-content">
                  At Amazon (2017&ndash;2024)
                </h3>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {[
                    "FBA Recommendation Engine — $4.4B GMS using causal ML across 7 global marketplaces",
                    "NLP review relevance — $26M annual revenue across 9 marketplaces",
                    "Probabilistic reorder models — $14.3M incremental revenue, 37% CTR lift",
                    "Keyword bidding optimization — $1.9M annual profit lift",
                    "Natural language to SQL — hackathon winner turned production product, 1,000+ users globally",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-content-muted"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimateIn>

              <AnimateIn delay={0.35}>
                <p className="mt-3 text-base leading-relaxed text-content font-medium">
                  I left Amazon to build products, not to consult. Koovis AI is
                  everything I learned at scale, applied to tools I use every
                  day.
                </p>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRINCIPLES ==================== */}
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Principles</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">How we build</SectionTitle>
          </AnimateIn>

          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <AnimateIn key={p.title} delay={0.1 + i * 0.1}>
                <div className="h-full rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6">
                  <div className="mb-5 h-[3px] w-10 rounded-full bg-accent" />
                  <h3 className="text-lg font-semibold text-content">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-content-dim">
                    {p.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-5 sm:px-6">
          <AnimateIn>
            <div className="rounded-2xl border border-content/[0.06] bg-content/[0.02] p-10 text-center">
              <SectionTitle>
                Try what we&apos;ve <em>built.</em>
              </SectionTitle>
              <p className="mt-4 text-base text-content-muted">
                Koovis is live. See our engineering philosophy in action.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  href="https://pa.koovis.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                >
                  Open Koovis <ArrowRight size={16} />
                </Button>
                <Button href="/products" variant="outline" size="lg">
                  All Products <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
