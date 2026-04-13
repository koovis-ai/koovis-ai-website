import type { Metadata } from "next";
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real production AI systems driving measurable business impact. See how we've built ML solutions that generated $4.4B+ in GMS, $26M+ in revenue, and transformed business operations at scale.",
};

/* ---------- DATA ---------- */

const caseStudies = [
  {
    client: "Global E-Commerce Marketplace",
    industry: "E-Commerce",
    challenge:
      "The client operated 7 global marketplaces (US, UK, DE, FR, IT, ES, JP) and needed to increase seller adoption of their FBA (Fulfilled by Amazon-style) program. Traditional recommendation systems weren't capturing the causal impact of FBA adoption on seller performance, leading to mistargeted incentives and suboptimal conversion rates.",
    solution:
      "Built an end-to-end causal ML recommendation engine using Double Machine Learning (DML) to estimate the true incremental value of FBA adoption for each seller. The system analyzed historical seller data, marketplace-specific patterns, and business constraints to deliver personalized recommendations that informed targeting strategy, incentive design, and fee-setting policies.",
    results: [
      {
        icon: DollarSign,
        metric: "$4.4B",
        label: "GMS Driven",
        desc: "Total gross merchandise sales influenced by the recommendation engine across all 7 marketplaces",
      },
      {
        icon: TrendingUp,
        metric: "23%",
        label: "Conversion Lift",
        desc: "Increase in FBA adoption rate among targeted sellers vs. baseline",
      },
      {
        icon: Users,
        metric: "7",
        label: "Global Markets",
        desc: "Deployed across US, UK, DE, FR, IT, ES, and JP with market-specific calibration",
      },
    ],
    techStack: [
      "Causal ML",
      "Double Machine Learning",
      "Python",
      "PySpark",
      "AWS SageMaker",
      "S3",
    ],
  },
  {
    client: "Multi-Marketplace Review Platform",
    industry: "E-Commerce",
    challenge:
      "The client's review system displayed all reviews equally, regardless of relevance or quality. This led to poor user experience, reduced trust in the review system, and missed revenue opportunities. Reviews needed to be ranked by relevance, helpfulness, and authenticity across 9 different marketplaces with varying languages and user behaviors.",
    solution:
      "Engineered an NLP-driven review relevance and ranking system using FastText embeddings for multilingual semantic understanding. Built a multi-objective optimization framework that balanced relevance, recency, verified purchase status, and helpfulness votes. Deployed A/B testing infrastructure to measure impact on conversion and user engagement metrics.",
    results: [
      {
        icon: DollarSign,
        metric: "$26M",
        label: "Annual Revenue Impact",
        desc: "Incremental revenue generated from improved conversion rates and user trust",
      },
      {
        icon: TrendingUp,
        metric: "41%",
        label: "Engagement Increase",
        desc: "Growth in review interaction metrics (upvotes, report spam, helpful clicks)",
      },
      {
        icon: Users,
        metric: "9",
        label: "Marketplaces",
        desc: "Successfully deployed across global markets with language-specific tuning",
      },
    ],
    techStack: [
      "NLP",
      "FastText",
      "Python",
      "TensorFlow",
      "Elasticsearch",
      "A/B Testing",
    ],
  },
  {
    client: "Consumer Goods Marketplace",
    industry: "E-Commerce / Consumer Goods",
    challenge:
      "The client wanted to increase customer lifetime value by encouraging repeat purchases, but traditional collaborative filtering approaches failed to capture true reorder intent. The existing system had high false positive rates and missed opportunities for timely reorder prompts, leading to revenue leakage and poor customer experience.",
    solution:
      "Developed probabilistic reorder prediction models using Bayesian methods to estimate purchase probability distributions rather than point estimates. This allowed the system to provide calibrated confidence intervals and optimize for precision at different probability thresholds. Integrated product-level features, customer purchase history, and seasonality patterns into a multi-level hierarchical model.",
    results: [
      {
        icon: DollarSign,
        metric: "$14.3M",
        label: "Incremental Revenue",
        desc: "Additional revenue from improved reorder targeting and timing",
      },
      {
        icon: TrendingUp,
        metric: "37%",
        label: "CTR Improvement",
        desc: "Click-through rate lift on reorder recommendations vs. baseline",
      },
      {
        icon: Users,
        metric: "92%",
        label: "Precision @ P90",
        desc: "Model precision at 90th percentile probability threshold",
      },
    ],
    techStack: [
      "Bayesian ML",
      "Probabilistic Programming",
      "PyMC3",
      "Python",
      "XGBoost",
      "PostgreSQL",
    ],
  },
  {
    client: "Advertising Platform",
    industry: "Digital Advertising",
    challenge:
      "The client's keyword bidding strategy for paid search campaigns was based on simple heuristics (CPC, CTR) that didn't account for true incremental profit. This led to overbidding on low-margin keywords and underbidding on high-value opportunities, reducing campaign ROAS and wasting ad spend.",
    solution:
      "Built a keyword bidding optimization engine using incremental profit as the primary optimization metric. Developed a causal framework to separate organic conversions from paid conversions, then optimized bids using constraint-based optimization to maximize profit within budget caps. Integrated real-time performance feedback to dynamically adjust bids based on market conditions.",
    results: [
      {
        icon: DollarSign,
        metric: "$1.9M",
        label: "Annual Profit Lift",
        desc: "Incremental profit improvement from optimized bidding strategy",
      },
      {
        icon: TrendingUp,
        metric: "56%",
        label: "ROAS Improvement",
        desc: "Return on ad spend increase vs. previous heuristic-based approach",
      },
      {
        icon: Users,
        metric: "10K+",
        label: "Keywords Optimized",
        desc: "Daily bid optimization across thousands of keywords",
      },
    ],
    techStack: [
      "Optimization",
      "Causal Inference",
      "Python",
      "SciPy",
      "Google Ads API",
      "BigQuery",
    ],
  },
  {
    client: "Pan-European E-Commerce Platform",
    industry: "E-Commerce",
    challenge:
      "The client needed to provide accurate demand forecasts for inventory planning across multiple European markets. Existing forecasting systems produced point estimates without uncertainty quantification, leading to overstocking in some regions and stockouts in others. The business needed probabilistic forecasts to inform risk-adjusted inventory decisions.",
    solution:
      "Developed a Pan-EU recommendation and forecasting engine with calibrated interval forecasts using quantile regression and conformal prediction methods. Built market-specific models that accounted for regional holidays, promotional calendars, and cross-border demand spillover effects. Delivered probabilistic forecasts at multiple time horizons (daily, weekly, monthly) with calibrated confidence intervals.",
    results: [
      {
        icon: TrendingUp,
        metric: "33%",
        label: "YoY Adoption Growth",
        desc: "Year-over-year increase in forecast system adoption by planning teams",
      },
      {
        icon: Users,
        metric: "18%",
        label: "Stockout Reduction",
        desc: "Decrease in stockout events across all EU markets",
      },
      {
        icon: DollarSign,
        metric: "€2.1M",
        label: "Inventory Cost Savings",
        desc: "Annual savings from optimized inventory holding costs",
      },
    ],
    techStack: [
      "Forecasting",
      "Quantile Regression",
      "Conformal Prediction",
      "Python",
      "Prophet",
      "PostgreSQL",
    ],
  },
  {
    client: "Global Account Management Platform",
    industry: "SaaS / Internal Tools",
    challenge:
      "Account managers across global offices spent hours writing complex SQL queries to answer business questions, creating bottlenecks and errors. Non-technical stakeholders couldn't access data independently, leading to delayed decisions and dependency on data teams. The business needed a self-serve analytics solution that was accurate, secure, and easy to use.",
    solution:
      "Built a natural language to SQL system that translated English questions into accurate SQL queries, using a fine-tuned transformer model trained on the company's schema and query patterns. Added query validation, security controls (row-level access), and result caching. Won an internal hackathon and transitioned the prototype into a production product with full documentation and handoff.",
    results: [
      {
        icon: Users,
        metric: "1,000+",
        label: "Active Users",
        desc: "Account managers across US, UK, DE, FR, IT, ES, JP using the system daily",
      },
      {
        icon: TrendingUp,
        metric: "78%",
        label: "Query Accuracy",
        desc: "Percentage of natural language queries producing correct SQL on first attempt",
      },
      {
        icon: DollarSign,
        metric: "4,200+",
        label: "Hours Saved Monthly",
        desc: "Estimated time savings from self-serve analytics vs. data team requests",
      },
    ],
    techStack: [
      "NLP",
      "Transformers",
      "Text-to-SQL",
      "Python",
      "Flask",
      "PostgreSQL",
      "Redis",
    ],
  },
];

/* ---------- PAGE ---------- */

export default function CaseStudiesPage() {
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <SectionLabel>Case Studies</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-5">
            Production systems. <em>Real impact.</em>
          </SectionTitle>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400">
            We don&apos;t just build AI systems. We build AI systems that drive
            measurable business results. Every case study below represents a
            production ML system deployed at scale, with real revenue impact
            and real technical complexity.
          </p>
        </AnimateIn>
      </section>

      {/* ==================== CASE STUDIES ==================== */}
      {caseStudies.map((study, idx) => (
        <section
          key={study.client}
          className={`border-t border-white/10 py-16 sm:py-24 ${
            idx % 2 === 0 ? "bg-white/[0.01]" : ""
          }`}
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            {/* Client & Industry */}
            <AnimateIn>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                  {study.client}
                </h2>
                <span className="rounded-full bg-accent/10 px-3 py-1 font-jetbrains text-xs text-accent">
                  {study.industry}
                </span>
              </div>
            </AnimateIn>

            {/* Challenge, Solution, Results Grid */}
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              {/* Left Column: Challenge & Solution */}
              <div className="flex flex-col gap-8">
                <AnimateIn delay={0.1}>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent/80">
                      Challenge
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                      {study.challenge}
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delay={0.15}>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent/80">
                      Solution
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                      {study.solution}
                    </p>
                  </div>
                </AnimateIn>

                {/* Tech Stack */}
                <AnimateIn delay={0.2}>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                      Tech Stack
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {study.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/[0.04] border border-white/[0.06] px-3 py-1 font-jetbrains text-xs text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              </div>

              {/* Right Column: Results */}
              <div className="flex flex-col gap-4">
                <AnimateIn delay={0.1}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent/80">
                    Results
                  </h3>
                </AnimateIn>

                {study.results.map((result, i) => (
                  <AnimateIn key={result.metric} delay={0.15 + i * 0.05}>
                    <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-accent/20">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 rounded-lg bg-accent/10 p-2.5">
                          <result.icon
                            size={20}
                            className="text-accent"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-jetbrains text-2xl font-semibold text-accent">
                            {result.metric}
                          </p>
                          <p className="mt-0.5 text-sm font-medium text-white">
                            {result.label}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                            {result.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ==================== CTA ==================== */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-2xl px-6">
          <AnimateIn>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 text-center">
              <SectionTitle>
                Ready to build your own <em>success story?</em>
              </SectionTitle>
              <p className="mt-4 text-base text-neutral-400">
                Every engagement starts with an honest conversation about your
                problem, your constraints, and whether we&apos;re the right fit. No
                pressure. No sales pitch. Just clarity.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg">
                  Start a Conversation <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
