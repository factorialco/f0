import { Meta, StoryObj } from "@storybook/react-vite"
import { expect, fn, screen, userEvent, waitFor } from "storybook/test"

import { CrossedCircle, EyeVisible } from "@/icons/app"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"
import { ActionDefinition } from "@/patterns/OneDataCollection/item-actions"
import { OneDataCollection } from "@/patterns/OneDataCollection"

import {
  createDataAdapter,
  ExampleComponent,
  generateMockUsers,
  getMockVisualizations,
  mockUsers,
} from "../../mockData"

type SignatureDocument = {
  id: string
  file: {
    name: string
    type: string
  }
  signers: {
    firstName: string
    lastName: string
    src?: string
  }[]
  status: "pending" | "signed"
}

const signatureDocuments: SignatureDocument[] = [
  {
    id: "signature-request-1",
    file: {
      name: "Employment contract.pdf",
      type: "application/pdf",
    },
    signers: [
      { firstName: "Alicia", lastName: "Keys", src: "/avatars/person01.jpg" },
      {
        firstName: "Saul",
        lastName: "Dominguez",
        src: "/avatars/person03.jpg",
      },
    ],
    status: "pending",
  },
  {
    id: "signature-request-2",
    file: {
      name: "NDA agreement.pdf",
      type: "application/pdf",
    },
    signers: [
      { firstName: "Maria", lastName: "Lopez", src: "/avatars/person02.jpg" },
      { firstName: "Dani", lastName: "Moreno", src: "/avatars/person05.jpg" },
      { firstName: "Alex", lastName: "Garcia", src: "/avatars/person06.jpg" },
    ],
    status: "signed",
  },
  {
    id: "signature-request-3",
    file: {
      name: "Remote work policy.pdf",
      type: "application/pdf",
    },
    signers: [
      {
        firstName: "Julia",
        lastName: "Martinez",
        src: "/avatars/person07.jpg",
      },
    ],
    status: "pending",
  },
]

const onPreviewDocument = fn()
const onCancelRequest = fn()

const SignatureDocumentsExample = ({
  onPreviewDocument,
  onCancelRequest,
}: {
  onPreviewDocument: (document: SignatureDocument) => void
  onCancelRequest: (document: SignatureDocument) => void
}) => {
  const source = useDataCollectionSource({
    dataAdapter: {
      fetchData: () => Promise.resolve({ records: signatureDocuments }),
    },
    itemActions: (document) => {
      const actions: ActionDefinition[] = [
        {
          label: "Preview document",
          icon: EyeVisible,
          onClick: () => onPreviewDocument(document),
          type: "primary",
          hideLabel: true,
        },
      ]

      if (document.status === "pending") {
        actions.push({
          label: "Cancel request",
          icon: CrossedCircle,
          onClick: () => onCancelRequest(document),
          critical: true,
          type: "secondary",
        })
      }

      return actions
    },
  })

  return (
    <OneDataCollection
      source={source}
      visualizations={[
        {
          type: "list",
          options: {
            itemDefinition: (document) => ({
              title: document.file.name,
              avatar: {
                type: "file",
                file: document.file,
              },
            }),
            fields: [
              {
                label: "Signers",
                render: (document) => ({
                  type: "avatarList",
                  value: {
                    max: 3,
                    avatarList: document.signers.map((signer) => ({
                      type: "person",
                      firstName: signer.firstName,
                      lastName: signer.lastName,
                      src: signer.src,
                    })),
                  },
                }),
              },
              {
                label: "Status",
                render: (document) => ({
                  type: "status",
                  value: {
                    status:
                      document.status === "signed" ? "positive" : "warning",
                    label: document.status === "signed" ? "Signed" : "Pending",
                  },
                }),
              },
            ],
          },
        },
      ]}
    />
  )
}

const meta = {
  title: "Data Collection/Visualizations/List",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "List view specific visualization. Displays a list of items with a checkbox column and a list of properties.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BasicListVisualization: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return <ExampleComponent visualizations={[mockVisualizations.list]} />
  },
}

export const ListVisualizationWithGrouping: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return (
      <ExampleComponent
        visualizations={[mockVisualizations.list]}
        grouping={{
          collapsible: true,
          mandatory: true,
          groupBy: {
            department: {
              name: "Department",
              label: (groupId) => groupId,
              itemCount: async (groupId) => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                return mockUsers.filter((user) => user.department === groupId)
                  .length
              },
            },
          },
        }}
      />
    )
  },
}

export const ListVisualizationWithGroupingAndAllGroupsOpenByDefault: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return (
      <ExampleComponent
        visualizations={[mockVisualizations.list]}
        grouping={{
          collapsible: true,
          mandatory: true,
          defaultOpenGroups: true,
          groupBy: {
            department: {
              name: "Department",
              label: (groupId) => groupId,
              itemCount: async (groupId) => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                return mockUsers.filter((user) => user.department === groupId)
                  .length
              },
            },
          },
        }}
      />
    )
  },
}

export const ListVisualizationWithInfiniteScrollPagination: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return (
      <ExampleComponent
        visualizations={[mockVisualizations.list]}
        dataAdapter={createDataAdapter({
          data: generateMockUsers(100),
          paginationType: "infinite-scroll",
        })}
        totalItemSummary={(totalItems) => `Total items: ${totalItems}`}
        fullHeight
      />
    )
  },
}

export const ListVisualizationWithRegularPagination: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return (
      <ExampleComponent
        visualizations={[mockVisualizations.list]}
        dataAdapter={createDataAdapter({
          data: generateMockUsers(100),
          paginationType: "pages",
        })}
        totalItemSummary={(totalItems) => `Total items: ${totalItems}`}
        fullHeight
      />
    )
  },
}

export const SignatureDocuments: Story = {
  render: () => (
    <SignatureDocumentsExample
      onPreviewDocument={onPreviewDocument}
      onCancelRequest={onCancelRequest}
    />
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Employment contract.pdf")).toBeVisible()
    await expect(canvas.getByText("NDA agreement.pdf")).toBeVisible()
    await expect(canvas.getAllByText("Pending")[0]).toBeVisible()
    await expect(canvas.getByText("Signed")).toBeVisible()

    onPreviewDocument.mockClear()
    onCancelRequest.mockClear()

    await userEvent.click(
      canvas.getAllByRole("button", { name: "Preview document" })[0]
    )
    await expect(onPreviewDocument).toHaveBeenCalledWith(
      expect.objectContaining({ id: signatureDocuments[0].id })
    )

    await userEvent.click(canvas.getAllByRole("button", { name: "Actions" })[0])
    await userEvent.click(
      await screen.findByRole("menuitem", { name: "Cancel request" })
    )
    await waitFor(() => {
      expect(onCancelRequest).toHaveBeenCalledWith(
        expect.objectContaining({ id: signatureDocuments[0].id })
      )
    })
  },
}
