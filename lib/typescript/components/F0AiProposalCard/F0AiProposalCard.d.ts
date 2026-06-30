import React from "react";
import type { F0AiProposalCardProps } from "./F0AiProposalCard.types";
/**
 * F0AiProposalCard - Inline card proposing an entity for the user to confirm.
 *
 * Native counterpart of the web F0AiProposalCard: a module avatar with a
 * heading/subtitle, the proposed title and a truncatable description, and an
 * optional primary-action footer. The card only proposes; confirmation is wired
 * by the consumer via onPrimaryAction.
 *
 * @example
 * <F0AiProposalCard
 *   module="ai_ticketing"
 *   heading="Review before creating"
 *   subtitle="Customer Support · IT Support"
 *   title="Laptop screen flickering on battery"
 *   description="Issue: the screen flickers on battery..."
 *   seeMoreLabel="See more"
 *   primaryActionLabel="Confirm"
 *   onPrimaryAction={handleConfirm}
 * />
 */
declare const F0AiProposalCard: React.NamedExoticComponent<F0AiProposalCardProps>;
export { F0AiProposalCard };
//# sourceMappingURL=F0AiProposalCard.d.ts.map