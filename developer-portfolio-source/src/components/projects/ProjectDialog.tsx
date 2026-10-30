import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Circle,
  Plus,
  ShoppingBag,
  X,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import type { Project } from '../../data/portfolio'
import { CeramicVisual } from '../visuals/ProjectPreview'

function OrbitDemo() {
  const [period, setPeriod] = useState('30')
  const datasets: Record<string, { revenue: string; users: string; rate: string; bars: number[] }> =
    {
      '7': { revenue: '$6,420', users: '2,106', rate: '4.12%', bars: [30, 45, 39, 67, 56, 83, 95] },
      '30': {
        revenue: '$24,680',
        users: '8,492',
        rate: '4.28%',
        bars: [22, 36, 28, 48, 39, 58, 46, 64, 52, 78, 67, 88, 76, 95, 82, 100],
      },
      '90': {
        revenue: '$72,540',
        users: '25,281',
        rate: '4.36%',
        bars: [20, 29, 39, 31, 46, 57, 48, 68, 75, 64, 91, 100],
      },
    }
  const current = datasets[period]
  return (
    <div className="demo-orbit">
      <div className="demo-topline">
        <div>
          <p className="eyebrow">ORBIT / OVERVIEW</p>
          <h3>A clearer picture.</h3>
        </div>
        <label className="period-label">
          <span className="sr-only">Analytics time period</span>
          <select value={period} onChange={(event) => setPeriod(event.target.value)}>
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
          </select>
        </label>
      </div>
      <div className="demo-metrics" aria-live="polite">
        {[
          ['Total revenue', current.revenue],
          ['Active users', current.users],
          ['Conversion rate', current.rate],
        ].map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <small>
              <ArrowUpRight size={12} /> Sample data
            </small>
          </div>
        ))}
      </div>
      <div
        className="demo-chart"
        role="img"
        aria-label={`Illustrative revenue chart over ${period} days`}
      >
        <div className="demo-chart-title">
          <strong>Revenue overview</strong>
          <span>● Revenue</span>
        </div>
        <div className="demo-bars">
          {current.bars.map((height, i) => (
            <span
              key={`${period}-${i}`}
              style={{ height: `${height}%` }}
              title={`Sample period ${i + 1}: ${height} units`}
            />
          ))}
        </div>
        <div className="chart-axis">
          <span>{period} days ago</span>
          <span>Today</span>
        </div>
      </div>
      <p className="demo-hint">
        Try another date range to explore the dashboard. All metrics are illustrative.
      </p>
    </div>
  )
}

function FormaDemo() {
  const [selected, setSelected] = useState(0)
  const [bag, setBag] = useState(0)
  const [added, setAdded] = useState(false)
  const products = [
    { name: 'The Everyday Vessel', material: 'Hand-finished stoneware · Sand', price: 48 },
    { name: 'The Quiet Planter', material: 'Natural ceramic · Olive', price: 36 },
    { name: 'The Sunday Collection', material: 'A considered set of three', price: 98 },
  ]
  const product = products[selected]
  return (
    <div className="demo-forma">
      <div className="demo-forma-nav">
        <strong>forma®</strong>
        <span aria-live="polite">
          <ShoppingBag size={16} /> Your bag ({bag})
        </span>
      </div>
      <div className="demo-product-grid">
        <div className="demo-product-art">
          <CeramicVisual variation={selected + 1} />
        </div>
        <div className="demo-product-details">
          <p className="eyebrow">THE EVERYDAY COLLECTION</p>
          <h3>{product.name}</h3>
          <p>{product.material}</p>
          <p className="product-story">
            Simple objects for the moments in between. Thoughtfully shaped, beautifully imperfect,
            made for everyday living.
          </p>
          <fieldset className="product-choices">
            <legend>Explore the collection</legend>
            {products.map((item, i) => (
              <button
                type="button"
                key={item.name}
                onClick={() => {
                  setSelected(i)
                  setAdded(false)
                }}
                className={i === selected ? 'selected' : ''}
                aria-label={item.name}
                aria-pressed={i === selected}
              >
                {i + 1}
              </button>
            ))}
          </fieldset>
          <button
            type="button"
            className="button forma-add"
            onClick={() => {
              setBag(bag + 1)
              setAdded(true)
            }}
          >
            {added ? (
              <>
                <Check size={16} /> Added to your bag
              </>
            ) : (
              <>
                Add to bag <span>${product.price}</span>
              </>
            )}
          </button>
          <p className="demo-hint" aria-live="polite">
            {bag > 0
              ? `${bag} ${bag === 1 ? 'item' : 'items'} in your demo bag. No checkout or payment.`
              : 'An interactive concept store. No purchases or payments.'}
          </p>
        </div>
      </div>
    </div>
  )
}

function FocusDemo() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Explore something new', done: false },
    { id: 2, text: 'Build something meaningful', done: false },
    { id: 3, text: 'Make a little space', done: true },
  ])
  const [draft, setDraft] = useState('')
  const [message, setMessage] = useState('')
  const nextId = useRef(4)
  const completed = tasks.filter((task) => task.done).length
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!draft.trim()) return
    setTasks([...tasks, { id: nextId.current++, text: draft.trim(), done: false }])
    setMessage(`Added: ${draft.trim()}`)
    setDraft('')
  }
  return (
    <div className="demo-focus">
      <p className="eyebrow">✳ FOCUS / YOUR DAY</p>
      <h3>A little more focus.</h3>
      <p className="demo-focus-subtitle">Make room for what matters today.</p>
      <div className="focus-progress">
        <span>
          {completed} of {tasks.length} complete
        </span>
        <progress value={completed} max={tasks.length} aria-label="Completed tasks" />
      </div>
      <ul className="demo-task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <button
              type="button"
              onClick={() => {
                setTasks(
                  tasks.map((item) => (item.id === task.id ? { ...item, done: !item.done } : item)),
                )
                setMessage(`${task.text}: ${task.done ? 'marked incomplete' : 'completed'}`)
              }}
              className={task.done ? 'is-complete' : ''}
              aria-pressed={task.done}
            >
              {task.done ? <CheckCircle2 size={20} /> : <Circle size={20} />}
              <span>{task.text}</span>
              <ArrowDown size={14} />
            </button>
          </li>
        ))}
      </ul>
      <form className="demo-task-form" onSubmit={submit}>
        <label htmlFor="new-task" className="sr-only">
          New task
        </label>
        <input
          id="new-task"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          maxLength={100}
          placeholder="What would you like to focus on?"
          required
        />
        <button type="submit" aria-label="Add task" disabled={!draft.trim()}>
          <Plus size={19} />
        </button>
      </form>
      <span role="status" className="sr-only">
        {message}
      </span>
      <p className="demo-hint">Add a task or check one off. This demo resets when closed.</p>
    </div>
  )
}

export default function ProjectDialog({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const backdropPointerDown = useRef(false)
  useEffect(() => {
    const element = dialog.current
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    element?.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      element?.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus({ preventScroll: true })
    }
  }, [])
  return (
    <dialog
      ref={dialog}
      className={`project-dialog dialog-${project.id}`}
      aria-labelledby="demo-title"
      aria-describedby="demo-description"
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
          <span className="dialog-concept-tag">INTERACTIVE CONCEPT</span>
          <h2 id="demo-title">{project.title.split(' — ')[0]}</h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="dialog-close"
          aria-label="Close project demo"
          autoFocus
        >
          <X size={21} />
        </button>
      </div>
      <p id="demo-description" className="sr-only">
        An interactive portfolio concept. {project.description} Press Escape to close.
      </p>
      {project.id === 'orbit' ? (
        <OrbitDemo />
      ) : project.id === 'forma' ? (
        <FormaDemo />
      ) : (
        <FocusDemo />
      )}
    </dialog>
  )
}
