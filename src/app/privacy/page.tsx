import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Koovis AI Pvt Ltd. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <SectionLabel>Legal</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-5">
            Privacy <em>Policy.</em>
          </SectionTitle>
        </AnimateIn>
      </section>

      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <p className="text-sm text-content-dim">
            Last updated: April 15, 2026
          </p>

          <h2 className="mt-10 text-lg font-semibold text-content">
            Who we are
          </h2>
          <p className="mt-3 text-base leading-relaxed text-content-muted">
            Koovis AI Pvt Ltd (&ldquo;Koovis AI,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us&rdquo;) is a company registered in Hyderabad,
            Telangana, India. We build AI products and provide AI engineering
            services. You can reach us at{" "}
            <a
              href="mailto:info@koovis.ai"
              className="text-accent hover:underline"
            >
              info@koovis.ai
            </a>
            .
          </p>

          <h2 className="mt-10 text-lg font-semibold text-content">
            Data we collect
          </h2>
          <ul className="mt-3 flex flex-col gap-3 text-base leading-relaxed text-content-muted">
            <li>
              <strong className="text-content">Website analytics.</strong>{" "}
              Vercel Web Analytics collects anonymous, aggregated page-view
              data. No cookies are set and no personal identifiers are stored.
            </li>
            <li>
              <strong className="text-content">Contact form.</strong> When
              you submit our contact form, we collect your name, email
              address, and message. This data is sent via Resend and stored
              only in our email inbox.
            </li>
            <li>
              <strong className="text-content">Newsletter.</strong> If you
              subscribe to our newsletter, your email address is stored by
              Beehiiv, our newsletter provider. You can unsubscribe at any
              time using the link in every email.
            </li>
            <li>
              <strong className="text-content">LinkedIn integration.</strong>{" "}
              If you interact with our services through LinkedIn, we may
              receive profile information (name, headline, profile URL) as
              authorized by LinkedIn&apos;s API and your privacy settings. We
              use this data solely to manage our company page and content.
            </li>
          </ul>

          <h2 className="mt-10 text-lg font-semibold text-content">
            How we use your data
          </h2>
          <p className="mt-3 text-base leading-relaxed text-content-muted">
            We use collected data to respond to inquiries, deliver our
            newsletter, improve our website, and manage our LinkedIn presence.
            We do not sell, rent, or trade your personal information to third
            parties.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-content">
            Third-party services
          </h2>
          <p className="mt-3 text-base leading-relaxed text-content-muted">
            We use the following third-party services that may process your
            data in accordance with their own privacy policies:
          </p>
          <ul className="mt-3 flex flex-col gap-1 text-base leading-relaxed text-content-muted list-disc pl-5">
            <li>Vercel (hosting and analytics)</li>
            <li>Resend (transactional email)</li>
            <li>Beehiiv (newsletter)</li>
            <li>LinkedIn API (company page management)</li>
            <li>AWS (cloud infrastructure)</li>
          </ul>

          <h2 className="mt-10 text-lg font-semibold text-content">
            Cookies
          </h2>
          <p className="mt-3 text-base leading-relaxed text-content-muted">
            This website uses minimal cookies. Vercel Web Analytics does not
            use cookies. Essential cookies may be set by our hosting provider
            for security and performance purposes.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-content">
            Data retention
          </h2>
          <p className="mt-3 text-base leading-relaxed text-content-muted">
            Contact form submissions are retained in our email system
            indefinitely or until you request deletion. Newsletter
            subscriptions are retained until you unsubscribe. Analytics data
            is aggregated and anonymous.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-content">
            Your rights
          </h2>
          <p className="mt-3 text-base leading-relaxed text-content-muted">
            You may request access to, correction of, or deletion of your
            personal data at any time by emailing{" "}
            <a
              href="mailto:info@koovis.ai"
              className="text-accent hover:underline"
            >
              info@koovis.ai
            </a>
            . We will respond within 30 days.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-content">
            Governing law
          </h2>
          <p className="mt-3 text-base leading-relaxed text-content-muted">
            This privacy policy is governed by the laws of India. Any disputes
            shall be subject to the exclusive jurisdiction of the courts in
            Hyderabad, Telangana.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-content">
            Changes to this policy
          </h2>
          <p className="mt-3 text-base leading-relaxed text-content-muted">
            We may update this policy from time to time. Changes will be
            posted on this page with an updated &ldquo;Last updated&rdquo;
            date.
          </p>
        </div>
      </section>
    </>
  );
}
