import { ArrowUpRight, Braces, Sparkles } from 'lucide-react'

export function OrbitGraphic() {
  return (
    <div className="orbit-art" aria-hidden="true">
      <div className="orbit-glow" />
      <span className="art-coordinate coordinate-top">IDEAS → EXPERIENCES</span>
      <svg className="orbital-sphere" viewBox="0 0 500 500" fill="none">
        <defs>
          <linearGradient
            id="sphere-stroke"
            x1="100"
            y1="80"
            x2="430"
            y2="410"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D1C0FF" stopOpacity=".8" />
            <stop offset=".5" stopColor="#A78BFA" stopOpacity=".28" />
            <stop offset="1" stopColor="#A78BFA" stopOpacity=".05" />
          </linearGradient>
          <radialGradient id="sphere-fill">
            <stop stopColor="#A78BFA" stopOpacity=".065" />
            <stop offset="1" stopColor="#A78BFA" stopOpacity=".008" />
          </radialGradient>
        </defs>
        <circle cx="250" cy="250" r="170" fill="url(#sphere-fill)" />
        <g stroke="url(#sphere-stroke)" strokeWidth=".8" transform="rotate(-28 250 250)">
          <circle cx="250" cy="250" r="170" />
          {[30, 60, 90, 120, 148].map((rx) => (
            <ellipse key={`v-${rx}`} cx="250" cy="250" rx={rx} ry="170" />
          ))}
          {[30, 60, 90, 120, 148].map((ry) => (
            <ellipse key={`h-${ry}`} cx="250" cy="250" rx="170" ry={ry} />
          ))}
          <path d="M80 250h340M250 80v340" />
        </g>
        <ellipse
          cx="250"
          cy="250"
          rx="224"
          ry="66"
          transform="rotate(-35 250 250)"
          stroke="#B29BF1"
          strokeOpacity=".45"
          strokeWidth=".8"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="213"
          ry="191"
          transform="rotate(25 250 250)"
          stroke="#A78BFA"
          strokeOpacity=".1"
          strokeWidth=".6"
          strokeDasharray="3 7"
        />
        <circle cx="421" cy="128" r="5" fill="#C9B5FF" className="orbit-point" />
        <circle cx="85" cy="362" r="3" fill="#A78BFA" />
        <circle cx="422" cy="128" r="12" stroke="#A78BFA" strokeOpacity=".18" />
        <path d="M427 370v12m-6-6h12M93 130v8m-4-4h8" stroke="#A78BFA" strokeOpacity=".65" />
      </svg>
      <div className="floating-symbol symbol-code">
        <Braces size={24} strokeWidth={1.4} />
      </div>
      <div className="floating-symbol symbol-spark">
        <Sparkles size={21} strokeWidth={1.3} />
      </div>
      <div className="craft-note">
        <div className="craft-note-icon">
          <ArrowUpRight size={19} />
        </div>
        <div>
          <span>Thoughtfully designed.</span>
          <span>Carefully developed.</span>
        </div>
        <span className="craft-note-dot" />
      </div>
      <span className="art-coordinate coordinate-bottom">CRAFTED WITH PURPOSE, ALWAYS.</span>
    </div>
  )
}
