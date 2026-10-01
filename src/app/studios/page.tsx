import type { Metadata } from "next";
import { ArrowRight, Film, Tv, PenLine, BookOpen, ListVideo, Wand2, Users, AudioLines, ShieldCheck } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Koovis Studios — Films",
  description:
    "What Koovis Studios is making: original short films and a micro-series, written and performed by people and made with AI.",
  alternates: { canonical: "https://www.koovis.ai/studios" },
};

const slate = [
  {
    icon: Film,
    title: "Short film #1",
    format: "5–8 minutes · English",
    status: "In development",
    desc: "An original drama about a civic issue, told through the people and systems around it.",
  },
  {
    icon: Tv,
    title: "Micro-series",
    format: "5 episodes · 60–90 seconds each",
    status: "Concept",
    desc: "A short-form series for mobile screens, in the language the cast speaks most naturally.",
  },
];

const pipeline = [
  { icon: PenLine, title: "Script", desc: "Logline, beat sheet, treatment, then a full screenplay. Sensitive subjects get an expert read before the script locks." },
  { icon: BookOpen, title: "Story bible", desc: "Characters, wardrobe, voices, palette and lenses, fixed before a single shot is made." },
  { icon: ListVideo, title: "Shot list", desc: "Every shot planned: lens, height, movement, light and continuity." },
  { icon: Users, title: "Performance", desc: "Actors perform each scene for real. Their performance guides the generated shots." },
  { icon: Wand2, title: "Generate and select", desc: "Shots made across several AI models; the best takes chosen by eye, with every prompt and reference kept." },
  { icon: AudioLines, title: "Sound and score", desc: "A sound designer and a composer finish the film after picture lock." },
  { icon: ShieldCheck, title: "Release", desc: "Quality checks, AI-generation labels and signed releases for everyone who appears on screen." },
];

export default function StudiosPage() {
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <SectionLabel>Koovis Studios</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-5">
            What we&apos;re <em>making.</em>
          </SectionTitle>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-content-muted">
            Original stories, written from scratch. We start with shorts and a
            micro-series, and release each one when it&apos;s finished.
          </p>
        </AnimateIn>
      </section>

      {/* ==================== SLATE ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 grid gap-6 md:grid-cols-2">
          {slate.map((item, i) => (
            <AnimateIn key={item.title} delay={0.1 + i * 0.08}>
              <div className="h-full rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <item.icon size={30} className="text-accent" strokeWidth={1.5} />
                  <span className="text-xs text-content-dim">{item.status}</span>
                </div>
                <h3 className="mt-5 text-xl sm:text-2xl font-semibold text-content">{item.title}</h3>
                <p className="mt-2 font-jetbrains text-xs text-content-muted">{item.format}</p>
                <p className="mt-4 text-sm leading-relaxed text-content-dim">{item.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ==================== PIPELINE ==================== */}
      <section id="how" className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>From page to screen</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              How a Koovis film is <em>made.</em>
            </SectionTitle>
          </AnimateIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pipeline.map((step, i) => (
              <AnimateIn key={step.title} delay={0.05 + i * 0.05}>
                <div className="h-full rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6">
                  <div className="flex items-center gap-3">
                    <span className="font-jetbrains text-xs text-content-dim">{String(i + 1).padStart(2, "0")}</span>
                    <step.icon size={22} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-content">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-content-dim">{step.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WORK WITH US + UPDATES ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <AnimateIn>
            <div className="rounded-2xl border border-content/[0.06] bg-content/[0.02] p-10 text-center">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-content">
                Actors, sound designers, composers, festivals.
              </h3>
              <p className="mt-3 text-base text-content-muted">
                If you&apos;d like to work on a Koovis film, or program one, write to us.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/contact" size="lg">
                  Get in touch <ArrowRight size={16} />
                </Button>
              </div>
              <div className="mx-auto mt-10 max-w-md">
                <p className="mb-3 text-sm text-content-muted">Or get one email when a film is released:</p>
                <WaitlistForm
                  product="newsletter"
                  buttonLabel="Notify me"
                  successMessage="Thanks. We'll write when there's a film to watch."
                  compact
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
