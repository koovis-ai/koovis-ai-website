export default function KoovisLogo({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Arc — 280-degree open circle, gap at right */}
      <path
        d="M 25.2 8.3 A 12 12 0 1 0 25.2 23.7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Center dot */}
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
    </svg>
  );
}
