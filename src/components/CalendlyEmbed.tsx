const CALENDLY_URL = "https://calendly.com/koovis-info/30min";

export default function CalendlyEmbed() {
  const src = `${CALENDLY_URL}?hide_event_type_details=0&hide_gdpr_banner=1&background_color=0a0a0a&text_color=e5e5e5&primary_color=d4a855`;

  return (
    <div className="rounded-2xl border border-content/10 bg-content/[0.02] p-1">
      <iframe
        src={src}
        title="Schedule a call"
        className="h-[760px] w-full rounded-xl"
        loading="lazy"
      />
    </div>
  );
}
