import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { useCSSVariable, useUniwind, withUniwind } from "uniwind";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";

const SafeAreaView = withUniwind(RNSafeAreaView);

export default function Index() {
  // Forzar re-render cuando cambia el tema
  const { theme } = useUniwind();

  // Debug: Log cuando cambia el tema
  React.useEffect(() => {
    console.log("Theme changed to:", theme);
  }, [theme]);

  // Helper para asegurar que los valores sean strings
  const asString = (value: string | number | undefined): string => {
    if (typeof value === "string") return value;
    if (typeof value === "number") return String(value);
    return "#000000"; // fallback
  };

  // Obtener todos los colores base
  const [
    white3,
    white5,
    white10,
    white20,
    white30,
    white40,
    white50,
    white60,
    white70,
    white80,
    white90,
    white100,
    grey0,
    grey5,
    grey10,
    grey20,
    grey30,
    grey40,
    grey50,
    grey60,
    grey70,
    grey80,
    grey90,
    grey100,
    greySolid40,
    greySolid50,
    lilac50,
    lilac60,
    lilac70,
    barbie50,
    barbie60,
    barbie70,
    smoke50,
    smoke60,
    smoke70,
    army50,
    army60,
    army70,
    flubber50,
    flubber60,
    flubber70,
    indigo50,
    indigo60,
    indigo70,
    camel50,
    camel60,
    camel70,
    radical50,
    radical60,
    radical70,
    viridian50,
    viridian60,
    viridian70,
    orange50,
    orange60,
    orange70,
    red50,
    red60,
    red70,
    grass50,
    grass60,
    grass70,
    malibu50,
    malibu60,
    malibu70,
    yellow50,
    yellow60,
    yellow70,
    purple50,
    purple60,
    purple70,
  ] = useCSSVariable([
    "--color-white-3",
    "--color-white-5",
    "--color-white-10",
    "--color-white-20",
    "--color-white-30",
    "--color-white-40",
    "--color-white-50",
    "--color-white-60",
    "--color-white-70",
    "--color-white-80",
    "--color-white-90",
    "--color-white-100",
    "--color-grey-0",
    "--color-grey-5",
    "--color-grey-10",
    "--color-grey-20",
    "--color-grey-30",
    "--color-grey-40",
    "--color-grey-50",
    "--color-grey-60",
    "--color-grey-70",
    "--color-grey-80",
    "--color-grey-90",
    "--color-grey-100",
    "--color-grey-solid-40",
    "--color-grey-solid-50",
    "--color-lilac-50",
    "--color-lilac-60",
    "--color-lilac-70",
    "--color-barbie-50",
    "--color-barbie-60",
    "--color-barbie-70",
    "--color-smoke-50",
    "--color-smoke-60",
    "--color-smoke-70",
    "--color-army-50",
    "--color-army-60",
    "--color-army-70",
    "--color-flubber-50",
    "--color-flubber-60",
    "--color-flubber-70",
    "--color-indigo-50",
    "--color-indigo-60",
    "--color-indigo-70",
    "--color-camel-50",
    "--color-camel-60",
    "--color-camel-70",
    "--color-radical-50",
    "--color-radical-60",
    "--color-radical-70",
    "--color-viridian-50",
    "--color-viridian-60",
    "--color-viridian-70",
    "--color-orange-50",
    "--color-orange-60",
    "--color-orange-70",
    "--color-red-50",
    "--color-red-60",
    "--color-red-70",
    "--color-grass-50",
    "--color-grass-60",
    "--color-grass-70",
    "--color-malibu-50",
    "--color-malibu-60",
    "--color-malibu-70",
    "--color-yellow-50",
    "--color-yellow-60",
    "--color-yellow-70",
    "--color-purple-50",
    "--color-purple-60",
    "--color-purple-70",
  ]);

  // Obtener colores F0 semánticos
  const [
    f0Background,
    f0Foreground,
    f0ForegroundSecondary,
    f0ForegroundTertiary,
    f0ForegroundDisabled,
    f0ForegroundInverse,
    f0ForegroundInverseSecondary,
    f0ForegroundAccent,
    f0ForegroundCritical,
    f0ForegroundInfo,
    f0ForegroundWarning,
    f0ForegroundPositive,
    f0ForegroundSelected,
    f0BackgroundHover,
    f0BackgroundSecondary,
    f0BackgroundSecondaryHover,
    f0BackgroundTertiary,
    f0BackgroundInverse,
    f0BackgroundInverseSecondary,
    f0BackgroundBold,
    f0BackgroundAccent,
    f0BackgroundAccentBold,
    f0BackgroundAccentBoldHover,
    f0BackgroundPromote,
    f0BackgroundPromoteHover,
    f0BackgroundCritical,
    f0BackgroundCriticalBold,
    f0BackgroundInfo,
    f0BackgroundInfoBold,
    f0BackgroundWarning,
    f0BackgroundWarningBold,
    f0BackgroundPositive,
    f0BackgroundPositiveBold,
    f0BackgroundSelected,
    f0BackgroundSelectedSecondary,
    f0BackgroundSelectedHover,
    f0BackgroundSelectedBold,
    f0BackgroundSelectedBoldHover,
    f0BackgroundOverlay,
    f0Border,
    f0BorderHover,
    f0BorderSecondary,
    f0BorderInverse,
    f0BorderBold,
    f0BorderPromote,
    f0BorderSelected,
    f0BorderSelectedBold,
    f0BorderCritical,
    f0BorderCriticalBold,
    f0BorderWarning,
    f0BorderWarningBold,
    f0BorderInfo,
    f0BorderInfoBold,
    f0BorderPositive,
    f0BorderPositiveBold,
    f0Icon,
    f0IconSecondary,
    f0IconInverse,
    f0IconBold,
    f0IconCritical,
    f0IconCriticalBold,
    f0IconAccent,
    f0IconInfo,
    f0IconWarning,
    f0IconPositive,
    f0IconPromote,
    f0IconSelected,
    f0IconSelectedHover,
    f0IconMoodSuperNegative,
    f0IconMoodNegative,
    f0IconMoodNeutral,
    f0IconMoodPositive,
    f0IconMoodSuperPositive,
    f0SpecialRing,
    f0SpecialPage,
    f0SpecialHighlight,
  ] = useCSSVariable([
    "--color-f0-background",
    "--color-f0-foreground",
    "--color-f0-foreground-secondary",
    "--color-f0-foreground-tertiary",
    "--color-f0-foreground-disabled",
    "--color-f0-foreground-inverse",
    "--color-f0-foreground-inverse-secondary",
    "--color-f0-foreground-accent",
    "--color-f0-foreground-critical",
    "--color-f0-foreground-info",
    "--color-f0-foreground-warning",
    "--color-f0-foreground-positive",
    "--color-f0-foreground-selected",
    "--color-f0-background-hover",
    "--color-f0-background-secondary",
    "--color-f0-background-secondary-hover",
    "--color-f0-background-tertiary",
    "--color-f0-background-inverse",
    "--color-f0-background-inverse-secondary",
    "--color-f0-background-bold",
    "--color-f0-background-accent",
    "--color-f0-background-accent-bold",
    "--color-f0-background-accent-bold-hover",
    "--color-f0-background-promote",
    "--color-f0-background-promote-hover",
    "--color-f0-background-critical",
    "--color-f0-background-critical-bold",
    "--color-f0-background-info",
    "--color-f0-background-info-bold",
    "--color-f0-background-warning",
    "--color-f0-background-warning-bold",
    "--color-f0-background-positive",
    "--color-f0-background-positive-bold",
    "--color-f0-background-selected",
    "--color-f0-background-selected-secondary",
    "--color-f0-background-selected-hover",
    "--color-f0-background-selected-bold",
    "--color-f0-background-selected-bold-hover",
    "--color-f0-background-overlay",
    "--color-f0-border",
    "--color-f0-border-hover",
    "--color-f0-border-secondary",
    "--color-f0-border-inverse",
    "--color-f0-border-bold",
    "--color-f0-border-promote",
    "--color-f0-border-selected",
    "--color-f0-border-selected-bold",
    "--color-f0-border-critical",
    "--color-f0-border-critical-bold",
    "--color-f0-border-warning",
    "--color-f0-border-warning-bold",
    "--color-f0-border-info",
    "--color-f0-border-info-bold",
    "--color-f0-border-positive",
    "--color-f0-border-positive-bold",
    "--color-f0-icon",
    "--color-f0-icon-secondary",
    "--color-f0-icon-inverse",
    "--color-f0-icon-bold",
    "--color-f0-icon-critical",
    "--color-f0-icon-critical-bold",
    "--color-f0-icon-accent",
    "--color-f0-icon-info",
    "--color-f0-icon-warning",
    "--color-f0-icon-positive",
    "--color-f0-icon-promote",
    "--color-f0-icon-selected",
    "--color-f0-icon-selected-hover",
    "--color-f0-icon-mood-super-negative",
    "--color-f0-icon-mood-negative",
    "--color-f0-icon-mood-neutral",
    "--color-f0-icon-mood-positive",
    "--color-f0-icon-mood-super-positive",
    "--color-f0-special-ring",
    "--color-f0-special-page",
    "--color-f0-special-highlight",
  ]);

  // Semantic colors now map directly to base colors:
  // accent -> radical, warning -> orange, selected -> viridian, critical -> red
  // positive -> grass, info -> malibu, promote -> yellow
  // mood colors -> radical, orange, yellow, flubber, grass

  // Obtener valores de spacing
  const spacingValues = useCSSVariable([
    "--spacing-0",
    "--spacing-1",
    "--spacing-2",
    "--spacing-3",
    "--spacing-4",
    "--spacing-5",
    "--spacing-6",
    "--spacing-8",
    "--spacing-10",
    "--spacing-12",
    "--spacing-16",
    "--spacing-20",
    "--spacing-24",
    "--spacing-32",
  ]);

  // Obtener valores de border radius
  const radiusValues = useCSSVariable([
    "--radius-none",
    "--radius-2xs",
    "--radius-xs",
    "--radius-sm",
    "--radius",
    "--radius-md",
    "--radius-lg",
    "--radius-xl",
    "--radius-2xl",
    "--radius-full",
  ]);

  const ColorSwatch = ({
    name,
    color,
    size = 80,
  }: {
    name: string;
    color: string | number | undefined;
    size?: number;
  }) => (
    <View className="mb-4 items-center gap-2">
      <View
        className="rounded-lg border"
        style={{
          width: size,
          height: size,
          backgroundColor: asString(color),
          borderColor: asString(f0Border),
        }}
      />
      <Text
        className="text-center text-xs"
        style={{ color: asString(f0ForegroundTertiary) }}
      >
        {name}
      </Text>
      <Text
        className="text-center font-mono text-xs"
        style={{ color: asString(f0ForegroundTertiary) }}
      >
        {asString(color).substring(0, 20)}
      </Text>
    </View>
  );

  const ColorGroup = ({
    title,
    colors,
  }: {
    title: string;
    colors: { name: string; color: string | number | undefined }[];
  }) => (
    <View className="mb-8">
      <Text
        className="mb-4 text-2xl font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        {title}
      </Text>
      <View className="flex-row flex-wrap gap-4">
        {colors.map(({ name, color }) => (
          <ColorSwatch key={name} name={name} color={color} />
        ))}
      </View>
    </View>
  );

  // Componente para mostrar spacing
  const SpacingExample = ({
    name,
    value,
  }: {
    name: string;
    value: string | number | undefined;
  }) => (
    <View className="mb-4 items-center">
      <View
        className="border"
        style={{
          width: 100,
          height: parseFloat(asString(value).replace("px", "")) || 0,
          backgroundColor: asString(f0Border),
          borderColor: asString(f0Border),
        }}
      />
      <Text
        className="mt-2 text-center text-xs"
        style={{ color: asString(f0ForegroundSecondary) }}
      >
        {name}
      </Text>
      <Text
        className="text-center font-mono text-xs"
        style={{ color: asString(f0ForegroundSecondary) }}
      >
        {asString(value)}
      </Text>
    </View>
  );

  // Componente para mostrar border radius
  const RadiusExample = ({
    name,
    value,
    className,
  }: {
    name: string;
    value: string | number | undefined;
    className?: string;
  }) => {
    return (
      <View className="mb-4 items-center">
        <View
          className={`border ${className || ""}`}
          style={{
            width: 60,
            height: 60,
            backgroundColor: asString(f0Background),
            borderWidth: 2,
            borderColor: asString(f0Border),
          }}
        />
        <Text
          className="mt-2 text-center text-xs"
          style={{ color: asString(f0ForegroundSecondary) }}
        >
          {name}
        </Text>
        <Text
          className="text-center font-mono text-xs"
          style={{ color: asString(f0ForegroundSecondary) }}
        >
          {typeof value === "number" ? `${value}px` : asString(value)}
        </Text>
      </View>
    );
  };

  // Componente para mostrar padding examples visuales
  const PaddingExample = ({
    name,
    className,
  }: {
    name: string;
    className: string;
  }) => (
    <View className="mb-4">
      <View
        className={`border ${className}`}
        style={{
          backgroundColor: asString(f0BackgroundSecondary),
          borderColor: asString(f0Border),
          borderWidth: 1,
        }}
      >
        <View
          style={{
            backgroundColor: asString(f0Background),
            minHeight: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            className="text-xs"
            style={{ color: asString(f0ForegroundSecondary) }}
          >
            Content
          </Text>
        </View>
      </View>
      <Text
        className="mt-1 text-xs"
        style={{ color: asString(f0ForegroundSecondary) }}
      >
        {name}
      </Text>
    </View>
  );

  // Componente para mostrar border examples
  const BorderExample = ({
    name,
    className,
  }: {
    name: string;
    className: string;
  }) => (
    <View className="mb-4 items-center">
      <View
        className={`${className} bg-f0-background`}
        style={{
          width: 80,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          className="text-xs"
          style={{ color: asString(f0ForegroundSecondary) }}
        >
          Box
        </Text>
      </View>
      <Text
        className="mt-2 text-center text-xs"
        style={{ color: asString(f0ForegroundSecondary) }}
      >
        {name}
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="bg-f0-background flex-1" edges={["top", "bottom"]}>
      <ScrollView
        className="flex-1"
        style={{ backgroundColor: asString(f0Background) }}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        <View className="p-6">
          <View className="mb-8">
            <Text
              className="mb-2 text-4xl font-bold"
              style={{ color: asString(f0Foreground) }}
            >
              F0-Core Design Tokens
            </Text>
            <Text
              className="mb-2 text-base"
              style={{ color: asString(f0ForegroundSecondary) }}
            >
              Todos los tokens disponibles en el sistema de diseño
            </Text>
            <Text
              className="mb-4 text-sm"
              style={{ color: asString(f0ForegroundTertiary) }}
            >
              Tema actual: {theme}
            </Text>
            <ThemeSwitcher />
          </View>

          {/* Spacing Scale */}
          <View className="mb-8">
            <Text
              className="mb-4 text-2xl font-bold"
              style={{ color: asString(f0Foreground) }}
            >
              Spacing Scale (valores)
            </Text>
            <View className="flex-row flex-wrap gap-4">
              {spacingValues.map((value, index) => {
                const spacingNames = [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "8",
                  "10",
                  "12",
                  "16",
                  "20",
                  "24",
                  "32",
                ];
                return (
                  <SpacingExample
                    key={index}
                    name={`spacing-${spacingNames[index] || index}`}
                    value={value}
                  />
                );
              })}
            </View>
          </View>

          {/* Padding Examples */}
          <View className="mb-8">
            <Text
              className="mb-4 text-2xl font-bold"
              style={{ color: asString(f0Foreground) }}
            >
              Padding Examples
            </Text>
            <PaddingExample name="p-1" className="p-1" />
            <PaddingExample name="p-2" className="p-2" />
            <PaddingExample name="p-3" className="p-3" />
            <PaddingExample name="p-4" className="p-4" />
            <PaddingExample name="p-6" className="p-6" />
            <PaddingExample name="p-8" className="p-8" />
            <PaddingExample name="px-4 py-2" className="px-4 py-2" />
            <PaddingExample name="pt-4 pb-2" className="pt-4 pb-2" />
          </View>

          {/* Margin Examples */}
          <View className="mb-8">
            <Text
              className="mb-4 text-2xl font-bold"
              style={{ color: asString(f0Foreground) }}
            >
              Margin Examples
            </Text>
            <View className="mb-2">
              <View
                className="m-1 border"
                style={{
                  backgroundColor: asString(f0BackgroundSecondary),
                  borderColor: asString(f0Border),
                }}
              >
                <Text
                  className="p-2 text-xs"
                  style={{ color: asString(f0ForegroundSecondary) }}
                >
                  m-1
                </Text>
              </View>
            </View>
            <View className="mb-2">
              <View
                className="m-2 border"
                style={{
                  backgroundColor: asString(f0BackgroundSecondary),
                  borderColor: asString(f0Border),
                }}
              >
                <Text
                  className="p-2 text-xs"
                  style={{ color: asString(f0ForegroundSecondary) }}
                >
                  m-2
                </Text>
              </View>
            </View>
            <View className="mb-2">
              <View
                className="m-4 border"
                style={{
                  backgroundColor: asString(f0BackgroundSecondary),
                  borderColor: asString(f0Border),
                }}
              >
                <Text
                  className="p-2 text-xs"
                  style={{ color: asString(f0ForegroundSecondary) }}
                >
                  m-4
                </Text>
              </View>
            </View>
            <View className="mb-2">
              <View
                className="mx-4 my-2 border"
                style={{
                  backgroundColor: asString(f0BackgroundSecondary),
                  borderColor: asString(f0Border),
                }}
              >
                <Text
                  className="p-2 text-xs"
                  style={{ color: asString(f0ForegroundSecondary) }}
                >
                  mx-4 my-2
                </Text>
              </View>
            </View>
          </View>

          {/* Border Radius */}
          <View className="mb-8">
            <Text
              className="mb-4 text-2xl font-bold"
              style={{ color: asString(f0Foreground) }}
            >
              Border Radius
            </Text>
            <View className="flex-row flex-wrap gap-4">
              {radiusValues.map((value, index) => {
                const radiusNames = [
                  "none",
                  "2xs",
                  "xs",
                  "sm",
                  "base",
                  "md",
                  "lg",
                  "xl",
                  "2xl",
                  "full",
                ];
                const name =
                  radiusNames[index] === "base"
                    ? "radius"
                    : `radius-${radiusNames[index]}`;
                const tailwindClasses = [
                  "rounded-none",
                  "rounded-2xs",
                  "rounded-xs",
                  "rounded-sm",
                  "rounded",
                  "rounded-md",
                  "rounded-lg",
                  "rounded-xl",
                  "rounded-2xl",
                  "rounded-full",
                ];
                return (
                  <RadiusExample
                    key={index}
                    name={name}
                    value={value}
                    className={tailwindClasses[index]}
                  />
                );
              })}
            </View>
          </View>

          {/* Border Examples */}
          <View className="mb-8">
            <Text
              className="mb-4 text-2xl font-bold"
              style={{ color: asString(f0Foreground) }}
            >
              Border Examples
            </Text>
            <View className="flex-row flex-wrap gap-4">
              <BorderExample name="border" className="border" />
              <BorderExample name="border-2" className="border-2" />
              <BorderExample name="border-4" className="border-4" />
              <BorderExample name="rounded-sm" className="rounded-sm border" />
              <BorderExample name="rounded" className="rounded border" />
              <BorderExample name="rounded-lg" className="rounded-lg border" />
              <BorderExample name="rounded-xl" className="rounded-xl border" />
              <BorderExample
                name="rounded-full"
                className="rounded-full border"
              />
            </View>
          </View>

          {/* Gap Examples */}
          <View className="mb-8">
            <Text
              className="mb-4 text-2xl font-bold"
              style={{ color: asString(f0Foreground) }}
            >
              Gap Examples
            </Text>
            <View className="mb-2 flex-row gap-1">
              <View
                className="h-12 w-12 border"
                style={{
                  backgroundColor: asString(f0BackgroundSecondary),
                  borderColor: asString(f0Border),
                }}
              />
              <View
                className="h-12 w-12 border"
                style={{
                  backgroundColor: asString(f0BackgroundSecondary),
                  borderColor: asString(f0Border),
                }}
              />
              <View
                className="h-12 w-12 border"
                style={{
                  backgroundColor: asString(f0BackgroundSecondary),
                  borderColor: asString(f0Border),
                }}
              />
            </View>
            <Text
              className="mb-4 text-xs"
              style={{ color: asString(f0ForegroundSecondary) }}
            >
              gap-1
            </Text>

            <View className="mb-2 flex-row gap-2">
              <View
                className="h-12 w-12 border"
                style={{
                  backgroundColor: asString(f0BackgroundSecondary),
                  borderColor: asString(f0Border),
                }}
              />
              <View
                className="h-12 w-12 border"
                style={{
                  backgroundColor: asString(f0BackgroundSecondary),
                  borderColor: asString(f0Border),
                }}
              />
              <View
                className="h-12 w-12 border"
                style={{
                  backgroundColor: asString(f0BackgroundSecondary),
                  borderColor: asString(f0Border),
                }}
              />
            </View>
            <Text
              className="mb-4 text-xs"
              style={{ color: asString(f0ForegroundSecondary) }}
            >
              gap-2
            </Text>

            <View className="mb-2 flex-row gap-4">
              <View
                className="h-12 w-12 border"
                style={{
                  backgroundColor: asString(f0BackgroundSecondary),
                  borderColor: asString(f0Border),
                }}
              />
              <View
                className="h-12 w-12 border"
                style={{
                  backgroundColor: asString(f0BackgroundSecondary),
                  borderColor: asString(f0Border),
                }}
              />
              <View
                className="h-12 w-12 border"
                style={{
                  backgroundColor: asString(f0BackgroundSecondary),
                  borderColor: asString(f0Border),
                }}
              />
            </View>
            <Text
              className="mb-4 text-xs"
              style={{ color: asString(f0ForegroundSecondary) }}
            >
              gap-4
            </Text>

            <View className="mb-2 flex-row gap-8">
              <View
                className="h-12 w-12 border"
                style={{
                  backgroundColor: asString(f0BackgroundSecondary),
                  borderColor: asString(f0Border),
                }}
              />
              <View
                className="h-12 w-12 border"
                style={{
                  backgroundColor: asString(f0BackgroundSecondary),
                  borderColor: asString(f0Border),
                }}
              />
              <View
                className="h-12 w-12 border"
                style={{
                  backgroundColor: asString(f0BackgroundSecondary),
                  borderColor: asString(f0Border),
                }}
              />
            </View>
            <Text
              className="mb-4 text-xs"
              style={{ color: asString(f0ForegroundSecondary) }}
            >
              gap-8
            </Text>
          </View>

          {/* White Scale */}
          <ColorGroup
            title="White Scale"
            colors={[
              { name: "white-3", color: white3 },
              { name: "white-5", color: white5 },
              { name: "white-10", color: white10 },
              { name: "white-20", color: white20 },
              { name: "white-30", color: white30 },
              { name: "white-40", color: white40 },
              { name: "white-50", color: white50 },
              { name: "white-60", color: white60 },
              { name: "white-70", color: white70 },
              { name: "white-80", color: white80 },
              { name: "white-90", color: white90 },
              { name: "white-100", color: white100 },
            ]}
          />

          {/* Grey Scale */}
          <ColorGroup
            title="Grey Scale"
            colors={[
              { name: "grey-0", color: grey0 },
              { name: "grey-5", color: grey5 },
              { name: "grey-10", color: grey10 },
              { name: "grey-20", color: grey20 },
              { name: "grey-30", color: grey30 },
              { name: "grey-40", color: grey40 },
              { name: "grey-50", color: grey50 },
              { name: "grey-60", color: grey60 },
              { name: "grey-70", color: grey70 },
              { name: "grey-80", color: grey80 },
              { name: "grey-90", color: grey90 },
              { name: "grey-100", color: grey100 },
              { name: "grey-solid-40", color: greySolid40 },
              { name: "grey-solid-50", color: greySolid50 },
            ]}
          />

          {/* Brand Colors */}
          <ColorGroup
            title="Brand Colors - Radical"
            colors={[
              { name: "radical-50", color: radical50 },
              { name: "radical-60", color: radical60 },
              { name: "radical-70", color: radical70 },
            ]}
          />

          <ColorGroup
            title="Brand Colors - Viridian"
            colors={[
              { name: "viridian-50", color: viridian50 },
              { name: "viridian-60", color: viridian60 },
              { name: "viridian-70", color: viridian70 },
            ]}
          />

          <ColorGroup
            title="Brand Colors - Malibu"
            colors={[
              { name: "malibu-50", color: malibu50 },
              { name: "malibu-60", color: malibu60 },
              { name: "malibu-70", color: malibu70 },
            ]}
          />

          <ColorGroup
            title="Brand Colors - Orange"
            colors={[
              { name: "orange-50", color: orange50 },
              { name: "orange-60", color: orange60 },
              { name: "orange-70", color: orange70 },
            ]}
          />

          <ColorGroup
            title="Brand Colors - Purple"
            colors={[
              { name: "purple-50", color: purple50 },
              { name: "purple-60", color: purple60 },
              { name: "purple-70", color: purple70 },
            ]}
          />

          <ColorGroup
            title="Brand Colors - Indigo"
            colors={[
              { name: "indigo-50", color: indigo50 },
              { name: "indigo-60", color: indigo60 },
              { name: "indigo-70", color: indigo70 },
            ]}
          />

          <ColorGroup
            title="Brand Colors - Red"
            colors={[
              { name: "red-50", color: red50 },
              { name: "red-60", color: red60 },
              { name: "red-70", color: red70 },
            ]}
          />

          <ColorGroup
            title="Brand Colors - Grass"
            colors={[
              { name: "grass-50", color: grass50 },
              { name: "grass-60", color: grass60 },
              { name: "grass-70", color: grass70 },
            ]}
          />

          <ColorGroup
            title="Brand Colors - Yellow"
            colors={[
              { name: "yellow-50", color: yellow50 },
              { name: "yellow-60", color: yellow60 },
              { name: "yellow-70", color: yellow70 },
            ]}
          />

          <ColorGroup
            title="Brand Colors - Other"
            colors={[
              { name: "lilac-50", color: lilac50 },
              { name: "lilac-60", color: lilac60 },
              { name: "lilac-70", color: lilac70 },
              { name: "barbie-50", color: barbie50 },
              { name: "barbie-60", color: barbie60 },
              { name: "barbie-70", color: barbie70 },
              { name: "smoke-50", color: smoke50 },
              { name: "smoke-60", color: smoke60 },
              { name: "smoke-70", color: smoke70 },
              { name: "army-50", color: army50 },
              { name: "army-60", color: army60 },
              { name: "army-70", color: army70 },
              { name: "flubber-50", color: flubber50 },
              { name: "flubber-60", color: flubber60 },
              { name: "flubber-70", color: flubber70 },
              { name: "camel-50", color: camel50 },
              { name: "camel-60", color: camel60 },
              { name: "camel-70", color: camel70 },
            ]}
          />

          {/* Semantic Colors - These map to base colors */}
          <ColorGroup
            title="Semantic Colors - Accent (Radical)"
            colors={[
              { name: "accent-50 (radical-50)", color: radical50 },
              { name: "accent-60 (radical-60)", color: radical60 },
              { name: "accent-70 (radical-70)", color: radical70 },
            ]}
          />

          <ColorGroup
            title="Semantic Colors - Warning (Orange)"
            colors={[
              { name: "warning-50 (orange-50)", color: orange50 },
              { name: "warning-60 (orange-60)", color: orange60 },
              { name: "warning-70 (orange-70)", color: orange70 },
            ]}
          />

          <ColorGroup
            title="Semantic Colors - Selected (Viridian)"
            colors={[
              { name: "selected-50 (viridian-50)", color: viridian50 },
              { name: "selected-60 (viridian-60)", color: viridian60 },
              { name: "selected-70 (viridian-70)", color: viridian70 },
            ]}
          />

          <ColorGroup
            title="Semantic Colors - Critical (Red)"
            colors={[
              { name: "critical-50 (red-50)", color: red50 },
              { name: "critical-60 (red-60)", color: red60 },
              { name: "critical-70 (red-70)", color: red70 },
            ]}
          />

          <ColorGroup
            title="Semantic Colors - Positive (Grass)"
            colors={[
              { name: "positive-50 (grass-50)", color: grass50 },
              { name: "positive-60 (grass-60)", color: grass60 },
              { name: "positive-70 (grass-70)", color: grass70 },
            ]}
          />

          <ColorGroup
            title="Semantic Colors - Info (Malibu)"
            colors={[
              { name: "info-50 (malibu-50)", color: malibu50 },
              { name: "info-60 (malibu-60)", color: malibu60 },
              { name: "info-70 (malibu-70)", color: malibu70 },
            ]}
          />

          <ColorGroup
            title="Semantic Colors - Promote (Yellow)"
            colors={[
              { name: "promote-50 (yellow-50)", color: yellow50 },
              { name: "promote-60 (yellow-60)", color: yellow60 },
              { name: "promote-70 (yellow-70)", color: yellow70 },
            ]}
          />

          {/* Mood Colors - Map to base colors */}
          <ColorGroup
            title="Mood Colors"
            colors={[
              { name: "mood-super-negative (radical-50)", color: radical50 },
              { name: "mood-negative (orange-50)", color: orange50 },
              { name: "mood-neutral (yellow-50)", color: yellow50 },
              { name: "mood-positive (flubber-50)", color: flubber50 },
              { name: "mood-super-positive (grass-50)", color: grass50 },
            ]}
          />

          {/* F0 Foreground Colors */}
          <ColorGroup
            title="F0 Semantic - Foreground"
            colors={[
              { name: "f0-foreground", color: f0Foreground },
              { name: "f0-foreground-secondary", color: f0ForegroundSecondary },
              { name: "f0-foreground-tertiary", color: f0ForegroundTertiary },
              { name: "f0-foreground-disabled", color: f0ForegroundDisabled },
              { name: "f0-foreground-inverse", color: f0ForegroundInverse },
              {
                name: "f0-foreground-inverse-secondary",
                color: f0ForegroundInverseSecondary,
              },
              { name: "f0-foreground-accent", color: f0ForegroundAccent },
              { name: "f0-foreground-critical", color: f0ForegroundCritical },
              { name: "f0-foreground-info", color: f0ForegroundInfo },
              { name: "f0-foreground-warning", color: f0ForegroundWarning },
              { name: "f0-foreground-positive", color: f0ForegroundPositive },
              { name: "f0-foreground-selected", color: f0ForegroundSelected },
            ]}
          />

          {/* F0 Background Colors */}
          <ColorGroup
            title="F0 Semantic - Background"
            colors={[
              { name: "f0-background", color: f0Background },
              { name: "f0-background-hover", color: f0BackgroundHover },
              { name: "f0-background-secondary", color: f0BackgroundSecondary },
              {
                name: "f0-background-secondary-hover",
                color: f0BackgroundSecondaryHover,
              },
              { name: "f0-background-tertiary", color: f0BackgroundTertiary },
              { name: "f0-background-inverse", color: f0BackgroundInverse },
              {
                name: "f0-background-inverse-secondary",
                color: f0BackgroundInverseSecondary,
              },
              { name: "f0-background-bold", color: f0BackgroundBold },
              { name: "f0-background-accent", color: f0BackgroundAccent },
              {
                name: "f0-background-accent-bold",
                color: f0BackgroundAccentBold,
              },
              {
                name: "f0-background-accent-bold-hover",
                color: f0BackgroundAccentBoldHover,
              },
              { name: "f0-background-promote", color: f0BackgroundPromote },
              {
                name: "f0-background-promote-hover",
                color: f0BackgroundPromoteHover,
              },
              { name: "f0-background-critical", color: f0BackgroundCritical },
              {
                name: "f0-background-critical-bold",
                color: f0BackgroundCriticalBold,
              },
              { name: "f0-background-info", color: f0BackgroundInfo },
              { name: "f0-background-info-bold", color: f0BackgroundInfoBold },
              { name: "f0-background-warning", color: f0BackgroundWarning },
              {
                name: "f0-background-warning-bold",
                color: f0BackgroundWarningBold,
              },
              { name: "f0-background-positive", color: f0BackgroundPositive },
              {
                name: "f0-background-positive-bold",
                color: f0BackgroundPositiveBold,
              },
              { name: "f0-background-selected", color: f0BackgroundSelected },
              {
                name: "f0-background-selected-secondary",
                color: f0BackgroundSelectedSecondary,
              },
              {
                name: "f0-background-selected-hover",
                color: f0BackgroundSelectedHover,
              },
              {
                name: "f0-background-selected-bold",
                color: f0BackgroundSelectedBold,
              },
              {
                name: "f0-background-selected-bold-hover",
                color: f0BackgroundSelectedBoldHover,
              },
              { name: "f0-background-overlay", color: f0BackgroundOverlay },
            ]}
          />

          {/* F0 Border Colors */}
          <ColorGroup
            title="F0 Semantic - Border"
            colors={[
              { name: "f0-border", color: f0Border },
              { name: "f0-border-hover", color: f0BorderHover },
              { name: "f0-border-secondary", color: f0BorderSecondary },
              { name: "f0-border-inverse", color: f0BorderInverse },
              { name: "f0-border-bold", color: f0BorderBold },
              { name: "f0-border-promote", color: f0BorderPromote },
              { name: "f0-border-selected", color: f0BorderSelected },
              { name: "f0-border-selected-bold", color: f0BorderSelectedBold },
              { name: "f0-border-critical", color: f0BorderCritical },
              { name: "f0-border-critical-bold", color: f0BorderCriticalBold },
              { name: "f0-border-warning", color: f0BorderWarning },
              { name: "f0-border-warning-bold", color: f0BorderWarningBold },
              { name: "f0-border-info", color: f0BorderInfo },
              { name: "f0-border-info-bold", color: f0BorderInfoBold },
              { name: "f0-border-positive", color: f0BorderPositive },
              { name: "f0-border-positive-bold", color: f0BorderPositiveBold },
            ]}
          />

          {/* F0 Icon Colors */}
          <ColorGroup
            title="F0 Semantic - Icon"
            colors={[
              { name: "f0-icon", color: f0Icon },
              { name: "f0-icon-secondary", color: f0IconSecondary },
              { name: "f0-icon-inverse", color: f0IconInverse },
              { name: "f0-icon-bold", color: f0IconBold },
              { name: "f0-icon-critical", color: f0IconCritical },
              { name: "f0-icon-critical-bold", color: f0IconCriticalBold },
              { name: "f0-icon-accent", color: f0IconAccent },
              { name: "f0-icon-info", color: f0IconInfo },
              { name: "f0-icon-warning", color: f0IconWarning },
              { name: "f0-icon-positive", color: f0IconPositive },
              { name: "f0-icon-promote", color: f0IconPromote },
              { name: "f0-icon-selected", color: f0IconSelected },
              { name: "f0-icon-selected-hover", color: f0IconSelectedHover },
              {
                name: "f0-icon-mood-super-negative",
                color: f0IconMoodSuperNegative,
              },
              { name: "f0-icon-mood-negative", color: f0IconMoodNegative },
              { name: "f0-icon-mood-neutral", color: f0IconMoodNeutral },
              { name: "f0-icon-mood-positive", color: f0IconMoodPositive },
              {
                name: "f0-icon-mood-super-positive",
                color: f0IconMoodSuperPositive,
              },
            ]}
          />

          {/* F0 Special Colors */}
          <ColorGroup
            title="F0 Semantic - Special"
            colors={[
              { name: "f0-special-ring", color: f0SpecialRing },
              { name: "f0-special-page", color: f0SpecialPage },
              { name: "f0-special-highlight", color: f0SpecialHighlight },
            ]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
