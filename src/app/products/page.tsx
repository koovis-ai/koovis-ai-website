import type { Metadata } from "next";
import {
  ArrowRight,
  Brain,
  Activity,
  Shield,
  FlaskConical,
  TrendingUp,
  Database,
  Bot,
  MessageSquare,
  Mic,
  Upload,
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

export const metadata: Metadata = {
  title: "Products",
  description:
    "AI products by Koovis AI — Koovis personal assistant (live), WealthPilot quantitative trading, and Koovis Studios AI pre-visualization.",
};

/* ---------- DATA ---------- */

const koovisFeatures = [
  {
    icon: MessageSquare,
    title: "Multi-Model Chat",
    desc: "Claude, GPT, and Gemini with intelligent routing. Best model for every query.",
  },
  {
    icon: Bot,
    title: "Tool Use",
    desc: "Web search, file analysis, custom tools. More than conversation.",
  },
  {
    icon: Mic,
    title: "Voice Input",
    desc: "Browser-native speech recognition. Talk instead of type.",
  },
  {
    icon: Upload,
    title: "File Upload",
    desc: "Images, PDFs, documents. Drop and analyze.",
  },
];

const wpFeatures = [
  {
    icon: Brain,
    title: "ML-Driven Signals",
    desc: "Models trained on historical and live market data to identify high-probability setups.",
  },
  {
    icon: Activity,
    title: "Real-Time Processing",
    desc: "Sub-second data ingestion and decision-making at market speed.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    desc: "Position sizing, dynamic stop-loss, portfolio exposure controls. Built in, not bolted on.",
  },
  {
    icon: FlaskConical,
    title: "Backtesting Engine",
    desc: "Validate strategies against years of data before risking real capital.",
  },
  {
    icon: TrendingUp,
    title: "Adaptive Strategies",
    desc: "Models retrain as market regimes shift. No manual intervention.",
  },
  {
    icon: Database,
    title: "Data Pipeline",
    desc: "Production-grade infrastructure for market feeds, alternative data, and feature engineering.",
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
                <SectionLabel>Personal AI</SectionLabel>
                <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-content sm:text-5xl">
                  Koovis
                </h2>
                <p className="mt-1 font-serif text-lg italic text-content-muted">
                  Your personal AI assistant
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-content-muted">
                  Multi-model AI assistant with intelligent routing across
                  Claude, GPT, and Gemini. Conversation history, tool use,
                  voice input, file uploads. Built for daily use.
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
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <div className="relative overflow-hidden rounded-2xl border border-content/[0.06] bg-content/[0.02]">
              <div className="absolute right-3 top-3 sm:right-5 sm:top-5 z-10 rounded-full bg-amber-400 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-950">
                In Development
              </div>

              <div className="relative z-[1] p-5 sm:p-8 lg:p-12">
                <SectionLabel>Quantitative Trading</SectionLabel>
                <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-content sm:text-5xl">
                  WealthPilot
                </h2>
                <p className="mt-1 font-serif text-lg italic text-content-muted">
                  Quantitative trading for Indian equities
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-content-muted">
                  ML-powered quantitative trading that surfaces opportunities
                  traditional analysis misses. Same production rigor behind
                  billion-dollar recommendation systems.
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
                  In active development &mdash; paper trading phase
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
      <section className="border-t border-content/10 py-16 sm:py-24">
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
