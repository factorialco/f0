import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { F0Button } from "@/components/F0Button";
import { F0Icon } from "@/components/F0Icon/F0Icon";
import { ArrowUp, Check, Cross, Reset } from "@/icons/app";
import { useI18n } from "@/lib/providers/i18n/i18n-provider";
import { cn } from "@/lib/utils";
import { F0ActionItem } from "@/sds/ai/F0ActionItem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";

import { EnhancementOption } from "./types";

interface AIEnhanceMenuProps {
  onSelect: ({
    selectedIntent,
    customIntent,
  }: {
    selectedIntent?: string;
    customIntent?: string;
  }) => void;
  enhancementOptions: EnhancementOption[];
  inputPlaceholder: string;
  darkMode?: boolean;
  menuWidth?: number;
  menuState?: "idle" | "loading" | "review";
  loadingLabel?: string;
  onAccept?: () => void;
  onReject?: () => void;
  onRetry?: () => void;
  canShowOptions?: boolean;
  compactReview?: boolean;
}

const AIEnhanceMenu = ({
  onSelect,
  enhancementOptions,
  inputPlaceholder,
  darkMode = false,
  menuWidth,
  menuState = "idle",
  loadingLabel = "Thinking...",
  onAccept,
  onReject,
  onRetry,
  canShowOptions = true,
  compactReview = false,
}: AIEnhanceMenuProps) => {
  const i18n = useI18n();
  const [searchQuery, setSearchQuery] = useState("");
  const customInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = customInputRef.current;
    if (!input) return;

    const timeoutId = window.setTimeout(() => {
      input.focus({ preventScroll: true });
      const length = input.value.length;
      input.setSelectionRange(length, length);
    }, 300);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  const handleOptionSelect = (option: EnhancementOption) => {
    onSelect({ selectedIntent: option.id, customIntent: undefined });
  };

  const isIdle = menuState === "idle";
  const isLoading = menuState === "loading";
  const isReview = menuState === "review";
  const useCompactReview = isReview && compactReview;
  const showOptions = isIdle && canShowOptions && enhancementOptions.length > 0;

  return (
    <div
      className={cn(
        "flex max-w-full flex-col",
        useCompactReview ? "w-fit" : "w-full",
        darkMode && "dark",
      )}
      style={{
        width: !useCompactReview && menuWidth ? `${menuWidth}px` : undefined,
      }}
    >
      <DropdownMenu open={showOptions} onOpenChange={() => {}} modal={false}>
        <DropdownMenuTrigger asChild>
          <motion.div
            className={cn(
              "relative isolate",
              "flex w-full flex-row items-center gap-2 rounded-md bg-f1-background p-2 text-f1-foreground transition-all duration-200",
              isIdle &&
                cn(
                  "outline outline-1 -outline-offset-1 outline-f1-border-secondary hover:outline-transparent has-[input:focus]:outline-transparent",
                  "[--gradient-angle:0deg]",
                  "hover:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] hover:before:opacity-100 hover:animate-rotate-gradient",
                  "has-[input:focus]:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] has-[input:focus]:before:opacity-100 has-[input:focus]:animate-rotate-gradient",
                  "before:pointer-events-none before:absolute before:inset-px before:z-10 before:rounded-[inherit] before:bg-f1-background before:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] before:content-['']",
                  "after:pointer-events-none after:absolute after:inset-0 after:translate-y-px after:scale-90 after:animate-rotate-gradient after:rounded-[inherit] after:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] after:opacity-0 after:blur-sm after:content-[''] after:[transition:transform_200ms,opacity_200ms]",
                  "hover:after:scale-100 hover:after:opacity-80 has-[input:focus]:after:scale-100 has-[input:focus]:after:opacity-80",
                  "pl-4",
                ),
              compactReview &&
                !isIdle &&
                "border border-solid border-f1-border-secondary",
              useCompactReview && "drop-shadow-sm",
            )}
            onClick={() => {
              customInputRef.current?.focus();
            }}
          >
            {isIdle && (
              <>
                <input
                  data-enhance-input="true"
                  type="text"
                  aria-label={inputPlaceholder}
                  placeholder={inputPlaceholder}
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    // Prevent DropdownMenuTrigger from intercepting Space/Enter/Arrow keys
                    e.stopPropagation();
                    if (e.key === "Enter" && searchQuery.trim()) {
                      e.preventDefault();
                      onSelect({
                        selectedIntent: undefined,
                        customIntent: searchQuery.trim(),
                      });
                    }
                  }}
                  ref={customInputRef}
                  className="relative z-20 min-w-0 flex-1 border-none bg-transparent text-f1-foreground placeholder:text-f1-foreground-secondary"
                />
                <div className="relative z-20 w-fit">
                  <F0Button
                    variant="default"
                    icon={ArrowUp}
                    label="send"
                    hideLabel
                    disabled={!searchQuery.trim()}
                    onClick={() => {
                      const trimmed = searchQuery.trim();
                      if (!trimmed) return;
                      onSelect({
                        selectedIntent: undefined,
                        customIntent: trimmed,
                      });
                    }}
                  />
                </div>
              </>
            )}
            {isLoading && (
              <div
                className={cn(
                  "relative z-20 flex h-8 min-w-0 flex-1 items-center gap-2",
                  darkMode && "dark",
                )}
              >
                <F0ActionItem title={loadingLabel} status="executing" />
              </div>
            )}
            {isReview && (
              <div
                className={cn(
                  "relative z-20 flex items-center justify-between gap-2",
                  useCompactReview ? "w-fit whitespace-nowrap" : "w-full",
                  darkMode && "dark",
                )}
              >
                <F0Button
                  variant={useCompactReview ? "ghost" : "outline"}
                  icon={Reset}
                  label={i18n.richTextEditor.ai.repeatButtonLabel}
                  onClick={onRetry}
                />
                <div className="flex items-center gap-2">
                  <F0Button
                    variant={useCompactReview ? "ghost" : "outline"}
                    icon={Cross}
                    label={i18n.richTextEditor.ai.rejectChangesButtonLabel}
                    onClick={onReject}
                  />
                  <F0Button
                    variant={useCompactReview ? "ghost" : "default"}
                    icon={Check}
                    label={i18n.richTextEditor.ai.acceptChangesButtonLabel}
                    onClick={onAccept}
                  />
                </div>
              </div>
            )}
          </motion.div>
        </DropdownMenuTrigger>

        {showOptions && (
          <DropdownMenuContent
            align="start"
            sideOffset={4}
            className={cn(
              "scrollbar-macos max-h-60 w-72 !min-w-0 overflow-y-auto border border-solid border-f1-border-secondary",
              darkMode && "dark",
            )}
            style={{ zIndex: 10000 }}
            onCloseAutoFocus={(e) => e.preventDefault()}
            onFocusOutside={(e) => e.preventDefault()}
            onInteractOutside={(e) => e.preventDefault()}
          >
            {enhancementOptions.map((option) => {
              const hasSubOptions =
                option.subOptions && option.subOptions.length > 0;

              if (hasSubOptions) {
                return (
                  <DropdownMenuSub key={option.id}>
                    <DropdownMenuSubTrigger className="mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover">
                      <div className="flex w-full flex-row items-center gap-2">
                        {option.icon && (
                          <F0Icon icon={option.icon} color="default" />
                        )}
                        <span className="flex-1 text-base font-medium">
                          {option.label}
                        </span>
                      </div>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent
                        className={cn(
                          darkMode && "dark",
                          "border border-solid border-f1-border-secondary",
                        )}
                        style={{ zIndex: 10001 }}
                      >
                        {option.subOptions?.map((subOption) => (
                          <DropdownMenuItem
                            key={subOption.id}
                            onSelect={(e) => {
                              e.preventDefault();
                              handleOptionSelect(subOption);
                            }}
                          >
                            <div className="flex w-full flex-row items-center gap-2">
                              {subOption.icon && (
                                <F0Icon icon={subOption.icon} color="default" />
                              )}
                              <span className="flex-1">{subOption.label}</span>
                            </div>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                );
              }

              return (
                <DropdownMenuItem
                  key={option.id}
                  onSelect={(e) => {
                    e.preventDefault();
                    handleOptionSelect(option);
                  }}
                >
                  <div className="flex w-full flex-row items-center gap-2">
                    {option.icon && (
                      <F0Icon icon={option.icon} color="default" />
                    )}
                    <span className="flex-1">{option.label}</span>
                  </div>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
};

export { AIEnhanceMenu };
