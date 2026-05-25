import { Page, PageHeader } from "@factorialco/f0-react/dist/experimental"

export function EmployeesPage() {
  return (
    <Page
      header={
        <PageHeader
          module={{ id: "documents", name: "Employees", href: "/p/factorial-it/employees" }}
          actions={[]}
        />
      }
    />
  )
}
