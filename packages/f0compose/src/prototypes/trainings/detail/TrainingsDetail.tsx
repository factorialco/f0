import { StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { Link, Menu, Reset, Settings } from "@factorialco/f0-react/icons/app"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

import type { Training } from "@/fixtures"

import { AdminModals, type AdminAction } from "./AdminModals"
import { AttachmentsTab } from "./AttachmentsTab"
import { ClassesTab } from "./ClassesTab"
import { ContentTab } from "./ContentTab"
import { DocumentsTab } from "./DocumentsTab"
import { FormsTab } from "./FormsTab"
import { FundaeFlow } from "./fundae/FundaeFlow"
import { FundaeFlowB } from "./fundae/FundaeFlowB"
import { FundaeFlowC } from "./fundae/FundaeFlowC"
import { FundaeFlowD } from "./fundae/FundaeFlowD"
import { OverviewTab } from "./OverviewTab"
import { ParticipantsTab } from "./ParticipantsTab"
import { type DetailTabId, detailTabs } from "../tabs"
import { PageContent } from "../_shared/PageContent"

const VALID_TABS = new Set<string>(detailTabs.map((t) => t.id))

type Props = {
  training: Training
  onBack: () => void
}

export function TrainingsDetail({ training, onBack }: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [adminAction, setAdminAction] = useState<AdminAction>(null)

  const rawTab = searchParams.get("dtab")
  const activeTab: DetailTabId =
    rawTab && VALID_TABS.has(rawTab) ? (rawTab as DetailTabId) : "overview"

  const setTab = (id: string) => {
    const next = new URLSearchParams(searchParams)
    next.set("dtab", id)
    setSearchParams(next)
  }

  // FUNDAE ya NO es una tab: es su propia página (variante D), a la que se
  // entra por el botón "Gestionar FUNDAE" de la cabecera. La ruta dtab=fundae
  // sigue viva (A/B/C accesibles por URL para comparar), pero no se muestra
  // como pestaña.
  const tabsWithNav = detailTabs
    .filter((t) => t.id !== "fundae")
    .map((t) => ({
      ...t,
      onClick: () => setTab(t.id),
    }))

  const isDraft = training.status === "draft"

  const getTotalDuration = () => {
    const totalMinutes = training.totalDuration * 60
    const hours = Math.floor(totalMinutes / 60)
    const minutes = Math.round(totalMinutes % 60)
    return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`
  }

  const goToFundae = () => {
    const next = new URLSearchParams(searchParams)
    next.set("dtab", "fundae")
    next.set("fv", "d")
    setSearchParams(next)
  }

  // "Gestionar FUNDAE" va como primaryAction (a la derecha del todo, sin icono).
  // Solo en cursos publicados y bonificables (en draft el primary es Publish).
  const fundaePrimary = !isDraft && training.fundaeSubsidized
  const secondaryActions = [
    ...(!isDraft
      ? [
          {
            label: "Copy link",
            icon: Link,
            onClick: () => setAdminAction("copy-link"),
            tooltip: "Copy link",
            hideLabel: true as const,
          },
        ]
      : []),
  ]

  // Acciones menos frecuentes → menú de puntos (kebab `otherActions`), patrón
  // del ResourceHeader (igual que el Talent Plan mete ahí Edit details/Discard).
  const otherActions = [
    {
      label: "Settings",
      icon: Settings,
      onClick: () => setAdminAction("settings"),
    },
    ...(!isDraft
      ? [
          {
            label: "Revert to draft",
            icon: Reset,
            onClick: () => setAdminAction("revert-draft"),
            critical: true as const,
          },
        ]
      : []),
  ]

  // Variante D: FUNDAE como PÁGINA propia (estilo policies), no bajo el tab del
  // training. Se entra con fv=d; aquí cortocircuitamos el layout de detalle
  // (cabecera de training + tabs) y dejamos solo el breadcrumb de vuelta al
  // curso + la propia página FUNDAE (que trae su ResourceHeader y su NavRail).
  if (activeTab === "fundae" && searchParams.get("fv") === "d") {
    // El crumb del curso usa `href` (como los demás crumbs navegables): un
    // item con solo `onClick` y sin `href` se renderiza como texto no clicable.
    const courseHref = `/p/trainings?training=${training.id}&dtab=overview`
    // Hamburguesa que colapsa/expande la barra global (patrón policies). Va
    // INLINE con el breadcrumb, en la misma fila del header — NO en una columna
    // que desplace el contenido. Estado por URL (`?nav=open`) compartido con
    // FactorialShell.
    const toggleNav = () => {
      const next = new URLSearchParams(searchParams)
      if (next.get("nav") === "open") next.delete("nav")
      else next.set("nav", "open")
      setSearchParams(next)
    }
    return (
      <Page
        header={
          <div className="flex items-stretch">
            <button
              type="button"
              onClick={toggleNav}
              aria-label="Mostrar u ocultar la navegación"
              className="flex shrink-0 items-center justify-center pl-4 pr-2 text-f1-foreground-secondary transition-colors hover:text-f1-foreground"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="min-w-0 flex-1">
              <PageHeader
                module={{ id: "company_trainings", name: "Trainings", href: "/p/trainings" }}
                breadcrumbs={[
                  { id: training.id, label: training.name, href: courseHref },
                  { id: "fundae", label: "Gestión FUNDAE" },
                ]}
              />
            </div>
          </div>
        }
      >
        {/* Layout canónico (skill f0-prototype): el cuerpo va en StandardLayout
            (aporta padding px-6 py-5 + scroll). Llena la zona de contenido a la
            derecha de la barra global de Factorial — que es la que enmarca la
            página por la izquierda. */}
        <StandardLayout>
          <FundaeFlowD training={training} />
        </StandardLayout>
      </Page>
    )
  }

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{ id: "company_trainings", name: "Trainings", href: "/p/trainings" }}
            breadcrumbs={[
              { id: "list", label: "Trainings", onClick: onBack },
              { id: training.id, label: training.name },
            ]}
          />
          <ResourceHeader
            title={training.name}
            metadata={[
              {
                label: "Type",
                value: {
                  type: "text",
                  content: training.type === "internal" ? "Internal" : "External",
                },
              },
              ...(training.totalDuration
                ? [
                    {
                      label: "Total duration",
                      value: {
                        type: "text" as const,
                        content: getTotalDuration(),
                      },
                    },
                  ]
                : []),
              ...(training.groupNames.length > 0
                ? [
                    {
                      label: "Groups",
                      value: {
                        type: "data-list" as const,
                        data: training.groupNames,
                      },
                    },
                  ]
                : []),
              ...(training.participantAvatars.length > 0
                ? [
                    {
                      label: "",
                      value: {
                        type: "list" as const,
                        variant: "person" as const,
                        avatars: training.participantAvatars.map((a) => ({
                          ...a,
                          type: "person" as const,
                        })),
                      },
                    },
                  ]
                : []),
              ...(training.instructorAvatars.length > 0
                ? [
                    {
                      label: "Instructors",
                      value: {
                        type: "list" as const,
                        variant: "person" as const,
                        avatars: training.instructorAvatars.map((a) => ({
                          ...a,
                          type: "person" as const,
                        })),
                      },
                    },
                  ]
                : []),
              ...(training.publishedAsFreeCourse
                ? [
                    {
                      label: "",
                      value: {
                        type: "status" as const,
                        label: "Published as free course",
                        variant: "positive" as const,
                      },
                    },
                  ]
                : []),
            ]}
            status={{
              label: "",
              text: isDraft ? "Draft" : "Published",
              variant: isDraft ? "neutral" : "positive",
            }}
            primaryAction={
              isDraft
                ? { label: "Publish", onClick: () => setAdminAction("publish") }
                : fundaePrimary
                  ? { label: "Gestionar FUNDAE", onClick: goToFundae }
                  : undefined
            }
            secondaryActions={secondaryActions}
            otherActions={otherActions}
          />
          <Tabs key={activeTab} tabs={tabsWithNav} activeTabId={activeTab} />
        </>
      }
    >
      <PageContent>
        {activeTab === "overview" && <OverviewTab training={training} />}
        {activeTab === "content" && <ContentTab training={training} />}
        {activeTab === "groups" && <ClassesTab training={training} />}
        {activeTab === "participants" && <ParticipantsTab training={training} />}
        {activeTab === "attachments" && <AttachmentsTab training={training} />}
        {activeTab === "documents" && <DocumentsTab training={training} />}
        {activeTab === "surveys" && <FormsTab training={training} />}
        {activeTab === "fundae" &&
          (searchParams.get("fv") === "b" ? (
            <FundaeFlowB training={training} />
          ) : searchParams.get("fv") === "c" ? (
            <FundaeFlowC training={training} />
          ) : searchParams.get("fv") === "d" ? (
            <FundaeFlowD training={training} />
          ) : (
            <FundaeFlow training={training} />
          ))}

        <AdminModals
          action={adminAction}
          training={training}
          onClose={() => setAdminAction(null)}
        />
      </PageContent>
    </Page>
  )
}
