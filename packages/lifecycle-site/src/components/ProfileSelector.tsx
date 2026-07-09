import { profiles, type ProfileId } from "../data/profiles"

export function ProfileSelector({
  selected,
  onSelect,
}: {
  selected: ProfileId | null
  onSelect: (id: ProfileId | null) => void
}) {
  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {profiles.map((p) => {
          const isSelected = selected === p.id
          return (
            <button
              key={p.id}
              onClick={() => onSelect(isSelected ? null : p.id)}
              className={`text-left rounded-2xl border p-5 transition ${
                isSelected
                  ? "border-accent bg-accent/5 shadow-md"
                  : "border-ink/10 bg-white shadow-sm hover:border-accent/40 hover:shadow-md"
              }`}
            >
              <h3 className="text-base font-semibold">{p.label}</h3>
              <p className="mt-2 text-sm text-muted">{p.shortDescription}</p>
              <p className="mt-3 text-xs font-medium text-accent">
                Primary tool: {p.primaryTool}
              </p>
            </button>
          )
        })}
      </div>
      {selected && <ProfileDetail id={selected} />}
    </div>
  )
}

function ProfileDetail({ id }: { id: ProfileId }) {
  const profile = profiles.find((p) => p.id === id)
  if (!profile) return null

  return (
    <article className="rounded-2xl border border-accent/30 bg-white p-8 shadow-md">
      <header>
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          You are
        </p>
        <h3 className="mt-1 text-2xl font-semibold">{profile.label}</h3>
        <p className="mt-2 text-muted">{profile.shortDescription}</p>
      </header>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Your responsibilities
          </h4>
          <ul className="mt-2 space-y-1.5 text-sm">
            {profile.responsibilities.map((r) => (
              <li key={r} className="flex gap-2">
                <span className="mt-0.5 text-accent">→</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Typical questions you ask
          </h4>
          <ul className="mt-2 space-y-1.5 text-sm">
            {profile.typicalQuestions.map((q) => (
              <li key={q} className="flex gap-2">
                <span className="mt-0.5 text-muted">?</span>
                <span className="italic">{q}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-6 rounded-xl border border-ink/10 bg-paper p-4">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
          Start here
        </h4>
        <p className="mt-1 text-sm">{profile.startHere}</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted">
          Phases that apply to you
        </span>
        <div className="flex flex-wrap gap-1.5">
          {profile.appliesToPhases.map((ph) => (
            <a
              key={ph}
              href={`#phase-${ph}`}
              className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium hover:border-accent hover:text-accent"
            >
              {ph}
            </a>
          ))}
        </div>
      </div>

      {profile.skills.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">
            Skills you load
          </span>
          <div className="flex flex-wrap gap-1.5">
            {profile.skills.map((s) => (
              <span
                key={s}
                className="rounded-md bg-ink/5 px-2 py-1 font-mono text-[11px]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
