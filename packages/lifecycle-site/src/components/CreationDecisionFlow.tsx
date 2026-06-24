// "Should it live in F0 — and where?" decision map (dark-themed static SVG).
// Source: "[8.8] Close new contribution process" session.
//
// This map decides BOTH whether it belongs in F0 at all (exists? / extend? /
// useful beyond your team?) and, if so, where it lives — and it shows the
// criteria behind each branch and the reason for each destination, so the
// decisions Claude helps with are transparent (they're defined in the repo).

export function CreationDecisionFlow() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 bg-surface p-4">
      <svg
        viewBox="0 0 780 660"
        xmlns="http://www.w3.org/2000/svg"
        className="min-w-[720px]"
        role="img"
        aria-label="Decision map: does it already exist (use it)? would extending it cover it, same purpose plus an additive prop or variant (extend it)? will it be reused beyond a single screen (if not, keep it local)? if it belongs in F0, where does it live — Core (generic, used across two or more domains), Kit (a bundle for one functionality), or Domain specific (one domain, its team owns it)."
      >
        <defs>
          <marker id="dm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#9aa0a6" />
          </marker>
        </defs>

        <text x="470" y="20" fontSize="11" fill="#9aa0a6">◆ decision — Claude helps, using the rules in the repo</text>

        <rect x="90" y="26" width="320" height="42" rx="21" fill="#ffffff" opacity="0.03" />
        <rect x="90" y="26" width="320" height="42" rx="21" fill="none" stroke="#ffffff" strokeOpacity="0.16" />
        <text x="250" y="52" textAnchor="middle" fontSize="13" fontWeight="600" fill="#e8eaed">I want to add or change something in F0</text>

        {/* D1 */}
        <polygon points="250,80 365,132 250,184 135,132" fill="#6ea8fe" opacity="0.12" />
        <polygon points="250,80 365,132 250,184 135,132" fill="none" stroke="#6ea8fe" strokeWidth="1.8" />
        <text x="250" y="128" textAnchor="middle" fontSize="13" fontWeight="700" fill="#e8eaed">Does it already exist?</text>
        <text x="250" y="145" textAnchor="middle" fontSize="10.5" fill="#9aa0a6">Claude searches Storybook + repo</text>
        <rect x="470" y="110" width="290" height="44" rx="9" fill="#ffffff" opacity="0.06" />
        <text x="486" y="137" fontSize="12" fill="#c4c7cc">Use it — that's prototyping, not contributing</text>

        {/* D2 */}
        <polygon points="250,224 365,276 250,328 135,276" fill="#6ea8fe" opacity="0.12" />
        <polygon points="250,224 365,276 250,328 135,276" fill="none" stroke="#6ea8fe" strokeWidth="1.8" />
        <text x="250" y="272" textAnchor="middle" fontSize="13" fontWeight="700" fill="#e8eaed">Would extending cover it?</text>
        <text x="250" y="289" textAnchor="middle" fontSize="10.5" fill="#9aa0a6">same purpose + an additive prop/variant</text>
        <rect x="470" y="254" width="290" height="46" rx="9" fill="#ffffff" opacity="0.06" />
        <text x="486" y="274" fontSize="12" fill="#c4c7cc">Extend it — it's not a new component</text>
        <text x="486" y="291" fontSize="10.5" fill="#9aa0a6">always goes through review</text>

        {/* D3 */}
        <polygon points="250,368 365,420 250,472 135,420" fill="#6ea8fe" opacity="0.12" />
        <polygon points="250,368 365,420 250,472 135,420" fill="none" stroke="#6ea8fe" strokeWidth="1.8" />
        <text x="250" y="416" textAnchor="middle" fontSize="13" fontWeight="700" fill="#e8eaed">Will it be reused?</text>
        <text x="250" y="433" textAnchor="middle" fontSize="10.5" fill="#9aa0a6">a one-off for one screen stays local</text>
        <rect x="470" y="398" width="290" height="46" rx="9" fill="#ffffff" opacity="0.06" />
        <text x="486" y="418" fontSize="12" fill="#c4c7cc">Keep it local — a one-off in your product</text>
        <text x="486" y="435" fontSize="10.5" fill="#9aa0a6">one screen only · built from existing F0 pieces</text>

        {/* D4 */}
        <rect x="90" y="510" width="320" height="44" rx="11" fill="#6ea8fe" opacity="0.12" />
        <rect x="90" y="510" width="320" height="44" rx="11" fill="none" stroke="#6ea8fe" strokeWidth="1.8" />
        <text x="250" y="537" textAnchor="middle" fontSize="13" fontWeight="700" fill="#e8eaed">It belongs in F0 — where does it live?</text>

        {/* destinations with the why */}
        <rect x="40" y="586" width="224" height="56" rx="10" fill="#6ea8fe" opacity="0.12" />
        <rect x="40" y="586" width="224" height="56" rx="10" fill="none" stroke="#6ea8fe" />
        <text x="56" y="609" fontSize="13" fontWeight="700" fill="#8fb8ff">Core</text>
        <text x="56" y="627" fontSize="10.5" fill="#9aa0a6">generic — used across ≥2 domains</text>

        <rect x="284" y="586" width="180" height="56" rx="10" fill="#b08cff" opacity="0.12" />
        <rect x="284" y="586" width="180" height="56" rx="10" fill="none" stroke="#b08cff" />
        <text x="300" y="609" fontSize="13" fontWeight="700" fill="#c4b0ff">Kit</text>
        <text x="300" y="627" fontSize="10.5" fill="#9aa0a6">a bundle for one functionality</text>

        <rect x="484" y="586" width="276" height="56" rx="10" fill="#f0b357" opacity="0.14" />
        <rect x="484" y="586" width="276" height="56" rx="10" fill="none" stroke="#f0b357" />
        <text x="500" y="609" fontSize="13" fontWeight="700" fill="#f3c07b">Domain specific</text>
        <text x="500" y="627" fontSize="10.5" fill="#9aa0a6">reused within one domain — team owns it</text>

        <g stroke="#9aa0a6" strokeWidth="1.6" fill="none" markerEnd="url(#dm)">
          <path d="M250,68 L250,78" />
          <path d="M365,132 L468,132" />
          <path d="M250,184 L250,222" />
          <path d="M365,276 L468,277" />
          <path d="M250,328 L250,366" />
          <path d="M365,420 L468,421" />
          <path d="M250,472 L250,508" />
          <path d="M250,554 L250,584" />
        </g>

        <g fontSize="11" fill="#9aa0a6">
          <text x="400" y="124">yes</text>
          <text x="262" y="208">no</text>
          <text x="400" y="270">yes</text>
          <text x="262" y="352">no — different purpose</text>
          <text x="400" y="414">no</text>
          <text x="262" y="496">yes</text>
        </g>
      </svg>
    </div>
  )
}
