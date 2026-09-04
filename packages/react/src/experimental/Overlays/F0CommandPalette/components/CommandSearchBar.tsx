import type { KeyboardEvent, RefObject } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { Search } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import type { CommandStage } from "../internal-types"
import type { CommandAssistant, CommandEntityRef } from "../types"

type CommandSearchBarProps = {
  query: string
  onQueryChange: (query: string) => void
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void
  placeholder: string
  scope: CommandEntityRef | null
  /** The scope named the way it has to be recognised: label plus what tells it apart. */
  scopeName: string
  stage: CommandStage
  assistant?: CommandAssistant
  onRemoveScope: () => void
  onAsk: () => void
  inputRef: RefObject<HTMLInputElement>
  listboxId: string
  activeOptionId?: string
}

/**
 * The bar: the sentence being written, and the way out of the list.
 *
 * The scope reads as the FIRST WORDS OF THAT SENTENCE, in the input's own type —
 * not as a tag. A container at any size is a second typographic system on one
 * line: the eye re-tunes between the object and the text, and the most
 * consequential word ends up in the smallest type on screen. What sets it apart
 * is position, the rendered separator and the icon leading it. It stays a button
 * so the scope is removable by pointer, but carries no chrome of its own.
 */
export const CommandSearchBar = ({
  query,
  onQueryChange,
  onKeyDown,
  placeholder,
  scope,
  scopeName,
  stage,
  assistant,
  onRemoveScope,
  onAsk,
  inputRef,
  listboxId,
  activeOptionId,
}: CommandSearchBarProps) => {
  const i18n = useI18n()

  return (
    <div className="flex items-center gap-2.5 border-0 border-b border-solid border-f1-border-secondary px-4 py-3.5">
      <F0Icon icon={Search} size="md" color="secondary" />

      {scope ? (
        <button
          type="button"
          className="m-0 inline-flex min-w-0 max-w-[46%] shrink cursor-pointer items-center gap-1.5 border-none bg-transparent p-0 font-sans text-lg text-f1-foreground"
          /*
            What the scope shows is the record's OWN label, nothing else. The
            line that tells twins apart exists to help while choosing, and by
            the time there is a scope that job is done. Carrying it into the bar
            made the reference a quarter of the field, in the smallest type on
            screen, pushing the thing you came to type into the margin. The full
            identity stays in the accessible name and the title, where the stakes
            are.
          */
          aria-label={i18n.t("commandPalette.scope.remove", {
            name: scopeName,
          })}
          title={scopeName}
          onClick={onRemoveScope}
        >
          {scope.icon ? (
            <F0Icon icon={scope.icon} size="md" color="secondary" />
          ) : null}
          <span className="truncate hover:line-through">{scope.label}</span>
        </button>
      ) : null}

      {scope && stage.kind === "param" ? (
        <>
          {/* i18n-exempt -- the separator the palette renders, not prose */}
          <span aria-hidden className="shrink-0 text-f1-foreground-tertiary">
            /
          </span>
          <span className="truncate text-lg">{stage.action.label}</span>
        </>
      ) : null}

      {scope ? (
        /* i18n-exempt -- the separator the palette renders, never the one typed */
        <span aria-hidden className="shrink-0 text-f1-foreground-tertiary">
          /
        </span>
      ) : null}

      {/*
        A bare input, and it has to be. `F0SearchInput` was evaluated for this
        slot and cannot carry it: its props expose no `onKeyDown`, no
        `role="combobox"` / `aria-controls` / `aria-activedescendant`, and no slot
        for a leading node. The palette's whole keyboard model lives on this
        element's key handler, its listbox wiring lives on those aria attributes,
        and the scope sits inside the field beside it — so the component would
        have to give up all three. Revisit if `F0SearchInput` ever opens up key
        handling and a leading slot.
      */}
      <input
        ref={inputRef}
        className="min-w-0 flex-1 cursor-text border-none bg-transparent font-sans text-lg text-f1-foreground caret-f1-foreground outline-none placeholder:text-f1-foreground-secondary"
        placeholder={placeholder}
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        onKeyDown={onKeyDown}
        role="combobox"
        aria-expanded
        aria-controls={listboxId}
        aria-activedescendant={activeOptionId}
        aria-label={placeholder}
      />

      {/*
        The persistent "you can just ask" affordance. It sits in the bar rather
        than in the list because it must not scroll away or compete with a result
        for the top slot, and because it is always about whatever is in the input
        right now (plus the scope, when there is one). Not a tab stop: `mod+Enter`
        is its keyboard path, taught in the footer.
      */}
      {assistant ? (
        <span className="inline-flex shrink-0 items-center">
          <F0Button
            variant="outline"
            size="sm"
            icon={assistant.icon}
            label={assistant.label}
            tabIndex={-1}
            onClick={onAsk}
          />
        </span>
      ) : null}
    </div>
  )
}
