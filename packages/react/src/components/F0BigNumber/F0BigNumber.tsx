import { useNormalizeValueWithFormatter } from "@/lib/numeric";
import { numericFinalValue } from "@/lib/numeric/utils/numericFinalValue";
import { numericFormatter } from "@/lib/numeric/utils/numericFormatter";
import { withSkeleton } from "@/lib/skeleton";
import { Skeleton } from "@/ui/skeleton";
import { useMemo } from "react";
import { F0TagBalance } from "../tags/F0TagBalance";
import type { BigNumberProps, TrendConfig } from "./types";

const normalizeTrend = (trend: BigNumberProps["trend"]): Required<TrendConfig> => {
  if (typeof trend === "boolean" || !trend) {
    return {
      show: !!trend,
      invertStatus: false,
    };
  }

  return {
    show: trend.show ?? true,
    invertStatus: trend.invertStatus ?? false,
  };
};

const F0BigNumberCmp = ({ label, ...props }: BigNumberProps) => {
  const normalizeValueWithFormatter = useNormalizeValueWithFormatter();

  const value = normalizeValueWithFormatter(props.value, {
    formatterOptions: {
      decimalPlaces: 2,
    },
  });
  const trendConfig = normalizeTrend(props.trend);

  const comparison = normalizeValueWithFormatter(props.comparison);
  const formattedValue = numericFormatter(value.numericValue, value.formatterOptions);

  const comparisonValue = numericFinalValue(comparison.numericValue);
  const valueValue = numericFinalValue(value.numericValue);

  const trendPercentage = useMemo(() => {
    if (!comparisonValue || !trendConfig.show) {
      return undefined;
    }

    if (!comparisonValue || !valueValue) {
      return undefined;
    }

    return ((valueValue - comparisonValue) / comparisonValue) * 100;
  }, [valueValue, comparisonValue, trendConfig.show]);

  return (
    <div className="flex flex-col gap-2">
      {label && <div>{label}</div>}
      <div className="flex flex-row flex-wrap items-center gap-2">
        <span className="font-bold text-2xl">{formattedValue}</span>
        {comparisonValue !== undefined && (
          <F0TagBalance
            percentage={trendPercentage}
            amount={comparison}
            invertStatus={trendConfig.invertStatus}
            hint={props.comparisonHint}
          />
        )}
      </div>
    </div>
  );
};

const F0BigNumberSkeleton = () => {
  return (
    <div className="relative flex h-full w-full cursor-progress flex-col gap-2">
      <Skeleton className="h-3 w-full max-w-16 rounded-md" />
      <div className="flex flex-row flex-wrap items-end gap-2">
        <Skeleton className="h-8 w-full max-w-36 rounded-sm" />
        <Skeleton className="h-6 w-full max-w-18 rounded-sm" />
      </div>
    </div>
  );
};

F0BigNumberCmp.displayName = "F0BigNumber";

export const F0BigNumber = withSkeleton(F0BigNumberCmp, F0BigNumberSkeleton);
