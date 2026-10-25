type StarMarkProps = {
  className?: string
}

const branches = [0, 60, 120, 180, 240, 300]

export default function StarMark({ className }: StarMarkProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      {branches.map((angle) => (
        <g key={angle} transform={`rotate(${angle} 12 12)`}>
          <path d="M10.9 12C11.5 10.4 11.55 9.2 10.45 5.9C10.229 5.236 10.6 3.6 12 3.6C13.4 3.6 13.771 5.236 13.55 5.9C12.45 9.2 12.5 10.4 13.1 12Z" />
        </g>
      ))}
    </svg>
  )
}
