import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Shield,
  Activity,
  Database,
  Layers,
  Github,
  Lock,
  Users,
  FileCheck,
  GitBranch,
  CheckCircle2,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Koovis Workforce — Autonomous AI Workforce for Founders",
  description:
    "Multi-domain autonomous AI agents with cross-project context, credit-aware multi-provider routing, and a trust-earning autonomy ladder. Open-source MIT engine + hosted SaaS. Founder Solo $199/mo, Pro $499/mo, Team $149/seat/mo.",
  alternates: { canonical: "https://www.koovis.ai/workforce" },
};

/* ---------- DATA ---------- */

const coreFeatures = [
  {
    icon: Bot,
    title: "Multi-Domain Agents",
    desc: "Coding, research, content, operations, strategy. 5 squads with shared context across all your projects. Not a coding-only tool; not a chat-only tool.",
  },
  {
    icon: GitBranch,
    title: "Cross-Project Context",
    desc: "Agents know your entire business — every project, decision, task, and constraint. No more re-explaining context to different tools.",
  },
  {
    icon: Shield,
    title: "Trust Ladder",
    desc: "L0 Propose → L1 Scoped → L2 Autonomous-within-scope → L3 Hands-off. Agents earn autonomy by proving reliable. You control what they can do.",
  },
  {
    icon: Activity,
    title: "Credit-Aware Routing",
    desc: "5 providers (Claude, GPT, Gemini, DeepSeek, Bedrock). Automatic routing picks the cheapest model that can handle the task. Cost drops 60-80% vs single-vendor tools.",
  },
  {
    icon: Database,
    title: "Persistent Memory",
    desc: "SQLite WAL + FTS5 memory layer. Agents remember your projects, decisions, preferences, and patterns across sessions. Context compounds.",
  },
  {
    icon: FileCheck,
    title: "Full Audit Trail",
    desc: "Every agent action logged with reasoning trace, cost, diff, and approval status. Reversibility by default — agents archive instead of delete, draft instead of send.",
  },
];

const trustLadder = [
  {
    level: "L0",
    name: "Propose",
    desc: "Every action is a proposal. You click approve or reject on each one.",
    when: "Default for new users + new squads. Safe. Trust-building.",
  },
  {
    level: "L1",
    name: "Scoped",
    desc: 'You pre-approve action categories (e.g., "this agent can write to `scratch/`, open PRs, post to `#agent-output`").',
    when: "After 5 successful L0 merges for that squad.",
  },
  {
    level: "L2",
    name: "Autonomous-within-scope",
    desc: "Agent runs continuously within defined scope. You review end-of-session summary.",
    when: "After 30 days at L1 + 100 successful runs.",
  },
  {
    level: "L3",
    name: "Hands-off (expert)",
    desc: "Full autonomy within hard guardrails. You review weekly digest.",
    when: "Opt-in only, with explicit acceptance of risk.",
  },
];

const pricing = [
  {
    name: "Self-hosted",
    price: "Free",
    cadence: "MIT open source",
    forWho: "Devs, privacy-conscious, community",
    cta: { label: "View on GitHub", href: "https://github.com/koovis-ai/koovis-workforce", external: true },
    features: [
      "Full engine, yours to run",
      "Bring your own provider keys",
      "13 bundled MCP tools",
      "Community support (Discord)",
    ],
  },
  {
    name: "Founder Solo",
    price: "$199",
    cadence: "per month",
    forWho: "Solo founders, indie hackers",
    cta: { label: "Start 14-day trial", href: "https://workforce.koovis.ai/signup", external: true },
    features: [
      "1 workspace, 3 squads",
      "500 agent-runs/month",
      "Hosted, no ops work",
      "Email support",
    ],
  },
  {
    name: "Founder Pro",
    price: "$499",
    cadence: "per month",
    forWho: "Multi-product founders",
    highlight: true,
    cta: { label: "Start 14-day trial", href: "https://workforce.koovis.ai/signup", external: true },
    features: [
      "3 workspaces, all squads",
      "2,000 agent-runs/month",
      "Cross-project orchestration",
      "Priority model access",
      "Priority support",
    ],
  },
  {
    name: "Team",
    price: "$149",
    cadence: "per seat/month (min 5)",
    forWho: "AI-first teams, small agencies",
    cta: { label: "Contact sales", href: "/contact", external: false },
    features: [
      "Shared workspaces",
      "Team memory + admin",
      "Audit log export",
      "Slack support channel",
    ],
  },
];

const faqs = [
  {
    q: "How is this different from Devin, Cursor, or Manus?",
    a: (
      <>
        <strong>Devin</strong> is coding-only at $500/mo. <strong>Cursor</strong> is synchronous editor-based.{" "}
        <strong>Manus</strong> had persistence issues. <strong>Koovis Workforce</strong> is multi-domain
        (coding + research + content + ops + strategy), has persistent cross-project memory, and uses a Trust
        Ladder so agents earn autonomy instead of getting it all upfront. Positioned between &ldquo;chat tools&rdquo;
        ($20/mo) and &ldquo;hiring a contractor&rdquo; ($5K+/mo) — aimed at multi-product founders.
      </>
    ),
  },
  {
    q: "What makes autonomous agents actually safe?",
    a: (
      <>
        Three architectural principles, hardcoded into the engine:
        <ol className="mt-2 ml-5 list-decimal space-y-1.5">
          <li><strong>Trust Ladder.</strong> Agents start at L0 (propose-only). Users earn higher autonomy after proven reliability.</li>
          <li><strong>Reversibility by default.</strong> Agents archive instead of delete, draft instead of send, open PRs instead of pushing to main.</li>
          <li><strong>Sensitive actions always approval-gated.</strong> Git push to main, DB deletes, external email, payment operations — require explicit approval regardless of ladder level.</li>
        </ol>
      </>
    ),
  },
  {
    q: "Is the engine really open-source?",
    a: (
      <>
        Yes. The core engine — chat backend, multi-provider router, agent orchestrator, MCP tool registry, memory
        layer — is MIT-licensed at{" "}
        <a
          href="https://github.com/koovis-ai/koovis-workforce"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:opacity-80"
        >
          github.com/koovis-ai/koovis-workforce
        </a>
        . Fork it, run it yourself, build on top. The hosted SaaS bundles product-layer features
        (multi-tenant auth, billing, onboarding, team features, plugin marketplace) — those are
        proprietary.
      </>
    ),
  },
  {
    q: "Can I self-host and skip the hosted SaaS?",
    a: (
      <>
        Absolutely. The OSS engine runs standalone — laptop, VM, Docker, your own cloud. Bring your own
        provider keys (Claude, OpenAI, Gemini, Bedrock, DeepSeek). No phone-home, no telemetry by
        default. Hosted SaaS exists for users who want someone else to handle ops.
      </>
    ),
  },
  {
    q: "What providers does credit-aware routing support?",
    a: (
      <>
        Five at v0.1: Claude (direct + AWS Bedrock), OpenAI, Google Gemini (direct + GCP Vertex AI), DeepSeek.
        The router reads your credit balances and picks the cheapest provider that can handle each task.
        Auto-fallback on auth/billing/rate-limit errors. More providers via config; community-contributed.
      </>
    ),
  },
  {
    q: "Do you train on my data?",
    a: (
      <>
        No. We don&apos;t train models on your conversations, workspace content, or agent actions. Each provider
        (Claude, OpenAI, etc.) operates under their own privacy terms. We pick enterprise-grade defaults where
        data is not retained for training. See our Privacy Policy for specifics.
      </>
    ),
  },
  {
    q: "What if agents break something?",
    a: (
      <>
        The Trust Ladder is designed to prevent this. L0 = every action is a proposal you approve. Reversibility
        by default means the blast radius of a bad action is a PR you reject, not production downtime. Sensitive
        actions (git push main, DB delete, email send) always require approval. In 8 months of production use
        (internal dogfood since March 2026), zero catastrophic agent failures.
      </>
    ),
  },
  {
    q: "What's the roadmap?",
    a: (
      <>
        <ul className="mt-2 ml-5 list-disc space-y-1.5">
          <li><strong>Now:</strong> Closed Alpha (20-30 paying users at $99/mo for early feedback)</li>
          <li><strong>Month 2:</strong> Private Beta at full pricing tiers</li>
          <li><strong>Month 3:</strong> Public launch with comparative benchmark paper on arXiv</li>
          <li><strong>Month 4-6:</strong> Team features, plugin marketplace, first vertical tier (PA for Indian Founders)</li>
          <li><strong>Month 9-12:</strong> Enterprise tier (SSO, audit retention, on-prem), native mobile</li>
        </ul>
        See full plan on our <Link href="/blog" className="text-accent hover:opacity-80">blog</Link>.
      </>
    ),
  },
];

/* ---------- PAGE ---------- */

export default function WorkforcePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden -mt-[72px] pt-[72px]">
        <div className="animated-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/[0.07] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 text-center">
          <AnimateIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.05] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
              Live · In production since March 2026
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <h1 className="font-serif text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.15] tracking-tight text-content">
              The autonomous{" "}
              <span className="text-accent italic">AI workforce</span>{" "}
              for founders.
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-content-muted">
              Delegate your work across coding, research, content, and operations. Agents execute with full
              context of your business, using the cheapest model that can handle the task, within scopes you
              control. Every action is reversible and auditable.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="https://workforce.koovis.ai/signup"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                Start 14-day trial <ArrowRight size={16} />
              </Button>
              <Button
                href="https://github.com/koovis-ai/koovis-workforce"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
              >
                <Github size={16} /> Self-host (MIT)
              </Button>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <p className="mt-6 text-sm text-content-dim">
              $199 Solo · $499 Pro · $149/seat Team · Enterprise custom. 14-day trial, cancel anytime.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== THE PROBLEM ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>The problem</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              40-60 hours a month lost to <em>context-switching.</em>
            </SectionTitle>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-content-muted">
              A solo founder running 2-5 products uses 5-8 AI tools daily. Claude.ai for strategy. Cursor for
              code. Notion AI for writing. ChatGPT for research. A custom script for deployment. Each tool has
              its own memory, interface, and prompting pattern. None share context.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <p className="mt-4 text-base leading-relaxed text-content-muted">
              Every switch costs 5-15 minutes of re-explaining. Over a month, that&apos;s 40-60 hours gone —
              not to productive work, not even to meetings. Just to re-establishing context in tools that
              have zero memory of yesterday&apos;s conversation.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <p className="mt-4 text-base leading-relaxed text-content">
              <strong>Koovis Workforce solves that by remembering everything — and acting on it.</strong>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== CORE FEATURES ==================== */}
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>How it works</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Six things <em>no competitor</em> combines.
            </SectionTitle>
          </AnimateIn>

          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((f, i) => (
              <AnimateIn key={f.title} delay={0.1 + i * 0.08}>
                <div className="group h-full overflow-hidden rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6 transition-all hover:border-accent/30">
                  <f.icon size={26} className="text-accent" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-semibold text-content">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-content-muted">{f.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TRUST LADDER ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Trust Architecture</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Agents <em>earn</em> autonomy.
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-content-muted">
              Every user starts at L0 (every action proposed, you approve each one). Agents progress to
              higher levels as they prove reliable. Sensitive actions (git push main, DB delete, external
              email, payments) require approval regardless of level.
            </p>
          </AnimateIn>

          <div className="mt-12 flex flex-col gap-4">
            {trustLadder.map((step, i) => (
              <AnimateIn key={step.level} delay={0.1 + i * 0.08}>
                <div className="flex flex-col gap-4 rounded-2xl border border-content/[0.08] bg-content/[0.02] p-6 sm:flex-row sm:items-start sm:gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 font-jetbrains text-xl font-bold text-accent">
                      {step.level}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-content">{step.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-content-muted">{step.desc}</p>
                    <p className="mt-3 font-jetbrains text-xs uppercase tracking-[0.15em] text-content-dim">
                      {step.when}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== OPEN-CORE ARCHITECTURE ==================== */}
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Open-core</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              MIT engine + <em>hosted SaaS.</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-content-muted">
              Same pattern as Supabase, Cal.com, PostHog, Neon. The core engine is MIT-licensed and lives
              at{" "}
              <a
                href="https://github.com/koovis-ai/koovis-workforce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:opacity-80"
              >
                github.com/koovis-ai/koovis-workforce
              </a>
              . The hosted SaaS wraps the engine with multi-tenant auth, billing, onboarding, and team features.
            </p>
          </AnimateIn>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <AnimateIn delay={0.2}>
              <div className="h-full rounded-2xl border border-accent/30 bg-content/[0.02] p-6">
                <div className="flex items-center gap-3">
                  <Github size={22} className="text-accent" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-content">Engine (MIT open-source)</h3>
                </div>
                <ul className="mt-5 flex flex-col gap-2.5 text-sm leading-relaxed text-content-muted">
                  <li className="flex gap-2.5"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-accent/70" /> Multi-provider chat backend (5 providers)</li>
                  <li className="flex gap-2.5"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-accent/70" /> Credit-aware model router with fallback</li>
                  <li className="flex gap-2.5"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-accent/70" /> Agent orchestrator (squads, budgets, worktrees)</li>
                  <li className="flex gap-2.5"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-accent/70" /> 13 bundled MCP tools</li>
                  <li className="flex gap-2.5"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-accent/70" /> Memory store (SQLite + FTS5)</li>
                  <li className="flex gap-2.5"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-accent/70" /> Starter squad templates</li>
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <div className="h-full rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6">
                <div className="flex items-center gap-3">
                  <Layers size={22} className="text-accent" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-content">Hosted SaaS (proprietary)</h3>
                </div>
                <ul className="mt-5 flex flex-col gap-2.5 text-sm leading-relaxed text-content-muted">
                  <li className="flex gap-2.5"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-accent/70" /> Multi-tenant auth + workspace isolation</li>
                  <li className="flex gap-2.5"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-accent/70" /> Billing (Stripe + Razorpay, GST-compliant)</li>
                  <li className="flex gap-2.5"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-accent/70" /> Guided onboarding + integration wizards</li>
                  <li className="flex gap-2.5"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-accent/70" /> Approval workflow UI + audit dashboard</li>
                  <li className="flex gap-2.5"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-accent/70" /> Team features (shared workspaces, admin)</li>
                  <li className="flex gap-2.5"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-accent/70" /> Plugin marketplace (community tools)</li>
                </ul>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ==================== PRICING ==================== */}
      <section id="pricing" className="border-t border-content/10 py-16 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Pricing</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Priced <em>between chat tools and hiring.</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-content-muted">
              A Koovis agent doing 20-40 hours of work per month at $50-150/hr contractor rate = $1-6K of
              value. We capture a fraction of that. Positioned above chat tools ($20) and below hiring
              ($5K+/mo). Anchored against contractor replacement.
            </p>
          </AnimateIn>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.map((tier, i) => (
              <AnimateIn key={tier.name} delay={0.1 + i * 0.06}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-6 transition-colors ${
                    tier.highlight
                      ? "border-accent/50 bg-accent/[0.03]"
                      : "border-content/[0.08] bg-content/[0.02] hover:border-accent/20"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-on">
                      Primary
                    </div>
                  )}

                  <h3 className="text-lg font-semibold text-content">{tier.name}</h3>
                  <p className="mt-3 font-jetbrains text-3xl font-bold text-accent">
                    {tier.price}
                  </p>
                  <p className="mt-1 text-xs text-content-dim">{tier.cadence}</p>
                  <p className="mt-4 text-sm text-content-muted">{tier.forWho}</p>

                  <ul className="mt-5 flex flex-1 flex-col gap-2 text-sm text-content-muted">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex gap-2">
                        <CheckCircle2 size={14} className="mt-1 flex-shrink-0 text-accent/60" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-content/[0.08] pt-4">
                    {tier.cta.external ? (
                      <a
                        href={tier.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80"
                      >
                        {tier.cta.label} <ArrowRight size={14} />
                      </a>
                    ) : (
                      <Link
                        href={tier.cta.href}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80"
                      >
                        {tier.cta.label} <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.5}>
            <p className="mt-10 text-center text-sm text-content-dim">
              Enterprise: $1,500-5,000/seat/mo — SSO, SLA, audit retention, on-prem option, dedicated
              support.{" "}
              <Link href="/contact" className="text-accent hover:opacity-80">
                Contact sales.
              </Link>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== SECURITY ==================== */}
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Security</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Built for the <em>3 AM scenario.</em>
            </SectionTitle>
          </AnimateIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: Lock,
                title: "Reversibility by default",
                desc: "Agents archive instead of delete. Open PRs instead of pushing to main. Draft email instead of sending. The blast radius of any action is bounded.",
              },
              {
                icon: Shield,
                title: "Hardcoded approval gates",
                desc: "Sensitive actions require approval regardless of trust level. Git push main, DB delete, external email, payments — always gated.",
              },
              {
                icon: FileCheck,
                title: "Full audit trail",
                desc: "Every agent action logged with reasoning trace, cost, and diff. Query history, replay sessions, spot anomalies.",
              },
              {
                icon: Users,
                title: "Self-hosted option",
                desc: "Full data sovereignty. Run on your own infra. No phone-home, no telemetry. Your workspace context stays with you.",
              },
            ].map((item, i) => (
              <AnimateIn key={item.title} delay={0.1 + i * 0.08}>
                <div className="flex gap-4">
                  <item.icon size={22} className="mt-1 flex-shrink-0 text-accent" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-base font-semibold text-content">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-content-muted">{item.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.5}>
            <p className="mt-10 text-sm text-content-dim">
              Responsible disclosure: <a href="mailto:security@koovis.ai" className="text-accent hover:opacity-80">security@koovis.ai</a> ·{" "}
              <a href="https://github.com/koovis-ai/koovis-workforce/blob/main/SECURITY.md" target="_blank" rel="noopener noreferrer" className="text-accent hover:opacity-80">SECURITY.md</a>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>FAQ</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Common <em>questions.</em>
            </SectionTitle>
          </AnimateIn>

          <div className="mt-12 flex flex-col gap-5">
            {faqs.map((item, i) => (
              <AnimateIn key={item.q} delay={0.05 + i * 0.03}>
                <details className="group rounded-2xl border border-content/[0.08] bg-content/[0.02] p-5 open:border-accent/30 open:bg-content/[0.04]">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-content">
                    <span>{item.q}</span>
                    <span className="mt-1 text-accent transition-transform duration-200 group-open:rotate-45 font-light text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-sm leading-relaxed text-content-muted">{item.a}</div>
                </details>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-5 sm:px-6">
          <AnimateIn>
            <div className="rounded-2xl border border-accent/30 bg-accent/[0.03] p-10 text-center">
              <SectionTitle>
                Delegate. Don&apos;t <em>chat.</em>
              </SectionTitle>
              <p className="mt-4 text-base text-content-muted">
                Start a 14-day trial. Cancel anytime. Or self-host the MIT engine today.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  href="https://workforce.koovis.ai/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                >
                  Start 14-day trial <ArrowRight size={16} />
                </Button>
                <Button
                  href="https://github.com/koovis-ai/koovis-workforce"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                >
                  <Github size={16} /> Self-host
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
