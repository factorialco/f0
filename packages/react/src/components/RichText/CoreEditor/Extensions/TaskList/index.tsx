import TaskList from "@tiptap/extension-task-list"

export const TaskListExtension = TaskList.configure({
  HTMLAttributes: {
    class: "f1-task-list",
  },
})
