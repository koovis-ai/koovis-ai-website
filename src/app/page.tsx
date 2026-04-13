import type { Metadata } from "next";
import { ArrowRight, Bot, TrendingUp, Clapperboard } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import NewsletterForm from "@/components/NewsletterForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Koovis AI — We Build AI Products That Work",
  description:
    "Koovis AI builds production-grade AI products — a personal AI assistant, quantitative trading engine, and AI pre-visualization for cinema. Founded by Rajesh Kolachana.",
  alternates: { canonical: "https://www.koovis.ai" },
};

/* ---------- DATA ---------- */

const products = [
  {
    icon: Bot,
    name: "Koovis",
    tagline: "Your personal AI assistant",
    desc: "Multi-model AI assistant powered by Claude, GPT, and Gemini. Conversation history, tool use, and voice input. Built for daily use.",
    status: "Live",
    statusColor: "bg-green-400",
    href: "https://pa.koovis.ai",
    external: true,
  },
  {
    icon: TrendingUp,
    name: "WealthPilot",
    tagline: "Quantitative trading for Indian equities",
    desc: "ML-driven signal generation, backtesting engine, and risk management. Built with the same production rigor behind billion-dollar recommendation systems.",
    status: "In Development",
    statusColor: "bg-amber-400",
    href: "/products",
    external: false,
  },
  {
    icon: Clapperboard,
    name: "Koovis Studios",
    tagline: "AI pre-visualization for cinema",
    desc: "Automated pre-viz pipeline for Telugu cinema using generative AI. Image generation, SFX, audio mixing, and video assembly.",
    status: "In Development",
    statusColor: "bg-amber-400",
    href: "/products",
    external: false,
  },
];

const metrics = [
  {
    value: "$4.4B",
    label: "GMS Driven",
    desc: "Built a recommendation engine using causal ML (Double Machine Learning) that informed targeting, incentive design, and fee-setting across 7 global marketplaces.",
  },
  {
    value: "$26M",
    label: "Annual Revenue",
    desc: "Engineered an NLP-driven review relevance system using FastText embeddings, deployed across 9 marketplaces.",
  },
  {
    value: "$14.3M",
    label: "Incremental Revenue",
    desc: "Created probabilistic reorder models using Bayesian methods, lifting click-through rates by 37%.",
  },
  {
    value: "$1.9M",
    label: "Annual Profit Lift",
    desc: "Built a keyword bidding optimization engine using incremental profit metrics for paid advertising.",
  },
  {
    value: "1,000+",
    label: "Users Globally",
    desc: "Built a natural language to SQL system that became a production product used by account managers worldwide.",
  },
  {
    value: "7",
    label: "Global Marketplaces",
    desc: "Deployed ML systems across US, UK, DE, FR, IT, ES, and JP — each with unique data patterns and business constraints.",
  },
];

/* ---------- PAGE ---------- */

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden -mt-[72px] pt-[72px]">
        {/* Animated grid */}
        <div className="animated-grid pointer-events-none absolute inset-0" />

        {/* Radial glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/[0.07] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 text-center">
          <AnimateIn>
            <h1 className="font-serif text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.15] tracking-tight text-white">
              We build AI products that{" "}
              <span className="text-accent italic">work.</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-400">
              Koovis AI is a product company building intelligent tools for
              everyday use, financial markets, and creative industries. Founded
              by a former Amazon Senior Data Scientist with 11 years of
              shipping production ML systems.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="#products" size="lg">
                See Our Products <ArrowRight size={16} />
              </Button>
              <Button href="/about" variant="outline" size="lg">
                Our Story <ArrowRight size={16} />
              </Button>
            </div>
            <div className="mt-6 flex justify-center">
              <a
                href="https://pa.koovis.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-accent"
              >
                Open Koovis <ArrowRight size={14} />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== PRODUCTS ==================== */}
      <section id="products" className="border-t border-white/10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Products</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Three products. One <em>mission.</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400">
              We build AI products that solve real problems &mdash; not demos
              that impress in pitch decks. Every product is built with
              production-grade engineering.
            </p>
          </AnimateIn>

          <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-3">
            {products.map((product, i) => {
              const Card = (
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5">
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="p-5 sm:p-7">
                    <div className="flex items-center justify-between">
                      <product.icon
                        size={28}
                        className="text-accent"
                        strokeWidth={1.5}
                      />
                      <span className="flex items-center gap-2 text-xs text-neutral-400">
                        <span className={`inline-block h-2 w-2 rounded-full ${product.statusColor}`} />
                        {product.status}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {product.name}
                    </h3>
                    <p className="mt-1 font-serif text-sm italic text-neutral-400">
                      {product.tagline}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                      {product.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      {product.status === "Live" ? "Try it now" : "Learn more"}
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              );

              return (
                <AnimateIn key={product.name} delay={0.1 + i * 0.1}>
                  {product.external ? (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      {Card}
                    </a>
                  ) : (
                    <Link href={product.href} className="block h-full">
                      {Card}
                    </Link>
                  )}
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== FOUNDER ==================== */}
      <section className="border-t border-white/10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <div className="border-l-2 border-accent/40 pl-8 sm:pl-12">
            <AnimateIn>
              <SectionLabel>Founder</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <SectionTitle className="mt-5">
                From Amazon to <em>building in public.</em>
              </SectionTitle>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-neutral-400">
                Koovis AI is built by Rajesh Kolachana &mdash; 11 years in ML
                engineering, 7 of them as a Senior Data Scientist at Amazon.
                IIT Roorkee and IISc Bangalore educated. GATE AIR 5 (top
                0.013% nationally).
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-400">
                After building recommendation engines, NLP systems, and
                advertising optimization tools at Amazon scale, Raj left to
                build his own products. Now based in Hyderabad, India, he&apos;s
                building Koovis AI as a solo founder &mdash; shipping real
                products, not pitching consulting hours.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <div className="mt-8">
                <Button href="/about" variant="ghost">
                  Read the Full Story <ArrowRight size={16} />
                </Button>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ==================== PROVEN IMPACT ==================== */}
      <section className="border-t border-white/10 bg-white/[0.02] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Track Record</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Proven impact at <em>Amazon scale.</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400">
              During 7 years at Amazon (2017&ndash;2024), Rajesh built
              production ML systems that drove measurable business results
              across global marketplaces.
            </p>
          </AnimateIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((m, i) => (
              <AnimateIn key={m.value + m.label} delay={0.05 * i}>
                <div className="group h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-accent/20">
                  <p className="font-jetbrains text-3xl font-semibold text-accent">
                    {m.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {m.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {m.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="border-t border-white/10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-5 sm:px-6">
          <AnimateIn>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 text-center">
              <SectionTitle>
                Stay in the <em>loop.</em>
              </SectionTitle>
              <p className="mt-4 text-base text-neutral-400">
                Product updates, founder stories, and AI engineering
                insights. No spam.
              </p>
              <div className="mt-8 mx-auto max-w-sm">
                <NewsletterForm />
              </div>
              <div className="mt-6">
                <a
                  href="https://pa.koovis.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                >
                  Open Koovis <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
