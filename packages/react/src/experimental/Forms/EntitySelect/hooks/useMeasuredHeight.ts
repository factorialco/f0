import { useRef, useState } from "react";
import { useResizeObserver } from "usehooks-ts";

export function useMeasuredHeight(defaultHeight: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(defaultHeight);

  useResizeObserver({
    ref,
    onResize: ({ height: measured }) => {
      if (measured) setHeight(measured);
    },
  });

  return { ref, height };
}
