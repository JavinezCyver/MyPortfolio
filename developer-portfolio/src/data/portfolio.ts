/** Personal details and verified public repositories. Edit this file to update the portfolio. */
export const profile = {
  name: 'CYVER JAVINES',
  firstName: 'cyver',
  initials: 'cj',
  role: 'Developer & creative thinker',
  email: 'aeshirop14@gmail.com',
  github: 'https://github.com/JavinezCyver',
  linkedin: 'https://www.linkedin.com',
  availability: 'Available for Opportunities',
  introduction:
    "I'm Cyver, a passionate developer turning thoughtful ideas into modern, functional, and beautifully crafted digital experiences.",
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

export type ProjectKind = 'quizcraft' | 'mist' | 'music' | 'facevisor'
export type Project = {
  id: ProjectKind
  number: string
  category: string
  title: string
  description: string
  details: string
  features: string[]
  technologies: string[]
  platform: string
  /** The actual public source repository. */
  githubUrl: string
  /** Add a verified public web deployment when available. */
  liveUrl?: string
  releaseUrl?: string
}

export const projects: Project[] = [
  {
    id: 'quizcraft',
    number: '01',
    category: 'LEARNING · WEB & ANDROID',
    title: 'QuizCraft',
    description:
      'An offline study companion for creating quizzes, reviewing flashcards, and learning at your own pace.',
    details:
      'QuizCraft brings personal study to the web and Android with a shared React interface. Create question collections, review your answers, and keep your study progress on your own device without an account or hosted API.',
    features: [
      'Custom quizzes and flashcard collections',
      'Multiple choice, true-or-false, and typed answers',
      'Offline study, progress, and review history',
      'Quiz import, backup, and restore',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Tauri'],
    platform: 'Web & Android',
    githubUrl: 'https://github.com/JavinezCyver/QuizCraft',
    releaseUrl: 'https://github.com/JavinezCyver/QuizCraft/releases/latest',
  },
  {
    id: 'mist',
    number: '02',
    category: 'PHOTOGRAPHY · WEB APP',
    title: 'Mist — Photobooth',
    description:
      'A cozy browser photobooth for capturing little moments, styling photo strips, and keeping them close.',
    details:
      'Mist turns a webcam session into a personal photo strip. Choose a frame, colors, and filter, capture or upload your photos, then preview, retake, save, or print the finished design.',
    features: [
      'Live camera capture with selectable countdowns',
      'Photo uploads and individual retakes',
      'Custom frames, templates, colors, and filters',
      'Local photo downloads and printable strips',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'Camera API'],
    platform: 'Browser',
    githubUrl: 'https://github.com/JavinezCyver/Mist-PhotoBooth',
  },
  {
    id: 'music',
    number: '03',
    category: 'MUSIC · FLUTTER APP',
    title: 'Clone Music App',
    description:
      'A Flutter music app for discovering tracks, browsing albums, and enjoying familiar player interactions.',
    details:
      'A music application built with Flutter and Dart, with screens for discovery, search, albums, and liked songs. It explores music browsing and playback through a familiar, focused interface.',
    features: [
      'Music discovery and song search',
      'Album browsing and track lists',
      'A dedicated liked-songs screen',
      'Embedded YouTube playback',
    ],
    technologies: ['Flutter', 'Dart', 'HTTP', 'YouTube Player'],
    platform: 'Flutter',
    githubUrl: 'https://github.com/JavinezCyver/Clone-Music-App',
  },
  {
    id: 'facevisor',
    number: '04',
    category: 'IMAGE ANALYSIS · SCHOOL PROJECT',
    title: 'Skin Face Visor',
    description:
      'A Flutter school project exploring skin-image capture, uploads, and analysis results in a simple interface.',
    details:
      'Skin Face Visor is a school project focused on an image-analysis workflow. Its Flutter interface brings together photo capture, image uploads, result screens, and a history view.',
    features: [
      'Image capture and photo uploads',
      'Image-analysis result screens',
      'A history view for previous results',
      'Profile and registration screens',
    ],
    technologies: ['Flutter', 'Dart', 'Image Picker', 'HTTP'],
    platform: 'Flutter · School project',
    githubUrl: 'https://github.com/JavinezCyver/FaceVisor',
  },
]
