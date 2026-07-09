// The single most important fork on the site: are you building a screen with
// F0 (prototype), or changing F0 itself (contribute)? Everything else hangs
// off this distinction.

type Path = {
  href: string
  eyebrow: string
  title: string
  body: string
  cta: string
}

const paths: Path[] = [
  {
    href: "#prototype",
    eyebrow: "What you'll do most days",
    title: "Prototype a screen",
    body: "Assemble a screen out of components that already exist. You don't change the design system — you use it.",
    cta: "How to prototype",
  },
  {
    href: "#contribute",
    eyebrow: "Once in a while",
    title: "Contribute to F0",
    body: "Add or change something in the design system itself: a new component, a missing prop, a behaviour change.",
    cta: "The contribution process",
  },
]

export function PathSelector() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {paths.map((p) => (
        <a
          key={p.href}
          href={p.href}
          className="group flex flex-col rounded-2xl border border-ink/10 bg-white p-7 shadow-sm transition hover:border-accent/50 hover:shadow-md"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            {p.eyebrow}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{p.title}</h3>
          <p className="mt-3 flex-1 text-muted">{p.body}</p>
          <span className="mt-5 text-sm font-semibold text-accent group-hover:underline">
            {p.cta} →
          </span>
        </a>
      ))}
    </div>
  )
}
