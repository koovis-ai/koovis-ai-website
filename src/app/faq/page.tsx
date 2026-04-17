import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Koovis AI products, consulting engagements, data handling, and the company.",
  alternates: { canonical: "https://www.koovis.ai/faq" },
};

const faqs = [
  {
    q: "What's available to use right now?",
    a: (
      <>
        <strong>Koovis</strong>, our personal AI assistant, is live at{" "}
        <a
          href="https://pa.koovis.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:opacity-80"
        >
          pa.koovis.ai
        </a>
        . WealthPilot and Koovis Studios are in active development &mdash; you
        can join the waitlist for either on our{" "}
        <Link href="/products" className="text-accent hover:opacity-80">
          Products
        </Link>{" "}
        page to be notified when they launch.
      </>
    ),
  },
  {
    q: "Is WealthPilot open to customers or investors?",
    a: (
      <>
        Not yet. WealthPilot is in its paper-trading phase &mdash; we run it on
        personal capital with a multi-month validation period before
        considering any external access. When external access becomes
        available, waitlist signups will be the first to hear. WealthPilot is
        not registered investment advice and is not being offered as a
        financial product today.
      </>
    ),
  },
  {
    q: "Can I commission a Koovis Studios pre-viz for my film?",
    a: (
      <>
        Not yet. Studios is in active development, with a first demo in
        production. If you&apos;re a filmmaker or producer working in Telugu
        cinema and interested in early access,{" "}
        <Link href="/products#studios" className="text-accent hover:opacity-80">
          join the Studios waitlist
        </Link>
        .
      </>
    ),
  },
  {
    q: "Do you take on AI consulting engagements?",
    a: (
      <>
        We take on a small number of engagements each year &mdash; specifically
        for companies needing production-grade AI engineering, not hypothetical
        roadmaps. The best way to start a conversation is through our{" "}
        <Link href="/contact" className="text-accent hover:opacity-80">
          Contact page
        </Link>{" "}
        (book a 30-minute call directly or send a message).
      </>
    ),
  },
  {
    q: "How is my data handled on Koovis (pa.koovis.ai)?",
    a: (
      <>
        Koovis routes your messages to Claude, GPT, or Gemini depending on the
        task. Each provider&apos;s privacy terms apply to the messages they
        process. We do not train models on your conversations. Full details in
        our{" "}
        <Link href="/privacy" className="text-accent hover:opacity-80">
          Privacy Policy
        </Link>
        .
      </>
    ),
  },
  {
    q: "Where are you based? What's the legal entity?",
    a: (
      <>
        Koovis AI Pvt Ltd, incorporated in March 2026 and based in Hyderabad,
        India. Founder and CEO: Rajesh Kolachana. See the{" "}
        <Link href="/about" className="text-accent hover:opacity-80">
          About page
        </Link>{" "}
        for background.
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <section className="mx-auto max-w-3xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <SectionLabel>FAQ</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-4">
            Common <em>questions.</em>
          </SectionTitle>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-4 text-base leading-relaxed text-content-muted">
            Quick answers on what&apos;s ready, what&apos;s in development, and
            how we work. Don&apos;t see yours?{" "}
            <Link href="/contact" className="text-accent hover:opacity-80">
              Get in touch
            </Link>
            .
          </p>
        </AnimateIn>
      </section>

      {/* ==================== QUESTIONS ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div className="flex flex-col gap-5">
            {faqs.map((item, i) => (
              <AnimateIn key={item.q} delay={0.05 + i * 0.04}>
                <details className="group rounded-2xl border border-content/[0.08] bg-content/[0.02] p-5 open:border-accent/30 open:bg-content/[0.04]">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-content">
                    <span>{item.q}</span>
                    <span className="mt-1 text-accent transition-transform duration-200 group-open:rotate-45 font-light text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-sm leading-relaxed text-content-muted">
                    {item.a}
                  </div>
                </details>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-5 sm:px-6">
          <AnimateIn>
            <div className="rounded-2xl border border-content/[0.06] bg-content/[0.02] p-10 text-center">
              <SectionTitle>
                Still have a <em>question?</em>
              </SectionTitle>
              <p className="mt-4 text-base text-content-muted">
                Book a 30-minute call or send us a message.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg">
                  Get in Touch <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
