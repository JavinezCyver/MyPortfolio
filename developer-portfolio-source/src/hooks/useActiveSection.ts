import { useEffect, useState } from 'react'
import type { SectionId } from '../data/portfolio'

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>('home')
  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>('main > section[id]')]
    const update = () => {
      const threshold = window.innerHeight * 0.38
      let current: SectionId = 'home'
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= threshold) current = section.id as SectionId
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 30)
        current = 'contact'
      setActive(current)
    }
    let scheduled = false
    const onScroll = () => {
      if (scheduled) return
      scheduled = true
      requestAnimationFrame(() => {
        update()
        scheduled = false
      })
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return active
}
