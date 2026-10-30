import {
  ArrowUpRight,
  BarChart3,
  Circle,
  Command,
  LayoutDashboard,
  Plus,
  Search,
  Settings2,
  ShoppingBag,
} from 'lucide-react'
import type { ProjectKind } from '../../data/portfolio'

const bars = [22, 36, 28, 48, 39, 58, 46, 64, 52, 78, 67, 88, 76, 95, 82, 100]

export function CeramicVisual({ variation = 0 }: { variation?: number }) {
  const prefix = `ceramic-${variation}`
  return (
    <svg
      viewBox="0 0 320 260"
      className={`ceramic-visual ceramic-variation-${variation}`}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={`${prefix}-body`}
          x1="124"
          y1="75"
          x2="210"
          y2="208"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9CBB6" />
          <stop offset=".5" stopColor="#BCAA8E" />
          <stop offset="1" stopColor="#8E7C62" />
        </linearGradient>
        <linearGradient
          id={`${prefix}-dark`}
          x1="65"
          y1="140"
          x2="130"
          y2="230"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8E8D78" />
          <stop offset="1" stopColor="#4F5344" />
        </linearGradient>
        <radialGradient id={`${prefix}-shadow`}>
          <stop stopColor="#554A37" stopOpacity=".23" />
          <stop offset="1" stopColor="#554A37" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="163" cy="229" rx="119" ry="20" fill={`url(#${prefix}-shadow)`} />
      <path
        d="M142 69h39l-3 35c-1 19 40 36 42 65 4 39-20 59-59 59s-63-20-59-59c3-29 44-46 43-65l-3-35Z"
        fill={`url(#${prefix}-body)`}
      />
      <ellipse cx="161.5" cy="69" rx="19.5" ry="5" fill="#AA987E" />
      <ellipse cx="161.5" cy="68" rx="13" ry="3" fill="#796B57" />
      <path
        d="M149 91c5 9 5 24-10 39-15 16-25 38-17 61"
        stroke="#EEE3D2"
        strokeOpacity=".26"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M67 165h55l10 40c4 18-7 25-37 25s-41-7-37-25l9-40Z" fill={`url(#${prefix}-dark)`} />
      <ellipse cx="94.5" cy="165" rx="27.5" ry="7" fill="#9B9B87" />
      <ellipse cx="94.5" cy="165" rx="21" ry="4" fill="#555B48" />
      <path
        d="M228 219v-80m0 42c-19-5-25-19-22-33 16 6 24 16 22 33Zm0-21c17-6 23-20 18-32-13 6-19 17-18 32Zm0-18c-14-6-20-18-16-29 12 5 18 14 16 29Z"
        stroke="#5E6951"
        fill="#6D755B"
        strokeWidth="1.2"
      />
      <path d="M214 200h27l-4 29h-19l-4-29Z" fill="#D1C8B8" />
    </svg>
  )
}

export function ProjectPreview({ kind }: { kind: ProjectKind }) {
  if (kind === 'orbit')
    return (
      <div className="project-preview preview-orbit" aria-hidden="true">
        <div className="preview-browser orbit-browser">
          <div className="preview-chrome">
            <span className="preview-dots">● ● ●</span>
            <span>orbit.app / overview</span>
            <ArrowUpRight size={9} />
          </div>
          <div className="orbit-dashboard">
            <aside>
              <div className="orbit-brand">
                <Command size={14} /> orbit<span>®</span>
              </div>
              <span className="mock-nav selected">
                <LayoutDashboard size={10} /> Overview
              </span>
              <span className="mock-nav">
                <BarChart3 size={10} /> Analytics
              </span>
              <span className="mock-nav">
                <Circle size={10} /> Audience
              </span>
              <span className="mock-nav">
                <Settings2 size={10} /> Settings
              </span>
              <span className="mock-user">
                A <span>Alex's workspace</span>
              </span>
            </aside>
            <div className="dashboard-main">
              <div className="dashboard-greeting">
                <div>
                  <span>Your overview</span>
                  <h4>
                    Good morning, Alex <span>✳</span>
                  </h4>
                </div>
                <span className="mock-pill">Last 30 days⌄</span>
              </div>
              <div className="dashboard-metrics">
                {[
                  ['Total revenue', '$24,680', '+18.4%'],
                  ['Active users', '8,492', '+12.8%'],
                  ['Conversion', '4.28%', '+2.1%'],
                ].map(([label, value, change]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                    <small>
                      {change} <span>vs last month</span>
                    </small>
                  </div>
                ))}
              </div>
              <div className="mock-chart">
                <div>
                  <strong>Revenue overview</strong>
                  <span>
                    <i /> Revenue
                  </span>
                </div>
                <div className="chart-bars">
                  {bars.map((height, i) => (
                    <span key={i} style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="chart-axis">
                  <span>Jun 1</span>
                  <span>Jun 10</span>
                  <span>Jun 20</span>
                  <span>Jun 30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="preview-caption">CLARITY IN EVERY NUMBER.</span>
      </div>
    )
  if (kind === 'forma')
    return (
      <div className="project-preview preview-forma" aria-hidden="true">
        <div className="preview-browser forma-browser">
          <div className="forma-nav">
            <strong>
              forma<span>®</span>
            </strong>
            <span>Objects &nbsp; Our story</span>
            <ShoppingBag size={12} />
          </div>
          <div className="forma-content">
            <span className="forma-eyebrow">CONSIDERED OBJECTS. EVERYDAY LIVING.</span>
            <h4>
              Less, but
              <br />
              <em>better.</em>
            </h4>
            <p>
              Simple things.
              <br />
              Thoughtfully made.
            </p>
            <span className="forma-shop">
              Explore the collection <ArrowUpRight size={9} />
            </span>
            <CeramicVisual />
          </div>
          <div className="forma-bottom">
            <span>THE EVERYDAY COLLECTION</span>
            <span>01 — 03</span>
          </div>
        </div>
        <span className="preview-caption">A LITTLE LESS. A LITTLE BETTER.</span>
      </div>
    )
  return (
    <div className="project-preview preview-focus" aria-hidden="true">
      <div className="preview-browser focus-browser">
        <div className="focus-header">
          <strong>
            <span className="focus-logo">✳</span> focus
          </strong>
          <div>
            <Search size={10} />
            <span className="mock-avatar">A</span>
          </div>
        </div>
        <div className="focus-main">
          <div className="focus-title">
            <span>YOUR SPACE TO DO GOOD THINGS</span>
            <h4>A little more focus.</h4>
            <p>Make room for what matters today.</p>
          </div>
          <div className="focus-board">
            <div className="focus-column">
              <span>
                To do <i>2</i>
                <Plus size={9} />
              </span>
              <div className="mock-task">
                <span className="task-tag">DESIGN</span>
                <strong>Explore something new</strong>
                <p>A fresh perspective goes a long way.</p>
                <span className="task-footer">
                  <span className="mock-avatar">A</span> Today <Circle size={9} />
                </span>
              </div>
              <div className="mock-task small-task">
                <strong>Make a little space</strong>
                <span className="task-footer">
                  Personal <Circle size={9} />
                </span>
              </div>
            </div>
            <div className="focus-column">
              <span>
                In progress <i>1</i>
                <Plus size={9} />
              </span>
              <div className="mock-task">
                <span className="task-tag green">DEVELOPMENT</span>
                <strong>Build something meaningful</strong>
                <p>One thoughtful step at a time.</p>
                <span className="task-footer">
                  <span className="mock-avatar">A</span> Today <Circle size={9} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="preview-caption">LESS NOISE. MORE FLOW.</span>
    </div>
  )
}
