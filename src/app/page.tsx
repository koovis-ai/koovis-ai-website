import type { Metadata } from "next";
import { ArrowRight, Bot, Megaphone, TrendingUp, Clapperboard, FileText, Github, Play } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Koovis AI — AI Infrastructure for Founders, Marketers, Researchers, Filmmakers",
  description:
    "Koovis AI builds four AI products on a shared engine. An open-source agent workforce, Indian-language UGC ads, equity research, and cinema pre-visualization.",
  alternates: { canonical: "https://www.koovis.ai" },
};

const products = [
  {
    icon: Megaphone,
    name: "Koovis Pulse",
    tagline: "150 Hindi / Telugu / Tamil UGC ad variants in 48 hours.",
    desc: "For D2C brands running 30-150 creative tests per month. Same engine that runs Koovis AI internally, applied to UGC ads.",
    price: "From ₹2L / batch",
    status: "Early access · Taking pilot inquiries",
    statusColor: "bg-green-400",
    href: "/pulse",
    cta: "Book a 15-min Pulse call",
  },
  {
    icon: Bot,
    name: "Koovis Workforce",
    tagline: "Autonomous AI workforce for founders.",
    desc: "Multi-domain agents (coding, research, content, ops, strategy). Trust Ladder approvals. MIT-licensed engine + hosted SaaS.",
    price: "Free (OSS) or from $199/mo",
    status: "Launching Q3 2026",
    statusColor: "bg-accent",
    href: "/workforce",
    cta: "Join the alpha cohort",
  },
  {
    icon: TrendingUp,
    name: "WealthPilot Research",
    tagline: "Ablation-first research on Indian listed companies.",
    desc: "For family offices, boutique PMS, RIAs, AMC research desks. 5-year OOS validated methodology.",
    price: "From ₹50K / report",
    status: "Now accepting research commissions",
    statusColor: "bg-green-400",
    href: "/research",
    cta: "Request sample report",
  },
  {
    icon: Clapperboard,
    name: "Koovis Studios",
    tagline: "AI pre-visualization for Indian cinema.",
    desc: "Screenplay to rough cut. Multi-character shot handling with reference-image binding. Demo v2 in production.",
    price: "Early engagement ₹3-15L",
    status: "Demo v2 in production",
    statusColor: "bg-amber-400",
    href: "/studios",
    cta: "Book Tollywood intro",
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.05] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <Megaphone size={12} /> Pulse · Early access
            </div>
          </AnimateIn>

          <AnimateIn delay={0.05}>
            <h1 className="font-serif text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.1] tracking-tight text-content">
              Turn one brief into{" "}
              <span className="text-accent italic">150 UGC ad variants.</span>
              <br />
              In 48 hours. In three Indian languages.
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-content-muted">
              AI-native creative infrastructure for D2C brands. Part of Koovis AI —
              also powering <Link href="/workforce" className="text-content hover:text-accent">agent workforces</Link>,{" "}
              <Link href="/research" className="text-content hover:text-accent">equity research</Link>, and{" "}
              <Link href="/studios" className="text-content hover:text-accent">cinema pre-viz</Link>.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.25}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/pulse#samples" size="lg">
                <Play size={16} /> Get samples
              </Button>
              <Button href="/pulse#pricing" variant="outline" size="lg">
                Book a call <ArrowRight size={16} />
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== FOUNDER QUOTE + METRICS ==================== */}
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid gap-10 md:grid-cols-5 md:gap-12">
            {/* Founder quote */}
            <AnimateIn delay={0.05}>
              <div className="md:col-span-3">
                <div className="border-l-2 border-accent/40 pl-6 sm:pl-8">
                  <blockquote className="font-serif text-xl sm:text-2xl leading-relaxed text-content">
                    &ldquo;Pulse runs on the engine I&apos;ve used to run 4 Koovis AI
                    products solo for 8 months. Same reliability, applied to D2C
                    creative. This isn&apos;t demo-ware.&rdquo;
                  </blockquote>
                  <p className="mt-5 text-sm text-content-muted">
                    <span className="font-medium text-content">Rajesh Kolachana</span> · Founder, Koovis AI
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Stats */}
            <AnimateIn delay={0.15}>
              <div className="md:col-span-2 grid grid-cols-2 gap-4 sm:gap-5">
                {[
                  { value: "48hr", label: "Turnaround per batch" },
                  { value: "150", label: "Variants per batch" },
                  { value: "3", label: "Indian languages" },
                  { value: "₹2L", label: "Starting price" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-content/[0.06] bg-content/[0.02] p-5"
                  >
                    <p className="font-jetbrains text-2xl sm:text-3xl font-semibold text-accent">
                      {m.value}
                    </p>
                    <p className="mt-2 text-xs leading-snug text-content-dim">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ==================== PRODUCTS ==================== */}
      <section id="products" className="border-t border-content/10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Four products · One engine</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              What we <em>ship.</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-content-muted">
              Pulse is the current revenue anchor. The same engine powers three
              more products, each with its own buyer and its own conversion path.
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

                      <div className="mt-5 inline-flex items-center rounded-full border border-content/10 bg-content/[0.03] px-3 py-1 text-xs font-jetbrains text-content-muted">
                        {product.price}
                      </div>

                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent opacity-70 transition-opacity group-hover:opacity-100">
                        {product.cta} <ArrowRight size={14} />
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
              When our own approaches don&apos;t work, we say so with numbers. Five
              papers across agent-framework benchmarks, Indian mid-cap momentum
              ablation, AI video model benchmarking, and Indian-language TTS. The
              Koovis Workforce engine is MIT-licensed.
            </p>
          </AnimateIn>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <AnimateIn delay={0.25}>
              <Link href="/papers" className="group block h-full">
                <div className="h-full rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6 sm:p-8 transition-colors hover:border-accent/30">
                  <FileText size={28} className="text-accent" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-semibold text-content">Research papers</h3>
                  <p className="mt-2 text-sm text-content-muted">
                    Five papers — published and in submission. arXiv + SSRN. Pacific-Basin
                    Finance Journal, ACM MM 2026, CVPR workshop targets.
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
                    The Koovis Workforce engine — MIT-licensed. Run it yourself,
                    self-host, or fork it.
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
              <SectionLabel>Who builds this</SectionLabel>
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
                GATE AIR 5. Currently solo — when we hire, it&apos;s because a
                specific constraint demands it.
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

      {/* ==================== FINAL CTA ==================== */}
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <AnimateIn>
            <div className="rounded-2xl border border-content/[0.06] bg-content/[0.02] p-10 sm:p-12 text-center">
              <Megaphone size={32} className="mx-auto text-accent/60" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-semibold text-content">
                Running creative tests weekly?
              </h3>
              <p className="mt-3 text-base text-content-muted">
                Pulse can deliver 150 Hindi / Telugu / Tamil UGC ad variants in 48
                hours from one brief, starting at ₹2L per batch.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button href="/pulse#samples" size="lg">
                  <Play size={16} /> Get Pulse samples
                </Button>
                <Button href="/pulse#pricing" variant="outline" size="lg">
                  Book a 15-min call <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
