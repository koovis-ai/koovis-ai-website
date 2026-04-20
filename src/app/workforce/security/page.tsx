"use client";

import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Lock,
  Eye,
  RotateCcw,
  Server,
  FileCheck,
  AlertTriangle,
  Mail,
  Github,
  Key,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";

const trustLadder = [
  { level: "L0 Propose", desc: "Every agent action is a proposal that requires human approval before execution. Default for new users and sensitive workflows." },
  { level: "L1 Scoped", desc: "Agent executes within explicit scopes you define (specific repos, specific projects, specific tools). Actions outside scope still require approval." },
  { level: "L2 Autonomous-within-scope", desc: "Agent executes autonomously within earned scopes. Sensitive actions still gate; routine tasks don't." },
  { level: "L3 Hands-off", desc: "Maximum autonomy on approved workflows. Sensitive actions always gate regardless of level. Reserved for mature workflows with track records." },
];

const pillars = [
  {
    icon: Lock,
    title: "Data handling",
    desc: "Your conversations, workspace content, and agent actions stay yours. We don't train models on your data. Each LLM provider's privacy terms apply to the messages they process. Self-hosted deployment keeps everything inside your VPC.",
  },
  {
    icon: Shield,
    title: "Approval gates on sensitive actions",
    desc: "Regardless of Trust Ladder level, actions with irreversible or externally-visible consequences always require explicit approval. This includes: git push to main, database deletions, external email sends, payments, and anything that crosses a system boundary.",
  },
  {
    icon: RotateCcw,
    title: "Reversibility by default",
    desc: "Agent actions are designed to be reversible where possible. Code changes land as PRs (reject to undo), file operations can be rolled back, and memory mutations are versioned. The blast radius of a bad action is a PR you close, not production downtime.",
  },
  {
    icon: Eye,
    title: "Audit log",
    desc: "Every agent action is recorded — who triggered it, what the agent did, which LLM provider ran the inference, how much it cost, and what the outcome was. Logs are queryable and exportable. Retention configurable per plan.",
  },
  {
    icon: Key,
    title: "Bring your own keys",
    desc: "You can bring your own API keys for Claude, OpenAI, Gemini, Bedrock, and DeepSeek. Your keys, your inference costs, your privacy relationship with each provider. We pass requests through without intermediate storage.",
  },
  {
    icon: Server,
    title: "Self-hosted option",
    desc: "The engine is MIT-licensed. Run it on your own infrastructure — AWS, GCP, or your own data center. For enterprise customers who need regulatory control, the hosted product will also ship a VPC deployment option.",
  },
];

export default function SecurityPage() {
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <section className="mx-auto max-w-4xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.05] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            <Shield size={12} /> Koovis Workforce
          </div>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-2">
            Security, trust, and <em>the Trust Ladder.</em>
          </SectionTitle>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-content-muted">
            Autonomous agents with access to your code, data, and accounts need
            to be safe by default. Here&apos;s how we think about it, and the
            mechanisms we build to keep blast radius low.
          </p>
        </AnimateIn>
      </section>

      {/* ==================== TRUST LADDER ==================== */}
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>The Trust Ladder</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Trust is <em>earned, not granted.</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-content-muted">
              Agent autonomy is a ladder, not a switch. Every agent starts at L0.
              You grant scope incrementally as you see work you trust. Sensitive
              actions always gate, regardless of level.
            </p>
          </AnimateIn>

          <div className="mt-12 space-y-4">
            {trustLadder.map((level, i) => (
              <AnimateIn key={level.level} delay={0.1 + i * 0.05}>
                <div className="flex gap-5 rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6">
                  <span className="flex-shrink-0 font-jetbrains text-sm font-semibold text-accent min-w-[140px]">
                    {level.level}
                  </span>
                  <p className="text-sm leading-relaxed text-content-muted">
                    {level.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PILLARS ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Security pillars</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Six <em>concrete mechanisms.</em>
            </SectionTitle>
          </AnimateIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
              <AnimateIn key={pillar.title} delay={0.1 + i * 0.05}>
                <div className="h-full rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6 sm:p-7">
                  <Icon size={24} className="text-accent" strokeWidth={1.75} />
                  <h3 className="mt-5 text-lg font-semibold text-content">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-content-muted">
                    {pillar.desc}
                  </p>
                </div>
              </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== COMPLIANCE ROADMAP ==================== */}
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Compliance roadmap</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Honest about what we <em>do</em> and <em>don&apos;t</em> have.
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-content-muted">
              We don&apos;t yet hold formal certifications. We&apos;re early, and we&apos;d
              rather be clear about that than wave badges we haven&apos;t earned.
              Here&apos;s where we stand and where we&apos;re headed.
            </p>
          </AnimateIn>

          <div className="mt-10 space-y-3">
            {[
              { status: "Today", item: "Self-hosted deployment via MIT-licensed engine — run it on your own infra with full control." },
              { status: "Today", item: "Bring-your-own-keys for all five LLM providers — your inference relationship, not ours." },
              { status: "Today", item: "Complete audit log of agent actions, queryable and exportable." },
              { status: "Q4 2026", item: "Hosted VPC deployment option for enterprise customers with data-residency requirements." },
              { status: "2027", item: "SOC 2 Type II audit — target Q2 2027, gated on enterprise customer demand." },
              { status: "2027+", item: "ISO 27001 — evaluated based on EU enterprise customer pipeline." },
              { status: "Not planned", item: "FedRAMP, HIPAA, PCI-DSS. If you need these, self-hosted may be the right fit." },
            ].map((row, i) => (
              <AnimateIn key={i} delay={0.15 + i * 0.04}>
                <div className="flex gap-4 rounded-xl border border-content/[0.06] bg-content/[0.02] p-4">
                  <span className="flex-shrink-0 font-jetbrains text-xs font-semibold uppercase tracking-widest text-accent min-w-[90px]">
                    {row.status}
                  </span>
                  <p className="text-sm leading-relaxed text-content-muted">
                    {row.item}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INCIDENT RESPONSE ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Incident response</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Report a <em>vulnerability.</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-content-muted">
              Found a security issue? We&apos;d rather hear about it from you than
              read about it in the news.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="mt-8 space-y-4">
              <div className="rounded-xl border border-content/[0.06] bg-content/[0.02] p-5">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-accent" strokeWidth={2} />
                  <a href="mailto:info@koovis.ai?subject=Security%20Disclosure" className="text-sm font-medium text-content hover:text-accent">
                    info@koovis.ai
                  </a>
                </div>
                <p className="mt-2 text-xs text-content-dim">
                  We acknowledge within 48 hours and aim to ship fixes within
                  14 days for high-severity issues.
                </p>
              </div>

              <div className="rounded-xl border border-content/[0.06] bg-content/[0.02] p-5">
                <div className="flex items-center gap-3">
                  <Github size={18} className="text-accent" strokeWidth={2} />
                  <a href="https://github.com/koovis-ai/koovis-workforce/security" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-content hover:text-accent">
                    github.com/koovis-ai/koovis-workforce/security
                  </a>
                </div>
                <p className="mt-2 text-xs text-content-dim">
                  For vulnerabilities in the open-source engine, use
                  GitHub&apos;s private security advisory flow.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-5 sm:px-6">
          <AnimateIn>
            <div className="rounded-2xl border border-content/[0.06] bg-content/[0.02] p-10 text-center">
              <AlertTriangle size={32} className="mx-auto text-accent/60" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif text-2xl font-semibold text-content">
                Questions before you evaluate?
              </h3>
              <p className="mt-3 text-base text-content-muted">
                We answer security questions on a call. No security questionnaire
                template refusals — tell us what you need to know and we&apos;ll
                respond in plain English.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button href="/contact" size="lg">
                  Book a security review <ArrowRight size={16} />
                </Button>
                <Link
                  href="/workforce"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-80"
                >
                  <FileCheck size={14} /> Back to Workforce
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
