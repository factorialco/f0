import { TrainingLiveSessionsInstructorExperience } from "../training-live-session-participant/TrainingLiveSessionParticipant"
import type { PrototypeMeta } from "../types"

export const meta: PrototypeMeta = {
  slug: "training-live-session-instructor",
  title: "Training Live Session Instructor",
  description:
    "Instructor role variation for Training live sessions, sharing the same Trainings flow with instructor-only call controls.",
  category: "Talent",
  module: "trainings",
  audience: ["admin"],
  tags: ["training", "live-sessions", "instructor"],
  createdAt: "2026-05-28",
}

export default function TrainingLiveSessionInstructor() {
  return <TrainingLiveSessionsInstructorExperience />
}
