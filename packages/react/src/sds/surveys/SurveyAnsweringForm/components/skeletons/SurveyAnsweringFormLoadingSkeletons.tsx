import type { ReactNode } from "react"

import { Skeleton } from "@/ui/skeleton"

function SkeletonQuestionCard({
  titleWidth,
  descriptionWidth,
  answer,
}: {
  titleWidth: string
  descriptionWidth?: string
  answer: ReactNode
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-4">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-5 rounded-sm" style={{ width: titleWidth }} />
        {descriptionWidth && (
          <Skeleton
            className="h-4 rounded-sm"
            style={{ width: descriptionWidth }}
          />
        )}
      </div>
      {answer}
    </div>
  )
}

const inputSkeleton = <Skeleton className="h-10 w-full rounded-sm" />
const textAreaSkeleton = <Skeleton className="h-24 w-full rounded-sm" />
const dateSkeleton = <Skeleton className="h-10 w-56 max-w-full rounded-sm" />

function RatingSkeleton() {
  return (
    <div className="grid grid-cols-5 gap-2 sm:max-w-80">
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={index} className="h-9 rounded-sm" />
      ))}
    </div>
  )
}

function SelectOptionsSkeleton({ count }: { count: number }) {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          className="h-7 w-56 max-w-full rounded-sm"
          style={{ width: `${Math.max(52, 76 - index * 7)}%` }}
        />
      ))}
    </div>
  )
}

function MultiSelectChipsSkeleton() {
  return (
    <div className="flex flex-wrap gap-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton
          key={index}
          className="h-8 rounded-sm"
          style={{ width: `${18 + index * 3}%` }}
        />
      ))}
    </div>
  )
}

export function SurveyAllQuestionsLoadingSkeleton() {
  return (
    <div
      className="flex w-full flex-col gap-10"
      data-testid="survey-answering-form-loading-all-questions"
      aria-busy="true"
      aria-live="polite"
    >
      {[0, 1].map((sectionIndex) => (
        <div key={sectionIndex} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 px-5">
            <Skeleton className="h-6 w-56 rounded-sm" />
            <Skeleton className="h-4 w-80 max-w-full rounded-sm" />
          </div>
          <div className="flex flex-col gap-4">
            {sectionIndex === 0 ? (
              <>
                <SkeletonQuestionCard
                  titleWidth="65%"
                  descriptionWidth="42%"
                  answer={inputSkeleton}
                />
                <SkeletonQuestionCard
                  titleWidth="70%"
                  descriptionWidth="55%"
                  answer={textAreaSkeleton}
                />
                <SkeletonQuestionCard
                  titleWidth="58%"
                  descriptionWidth="38%"
                  answer={<RatingSkeleton />}
                />
                <SkeletonQuestionCard
                  titleWidth="62%"
                  descriptionWidth="46%"
                  answer={<SelectOptionsSkeleton count={4} />}
                />
                <SkeletonQuestionCard
                  titleWidth="54%"
                  descriptionWidth="44%"
                  answer={inputSkeleton}
                />
              </>
            ) : (
              <>
                <SkeletonQuestionCard
                  titleWidth="60%"
                  descriptionWidth="50%"
                  answer={dateSkeleton}
                />
                <SkeletonQuestionCard
                  titleWidth="66%"
                  descriptionWidth="45%"
                  answer={inputSkeleton}
                />
                <SkeletonQuestionCard
                  titleWidth="57%"
                  descriptionWidth="48%"
                  answer={<MultiSelectChipsSkeleton />}
                />
                <SkeletonQuestionCard
                  titleWidth="64%"
                  descriptionWidth="36%"
                  answer={<SelectOptionsSkeleton count={3} />}
                />
                <SkeletonQuestionCard
                  titleWidth="52%"
                  descriptionWidth="40%"
                  answer={textAreaSkeleton}
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export function SurveySteppedLoadingSkeleton() {
  return (
    <div
      className="flex w-full flex-col gap-6"
      data-testid="survey-answering-form-loading-stepped"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex flex-col gap-2 px-5">
        <Skeleton className="h-6 w-52 rounded-sm" />
        <Skeleton className="h-4 w-72 max-w-full rounded-sm" />
      </div>
      <SkeletonQuestionCard
        titleWidth="74%"
        descriptionWidth="50%"
        answer={inputSkeleton}
      />
    </div>
  )
}
