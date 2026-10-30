import { ArrowUpRight, Github } from 'lucide-react'
import { lazy, Suspense, useState } from 'react'
import { projects } from '../../data/portfolio'
import type { Project } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectPreview } from '../visuals/ProjectPreview'

const ProjectDialog = lazy(() => import('../projects/ProjectDialog'))

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  return (
    <section
      id="projects"
      className="section section-anchor projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <Reveal>
          <div className="section-heading-row">
            <div id="projects-heading">
              <SectionHeading
                number="03"
                label="SELECTED WORK"
                title="Ideas Turned Into"
                accent="Experiences"
                description="From learning tools to everyday apps. A selection of things I've built."
              />
            </div>
            <span className="project-count">
              {String(projects.length).padStart(2, '0')} <span>FEATURED PROJECTS</span>
            </span>
          </div>
        </Reveal>
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <article className="project-card">
                <button
                  type="button"
                  className="project-image-button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Explore ${project.title}`}
                  aria-haspopup="dialog"
                >
                  <ProjectPreview kind={project.id} />
                  <span className="image-open">
                    <ArrowUpRight size={21} />
                  </span>
                </button>
                <div className="project-info">
                  <div className="project-category">
                    <span>{project.category}</span>
                    <span>{project.number}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="technology-tags" aria-label="Technologies">
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`View ${project.title} on GitHub`}
                      aria-label={`${project.title} source on GitHub (opens in a new tab)`}
                    >
                      <Github size={14} /> GitHub
                    </a>
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        aria-haspopup="dialog"
                      >
                        View Project <ArrowUpRight size={15} />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="projects-footnote">
            <span>Good work starts with a good conversation.</span>
            <a href="#contact" className="text-link">
              Let's build your next idea <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
      {selectedProject && (
        <Suspense
          fallback={
            <div className="project-loading" role="status">
              Opening project…
            </div>
          }
        >
          <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
        </Suspense>
      )}
    </section>
  )
}
