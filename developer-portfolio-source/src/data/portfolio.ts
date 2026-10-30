/** Edit this file to make the portfolio yours. All projects are illustrative concepts. */
export const profile = {
  name: 'Alex Morgan',
  firstName: 'alex',
  initials: 'am',
  role: 'Developer & creative thinker',
  email: 'hello@example.com',
  github: 'https://github.com',
  linkedin: 'https://www.linkedin.com',
  availability: 'Available for Opportunities',
  introduction:
    "I'm Alex, a passionate developer turning thoughtful ideas into modern, functional, and beautifully crafted digital experiences.",
  about:
    'I believe the best digital experiences live at the intersection of thoughtful design and well-written code. I love taking a complex problem and turning it into something simple, intuitive, and enjoyable to use.',
  aboutMore:
    'From the first sketch to the final interaction, I care about the details. My approach is curious, collaborative, and always focused on the people on the other side of the screen.',
}

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = (typeof navigation)[number]['id']
export type TechName =
  | 'React'
  | 'Next.js'
  | 'TypeScript'
  | 'Tailwind CSS'
  | 'Node.js'
  | 'Python'
  | 'PostgreSQL'
  | 'REST APIs'
  | 'Figma'
  | 'Framer'
  | 'Design systems'
  | 'Prototyping'
  | 'Git'
  | 'GitHub'
  | 'VS Code'
  | 'Vercel'

export const skillGroups: {
  title: string
  description: string
  icon: 'frontend' | 'backend' | 'design' | 'tools'
  technologies: TechName[]
}[] = [
  {
    title: 'Frontend Development',
    description: 'Interfaces that feel as good as they look.',
    icon: 'frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    description: 'The thoughtful logic behind the experience.',
    icon: 'backend',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'UI/UX Design',
    description: 'Human-centered, down to the last detail.',
    icon: 'design',
    technologies: ['Figma', 'Framer', 'Design systems', 'Prototyping'],
  },
  {
    title: 'Tools & Technologies',
    description: 'A reliable toolkit. A smoother workflow.',
    icon: 'tools',
    technologies: ['Git', 'GitHub', 'VS Code', 'Vercel'],
  },
]

export type ProjectKind = 'orbit' | 'forma' | 'focus'
export type Project = {
  id: ProjectKind
  number: string
  category: string
  title: string
  description: string
  technologies: string[]
  /** Replace with your repository URL. The default is clearly labeled GitHub inspiration. */
  githubUrl: string
  /** Add a deployed URL to replace the built-in interactive concept demo. */
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 'orbit',
    number: '01',
    category: 'DASHBOARD · WEB APP',
    title: 'Orbit — Analytics, in focus.',
    description:
      'A calm, intuitive analytics dashboard that turns complex data into a clearer picture.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/topics/analytics-dashboard',
  },
  {
    id: 'forma',
    number: '02',
    category: 'E-COMMERCE · DESIGN',
    title: 'Forma — Less, but better.',
    description:
      'A considered storefront for everyday essentials, with a seamless shopping experience.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/topics/ecommerce',
  },
  {
    id: 'focus',
    number: '03',
    category: 'PRODUCTIVITY · WEB APP',
    title: 'Focus — Make room for flow.',
    description:
      'A simple workspace to organize your day, find your rhythm, and move ideas forward.',
    technologies: ['React', 'TypeScript', 'Motion'],
    githubUrl: 'https://github.com/topics/task-manager',
  },
]
