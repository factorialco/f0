import { DistributeBody } from "./pages/DistributeBody"
import { DocumentsLayout } from "./pages/DocumentsLayout"
import { LibraryBody } from "./pages/LibraryBody"
import { TemplatesBody } from "./pages/TemplatesBody"
import { TrashBody } from "./pages/TrashBody"

export const meta = {
  slug: "documents",
  title: "Documents",
  description:
    "Document library with Library / Templates / Trash tabs, a folder-and-file OneDataCollection, section chips (All / Personal / Company), a Public / Private visibility filter for company documents, folder drill-in, and working move-to-trash / restore.",
  category: "Documents",
  module: "documents",
  audience: ["admin", "employee"],
  tags: ["documents", "files", "folders"],
  createdAt: "2026-06-24",
}

export const routes = [
  {
    element: <DocumentsLayout />,
    handle: { crumb: meta.title },
    children: [
      { index: true, element: <LibraryBody />, handle: { crumb: "Library" } },
      {
        path: "library/distribute",
        element: <DistributeBody />,
        handle: { crumb: "Distribute files" },
      },
      {
        path: "library/:folderId",
        element: <LibraryBody />,
        handle: { crumb: "Folder" },
      },
      {
        path: "templates",
        element: <TemplatesBody />,
        handle: { crumb: "Templates" },
      },
      { path: "trash", element: <TrashBody />, handle: { crumb: "Trash" } },
    ],
  },
]
