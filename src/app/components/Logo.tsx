export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle */}
      <circle cx="20" cy="20" r="18" fill="#c4ff61" fillOpacity="0.15" />

      {/* Main N Letter Shape */}
      <path
        d="M12 28V12H15.5L23.5 22.5V12H27V28H23.5L15.5 17.5V28H12Z"
        fill="#c4ff61"
      />

      {/* Accent Dot */}
      <circle cx="31" cy="14" r="2.5" fill="#c4ff61" />

      {/* Tech Lines Decoration */}
      <path
        d="M9 10H11M29 30H31M10 30H12"
        stroke="#c4ff61"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.6"
      />
    </svg>
  );
}
