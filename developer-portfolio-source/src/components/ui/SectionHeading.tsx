export function SectionHeading({
  number,
  label,
  title,
  accent,
  description,
}: {
  number: string
  label: string
  title: string
  accent?: string
  description?: string
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{number}</span>
        <span className="eyebrow-line" />
        {label}
      </p>
      <h2>
        {title}
        {accent && <span className="text-accent"> {accent}</span>}
        <span className="text-accent">.</span>
      </h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}
