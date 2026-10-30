import { ArrowUp, ArrowUpRight, Check, Copy, Heart, Mail } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { profile } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SocialLinks } from '../ui/SocialLinks'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  useEffect(() => () => clearTimeout(resetTimer.current), [])
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setCopyError(false)
      clearTimeout(resetTimer.current)
      resetTimer.current = setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopyError(true)
    }
  }
  return (
    <section
      id="contact"
      className="contact-section section-anchor"
      aria-labelledby="contact-title"
    >
      <div className="contact-glow" aria-hidden="true" />
      <div className="container">
        <Reveal className="contact-content">
          <p className="eyebrow">
            <span>04</span>
            <span className="eyebrow-line" />
            WHAT'S NEXT?
          </p>
          <div className="contact-star" aria-hidden="true">
            ✳
          </div>
          <h2 id="contact-title">
            Let's Build Something
            <br />
            <span className="text-accent">Great Together.</span>
          </h2>
          <p>
            Have a project in mind, an interesting opportunity,
            <br className="desktop-break" /> or just want to say hello? I'd love to hear from you.
          </p>
          <a className="button button-primary contact-button" href={`mailto:${profile.email}`}>
            <Mail size={17} /> Get In Touch <ArrowUpRight size={18} />
          </a>
          <div className="email-row">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? 'Email copied' : 'Copy email address'}
              title={copied ? 'Copied!' : 'Copy email address'}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
          <span className="copy-status" role="status">
            {copied
              ? 'Email copied to clipboard.'
              : copyError
                ? `Copy this address: ${profile.email}`
                : ''}
          </span>
          <div className="contact-availability">
            <span className="status-dot" />
            Open to good conversations & new possibilities.
          </div>
        </Reveal>
        <footer className="site-footer">
          <a className="wordmark" href="#home" aria-label="Back to home">
            {profile.firstName}
            <span>.</span>
            <span className="wordmark-slash">/</span>
          </a>
          <p>
            © {new Date().getFullYear()} {profile.name}. Made with intention <Heart size={12} />
          </p>
          <SocialLinks />
          <a className="back-to-top" href="#home" aria-label="Back to top">
            <ArrowUp size={17} />
          </a>
        </footer>
      </div>
    </section>
  )
}
