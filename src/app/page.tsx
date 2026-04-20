import type { Metadata } from "next";
import { ArrowRight, Bot, Megaphone, TrendingUp, Clapperboard, FileText, Github } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Koovis AI — AI Infrastructure for Founders, Marketers, Researchers, Filmmakers",
  description:
    "Koovis AI builds four AI products under one brand. Open-source agent workforce, Indian-language UGC ads, equity research, and cinema pre-visualization. Built in India, running globally.",
  alternates: { canonical: "https://www.koovis.ai" },
};

const products = [
  {
    icon: Bot,
    name: "Koovis Workforce",
    tagline: "Delegate your work. Your AI team works while you sleep.",
    desc: "Autonomous AI workforce for multi-product founders. Multi-domain agents — coding, research, content, operations, strategy. Trust Ladder approvals. Open-source MIT engine + hosted SaaS.",
    status: "Launching Q3 2026",
    statusColor: "bg-accent",
    href: "/workforce",
  },
  {
    icon: Megaphone,
    name: "Koovis Pulse",
    tagline: "150 Hindi / Telugu / Tamil UGC ad variants delivered in 48 hours.",
    desc: "Indian-language AI UGC for D2C brands. Founder hooks, Gen-Z hooks, problem-solution angles — localized across Hindi, Telugu, Tamil. 48-hour turnaround. ₹1.5-6L/mo subscription tiers.",
    status: "Early Access",
    statusColor: "bg-green-400",
    href: "/pulse",
  },
  {
    icon: TrendingUp,
    name: "WealthPilot Research",
    tagline: "Ablation-first research on Indian listed companies.",
    desc: "Productized deep-dive research for family offices, PMS, RIAs, and AMC research desks. 5-year OOS validated methodology (Sharpe 0.96, 8/8 validation gates). ₹50K-5L per report, ₹1-10L/mo retainers.",
    status: "Shipping Now",
    statusColor: "bg-green-400",
    href: "/research",
  },
  {
    icon: Clapperboard,
    name: "Koovis Studios",
    tagline: "AI pre-viz for Indian cinema. Screenplay to rough cut.",
    desc: "Automated pre-visualization pipeline for Telugu cinema and beyond. Image generation, multi-character consistency, SFX, music, final video assembly. Research track + Tollywood production inquiries.",
    status: "Research Track",
    statusColor: "bg-amber-400",
    href: "/studios",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden -mt-[72px] pt-[72px]">
        <div className="animated-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/[0.07] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6 text-center">
          <AnimateIn>
            <h1 className="font-serif text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.15] tracking-tight text-content">
              India&apos;s AI-native{" "}
              <span className="text-accent italic">infrastructure.</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-content-muted">
              Four products. One engine. One company. Built in India, running globally —
              for founders, marketers, researchers, and filmmakers.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/workforce" className="inline-flex items-center gap-2 rounded-full border border-content/15 bg-content/[0.04] px-4 py-2 text-sm font-medium text-content transition-colors hover:border-accent/40 hover:bg-accent/5 hover:text-accent">
                <Bot size={14} /> Workforce
              </Link>
              <Link href="/pulse" className="inline-flex items-center gap-2 rounded-full border border-content/15 bg-content/[0.04] px-4 py-2 text-sm font-medium text-content transition-colors hover:border-accent/40 hover:bg-accent/5 hover:text-accent">
                <Megaphone size={14} /> Pulse
              </Link>
              <Link href="/research" className="inline-flex items-center gap-2 rounded-full border border-content/15 bg-content/[0.04] px-4 py-2 text-sm font-medium text-content transition-colors hover:border-accent/40 hover:bg-accent/5 hover:text-accent">
                <TrendingUp size={14} /> Research
              </Link>
              <Link href="/studios" className="inline-flex items-center gap-2 rounded-full border border-content/15 bg-content/[0.04] px-4 py-2 text-sm font-medium text-content transition-colors hover:border-accent/40 hover:bg-accent/5 hover:text-accent">
                <Clapperboard size={14} /> Studios
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== THESIS ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>The thesis</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Infrastructure, not <em>chatbots.</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-content-muted">
              AI is reshaping how businesses operate. We&apos;re building the infrastructure —
              not the chat tools — that capture that shift. Autonomous workflows for
              founders. Localized creative at scale. Research methodology you can audit.
              Production pipelines for Indian cinema. Each product stands on its own,
              all four share one engine, and the engine is open source.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== PRODUCTS ==================== */}
      <section id="products" className="border-t border-content/10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Products</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              What we <em>ship.</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-content-muted">
              Each product has its own conversion path. No single funnel — pick the one
              that fits your work.
            </p>
          </AnimateIn>

          <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-2">
            {products.map((product, i) => (
              <AnimateIn key={product.name} delay={0.1 + i * 0.08}>
                <Link href={product.href} className="block h-full">
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-content/[0.06] bg-content/[0.02] transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5">
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center justify-between">
                        <product.icon size={30} className="text-accent" strokeWidth={1.5} />
                        <span className="flex items-center gap-2 text-xs text-content-dim">
                          <span className={`inline-block h-2 w-2 rounded-full ${product.statusColor}`} />
                          {product.status}
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl sm:text-2xl font-semibold text-content">
                        {product.name}
                      </h3>
                      <p className="mt-2 font-serif text-base italic text-content-muted">
                        {product.tagline}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-content-dim">
                        {product.desc}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent opacity-70 transition-opacity group-hover:opacity-100">
                        Learn more <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== RESEARCH + OSS ==================== */}
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Research + open source</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              We publish negative findings. We open-source our <em>core.</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-content-muted">
              When our own approaches don&apos;t work, we say so with numbers. Our research
              covers autonomous agent framework benchmarks, Indian mid-cap momentum
              ablation studies, AI video model comparisons, and Indian-language TTS. The
              Koovis Workforce engine is MIT-licensed and runs our own operations.
            </p>
          </AnimateIn>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <AnimateIn delay={0.25}>
              <Link href="/papers" className="group block h-full">
                <div className="h-full rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6 sm:p-8 transition-colors hover:border-accent/30">
                  <FileText size={28} className="text-accent" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-semibold text-content">Research papers</h3>
                  <p className="mt-2 text-sm text-content-muted">
                    Published + forthcoming research across all three product verticals. arXiv + SSRN.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent opacity-70 transition-opacity group-hover:opacity-100">
                    Browse papers <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <a
                href="https://github.com/koovis-ai/koovis-workforce"
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6 sm:p-8 transition-colors hover:border-accent/30">
                  <Github size={28} className="text-accent" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-semibold text-content">Open-source engine</h3>
                  <p className="mt-2 text-sm text-content-muted">
                    The Koovis Workforce engine — MIT-licensed. Run it yourself, self-host, or fork it.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent opacity-70 transition-opacity group-hover:opacity-100">
                    github.com/koovis-ai/koovis-workforce <ArrowRight size={14} />
                  </div>
                </div>
              </a>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ==================== FOUNDER ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <div className="border-l-2 border-accent/40 pl-8 sm:pl-12">
            <AnimateIn>
              <SectionLabel>Who we are</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <SectionTitle className="mt-5">
                One founder. Four products. <em>One engine.</em>
              </SectionTitle>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-content-muted">
                Koovis AI is built by Rajesh Kolachana. 11 years in ML engineering,
                7 at Amazon (Senior Data Scientist), IIT Roorkee + IISc Bangalore,
                GATE AIR 5. Koovis AI Pvt Ltd (Hyderabad, India) + Koovis AI LLC (Delaware, USA).
                Currently solo — when we hire, it&apos;s because a specific constraint demands it.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <div className="mt-8">
                <Button href="/about" variant="ghost">
                  Read the full story <ArrowRight size={16} />
                </Button>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
