import { F0Box, F0Button, F0Heading } from "@factorialco/f0-react"
import { Share, Upload } from "@factorialco/f0-react/icons/app"

import { PageHeader } from "@/prototypes/home/hub/reference/framework/components/EmbeddedPageHeader"
import { SectionHeader } from "@/prototypes/home/hub/reference/framework/components/SectionHeader"
import { SectionTabs } from "@/prototypes/home/hub/reference/framework/components/SectionTabs"
import { useLocale } from "@/prototypes/home/hub/reference/lib/navConfig"
import {
  useLocation,
  useNavigate,
} from "@/prototypes/home/hub/reference/router"

import { nodeName } from "../mocks/documents"
import { useDocumentsState } from "../state"

const STR = {
  en: {
    documents: "Documents",
    library: "Library",
    templates: "Templates",
    trash: "Trash",
    distributeFiles: "Distribute files",
    uploadFiles: "Upload files",
    folder: "Folder",
  },
  es: {
    documents: "Documentos",
    library: "Biblioteca",
    templates: "Plantillas",
    trash: "Papelera",
    distributeFiles: "Distribuir archivos",
    uploadFiles: "Subir archivos",
    folder: "Carpeta",
  },
} as const

/**
 * Route-aware header living in the LAYOUT so it persists across navigation.
 *
 * - List views (Library root / Templates / Trash) show the Library / Templates
 *   / Trash tabs.
 * - Inside a folder the tabs disappear and we show a resource header instead:
 *   a breadcrumb (Documents › Library › folder) plus the folder name as the
 *   page title with an Upload action.
 */
export function DocumentsHeader() {
  const { findNode } = useDocumentsState()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const locale = useLocale()
  const t = STR[locale]
  const module = {
    id: "documents" as const,
    name: t.documents,
    href: "/p/home?view=documents",
  }

  // Distribute files ("Send in bulk"): breadcrumb only, NO tabs.
  if (pathname.startsWith("/p/documents/library/distribute")) {
    return (
      <PageHeader
        module={module}
        breadcrumbs={[
          { id: "library", label: t.library, href: "/p/home?view=documents" },
          { id: "distribute", label: t.distributeFiles },
        ]}
        actions={[]}
      />
    )
  }

  // Inside a folder: resource header (breadcrumb + title), NO tabs.
  const folderMatch = pathname.match(/^\/p\/documents\/library\/([^/]+)/)
  if (folderMatch) {
    const folder = findNode(folderMatch[1])
    const folderName = folder ? nodeName(folder, locale) : t.folder
    return (
      <>
        <PageHeader
          module={module}
          breadcrumbs={[
            { id: "library", label: t.library, href: "/p/home?view=documents" },
            { id: folderMatch[1], label: folderName },
          ]}
          actions={[]}
        />
        <F0Box
          display="flex"
          width="full"
          alignItems="center"
          justifyContent="between"
          padding="lg"
        >
          <F0Heading content={folderName} variant="heading-large" as="h1" />
          <F0Box display="flex" alignItems="center" gap="sm">
            <F0Button
              label={t.distributeFiles}
              icon={Share}
              variant="outline"
              onClick={() => navigate("/p/documents/library/distribute")}
            />
            <F0Button
              label={t.uploadFiles}
              icon={Upload}
              variant="default"
              onClick={() => {}}
            />
          </F0Box>
        </F0Box>
      </>
    )
  }

  // List views (Library / Templates / Trash): breadcrumb + the section's own
  // tabs. Documents is short enough (3) to get no sidebar panel under the
  // double-menu rule, so `SectionTabs` surfaces the siblings here. The two
  // drill-downs above return before this and stay tab-less on purpose.
  // Upload / Distribute actions live in the collection toolbar
  // (useLibrarySource).
  return (
    <>
      <SectionHeader />
      <SectionTabs />
    </>
  )
}
