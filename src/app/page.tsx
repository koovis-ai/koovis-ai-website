import type { Metadata } from "next";
import { ArrowRight, Clapperboard, PenLine, Users, AudioLines } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Koovis Studios — Original Films Made with AI",
  description:
    "Koovis AI is a film studio. We write, perform and direct original films, shorts and series, and use AI to make them. Our first short is in development.",
  alternates: { canonical: "https://www.koovis.ai" },
};

const craft = [
  {
    icon: PenLine,
    title: "Written by people",
    desc: "Every film starts as an original script, written from scratch. AI helps us test structure; the words on screen are ours.",
  },
  {
    icon: Users,
    title: "Performed by people",
    desc: "Real performances anchor every scene. They are filmed for real and used as the reference for the shots we generate.",
  },
  {
    icon: Clapperboard,
    title: "Made with AI",
    desc: "We generate and select shots across several AI models, and keep every prompt and reference so any shot can be remade.",
  },
  {
    icon: AudioLines,
    title: "Finished by craftspeople",
    desc: "Sound design, mixing and the score are done by human artists. Every release carries an AI-generation disclosure.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden -mt-[72px] pt-[72px]">
        <div className="animated-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/[0.07] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6 text-center">
          <AnimateIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.05] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <Clapperboard size={12} /> Koovis Studios
            </div>
          </AnimateIn>

          <AnimateIn delay={0.05}>
            <h1 className="font-serif text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.1] tracking-tight text-content">
              Original films,{" "}
              <span className="text-accent italic">made with AI.</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-content-muted">
              We write, perform and direct our own films, shorts and series, and
              use AI to bring them to the screen. Our first short is in development.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.25}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/studios" size="lg">
                See what we&apos;re making <ArrowRight size={16} />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get in touch <ArrowRight size={16} />
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== HOW WE WORK ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>How we make films</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              The story leads. The tools <em>follow.</em>
            </SectionTitle>
          </AnimateIn>

          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {craft.map((item, i) => (
              <AnimateIn key={item.title} delay={0.1 + i * 0.08}>
                <div className="h-full rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6 sm:p-8">
                  <item.icon size={28} className="text-accent" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-semibold text-content">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-content-dim">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FOUNDER ==================== */}
      <section className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <div className="border-l-2 border-accent/40 pl-8 sm:pl-12">
            <AnimateIn>
              <SectionLabel>Who makes these films</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <SectionTitle className="mt-5">
                Written, directed and <em>performed.</em>
              </SectionTitle>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-content-muted">
                Koovis Studios is led by Raj Kolachana, who writes, directs and
                acts in its films. Before films he spent 11 years in machine
                learning, seven of them at Amazon. He studied at IIT Roorkee and
                IISc Bangalore. Actors, a sound designer and a composer join each
                production.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <div className="mt-8">
                <Button href="/about" variant="ghost">
                  Read the full story <ArrowRight size={16} />
                </Button>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ==================== UPDATES ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <AnimateIn>
            <div className="rounded-2xl border border-content/[0.06] bg-content/[0.02] p-10 sm:p-12 text-center">
              <Clapperboard size={32} className="mx-auto text-accent/60" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-semibold text-content">
                Hear when the first film is out.
              </h3>
              <p className="mt-3 text-base text-content-muted">
                One email when we release something. No more than that.
              </p>
              <div className="mx-auto mt-8 max-w-md">
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
