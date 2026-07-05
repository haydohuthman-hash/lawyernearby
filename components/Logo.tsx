export default function Logo({ dark = false }: { dark?: boolean }) {
  const color = dark ? "#0a0a0a" : "#ffffff";
  return (
    <div className="flex items-center gap-3">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 30V4H18C22.4183 4 26 7.58172 26 12C26 15.5 24 18 20.5 19.2L27 30H21.5L15.8 20.5H9.5V30H4Z"
          stroke={color}
          strokeWidth="2.2"
        />
        <path d="M9.5 9.5H17.5C19.5 9.5 21 11 21 12.8C21 14.6 19.5 15.7 17.5 15.7H9.5V9.5Z" fill={color} />
      </svg>
      <div className="leading-none">
        <div className="font-sans text-[15px] tracking-[0.28em] font-medium" style={{ color }}>
          RESIDENCE
        </div>
        <div
          className="mt-1 font-sans text-[9px] tracking-[0.4em]"
          style={{ color, opacity: 0.7 }}
        >
          — RELOCATIONS —
        </div>
      </div>
    </div>
  );
}
