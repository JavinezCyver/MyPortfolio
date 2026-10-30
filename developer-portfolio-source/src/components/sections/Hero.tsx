import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { m, useReducedMotion } from 'motion/react'
import { profile } from '../../data/portfolio'
import { SocialLinks } from '../ui/SocialLinks'
import { OrbitGraphic } from '../visuals/OrbitGraphic'

export function Hero() {
  const reducedMotion = useReducedMotion()
  const reveal = (delay: number) => ({
    initial: reducedMotion ? (false as const) : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  })
  return (
    <section id="home" className="hero section-anchor" aria-labelledby="hero-title">
      <div className="hero-background" aria-hidden="true" />
      <div className="container hero-main">
        <div className="hero-copy">
          <m.div {...reveal(0.05)} className="availability-badge">
            <span className="status-dot" />
            {profile.availability}
          </m.div>
          <m.p {...reveal(0.12)} className="hero-greeting">
            HEY, I'M {profile.name.toUpperCase()} <span className="greeting-line" />
          </m.p>
          <h1 id="hero-title">
            <m.span {...reveal(0.2)}>Building Digital</m.span>{' '}
            <m.span {...reveal(0.3)} className="text-accent">
              Experiences
            </m.span>{' '}
            <m.span {...reveal(0.4)}>
              That Matter<span className="text-accent">.</span>
            </m.span>
          </h1>
          <m.p {...reveal(0.48)} className="hero-intro">
            {profile.introduction}
          </m.p>
          <m.div {...reveal(0.56)} className="hero-actions flex flex-wrap gap-3">
            <a href="#projects" className="button button-primary">
              View My Work <ArrowUpRight size={17} />
            </a>
            <a href="#contact" className="button button-secondary">
              Contact Me <ArrowRight size={16} />
            </a>
          </m.div>
          <m.div {...reveal(0.64)} className="hero-social-row">
            <SocialLinks />
            <span className="social-divider" />
            <span>LET'S CONNECT</span>
          </m.div>
        </div>
        <m.div {...reveal(0.35)} className="hero-art-wrapper">
          <OrbitGraphic />
        </m.div>
      </div>
      <m.div {...reveal(0.75)} className="container hero-bottom">
        <a href="#about" className="scroll-link">
          <span className="scroll-icon">
            <ArrowDown size={14} />
          </span>
          SCROLL TO EXPLORE
        </a>
        <span className="hero-bottom-note">
          <span className="mini-asterisk">✳</span> A little design. A lot of intention.
        </span>
        <span className="hero-index">
          01 <span>/ 05</span>
        </span>
      </m.div>
    </section>
  )
}
