import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { useCallback, useMemo } from "react"

import { useNavConfig } from "@/prototypes/home/hub/reference/lib/navConfig"
import { useNavigate } from "@/prototypes/home/hub/reference/router"

import { useCoursesSource } from "../hooks/useCoursesSource"
import { courseColumns } from "../lib/courseColumns"
import { courses } from "../mocks/courses"

/**
 * Body of the Courses tab (the page shell + tabs live in TrainingLayout). The
 * "All" / "My courses" views are the source's presets; the table defaults to
 * "All" (see useCoursesSource), matching the reference screen.
 */
export function CoursesBody() {
  const navigate = useNavigate()
  const onCreateCourse = useCallback(() => {}, [])
  const onOpenCourse = useCallback(
    (id: string) => navigate(`/p/training/${id}`),
    [navigate]
  )
  const isEmployee = useNavConfig().config.role === "employee"
  const source = useCoursesSource(
    courses,
    onCreateCourse,
    onOpenCourse,
    isEmployee
  )
  const columns = useMemo(() => courseColumns(), [])

  return (
    <OneDataCollection
      source={source}
      visualizations={[{ type: "table", options: { columns } }]}
    />
  )
}
