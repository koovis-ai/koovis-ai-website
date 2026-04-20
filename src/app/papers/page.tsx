import type { Metadata } from "next";
import { ArrowRight, FileText, Download, BookOpen, ExternalLink } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Research Papers — Koovis AI",
  description:
    "Published and forthcoming research from Koovis AI: autonomous agent framework benchmarks, Indian mid-cap momentum ablation study, AI video model benchmarking, character consistency in long-form AI video, Indian-language TTS.",
  alternates: { canonical: "https://www.koovis.ai/papers" },
};

/*
 * TODO (update as papers go live):
 *  - Replace "Forthcoming" with arXiv DOI + SSRN URL + PDF link when published
 *  - Add citation format (BibTeX) per paper
 *  - Add "cited by" count when citations accumulate
 */

type Paper = {
  title: string;
  subtitle: string;
  authors: string;
  project: "Koovis Workforce" | "WealthPilot" | "Koovis Studios";
  status: "forthcoming" | "draft" | "in-submission" | "published";
  targetVenues: string[];
  abstract: string;
  links?: {
    arxiv?: string;
    ssrn?: string;
    pdf?: string;
    code?: string;
  };
};

const papers: Paper[] = [
  {
    title: "Autonomous Agent Frameworks: A Comparative Benchmark Across Founder Workflows",
    subtitle: "50 tasks × 8 frameworks, published negative findings included",
    authors: "Rajesh Kolachana (Koovis AI Pvt Ltd)",
    project: "Koovis Workforce",
    status: "in-submission",
    targetVenues: ["arXiv (cs.AI, cs.MA, cs.SE)", "SSRN", "NeurIPS 2026 Agents Workshop", "AAMAS 2027", "ICLR 2027 Workshop on Agentic AI"],
    abstract:
      "We benchmark Koovis Workforce against 7 other autonomous agent frameworks (CrewAI, LangGraph, AutoGen, OpenAI Agents SDK, Claude Agent SDK, Hermes Agent, Lindy) across 50 multi-domain tasks representative of solo-founder workflows — spanning coding, research, content, operations, and strategy. We evaluate on success rate, cost-per-successful-task, context retention, reversibility, and trust architecture. We publish negative findings about our own framework alongside positive ones. Full benchmark suite released as open-source.",
  },
  {
    title: "Do Regime Filters Add Value? An Ablation Study of Volatility-Adjusted Momentum in Indian Mid-Cap Equities",
    subtitle: "5-year OOS 2021-2025 · 2x2 factorial ablation · reversal of prior 4-year finding",
    authors: "Rajesh Kolachana (Koovis AI Pvt Ltd)",
    project: "WealthPilot",
    status: "in-submission",
    targetVenues: ["arXiv (q-fin.ST, q-fin.TR, stat.AP)", "SSRN", "Pacific-Basin Finance Journal", "Journal of Empirical Finance", "Quantitative Finance"],
    abstract:
      "We run a 5-year out-of-sample (2021-2025) ablation study on Indian mid-cap momentum strategies with a complete 2x2 factorial design on volatility-adjustment and regime-gating. Neither enhancement adds alpha over the full 5-year window; the simplest variant (M1_NoRegimeNoVolAdj) is the only one passing all 8 validation gates (OOS Sharpe 0.96, alpha t-stat 2.05, DSR 0.63, 8/8). Finding reversed the 4-year OOS result, demonstrating OOS period selection's critical impact on ablation conclusions. We also publish a risk management ablation showing full 5-level RiskManager inverts alpha entirely.",
  },
  {
    title: "Benchmarking AI Video Models for Feature-Length Pre-Visualization",
    subtitle: "Multi-provider evaluation with Indian-language focus",
    authors: "Rajesh Kolachana (Koovis AI Pvt Ltd)",
    project: "Koovis Studios",
    status: "draft",
    targetVenues: ["arXiv (cs.CV, cs.MM, cs.AI)", "ACM MM 2026", "SIGGRAPH Asia 2026", "CVPR 2027 workshop"],
    abstract:
      "We benchmark 5 AI video models (Runway Gen-4.5, Veo 3.1, Wan 2.2 14B, LTX-2.3 22B, Seedance 2.0) on full-length pre-visualization tasks spanning character consistency, motion quality, prompt adherence, and cost-per-second. First comparative study focused on Indian-language pre-viz (Telugu dialogue via Sarvam Bulbul + cultural adaptation). Published reproducibility artifacts (prompts, model versions, seeds, sample outputs).",
  },
  {
    title: "Character Consistency in Long-Form AI Video",
    subtitle: "Multi-character pipeline design for feature-length pre-viz",
    authors: "Rajesh Kolachana (Koovis AI Pvt Ltd)",
    project: "Koovis Studios",
    status: "forthcoming",
    targetVenues: ["arXiv → CVPR 2027 workshop"],
    abstract:
      "Best practices for maintaining character consistency across a full-length AI-generated rough cut. Asset-first strategy, cascading generation, reference-image patterns, multi-character shot handling with @tag prompt binding. Covers up to 3 simultaneous characters per shot.",
  },
  {
    title: "Telugu AI Cinema: TTS and Cultural Adaptation",
    subtitle: "Multi-provider Indian-language TTS benchmark",
    authors: "Rajesh Kolachana (Koovis AI Pvt Ltd)",
    project: "Koovis Studios",
    status: "forthcoming",
    targetVenues: ["arXiv → IEEE Transactions on Multimedia"],
    abstract:
      "Comparative benchmark of Indian-language TTS providers (ElevenLabs Multilingual v2, Sarvam Bulbul v3, AI4Bharat IndicF5) on naturalness, emotional range, and cultural adaptation patterns for Telugu cinema pre-viz. Cost-per-minute analysis across hero and bulk dialogue.",
  },
];

const statusConfig = {
  forthcoming: { label: "Forthcoming", color: "bg-content/10 text-content-dim" },
  draft: { label: "In Draft", color: "bg-amber-400/10 text-amber-400 border-amber-400/30" },
  "in-submission": { label: "In Submission", color: "bg-accent/10 text-accent border-accent/30" },
  published: { label: "Published", color: "bg-green-400/10 text-green-400 border-green-400/30" },
};

const projectColor = {
  "Koovis Workforce": "text-accent",
  WealthPilot: "text-accent",
  "Koovis Studios": "text-accent",
};

export default function PapersPage() {
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <section className="mx-auto max-w-4xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <SectionLabel>Research</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-5">
            Papers we&apos;ve <em>published and in flight.</em>
          </SectionTitle>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-content-muted">
            We publish research across all three product verticals — autonomous agent frameworks (Koovis
            Workforce), Indian equity momentum (WealthPilot), AI video + Telugu cinema (Koovis Studios). We
            commit to publishing <strong className="text-content">negative findings</strong> alongside positive
            — when our own approaches don&apos;t work, we say so with numbers.
          </p>
        </AnimateIn>
      </section>

      {/* ==================== PAPERS LIST ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="flex flex-col gap-6">
            {papers.map((paper, i) => {
              const statusBadge = statusConfig[paper.status];
              return (
                <AnimateIn key={paper.title} delay={0.05 + i * 0.05}>
                  <article className="rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6 sm:p-8 transition-colors hover:border-accent/20">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest ${statusBadge.color}`}
                        >
                          {statusBadge.label}
                        </span>
                        <span className={`font-jetbrains text-xs uppercase tracking-[0.15em] ${projectColor[paper.project]}`}>
                          {paper.project}
                        </span>
                      </div>
                    </div>

                    <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-content leading-tight">
                      {paper.title}
                    </h2>

                    <p className="mt-2 font-serif text-base italic text-content-muted">
                      {paper.subtitle}
                    </p>

                    <p className="mt-3 text-sm text-content-dim">
                      {paper.authors}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-content-muted">
                      {paper.abstract}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                      <span className="font-jetbrains text-xs uppercase tracking-[0.15em] text-content-dim">
                        Target venues:
                      </span>
                      {paper.targetVenues.map((venue, j) => (
                        <span key={j} className="text-xs text-content-muted">
                          {venue}
                        </span>
                      ))}
                    </div>

                    {paper.links && (
                      <div className="mt-5 flex flex-wrap items-center gap-4 pt-4 border-t border-content/[0.08]">
                        {paper.links.arxiv && (
                          <a href={paper.links.arxiv} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80">
                            <ExternalLink size={14} /> arXiv
                          </a>
                        )}
                        {paper.links.ssrn && (
                          <a href={paper.links.ssrn} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80">
                            <ExternalLink size={14} /> SSRN
                          </a>
                        )}
                        {paper.links.pdf && (
                          <a href={paper.links.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80">
                            <Download size={14} /> PDF
                          </a>
                        )}
                        {paper.links.code && (
                          <a href={paper.links.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80">
                            <BookOpen size={14} /> Code
                          </a>
                        )}
                      </div>
                    )}
                  </article>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-5 sm:px-6">
          <AnimateIn>
            <div className="rounded-2xl border border-content/[0.06] bg-content/[0.02] p-10 text-center">
              <FileText size={32} className="mx-auto text-accent/60" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif text-2xl font-semibold text-content">
                Get notified when we publish
              </h3>
              <p className="mt-3 text-base text-content-muted">
                We publish ~4-6 papers per year across all three verticals. Subscribe to be notified when each
                paper goes live on arXiv + SSRN.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button href="/contact" size="lg">
                  Subscribe to research updates <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
