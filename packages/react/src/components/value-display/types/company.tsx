/**
 * Company cell type for displaying company information with avatars.
 * Shows company name alongside a company avatar with optional badge.
 */
import { F0Avatar } from "@/components/avatars/F0Avatar"
import { WithAvatarBadge } from "./types"

interface CompanyValue {
  name: string
  src?: string
}
export type CompanyCellValue = WithAvatarBadge<CompanyValue>

export const CompanyCell = (args: CompanyCellValue) => (
  <div className="flex items-center gap-2">
    <F0Avatar
      avatar={{
        type: "company",
        name: args.name,
        src: args.src,
      }}
      size="xs"
    />
    <span className="text-f1-foreground">{args.name.toString()}</span>
  </div>
)
