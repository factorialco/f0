import { OneEmptyState } from "@factorialco/f0-react"

/** Keep unsupported destinations honest while exercising the shared navigation. */
export function ModuleScreen({ title }: { title: string }) {
  return (
    <div className="flex w-full flex-1 flex-col p-6">
      <OneEmptyState
        title={title}
        description="This section has no sample content in this prototype yet. You can start a conversation from the bar below."
      />
    </div>
  )
}
