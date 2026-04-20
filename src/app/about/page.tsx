import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "About",
  description:
    "Koovis AI is a product company founded by Rajesh Kolachana — 11 years in ML engineering, 7 at Amazon. Four AI products on a shared engine.",
};

const principles = [
  {
    title: "Ship, Don\u2019t Demo",
    desc: "A working product in production teaches you more in a week than a prototype teaches you in a year. We ship first, polish second, and learn from every deployment.",
  },
  {
    title: "Honest Architecture",
    desc: "Not every problem needs ML. Sometimes the best solution is a well-crafted SQL query. We pick the simplest tool that actually solves the problem \u2014 ego aside.",
  },
  {
    title: "Own the Outcome",
    desc: "Every product we build is something we use ourselves, every day. That\u2019s the bar. If it doesn\u2019t make our own lives better, it\u2019s not ready for anyone else.",
  },
  {
    title: "Build in Public",
    desc: "We share what works, what breaks, and what we learn along the way. It\u2019s slower than slick marketing, but it builds the kind of trust you can\u2019t buy.",
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
            The story behind{" "}
            <em>Koovis AI.</em>
          </SectionTitle>
        </AnimateIn>
      </section>

      {/* ==================== COMPANY STORY ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <AnimateIn>
            <p className="text-base leading-relaxed text-content-muted">
              Koovis AI exists because of a simple frustration: the gap between
              what AI can do in a demo and what it actually does in production is
              enormous. After years of watching promising AI projects die in the
              &ldquo;last mile&rdquo; &mdash; the monitoring, the failover, the
              operational discipline &mdash; we decided to build products that
              cross that gap ourselves.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-content-muted">
              We&apos;re a product company, not an agency. We build our own AI
              products, use them daily, and iterate based on what we learn from
              real usage.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <p className="mt-5 text-base leading-relaxed text-content-muted">
              Four products, one engine. <strong className="text-content">Koovis Workforce</strong>{" "}
              (autonomous AI workforce for founders) &mdash; MIT-licensed engine
              running in production since March 2026. <strong className="text-content">Koovis Pulse</strong>{" "}
              (Indian-language AI UGC ads for D2C brands).{" "}
              <strong className="text-content">WealthPilot Research</strong>{" "}
              (ablation-first research on Indian listed companies, 5-year OOS
              validated).{" "}
              <strong className="text-content">Koovis Studios</strong>{" "}
              (AI pre-visualization for Telugu cinema and beyond). Different
              domains, same philosophy &mdash; build things that actually work
              when nobody&apos;s watching.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== VISION ==================== */}
      <section className="border-t border-content/10 bg-accent/[0.03] py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <AnimateIn>
            <h2 className="font-serif text-2xl font-semibold text-content">
              What we&apos;re building toward
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-content-muted">
              We want to build AI products that people quietly rely on every day.
              Not the flashiest tools in someone&apos;s demo reel. Not the most
              hyped product on launch day. The ones that just work &mdash;
              reliably, consistently &mdash; and earn trust over time through
              performance, not promises.
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
                </div>
              </div>
            </AnimateIn>

            {/* Bio */}
            <div className="flex flex-col gap-5">
              <AnimateIn delay={0.15}>
                <h3 className="text-lg font-semibold text-content">
                  The path here wasn&apos;t straight
                </h3>
                <p className="mt-3 text-base leading-relaxed text-content-muted">
                  I started in structural engineering &mdash; IIT Roorkee for my
                  B.Tech, then IISc Bangalore for my M.Tech. Scored GATE AIR 5
                  (top 0.013% nationally), which in Indian engineering circles
                  opens every door. But somewhere between finite element analysis
                  and optimization theory, I realized the same mathematical
                  frameworks that model bridges and buildings could model human
                  behavior, markets, and decisions. That pivot changed everything.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <p className="text-base leading-relaxed text-content-muted">
                  My first real data science role was at InMobi, where I won the
                  Rising Star Award and scaled an ad account from $3K to $80K in
                  daily spend. Then AgreeYa Solutions, building pricing
                  optimization models for Best Buy, Sam&apos;s Club, and
                  Dick&apos;s Sporting Goods. Both taught me what production ML
                  actually looks like &mdash; messy data, tight deadlines, and
                  systems that have to work at 2 AM on a Saturday.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.25}>
                <h3 className="mt-3 text-lg font-semibold text-content">
                  Seven years at Amazon
                </h3>
                <p className="mt-3 text-base leading-relaxed text-content-muted">
                  Amazon is where I learned what it means to build at scale.
                  Seven years as a Senior Data Scientist, shipping ML systems
                  across global marketplaces &mdash; recommendation engines,
                  NLP-driven review ranking, Bayesian reorder models, paid-
                  advertising optimization, and an NL-to-SQL tool that went
                  from hackathon project to a production tool used by
                  thousands of account managers worldwide.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <p className="mt-4 text-base leading-relaxed text-content-muted">
                  The real takeaway wasn&apos;t the scale &mdash; it was the
                  discipline. The operational rigor. The understanding that a
                  model is maybe 20% of a production ML system; the rest is
                  pipelines, monitoring, failover, and the boring engineering
                  that keeps things running at 3 AM.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.4}>
                <h3 className="mt-3 text-lg font-semibold text-content">
                  Why I left
                </h3>
                <p className="mt-3 text-base leading-relaxed text-content-muted">
                  After 11 years in the industry &mdash; building systems for
                  other people&apos;s products &mdash; I wanted to build my own.
                  To apply everything I learned at Amazon scale, use it myself
                  every day, and see if one person with the right tools and the
                  right discipline can ship things that matter.
                </p>
                <p className="mt-4 text-base leading-relaxed text-content-muted">
                  Koovis is intentionally small. Solo for now; when I hire,
                  it&apos;s because a specific constraint demands it, not
                  because growth metrics say so. I publish negative findings
                  alongside positive ones. I open-source our core engine because
                  the best infrastructure compounds when others can run it too.
                </p>
                <p className="mt-4 text-base leading-relaxed text-content font-medium">
                  Koovis AI is the bet. It&apos;s early, and there&apos;s a lot
                  left to build. But the Workforce engine is running in
                  production, WealthPilot&apos;s 5-year OOS ablation paper is in
                  submission, Pulse is taking its first customer pilots, and
                  Studios is shipping Demo v2. Ask me again in a year.
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
            <SectionTitle className="mt-5">
              What we <em>believe.</em>
            </SectionTitle>
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
                See what we&apos;re <em>building.</em>
              </SectionTitle>
              <p className="mt-4 text-base text-content-muted">
                Four products, one engine. Pick the one that fits your work.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button href="/" size="lg">
                  See all products <ArrowRight size={16} />
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Get in touch <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
