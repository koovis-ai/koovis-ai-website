import type { Metadata } from "next";
import {
  ArrowRight,
  FlaskConical,
  Brain,
  Shield,
  TrendingUp,
  FileSearch,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "WealthPilot Research — Ablation-First Research on Indian Equities",
  description:
    "Productized deep-dive research on Indian listed companies for family offices, boutique PMS, RIAs, and AMC research desks. Ablation-first methodology with 5-year OOS validation (Sharpe 0.96, 8/8 gates).",
  alternates: { canonical: "https://www.koovis.ai/research" },
};

const paperStats = [
  { label: "OOS Sharpe", value: "0.96" },
  { label: "Alpha t-stat", value: "2.05" },
  { label: "DSR", value: "0.63" },
  { label: "Validation gates", value: "8/8" },
];

const offering = [
  { icon: FileSearch, title: "Point-in-time universe", desc: "Survivorship-bias-free data. No retrospective selection. Corporate-action adjusted (splits, bonuses, dividends, de-mergers)." },
  { icon: Brain, title: "Full factor decomposition", desc: "Market, size, momentum, value exposures. Distinguishes factor-driven returns from genuine idiosyncratic alpha." },
  { icon: Shield, title: "Rigorous validation", desc: "Bootstrap CIs, Deflated Sharpe Ratio, Probabilistic Sharpe Ratio, walk-forward testing. Not backtest-flattered." },
  { icon: FlaskConical, title: "Ablation appendix", desc: "Every finding tested against its own inverse. How robust is the thesis? If it breaks under alternative specifications, we say so — with numbers." },
  { icon: TrendingUp, title: "Honest downside framing", desc: "What breaks this thesis? Explicit failure modes. When market regimes shift, what changes?" },
  { icon: BookOpen, title: "Methodology transparency", desc: "Every deliverable includes a methodology appendix. Code available on request. Reproducible." },
];

const whoFor = [
  { name: "Family offices", price: "₹50K – ₹5L per report", desc: "Ablation-first second opinion on positions you're sizing up." },
  { name: "Boutique PMS firms", price: "₹1 – 3L per month", desc: "Rigorous research to cite in client letters. 3-5 names per quarter." },
  { name: "Multi-family offices", price: "₹3 – 10L per month", desc: "White-label research for HNI client briefings." },
  { name: "Independent RIAs", price: "₹50K per report", desc: "Differentiated research without broker conflicts." },
  { name: "AMC research desks", price: "Case-by-case", desc: "Supplementary methodology on names under coverage." },
];

const faqs = [
  {
    q: "Are you offering investment advice?",
    a: "No. We publish research. Readers make their own investment decisions. WealthPilot is explicitly a research product, not an advisory, execution, or fund management service.",
  },
  {
    q: "Are you SEBI-registered?",
    a: "No. We do not require SEBI registration because we do not offer investment advice, portfolio management, or execution. Our reports are research deliverables. Users are responsible for their own investment decisions.",
  },
  {
    q: "How long does a report take?",
    a: "Standard deep-dive: 2-3 weeks from engagement. Expedited: 1 week (+₹25K surcharge). Monthly retainers deliver on the 15th of each month.",
  },
  {
    q: "Can I see your methodology in full?",
    a: "Yes. Our validated 5-year OOS ablation paper publishes to arXiv + SSRN in 2026 (target journal: Pacific-Basin Finance Journal). Full methodology appendix in every report. Code available on request.",
  },
  {
    q: "Do you trade the strategies you research?",
    a: "No. Research-only firm. No execution, no proprietary positions, no performance promises.",
  },
  {
    q: "How do you differ from broker research?",
    a: "Three ways: (1) no sell-side conflicts, (2) ablation-first methodology — every claim tested against alternatives, (3) honest negative results published alongside positive ones.",
  },
  {
    q: "Is this Indian equities only?",
    a: "Indian mid-cap + select large-cap coverage is our primary focus. Other markets available on request at bespoke pricing.",
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden -mt-[72px] pt-[72px]">
        <div className="animated-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent/[0.07] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 text-center">
          <AnimateIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/[0.05] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
              Now accepting research commissions
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <h1 className="font-serif text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.15] tracking-tight text-content">
              Ablation-first research<br />
              on <span className="text-accent italic">Indian listed companies.</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-content-muted">
              Productized deep-dive research for family offices, boutique PMS, independent RIAs, and AMC
              research desks. 5-year OOS validated methodology. Published negative findings alongside positive.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="#pricing" size="lg">
                Book 20-min call <ArrowRight size={16} />
              </Button>
              <Button href="#paper" variant="outline" size="lg">
                <BookOpen size={16} /> Read the paper
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== RESEARCH ANCHOR ==================== */}
      <section id="paper" className="border-t border-content/10 py-16 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>The research anchor</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              An 8-month, 5-year OOS ablation study.
            </SectionTitle>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-content-muted">
              We studied Indian mid-cap momentum strategies across a complete 5-year out-of-sample window
              (2021-2025). The finding that reversed prior consensus: <strong className="text-content">
              neither volatility-adjustment nor regime-gating adds alpha</strong>. The simplest variant — raw
              momentum — is the only one passing all 8 validation gates.
            </p>
          </AnimateIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            {paperStats.map((stat) => (
              <AnimateIn key={stat.label}>
                <div className="rounded-2xl border border-accent/20 bg-accent/[0.03] p-5 text-center">
                  <p className="font-jetbrains text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-content-dim">{stat.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.4}>
            <p className="mt-8 text-sm text-content-dim">
              <em>&ldquo;Do Regime Filters Add Value? An Ablation Study of Volatility-Adjusted Momentum in Indian Mid-Cap Equities.&rdquo;</em>{" "}
              In submission to arXiv + SSRN · target journals: Pacific-Basin Finance Journal, Journal of
              Empirical Finance, Quantitative Finance.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== WHAT WE OFFER ==================== */}
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>What we offer</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              From research framework to <em>productized deep-dives.</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-content-muted">
              Every report applies the same ablation-first methodology to individual Indian listed companies.
            </p>
          </AnimateIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offering.map((item, i) => (
              <AnimateIn key={item.title} delay={0.1 + i * 0.06}>
                <div className="h-full rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6 transition-colors hover:border-accent/20">
                  <item.icon size={24} className="text-accent" strokeWidth={1.5} />
                  <h3 className="mt-5 text-base font-semibold text-content">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-content-muted">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.6}>
            <div className="mt-10 rounded-2xl border border-content/[0.08] bg-content/[0.02] p-6">
              <h4 className="text-base font-semibold text-content">Every engagement includes:</h4>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  "PDF report (15-30 pages) with full methodology + code availability",
                  "1-hour analyst call to walk through findings + Q&A",
                  "Data package (CSV / Parquet) for your own rerun",
                  "Raw code / notebook on request (Python / R)",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-content-muted">
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-accent/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== WHO THIS IS FOR ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Who this is for</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Buyers who value <em>rigor over volume.</em>
            </SectionTitle>
          </AnimateIn>

          <div className="mt-12 flex flex-col gap-4">
            {whoFor.map((audience, i) => (
              <AnimateIn key={audience.name} delay={0.1 + i * 0.06}>
                <div className="flex flex-col gap-3 rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-content">{audience.name}</h3>
                    <p className="mt-1 text-sm text-content-muted" dangerouslySetInnerHTML={{ __html: audience.desc }} />
                  </div>
                  <div className="flex-shrink-0">
                    <p className="font-jetbrains text-sm font-semibold text-accent">{audience.price}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SAMPLE REPORT (Placeholder) ==================== */}
      <section id="sample" className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Sample report</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              See the <em>methodology in action.</em>
            </SectionTitle>
          </AnimateIn>

          {/* TODO: Replace placeholder with specific sample company + thesis + findings once Raj chooses */}
          <AnimateIn delay={0.3}>
            <div className="mt-12 rounded-2xl border border-dashed border-content/20 bg-content/[0.01] p-12 text-center">
              <FileSearch size={32} className="mx-auto text-accent/60" strokeWidth={1.5} />
              <p className="mt-4 text-sm text-content-dim">
                First sample report in preparation. Subscribe below to be notified when the PDF is available.
              </p>
              <div className="mt-6">
                <Button href="#pricing" variant="outline">
                  Join waitlist <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== PRICING / WAITLIST ==================== */}
      <section id="pricing" className="border-t border-content/10 py-16 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Pricing</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              From <em>₹50K per report</em> to enterprise white-label.
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-content-muted">
              No self-serve checkout. Every engagement starts on a 20-min call. GST-compliant invoicing. Net 15
              standard. Enterprise contracts signed directly with Koovis AI Pvt Ltd.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="mt-12">
              <p className="mb-3 text-sm font-semibold text-content">
                Get notified when WealthPilot Research opens for customers
              </p>
              <WaitlistForm product="wealthpilot" />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24">
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
                  <p className="mt-4 text-sm leading-relaxed text-content-muted">{item.a}</p>
                </details>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
