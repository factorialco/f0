import { F0Button } from "@/components/F0Button"
import { ChevronLeft, ChevronRight, Cross } from "@/icons/app"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"

interface StepHeaderProps {
  question: string
  stepLabel: string | undefined
  isFirstStep: boolean
  isFinalStep: boolean
  canProceed: boolean
  onBack: () => void
  onNext: () => void
  onCancel: () => void
}

export const StepHeader = ({
  question,
  stepLabel,
  isFirstStep,
  isFinalStep,
  canProceed,
  onBack,
  onNext,
  onCancel,
}: StepHeaderProps) => {
  const translation = useI18n()

  return (
    <div className="flex items-start gap-0.5 pl-4 pr-3">
      {/*
        mt-0.5 centra la primera línea con los botones de la cabecera: la caja
        de línea del enunciado mide 20px y los botones 24, así que `items-start`
        lo deja 2px alto — (24-20)/2. Si cambia el tamaño de los botones o el
        cuerpo del texto, este 2 hay que recalcularlo.
        pr-3 separa el enunciado del grupo de botones; el gap-0.5 del contenedor
        es la separación DENTRO del grupo, no la del texto.
      */}
      <OneEllipsis
        className="mt-0.5 min-w-0 flex-1 pr-3 text-base font-medium text-f1-foreground"
        lines={3}
      >
        {question}
      </OneEllipsis>

      {stepLabel && (
        <div className="flex shrink-0 items-center gap-0.5">
          <F0Button
            variant="ghost"
            size="sm"
            type="button"
            onClick={onBack}
            disabled={isFirstStep}
            label={translation.ai.clarifyingQuestion.back}
            hideLabel
            icon={ChevronLeft}
          />
          {/*
            La cabecera mezcla tres reglas de alineación: los iconos de 24px se
            centran con la primera línea de la pregunta, pero el contador es
            TEXTO y el ojo lo alinea por línea base. Centrado en el mismo eje,
            un cuerpo de 12px deja su base 1px por encima de la de 14px. El
            translate lo corrige sin tocar el layout (un margen cambiaría el
            alto de la cabecera). Si cambia el cuerpo del contador o de la
            pregunta, este 1 hay que recalcularlo.
          */}
          <span className="translate-y-px text-sm font-semibold text-f1-foreground-tertiary">
            {stepLabel}
          </span>
          <F0Button
            variant="ghost"
            size="sm"
            type="button"
            onClick={onNext}
            disabled={isFinalStep || !canProceed}
            label={translation.ai.clarifyingQuestion.next}
            hideLabel
            icon={ChevronRight}
          />
        </div>
      )}
      <F0Button
        variant="ghost"
        size="sm"
        type="button"
        onClick={onCancel}
        label={translation.actions.cancel}
        hideLabel
        icon={Cross}
      />
    </div>
  )
}
