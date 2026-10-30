import { LazyMotion, domAnimation, MotionConfig } from 'motion/react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navigation />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </MotionConfig>
    </LazyMotion>
  )
}
