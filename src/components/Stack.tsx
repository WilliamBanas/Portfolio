import { stack } from '../data/stack'

export default function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="font-mono">
      <h2 id="stack-title" className="text-sm font-mono font-normal tracking-tight text-zinc-400">
        Stack Technique
      </h2>
      <dl className="mt-8 grid gap-8 sm:grid-cols-3">
        {stack.map((group) => (
          <div key={group.label}>
            <dt className="text-sm font-mono text-zinc-400">{group.label}</dt>
            <dd className="mt-2 text-zinc-200">
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
