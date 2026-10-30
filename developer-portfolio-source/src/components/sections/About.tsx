import { ArrowUpRight, Code2, Heart, Lightbulb, Puzzle, Terminal } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const principles = [
  { icon: Lightbulb, title: 'A creative mind', copy: 'Fresh perspectives. Thoughtful solutions.' },
  { icon: Puzzle, title: 'A problem solver', copy: 'Making the complex feel effortless.' },
  { icon: Code2, title: 'A builder at heart', copy: 'Clean code. Meaningful experiences.' },
]

export function About() {
  return (
    <section
      id="about"
      className="section section-anchor about-section"
      aria-labelledby="about-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            number="01"
            label="THE PERSON BEHIND THE PIXELS"
            title="A Little About"
            accent="Me"
          />
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-visual">
            <div className="about-art-grid" aria-hidden="true" />
            <div className="about-window">
              <div className="window-title">
                <span className="window-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>
                  <Terminal size={12} /> a little about me
                </span>
                <span className="window-version">.tsx</span>
              </div>
              <div className="about-code" aria-hidden="true">
                <span className="code-comment">// A work in progress. Always.</span>
                <br />
                <span className="code-purple">const</span> developer = {'{'}
                <br />
                <span className="code-indent">
                  name: <span className="code-green">'{profile.name}'</span>,
                </span>
                <br />
                <span className="code-indent">
                  drivenBy: <span className="code-green">'curiosity'</span>,
                </span>
                <br />
                <span className="code-indent">
                  focus: <span className="code-green">'the little details'</span>,
                </span>
                <br />
                <span className="code-indent">
                  coffee: <span className="code-purple">true</span>,
                </span>
                <br />
                {'}'};<br />
                <br />
                <span className="code-comment">// Good things are built together.</span>
                <br />
                <span className="code-purple">export default</span> developer
                <span className="code-cursor" />
              </div>
            </div>
            <div className="made-with-note">
              <Heart size={13} />
              <span>A human behind every line of code.</span>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="about-copy">
            <h3 id="about-title">
              Thoughtful by design.
              <br />
              Curious by nature.
            </h3>
            <p>{profile.about}</p>
            <p>{profile.aboutMore}</p>
            <a className="text-link" href="#contact">
              Have an idea? Let's make it happen <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
        <div className="principles-grid">
          {principles.map(({ icon: Icon, title, copy }, index) => (
            <Reveal delay={index * 0.08} key={title}>
              <div className="principle">
                <span className="principle-icon">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <span className="principle-number">0{index + 1}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
