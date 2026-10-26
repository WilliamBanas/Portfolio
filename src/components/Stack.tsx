import { stack } from '../data/stack'

export default function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="font-mono">
      <h2 id="stack-title" className="text-sm font-normal tracking-tight text-zinc-400">
        Stack Technique
      </h2>
      <dl className="mt-8 divide-y divide-zinc-900">
        {stack.map((group) => (
          <div key={group.label} className="grid grid-cols-[7rem_1fr] items-center gap-x-6 py-4 first:pt-0 last:pb-0">
            <dt className="text-sm text-zinc-400">{group.label}</dt>
            <dd className="text-zinc-200">
              <ul className="flex flex-wrap items-center gap-x-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-x-2 before:content-['·'] before:text-zinc-600 first:before:hidden"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
