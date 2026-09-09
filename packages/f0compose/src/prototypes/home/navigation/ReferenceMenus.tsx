import { F0AvatarCompany, F0Icon, type IconType } from "@factorialco/f0-react"
import {
  Bell,
  Check,
  ChevronRight,
  ExternalLink,
  Question,
} from "@factorialco/f0-react/icons/app"
/** Imported from Factorial-navigation/factorial-2027-tabs; see ../hub/IMPORT.md. */
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react"
import { createPortal } from "react-dom"
export type HelpRow =
  | { kind: "header"; text: string }
  | { kind: "footer"; text: string }
  | { kind: "separator" }
  | { kind: "item"; label: string; icon: IconType; href?: string }
export function ProfileMenu({
  accountEmail,
  entities,
  selectedEntity,
  onSelectEntity,
  personal,
  help,
  labels,
  collapsed = false,
  children,
}: {
  accountEmail: string
  entities: Entity[]
  selectedEntity: string
  onSelectEntity: (id: string) => void
  personal: {
    label: string
    icon: IconType
    critical?: boolean
    onClick: () => void
  }[]
  help: HelpRow[]
  labels: { personal: string; help: string; notifications: string }
  /** Folded, Help and Notifications have no buttons of their own, so they fold
   *  into this menu and it becomes two-level. */
  collapsed?: boolean
  children: ReactNode
}) {
  const [open, setOpen] = useState(false)
  const [sub, setSub] = useState<"personal" | "help" | null>(null)
  const anchorRef = useRef<HTMLDivElement>(null)
  const popRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ left: number; bottom: number } | null>(null)

  const toggle = () => {
    const r = anchorRef.current?.getBoundingClientRect()
    if (r)
      setPos({
        left:
          (anchorRef.current
            ?.closest("[data-home-rail]")
            ?.getBoundingClientRect().right ?? r.right) + 8,
        bottom: window.innerHeight - r.bottom,
      })
    setSub(null)
    setOpen((o) => !o)
  }

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        !anchorRef.current?.contains(target) &&
        !popRef.current?.contains(target)
      )
        setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  const row = (key: "personal" | "help", icon: ReactNode, label: string) => (
    <button
      type="button"
      role="menuitem"
      className={`flex w-full cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-left text-base font-medium text-f1-foreground hover:bg-f1-background-hover${sub === key ? " bg-f1-background-secondary" : ""}`}
      onClick={() => setSub((s) => (s === key ? null : key))}
    >
      {icon}
      <span className="min-w-0 flex-1 truncate">{label}</span>
      <ChevronRight width={16} height={16} className="shrink-0" />
    </button>
  )

  return (
    <div ref={anchorRef} style={{ position: "relative", display: "flex" }}>
      <div onClick={toggle}>{children}</div>
      {open && pos
        ? createPortal(
            <div
              ref={popRef}
              style={{
                position: "fixed",
                left: pos.left,
                bottom: pos.bottom,
                zIndex: 60,
                display: "flex",
                alignItems: "flex-end",
                gap: 8,
              }}
            >
              <div
                role="menu"
                aria-label="Navigation menu"
                className="w-[248px] rounded-[14px] border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md"
              >
                <div className="p-2 text-sm font-medium text-f1-foreground-secondary">
                  {accountEmail}
                </div>
                {entities.map((entity) => (
                  <button
                    key={entity.id}
                    type="button"
                    role="menuitemradio"
                    aria-checked={entity.id === selectedEntity}
                    className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-left text-base font-medium text-f1-foreground hover:bg-f1-background-hover"
                    onClick={() => onSelectEntity(entity.id)}
                  >
                    <F0AvatarCompany
                      name={entity.name}
                      src={entity.src}
                      size="xs"
                    />
                    <span className="min-w-0 flex-1 truncate">
                      {entity.name}
                    </span>
                    {entity.id === selectedEntity && (
                      <F0Icon icon={Check} size="sm" color="info" />
                    )}
                  </button>
                ))}
                <div
                  role="separator"
                  className="my-1 h-px bg-f1-border-secondary"
                />
                {collapsed ? (
                  <>
                    {/* Folded only: Help and Notifications have lost their own
                        buttons, so the menu grows a level to hold them. */}
                    {row(
                      "personal",
                      <img
                        src="/brand/avatar.svg"
                        alt=""
                        className="flex size-5 shrink-0 items-center justify-center rounded rounded-full object-cover"
                      />,
                      labels.personal
                    )}
                    {row(
                      "help",
                      <Question width={20} height={20} className="shrink-0" />,
                      labels.help
                    )}
                    <button
                      type="button"
                      role="menuitem"
                      className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-left text-base font-medium text-f1-foreground hover:bg-f1-background-hover"
                      onClick={() => setOpen(false)}
                    >
                      <Bell width={20} height={20} className="shrink-0" />
                      <span className="min-w-0 flex-1 truncate">
                        {labels.notifications}
                      </span>
                    </button>
                  </>
                ) : (
                  // Expanded there's nothing to nest — the personal options ARE
                  // the menu. Same rows as the folded submenu draws, icons and
                  // the critical Sign out included: folding must not change what
                  // an option looks like, only how many levels you go through to
                  // reach it.
                  personal.map((o) => {
                    const Icon = o.icon
                    return (
                      <button
                        key={o.label}
                        type="button"
                        role="menuitem"
                        className={`flex w-full cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-left text-base font-medium text-f1-foreground hover:bg-f1-background-hover${o.critical ? " !text-f1-foreground-critical" : ""}`}
                        onClick={() => {
                          setOpen(false)
                          o.onClick()
                        }}
                      >
                        <Icon width={20} height={20} className="shrink-0" />
                        <span className="min-w-0 flex-1 truncate">
                          {o.label}
                        </span>
                      </button>
                    )
                  })
                )}
              </div>
              {sub ? (
                <div
                  role="menu"
                  aria-label="Navigation menu"
                  className="w-[216px] rounded-[14px] border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md"
                >
                  {sub === "personal"
                    ? personal.map((o) => {
                        const Icon = o.icon
                        return (
                          <button
                            key={o.label}
                            type="button"
                            role="menuitem"
                            className={`flex w-full cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-left text-base font-medium text-f1-foreground hover:bg-f1-background-hover${o.critical ? " !text-f1-foreground-critical" : ""}`}
                            onClick={() => {
                              setOpen(false)
                              o.onClick()
                            }}
                          >
                            <Icon width={20} height={20} className="shrink-0" />
                            <span className="min-w-0 flex-1 truncate">
                              {o.label}
                            </span>
                          </button>
                        )
                      })
                    : help.map((r, i) =>
                        r.kind === "separator" ? (
                          <div
                            key={`s${i}`}
                            className="mx-2 my-1 h-px bg-f1-border-secondary"
                          />
                        ) : r.kind === "header" || r.kind === "footer" ? (
                          <div
                            key={`h${i}`}
                            className="px-2 py-1.5 text-sm text-f1-foreground-secondary"
                          >
                            {r.text}
                          </div>
                        ) : (
                          <button
                            key={r.label}
                            type="button"
                            role="menuitem"
                            className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-left text-base font-medium text-f1-foreground hover:bg-f1-background-hover"
                            onClick={() => {
                              setOpen(false)
                              if (r.href) window.open(r.href, "_blank")
                            }}
                          >
                            <r.icon
                              width={20}
                              height={20}
                              className="shrink-0"
                            />
                            <span className="min-w-0 flex-1 truncate">
                              {r.label}
                            </span>
                          </button>
                        )
                      )}
                </div>
              ) : null}
            </div>,
            document.body
          )
        : null}
    </div>
  )
}

type Entity = {
  id: string
  name: string
  mark?: string
  tone?: string
  src?: string
}

export function HelpMenu({ label, rows }: { label: string; rows: HelpRow[] }) {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLDivElement>(null)
  const popRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ left: number; bottom: number } | null>(null)

  const place = useCallback(() => {
    const r = anchorRef.current?.getBoundingClientRect()
    if (r)
      setPos({
        left:
          (anchorRef.current
            ?.closest("[data-home-rail]")
            ?.getBoundingClientRect().right ?? r.right) + 8,
        bottom: window.innerHeight - r.bottom,
      })
  }, [])

  const toggle = () => {
    place()
    setOpen((o) => !o)
  }

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        !anchorRef.current?.contains(target) &&
        !popRef.current?.contains(target)
      )
        setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    const onScroll = () => setOpen(false)
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    window.addEventListener("resize", onScroll)
    window.addEventListener("scroll", onScroll, true)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
      window.removeEventListener("resize", onScroll)
      window.removeEventListener("scroll", onScroll, true)
    }
  }, [open])

  return (
    <div ref={anchorRef} style={{ position: "relative", display: "flex" }}>
      <button
        type="button"
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={toggle}
        className="f0c-pressable flex size-8 cursor-pointer items-center justify-center rounded-[10px] hover:bg-f1-background-secondary"
      >
        <F0Icon icon={Question} size="md" color="default" />
      </button>
      {open && pos
        ? createPortal(
            <>
              <div
                ref={popRef}
                role="menu"
                aria-label="Navigation menu"
                className="overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background text-f1-foreground shadow-md"
                style={{
                  position: "fixed",
                  left: pos.left,
                  bottom: pos.bottom,
                  minWidth: 216,
                  width: "max-content",
                  paddingTop: 4,
                  paddingBottom: 4,
                  zIndex: 60,
                }}
              >
                {rows.map((row, i) => {
                  if (row.kind === "separator")
                    return (
                      <div
                        key={i}
                        className="bg-f1-border-secondary"
                        style={{ height: 1, margin: "6px 0" }}
                      />
                    )
                  if (row.kind === "header")
                    return (
                      <div
                        key={i}
                        className="text-f1-foreground-secondary"
                        style={{
                          padding: "8px 12px 4px",
                          fontSize: 13,
                          fontWeight: 500,
                        }}
                      >
                        {row.text}
                      </div>
                    )
                  if (row.kind === "footer")
                    return (
                      <div
                        key={i}
                        className="text-f1-foreground-secondary"
                        style={{ padding: "4px 12px 8px", fontSize: 13 }}
                      >
                        {row.text}
                      </div>
                    )
                  const content = (
                    <>
                      <F0Icon
                        icon={row.icon}
                        size="md"
                        className="text-f1-icon"
                      />
                      <span style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>
                        {row.label}
                      </span>
                      {row.href ? (
                        <F0Icon
                          icon={ExternalLink}
                          size="sm"
                          color="secondary"
                        />
                      ) : null}
                    </>
                  )
                  const rowStyle: CSSProperties = {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    width: "100%",
                    padding: "8px 20px 8px 12px",
                    textAlign: "left",
                  }
                  return row.href ? (
                    <a
                      key={i}
                      className="text-f1-foreground hover:bg-f1-background-hover"
                      style={{ ...rowStyle, textDecoration: "none" }}
                      href={row.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      {content}
                    </a>
                  ) : (
                    <button
                      key={i}
                      type="button"
                      className="text-f1-foreground hover:bg-f1-background-hover"
                      style={{
                        ...rowStyle,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onClick={() => setOpen(false)}
                    >
                      {content}
                    </button>
                  )
                })}
              </div>
            </>,
            document.body
          )
        : null}
    </div>
  )
}
