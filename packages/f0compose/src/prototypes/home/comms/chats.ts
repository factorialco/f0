import { avatarFor } from "@/fixtures/helpers"

/**
 * Comms fixtures — the direct messages and channels in the nav's Comms
 * section, and the threads behind them (Figma 2707:406513).
 *
 * The fixture world is a Spanish retail operation: a couple of shops, a
 * warehouse, and the shift chatter between them.
 */

export type ChatId =
  | "lucia"
  | "pablo"
  | "anuncios"
  | "incidencias"
  | "turno-manana"
  | "tienda-centro"
  | "almacen-getafe"
  | "encargados"

export type ChatAuthor = {
  name: string
  seed: string
  /**
   * The author's colour as an "R G B" triple, NOT a hex.
   *
   * Chat clients tint each speaker so a busy channel is scannable, and
   * the Figma frame does the same — but with raw fills, so there is no
   * f0 token to reach for (only Raúl's happens to land on
   * foreground-warning). Values are sampled off the frame's render.
   *
   * A triple rather than a hex because the bubble needs the SAME colour
   * at 6% alpha: `rgb(var(--f0c-author) / 0.06)`. Both are applied
   * through `--f0c-author` in the stylesheet, which also lightens the
   * name for dark mode — see `.f0c-chat-author` in Home.tsx.
   */
  rgb: string
}

// `satisfies`, not an annotation: `Record<string, ChatAuthor>` would
// widen the keys to `string`, so every CHAT_AUTHORS[key] lookup would
// typecheck and a mistyped author would only fail at runtime.
export const CHAT_AUTHORS = {
  nuria: { name: "Nuria Castro", seed: "nuria-castro", rgb: "104 87 64" },
  julio: {
    name: "Julio Rodriguez Soares",
    seed: "julio-rodriguez",
    rgb: "68 78 174",
  },
  // #ac5820 — the one author tint that IS an f0 token
  // (Foreground/Warning/default). Kept as a triple like the others so
  // every bubble derives its wash the same way.
  raul: {
    name: "Raúl Siguenza Sánchez",
    seed: "raul-siguenza",
    rgb: "172 88 32",
  },
  lucia: { name: "Lucía Fernandez", seed: "lucia-f", rgb: "22 114 106" },
  pablo: { name: "Pablo Navarro", seed: "pablo-n", rgb: "150 63 117" },
  marta: { name: "Marta Ibáñez", seed: "marta-ibanez", rgb: "58 96 168" },
  diego: { name: "Diego Ferrer", seed: "diego-ferrer", rgb: "126 74 156" },
} satisfies Record<string, ChatAuthor>

export type AuthorKey = keyof typeof CHAT_AUTHORS

export type ChatMessage = {
  id: string
  /** Key into CHAT_AUTHORS; omitted on your own messages. */
  author?: AuthorKey
  /** Leading @mention, rendered in f0's warning token. */
  mention?: string
  body: string
  /** A message being replied to, quoted inside your own bubble. */
  quote?: { author: AuthorKey; mention?: string; body: string }
  /** Read receipt under your own message. */
  readAt?: string
}

export type ChatCall = {
  /** "4 min ago" — the call card sits inline in the thread. */
  startedAgo: string
  participants: AuthorKey[]
  extraParticipants: number
}

export type Chat = {
  id: ChatId
  title: string
  kind: "dm" | "channel"
  /** Channels show an emoji avatar, DMs a person avatar. */
  emoji?: string
  seed?: string
  unread?: number
  messages: ChatMessage[]
  call?: ChatCall
}

const SHIFT = "Cambio de turno — Tienda Centro"

export const CHATS: Chat[] = [
  {
    id: "lucia",
    title: "Lucía Fernandez",
    kind: "dm",
    seed: "lucia-f",
    unread: 1,
    messages: [
      {
        id: "l1",
        author: "lucia",
        body: "¿Puedes cubrir el sábado por la mañana? Tengo médico.",
      },
      { id: "l2", body: "Sí, sin problema. Lo apunto.", readAt: "Read 09:12" },
      {
        id: "l3",
        author: "lucia",
        body: "Gracias, te debo una ☕",
      },
    ],
  },
  {
    id: "pablo",
    title: "Pablo Navarro",
    kind: "dm",
    seed: "pablo-n",
    messages: [
      {
        id: "p1",
        author: "pablo",
        body: "El pedido de Getafe llega mañana a primera hora.",
      },
      {
        id: "p2",
        body: "Perfecto, aviso al turno de mañana.",
        readAt: "Read 18:40",
      },
    ],
  },
  {
    id: "anuncios",
    title: "Anuncios",
    kind: "channel",
    emoji: "📰",
    unread: 2,
    messages: [
      {
        id: "a1",
        author: "marta",
        mention: "@Todos",
        body: "Nueva política de vacaciones publicada en el Handbook.",
      },
      {
        id: "a2",
        author: "marta",
        body: "El cierre de mes se adelanta al día 28.",
      },
    ],
  },
  {
    id: "incidencias",
    title: "Incidencias",
    kind: "channel",
    emoji: "🚨",
    messages: [
      {
        id: "i1",
        author: "diego",
        body: "La caja 2 de Tienda Centro no imprime tickets.",
      },
      {
        id: "i2",
        author: "raul",
        body: "Voy para allá, llevo el rollo de repuesto.",
      },
      { id: "i3", body: "Resuelto, gracias 🙌", readAt: "Read 11:05" },
    ],
  },
  {
    id: "turno-manana",
    title: "Turno mañana",
    kind: "channel",
    emoji: "⭐",
    unread: 3,
    // The thread in Figma 2707:406513, message for message.
    messages: [
      { id: "t1", author: "nuria", mention: "@Aviso", body: SHIFT },
      { id: "t2", author: "julio", body: SHIFT },
      { id: "t3", author: "raul", body: SHIFT },
      {
        id: "t4",
        quote: { author: "nuria", mention: "@Aviso", body: SHIFT },
        body: "Ok!",
        readAt: "Read 22:14",
      },
    ],
    call: {
      startedAgo: "4 min ago",
      participants: ["nuria", "julio", "raul"],
      extraParticipants: 2,
    },
  },
  {
    id: "tienda-centro",
    title: "Tienda centro",
    kind: "channel",
    emoji: "🛍️",
    messages: [
      {
        id: "tc1",
        author: "lucia",
        body: "Escaparate de temporada montado, os dejo fotos.",
      },
      {
        id: "tc2",
        author: "nuria",
        body: "Queda genial. ¿Movemos la mesa de novedades a la entrada?",
      },
    ],
  },
  {
    id: "almacen-getafe",
    title: "Almacén Getafe",
    kind: "channel",
    emoji: "📦",
    messages: [
      {
        id: "ag1",
        author: "pablo",
        body: "Quedan 12 palés libres, cabe el pedido de la semana que viene.",
      },
      {
        id: "ag2",
        author: "diego",
        body: "Reservo dos para las devoluciones.",
      },
    ],
  },
  {
    id: "encargados",
    title: "Encargados",
    kind: "channel",
    emoji: "🌡️",
    messages: [
      {
        id: "e1",
        author: "marta",
        mention: "@Encargados",
        body: "Recordad cerrar los turnos antes del viernes.",
      },
      { id: "e2", body: "Hecho por mi parte.", readAt: "Read 16:20" },
    ],
  },
]

export const CHATS_BY_ID = Object.fromEntries(
  CHATS.map((chat) => [chat.id, chat])
) as Record<ChatId, Chat>

export const DIRECT_CHATS = CHATS.filter((chat) => chat.kind === "dm")
export const CHANNEL_CHATS = CHATS.filter((chat) => chat.kind === "channel")

export function authorAvatar(key: AuthorKey): string {
  return avatarFor(CHAT_AUTHORS[key].seed)
}

/** First + last name, for the avatar components' initials fallback. */
export function authorNames(key: AuthorKey): {
  firstName: string
  lastName: string
} {
  const [firstName, ...rest] = CHAT_AUTHORS[key].name.split(" ")
  return { firstName, lastName: rest.join(" ") }
}
