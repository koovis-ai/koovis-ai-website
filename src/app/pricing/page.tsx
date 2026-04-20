"use client";

import Link from "next/link";
import { ArrowRight, Megaphone, Bot, TrendingUp, Clapperboard, Check, Github } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";

type Tier = { label: string; price: string; note?: string };

type ProductPricing = {
  icon: typeof Megaphone;
  name: string;
  href: string;
  tagline: string;
  tiers: Tier[];
  includes: string[];
  cta: { label: string; href: string };
  status: string;
  statusColor: string;
};

const products: ProductPricing[] = [
  {
    icon: Megaphone,
    name: "Koovis Pulse",
    href: "/pulse",
    tagline: "Indian-language AI UGC ads for D2C brands",
    status: "Early access",
    statusColor: "bg-green-400",
    tiers: [
      { label: "Starter", price: "₹1.5L / mo", note: "50 variants / month, 1 language" },
      { label: "Growth", price: "₹4L / mo", note: "150 variants / month, 2 languages" },
      { label: "Scale", price: "₹6L / mo", note: "300 variants / month, 3 languages" },
    ],
    includes: [
      "48-hour turnaround per batch",
      "Hindi / Telugu / Tamil",
      "Founder hooks, Gen-Z hooks, problem-solution angles",
      "Shared Drive delivery with monthly recap",
    ],
    cta: { label: "Book a 15-min call", href: "/pulse#pricing" },
  },
  {
    icon: Bot,
    name: "Koovis Workforce",
    href: "/workforce",
    tagline: "Autonomous AI workforce for founders",
    status: "Launching Q3 2026",
    statusColor: "bg-accent",
    tiers: [
      { label: "OSS self-host", price: "Free", note: "MIT-licensed engine, run it yourself" },
      { label: "Solo", price: "$199 / mo", note: "Hosted, 1 user, all 5 squads" },
      { label: "Pro", price: "$499 / mo", note: "Hosted, 1 user, priority support + higher limits" },
      { label: "Team", price: "$149 / seat / mo", note: "Multi-seat, SSO coming" },
      { label: "Enterprise", price: "Custom", note: "SSO, audit retention, on-prem option" },
    ],
    includes: [
      "Multi-domain agents (coding, research, content, ops, strategy)",
      "5-provider credit-aware routing",
      "Trust Ladder approvals",
      "Cross-project memory",
      "14-day trial, cancel anytime",
    ],
    cta: { label: "Join the alpha cohort", href: "/workforce" },
  },
  {
    icon: TrendingUp,
    name: "WealthPilot Research",
    href: "/research",
    tagline: "Ablation-first research on Indian listed companies",
    status: "Accepting commissions",
    statusColor: "bg-green-400",
    tiers: [
      { label: "Single report", price: "₹50K – ₹5L", note: "Per-company deep-dive, 2-3 week turnaround" },
      { label: "Monthly retainer", price: "₹1L – ₹10L / mo", note: "Ongoing coverage + priority requests" },
      { label: "Enterprise research", price: "Custom", note: "Family office / AMC desks / bespoke scope" },
    ],
    includes: [
      "Ablation-first methodology (alternatives ruled out)",
      "DCF + multiples + sensitivity tables",
      "Methodology appendix, reproducible",
      "PDF + raw data delivered via shared Drive",
      "GST-compliant invoicing, Net 15",
    ],
    cta: { label: "Request sample report", href: "/research#pricing" },
  },
  {
    icon: Clapperboard,
    name: "Koovis Studios",
    href: "/studios",
    tagline: "AI pre-visualization for Indian cinema",
    status: "Demo v2 in production",
    statusColor: "bg-amber-400",
    tiers: [
      { label: "Early engagement", price: "₹3L – ₹15L", note: "Per pre-viz project, 1-2 slots available" },
      { label: "Productized (future)", price: "₹5L – ₹25L", note: "Productized tiers opening later in 2026" },
    ],
    includes: [
      "Screenplay → rough cut pipeline",
      "Multi-character shot handling",
      "Telugu-first dialogue (Sarvam Bulbul TTS)",
      "Reference-image character binding",
      "Deliverables: shots, audio, assembled video",
    ],
    cta: { label: "Book Tollywood intro", href: "/studios#waitlist" },
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <section className="mx-auto max-w-4xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <SectionLabel>Pricing</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-5">
            Simple pricing. <em>No self-serve checkout.</em>
          </SectionTitle>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-content-muted">
            Every engagement starts on a call — we want to know if we&apos;re the
            right fit before we take your money. Pricing below is what we
            actually charge. No hidden fees, no surprise renewal bumps.
          </p>
        </AnimateIn>
      </section>

      {/* ==================== PRICING CARDS ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex flex-col gap-8">
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
              <AnimateIn key={product.name} delay={0.05 + i * 0.05}>
                <div className="rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-accent/10 p-3">
                        <Icon size={24} className="text-accent" strokeWidth={1.75} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h2 className="text-xl sm:text-2xl font-semibold text-content">
                            {product.name}
                          </h2>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-content/10 bg-content/[0.03] px-2.5 py-0.5 text-xs text-content-dim">
                            <span className={`h-1.5 w-1.5 rounded-full ${product.statusColor}`} />
                            {product.status}
                          </span>
                        </div>
                        <p className="mt-1 font-serif text-sm italic text-content-muted">
                          {product.tagline}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80"
                    >
                      View product page <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Tiers + includes */}
                  <div className="mt-8 grid gap-6 md:grid-cols-5">
                    {/* Tiers: spans 3 */}
                    <div className="md:col-span-3">
                      <p className="font-jetbrains text-xs uppercase tracking-widest text-content-dim">
                        Tiers
                      </p>
                      <ul className="mt-4 space-y-3">
                        {product.tiers.map((tier) => (
                          <li
                            key={tier.label}
                            className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-content/[0.06] bg-content/[0.02] px-4 py-3"
                          >
                            <div className="flex items-baseline gap-3">
                              <span className="text-sm font-semibold text-content">
                                {tier.label}
                              </span>
                              {tier.note && (
                                <span className="text-xs text-content-dim">
                                  {tier.note}
                                </span>
                              )}
                            </div>
                            <span className="font-jetbrains text-sm font-semibold text-accent">
                              {tier.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Includes: spans 2 */}
                    <div className="md:col-span-2">
                      <p className="font-jetbrains text-xs uppercase tracking-widest text-content-dim">
                        Every tier includes
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {product.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-content-muted">
                            <Check size={14} className="mt-1 flex-shrink-0 text-accent" strokeWidth={2.5} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-content/[0.08] pt-6">
                    <Button href={product.cta.href}>
                      {product.cta.label} <ArrowRight size={16} />
                    </Button>
                    {product.name === "Koovis Workforce" && (
                      <Button
                        href="https://github.com/koovis-ai/koovis-workforce"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                      >
                        <Github size={16} /> Self-host (MIT)
                      </Button>
                    )}
                  </div>
                </div>
              </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== COMMON QUESTIONS ==================== */}
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Common questions</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              About <em>how we price.</em>
            </SectionTitle>
          </AnimateIn>

          <div className="mt-10 space-y-6">
            {[
              {
                q: "Why no self-serve checkout?",
                a: "Every engagement starts on a 15-20 minute call. We want to know if we're the right fit before taking your money. For Pulse and Research, this is also where we scope the first batch or report. Workforce will have self-serve signup when it ships publicly later in 2026.",
              },
              {
                q: "Do you offer discounts or trials?",
                a: "Workforce includes a 14-day trial. Pulse and Research pilots are priced to be evaluable — one month or one report lets you judge the work without committing. We don't run lifetime deals or aggressive discounting; pricing reflects what it actually costs to do the work well.",
              },
              {
                q: "How do enterprise contracts work?",
                a: "Direct contracts with Koovis AI. GST-compliant invoicing for India, standard Net 15 terms by default. MSAs available for multi-engagement arrangements. Enterprise tiers include dedicated onboarding, higher SLA commitments, and in some cases on-prem / VPC deployment for Workforce.",
              },
              {
                q: "What's not included in the listed prices?",
                a: "For Pulse: paid media spend (you run the ads on your own accounts). For Research: third-party data licensing if the scope requires it (we'll flag and price separately). For Studios: production costs beyond pre-viz (VFX, cast, shoot). For Workforce: third-party LLM costs are pass-through at our negotiated rates, shown separately.",
              },
            ].map((item, i) => (
              <AnimateIn key={item.q} delay={0.15 + i * 0.05}>
                <div className="rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6">
                  <h3 className="text-base font-semibold text-content">{item.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-content-muted">
                    {item.a}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-5 sm:px-6">
          <AnimateIn>
            <div className="rounded-2xl border border-content/[0.06] bg-content/[0.02] p-10 text-center">
              <SectionTitle>
                Want a <em>specific quote?</em>
              </SectionTitle>
              <p className="mt-4 text-base text-content-muted">
                Tell us the product and the scope — we&apos;ll reply with pricing
                tailored to your situation within one business day.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button href="/contact" size="lg">
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
