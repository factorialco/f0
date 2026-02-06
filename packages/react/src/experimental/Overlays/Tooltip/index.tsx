import React, {
  ComponentProps,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { experimentalComponent } from "@/lib/experimental";
import {
  TooltipContent,
  Tooltip as TooltipPrimitive,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip";

import { cn } from "../../../lib/utils";
import { Shortcut } from "@/ui/Shortcut";

type TooltipInternalProps = {
  children: React.ReactNode;
  shortcut?: ComponentProps<typeof Shortcut>["keys"];
  delay?: number;
  instant?: boolean;
} & (
  | {
      label: string;
      description?: string;
    }
  | {
      label?: string;
      description: string;
    }
);

export function TooltipInternal({
  label,
  description,
  children,
  shortcut,
  instant = false,
  delay = 700,
}: TooltipInternalProps) {
  const [open, setOpen] = useState(false);
  const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDelayMs = useMemo(() => (instant ? 100 : delay), [delay, instant]);

  const clearOpenTimeout = useCallback(() => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }
  }, []);

  const close = useCallback(() => {
    clearOpenTimeout();
    setOpen(false);
  }, [clearOpenTimeout]);

  const scheduleOpen = useCallback(() => {
    clearOpenTimeout();
    openTimeoutRef.current = setTimeout(() => setOpen(true), openDelayMs);
  }, [clearOpenTimeout, openDelayMs]);

  useEffect(() => close, [close]);

  const isFocusVisible = useCallback((el: Element) => {
    try {
      return el.matches(":focus-visible");
    } catch {
      return false;
    }
  }, []);

  return (
    <>
      <TooltipProvider
        delayDuration={openDelayMs}
        disableHoverableContent={instant}
      >
        <TooltipPrimitive
          open={open}
          onOpenChange={(nextOpen) => {
            // We control when the tooltip opens so it doesn't show on mouse click
            // focus/programmatic focus. Still allow Radix to request closing (e.g. escape).
            if (!nextOpen) close();
          }}
        >
          <TooltipTrigger
            asChild
            className="pointer-events-auto"
            onPointerEnter={(e) => {
              if (e.pointerType === "touch") return;
              scheduleOpen();
            }}
            onPointerLeave={() => close()}
            onPointerDown={() => close()}
            onFocus={(e) => {
              if (isFocusVisible(e.currentTarget)) {
                setOpen(true);
              } else {
                // If focus comes from mouse/touch/programmatic focus, keep closed.
                close();
              }
            }}
            onBlur={() => close()}
          >
            {children}
          </TooltipTrigger>
          <TooltipContent
            className={cn(
              "max-w-xs",
              shortcut && "pr-1.5",
              instant && "pointer-events-none",
            )}
          >
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                {label && <p className="font-semibold">{label}</p>}
                {shortcut && <Shortcut keys={shortcut} variant="inverse" />}
              </div>
              {description && (
                <p className="font-normal">{description.toString()}</p>
              )}
            </div>
          </TooltipContent>
        </TooltipPrimitive>
      </TooltipProvider>
    </>
  );
}

const privateProps = ["delay"] as const;

export type TooltipProps = Omit<
  TooltipInternalProps,
  (typeof privateProps)[number]
>;

const _Tooltip = (props: TooltipProps) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc;
    return rest;
  }, props as TooltipInternalProps);

  return <TooltipInternal {...publicProps} />;
};

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const Tooltip = experimentalComponent("Tooltip", _Tooltip);
