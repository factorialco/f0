import { cnMerge, type CnOptions } from "tailwind-variants";

export function cn(...args: CnOptions): string {
  return cnMerge(args)({
    twMerge: true,
  }) ?? "";
}
