import { Code2, Palette, Server, Wrench } from 'lucide-react'
import { skillGroups } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { TechIcon } from '../ui/TechIcon'

const categoryIcons = { frontend: Code2, backend: Server, design: Palette, tools: Wrench }

export function Skills() {
  return (
    <section
      id="skills"
      className="section section-anchor skills-section"
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <Reveal>
          <div id="skills-heading">
            <SectionHeading
              number="02"
              label="MY TOOLKIT"
              title="The Tools Behind"
              accent="the Craft"
              description="A considered mix of technologies to bring the right ideas to life."
            />
          </div>
        </Reveal>
        <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, index) => {
            const Icon = categoryIcons[group.icon]
            return (
              <Reveal delay={index * 0.08} key={group.title}>
                <article className="skill-card">
                  <div className="skill-card-top">
                    <Icon size={22} strokeWidth={1.4} />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul>
                    {group.technologies.map((name) => (
                      <li key={name}>
                        <TechIcon name={name} />
                        <span>{name}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
        <Reveal>
          <p className="toolkit-note">
            <span />
            Always learning. Always refining the toolkit.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
