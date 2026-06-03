import {
  F0AvatarModule,
  F0Box,
  F0Button,
  F0Checkbox,
  F0Heading,
  F0Icon,
  F0Text,
} from "@factorialco/f0-react"
import {
  ArrowLeft,
  Calendar,
  Check,
  CheckCircle,
  Cross,
  ExternalLink,
  InfoCircle,
  People,
  Sparkles,
} from "@factorialco/f0-react/icons/app"
import type { ComponentProps, ComponentType, CSSProperties } from "react"
import { useState } from "react"

import { campusCopy } from "../shared/campusData"

// F0Box drops `style`; the cast opts it back in for the overlay/positioning and
// the teal selection highlight the variants can't express.
type F0BoxWithStyle = ComponentProps<typeof F0Box> & {
  style?: CSSProperties
  onClick?: () => void
}
const Box = F0Box as ComponentType<F0BoxWithStyle>

const lms = campusCopy.lmsPlan
const c = campusCopy.checkout

const money = (n: number) => `${lms.currency}${n.toFixed(2)}`

const TEAL = "#1F9E8F"
const TEAL_BG = "#EAF7F4"

/**
 * Three-step checkout for an existing-Trainings client adding the LMS that hosts
 * the AI literacy courses: 1) choose plan, 2) order summary, 3) success.
 */
export function CheckoutModal({
  onClose,
  onPaid,
  onOpenTraining,
}: {
  onClose: () => void
  onPaid: () => void
  onOpenTraining: () => void
}) {
  const [step, setStep] = useState<"plan" | "summary" | "success">("plan")
  const [planId, setPlanId] = useState<string>(lms.plans[0].id)
  const [agreed, setAgreed] = useState(false)

  const selectedPlan = lms.plans.find((p) => p.id === planId) ?? lms.plans[0]
  const total = selectedPlan.seatPrice * lms.seats

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding="lg"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        backgroundColor: "rgba(17, 24, 39, 0.45)",
      }}
    >
      <Box
        display="flex"
        background="primary"
        borderRadius="xl"
        overflow="hidden"
        style={{ width: "min(64rem, 95vw)", maxHeight: "92vh" }}
      >
        {/* LEFT — product features (plan step) or selected plan (summary step) */}
        <Box
          shrink={false}
          background="secondary"
          padding="xl"
          display="flex"
          flexDirection="column"
          gap="lg"
          style={{ width: "42%" }}
        >
          <F0AvatarModule module="company_trainings" size="lg" />

          {step === "summary" ? (
            <>
              <Box display="flex" flexDirection="column" gap="xs">
                <F0Heading content={c.title} variant="heading" as="h2" />
                <F0Text content={c.subtitle} variant="small" />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap="sm"
                padding="md"
                borderRadius="lg"
                border="default"
                borderColor="default"
                background="primary"
              >
                <Box display="flex" alignItems="center" justifyContent="between" gap="sm">
                  <F0Text content={`${selectedPlan.name} — ${lms.variant}`} variant="label" />
                  <F0Icon icon={Check} size="sm" color="positive" />
                </Box>
                <Box display="flex" alignItems="baseline" gap="xs">
                  <F0Heading content={money(selectedPlan.seatPrice)} variant="heading" as="h3" />
                  <F0Text content={lms.perPersonCaption} variant="small" />
                </Box>
              </Box>
            </>
          ) : (
            <>
              <Box display="flex" flexDirection="column" gap="xs">
                <F0Heading content={lms.productTitle} variant="heading" as="h2" />
                <F0Text content={lms.productDescription} variant="small" />
              </Box>
              <Box display="flex" flexDirection="column" gap="sm">
                <F0Text content={lms.businessLabel} variant="small" />
                <Box display="flex" flexDirection="column" gap="sm">
                  {lms.features.map((feature) => (
                    <Box key={feature} display="flex" alignItems="start" gap="sm">
                      <F0Icon icon={Check} size="sm" color="positive" />
                      <F0Text content={feature} variant="body" />
                    </Box>
                  ))}
                </Box>
              </Box>
            </>
          )}
        </Box>

        {/* RIGHT — choose plan / order summary / success */}
        <Box
          grow
          minWidth="0"
          padding="xl"
          display="flex"
          flexDirection="column"
          gap="lg"
          position="relative"
        >
          <Box position="absolute" style={{ top: "1rem", right: "1rem" }}>
            <F0Button label={c.close} hideLabel icon={Cross} variant="outline" onClick={onClose} />
          </Box>

          {step === "plan" ? (
            <>
              <Box display="flex" flexDirection="column" gap="xs">
                <F0Heading content={c.choosePlanTitle} variant="heading" as="h2" />
                <F0Text content={c.choosePlanSubtitle} variant="small" />
              </Box>

              <Box display="flex" flexDirection="column" gap="sm">
                {lms.plans.map((plan) => {
                  const selected = plan.id === planId
                  return (
                    <Box
                      key={plan.id}
                      onClick={() => setPlanId(plan.id)}
                      display="flex"
                      flexDirection="column"
                      gap="sm"
                      padding="md"
                      borderRadius="lg"
                      border="default"
                      borderColor="default"
                      style={{
                        cursor: "pointer",
                        backgroundColor: selected ? TEAL_BG : undefined,
                        boxShadow: selected ? `0 0 0 1.5px ${TEAL}` : undefined,
                      }}
                    >
                      <Box display="flex" alignItems="center" justifyContent="between" gap="sm">
                        <F0Text content={plan.name} variant="label" />
                        {plan.bestValue ? (
                          <Box
                            display="flex"
                            alignItems="center"
                            gap="xs"
                            paddingX="sm"
                            paddingY="xs"
                            borderRadius="md"
                            background="primary"
                            border="default"
                            borderColor="default"
                          >
                            <F0Icon icon={Sparkles} size="xs" />
                            <F0Text content={c.bestValue} variant="small" />
                          </Box>
                        ) : null}
                      </Box>
                      <Box display="flex" alignItems="baseline" gap="xs">
                        <F0Heading content={money(plan.seatPrice)} variant="heading" as="h3" />
                        <F0Text content={lms.perPersonCaption} variant="small" />
                      </Box>
                    </Box>
                  )
                })}
              </Box>

              {/* Footer */}
              <Box display="flex" alignItems="end" justifyContent="between" gap="md" grow>
                <Box display="flex" flexDirection="column" gap="xs">
                  <Box display="flex" alignItems="center" gap="xs">
                    <F0Text content={c.subscriptionLabel} variant="small" />
                    <F0Icon icon={InfoCircle} size="xs" color="secondary" />
                  </Box>
                  <Box display="flex" alignItems="center" gap="md">
                    <Box display="flex" alignItems="center" gap="xs">
                      <F0Icon icon={People} size="sm" color="secondary" />
                      <F0Text content={`${lms.seats} people`} variant="body" />
                    </Box>
                    <Box display="flex" alignItems="center" gap="xs">
                      <F0Icon icon={Calendar} size="sm" color="secondary" />
                      <F0Text content={c.billingMonthly} variant="body" />
                    </Box>
                  </Box>
                </Box>
                <F0Button
                  label={c.reviewOrder}
                  variant="default"
                  onClick={() => setStep("summary")}
                />
              </Box>
            </>
          ) : step === "summary" ? (
            <>
              <F0Heading content={c.summaryTitle} variant="heading" as="h2" />

              <Box
                display="flex"
                flexDirection="column"
                gap="md"
                padding="lg"
                borderRadius="lg"
                border="default"
                borderColor="default"
              >
                <Box display="flex" alignItems="start" justifyContent="between" gap="md">
                  <Box display="flex" flexDirection="column" gap="none">
                    <F0Text content={`${selectedPlan.name} ${lms.variant}`} variant="body" />
                    <F0Text
                      content={`${money(selectedPlan.seatPrice)}/mo × ${lms.seats} people`}
                      variant="small"
                    />
                  </Box>
                  <F0Text content={money(total)} variant="body" />
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="between"
                  gap="md"
                  borderTop="default"
                  borderColor="secondary"
                  paddingTop="md"
                >
                  <F0Text content={c.totalLabel} variant="label" />
                  <F0Heading content={money(total)} variant="heading" as="h3" />
                </Box>
              </Box>

              <F0Text
                content={`${money(total)} ${c.invoiceOn} ${c.invoiceDate}. ${c.taxesNote}`}
                variant="small"
              />

              <F0Checkbox
                title={c.terms}
                checked={agreed}
                onCheckedChange={(value: boolean) => setAgreed(Boolean(value))}
              />

              <Box display="flex" alignItems="center" justifyContent="between" gap="md">
                <Box display="flex" flexDirection="column" gap="none">
                  <Box display="flex" alignItems="center" gap="xs">
                    <F0Text content={c.amountDueToday} variant="small" />
                    <F0Icon icon={InfoCircle} size="xs" color="secondary" />
                  </Box>
                  <F0Text content="—" variant="body" />
                </Box>
                <Box display="flex" gap="sm">
                  <F0Button
                    label={c.back}
                    hideLabel
                    icon={ArrowLeft}
                    variant="outline"
                    onClick={() => setStep("plan")}
                  />
                  <F0Button
                    label={c.confirmPay}
                    variant="default"
                    disabled={!agreed}
                    onClick={() => {
                      onPaid()
                      setStep("success")
                    }}
                  />
                </Box>
              </Box>
            </>
          ) : (
            <>
              <F0Heading content={c.successHeading} variant="heading" as="h2" />

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="sm"
                padding="xl"
                borderRadius="lg"
                border="default"
                borderColor="default"
              >
                <F0Icon icon={CheckCircle} size="lg" color="positive" />
                <F0Text content={c.successTitle} variant="label" />
                <F0Text content={c.successDescription} variant="small" />
                <F0Button
                  label={c.setupGuide}
                  icon={ExternalLink}
                  variant="outline"
                  onClick={onOpenTraining}
                />
              </Box>

              <Box display="flex" justifyContent="end">
                <F0Button label={c.close} variant="outline" onClick={onOpenTraining} />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  )
}
