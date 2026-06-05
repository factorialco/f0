/**
 * Mercer level analysis — clickable prototype.
 *
 * Flow (fully scripted, no real model):
 *   1. Job-catalog org chart (ReactFlow). Click a role → it's selected and its
 *      detail drawer opens on the right. No navigation — you stay in the catalog.
 *   2. The drawer's Salaries section has an "Analyze" button.
 *   3. Analyze → the "Ask / Create with One" panel opens on the right and
 *      auto-sends a fixed request, streams its reasoning, then replies with a
 *      report card.
 *   4. The report card → opens the report modal (chart + table) over the canvas.
 *   5. Closing the report returns to the catalog with the chat still open.
 *
 * The analysis is scoped to the single role the button lives in.
 */
import { useCallback, useEffect, useRef, useState } from "react"
import { StandardLayout } from "@factorialco/f0-react"
import { Page, PageHeader } from "@factorialco/f0-react/dist/experimental"
import { Ai } from "@factorialco/f0-react/icons/app"
import { useSearchParams } from "react-router-dom"

import type { PrototypeMeta } from "../types"
import {
  buildChatScript,
  followUpScript,
  getRoleAnalysis,
} from "./shared/analysisData"
import {
  AnalysisChatPanel,
  type ChatMessage,
} from "./components/AnalysisChatPanel"
import { CatalogChart } from "./components/CatalogChart"
import { ReportModal } from "./components/ReportModal"
import { RoleDetailDrawer } from "./components/RoleDetailDrawer"

export const meta: PrototypeMeta = {
  slug: "mercer-level-analysis",
  title: "Mercer Level Analysis",
  description:
    "Pick a role in the job-catalog org chart and trigger an AI analysis of its levels against Mercer benchmark data: a scripted chat returns a report card that opens a full salary-distribution report.",
  category: "Payroll",
  module: "payroll-settings",
  audience: ["admin"],
  tags: ["compensation", "mercer", "benchmark", "salary", "ai", "analysis"],
  createdAt: "2026-06-04",
}

/** "Thought for Ns" duration for a given set of reasoning steps. */
function secondsFor(thoughts: string[]): number {
  return Math.round(((thoughts.length + 1) * followUpScript.thoughtStepMs) / 1000)
}

export default function MercerLevelAnalysis() {
  const [searchParams, setSearchParams] = useSearchParams()

  // Selected role + level drive the chart highlight and the drawer.
  const roleId = searchParams.get("role") ?? "swe"
  const analysis = getRoleAnalysis(roleId)
  const levelParam = searchParams.get("level")
  const selectedLevel =
    levelParam && analysis.levelIds.includes(levelParam)
      ? levelParam
      : analysis.levelIds[0]
  const detail = analysis.levelDetails[selectedLevel]

  const selectRole = useCallback(
    (id: string) => setSearchParams({ role: id }),
    [setSearchParams]
  )
  const selectLevel = useCallback(
    (level: string) => {
      const next = new URLSearchParams(searchParams)
      next.set("level", level)
      setSearchParams(next)
    },
    [searchParams, setSearchParams]
  )

  // Chat + report are transient interaction state layered over the canvas.
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [thinking, setThinking] = useState(false)
  const [liveThoughts, setLiveThoughts] = useState<string[]>([])
  const [revealedThoughts, setRevealedThoughts] = useState(0)
  const [reportOpen, setReportOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  // Follow-up conversation state.
  const [firstReportDone, setFirstReportDone] = useState(false)
  const [followUpStage, setFollowUpStage] = useState(0)
  const [draft, setDraft] = useState("")
  // The role the chat/report reflect — frozen at Analyze time so browsing the
  // chart afterwards doesn't desync the conversation.
  const [analyzedRoleId, setAnalyzedRoleId] = useState(roleId)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  useEffect(() => clearTimers, [clearTimers])

  const analyzed = getRoleAnalysis(analyzedRoleId)

  // Stream a reasoning trace step-by-step, then run onDone.
  const streamThoughts = useCallback(
    (thoughts: string[], onDone: () => void) => {
      setLiveThoughts(thoughts)
      setThinking(true)
      setRevealedThoughts(0)
      const step = followUpScript.thoughtStepMs
      const reveal = (i: number) => {
        setRevealedThoughts(i)
        if (i < thoughts.length) {
          timersRef.current.push(setTimeout(() => reveal(i + 1), step))
        } else {
          timersRef.current.push(
            setTimeout(() => {
              setThinking(false)
              onDone()
            }, step)
          )
        }
      }
      timersRef.current.push(setTimeout(() => reveal(1), step))
    },
    []
  )

  // Run (or replay) the fixed script for the currently selected role.
  const runAnalysis = useCallback(() => {
    clearTimers()
    const target = getRoleAnalysis(roleId)
    const targetScript = buildChatScript(target.role, target.rows)
    setAnalyzedRoleId(roleId)
    setChatOpen(true)
    setReportOpen(false)
    setFirstReportDone(false)
    setFollowUpStage(0)
    setDraft("")
    setMessages([
      { role: "user", type: "text", content: targetScript.userMessage },
    ])
    streamThoughts(targetScript.thoughts, () => {
      setFirstReportDone(true)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          type: "thinking",
          content: "",
          thoughts: targetScript.thoughts,
          thinkingSeconds: targetScript.thinkingSeconds,
        },
        {
          role: "assistant",
          type: "text",
          content: targetScript.assistantReply,
        },
        {
          role: "assistant",
          type: "report-card",
          content: "",
          roleId: target.role.id,
        },
      ])
    })
  }, [clearTimers, roleId, streamThoughts])

  // Click-to-autofill the next scripted follow-up message.
  const fillDraft = useCallback(() => {
    setDraft(
      followUpStage === 0
        ? followUpScript.prompts.ask
        : followUpScript.prompts.reject
    )
  }, [followUpStage])

  // Send the follow-up: stage 0 → search + low-confidence clarifying question
  // (3 competing options); stage 1 → resolve the real role + a second report.
  const sendFollowUp = useCallback(() => {
    if (!draft) return
    const stage = followUpStage
    const text = draft
    clearTimers()
    setMessages((prev) => [...prev, { role: "user", type: "text", content: text }])
    setDraft("")
    if (stage === 0) {
      streamThoughts(followUpScript.thoughtsAsk, () => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            type: "thinking",
            content: "",
            thoughts: followUpScript.thoughtsAsk,
            thinkingSeconds: secondsFor(followUpScript.thoughtsAsk),
          },
          { role: "assistant", type: "text", content: followUpScript.clarify },
        ])
        setFollowUpStage(1)
      })
    } else {
      streamThoughts(followUpScript.thoughtsResolve, () => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            type: "thinking",
            content: "",
            thoughts: followUpScript.thoughtsResolve,
            thinkingSeconds: secondsFor(followUpScript.thoughtsResolve),
          },
          { role: "assistant", type: "text", content: followUpScript.answer },
          {
            role: "assistant",
            type: "report-card",
            content: "",
            roleId: followUpScript.resolvedRoleId,
          },
        ])
        setFollowUpStage(2)
      })
    }
  }, [draft, followUpStage, clearTimers, streamThoughts])

  const openReport = useCallback((id: string) => {
    setAnalyzedRoleId(id)
    setReportOpen(true)
  }, [])

  const closeChat = useCallback(() => {
    clearTimers()
    setChatOpen(false)
    setThinking(false)
    setLiveThoughts([])
    setRevealedThoughts(0)
    setMessages([])
    setFirstReportDone(false)
    setFollowUpStage(0)
    setDraft("")
  }, [clearTimers])

  return (
    <>
      <Page
        header={
          <PageHeader
            module={{
              id: "compensations",
              name: "Mercer Salary Benchmark",
              href: "/p/mercer-level-analysis",
            }}
            actions={[
              {
                label: "Ask or create with One",
                icon: Ai,
                onClick: () => setChatOpen((v) => !v),
              },
            ]}
          />
        }
      >
        <StandardLayout>
          <div
            className="w-full"
            style={{
              paddingRight: chatOpen ? 412 : 0,
              transition: "padding-right 200ms ease",
            }}
          >
            <CatalogChart
              selectedRoleId={roleId}
              onSelectRole={(id) => {
                selectRole(id)
                setDrawerOpen(true)
              }}
            />
          </div>
        </StandardLayout>
      </Page>

      {/* Role detail — opens as a right-side overlay dialog on node click */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-f1-background-overlay"
            onClick={() => setDrawerOpen(false)}
            aria-hidden
          />
          <div className="fixed right-0 top-0 z-50 h-full p-3">
            <RoleDetailDrawer
              role={analysis.role}
              detail={detail}
              levelIds={analysis.levelIds}
              selectedLevel={selectedLevel}
              onSelectLevel={selectLevel}
              onAnalyze={() => {
                setDrawerOpen(false)
                runAnalysis()
              }}
            />
          </div>
        </>
      )}

      {chatOpen && (
        <AnalysisChatPanel
          messages={messages}
          thinking={thinking}
          liveThoughts={liveThoughts}
          revealedThoughts={revealedThoughts}
          inputEnabled={firstReportDone}
          canFill={firstReportDone && followUpStage < 2 && !thinking}
          draft={draft}
          onFillDraft={fillDraft}
          onSend={sendFollowUp}
          onOpenReport={openReport}
          onClose={closeChat}
        />
      )}

      <ReportModal
        isOpen={reportOpen}
        onClose={() => setReportOpen(false)}
        analysis={analyzed}
      />
    </>
  )
}
