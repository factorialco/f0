import { F0Button } from "@/components/F0Button";
import { F0TagStatus, Variant } from "@/components/tags/F0TagStatus";
import { Counter } from "@/ui/Counter";
import { Plus } from "@/icons/app";

type LaneHeaderProps = {
  label: string;
  variant?: Variant;
  count: number;
  onPrimaryAction?: () => void;
};

export const LaneHeader = ({
  label,
  variant,
  count,
  onPrimaryAction,
}: LaneHeaderProps) => {
  const showPrimary = Boolean(onPrimaryAction);

  return (
    <div className="flex items-center gap-2 px-1 pb-0.5 pt-2">
      <F0TagStatus text={label} variant={variant || "neutral"} />
      <Counter size="md" type="default" value={count} />
      {showPrimary && (
        <div className="ml-auto flex items-center gap-1 pr-1">
          <F0Button
            variant="ghost"
            size="sm"
            label="Add"
            icon={Plus}
            hideLabel
            onClick={onPrimaryAction}
          />
        </div>
      )}
    </div>
  );
};
