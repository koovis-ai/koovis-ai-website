import type { Metadata } from "next";
import {
  ArrowRight,
  Video,
  Languages,
  Timer,
  Palette,
  Users,
  Play,
  Zap,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Koovis Pulse — Indian-Language AI UGC for D2C Brands",
  description:
    "150 vertical UGC ad variants per month in Hindi, Telugu, Tamil. 48-hour turnaround, ₹1.5-6L/month. For ₹100-500 Cr D2C brands running 30-150 creative variants per month. Currently in pilot.",
  alternates: { canonical: "https://www.koovis.ai/pulse" },
};

const whatYouGet = [
  { icon: Video, title: "100-unlimited variants/month", desc: "By tier: 100 Standard / 250 Pro / unlimited Enterprise. 15-30s vertical (9:16) for Reels, Shorts, TikTok. Also 1:1 feed + 16:9 YouTube." },
  { icon: Languages, title: "Hindi + Telugu + Tamil", desc: "Sarvam Bulbul voiceover — the Indian-language TTS that beats ElevenLabs on naturalness. Also: Kannada, Malayalam, Bengali, Marathi via our roadmap." },
  { icon: Timer, title: "48-hour turnaround", desc: "Brief us once. 30 sample variants in the first 48 hours. 24h turnaround on Pro tier. Agency alternatives take 7-14 days." },
  { icon: Palette, title: "Founder-style avatars", desc: "Your voice clone, your face (optional), your brand voice. 5-image character training, ~₹10K one-time per character. Consistent across every variant." },
  { icon: Users, title: "Brand-voice consistency", desc: "Your style doc feeds every variant. No agency drift across freelancers. The pipeline learns what performs best for your brand." },
  { icon: Zap, title: "Built-in A/B framework", desc: "Variant axes: hook (5) × scene (5) × CTA (2) × language (3). Combinatorial library. Your growth team picks winners, we triple down." },
];

const howItWorks = [
  { step: "1", title: "15-min brief", desc: "One short call + 3-5 product photos + brand voice doc. Optional: 30-sec founder voice sample for cloned narration." },
  { step: "2", title: "48h sample batch", desc: "30 sample variants in your first 48 hours — across hook angles and languages." },
  { step: "3", title: "You pick winners", desc: "5-10 variants that land. We triple-down on those axes for the monthly batch." },
  { step: "4", title: "100+ variants/month", desc: "Delivered to your shared Google Drive / Dropbox / S3. MP4 ready to ship on Meta / Google / YouTube / TikTok." },
  { step: "5", title: "Performance loop", desc: "You report back which ones performed. The pipeline learns. Month 2 onwards, output skews toward winners." },
];

const vsCompetitors = [
  {
    name: "Western tools (Arcads, Creatify, Topview)",
    issues: [
      "English-first — your Hindi/Telugu/Tamil ads sound like Google Translate",
      "USD pricing ($19-49/mo entry; enterprise = quote)",
      "No Indian D2C support or buyer expertise",
      "Generic stock-style; no founder voice",
    ],
  },
  {
    name: "Your current Mumbai/Bangalore agency",
    issues: [
      "₹3-5L/month for 30-50 variants — 7-14 day turnaround",
      "Brand drift across briefs (different freelancers, different outputs)",
      "English-first; regional language is an afterthought",
      "Every creative test starts from scratch",
    ],
  },
  {
    name: "Koovis Pulse",
    issues: [
      "Indian-language native (Sarvam Bulbul TTS)",
      "₹1.5-6L/month for 100-unlimited variants — 24-48h turnaround",
      "Brand-voice + character consistency baked into the agent pipeline",
      "Founded by an Indian engineer who built the pipeline from scratch",
    ],
    winner: true,
  },
];

const pricing = [
  { name: "Pilot", price: "₹50,000", cadence: "once", desc: "30 variants, 1 language, 7-day turnaround, best-effort support" },
  { name: "Standard", price: "₹1.5L", cadence: "/month", desc: "100 variants, 3 languages, 48h turnaround, email support" },
  { name: "Pro", price: "₹3L", cadence: "/month", desc: "250 variants, 3 + custom languages, 24h turnaround, Slack channel", highlight: true },
  { name: "Enterprise", price: "₹6L+", cadence: "/month", desc: "Unlimited variants, custom languages, 24h, dedicated CSM" },
];

const faqs = [
  {
    q: "What about my brand voice?",
    a: "We codify it during onboarding — voice doc, hero product photos, your last 5 best-performing creatives — and feed it into every variant. By month 2 the agent learns the patterns that perform best for your specific brand.",
  },
  {
    q: "Will the AI faces look weird?",
    a: "Sometimes — and we catch it before delivery. Every variant is human-reviewed before it lands in your Drive. We reject + regenerate anything with character drift, glitchy hands, or brand-guideline violations. You ship clean.",
  },
  {
    q: "Are these the same Reels everyone's posting?",
    a: "No. We use Runway Gen-4.5, Veo 3.1, Seedance 2.0 (different providers per shot type) plus FLUX.1 Krea for style frames + Hedra Character-3 for talking heads. Every brand gets a unique style anchor + character library. No two brands' variants look the same.",
  },
  {
    q: "What if a variant tanks?",
    a: "Send us the underperformer + the platform metrics. We'll diagnose and re-generate — no charge for failure replacement on Pro and Enterprise tiers.",
  },
  {
    q: "Indian payment terms?",
    a: "GST-compliant invoicing. UPI / NEFT / Card. Net 15 standard. NRI brands billed in USD via Stripe.",
  },
  {
    q: "Can I cancel monthly?",
    a: "Yes. No annual lock-in. We earn your renewal every month or we don't.",
  },
  {
    q: "Who else is doing this?",
    a: "TrueFan AI does Indian wedding videos. Western: Arcads, Creatify, Topview. Indian D2C UGC at this scale: nobody. We're the first.",
  },
];

export default function PulsePage() {
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
              Early access · Taking pilot inquiries
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <h1 className="font-serif text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.1] tracking-tight text-content">
              150 vertical UGC ad variants<br />
              in <span className="text-accent italic">Hindi, Telugu, Tamil.</span><br />
              48 hours. ₹2 lakh.
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-content-muted">
              For Indian D2C brands that test creative weekly and shouldn&apos;t be paying agency rates for it.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="#pricing" size="lg">
                Book 15-min call <ArrowRight size={16} />
              </Button>
              <Button href="#samples" variant="outline" size="lg">
                <Play size={16} /> See sample variants
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== SAMPLE VARIANTS ==================== */}
      <section id="samples" className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Sample variants</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              See the <em>output.</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-content-muted">
              Six variants from a single brief — across verticals, hook angles,
              and Indian languages. A full batch delivers 150 of these in 48
              hours.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-5">
              {[
                { vertical: "Skincare", hook: "Founder hook", lang: "HI", gradient: "from-rose-500/25 to-pink-500/10" },
                { vertical: "Skincare", hook: "Problem-solution", lang: "TA", gradient: "from-amber-500/25 to-orange-500/10" },
                { vertical: "Food & Bev", hook: "Gen-Z hook", lang: "HI", gradient: "from-lime-500/25 to-emerald-500/10" },
                { vertical: "Food & Bev", hook: "Founder hook", lang: "TE", gradient: "from-cyan-500/25 to-blue-500/10" },
                { vertical: "Electronics", hook: "Problem-solution", lang: "TE", gradient: "from-violet-500/25 to-purple-500/10" },
                { vertical: "Electronics", hook: "Gen-Z hook", lang: "TA", gradient: "from-fuchsia-500/25 to-pink-500/10" },
              ].map((variant, i) => (
                <div
                  key={i}
                  className={`group relative aspect-[9/16] overflow-hidden rounded-xl border border-content/[0.08] bg-gradient-to-br ${variant.gradient}`}
                >
                  <div className="absolute inset-0 bg-black/10" />

                  {/* Language badge top-left */}
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-content/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-950 backdrop-blur">
                      {variant.lang}
                    </span>
                  </div>

                  {/* Play indicator center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full border border-white/20 bg-black/30 p-3 backdrop-blur transition-all group-hover:scale-110 group-hover:border-accent group-hover:bg-accent/30">
                      <Play size={14} className="text-white" fill="currentColor" />
                    </div>
                  </div>

                  {/* Metadata bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4">
                    <p className="text-xs sm:text-sm font-semibold text-white">{variant.vertical}</p>
                    <p className="mt-0.5 text-[10px] sm:text-xs text-white/70">{variant.hook}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <p className="mt-10 text-center text-sm text-content-muted">
              Want to see your product run through this pipeline?{" "}
              <a href="#pricing" className="text-accent hover:opacity-80">
                Book a 15-min call
              </a>{" "}
              and we&apos;ll generate 5 live on the call.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== WHAT YOU GET ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>What you get</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Every month, <em>in your shared Drive.</em>
            </SectionTitle>
          </AnimateIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatYouGet.map((item, i) => (
              <AnimateIn key={item.title} delay={0.1 + i * 0.06}>
                <div className="h-full rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6 transition-colors hover:border-accent/20">
                  <item.icon size={24} className="text-accent" strokeWidth={1.5} />
                  <h3 className="mt-5 text-base font-semibold text-content">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-content-muted">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>How it works</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              From brief to <em>winning creative.</em>
            </SectionTitle>
          </AnimateIn>

          <div className="mt-12 flex flex-col gap-4">
            {howItWorks.map((item, i) => (
              <AnimateIn key={item.step} delay={0.1 + i * 0.06}>
                <div className="flex gap-5 rounded-2xl border border-content/[0.06] bg-content/[0.02] p-6">
                  <span className="font-jetbrains text-3xl font-bold text-accent/60 select-none min-w-[50px]">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-content">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-content-muted">{item.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY PULSE ==================== */}
      <section className="border-t border-content/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Why Pulse</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Not another <em>Western tool</em> or <em>Mumbai agency.</em>
            </SectionTitle>
          </AnimateIn>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {vsCompetitors.map((option, i) => (
              <AnimateIn key={option.name} delay={0.1 + i * 0.08}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-6 ${
                    option.winner
                      ? "border-accent/50 bg-accent/[0.03]"
                      : "border-content/[0.08] bg-content/[0.02]"
                  }`}
                >
                  <h3 className={`text-base font-semibold ${option.winner ? "text-accent" : "text-content"}`}>
                    {option.name}
                  </h3>
                  <ul className="mt-5 flex flex-1 flex-col gap-2.5 text-sm text-content-muted">
                    {option.issues.map((issue, j) => (
                      <li key={j} className="flex gap-2">
                        <span className={option.winner ? "text-accent" : "text-content-dim"}>•</span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRICING ==================== */}
      <section id="pricing" className="border-t border-content/10 bg-content/[0.02] py-16 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Pricing</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              From <em>₹50K pilot</em> to unlimited.
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-content-muted">
              No self-serve checkout in V1 — every customer starts on a 15-min call. GST-compliant invoicing.
              Net 15. Cancel anytime.
            </p>
          </AnimateIn>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.map((tier, i) => (
              <AnimateIn key={tier.name} delay={0.1 + i * 0.06}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-6 ${
                    tier.highlight
                      ? "border-accent/50 bg-accent/[0.03]"
                      : "border-content/[0.08] bg-content/[0.02]"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-on">
                      Most popular
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-content">{tier.name}</h3>
                  <p className="mt-3 font-jetbrains text-3xl font-bold text-accent">{tier.price}</p>
                  <p className="mt-1 text-xs text-content-dim">{tier.cadence}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-content-muted">{tier.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.5}>
            <div className="mt-12 max-w-md mx-auto">
              <p className="mb-3 text-center text-sm font-semibold text-content">
                Get notified when Koovis Pulse opens for customers
              </p>
              <WaitlistForm product="pulse" />
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
                  <p className="mt-4 text-sm leading-relaxed text-content-muted">{item.a}</p>
                </details>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
