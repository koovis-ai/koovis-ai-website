import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "About",
  description:
    "Koovis AI is a film studio founded by Raj Kolachana. Original films, shorts and series, written and performed by people and made with AI.",
};

const principles = [
  {
    title: "Story First",
    desc: "Every film starts with an original script. If the story doesn\u2019t work on the page, no amount of rendering will save it.",
  },
  {
    title: "Real Performances",
    desc: "People act every scene. The performance is filmed for real and leads the shots we generate around it.",
  },
  {
    title: "Honest About AI",
    desc: "Every release says how it was made. Everyone who appears on screen has signed a release.",
  },
  {
    title: "Restraint",
    desc: "Hard subjects are handled with care. We show consequences, not spectacle, and take advice from people who know the subject.",
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
              Koovis AI is a film studio. Under the name Koovis Studios we make
              our own films, shorts and series, written from scratch. AI lets a
              small team put stories on screen that would otherwise need a full
              crew and a large budget.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-content-muted">
              We don&apos;t make films for clients. Every story is ours, and so is
              the responsibility for how it&apos;s told.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <p className="mt-5 text-base leading-relaxed text-content-muted">
              People write the scripts and perform the scenes. Several AI models
              render the shots around those performances. A sound designer and a
              composer finish each film.
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
              Films that people remember for the story, not for how they were
              made. Starting with short films and a micro-series, and growing
              into longer work as the craft and the tools allow.
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
                    Raj Kolachana
                  </h2>
                  <p className="mt-1 font-jetbrains text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    Founder &middot; Writer, director, actor
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
                  After 11 years in the industry, building systems for other
                  people&apos;s products, I wanted to make my own work. Film is
                  where I landed: AI finally makes it possible to tell a story on
                  screen without a studio behind you, and the engineering
                  discipline turns out to matter as much on a film as in production ML.
                </p>
                <p className="mt-4 text-base leading-relaxed text-content-muted">
                  I write, direct and act in Koovis films. Actors, a sound
                  designer and a composer join each production. Koovis stays
                  small on purpose: the story decides what each film needs.
                </p>
                <p className="mt-4 text-base leading-relaxed text-content font-medium">
                  It&apos;s early. Our first short film is in development. Ask me
                  again when it&apos;s out.
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
                See what we&apos;re <em>making.</em>
              </SectionTitle>
              <p className="mt-4 text-base text-content-muted">
                Our slate, and how each film is made.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button href="/studios" size="lg">
                  See the films <ArrowRight size={16} />
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
