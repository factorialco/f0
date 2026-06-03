import {
  F0Alert,
  F0Box,
  F0Button,
  F0Card,
  F0Heading,
  F0Icon,
  F0TagStatus,
  F0Text,
  StandardLayout,
} from "@factorialco/f0-react"
import {
  ArrowRight,
  Bookmark,
  BookmarkFilled,
  CheckCircle,
  Cross,
  ExternalLink,
  ShoppingCart,
} from "@factorialco/f0-react/icons/app"
import {
  Page,
  PageHeader,
  ResourceHeader,
} from "@factorialco/f0-react/dist/experimental"
import { useState } from "react"
import type { ComponentProps, ComponentType, CSSProperties } from "react"

import { type CampusBundle, campusCopy } from "../shared/campusData"
import { CheckoutModal } from "./CheckoutModal"

// F0Box drops `style` from its public props; the cast opts it back in for the
// one layout-only need the variants can't express (sticky panel offset).
type F0BoxWithStyle = ComponentProps<typeof F0Box> & { style?: CSSProperties }
const Box = F0Box as ComponentType<F0BoxWithStyle>

/**
 * Right-hand acquisition panel. Before purchase: price per seat + "Add to cart"
 * (quote later). After purchase: the panel flips to an owned state — the bundle
 * is now managed from the Training module, so the action becomes "View in
 * Training".
 */
function AcquisitionPanel({
  bundle,
  saved,
  onToggleSave,
  purchased,
  onCheckout,
  onOpenTraining,
}: {
  bundle: CampusBundle
  saved: boolean
  onToggleSave: () => void
  purchased: boolean
  onCheckout: () => void
  onOpenTraining: () => void
}) {
  return (
    <Box
      shrink={false}
      width="80"
      position="sticky"
      style={{ top: "0.5rem" }}
      display="flex"
      flexDirection="column"
      gap="lg"
      padding="lg"
      borderRadius="xl"
      border="default"
      borderColor="default"
      background="primary"
    >
      {/* Price */}
      <Box display="flex" flexDirection="column" gap="xs">
        <Box display="flex" alignItems="baseline" gap="xs">
          <F0Heading content={bundle.pricing.perSeat} variant="heading-large" as="h2" />
          <F0Text content={bundle.pricing.unit} variant="body" />
        </Box>
        <F0Text content={campusCopy.acquisition.unitCaption} variant="small" />
      </Box>

      <Box display="flex" flexDirection="column" gap="xs">
        <Box display="flex" gap="xs" flexWrap="wrap">
          <F0TagStatus
            text={`Bundle · ${bundle.courses.length} courses`}
            variant="neutral"
          />
          {purchased ? (
            <F0TagStatus
              text={campusCopy.catalog.states.purchased.tag}
              variant="positive"
            />
          ) : null}
        </Box>
        <F0Text content={campusCopy.acquisition.bundleNote} variant="small" />
      </Box>

      {/* CTAs — stretch to panel width */}
      <Box display="flex" flexDirection="column" gap="sm">
        {purchased ? (
          <F0Button
            label={campusCopy.catalog.actions.viewInTraining}
            icon={ExternalLink}
            variant="default"
            onClick={onOpenTraining}
          />
        ) : (
          <F0Button
            label={campusCopy.acquisition.addToCart}
            icon={ShoppingCart}
            variant="default"
            onClick={onCheckout}
          />
        )}
        <F0Button
          label={saved ? "Saved" : campusCopy.saveCta}
          icon={saved ? BookmarkFilled : Bookmark}
          variant="outline"
          onClick={onToggleSave}
        />
      </Box>

      {/* Reassurance — quote flow before purchase, management note after */}
      <Box
        display="flex"
        flexDirection="column"
        gap="sm"
        borderTop="default"
        borderColor="secondary"
        paddingTop="md"
      >
        {purchased ? (
          <Box display="flex" alignItems="start" gap="sm">
            <F0Icon icon={CheckCircle} size="sm" color="positive" />
            <F0Text
              content={campusCopy.acquisition.purchasedNote}
              variant="small"
            />
          </Box>
        ) : (
          <>
            <F0Text content={campusCopy.acquisition.quoteNote} variant="small" />
            <F0Text content={campusCopy.acquisition.cartHint} variant="small" />
          </>
        )}
      </Box>
    </Box>
  )
}

export function BundleDetail({
  bundle,
  saved,
  onToggleSave,
  purchased,
  onPurchase,
  onBack,
  onViewCourse,
  onOpenTraining,
}: {
  bundle: CampusBundle
  saved: boolean
  onToggleSave: () => void
  purchased: boolean
  onPurchase: () => void
  onBack: () => void
  onViewCourse: (courseId: string) => void
  onOpenTraining: () => void
}) {
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "company_trainings",
              name: "Factorial Campus",
              href: "/p/factorial-campus-v2",
            }}
            breadcrumbs={[{ id: "bundle", label: bundle.title }]}
          />
          <ResourceHeader
            title={bundle.title}
            description={bundle.tagline}
            secondaryActions={[{ label: "Back", icon: Cross, onClick: onBack }]}
            metadata={[
              {
                label: "Courses",
                value: { type: "text", content: "3 courses per role" },
              },
              {
                label: "Validity",
                value: { type: "text", content: "Valid for 12 months" },
              },
              {
                label: "Certificate",
                value: { type: "text", content: "Individual certificate" },
              },
            ]}
          />
        </>
      }
    >
      <StandardLayout>
        <Box display="flex" flexDirection="column" gap="xl">
          {/* Urgency hook — the deadline + regulation that drive this product. */}
          <F0Alert
            variant="info"
            title={campusCopy.detail.deadlineCalloutTitle}
            description={campusCopy.detail.deadlineCalloutDescription}
          />

          <Box display="flex" gap="2xl" alignItems="start">
            {/* LEFT — the study material */}
          <Box
            grow
            minWidth="0"
            display="flex"
            flexDirection="column"
            gap="xl"
          >
            {/* Courses */}
            <Box display="flex" flexDirection="column" gap="md">
              <Box display="flex" flexDirection="column" gap="xs">
                <F0Heading
                  content={campusCopy.detail.coursesTitle}
                  variant="heading"
                  as="h2"
                />
                <F0Text
                  content={campusCopy.detail.coursesDescription}
                  variant="body"
                />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                borderRadius="xl"
                border="default"
                borderColor="default"
                overflow="hidden"
              >
                {bundle.courses.map((course, index) => (
                  <Box
                    key={course.id}
                    display="flex"
                    alignItems="center"
                    gap="md"
                    padding="md"
                    borderTop={index > 0 ? "default" : undefined}
                    borderColor="secondary"
                  >
                    <Box
                      shrink={false}
                      borderRadius="lg"
                      overflow="hidden"
                      style={{
                        width: "3.25rem",
                        height: "3.25rem",
                        backgroundImage: `url(${course.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <Box grow minWidth="0" display="flex" flexDirection="column" gap="none">
                      <F0Text content={course.title} variant="body" />
                      <Box display="flex" alignItems="center" gap="xs">
                        <F0Text content={course.audienceLabel} variant="small" />
                        <F0Text content="·" variant="small" />
                        <F0Text content={course.duration} variant="small" />
                      </Box>
                    </Box>
                    <F0Button
                      label={campusCopy.detail.viewCourseCta}
                      icon={ArrowRight}
                      variant="ghost"
                      onClick={() => onViewCourse(course.id)}
                    />
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Certification & proof — first, right after the courses */}
            <F0Card
              title={campusCopy.detail.certificationTitle}
              description={campusCopy.detail.certificationDescription}
            >
              <Box display="flex" gap="xl" flexWrap="wrap" width="full">
                {bundle.benefits.map((benefit) => (
                  <Box
                    key={benefit.label}
                    display="flex"
                    alignItems="center"
                    gap="sm"
                  >
                    <F0Icon icon={benefit.icon} size="sm" color="positive" />
                    <F0Text content={benefit.label} variant="body" />
                  </Box>
                ))}
              </Box>
            </F0Card>

            {/* What your company gets */}
            <Box display="flex" flexDirection="column" gap="md">
              <Box display="flex" flexDirection="column" gap="xs">
                <F0Heading
                  content={campusCopy.detail.outcomesTitle}
                  variant="heading"
                  as="h2"
                />
                <F0Text
                  content={campusCopy.detail.outcomesDescription}
                  variant="body"
                />
              </Box>
              <Box display="grid" columns="2" gap="md" alignItems="stretch">
                {bundle.outcomes.map((outcome) => (
                  <F0Card
                    key={outcome.title}
                    fullHeight
                    avatar={{ type: "icon", icon: outcome.icon }}
                    title={outcome.title}
                    description={outcome.description}
                  />
                ))}
              </Box>
            </Box>
          </Box>

            {/* RIGHT — acquisition */}
            <AcquisitionPanel
              bundle={bundle}
              saved={saved}
              onToggleSave={onToggleSave}
              purchased={purchased}
              onCheckout={() => setCheckoutOpen(true)}
              onOpenTraining={onOpenTraining}
            />
          </Box>
        </Box>
      </StandardLayout>

      {/* Checkout — order-summary modal: existing-Trainings client adds the LMS. */}
      {checkoutOpen ? (
        <CheckoutModal
          onClose={() => setCheckoutOpen(false)}
          onPaid={onPurchase}
          onOpenTraining={() => {
            setCheckoutOpen(false)
            onOpenTraining()
          }}
        />
      ) : null}
    </Page>
  )
}
