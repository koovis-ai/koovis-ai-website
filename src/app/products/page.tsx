import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Activity,
  Shield,
  FlaskConical,
  TrendingUp,
  Database,
  Bot,
  Clapperboard,
  Image,
  Music,
  Film,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import WaitlistForm from "@/components/WaitlistForm";

const comparison = [
  {
    name: "Koovis Workforce",
    tagline: "Autonomous AI workforce for founders",
    forWho: "Multi-product founders, AI-first small agencies",
    status: "Live",
    statusColor: "bg-green-400",
    access: "In production at pa.koovis.ai; public launch at workforce.koovis.ai coming 2026",
    cta: { label: "Try Koovis Workforce", href: "https://pa.koovis.ai", external: true },
  },
  {
    name: "WealthPilot",
    tagline: "AI research platform for Indian equities",
    forWho: "Family offices, boutique PMS, independent RIAs, AMC research desks",
    status: "In Development",
    statusColor: "bg-amber-400",
    access: "Productized research reports shipping. Join waitlist.",
    cta: { label: "Jump to waitlist", href: "#wealthpilot", external: false },
  },
  {
    name: "Koovis Studios",
    tagline: "AI pre-viz for cinema",
    forWho: "Telugu cinema filmmakers & producers",
    status: "In Development",
    statusColor: "bg-amber-400",
    access: "First demo in production. Join waitlist.",
    cta: { label: "Jump to waitlist", href: "#studios", external: false },
  },
];

export const metadata: Metadata = {
  title: "Products",
  description:
    "AI products by Koovis AI — Koovis Workforce (autonomous AI workforce, live), WealthPilot (AI research platform for Indian equities), Koovis Pulse (Indian-language AI UGC for D2C brands), and Koovis Studios (AI pre-viz for Telugu cinema).",
};

/* ---------- DATA ---------- */

const koovisFeatures = [
  {
    icon: Bot,
    title: "Multi-Domain Agents",
    desc: "Coding, research, content, operations, strategy. 5 squads with cross-project context.",
  },
  {
    icon: Shield,
    title: "Trust Ladder",
    desc: "L0 Propose → L1 Scoped → L2 Autonomous → L3 Hands-off. Earn autonomy; don't grant it.",
  },
  {
    icon: Activity,
    title: "Credit-Aware Routing",
    desc: "5 providers (Claude, GPT, Gemini, DeepSeek, Bedrock). Cheapest model that can do the job.",
  },
  {
    icon: Database,
    title: "Persistent Memory",
    desc: "SQLite + FTS5. Agents remember your projects, decisions, and preferences across sessions.",
  },
];

const wpFeatures = [
  {
    icon: FlaskConical,
    title: "Ablation-First Methodology",
    desc: "Every claim tested against alternatives. We publish negative findings when results don't hold.",
  },
  {
    icon: Database,
    title: "Point-in-Time Universe",
    desc: "Survivorship-bias-free data. Corporate-action adjusted. Dataset-versioned backtests.",
  },
  {
    icon: Brain,
    title: "Productized Deep-Dives",
    desc: "AI-assisted research reports on Indian listed companies for family offices, boutique PMS, RIAs.",
  },
  {
    icon: Shield,
    title: "Rigorous Validation",
    desc: "8-gate framework: OOS Sharpe, alpha t-stat, DSR, max drawdown, bootstrap CIs, PSR.",
  },
  {
    icon: TrendingUp,
    title: "5-Year OOS Paper",
    desc: "Our 2021-2025 ablation study passed 8/8 gates (Sharpe 0.96). In submission to Pacific-Basin Finance Journal.",
  },
  {
    icon: Activity,
    title: "B2B Research Copilot",
    desc: "AI research SaaS for RIAs, PMS analysts, AMC desks. Launching 2026.",
  },
];

const studiosFeatures = [
  {
    icon: Image,
    title: "AI Image Generation",
    desc: "Scene-by-scene generation from script breakdowns using generative AI.",
  },
  {
    icon: Film,
    title: "Video Assembly",
    desc: "Automated pipeline with transitions, pacing, and cinematic framing.",
  },
  {
    icon: Music,
    title: "Audio & SFX",
    desc: "AI-generated sound effects and audio mixing for complete pre-viz.",
  },
  {
    icon: Clapperboard,
    title: "Telugu Cinema Focus",
    desc: "Built for the Telugu film industry and its storytelling conventions.",
  },
];

/* ---------- PAGE ---------- */

export default function ProductsPage() {
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <SectionLabel>Products</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-5">
            AI products built on <em>real engineering.</em>
          </SectionTitle>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-content-muted">
            Each product solves a hard problem with production-grade ML. Same
            rigor behind billion-dollar systems, applied to products we use
            ourselves.
          </p>
        </AnimateIn>
      </section>

      {/* ==================== COMPARISON STRIP ==================== */}
      <section className="border-t border-content/10 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>At a glance</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight text-content sm:text-3xl">
              Which one&apos;s <em>for you?</em>
            </h2>
          </AnimateIn>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {comparison.map((p, i) => (
              <AnimateIn key={p.name} delay={0.1 + i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-content/[0.08] bg-content/[0.02] p-6 transition-colors hover:border-accent/30">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-content">
                        {p.name}
                      </h3>
                      <p className="mt-1 font-serif text-sm italic text-content-muted">
                        {p.tagline}
                      </p>
                    </div>
                    <span className="flex flex-shrink-0 items-center gap-1.5 rounded-full border border-content/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-content-dim">
                      <span className={`inline-block h-1.5 w-1.5 rounded-full ${p.statusColor}`} />
                      {p.status}
                    </span>
                  </div>

                  <dl className="mt-5 flex flex-1 flex-col gap-3 text-sm">
                    <div>
                      <dt className="font-jetbrains text-[10px] uppercase tracking-[0.15em] text-content-dim">
                        Who it&apos;s for
                      </dt>
                      <dd className="mt-1 text-content-muted">{p.forWho}</dd>
                    </div>
                    <div>
                      <dt className="font-jetbrains text-[10px] uppercase tracking-[0.15em] text-content-dim">
                        Access
                      </dt>
                      <dd className="mt-1 text-content-muted">{p.access}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 pt-4 border-t border-content/[0.08]">
                    {p.cta.external ? (
                      <a
                        href={p.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80 transition-opacity"
                      >
                        {p.cta.label} <ArrowRight size={14} />
                      </a>
                    ) : (
                      <Link
                        href={p.cta.href}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80 transition-opacity"
                      >
                        {p.cta.label} <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== KOOVIS (PA) ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-content/[0.02]">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-accent/[0.06] to-transparent" />

              <div className="absolute right-3 top-3 sm:right-5 sm:top-5 z-10 rounded-full bg-green-400 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-950">
                Live
              </div>

              <div className="relative z-[1] p-5 sm:p-8 lg:p-12">
                <SectionLabel>Autonomous AI Workforce</SectionLabel>
                <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-content sm:text-5xl">
                  Koovis Workforce
                </h2>
                <p className="mt-1 font-serif text-lg italic text-content-muted">
                  The autonomous AI workforce for founders
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-content-muted">
                  Multi-domain autonomous agents across coding, research,
                  content, operations, and strategy. Cross-project context,
                  credit-aware routing across 5 providers, and a Trust Ladder
                  that makes autonomy actually safe. Open-source MIT engine +
                  hosted SaaS. In production since March 2026.
                </p>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {koovisFeatures.map((f, i) => (
                    <AnimateIn key={f.title} delay={0.05 + i * 0.06}>
                      <div className="flex gap-4 rounded-xl border border-content/[0.06] bg-content/[0.02] p-5 transition-colors hover:border-accent/20">
                        <f.icon
                          size={22}
                          className="mt-0.5 flex-shrink-0 text-accent"
                          strokeWidth={1.5}
                        />
                        <div>
                          <h3 className="text-sm font-semibold text-content">
                            {f.title}
                          </h3>
                          <p className="mt-1.5 text-xs leading-relaxed text-content-dim">
                            {f.desc}
                          </p>
                        </div>
                      </div>
                    </AnimateIn>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <Button
                    href="https://pa.koovis.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Koovis <ArrowRight size={16} />
                  </Button>
                  <span className="flex items-center gap-2 text-sm text-content-muted">
                    <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-green-400" />
                    Live at pa.koovis.ai
                  </span>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== WEALTHPILOT ==================== */}
      <section id="wealthpilot" className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <div className="relative overflow-hidden rounded-2xl border border-content/[0.06] bg-content/[0.02]">
              <div className="absolute right-3 top-3 sm:right-5 sm:top-5 z-10 rounded-full bg-amber-400 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-950">
                In Development
              </div>

              <div className="relative z-[1] p-5 sm:p-8 lg:p-12">
                <SectionLabel>AI Research Platform</SectionLabel>
                <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-content sm:text-5xl">
                  WealthPilot
                </h2>
                <p className="mt-1 font-serif text-lg italic text-content-muted">
                  AI research platform for Indian equities
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-content-muted">
                  Productized deep-dive research on Indian listed companies
                  for family offices, boutique PMS, and RIAs. Ablation-first
                  methodology with 5-year OOS validation (paper in submission
                  to Pacific-Basin Finance Journal). B2B research copilot SaaS
                  launching 2026.
                </p>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {wpFeatures.map((f, i) => (
                    <AnimateIn key={f.title} delay={0.05 + i * 0.06}>
                      <div className="flex gap-4 rounded-xl border border-content/[0.06] bg-content/[0.02] p-5 transition-colors hover:border-accent/20">
                        <f.icon
                          size={22}
                          className="mt-0.5 flex-shrink-0 text-accent"
                          strokeWidth={1.5}
                        />
                        <div>
                          <h3 className="text-sm font-semibold text-content">
                            {f.title}
                          </h3>
                          <p className="mt-1.5 text-xs leading-relaxed text-content-dim">
                            {f.desc}
                          </p>
                        </div>
                      </div>
                    </AnimateIn>
                  ))}
                </div>

                <div className="mt-10 flex items-center gap-2 text-sm text-content-muted">
                  <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-amber-400" />
                  Productized research reports shipping &mdash; B2B research SaaS in spec
                </div>

                <div className="mt-6 max-w-md">
                  <p className="mb-3 text-sm font-semibold text-content">
                    Get notified when WealthPilot launches
                  </p>
                  <WaitlistForm product="wealthpilot" />
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== KOOVIS STUDIOS ==================== */}
      <section id="studios" className="border-t border-content/10 py-16 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <div className="relative overflow-hidden rounded-2xl border border-content/[0.06] bg-content/[0.02]">
              <div className="absolute right-3 top-3 sm:right-5 sm:top-5 z-10 rounded-full bg-amber-400 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-950">
                In Development
              </div>

              <div className="relative z-[1] p-5 sm:p-8 lg:p-12">
                <SectionLabel>Creative AI</SectionLabel>
                <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-content sm:text-5xl">
                  Koovis Studios
                </h2>
                <p className="mt-1 font-serif text-lg italic text-content-muted">
                  AI pre-visualization for cinema
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-content-muted">
                  Automated pre-viz for Telugu cinema. Script breakdowns to
                  complete pre-visualization: AI-generated imagery, sound
                  effects, and video assembly.
                </p>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {studiosFeatures.map((f, i) => (
                    <AnimateIn key={f.title} delay={0.05 + i * 0.06}>
                      <div className="flex gap-4 rounded-xl border border-content/[0.06] bg-content/[0.02] p-5 transition-colors hover:border-accent/20">
                        <f.icon
                          size={22}
                          className="mt-0.5 flex-shrink-0 text-accent"
                          strokeWidth={1.5}
                        />
                        <div>
                          <h3 className="text-sm font-semibold text-content">
                            {f.title}
                          </h3>
                          <p className="mt-1.5 text-xs leading-relaxed text-content-dim">
                            {f.desc}
                          </p>
                        </div>
                      </div>
                    </AnimateIn>
                  ))}
                </div>

                <div className="mt-10 flex items-center gap-2 text-sm text-content-muted">
                  <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-amber-400" />
                  In active development
                </div>

                <div className="mt-6 max-w-md">
                  <p className="mb-3 text-sm font-semibold text-content">
                    Get notified when Koovis Studios launches
                  </p>
                  <WaitlistForm product="studios" />
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
