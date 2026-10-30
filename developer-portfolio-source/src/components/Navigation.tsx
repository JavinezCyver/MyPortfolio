import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navigation, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

export function Navigation() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const active = useActiveSection()
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])
  return (
    <header className="site-header">
      <nav className="container nav-layout" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label={`${profile.name}, home`}>
          {profile.firstName}
          <span>.</span>
          <span className="wordmark-slash">/</span>
        </a>
        <div className="desktop-nav">
          {navigation.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'nav-link active' : 'nav-link'}
              aria-current={active === id ? 'location' : undefined}
            >
              {label}
            </a>
          ))}
        </div>
        <a className="button button-small button-outline nav-cta" href="#contact">
          Let's Talk <ArrowUpRight size={15} />
        </a>
        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <div className={`mobile-nav ${open ? 'is-open' : ''}`} id="mobile-navigation" inert={!open}>
          {navigation.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              aria-current={active === id ? 'location' : undefined}
            >
              {label}
              <ArrowUpRight size={16} />
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="text-accent"
          >
            Let's talk <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  )
}
