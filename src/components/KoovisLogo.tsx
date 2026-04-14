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
      {/* Tapered arc — thick at top, tapering to thin ends, gap at bottom.
          Drawn as a filled shape: outer arc + inner arc with offset for thickness variation */}
      <path
        d="
          M 24.5 24.5
          C 29 20 29 10 26.5 5.5
          C 24 1.5 20 0 16 0
          C 12 0 8 1.5 5.5 5.5
          C 3 10 3 20 7.5 24.5
          C 5.5 21 5.5 14.5 7 10
          C 8.5 5 12 3.5 16 3.5
          C 20 3.5 23.5 5 25 10
          C 26.5 14.5 26.5 21 24.5 24.5
          Z
        "
        fill="currentColor"
      />
    </svg>
  );
}
