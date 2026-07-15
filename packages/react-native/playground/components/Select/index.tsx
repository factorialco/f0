import { GlassView, isLiquidGlassAvailable } from "expo-glass-effect"
import { SymbolView } from "expo-symbols"
import React, { useMemo, useState } from "react"
import { Modal, Pressable, ScrollView, Text, TextInput, View } from "react-native"
import { useCSSVariable } from "uniwind"

import type { SelectProps } from "./types"

export * from "./types"

const asString = (value: string | number | undefined): string => {
  if (typeof value === "string") return value
  if (typeof value === "number") return String(value)
  return "#000000"
}

const isDeprecated = (label: string) =>
  label.toLowerCase().includes("deprecated")

/**
 * Native component browser for the playground.
 *
 * The trigger is an iOS 26 Liquid Glass pill (expo-glass-effect). Tapping it opens
 * a native sheet (`Modal presentationStyle="pageSheet"`) with a native search field
 * and a grouped, scrollable list (Core / Deprecated). SF / Material symbols
 * (expo-symbols) mark the chrome and the current selection. Same props as before,
 * so call sites are unchanged.
 */
export function Select<T extends string>({
  options,
  value,
  onChange,
  placeholder = "Select a component",
}: SelectProps<T>) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")

  const [bg, fg, muted, border, fieldBg, accent] = useCSSVariable([
    "--color-f0-background",
    "--color-f0-foreground",
    "--color-f0-foreground-secondary",
    "--color-f0-border",
    "--color-f0-background-secondary",
    "--color-f0-foreground-info",
  ])

  const selected = options.find((option) => option.value === value)

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase()
    const filtered = q
      ? options.filter((option) => option.label.toLowerCase().includes(q))
      : options
    return [
      {
        title: "Core",
        data: filtered.filter((option) => !isDeprecated(option.label)),
      },
      {
        title: "Deprecated",
        data: filtered.filter((option) => isDeprecated(option.label)),
      },
    ].filter((group) => group.data.length > 0)
  }, [options, query])

  const close = () => {
    setOpen(false)
    setQuery("")
  }
  const pick = (next: T) => {
    onChange(next)
    close()
  }

  const trigger = (
    <View className="flex-row items-center justify-between px-4 py-3">
      <Text className="text-base font-medium" style={{ color: asString(fg) }}>
        {selected?.label ?? placeholder}
      </Text>
      <SymbolView
        name={{ ios: "chevron.up.chevron.down", android: "unfold_more" }}
        size={18}
        tintColor={asString(muted)}
      />
    </View>
  )

  return (
    <>
      <Pressable onPress={() => setOpen(true)} accessibilityRole="button">
        {isLiquidGlassAvailable() ? (
          <GlassView
            glassEffectStyle="regular"
            isInteractive
            style={{ borderRadius: 14, overflow: "hidden" }}
          >
            {trigger}
          </GlassView>
        ) : (
          <View
            className="rounded-2xl border"
            style={{ borderColor: asString(border) }}
          >
            {trigger}
          </View>
        )}
      </Pressable>

      <Modal
        visible={open}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={close}
      >
        <View style={{ flex: 1, backgroundColor: asString(bg) }}>
          <View className="flex-row items-center justify-between px-4 pb-2 pt-4">
            <Text className="text-xl font-bold" style={{ color: asString(fg) }}>
              Components
            </Text>
            <Pressable onPress={close} accessibilityRole="button" hitSlop={10}>
              <SymbolView
                name={{ ios: "xmark.circle.fill", android: "close" }}
                size={26}
                tintColor={asString(muted)}
              />
            </Pressable>
          </View>

          <View
            className="mx-4 mb-2 flex-row items-center gap-2 rounded-xl px-3 py-2"
            style={{ backgroundColor: asString(fieldBg) }}
          >
            <SymbolView
              name={{ ios: "magnifyingglass", android: "search" }}
              size={18}
              tintColor={asString(muted)}
            />
            <TextInput
              placeholder="Search components"
              placeholderTextColor={asString(muted)}
              value={query}
              onChangeText={setQuery}
              autoCapitalize="none"
              autoCorrect={false}
              style={{ flex: 1, fontSize: 16, color: asString(fg) }}
            />
          </View>

          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 32 }}
            keyboardShouldPersistTaps="handled"
          >
            {groups.map((group) => (
              <View key={group.title} className="mb-2">
                <Text
                  className="px-4 py-1 text-xs font-semibold uppercase"
                  style={{ color: asString(muted) }}
                >
                  {group.title}
                </Text>
                {group.data.map((option) => {
                  const active = option.value === value
                  return (
                    <Pressable
                      key={option.value}
                      onPress={() => pick(option.value)}
                      className="flex-row items-center justify-between px-4 py-3"
                    >
                      <Text
                        className="text-base"
                        style={{
                          color: asString(fg),
                          fontWeight: active ? "600" : "400",
                        }}
                      >
                        {option.label}
                      </Text>
                      {active ? (
                        <SymbolView
                          name={{ ios: "checkmark", android: "check" }}
                          size={18}
                          tintColor={asString(accent)}
                        />
                      ) : null}
                    </Pressable>
                  )
                })}
              </View>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </>
  )
}
