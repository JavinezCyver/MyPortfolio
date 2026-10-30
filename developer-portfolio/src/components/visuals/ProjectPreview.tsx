import {
  BookOpen,
  Camera,
  Check,
  Heart,
  Music2,
  Play,
  ScanFace,
  Search,
  Upload,
} from 'lucide-react'
import type { ReactNode } from 'react'
import type { ProjectKind } from '../../data/portfolio'

function PreviewWindow({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="project-art-window">
      <div className="project-art-chrome">
        <span className="art-window-dots">
          <i />
          <i />
          <i />
        </span>
        <span>{title}</span>
        <span className="art-window-mark">&#8599;</span>
      </div>
      {children}
    </div>
  )
}

function PhotoMoment({ variant }: { variant: number }) {
  return (
    <svg viewBox="0 0 100 70" className={`photo-moment moment-${variant}`}>
      <rect width="100" height="70" fill="#d8c4c7" />
      <circle cx="73" cy="20" r="10" fill="#f8e4d6" />
      <path d="m0 58 28-31 24 26 17-17 31 29v5H0Z" fill="#a992ad" />
      <path d="m0 65 35-19 31 17 34-16v23H0Z" fill="#766c8b" />
    </svg>
  )
}

/** Lightweight illustrative artwork for each repository, rather than remote screenshots. */
export function ProjectPreview({ kind }: { kind: ProjectKind }) {
  return (
    <div className={`project-preview preview-${kind}`} aria-hidden="true">
      {kind === 'quizcraft' && (
        <PreviewWindow title="QuizCraft / your study space">
          <div className="quiz-art-body">
            <div className="art-introduction">
              <span className="art-product-name">
                <BookOpen size={13} /> QuizCraft
              </span>
              <h4>
                Create. Study.
                <br />
                <span>Remember.</span>
              </h4>
              <p>
                Your knowledge.
                <br />
                Your pace. Anywhere.
              </p>
              <span className="art-small-label">MADE FOR OFFLINE LEARNING</span>
            </div>
            <div className="quiz-art-cards">
              <div className="quiz-back-card" />
              <div className="quiz-front-card">
                <span className="art-small-label">YOUR NEXT CHAPTER</span>
                <BookOpen size={24} strokeWidth={1.3} />
                <strong>
                  A little more
                  <br />
                  understanding.
                </strong>
                <div className="quiz-art-answer">
                  <Check size={10} /> One card at a time.
                </div>
              </div>
            </div>
          </div>
        </PreviewWindow>
      )}
      {kind === 'mist' && (
        <PreviewWindow title="Mist / little moments">
          <div className="mist-art-body">
            <div className="art-introduction">
              <span className="art-product-name">
                <Camera size={13} /> Mist Photobooth
              </span>
              <h4>
                Little moments.
                <br />
                <em>Made to keep.</em>
              </h4>
              <p>
                Capture, create,
                <br />
                and make it yours.
              </p>
              <span className="mist-art-button">
                <Camera size={10} /> Capture a memory
              </span>
            </div>
            <div className="mist-filmstrip">
              {[1, 2, 3].map((variant) => (
                <PhotoMoment key={variant} variant={variant} />
              ))}
              <span>with love, mist &#9825;</span>
            </div>
          </div>
        </PreviewWindow>
      )}
      {kind === 'music' && (
        <PreviewWindow title="Clone Music App / your soundtrack">
          <div className="music-art-body">
            <div className="art-introduction">
              <span className="art-product-name">
                <Music2 size={13} /> Music, on repeat.
              </span>
              <h4>
                Find your
                <br />
                <span>next favorite.</span>
              </h4>
              <div className="music-art-nav">
                <span>
                  <Search size={10} /> Discover
                </span>
                <span>
                  <Heart size={10} /> Liked songs
                </span>
              </div>
            </div>
            <div className="music-art-player">
              <div className="music-art-record">
                <span />
                <Music2 size={22} strokeWidth={1.3} />
              </div>
              <div className="music-art-controls">
                <span>YOUR SOUNDTRACK</span>
                <Play size={12} fill="currentColor" />
              </div>
              <div className="music-art-timeline">
                <span />
              </div>
            </div>
          </div>
        </PreviewWindow>
      )}
      {kind === 'facevisor' && (
        <PreviewWindow title="Skin Face Visor / image exploration">
          <div className="visor-art-body">
            <div className="art-introduction">
              <span className="art-product-name">
                <ScanFace size={14} /> Skin Face Visor
              </span>
              <h4>
                A different
                <br />
                <span>perspective.</span>
              </h4>
              <p>Capture. Review. Explore.</p>
              <span className="art-small-label">A FLUTTER SCHOOL PROJECT</span>
            </div>
            <div className="visor-art-frame">
              <svg viewBox="0 0 120 120" fill="none">
                <path
                  d="M18 38V18h20m44 0h20v20m0 44v20H82m-44 0H18V82"
                  stroke="#9fb9b2"
                  strokeWidth="1.5"
                />
                <path
                  d="M60 29c-18 0-27 13-25 34 2 19 12 31 25 31s23-12 25-31c2-21-7-34-25-34Z"
                  stroke="#a1c4b8"
                  strokeWidth="1.2"
                />
                <path
                  d="M45 58h6m18 0h6M60 62l-3 12h6m-13 9c6 4 14 4 20 0"
                  stroke="#a1c4b8"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path d="M26 67h68" stroke="#aecdbd" strokeOpacity=".5" strokeDasharray="3 3" />
                <circle cx="47" cy="59" r="2" fill="#aecdbd" />
                <circle cx="73" cy="59" r="2" fill="#aecdbd" />
              </svg>
              <span>
                <Camera size={10} /> Capture <Upload size={10} /> Upload
              </span>
            </div>
          </div>
        </PreviewWindow>
      )}
      <span className="preview-caption">
        {kind === 'quizcraft'
          ? 'MAKE ROOM FOR YOUR NEXT IDEA.'
          : kind === 'mist'
            ? 'KEEP THE LITTLE MOMENTS.'
            : kind === 'music'
              ? 'A LITTLE LESS NOISE. A LOT MORE MUSIC.'
              : 'CURIOSITY, THROUGH A DIFFERENT LENS.'}
      </span>
    </div>
  )
}
