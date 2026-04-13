import type { Metadata } from "next";
import {
  Cpu,
  Layers,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "How Koovis AI builds products — our technology approach, engineering principles, and the stack behind our AI products.",
};

/* ---------- DATA ---------- */

const principles = [
  {
    icon: Cpu,
    title: "Production First",
    desc: "Every product is built for production from day one. No prototypes that never ship. No demos that can't handle real load. Working software, deployed and monitored.",
  },
  {
    icon: Layers,
    title: "Multi-Model Architecture",
    desc: "We don't bet on a single model. Our systems route between Claude, GPT, Gemini, and open-source models — picking the right tool for each task, optimizing for cost and quality.",
  },
  {
    icon: Shield,
    title: "Reliability Over Hype",
    desc: "Automatic failover, health monitoring, and graceful degradation. Our systems stay up when providers go down. We build for the 3 AM scenario, not the demo room.",
  },
  {
    icon: Zap,
    title: "Ship Fast, Ship Often",
    desc: "Solo founder velocity with enterprise-grade quality. Automated CI/CD, comprehensive test suites, and continuous deployment. Small batches, fast feedback loops.",
  },
];

const techStack = [
  {
    category: "AI & ML",
    items: [
      "Claude (Opus, Sonnet, Haiku)",
      "GPT-4.1",
      "Gemini 2.5",
      "PyTorch",
      "scikit-learn",
    ],
  },
  {
    category: "Infrastructure",
    items: [
      "AWS (Bedrock, EC2, S3, SSM)",
      "GCP (Vertex AI)",
      "Vercel",
      "SQLite + Litestream",
      "systemd",
    ],
  },
  {
    category: "Languages & Frameworks",
    items: [
      "Python",
      "TypeScript",
      "Next.js",
      "FastAPI",
      "React",
    ],
  },
  {
    category: "Data & Trading",
    items: [
      "Pandas / NumPy",
      "Bayesian methods",
      "Causal ML",
      "NLP (FastText, transformers)",
      "Real-time market feeds",
    ],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Identify a Real Problem",
    desc: "We build products that solve problems we understand deeply. No hypothetical use cases — every product starts from a genuine need we've experienced firsthand.",
  },
  {
    num: "02",
    title: "Build the Core Fast",
    desc: "Get to working software quickly. Validate with real usage, not surveys. We run our own products daily before considering anyone else as a user.",
  },
  {
    num: "03",
    title: "Harden for Production",
    desc: "Add monitoring, failover, testing, and the operational infrastructure that separates toys from tools. This is where most AI projects die — and where we thrive.",
  },
  {
    num: "04",
    title: "Iterate in Public",
    desc: "Ship updates continuously. Share what we learn. Build trust through transparency, not marketing. The product speaks for itself.",
  },
];

/* ---------- PAGE ---------- */

export default function WhatWeDoPage() {
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <SectionLabel>What We Do</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-5">
            We build AI products with{" "}
            <em>production-grade engineering.</em>
          </SectionTitle>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400">
            Koovis AI is a product company. We build our own AI-powered tools
            and ship them to real users. Here&apos;s how we think about
            building software.
          </p>
        </AnimateIn>
      </section>

      {/* ==================== PRINCIPLES ==================== */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Engineering Principles</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              How we think about <em>building.</em>
            </SectionTitle>
          </AnimateIn>

          <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-2">
            {principles.map((p, i) => (
              <AnimateIn key={p.title} delay={0.1 + i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-accent/30">
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="p-5 sm:p-7">
                    <p.icon
                      size={28}
                      className="text-accent"
                      strokeWidth={1.5}
                    />
                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="border-t border-white/10 bg-white/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Process</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              How we go from idea to <em>shipped product.</em>
            </SectionTitle>
          </AnimateIn>

          <div className="mt-12 sm:mt-16 grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <AnimateIn key={step.num} delay={0.1 + i * 0.08}>
                <div className="relative">
                  <span className="font-jetbrains text-4xl sm:text-5xl lg:text-6xl font-bold text-white/[0.04] select-none leading-none">
                    {step.num}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {step.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TECH STACK ==================== */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Technology</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Our <em>stack.</em>
            </SectionTitle>
          </AnimateIn>

          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((group, i) => (
              <AnimateIn key={group.category} delay={0.1 + i * 0.1}>
                <div className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                  <h3 className="font-jetbrains text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {group.category}
                  </h3>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-neutral-400"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-2xl px-6">
          <AnimateIn>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 text-center">
              <SectionTitle>
                Want to see our work in <em>action?</em>
              </SectionTitle>
              <p className="mt-4 text-base text-neutral-400">
                Try Koovis, our personal AI assistant. It&apos;s live and free
                to use.
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
