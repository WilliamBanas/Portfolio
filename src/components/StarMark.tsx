type StarMarkProps = {
  className?: string
}

const branches = [0, 60, 120, 180, 240, 300]

export default function StarMark({ className }: StarMarkProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      {branches.map((angle) => (
        <g key={angle} transform={`rotate(${angle} 12 12)`}>
          <path d="M11.05 12C11.6 10.4 11.55 9.2 10.45 5.9Q10.65 3.6 12 3.6Q13.35 3.6 13.55 5.9C12.45 9.2 12.4 10.4 12.95 12Z" />
        </g>
      ))}
    </svg>
  )
}
