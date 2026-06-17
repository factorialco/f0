import { useEffect, useState } from "react"
import {
  F0Avatar,
  F0Box,
  F0Button,
  F0Checkbox,
  F0Dialog,
  F0Heading,
  F0Icon,
  F0Text,
} from "@factorialco/f0-react"
import { Input, Textarea } from "@factorialco/f0-react/dist/experimental"
import { Add, Delete, File, Link } from "@factorialco/f0-react/icons/app"

import { employees, trainings, type TrainingClass } from "@/fixtures"

type Props = {
  trainingId: string
  isOpen: boolean
  onClose: () => void
  onCreated: (klass: TrainingClass) => void
}

type StepId = "details" | "sessions" | "employees" | "materials"

type SessionDraft = {
  id: string
  name: string
  startDate: string
  startsAtHour: string
  endsAtHour: string
  modality: string
  location: string
  link: string
}

type MaterialDraft = {
  id: string
  title: string
  type: "file" | "link"
  detail: string
}

const WIZARD_STEPS: { id: StepId; label: string }[] = [
  { id: "details", label: "Details" },
  { id: "sessions", label: "Sessions" },
  { id: "employees", label: "Employees" },
  { id: "materials", label: "Materials" },
]

const STEP_INDEX_BY_ID = WIZARD_STEPS.reduce<Record<StepId, number>>(
  (acc, step, index) => ({ ...acc, [step.id]: index }),
  {
    details: 0,
    sessions: 0,
    employees: 0,
    materials: 0,
  }
)

const selectableEmployees = employees.slice(0, 8)

const splitName = (fullName: string) => {
  const [firstName = "", ...rest] = fullName.split(" ")
  return { firstName, lastName: rest.join(" ") }
}

export function NewClassWizard({
  trainingId,
  isOpen,
  onClose,
  onCreated,
}: Props) {
  const [activeStep, setActiveStep] = useState<StepId>("details")
  const [name, setName] = useState("")
  const [code, setCode] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [description, setDescription] = useState("")
  const [sessionName, setSessionName] = useState("")
  const [sessionStartDate, setSessionStartDate] = useState("")
  const [sessionStartsAt, setSessionStartsAt] = useState("09:00")
  const [sessionEndsAt, setSessionEndsAt] = useState("11:00")
  const [sessionModality, setSessionModality] = useState("In person")
  const [sessionLocation, setSessionLocation] = useState("")
  const [sessionLink, setSessionLink] = useState("")
  const [sessions, setSessions] = useState<SessionDraft[]>([])
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState<string[]>([])
  const [materialTitle, setMaterialTitle] = useState("")
  const [materialType, setMaterialType] = useState<"file" | "link">("file")
  const [materialDetail, setMaterialDetail] = useState("")
  const [materials, setMaterials] = useState<MaterialDraft[]>([])

  useEffect(() => {
    if (!isOpen) return
    setActiveStep("details")
    setName("")
    setCode("")
    setStartDate("")
    setEndDate("")
    setDescription("")
    setSessionName("")
    setSessionStartDate("")
    setSessionStartsAt("09:00")
    setSessionEndsAt("11:00")
    setSessionModality("In person")
    setSessionLocation("")
    setSessionLink("")
    setSessions([])
    setSelectedEmployeeIds([])
    setMaterialTitle("")
    setMaterialType("file")
    setMaterialDetail("")
    setMaterials([])
  }, [isOpen])

  const handleCreate = () => {
    const training = trainings.find((item) => item.id === trainingId)
    if (!training) return

    const selectedParticipants = selectableEmployees
      .filter((employee) => selectedEmployeeIds.includes(employee.id))
      .map((employee) => {
        const { firstName, lastName } = splitName(employee.fullName)
        return { firstName, lastName, src: employee.avatarUrl }
      })

    const newClass: TrainingClass = {
      id: `cls-${Date.now()}`,
      trainingId,
      name: name.trim() || "Untitled group",
      startDate: startDate || null,
      endDate: endDate || null,
      sessionCount: sessions.length,
      participantCount: selectedParticipants.length,
      completedAttendancesCount: 0,
      totalAttendancesCount: selectedParticipants.length * Math.max(sessions.length, 1),
      cost: "0",
      indirectCost: "0",
      salaryCost: "0",
      participants: selectedParticipants,
    }

    training.classes.push(newClass)
    void description
    void code
    void materials
    onCreated(newClass)
  }

  const currentStepIndex = STEP_INDEX_BY_ID[activeStep]
  const isLastStep = currentStepIndex === WIZARD_STEPS.length - 1
  const canLeaveDetails = name.trim() !== "" && startDate !== "" && endDate !== ""

  const goToPreviousStep = () => {
    const previousStep = WIZARD_STEPS[currentStepIndex - 1]
    if (previousStep) setActiveStep(previousStep.id)
  }

  const goToNextStep = () => {
    if (activeStep === "details" && !canLeaveDetails) return
    if (isLastStep) {
      handleCreate()
      return
    }
    const nextStep = WIZARD_STEPS[currentStepIndex + 1]
    if (nextStep) setActiveStep(nextStep.id)
  }

  const addSession = () => {
    const trimmedName = sessionName.trim()
    if (!trimmedName) return
    setSessions((current) => [
      ...current,
      {
        id: `session-${Date.now()}`,
        name: trimmedName,
        startDate: sessionStartDate || startDate,
        startsAtHour: sessionStartsAt,
        endsAtHour: sessionEndsAt,
        modality: sessionModality,
        location: sessionLocation,
        link: sessionLink,
      },
    ])
    setSessionName("")
    setSessionStartDate("")
    setSessionStartsAt("09:00")
    setSessionEndsAt("11:00")
    setSessionLocation("")
    setSessionLink("")
  }

  const toggleEmployee = (employeeId: string, checked: boolean) => {
    setSelectedEmployeeIds((current) =>
      checked
        ? Array.from(new Set([...current, employeeId]))
        : current.filter((id) => id !== employeeId)
    )
  }

  const addMaterial = () => {
    const trimmedTitle = materialTitle.trim()
    if (!trimmedTitle) return
    setMaterials((current) => [
      ...current,
      {
        id: `material-${Date.now()}`,
        title: trimmedTitle,
        type: materialType,
        detail: materialDetail.trim(),
      },
    ])
    setMaterialTitle("")
    setMaterialType("file")
    setMaterialDetail("")
  }

  const renderStepContent = () => {
    if (activeStep === "details") {
      return (
        <F0Box display="flex" flexDirection="column" gap="2xl">
          <F0Box display="flex" flexDirection="column" gap="lg">
            <F0Heading
              as="h3"
              variant="heading"
              content="Training group details"
            />
            <Input
              label="Training group name"
              value={name}
              onChange={(value) => setName(value ?? "")}
              placeholder="e.g. Training group C - Q3"
              maxLength={140}
            />
          </F0Box>

          <F0Box display="grid" columns="2" gap="lg">
            <Input
              label="Start date"
              type="date"
              value={startDate}
              onChange={(value) => setStartDate(value ?? "")}
            />
            <Input
              label="End date"
              type="date"
              value={endDate}
              onChange={(value) => setEndDate(value ?? "")}
            />
          </F0Box>

          <F0Box display="flex" flexDirection="column" gap="sm">
            <Input
              label="Training group code"
              value={code}
              onChange={(value) => setCode(value ?? "")}
              placeholder="00001"
              maxLength={5}
            />
            <F0Text
              variant="description"
              content="If this group is subsidised, use the code assigned by Fundae. You can leave it empty and complete it later."
            />
          </F0Box>

          <F0Box display="flex" flexDirection="column" gap="sm">
            <F0Text variant="label" content="Description" />
            <Textarea
              label="Description"
              value={description}
              onChange={(value) => setDescription(value ?? "")}
              rows={5}
            />
          </F0Box>
        </F0Box>
      )
    }

    if (activeStep === "sessions") {
      return (
        <F0Box display="flex" flexDirection="column" gap="2xl">
          <F0Box display="flex" flexDirection="column" gap="sm">
            <F0Heading as="h3" variant="heading" content="Sessions" />
            <F0Text
              variant="description"
              content="Add the sessions that belong to this training group. Sessions can be scheduled or completed later from the group detail."
            />
          </F0Box>

          <F0Box
            display="flex"
            flexDirection="column"
            gap="lg"
            padding="lg"
            border="default"
            borderColor="secondary"
            borderRadius="lg"
          >
            <Input
              label="Session name"
              value={sessionName}
              onChange={(value) => setSessionName(value ?? "")}
              placeholder="e.g. Communication workshop"
            />
            <F0Box display="grid" columns="3" gap="lg">
              <Input
                label="Date"
                type="date"
                value={sessionStartDate}
                onChange={(value) => setSessionStartDate(value ?? "")}
              />
              <Input
                label="Starts at"
                type="time"
                value={sessionStartsAt}
                onChange={(value) => setSessionStartsAt(value ?? "")}
              />
              <Input
                label="Ends at"
                type="time"
                value={sessionEndsAt}
                onChange={(value) => setSessionEndsAt(value ?? "")}
              />
            </F0Box>
            <F0Box display="grid" columns="3" gap="lg">
              <Input
                label="Modality"
                value={sessionModality}
                onChange={(value) => setSessionModality(value ?? "")}
                placeholder="In person, online or mixed"
              />
              <Input
                label="Location"
                value={sessionLocation}
                onChange={(value) => setSessionLocation(value ?? "")}
                placeholder="Room or address"
              />
              <Input
                label="Meeting link"
                value={sessionLink}
                onChange={(value) => setSessionLink(value ?? "")}
                placeholder="https://"
              />
            </F0Box>
            <F0Box display="flex" justifyContent="end">
              <F0Button
                label="Add session"
                icon={Add}
                variant="outline"
                onClick={addSession}
                disabled={sessionName.trim() === ""}
              />
            </F0Box>
          </F0Box>

          <F0Box display="flex" flexDirection="column" gap="md">
            <F0Text variant="label" content={`Sessions (${sessions.length})`} />
            {sessions.length === 0 ? (
              <F0Box
                padding="lg"
                border="default"
                borderColor="secondary"
                borderRadius="lg"
                background="secondary"
              >
                <F0Text
                  variant="description"
                  content="No sessions added yet. You can continue without sessions and add them later."
                />
              </F0Box>
            ) : (
              sessions.map((session) => (
                <F0Box
                  key={session.id}
                  display="flex"
                  alignItems="center"
                  justifyContent="between"
                  gap="lg"
                  padding="lg"
                  border="default"
                  borderColor="secondary"
                  borderRadius="lg"
                >
                  <F0Box display="flex" flexDirection="column" gap="xs">
                    <F0Text variant="label" content={session.name} />
                    <F0Text
                      variant="small"
                      content={`${session.startDate || startDate} · ${session.startsAtHour}-${session.endsAtHour} · ${session.modality}`}
                    />
                    <F0Text
                      variant="description"
                      content={session.location || session.link || "Location pending"}
                    />
                  </F0Box>
                  <F0Button
                    label="Delete session"
                    hideLabel
                    icon={Delete}
                    variant="ghost"
                    onClick={() =>
                      setSessions((current) =>
                        current.filter((item) => item.id !== session.id)
                      )
                    }
                  />
                </F0Box>
              ))
            )}
          </F0Box>
        </F0Box>
      )
    }

    if (activeStep === "employees") {
      return (
        <F0Box display="flex" flexDirection="column" gap="2xl">
          <F0Box display="flex" flexDirection="column" gap="sm">
            <F0Heading as="h3" variant="heading" content="Employees" />
            <F0Text
              variant="description"
              content="Select the employees that should be enrolled in this training group. This mirrors the manual employee selector in production."
            />
          </F0Box>

          <F0Box display="flex" flexDirection="column" gap="md">
            <F0Text
              variant="label"
              content={`${selectedEmployeeIds.length} selected employees`}
            />
            <F0Box display="flex" flexDirection="column" gap="sm">
              {selectableEmployees.map((employee) => {
                const { firstName, lastName } = splitName(employee.fullName)
                const checked = selectedEmployeeIds.includes(employee.id)
                return (
                  <F0Box
                    key={employee.id}
                    display="grid"
                    columns="12"
                    alignItems="center"
                    gap="lg"
                    padding="md"
                    border="default"
                    borderColor={checked ? "selected" : "secondary"}
                    borderRadius="lg"
                    background={checked ? "selected-secondary" : "primary"}
                  >
                    <F0Box colSpan="1">
                      <F0Checkbox
                        title={employee.fullName}
                        hideLabel
                        checked={checked}
                        onCheckedChange={(nextChecked) =>
                          toggleEmployee(employee.id, nextChecked)
                        }
                      />
                    </F0Box>
                    <F0Box colSpan="7" display="flex" alignItems="center" gap="md">
                      <F0Avatar
                        avatar={{
                          type: "person",
                          firstName,
                          lastName,
                          src: employee.avatarUrl,
                        }}
                        size="sm"
                      />
                      <F0Box display="flex" flexDirection="column" gap="xs">
                        <F0Text variant="label" content={employee.fullName} />
                        <F0Text variant="small" content={employee.email} />
                      </F0Box>
                    </F0Box>
                    <F0Box colSpan="4" display="flex" flexDirection="column" gap="xs">
                      <F0Text variant="small" content={employee.role} />
                      <F0Text variant="description" content={employee.location} />
                    </F0Box>
                  </F0Box>
                )
              })}
            </F0Box>
          </F0Box>
        </F0Box>
      )
    }

    return (
      <F0Box display="flex" flexDirection="column" gap="2xl">
        <F0Box display="flex" flexDirection="column" gap="sm">
          <F0Heading as="h3" variant="heading" content="Materials" />
          <F0Text
            variant="description"
            content="Attach files or links that participants will use in this group. These will appear in the group materials area after saving."
          />
        </F0Box>

        <F0Box
          display="flex"
          flexDirection="column"
          gap="lg"
          padding="lg"
          border="default"
          borderColor="secondary"
          borderRadius="lg"
        >
          <Input
            label="Material title"
            value={materialTitle}
            onChange={(value) => setMaterialTitle(value ?? "")}
            placeholder="e.g. Communication workbook"
          />
          <F0Box display="grid" columns="2" gap="lg">
            <Input
              label="Type"
              value={materialType === "file" ? "File" : "Link"}
              onChange={(value) =>
                setMaterialType(value?.toLowerCase() === "link" ? "link" : "file")
              }
              placeholder="File or Link"
            />
            <Input
              label={materialType === "link" ? "URL" : "File name"}
              value={materialDetail}
              onChange={(value) => setMaterialDetail(value ?? "")}
              placeholder={materialType === "link" ? "https://" : "workbook.pdf"}
            />
          </F0Box>
          <F0Box display="flex" justifyContent="end">
            <F0Button
              label="Add material"
              icon={Add}
              variant="outline"
              onClick={addMaterial}
              disabled={materialTitle.trim() === ""}
            />
          </F0Box>
        </F0Box>

        <F0Box display="flex" flexDirection="column" gap="md">
          <F0Text variant="label" content={`Materials (${materials.length})`} />
          {materials.length === 0 ? (
            <F0Box
              padding="lg"
              border="default"
              borderColor="secondary"
              borderRadius="lg"
              background="secondary"
            >
              <F0Text
                variant="description"
                content="No materials added yet. You can continue without materials and upload them later."
              />
            </F0Box>
          ) : (
            materials.map((material) => (
              <F0Box
                key={material.id}
                display="flex"
                alignItems="center"
                justifyContent="between"
                gap="lg"
                padding="lg"
                border="default"
                borderColor="secondary"
                borderRadius="lg"
              >
                <F0Box display="flex" alignItems="center" gap="md">
                  <F0Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="8"
                    height="8"
                    borderRadius="md"
                    background="secondary"
                  >
                    <F0Icon icon={material.type === "file" ? File : Link} size="sm" />
                  </F0Box>
                  <F0Box display="flex" flexDirection="column" gap="xs">
                    <F0Text variant="label" content={material.title} />
                    <F0Text
                      variant="description"
                      content={material.detail || (material.type === "file" ? "File" : "Link")}
                    />
                  </F0Box>
                </F0Box>
                <F0Button
                  label="Delete material"
                  hideLabel
                  icon={Delete}
                  variant="ghost"
                  onClick={() =>
                    setMaterials((current) =>
                      current.filter((item) => item.id !== material.id)
                    )
                  }
                />
              </F0Box>
            ))
          )}
        </F0Box>
      </F0Box>
    )
  }

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      position="center"
      width="xl"
      title="New training group"
      primaryAction={{
        label: isLastStep ? "Save" : "Continue",
        onClick: goToNextStep,
        disabled: activeStep === "details" && !canLeaveDetails,
      }}
      secondaryAction={{
        label: currentStepIndex === 0 ? "Cancel" : "Back",
        onClick: currentStepIndex === 0 ? onClose : goToPreviousStep,
      }}
      disableContentPadding
    >
      <F0Box display="grid" columns="12" minHeight="96">
        <F0Box
          colSpan="3"
          display="flex"
          flexDirection="column"
          gap="xs"
          padding="lg"
          background="secondary"
          borderRight="default"
          borderColor="secondary"
        >
          {WIZARD_STEPS.map((step, index) => {
            const isActive = step.id === activeStep
            const isDone = index < currentStepIndex
            return (
              <F0Box
                key={step.id}
                display="flex"
                alignItems="center"
                gap="md"
                padding="md"
                borderRadius="md"
                background={isActive ? "selected" : "transparent"}
              >
                <F0Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="6"
                  height="6"
                  borderRadius="full"
                  background={isActive || isDone ? "selected-bold" : "primary"}
                  border="default"
                  borderColor={isActive || isDone ? "selected-bold" : "secondary"}
                >
                  <F0Text
                    variant={isActive || isDone ? "inverse" : "small"}
                    content={String(index + 1)}
                  />
                </F0Box>
                <F0Text
                  variant={isActive ? "label" : "body"}
                  content={step.label}
                />
              </F0Box>
            )
          })}
        </F0Box>

        <F0Box colSpan="9" padding="2xl" overflowY="auto">
          {renderStepContent()}
        </F0Box>
      </F0Box>
    </F0Dialog>
  )
}
