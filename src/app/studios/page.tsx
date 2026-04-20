import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Film,
  Clapperboard,
  Image,
  Music,
  BookOpen,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Koovis Studios — AI Pre-Visualization for Indian Cinema",
  description:
    "AI pre-visualization for Telugu cinema and OTT content. Multi-character pre-viz with novel agent orchestration. Research track publishing papers on character consistency + Indian-language TTS. Demo v2 shipping; first Tollywood production engagements in 2026.",
  alternates: { canonical: "https://www.koovis.ai/studios" },
};

const capabilities = [
  { icon: Image, title: "Multi-Character Pre-Viz", desc: "Consistent character rendering across a full-length rough cut. Up to 3 characters per shot with @tag prompt binding." },
  { icon: Film, title: "Multi-Provider Routing", desc: "Runway Gen-4.5, Veo 3.1, Wan 2.2 self-hosted. Cheapest-per-quality routing across shot intent (dialogue, volume, establishing)." },
  { icon: Music, title: "Indian-Language TTS", desc: "Sarvam Bulbul v3 for hero dialogue — the Indian-language TTS that beats ElevenLabs on naturalness. AI4Bharat IndicF5 self-hosted for bulk." },
  { icon: Clapperboard, title: "Screenplay → Rough Cut", desc: "5-agent LangGraph pipeline. Screenplay parse → shot planning → generation → audio → QA. End-to-end from pages to MP4." },
];

const researchPapers = [
  {
    title: "Benchmarking AI Video Models for Feature-Length Pre-Viz",
    status: "In draft · arXiv target Q2 2026",
    venues: "ACM MM 2026 / SIGGRAPH Asia 2026",
    desc: "Multi-provider benchmark of Runway, Veo, Wan, LTX, Seedance on character consistency, motion quality, prompt adherence, and cost-per-second. Published negative findings included.",
  },
  {
    title: "Character Consistency in Long-Form AI Video (Paper 2)",
    status: "Draft later 2026",
    venues: "arXiv → CVPR 2027 workshop",
    desc: "Asset-first strategy, cascading generation, reference-image best practices for multi-character feature-length output.",
  },
  {
    title: "Telugu AI Cinema: TTS and Cultural Adaptation (Paper 5)",
    status: "Planned",
    venues: "arXiv → IEEE TMM",
    desc: "Multi-provider Indian-language TTS comparison + cultural adaptation patterns for Telugu cinema pre-viz.",
  },
];

const faqs = [
  {
    q: "Can I commission a pre-viz for my film?",
    a: "Not yet as a full commission. We're in early engagements and shipping Demo v2 (Baahubali Coronation, 240 seconds). If you're a Telugu producer or production house interested in early collaboration, join the waitlist and we'll reach out when productized offerings open.",
  },
  {
    q: "What language is the pre-viz in?",
    a: "Telugu first (hero dialogue via Sarvam Bulbul). Multi-language roadmap: Tamil, Kannada, Malayalam, Hindi, Bengali, Marathi planned. We optimize for Indian-language fidelity; Western tools are English-first.",
  },
  {
    q: "What does this cost?",
    a: "Early-engagement pricing: ₹3-15 Lakhs per pre-viz project. Productized tiers (₹5-25L) will follow once we open general availability. For reference: traditional pre-production is ₹5-50 Crore of production commitment to validate story.",
  },
  {
    q: "What do you publish?",
    a: "Multi-agent architecture papers, character consistency findings, Indian-language TTS benchmarks, economics of AI pre-visualization, legal frameworks for AI content in Indian cinema. Target venues: arXiv, ACM MM, SIGGRAPH Asia, CVPR workshops, IEEE TMM, Computer Law & Security Review.",
  },
  {
    q: "Is this the same engine as Koovis Pulse?",
    a: (
      <>
        Yes — <Link href="/pulse" className="text-accent hover:opacity-80">Koovis Pulse</Link> and Koovis
        Studios share the same <code>koovis-ai-media</code> engine (5-agent LangGraph + Sarvam TTS + Runway/Veo
        gateway). Pulse applies it to D2C UGC ads (short-form, high-volume). Studios applies it to cinema
        pre-viz (long-form, character-heavy). Same pipeline, orthogonal buyers.
      </>
    ),
  },
];

export default function StudiosPage() {
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
              Demo v2 in production
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <h1 className="font-serif text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.15] tracking-tight text-content">
              AI pre-visualization<br />
              for <span className="text-accent italic">Indian cinema.</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-content-muted">
              Screenplay to full-length rough cut. Multi-character consistency. Telugu TTS. Multi-provider
              video routing. Built as research lab + production engagement model.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="#waitlist" size="lg">
                Join waitlist <ArrowRight size={16} />
              </Button>
              <Button href="#research" variant="outline" size="lg">
                <BookOpen size={16} /> Research papers
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== POSITIONING ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>The thesis</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              &ldquo;Will this screenplay <em>actually work</em> as a film?&rdquo;
            </SectionTitle>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-content-muted">
              Answered for ₹3-15 Lakhs instead of ₹5-50 Crore in production risk. Tollywood ships 250-300 films
              a year. Most are low-to-mid budget (₹50L-5Cr) where production risk is existential. Story
              validation before committing is the wedge.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <p className="mt-4 text-base leading-relaxed text-content-muted">
              Studios is positioned as <strong className="text-content">India&apos;s AI cinema research lab — operating productions while publishing breakthrough techniques.</strong> Output targets: 5-7 published papers over 12 months (arXiv → ACM MM / SIGGRAPH Asia / CVPR), 1-2 tier-1 Tollywood production deployments, OTT commissioning conversations.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== CAPABILITIES ==================== */}
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Capabilities</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              What the <em>engine does.</em>
            </SectionTitle>
          </AnimateIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {capabilities.map((item, i) => (
              <AnimateIn key={item.title} delay={0.1 + i * 0.08}>
                <div className="h-full rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6 transition-colors hover:border-accent/20">
                  <item.icon size={26} className="text-accent" strokeWidth={1.5} />
                  <h3 className="mt-5 text-base font-semibold text-content">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-content-muted">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== RESEARCH ==================== */}
      <section id="research" className="border-t border-content/10 py-16 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Research</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Papers <em>published + forthcoming.</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-content-muted">
              We publish negative findings alongside positive ones. Ablation rigor applied to AI cinema.
            </p>
          </AnimateIn>

          <div className="mt-12 flex flex-col gap-4">
            {researchPapers.map((paper, i) => (
              <AnimateIn key={paper.title} delay={0.1 + i * 0.08}>
                <div className="rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-content">{paper.title}</h3>
                    <span className="flex-shrink-0 rounded-full border border-amber-400/30 bg-amber-400/[0.05] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-amber-400">
                      {paper.status}
                    </span>
                  </div>
                  <p className="mt-2 font-jetbrains text-xs uppercase tracking-[0.15em] text-content-dim">
                    Target: {paper.venues}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-content-muted">{paper.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.6}>
            <p className="mt-8 text-sm text-content-dim">
              See all Koovis AI research at{" "}
              <Link href="/papers" className="text-accent hover:opacity-80">
                /papers
              </Link>
              .
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== WAITLIST ==================== */}
      <section id="waitlist" className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Join the waitlist</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              For Telugu producers, OTT commissioners, <em>research collaborators.</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-content-muted">
              Early-engagement pricing: ₹3-15 Lakhs per pre-viz. Productized tiers coming later in 2026.
              We&apos;re selecting 1-2 tier-1 Tollywood engagements for 2026.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="mt-10">
              <WaitlistForm product="studios" />
            </div>
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
    </>
  );
}
