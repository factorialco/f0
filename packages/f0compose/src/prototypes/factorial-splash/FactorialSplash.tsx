import { useState, useEffect, useRef, useCallback } from "react";
import { ClockInControls } from "@factorialco/f0-react/dist/experimental";
import {
  Home as HomeIcon,
  Office as OfficeIcon,
  Suitcase as SuitcaseIcon,
  Coffee,
  Moon,
  Heart,
  Phone,
  BookOpen,
  Star,
  ArrowCycle,
  Clock,
  Sparkles,
  PauseCircle,
  Person,
  Globe,
} from "@factorialco/f0-react/icons/app";
import { F0Icon } from "@factorialco/f0-react";
import type { IconType } from "@factorialco/f0-react";
import type { PrototypeMeta } from "../types";

export const meta: PrototypeMeta = {
  slug: "factorial-splash",
  title: "Factorial Splash",
  description:
    "Employee clock-in kiosk — ID entry, success modal, and clocked-in widget.",
  category: "Other",
  module: "home",
  audience: ["admin", "employee"],
  tags: ["splash", "brand", "clock-in", "kiosk"],
  createdAt: "2026-05-08",
  author: "f0compose",
};

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const PINK = "#FF2E63";
const NAVY = "#1E2235";
const MID_GRAY = "#6B7280";

const CLOCK_IN_LABELS = {
  clockedOut: "Clocked out",
  clockedIn: "Clocked in",
  onBreak: "On a break",
  clockIn: "Clock in",
  clockOut: "Clock out",
  break: "Break",
  resume: "Resume",
  remainingTime: "Remaining time",
  overtime: "Overtime",
  selectLocation: "Select location",
  selectProject: "Select project",
  paid: "Paid",
  unpaid: "Unpaid",
};

const LOCATIONS = [
  { id: "1", name: "Home", icon: HomeIcon },
  { id: "2", name: "Business Trip", icon: SuitcaseIcon },
  { id: "3", name: "Office", icon: OfficeIcon },
];

// All valid employees in the system
const VALID_EMPLOYEES: Record<string, string> = {
  "1234": "Hellen Mayer",
  "5678": "Carlos Romero",
  "0001": "Sophie Chen",
  "2222": "Alex Torres",
  "3333": "Maria Kovač",
  "4444": "James Osei",
};

// Break types data
const BREAK_TYPES: {
  id: string;
  icon: IconType;
  name: string;
  description: string;
  paid: boolean;
}[] = [
  {
    id: "1",
    icon: Coffee,
    name: "Coffee Break",
    description: "Unpaid break",
    paid: false,
  },
  {
    id: "2",
    icon: Star,
    name: "Lunch Break",
    description: "Paid break",
    paid: true,
  },
  {
    id: "3",
    icon: PauseCircle,
    name: "Short Break",
    description: "Unpaid break",
    paid: false,
  },
  {
    id: "4",
    icon: Heart,
    name: "Medical Break",
    description: "Paid break",
    paid: true,
  },
  {
    id: "5",
    icon: Sparkles,
    name: "Wellness Break",
    description: "Unpaid break",
    paid: false,
  },
  {
    id: "6",
    icon: Phone,
    name: "Personal Call",
    description: "Unpaid break",
    paid: false,
  },
  {
    id: "7",
    icon: Globe,
    name: "Errand Break",
    description: "Unpaid break",
    paid: false,
  },
  {
    id: "8",
    icon: Moon,
    name: "Snack Break",
    description: "Unpaid break",
    paid: false,
  },
  {
    id: "9",
    icon: ArrowCycle,
    name: "Rest Break",
    description: "Paid break",
    paid: true,
  },
  {
    id: "10",
    icon: BookOpen,
    name: "Training Break",
    description: "Paid break",
    paid: true,
  },
  {
    id: "11",
    icon: Person,
    name: "Exercise Break",
    description: "Unpaid break",
    paid: false,
  },
  {
    id: "12",
    icon: Clock,
    name: "Recharge Break",
    description: "Unpaid break",
    paid: false,
  },
];

// ---------------------------------------------------------------------------
// Small shared components
// ---------------------------------------------------------------------------

function FactorialWordmark() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56 56"
        style={{ height: 32, width: 32, fill: PINK }}
        aria-hidden="true"
      >
        <path d="M45.63 49.754A27.883 27.883 0 0128 56a27.883 27.883 0 01-17.63-6.246A27.883 27.883 0 0128 43.508c6.682 0 12.817 2.34 17.63 6.246z" />
        <path
          fillRule="evenodd"
          d="M10.216 42.995A23.169 23.169 0 014.738 28C4.738 15.153 15.153 4.738 28 4.738c12.847 0 23.261 10.415 23.261 23.262 0 5.714-2.06 10.946-5.477 14.995a33.689 33.689 0 013.375 2.41l.468.38A27.885 27.885 0 0056 28C56 12.536 43.464 0 28 0S0 12.536 0 28a27.885 27.885 0 006.373 17.785l.468-.38a33.69 33.69 0 013.375-2.41z"
          clipRule="evenodd"
        />
        <path d="M38.339 27.139c0 5.71-4.63 10.338-10.339 10.338-5.71 0-10.338-4.629-10.338-10.338C17.662 21.428 22.29 16.8 28 16.8c5.71 0 10.339 4.629 10.339 10.338z" />
      </svg>
      <span
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: PINK,
          letterSpacing: "-0.5px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        factorial
      </span>
    </div>
  );
}

function UserSearchIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke={PINK}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 014-4h4" />
      <circle cx="17" cy="17" r="3" />
      <path d="m21 21-1.5-1.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6B7280"
      strokeWidth="2.2"
      strokeLinecap="round"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "#F3F4F6",
        borderRadius: 16,
        padding: "12px 20px",
        flex: 1,
      }}
    >
      <div>
        <div
          style={{
            fontSize: 11,
            color: MID_GRAY,
            fontWeight: 500,
            marginBottom: 1,
          }}
        >
          {label}
        </div>
        <div style={{ fontSize: 13, color: NAVY, fontWeight: 600 }}>
          {value}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page layout wrapper (shared outer chrome)
// ---------------------------------------------------------------------------
function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#FFFAF5",
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 12,
          borderRadius: 24,
          border: "1px solid rgba(0,0,0,0.12)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)",
          overflow: "hidden",
          background: `
            radial-gradient(ellipse 70% 60% at 0% 100%, #FFE8D620 0%, transparent 65%),
            radial-gradient(ellipse 60% 50% at 100% 0%, #FFD6E840 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 100% 100%, #F5E6FF18 0%, transparent 55%),
            #FFFAF5
          `,
        }}
      >
        {/* Logo */}
        <div style={{ position: "absolute", top: 40, left: 40 }}>
          <FactorialWordmark />
        </div>

        {/* Center content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// White centered card wrapper
// ---------------------------------------------------------------------------
function CenterCard({
  width = 540,
  children,
}: {
  width?: number;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 24,
        width,
        padding: 40,
        boxShadow: "0 4px 32px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page 1 — ID entry
// ---------------------------------------------------------------------------
function EntryPage({ onSubmit }: { onSubmit: (id: string) => void }) {
  const [employeeId, setEmployeeId] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [hasError, setHasError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const id = employeeId.trim();
    if (!id) return;
    if (!VALID_EMPLOYEES[id]) {
      setHasError(true);
      return;
    }
    setHasError(false);
    onSubmit(id);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmployeeId(e.target.value);
    if (hasError) setHasError(false);
  }

  const borderColor = hasError
    ? "#DC2626"
    : inputFocused
      ? "#0CA0AB"
      : "rgba(5,38,87,0.18)";
  const boxShadow = hasError
    ? "0 0 0 3px rgba(220,38,38,0.12)"
    : inputFocused
      ? "0 0 0 3px rgba(12,160,171,0.15)"
      : "none";

  return (
    <CenterCard>
      {/* Icon */}
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 18,
          border: "1.5px solid #E5E7EB",
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 28,
        }}
      >
        <UserSearchIcon />
      </div>

      {/* Heading */}
      <div
        style={{
          fontSize: 38,
          fontWeight: 600,
          color: NAVY,
          lineHeight: 1.15,
          marginBottom: 12,
        }}
      >
        Welcome to Factorial
      </div>

      {/* Subheading */}
      <div
        style={{
          fontSize: 16,
          color: MID_GRAY,
          marginBottom: 32,
          lineHeight: 1.5,
        }}
      >
        Enter your ID number
      </div>

      {/* Input + inline error */}
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label
            htmlFor="employeeId"
            style={{ fontSize: 14, fontWeight: 500, color: NAVY }}
          >
            Employee ID
          </label>
          <input
            id="employeeId"
            name="employeeId"
            type="text"
            placeholder="e.g. 1234"
            value={employeeId}
            onChange={handleChange}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            style={{
              width: "100%",
              height: 48,
              padding: "0 16px",
              fontSize: 16,
              borderRadius: 10,
              border: `1.5px solid ${borderColor}`,
              outline: "none",
              boxShadow,
              color: NAVY,
              background: "#fff",
              boxSizing: "border-box",
              transition: "border-color 0.15s, box-shadow 0.15s",
            }}
          />
          {hasError && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginTop: 8,
              }}
            >
              {/* Warning circle icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                style={{ flexShrink: 0 }}
              >
                <circle cx="8" cy="8" r="7.5" stroke="#E53E3E" />
                <rect
                  x="7.25"
                  y="4"
                  width="1.5"
                  height="5"
                  rx="0.75"
                  fill="#E53E3E"
                />
                <circle cx="8" cy="11.5" r="0.75" fill="#E53E3E" />
              </svg>
              <span style={{ fontSize: 13, color: "#E53E3E" }}>
                Enter a valid ID number
              </span>
            </div>
          )}
        </div>
        <button type="submit" style={{ display: "none" }} />
      </form>

      {/* Info pills */}
      <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
        <InfoPill label="Workplace" value="DHL Distribution" />
        <InfoPill label="Workarea" value="Llacuna 1C" />
      </div>
    </CenterCard>
  );
}

// ---------------------------------------------------------------------------
// Success modal (new clock-in)
// ---------------------------------------------------------------------------
function SuccessModal({
  onClose,
  title = "Clocked in",
  employeeName = "Hellen Howard",
}: {
  onClose: () => void;
  title?: string;
  employeeName?: string;
}) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  // Format current time as "09:32 AM"
  const timeLabel = new Date()
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase();

  useEffect(() => {
    const showT = setTimeout(() => setVisible(true), 10);
    const fadeT = setTimeout(() => setClosing(true), 2200);
    const closeT = setTimeout(() => onClose(), 2500);
    return () => {
      clearTimeout(showT);
      clearTimeout(fadeT);
      clearTimeout(closeT);
    };
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.25s ease",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 28,
          width: 460,
          padding: "36px 40px 44px",
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)",
          position: "relative",
          transform: visible ? "scale(1)" : "scale(0.96)",
          opacity: closing ? 0 : visible ? 1 : 0,
          transition:
            "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease",
        }}
      >
        {/* X close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 40,
            height: 40,
            border: "1.5px solid #E5E7EB",
            borderRadius: 12,
            background: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#F3F4F6";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#fff";
          }}
        >
          <XIcon />
        </button>

        {/* Circular avatar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 28,
          }}
        >
          <img
            src="/avatar-hellen.png"
            alt={employeeName}
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #F3F4F6",
            }}
          />
        </div>

        {/* Title: "Clocked in · 09:32 AM" */}
        <div
          style={{
            textAlign: "center",
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <span style={{ color: NAVY }}>{title}</span>
          <span style={{ color: NAVY, fontWeight: 400 }}>·</span>
          <span style={{ color: "#0CA0AB" }}>{timeLabel}</span>
        </div>

        {/* Employee name */}
        <div style={{ textAlign: "center", fontSize: 16, color: MID_GRAY }}>
          {employeeName}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page 3b — Break type selection
// ---------------------------------------------------------------------------
function BreakSelectPage({
  onSelect,
  onBack,
  sessionSeconds,
}: {
  onSelect: (id: string) => void;
  onBack: () => void;
  sessionSeconds: number;
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <CenterCard width={520}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <button
          onClick={onBack}
          style={{
            width: 34,
            height: 34,
            border: "1.5px solid #E5E7EB",
            borderRadius: 10,
            background: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 14,
            flexShrink: 0,
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#F3F4F6";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#fff";
          }}
        >
          {/* Back arrow */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <div style={{ fontSize: 20, fontWeight: 600, color: NAVY }}>
          Select a break type
        </div>
      </div>

      {/* Scrollable list */}
      <div
        style={{
          overflowY: "auto",
          maxHeight: 380,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {BREAK_TYPES.map((bt) => (
          <button
            key={bt.id}
            onClick={() => onSelect(bt.id)}
            onMouseEnter={() => setHovered(bt.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              height: 72,
              minHeight: 72,
              padding: "0 20px",
              border: `1.5px solid ${hovered === bt.id ? PINK : "rgba(5,38,87,0.06)"}`,
              borderRadius: 16,
              background: hovered === bt.id ? `${PINK}08` : "#ffffff",
              cursor: "pointer",
              textAlign: "left",
              transition: "border-color 0.15s, background 0.15s",
              flexShrink: 0,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {/* Icon container */}
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                border: "1.5px solid #E5E7EB",
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                color: NAVY,
              }}
            >
              <F0Icon icon={bt.icon} size="md" />
            </div>
            {/* Text */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: NAVY,
                  marginBottom: 2,
                }}
              >
                {bt.name}
              </div>
              <div style={{ fontSize: 13, color: MID_GRAY }}>
                {bt.description}
              </div>
            </div>
            {/* Paid badge */}
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: 999,
                background: bt.paid ? "#DCFCE7" : "#F3F4F6",
                color: bt.paid ? "#16A34A" : MID_GRAY,
                flexShrink: 0,
              }}
            >
              {bt.paid ? "Paid" : "Unpaid"}
            </div>
          </button>
        ))}
      </div>
      <SessionTopBar secondsLeft={sessionSeconds} />
    </CenterCard>
  );
}

// ---------------------------------------------------------------------------
// Page 3 — Already clocked-in widget
// ---------------------------------------------------------------------------
type ClockInState = "clocked-in" | "break";

function ClockedInPage({
  onDone,
  onSelectBreak,
  onClockOut,
  onBreakEnd,
  initialOnBreak = false,
  sessionSeconds,
}: {
  onDone: () => void;
  onSelectBreak: () => void;
  onClockOut: () => void;
  onBreakEnd: () => void;
  initialOnBreak?: boolean;
  sessionSeconds: number;
}) {
  const clockInTime = useRef(new Date(Date.now() - (4 * 60 + 21) * 60 * 1000));
  const [clockState, setClockState] = useState<ClockInState>(
    initialOnBreak ? "break" : "clocked-in",
  );
  const [trackedMinutes, setTrackedMinutes] = useState(4 * 60 + 21);
  const [locationId, setLocationId] = useState("3");
  const [breakStart, setBreakStart] = useState<Date | null>(
    initialOnBreak ? new Date(Date.now() - 34 * 1000) : null,
  );

  // Tick every minute to update tracked time
  useEffect(() => {
    const id = setInterval(() => {
      if (clockState === "clocked-in") {
        setTrackedMinutes((m) => m + 1);
      }
    }, 60_000);
    return () => clearInterval(id);
  }, [clockState]);

  const now = new Date();

  const data =
    clockState === "clocked-in"
      ? [{ from: clockInTime.current, to: now, variant: "clocked-in" as const }]
      : [
          {
            from: clockInTime.current,
            to: breakStart ?? now,
            variant: "clocked-in" as const,
          },
          { from: breakStart ?? now, to: now, variant: "break" as const },
        ];

  const handleClockOut = useCallback(() => {
    onClockOut();
  }, [onClockOut]);

  const handleBreak = useCallback(() => {
    if (clockState === "clocked-in") {
      onSelectBreak();
    }
  }, [clockState, onSelectBreak]);

  const handleResume = useCallback(() => {
    setBreakStart(null);
    setClockState("clocked-in");
    onBreakEnd();
  }, [onBreakEnd]);

  return (
    <CenterCard width={520}>
      {/* Employee header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 28,
          paddingBottom: 24,
          borderBottom: "1px solid #F3F4F6",
        }}
      >
        <div style={{ display: "inline-block" }}>
          <img
            src="/avatar-hellen.png"
            alt="Hellen Howard"
            style={{
              width: 52,
              height: 52,
            }}
          />
        </div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, color: NAVY }}>
            Hellen Howard
          </div>
          <div style={{ fontSize: 13, marginTop: 2 }}>
            <span style={{ color: "#0D1625" }}>DHL Distribution</span>
            <span style={{ color: "rgba(1,22,55,0.61)" }}> · Llacuna 1C</span>
          </div>
        </div>
        {/* Back / close */}
        <button
          onClick={onDone}
          style={{
            marginLeft: "auto",
            width: 34,
            height: 34,
            border: "1.5px solid #E5E7EB",
            borderRadius: 10,
            background: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.15s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#F3F4F6";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#fff";
          }}
          title="Back"
        >
          <XIcon />
        </button>
      </div>

      {/* The real ClockInControls widget — handles both clocked-in and break states */}
      <ClockInControls
        trackedMinutes={trackedMinutes}
        remainingMinutes={8 * 60 - trackedMinutes}
        data={data}
        labels={CLOCK_IN_LABELS}
        locations={LOCATIONS}
        locationId={locationId}
        onChangeLocationId={setLocationId}
        canShowProject={false}
        canShowLocation={false}
        onClockIn={clockState === "break" ? handleResume : () => {}}
        onClockOut={handleClockOut}
        onBreak={clockState === "break" ? handleResume : handleBreak}
      />
      <SessionTopBar secondsLeft={sessionSeconds} />
    </CenterCard>
  );
}

// ---------------------------------------------------------------------------
// Session timeout bar + warning overlay
// ---------------------------------------------------------------------------
const SESSION_TOTAL = 10; // seconds

function SessionTopBar({ secondsLeft }: { secondsLeft: number }) {
  const pct = (secondsLeft / SESSION_TOTAL) * 100;
  const isWarning = secondsLeft <= 3;
  const barColor = isWarning ? "#DC2626" : "#0CA0AB";
  const secs = secondsLeft % 60;
  const label = `0:${String(secs).padStart(2, "0")}`;

  return (
    <div
      style={{
        margin: "28px -40px -40px -40px",
        borderRadius: "0 0 24px 24px",
        overflow: "hidden",
        borderTop: "1px solid #F3F4F6",
      }}
    >
      {/* Label row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "8px 16px 10px",
          background: "#fff",
        }}
      >
        <span
          style={{
            fontSize: 12,
            color: isWarning ? "#DC2626" : MID_GRAY,
            fontWeight: isWarning ? 600 : 400,
            transition: "color 0.3s",
          }}
        >
          Returning to home screen in {label}
        </span>
      </div>
      {/* Bar track — flush at the very bottom */}
      <div style={{ position: "relative", background: "#E9EAEC", height: 5 }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            background: barColor,
            width: `${pct}%`,
            transition: "width 0.9s linear, background 0.3s",
          }}
        />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Root — orchestrates screens + session timeout
// ---------------------------------------------------------------------------
type Screen =
  | "entry"
  | "success-modal"
  | "clocked-in-widget"
  | "break-select"
  | "break-modal"
  | "break-finished-modal"
  | "clockout-modal";

export default function FactorialSplash() {
  const [screen, setScreen] = useState<Screen>("entry");
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [sessionClockedIn] = useState(() => new Set<string>());
  const [selectedBreakName, setSelectedBreakName] = useState("");
  const [employeeOnBreak, setEmployeeOnBreak] = useState(false);

  // Session timeout — only active on non-entry, non-modal screens
  const [sessionSeconds, setSessionSeconds] = useState(SESSION_TOTAL);
  const sessionActive =
    screen === "clocked-in-widget" || screen === "break-select";

  const resetSession = useCallback(() => setSessionSeconds(SESSION_TOTAL), []);

  useEffect(() => {
    if (!sessionActive) return;
    setSessionSeconds(SESSION_TOTAL);
    const id = setInterval(() => {
      setSessionSeconds((s) => {
        if (s <= 1) {
          clearInterval(id);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [sessionActive, screen]);

  // When session hits 0 — return to entry
  useEffect(() => {
    if (sessionActive && sessionSeconds === 0) {
      setScreen("entry");
    }
  }, [sessionActive, sessionSeconds]);

  function handleIdSubmit(id: string) {
    setPendingId(id);
    if (sessionClockedIn.has(id)) {
      setScreen("clocked-in-widget");
    } else {
      setScreen("success-modal");
    }
  }

  function handleSuccessClose() {
    if (pendingId) sessionClockedIn.add(pendingId);
    setEmployeeOnBreak(false);
    setScreen("entry");
  }

  function handleBreakSelected(id: string) {
    const bt = BREAK_TYPES.find((b) => b.id === id);
    setSelectedBreakName(bt?.name ?? "Break");
    resetSession();
    setScreen("break-modal");
  }

  function handleBreakModalClose() {
    setEmployeeOnBreak(true);
    setScreen("entry");
  }

  function handleClockOut() {
    setEmployeeOnBreak(false);
    setScreen("clockout-modal");
  }

  function handleClockOutModalClose() {
    setScreen("entry");
  }

  return (
    <PageShell>
      {screen === "entry" && <EntryPage onSubmit={handleIdSubmit} />}

      {screen === "clocked-in-widget" && (
        <ClockedInPage
          onDone={() => setScreen("entry")}
          onSelectBreak={() => {
            resetSession();
            setScreen("break-select");
          }}
          onClockOut={handleClockOut}
          onBreakEnd={() => {
            setEmployeeOnBreak(false);
            setScreen("break-finished-modal");
          }}
          initialOnBreak={employeeOnBreak}
          sessionSeconds={sessionSeconds}
        />
      )}

      {screen === "break-select" && (
        <BreakSelectPage
          onSelect={handleBreakSelected}
          onBack={() => {
            resetSession();
            setScreen("clocked-in-widget");
          }}
          sessionSeconds={sessionSeconds}
        />
      )}

      {/* Clock-in success modal */}
      {screen === "success-modal" && (
        <>
          <EntryPage onSubmit={() => {}} />
          <SuccessModal title="Clocked in" onClose={handleSuccessClose} />
        </>
      )}

      {/* Break started modal */}
      {screen === "break-modal" && (
        <>
          <EntryPage onSubmit={() => {}} />
          <SuccessModal
            title={
              selectedBreakName === "Coffee Break"
                ? "On a coffee break"
                : "On a break"
            }
            onClose={handleBreakModalClose}
          />
        </>
      )}

      {/* Clock-out success modal */}
      {screen === "clockout-modal" && (
        <>
          <EntryPage onSubmit={() => {}} />
          <SuccessModal
            title="Clocked out"
            onClose={handleClockOutModalClose}
          />
        </>
      )}

      {/* Coffee break finished modal */}
      {screen === "break-finished-modal" && (
        <>
          <EntryPage onSubmit={() => {}} />
          <SuccessModal
            title="Coffee break finished"
            onClose={() => setScreen("entry")}
          />
        </>
      )}
    </PageShell>
  );
}
