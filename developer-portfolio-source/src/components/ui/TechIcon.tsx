import { Boxes, Braces, Database, Github, Layers, PenTool } from 'lucide-react'
import type { TechName } from '../../data/portfolio'

export function TechIcon({ name }: { name: TechName }) {
  const common = {
    width: 19,
    height: 19,
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': true as const,
  }
  if (name === 'React')
    return (
      <svg {...common} className="tech-react">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        {[0, 60, 120].map((rotation) => (
          <ellipse
            key={rotation}
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke="currentColor"
            strokeWidth="1.1"
            transform={`rotate(${rotation} 12 12)`}
          />
        ))}
      </svg>
    )
  if (name === 'Next.js')
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
        <path d="M8 17V7l9 12M16 7v7" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  if (name === 'TypeScript')
    return (
      <span className="tech-letter tech-ts" aria-hidden="true">
        TS
      </span>
    )
  if (name === 'Tailwind CSS')
    return (
      <svg {...common} className="tech-tailwind">
        <path
          d="M2 12c1-5 6-6 9-3 2 2 3 2 5 1-1 5-6 6-9 3-2-2-3-2-5-1Zm6 6c1-5 6-6 9-3 2 2 3 2 5 1-1 5-6 6-9 3-2-2-3-2-5-1Z"
          fill="currentColor"
        />
      </svg>
    )
  if (name === 'Node.js')
    return (
      <svg {...common} className="tech-node">
        <path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z" stroke="currentColor" strokeWidth="1.3" />
        <path
          d="M9 10v6c-2 2-3 0-3 0m11-6c-5-3-7 4-1 3 4 0 2 5-3 3"
          stroke="currentColor"
          strokeWidth="1.1"
        />
      </svg>
    )
  if (name === 'Python')
    return (
      <svg {...common} className="tech-python">
        <path
          d="M12 2H8a3 3 0 0 0-3 3v4h9V7H8m4 15h4a3 3 0 0 0 3-3v-4h-9v2h6M5 9H3v7a3 3 0 0 0 3 3h4v-4h5a4 4 0 0 0 4-4V5a3 3 0 0 0-3-3h-4v7H5Z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="9" cy="5" r=".6" fill="currentColor" />
        <circle cx="15" cy="19" r=".6" fill="currentColor" />
      </svg>
    )
  if (name === 'Figma')
    return (
      <svg {...common}>
        <path
          d="M12 12H8a4 4 0 0 1 0-8h4v8Zm0-8h4a4 4 0 0 1 0 8h-4V4Z"
          stroke="#B6A2EB"
          strokeWidth="1.3"
        />
        <circle cx="16" cy="16" r="4" stroke="#89C7C1" strokeWidth="1.3" />
        <path
          d="M12 12H8a4 4 0 1 0 4 4v-4Zm0 4v4a4 4 0 1 1-4-4"
          stroke="#D7A4AE"
          strokeWidth="1.3"
        />
      </svg>
    )
  if (name === 'Framer')
    return (
      <svg {...common}>
        <path d="M5 3h14v7h-7l7 7h-7v5l-7-7V3Z" fill="currentColor" />
      </svg>
    )
  if (name === 'Git')
    return (
      <svg {...common} className="tech-git">
        <rect
          width="15"
          height="15"
          x="4.5"
          y="4.5"
          rx="1.5"
          transform="rotate(45 12 12)"
          stroke="currentColor"
        />
        <path d="m8 5 7 7M10 8v9" stroke="currentColor" />
        <circle cx="10" cy="8" r="1.3" fill="currentColor" />
        <circle cx="15" cy="12" r="1.3" fill="currentColor" />
        <circle cx="10" cy="17" r="1.3" fill="currentColor" />
      </svg>
    )
  if (name === 'VS Code')
    return (
      <svg {...common} className="tech-vscode">
        <path
          d="m17 2 5 2v16l-5 2L7 13l-4 3-2-1V9l2-1 4 3L17 2Zm0 5-7 5 7 5V7Z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    )
  if (name === 'Vercel')
    return (
      <svg {...common}>
        <path d="m12 4 10 17H2L12 4Z" fill="currentColor" />
      </svg>
    )
  const icons = {
    PostgreSQL: Database,
    'REST APIs': Braces,
    'Design systems': Layers,
    Prototyping: PenTool,
    GitHub: Github,
  }
  const Icon = icons[name as keyof typeof icons] || Boxes
  return <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
}
