import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../../data/portfolio'

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`social-links ${className}`}>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub (opens in a new tab)"
        title="GitHub"
      >
        <Github size={18} strokeWidth={1.6} />
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn (opens in a new tab)"
        title="LinkedIn"
      >
        <Linkedin size={18} strokeWidth={1.6} />
      </a>
      <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.name}`} title="Email">
        <Mail size={18} strokeWidth={1.6} />
      </a>
    </div>
  )
}
