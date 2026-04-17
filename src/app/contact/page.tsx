import type { Metadata } from "next";
import { Mail, MapPin, Clock, Linkedin } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Koovis AI. Based in Hyderabad, India. Product inquiries, partnerships, and general questions.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@koovis.ai",
    href: "mailto:info@koovis.ai",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with us",
    href: "https://linkedin.com/in/rajesh-kolachana-4b7a7b22",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <SectionLabel>Contact</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-4">
            Get in <em>touch.</em>
          </SectionTitle>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-content-muted">
            Product question? Partnership idea? Or just want to say hi? Send us
            a message.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.25}>
          <div className="mt-12">
            <ContactForm />
          </div>
        </AnimateIn>
      </section>

      {/* ==================== BOOK A CALL ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Book a call</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-4">
              Prefer to <em>talk?</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-content-muted">
              Pick a 30-minute slot that works for you.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <div className="mt-10">
              <CalendlyEmbed />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== CONTACT INFO GRID ==================== */}
      <section className="border-t border-content/10 py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, i) => (
              <AnimateIn key={item.label} delay={0.05 * i}>
                <div className="rounded-2xl border border-content/[0.06] bg-content/[0.02] p-5">
                  <item.icon size={20} className="text-accent" />
                  <p className="mt-3 font-jetbrains text-xs uppercase tracking-wider text-content-dim">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-1 block text-sm font-medium text-content hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-content">
                      {item.value}
                    </p>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
