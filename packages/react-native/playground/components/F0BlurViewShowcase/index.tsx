import React, { useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"

import { F0BlurView } from "../../../src/components/primitives/F0BlurView"
import { F0Image } from "../../../src/components/primitives/F0Image"
import { F0Text } from "../../../src/components/primitives/F0Text"
import { F0Button } from "../../../src/components/F0Button"

const SAMPLE_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop"

const LOREM_ROWS = [
  "Annual performance review — Q4 2025",
  "Engineering team health check",
  "Salary band calibration report",
  "Equity refresh plan — confidential",
  "Succession planning document",
  "Headcount forecast 2026",
]

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <View className="mb-10">
      <F0Text variant="heading-sm" className="mb-1">
        {title}
      </F0Text>
      {description ? (
        <F0Text variant="body-sm-default" color="secondary" className="mb-4">
          {description}
        </F0Text>
      ) : (
        <View className="mb-4" />
      )}
      {children}
    </View>
  )
}

/**
 * Hint overlay — children passed to F0BlurView render on top of the blur.
 * Useful for onboarding nudges over screen content.
 */
function HintOverlayExample() {
  const [dismissed, setDismissed] = useState(false)

  return (
    <View className="overflow-hidden rounded-xl border border-f0-border-secondary bg-f0-background">
      <View className="p-5 gap-3">
        <F0Text variant="body-xs-medium" color="secondary">✓ Multiple choice *</F0Text>
        <F0Text variant="heading-sm">
          What is considered "personal data" under GDPR? Select all that apply.
        </F0Text>
        <F0Text variant="body-sm-default" color="secondary">
          In the workplace, it's crucial to prioritise safety by familiarising
          yourself with the relevant safety protocols for your tasks. Always
          wear the necessary protective gear and ensure that the area is
          well-maintained.
        </F0Text>
        <F0Text variant="body-sm-default" color="secondary">
          Before engaging in any tasks, review the safety guidelines. Be
          mindful of potential risks, use the correct protective equipment, and
          ensure the workspace is adequately ventilated.
        </F0Text>
        <F0Text variant="body-sm-default" color="secondary">
          Immediately report any injuries to your supervisors, regardless of
          how minor they may seem.
        </F0Text>
      </View>

      {dismissed ? (
        <View className="items-center py-3">
          <F0Button
            label="Show hint again"
            variant="ghost"
            onPress={() => setDismissed(false)}
          />
        </View>
      ) : (
        <F0BlurView
          intensity={60}
          tint="default"
          style={StyleSheet.absoluteFill}
          className="items-center justify-center gap-2"
        >
          <F0Text variant="heading-sm">Swipe to navigate questions</F0Text>
          <View style={{ elevation: 0 }}>
            <F0Button
              label="Tap anywhere to dismiss"
              variant="ghost"
              onPress={() => setDismissed(true)}
            />
          </View>
        </F0BlurView>
      )}
    </View>
  )
}

/** Frosted glass scroll fade — hint that more content exists below */
function ScrollFadeExample() {
  return (
    <View
      className="rounded-xl border border-f0-border-secondary bg-f0-background"
      style={{ overflow: "hidden", height: 208 }}
    >
      <View className="p-4 gap-3">
        {LOREM_ROWS.map((row, i) => (
          <View key={i} className="flex-row items-center gap-3">
            <View className="w-8 h-8 rounded-full bg-f0-background-secondary items-center justify-center">
              <F0Text variant="body-xs-medium" color="secondary">
                {i + 1}
              </F0Text>
            </View>
            <F0Text variant="body-sm-default">{row}</F0Text>
          </View>
        ))}
      </View>
      {/* Blur fade at the top — signals more content below */}
      <F0BlurView
        intensity={30}
        tint="default"
        style={{ position: "absolute", left: 0, right: 0, bottom: 0, top: 0, height: 100 }}
      />
    </View>
  )
}

/** 2. Content gate
 *  Blur covers restricted content until the user takes action
 */
function ContentGateExample() {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <View className="overflow-hidden rounded-xl border border-f0-border-secondary bg-f0-background">
      <View className="p-4 gap-3">
        {LOREM_ROWS.slice(0, 4).map((row, i) => (
          <View key={i} className="flex-row items-center gap-3">
            <View className="w-8 h-8 rounded-full bg-f0-background-secondary items-center justify-center">
              <F0Text variant="body-xs-medium" color="secondary">
                {i + 1}
              </F0Text>
            </View>
            <F0Text variant="body-sm-default">{row}</F0Text>
          </View>
        ))}
      </View>

      {unlocked ? (
        <View className="items-center py-3 border-t border-f0-border-secondary">
          <F0Button
            label="Lock again"
            variant="ghost"
            onPress={() => setUnlocked(false)}
          />
        </View>
      ) : (
        <F0BlurView
          intensity={80}
          tint="default"
          style={StyleSheet.absoluteFill}
          className="items-center justify-center gap-3 p-6"
        >
          <F0Text variant="heading-sm">Restricted content</F0Text>
          <F0Text variant="body-sm-default" color="secondary" className="text-center">
            You need manager permissions to view these records.
          </F0Text>
          <View style={{ elevation: 0 }}>
            <F0Button label="Request access" onPress={() => setUnlocked(true)} />
          </View>
        </F0BlurView>
      )}
    </View>
  )
}

/** 3. Over a photo — one example with bottom label bar */
function PhotoExample() {
  return (
    <View className="h-48 overflow-hidden rounded-xl">
      <F0Image source={{ uri: SAMPLE_IMAGE }} className="absolute inset-0" />
      <View className="absolute inset-x-0 bottom-0">
        <F0BlurView intensity={50} tint="dark" className="p-4">
          <F0Text variant="heading-sm" color="inverse">
            Mountain landscape
          </F0Text>
          <F0Text variant="body-sm-default" color="inverse">
            Use a bottom-anchored BlurView to caption photos
          </F0Text>
        </F0BlurView>
      </View>
    </View>
  )
}

export function F0BlurViewShowcase() {
  return (
    <ScrollView className="p-4" contentContainerStyle={{ paddingBottom: 40 }}>
      <Section
        title="Hint overlay"
        description="F0BlurView blurs the content underneath. Children passed to it render on top of the blur layer."
      >
        <HintOverlayExample />
      </Section>

      <Section
        title="Scroll fade"
        description="A low-intensity blur at the top of a list signals that more content is available below."
      >
        <ScrollFadeExample />
      </Section>

      <Section
        title="Content gate"
        description="High-intensity blur blocks restricted content. Pass the overlay message as children of F0BlurView — same pattern as hint overlay."
      >
        <ContentGateExample />
      </Section>

      <Section
        title="Photo caption"
        
        description="Over images, anchor F0BlurView to a strip for a frosted-glass label bar."
      >
        <PhotoExample />
      </Section>
    </ScrollView>
  )
}

