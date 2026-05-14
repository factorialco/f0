import React, { useState } from "react"
import {
  ScrollView,
  TextInput,
  View,
  type LayoutChangeEvent,
} from "react-native"

import type { F0WizardStepsStep } from "../../../src/components/F0WizardSteps"

import { F0Button } from "../../../src/components/F0Button"
import { F0WizardSteps } from "../../../src/components/F0WizardSteps"
import { F0Text } from "../../../src/components/primitives/F0Text"

// =============================================================================
// Scenario 1 — Basic (no validation)
// =============================================================================

function BasicScenario() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
        }}
      >
        <F0Text variant="heading-md">Submitted!</F0Text>
        <F0Button
          label="Reset"
          variant="outline"
          onPress={() => setSubmitted(false)}
        />
      </View>
    )
  }

  const steps: F0WizardStepsStep[] = [
    {
      title: "Welcome",
      subtitle: "Let's get started",
      renderContent: () => (
        <F0Text variant="body-md-default">
          This is the first step. No validation required — tap Next to continue.
        </F0Text>
      ),
    },
    {
      title: "Details",
      renderContent: () => (
        <F0Text variant="body-md-default">
          This is the second step. You can go back or continue.
        </F0Text>
      ),
    },
    {
      title: "Confirm",
      renderContent: () => (
        <F0Text variant="body-md-default">
          Last step. Tap Submit to finish.
        </F0Text>
      ),
    },
  ]

  return (
    <F0WizardSteps
      steps={steps}
      nextLabel="Next"
      stepLabel="Step"
      previousLabel="Back"
      submitLabel="Submit"
      onSubmit={() => setSubmitted(true)}
      testID="basic-wizard"
    />
  )
}

// =============================================================================
// Scenario 2 — canAdvance (reactive validation)
// =============================================================================

function ReactiveValidationScenario() {
  const [name, setName] = useState("")
  const [nameTouched, setNameTouched] = useState(false)
  const [email, setEmail] = useState("")
  const [emailTouched, setEmailTouched] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const nameValid = name.trim().length > 0
  const emailValid = email.includes("@") && email.includes(".")

  if (submitted) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <F0Text variant="heading-md">Done!</F0Text>
        <F0Text variant="body-md-default">Name: {name}</F0Text>
        <F0Text variant="body-md-default">Email: {email}</F0Text>
        <F0Button
          label="Reset"
          variant="outline"
          onPress={() => {
            setName("")
            setNameTouched(false)
            setEmail("")
            setEmailTouched(false)
            setSubmitted(false)
          }}
        />
      </View>
    )
  }

  const steps: F0WizardStepsStep[] = [
    {
      title: "Your name",
      renderContent: () => (
        <View style={{ gap: 8 }}>
          <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            onBlur={() => setNameTouched(true)}
            style={{
              borderWidth: 1,
              borderColor: nameTouched && !nameValid ? "#e53e3e" : "#ccc",
              borderRadius: 8,
              padding: 12,
              fontSize: 16,
            }}
          />
          {nameTouched && !nameValid && (
            <F0Text variant="body-sm-default" color="critical">
              Name is required
            </F0Text>
          )}
        </View>
      ),
      canAdvance: nameValid,
    },
    {
      title: "Your email",
      renderContent: () => (
        <View style={{ gap: 8 }}>
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            onBlur={() => setEmailTouched(true)}
            keyboardType="email-address"
            autoCapitalize="none"
            style={{
              borderWidth: 1,
              borderColor: emailTouched && !emailValid ? "#e53e3e" : "#ccc",
              borderRadius: 8,
              padding: 12,
              fontSize: 16,
            }}
          />
          {emailTouched && !emailValid && (
            <F0Text variant="body-sm-default" color="critical">
              Enter a valid email address
            </F0Text>
          )}
        </View>
      ),
      canAdvance: emailValid,
    },
    {
      title: "Confirm",
      renderContent: () => (
        <View style={{ gap: 4 }}>
          <F0Text variant="body-md-semibold">Review your details</F0Text>
          <F0Text variant="body-md-default">Name: {name}</F0Text>
          <F0Text variant="body-md-default">Email: {email}</F0Text>
        </View>
      ),
    },
  ]

  return (
    <F0WizardSteps
      steps={steps}
      nextLabel="Next"
      stepLabel="Step"
      previousLabel="Back"
      submitLabel="Confirm"
      onSubmit={() => setSubmitted(true)}
      testID="reactive-wizard"
    />
  )
}

// =============================================================================
// Scenario 3 — onNext async validation
// =============================================================================

function AsyncValidationScenario() {
  const [code, setCode] = useState("")
  const [error, setError] = useState<string | undefined>()
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
        }}
      >
        <F0Text variant="heading-md">Access granted!</F0Text>
        <F0Button
          label="Reset"
          variant="outline"
          onPress={() => {
            setCode("")
            setError(undefined)
            setSubmitted(false)
          }}
        />
      </View>
    )
  }

  const steps: F0WizardStepsStep[] = [
    {
      title: "Enter code",
      renderContent: () => (
        <View style={{ gap: 8 }}>
          <F0Text variant="body-md-default">
            Enter the secret code to continue. (Hint: try "1234")
          </F0Text>
          <TextInput
            placeholder="Secret code"
            value={code}
            onChangeText={(v) => {
              setCode(v)
              setError(undefined)
            }}
            keyboardType="numeric"
            style={{
              borderWidth: 1,
              borderColor: error ? "#e53e3e" : "#ccc",
              borderRadius: 8,
              padding: 12,
              fontSize: 16,
            }}
          />
          {error && (
            <F0Text variant="body-sm-default" color="critical">
              {error}
            </F0Text>
          )}
        </View>
      ),
      onNext: async () => {
        await new Promise((resolve) => setTimeout(resolve, 800))
        if (code === "1234") {
          setError(undefined)
          return { canAdvance: true }
        }
        setError("Wrong code. Try again.")
        return { canAdvance: false }
      },
    },
    {
      title: "Access granted",
      renderContent: () => (
        <F0Text variant="body-md-default">
          You made it past the secret code step!
        </F0Text>
      ),
    },
  ]

  return (
    <F0WizardSteps
      steps={steps}
      nextLabel="Next"
      stepLabel="Step"
      previousLabel="Back"
      submitLabel="Finish"
      onSubmit={() => setSubmitted(true)}
      testID="async-wizard"
    />
  )
}

// =============================================================================
// Scenario 4 — Custom labels
// =============================================================================

function CustomLabelsScenario() {
  const steps: F0WizardStepsStep[] = [
    {
      title: "Custom next label",
      renderContent: () => (
        <F0Text variant="body-md-default">
          This step uses a custom per-step Next label.
        </F0Text>
      ),
      nextLabel: "Let's go",
    },
    {
      title:
        "This is a very long long title that shouldn't be truncated with an ellipsis if it exceeds the available space",
      renderContent: () => (
        <F0Text variant="body-md-default">
          This step uses global labels from the wizard props.
        </F0Text>
      ),
    },
    {
      title: "Final step",
      subtitle:
        "This step has no customization, so it should use the global labels",
      renderContent: () => (
        <F0Text variant="body-md-default">Final step.</F0Text>
      ),
    },
  ]

  return (
    <F0WizardSteps
      steps={steps}
      nextLabel="Continue"
      previousLabel="Go back"
      submitLabel="All done!"
      testID="labels-wizard"
    />
  )
}

// =============================================================================
// Scenario 5 — Long form with mandatory and optional fields
// =============================================================================

type LongFormData = {
  firstName: string
  lastName: string
  phone: string
  address: string
  city: string
  postalCode: string
  company: string
  jobTitle: string
  bio: string
  twitter: string
}

type LongFormTouched = Partial<Record<keyof LongFormData, boolean>>

function inputBorderColor(
  key: keyof LongFormData,
  required: boolean,
  form: LongFormData,
  touched: LongFormTouched
) {
  return required && touched[key] && !form[key].trim() ? "#e53e3e" : "#ccc"
}

const INPUT_BASE = {
  borderWidth: 1,
  borderRadius: 8,
  padding: 12,
  fontSize: 16,
} as const

// --- Step 1: Personal info ---

type Step1Props = {
  form: LongFormData
  touched: LongFormTouched
  onChange: (key: keyof LongFormData) => (value: string) => void
  onTouch: (key: keyof LongFormData) => () => void
}

const LongFormStep1 = React.memo(function LongFormStep1({
  form,
  touched,
  onChange,
  onTouch,
}: Step1Props) {
  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 6 }}>
        <F0Text variant="body-sm-semibold">
          First name{" "}
          <F0Text variant="body-sm-default" color="critical">
            *
          </F0Text>
        </F0Text>
        <TextInput
          placeholder="e.g. Jane"
          value={form.firstName}
          onChangeText={onChange("firstName")}
          onBlur={onTouch("firstName")}
          style={{
            ...INPUT_BASE,
            borderColor: inputBorderColor("firstName", true, form, touched),
          }}
        />
        {touched.firstName && !form.firstName.trim() && (
          <F0Text variant="body-sm-default" color="critical">
            Required
          </F0Text>
        )}
      </View>

      <View style={{ gap: 6 }}>
        <F0Text variant="body-sm-semibold">
          Last name{" "}
          <F0Text variant="body-sm-default" color="critical">
            *
          </F0Text>
        </F0Text>
        <TextInput
          placeholder="e.g. Doe"
          value={form.lastName}
          onChangeText={onChange("lastName")}
          onBlur={onTouch("lastName")}
          style={{
            ...INPUT_BASE,
            borderColor: inputBorderColor("lastName", true, form, touched),
          }}
        />
        {touched.lastName && !form.lastName.trim() && (
          <F0Text variant="body-sm-default" color="critical">
            Required
          </F0Text>
        )}
      </View>

      <View style={{ gap: 6 }}>
        <F0Text variant="body-sm-semibold">Phone</F0Text>
        <F0Text variant="body-sm-default" color="secondary">
          Optional
        </F0Text>
        <TextInput
          placeholder="e.g. +34 600 000 000"
          value={form.phone}
          onChangeText={onChange("phone")}
          keyboardType="phone-pad"
          style={{ ...INPUT_BASE, borderColor: "#ccc" }}
        />
      </View>
    </View>
  )
})

// --- Step 2: Address ---

type Step2Props = {
  form: LongFormData
  touched: LongFormTouched
  onChange: (key: keyof LongFormData) => (value: string) => void
  onTouch: (key: keyof LongFormData) => () => void
}

const LongFormStep2 = React.memo(function LongFormStep2({
  form,
  touched,
  onChange,
  onTouch,
}: Step2Props) {
  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 6 }}>
        <F0Text variant="body-sm-semibold">
          Street address{" "}
          <F0Text variant="body-sm-default" color="critical">
            *
          </F0Text>
        </F0Text>
        <TextInput
          placeholder="e.g. 123 Main St"
          value={form.address}
          onChangeText={onChange("address")}
          onBlur={onTouch("address")}
          style={{
            ...INPUT_BASE,
            borderColor: inputBorderColor("address", true, form, touched),
          }}
        />
        {touched.address && !form.address.trim() && (
          <F0Text variant="body-sm-default" color="critical">
            Required
          </F0Text>
        )}
      </View>

      <View style={{ gap: 6 }}>
        <F0Text variant="body-sm-semibold">
          City{" "}
          <F0Text variant="body-sm-default" color="critical">
            *
          </F0Text>
        </F0Text>
        <TextInput
          placeholder="e.g. Barcelona"
          value={form.city}
          onChangeText={onChange("city")}
          onBlur={onTouch("city")}
          style={{
            ...INPUT_BASE,
            borderColor: inputBorderColor("city", true, form, touched),
          }}
        />
        {touched.city && !form.city.trim() && (
          <F0Text variant="body-sm-default" color="critical">
            Required
          </F0Text>
        )}
      </View>

      <View style={{ gap: 6 }}>
        <F0Text variant="body-sm-semibold">
          Postal code{" "}
          <F0Text variant="body-sm-default" color="critical">
            *
          </F0Text>
        </F0Text>
        <TextInput
          placeholder="e.g. 08001"
          value={form.postalCode}
          onChangeText={onChange("postalCode")}
          onBlur={onTouch("postalCode")}
          keyboardType="numeric"
          style={{
            ...INPUT_BASE,
            borderColor: inputBorderColor("postalCode", true, form, touched),
          }}
        />
        {touched.postalCode && !form.postalCode.trim() && (
          <F0Text variant="body-sm-default" color="critical">
            Required
          </F0Text>
        )}
      </View>
    </View>
  )
})

// --- Step 3: Work details ---

type Step3Props = {
  form: LongFormData
  onChange: (key: keyof LongFormData) => (value: string) => void
}

const LongFormStep3 = React.memo(function LongFormStep3({
  form,
  onChange,
}: Step3Props) {
  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 6 }}>
        <F0Text variant="body-sm-semibold">Company</F0Text>
        <F0Text variant="body-sm-default" color="secondary">
          Optional
        </F0Text>
        <TextInput
          placeholder="e.g. Factorial"
          value={form.company}
          onChangeText={onChange("company")}
          style={{ ...INPUT_BASE, borderColor: "#ccc" }}
        />
      </View>

      <View style={{ gap: 6 }}>
        <F0Text variant="body-sm-semibold">Job title</F0Text>
        <F0Text variant="body-sm-default" color="secondary">
          Optional
        </F0Text>
        <TextInput
          placeholder="e.g. Product Designer"
          value={form.jobTitle}
          onChangeText={onChange("jobTitle")}
          style={{ ...INPUT_BASE, borderColor: "#ccc" }}
        />
      </View>

      <View style={{ gap: 6 }}>
        <F0Text variant="body-sm-semibold">Bio</F0Text>
        <F0Text variant="body-sm-default" color="secondary">
          Optional — tell us about yourself
        </F0Text>
        <TextInput
          placeholder="A short bio..."
          value={form.bio}
          onChangeText={onChange("bio")}
          multiline
          numberOfLines={4}
          style={{
            ...INPUT_BASE,
            borderColor: "#ccc",
            minHeight: 96,
            textAlignVertical: "top",
          }}
        />
      </View>

      <View style={{ gap: 6 }}>
        <F0Text variant="body-sm-semibold">Twitter / X handle</F0Text>
        <F0Text variant="body-sm-default" color="secondary">
          Optional
        </F0Text>
        <TextInput
          placeholder="@handle"
          value={form.twitter}
          onChangeText={onChange("twitter")}
          autoCapitalize="none"
          style={{ ...INPUT_BASE, borderColor: "#ccc" }}
        />
      </View>
    </View>
  )
})

// --- Step 4: Review ---

type Step4Props = { form: LongFormData }

const LongFormStep4 = React.memo(function LongFormStep4({ form }: Step4Props) {
  const rows: [string, string][] = [
    ["Name", `${form.firstName} ${form.lastName}`],
    ["Phone", form.phone || "—"],
    [
      "Address",
      form.address ? `${form.address}, ${form.city} ${form.postalCode}` : "—",
    ],
    ["Company", form.company || "—"],
    ["Job title", form.jobTitle || "—"],
    ["Bio", form.bio || "—"],
    ["Twitter", form.twitter || "—"],
  ]
  return (
    <View style={{ gap: 8 }}>
      <F0Text variant="body-md-semibold">Summary</F0Text>
      {rows.map(([label, value]) => (
        <View key={label} style={{ flexDirection: "row", gap: 8 }}>
          <View style={{ width: 80 }}>
            <F0Text variant="body-sm-semibold">{label}</F0Text>
          </View>
          <View style={{ flex: 1 }}>
            <F0Text variant="body-sm-default">{value}</F0Text>
          </View>
        </View>
      ))}
    </View>
  )
})

// --- Scenario root ---

function LongFormScenario() {
  const [form, setForm] = useState<LongFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    company: "",
    jobTitle: "",
    bio: "",
    twitter: "",
  })
  const [touched, setTouched] = useState<LongFormTouched>({})
  const [submitted, setSubmitted] = useState(false)

  const onChange = React.useCallback(
    (key: keyof LongFormData) => (value: string) =>
      setForm((prev) => ({ ...prev, [key]: value })),
    []
  )

  const onTouch = React.useCallback(
    (key: keyof LongFormData) => () =>
      setTouched((prev) => ({ ...prev, [key]: true })),
    []
  )

  const step1Valid =
    form.firstName.trim().length > 0 && form.lastName.trim().length > 0

  const step2Valid =
    form.address.trim().length > 0 &&
    form.city.trim().length > 0 &&
    form.postalCode.trim().length > 0

  if (submitted) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <F0Text variant="heading-md">Profile saved!</F0Text>
        <F0Text variant="body-md-default">
          {form.firstName} {form.lastName}
        </F0Text>
        <F0Button
          label="Reset"
          variant="outline"
          onPress={() => {
            setForm({
              firstName: "",
              lastName: "",
              phone: "",
              address: "",
              city: "",
              postalCode: "",
              company: "",
              jobTitle: "",
              bio: "",
              twitter: "",
            })
            setTouched({})
            setSubmitted(false)
          }}
        />
      </View>
    )
  }

  const steps: F0WizardStepsStep[] = [
    {
      title: "Personal info",
      subtitle: "Tell us a bit about yourself",
      canAdvance: step1Valid,
      renderContent: () => (
        <LongFormStep1
          form={form}
          touched={touched}
          onChange={onChange}
          onTouch={onTouch}
        />
      ),
    },
    {
      title: "Address",
      subtitle: "Where are you based?",
      canAdvance: step2Valid,
      renderContent: () => (
        <LongFormStep2
          form={form}
          touched={touched}
          onChange={onChange}
          onTouch={onTouch}
        />
      ),
    },
    {
      title: "Work details",
      renderContent: () => <LongFormStep3 form={form} onChange={onChange} />,
    },
    {
      title: "Review",
      renderContent: () => <LongFormStep4 form={form} />,
    },
  ]

  return (
    <F0WizardSteps
      steps={steps}
      nextLabel="Next"
      stepLabel="Step"
      previousLabel="Back"
      submitLabel="Save profile"
      onSubmit={() => setSubmitted(true)}
      testID="long-form-wizard"
    />
  )
}

// =============================================================================
// Showcase root
// =============================================================================

type Scenario =
  | "basic"
  | "reactive-validation"
  | "async-validation"
  | "custom-labels"
  | "long-form"

const SCENARIOS: { value: Scenario; label: string; description: string }[] = [
  {
    value: "basic",
    label: "Basic",
    description: "Three steps, no validation",
  },
  {
    value: "reactive-validation",
    label: "Reactive",
    description: "canAdvance disables Next until fields are filled",
  },
  {
    value: "async-validation",
    label: "Async",
    description: "onNext simulates an API check before advancing",
  },
  {
    value: "custom-labels",
    label: "Labels",
    description: "Per-step and global label overrides",
  },
  {
    value: "long-form",
    label: "Long form",
    description:
      "Multi-step form with mandatory (*) and optional fields — tests scroll",
  },
]

export function F0WizardStepsShowcase() {
  const [scenario, setScenario] = useState<Scenario>("basic")
  const [containerHeight, setContainerHeight] = useState<number | undefined>()
  const [selectorHeight, setSelectorHeight] = useState(0)
  const [descHeight, setDescHeight] = useState(0)

  const wizardHeight =
    containerHeight !== undefined
      ? containerHeight - selectorHeight - descHeight
      : undefined

  const renderScenario = () => {
    switch (scenario) {
      case "basic":
        return <BasicScenario />
      case "reactive-validation":
        return <ReactiveValidationScenario />
      case "async-validation":
        return <AsyncValidationScenario />
      case "custom-labels":
        return <CustomLabelsScenario />
      case "long-form":
        return <LongFormScenario />
    }
  }

  return (
    <View
      style={{ flex: 1 }}
      onLayout={(e: LayoutChangeEvent) =>
        setContainerHeight(e.nativeEvent.layout.height)
      }
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0, flexShrink: 0 }}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          gap: 8,
        }}
        onLayout={(e: LayoutChangeEvent) =>
          setSelectorHeight(e.nativeEvent.layout.height)
        }
      >
        {SCENARIOS.map((s) => (
          <F0Button
            key={s.value}
            label={s.label}
            variant={scenario === s.value ? "default" : "outline"}
            size="sm"
            onPress={() => setScenario(s.value)}
          />
        ))}
      </ScrollView>

      <View
        style={{ paddingHorizontal: 16, paddingBottom: 8 }}
        onLayout={(e: LayoutChangeEvent) =>
          setDescHeight(e.nativeEvent.layout.height)
        }
      >
        <F0Text variant="body-sm-default" color="secondary">
          {SCENARIOS.find((s) => s.value === scenario)?.description}
        </F0Text>
      </View>

      <View
        style={
          wizardHeight !== undefined ? { height: wizardHeight } : { flex: 1 }
        }
      >
        {renderScenario()}
      </View>
    </View>
  )
}
