export type MockTask = {
  id: string
  title: string
  description: string
  assignee: string
  priority: string
  dueDate: string
  tags: string[]
}

export const mockTasks: MockTask[] = [
  {
    id: "task-1",
    title: "Design new landing page",
    description: "Create wireframes and mockups for the new marketing website",
    assignee: "Sarah Chen",
    priority: "High",
    dueDate: "2024-01-15",
    tags: ["Design", "Marketing"],
  },
  {
    id: "task-2",
    title: "API Integration",
    description: "Implement REST API endpoints for user management",
    assignee: "Alex Rivera",
    priority: "Medium",
    dueDate: "2024-01-20",
    tags: ["Backend", "API"],
  },
  {
    id: "task-3",
    title: "Database Migration",
    description: "Migrate user data from old system to new PostgreSQL database",
    assignee: "Daniel Moreno",
    priority: "Critical",
    dueDate: "2024-01-10",
    tags: ["Database", "Migration"],
  },
]

export const additionalMockTasks: MockTask[] = [
  {
    id: "task-4",
    title: "Code Review Process",
    description: "Establish standardized code review practices and guidelines",
    assignee: "Emma Thompson",
    priority: "Medium",
    dueDate: "2024-01-25",
    tags: ["Process", "Quality"],
  },
  {
    id: "task-5",
    title: "Performance Optimization",
    description: "Optimize application performance and loading times",
    assignee: "Michael Johnson",
    priority: "High",
    dueDate: "2024-01-18",
    tags: ["Performance", "Frontend"],
  },
  {
    id: "task-6",
    title: "Security Audit",
    description: "Conduct comprehensive security audit of the application",
    assignee: "Lisa Wang",
    priority: "Critical",
    dueDate: "2024-01-12",
    tags: ["Security", "Audit"],
  },
  {
    id: "task-7",
    title: "Documentation Update",
    description: "Update technical documentation and API references",
    assignee: "Robert Garcia",
    priority: "Low",
    dueDate: "2024-01-30",
    tags: ["Documentation", "API"],
  },
  {
    id: "task-8",
    title: "Testing Framework",
    description: "Implement automated testing framework for regression tests",
    assignee: "Jennifer Lee",
    priority: "Medium",
    dueDate: "2024-01-22",
    tags: ["Testing", "Automation"],
  },
]

export const allMockTasks = [...mockTasks, ...additionalMockTasks]
