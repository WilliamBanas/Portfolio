export type StackGroup = {
  label: string
  items: string[]
}

export const stack: StackGroup[] = [
  { label: 'Langages', items: ['JavaScript', 'TypeScript'] },
  { label: 'Front-end', items: ['React', 'Next.js', 'Svelte'] },
  { label: 'Back-end', items: ['NestJS', 'Node.js'] },
]
