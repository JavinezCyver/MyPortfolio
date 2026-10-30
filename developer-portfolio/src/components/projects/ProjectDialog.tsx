import { ArrowUpRight, Check, Download, Github, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { Project } from '../../data/portfolio'
import { ProjectPreview } from '../visuals/ProjectPreview'

export default function ProjectDialog({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const backdropPointerDown = useRef(false)
  const [view, setView] = useState<'overview' | 'features'>('overview')

  useEffect(() => {
    const element = dialog.current
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    const previousRootOverflow = document.documentElement.style.overflow
    const blockWheelScroll = (event: WheelEvent) => {
      if (!event.ctrlKey && event.cancelable) event.preventDefault()
    }

    element?.showModal()
    element?.addEventListener('wheel', blockWheelScroll, { passive: false })
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    return () => {
      element?.removeEventListener('wheel', blockWheelScroll)
      element?.close()
      document.body.style.overflow = previousOverflow
      document.documentElement.style.overflow = previousRootOverflow
      previousFocus?.focus({ preventScroll: true })
    }
  }, [])

  return (
    <dialog
      ref={dialog}
      className={`project-dialog dialog-${project.id}`}
      aria-labelledby="project-dialog-title"
      aria-describedby="project-dialog-description"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onPointerDown={(event) => {
        backdropPointerDown.current = event.target === event.currentTarget
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget && backdropPointerDown.current) onClose()
      }}
    >
      <div className="dialog-topbar">
        <div>
          <span className="dialog-project-tag">PROJECT OVERVIEW</span>
          <span className="dialog-platform">{project.platform}</span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="dialog-close"
          aria-label="Close project details"
          autoFocus
        >
          <X size={21} />
        </button>
      </div>
      <div className="project-dialog-layout" data-view={view}>
        <div className="project-dialog-visual">
          <ProjectPreview kind={project.id} />
        </div>
        <div className="project-detail-content">
          <div className="project-detail-heading">
            <p className="eyebrow">{project.category}</p>
            <h2 id="project-dialog-title">{project.title}</h2>
          </div>
          <div className="project-view-switcher" role="group" aria-label="Project information">
            <button
              type="button"
              aria-pressed={view === 'overview'}
              aria-controls="project-overview-panel"
              onClick={() => setView('overview')}
            >
              Overview
            </button>
            <button
              type="button"
              aria-pressed={view === 'features'}
              aria-controls="project-features-panel"
              onClick={() => setView('features')}
            >
              Features
            </button>
          </div>
          <div id="project-overview-panel" className="project-overview-panel">
            <p id="project-dialog-description" className="project-detail-description">
              {project.details}
            </p>
          </div>
          <div id="project-features-panel" className="project-features-panel">
            <ul className="project-feature-list">
              {project.features.map((feature) => (
                <li key={feature}>
                  <Check size={15} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <ul className="technology-tags" aria-label="Project technologies">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <div className="project-detail-actions">
            <a
              href={project.githubUrl}
              className="button button-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub (opens in a new tab)`}
            >
              <Github size={16} />
              <span className="project-action-label-desktop">View on GitHub</span>
              <span className="project-action-label-mobile">GitHub</span>
              <ArrowUpRight size={15} />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="button button-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <ArrowUpRight size={15} />
              </a>
            )}
            {project.releaseUrl && (
              <a
                href={project.releaseUrl}
                className="button button-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={15} />
                <span className="project-action-label-desktop">Android Release</span>
                <span className="project-action-label-mobile">Android App</span>
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </dialog>
  )
}
