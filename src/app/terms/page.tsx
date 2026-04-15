import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Koovis AI Pvt Ltd. Read the terms governing your use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <SectionLabel>Legal</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-5">
            Terms of <em>Service.</em>
          </SectionTitle>
        </AnimateIn>
      </section>

      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <AnimateIn>
            <p className="text-sm text-content-dim">
              Last updated: April 15, 2026
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <h2 className="mt-10 text-lg font-semibold text-content">
              Acceptance of terms
            </h2>
            <p className="mt-3 text-base leading-relaxed text-content-muted">
              By accessing or using the website at{" "}
              <a
                href="https://www.koovis.ai"
                className="text-accent hover:underline"
              >
                koovis.ai
              </a>{" "}
              and any services provided by Koovis AI Pvt Ltd
              (&ldquo;Koovis AI,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;),
              you agree to be bound by these Terms of Service. If you do not
              agree, please do not use our website or services.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <h2 className="mt-10 text-lg font-semibold text-content">
              Description of services
            </h2>
            <p className="mt-3 text-base leading-relaxed text-content-muted">
              Koovis AI builds and operates AI products and provides AI
              engineering consulting services. Our website provides information
              about our company, products, blog content, and a contact form.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <h2 className="mt-10 text-lg font-semibold text-content">
              Intellectual property
            </h2>
            <p className="mt-3 text-base leading-relaxed text-content-muted">
              All content on this website &mdash; including text, graphics,
              logos, and software &mdash; is the property of Koovis AI Pvt Ltd
              or its licensors and is protected by applicable intellectual
              property laws. You may not reproduce, distribute, or create
              derivative works without our prior written consent.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.25}>
            <h2 className="mt-10 text-lg font-semibold text-content">
              User conduct
            </h2>
            <p className="mt-3 text-base leading-relaxed text-content-muted">
              You agree not to use our website or services to transmit harmful,
              unlawful, or objectionable content; attempt to gain unauthorized
              access to our systems; or interfere with the proper functioning of
              our services.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <h2 className="mt-10 text-lg font-semibold text-content">
              Disclaimer
            </h2>
            <p className="mt-3 text-base leading-relaxed text-content-muted">
              Our website and services are provided &ldquo;as is&rdquo; and
              &ldquo;as available&rdquo; without warranties of any kind, whether
              express or implied. We do not guarantee that our services will be
              uninterrupted, error-free, or secure.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.35}>
            <h2 className="mt-10 text-lg font-semibold text-content">
              Limitation of liability
            </h2>
            <p className="mt-3 text-base leading-relaxed text-content-muted">
              To the maximum extent permitted by law, Koovis AI Pvt Ltd shall
              not be liable for any indirect, incidental, special, or
              consequential damages arising from your use of our website or
              services.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <h2 className="mt-10 text-lg font-semibold text-content">
              Governing law
            </h2>
            <p className="mt-3 text-base leading-relaxed text-content-muted">
              These terms are governed by the laws of India. Any disputes
              arising from these terms shall be subject to the exclusive
              jurisdiction of the courts in Hyderabad, Telangana.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.45}>
            <h2 className="mt-10 text-lg font-semibold text-content">
              Changes to these terms
            </h2>
            <p className="mt-3 text-base leading-relaxed text-content-muted">
              We may update these terms from time to time. Changes will be
              posted on this page with an updated &ldquo;Last updated&rdquo;
              date. Continued use of our services after changes constitutes
              acceptance of the revised terms.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.5}>
            <h2 className="mt-10 text-lg font-semibold text-content">
              Contact
            </h2>
            <p className="mt-3 text-base leading-relaxed text-content-muted">
              If you have questions about these terms, contact us at{" "}
              <a
                href="mailto:info@koovis.ai"
                className="text-accent hover:underline"
              >
                info@koovis.ai
              </a>
              .
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
