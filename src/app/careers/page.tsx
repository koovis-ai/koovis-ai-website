import type { Metadata } from "next";
import { ArrowRight, Users, Heart, Target, Compass } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Careers — Koovis AI",
  description:
    "Koovis AI is intentionally small. We're not hiring actively. Here's how we think about team when we do, and how to stay in touch if the philosophy resonates.",
  alternates: { canonical: "https://www.koovis.ai/careers" },
};

const principles = [
  {
    icon: Target,
    title: "Hiring is a constraint, not a growth metric",
    desc: "We hire when a specific, named constraint demands it — not because revenue or user growth says we should. Every role has to earn its seat by unblocking real work that can't happen without it.",
  },
  {
    icon: Heart,
    title: "Small teams, big leverage",
    desc: "One engineer with good tools and the right discipline can ship more than ten without. We'd rather be 3 people shipping 4 products than 30 people shipping 1. Solo now, small forever by default.",
  },
  {
    icon: Compass,
    title: "Product company, not service agency",
    desc: "We build products. Not client work, not consulting engagements. If the work you want is project-based for external customers, this isn't the place. If you want to own something and ship it, keep reading.",
  },
  {
    icon: Users,
    title: "Multi-product generalists",
    desc: "Our team members work across all four products — Workforce, Pulse, Research, Studios — because they share one engine. Deep in one domain, fluent in the others. Specialists welcome, but only if they enjoy stretching.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <section className="mx-auto max-w-4xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <SectionLabel>Careers</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-5">
            Not actively <em>hiring.</em>
          </SectionTitle>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-content-muted">
            Koovis AI is solo right now. When we hire, it will be because a
            specific constraint demands it — and it will be slow, deliberate,
            and carefully matched to the work. Here&apos;s how we think about
            team, so you can decide if the philosophy resonates before any role
            exists.
          </p>
        </AnimateIn>
      </section>

      {/* ==================== PHILOSOPHY ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Hiring philosophy</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              How we think about <em>team.</em>
            </SectionTitle>
          </AnimateIn>

          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2">
            {principles.map((p, i) => (
              <AnimateIn key={p.title} delay={0.1 + i * 0.08}>
                <div className="h-full rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6 sm:p-8">
                  <p.icon size={26} className="text-accent" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-semibold text-content">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-content-muted">
                    {p.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHAT WE DON'T DO ==================== */}
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Honest notes</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              What we <em>don&apos;t</em> offer.
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <ul className="mt-8 space-y-4 text-base leading-relaxed text-content-muted">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>
                  <strong className="text-content">FAANG salaries.</strong> We&apos;re
                  early and bootstrap-funded. Compensation includes meaningful
                  equity and autonomy, but cash compensation is startup-scale.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>
                  <strong className="text-content">Role specialization.</strong> You&apos;ll
                  wear many hats. If you want to be a specialist in one narrow
                  layer, this isn&apos;t the right fit.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>
                  <strong className="text-content">Process-heavy environment.</strong> We
                  prioritize shipping. Ceremony and process will come when
                  scale demands it, not before.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>
                  <strong className="text-content">Immediate remote-first global hiring.</strong>{" "}
                  We&apos;re India-based (Hyderabad HQ + Delaware LLC). First
                  hires will likely be India-based for collaboration density.
                </span>
              </li>
            </ul>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== STAY IN TOUCH ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-5 sm:px-6">
          <AnimateIn>
            <div className="rounded-2xl border border-content/[0.06] bg-content/[0.02] p-10 text-center">
              <Users size={32} className="mx-auto text-accent/60" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif text-2xl font-semibold text-content">
                Stay in touch
              </h3>
              <p className="mt-3 text-base text-content-muted">
                If the philosophy resonates and you&apos;d want to know when we
                do open roles, reach out. We keep an informal list of people
                we&apos;d want to talk to first.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button href="/contact" size="lg">
                  Introduce yourself <ArrowRight size={16} />
                </Button>
                <Button
                  href="https://github.com/koovis-ai/koovis-workforce"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                >
                  Contribute to OSS <ArrowRight size={16} />
                </Button>
              </div>
              <p className="mt-6 text-xs text-content-dim">
                The fastest way to catch our eye is to contribute to the
                open-source Workforce engine.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
