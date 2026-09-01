/**
 * The Communities feed (Figma 1350:178xxx — the widget's two posts) plus
 * the rest of the wall, per Oskar (2026-09-01).
 *
 * DATA, not JSX: the widget shipped with its two posts written out inline
 * and a `PostFooter` whose counts were hardcoded, so every extra post
 * would have carried the same 12 ❤️ and the same 14 views — the tell that
 * a feed is fake. Reactions, views and comments are per post now.
 *
 * Faces are deterministic (`avatarFor(seed)`), and the seeds are shared
 * with the rest of the prototype on purpose: `emp-00n` is the shared
 * `employees` fixture, so Marie Curie wears the same face here as in the
 * People table, and the chat authors keep the seeds `comms/chats.ts`
 * gives them. One person, one face, wherever they show up.
 */

export type CommunityPost = {
  id: string
  author: string
  /** Avatar seed — see the note above about sharing them across screens. */
  seed: string
  /** The community it was posted in. */
  community: string
  /** Literal, like every other date in these fixtures ("2 days ago"). */
  posted: string
  /** Not every post has a headline; some are just a body. */
  title?: string
  body: string
  /** Optional attachment, 3:2 so the slot can be reserved before it loads. */
  image?: string
  reactions: { emoji: string; count: number; mine?: boolean }[]
  views: number
  comments: number
}

const picsum = (seed: string) => `https://picsum.photos/seed/${seed}/600/400`

export const COMMUNITY_POSTS: CommunityPost[] = [
  // The two from the frame, unchanged in copy — only their counts moved
  // out of the shared footer.
  {
    id: "taco-tuesday",
    author: "Eleanor Pena",
    seed: "eleanor",
    community: "Company updates",
    posted: "2 days ago",
    title: "Taco Tuesday party! 🌮🍻",
    body: "For anyone interested in unwinding after a busy week on the trails… we're planning a casual get-together at The Old Pine Tavern this Tuesday. Feel free to join and bring along any fun tales from the park. home to see y'all there!",
    reactions: [
      { emoji: "❤️", count: 12, mine: true },
      { emoji: "🍻", count: 8 },
    ],
    views: 14,
    comments: 3,
  },
  {
    // Marie Curie is Head of People in the shared fixture — the one person
    // on the wall who would actually be announcing a policy.
    id: "remote-weeks",
    author: "Marie Curie",
    seed: "emp-002",
    community: "Company updates",
    posted: "1 day ago",
    title: "Four weeks of work from anywhere, from January",
    body: "You'll be able to work from any country we have an entity in for up to four weeks a year, in blocks of one week or more. Request it like any other absence — no separate approval chain. The policy page goes live on Monday and I'll be in the comments all afternoon.",
    reactions: [
      { emoji: "🎉", count: 47 },
      { emoji: "🙌", count: 21 },
      { emoji: "✈️", count: 9 },
    ],
    views: 312,
    comments: 24,
  },
  {
    // Ada Lovelace is VP of Engineering in the shared fixture. No title:
    // some posts are just a body, and the feed reads better for it.
    id: "payroll-export",
    author: "Ada Lovelace",
    seed: "emp-001",
    community: "Engineering",
    posted: "3 days ago",
    body: "The payroll export dropped from 9.2s to 1.4s at p95 this week. It was never the query — we were serialising the whole employee tree per row instead of once per request. Same fix probably applies to the contracts export, if anyone wants it.",
    reactions: [
      { emoji: "🚀", count: 18 },
      { emoji: "👏", count: 11 },
    ],
    views: 96,
    comments: 7,
  },
  {
    id: "olga-portraits",
    author: "René Galindo",
    seed: "rene",
    community: "Product Design",
    posted: "5 days ago",
    title:
      "Olga Steinepreis' self portraits unpack the pressure to be the 'perfect' mother",
    body: "The Barcelona-based visual artist is transforming reality into blotchy collaged forms that merge medieval and folkloric inspirations.",
    image: picsum("f0compose-post"),
    reactions: [
      { emoji: "❤️", count: 24, mine: true },
      { emoji: "🎨", count: 6 },
    ],
    views: 41,
    comments: 9,
  },
  {
    id: "trail-run",
    author: "Lucía Fernandez",
    seed: "lucia-f",
    community: "Running club",
    posted: "4 days ago",
    title: "Sunday: 14 km around Collserola ⛰️",
    body: "Meeting at Baixador de Vallvidrera at 8:30. Steady pace, nobody gets dropped, coffee at the top. Bring more water than you think you need — there's one fountain and it was dry last month.",
    image: picsum("f0compose-trail"),
    reactions: [
      { emoji: "🏃", count: 15 },
      { emoji: "☕", count: 12 },
    ],
    views: 63,
    comments: 11,
  },
  {
    id: "phone-booths",
    author: "Nuria Castro",
    seed: "nuria-castro",
    community: "Barcelona office",
    posted: "6 days ago",
    title: "The phone booths are in 🎧",
    body: "Four of them, on the third floor by the kitchen. No booking needed for anything under 30 minutes — if you're in there for a workshop, put it on the calendar so people can see it's taken.",
    image: picsum("f0compose-booths"),
    reactions: [
      { emoji: "🙌", count: 33 },
      { emoji: "🎧", count: 8 },
    ],
    views: 187,
    comments: 5,
  },
  {
    id: "book-club",
    author: "Raúl Siguenza Sánchez",
    seed: "raul-siguenza",
    community: "Book club",
    posted: "1 week ago",
    body: "This month's pick is Thinking in Systems by Donella Meadows — short, and it will ruin how you read a roadmap forever. We meet the last Thursday at 18:00, and you're welcome even if you only got through the first chapter. Especially then.",
    reactions: [
      { emoji: "📚", count: 14 },
      { emoji: "🧠", count: 5 },
    ],
    views: 52,
    comments: 8,
  },
  {
    id: "new-joiners",
    author: "Marta Ibáñez",
    seed: "marta-ibanez",
    community: "New joiners",
    posted: "1 week ago",
    title: "Nine people joined us this week 👋",
    body: "Say hello to the new folks in Sales, Support and Engineering — they're all in #new-joiners and most of them are still figuring out where the good coffee is. If you're their buddy, your first check-in is already on your calendar.",
    reactions: [
      { emoji: "👋", count: 58 },
      { emoji: "❤️", count: 19 },
    ],
    views: 241,
    comments: 16,
  },
]
