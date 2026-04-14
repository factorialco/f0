import type { ReactNode } from "react";

import { useCallback, useRef, useState } from "react";

import { F0Button } from "@/components/F0Button";
import { ArrowCycle, Save } from "@/icons/app";
import { OneEllipsis } from "@/lib/OneEllipsis";
import { useI18n } from "@/lib/providers/i18n";
import { ExportDropdown } from "@/patterns/F0AnalyticsDashboard/components/ExportDropdown/ExportDropdown";

import { CloseCanvasButton } from "../../components/CloseCanvasButton";
import { useDashboardCanvas } from "./DashboardContext";

export function DashboardHeader({
  title,
  onClose,
  onRefresh,
}: {
  title: string;
  onClose: () => void;
  onRefresh: () => void;
}) {
  return (
    <div className="flex shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary p-5">
      <OneEllipsis
        tag="h2"
        className="min-w-0 flex-1 text-2xl font-semibold text-f1-foreground"
      >
        {title}
      </OneEllipsis>
      <DashboardActions onRefresh={onRefresh} />
      <div className="mx-1 h-4 w-px bg-f1-background-secondary-hover" />
      <CloseCanvasButton onClick={onClose} />
    </div>
  );
}

function DashboardActions({ onRefresh }: { onRefresh: () => void }): ReactNode {
  const {
    isDirty,
    handleSave,
    handleDiscard,
    exportAsExcel,
    config,
    onSaveDashboard,
  } = useDashboardCanvas();
  const translations = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = useCallback(async () => {
    if (!exportAsExcel) return;
    setIsExporting(true);
    try {
      await exportAsExcel();
    } finally {
      setIsExporting(false);
    }
  }, [exportAsExcel]);

  const handleSaveReport = useCallback(async () => {
    if (!onSaveDashboard) return;
    await onSaveDashboard({
      title: config.title,
      items: config.items,
      fetchSpecs: config.fetchSpecs,
      filters: config.filters,
    });
  }, [onSaveDashboard, config]);

  if (isDirty) {
    return (
      <div ref={ref} className="flex gap-2">
        <F0Button
          variant="outline"
          label={translations.ai.discardChanges}
          onClick={handleDiscard}
          size="md"
        />
        <F0Button
          label={translations.ai.saveChanges}
          onClick={handleSave}
          size="md"
        />
      </div>
    );
  }

  return (
    <div ref={ref} className="flex items-center gap-2">
      {onSaveDashboard && (
        <F0Button
          variant="outline"
          icon={Save}
          size="md"
          onClick={handleSaveReport}
          label={translations.ai.saveReport}
        />
      )}
      <F0Button
        variant="outline"
        icon={ArrowCycle}
        size="md"
        onClick={onRefresh}
        label={translations.ai.refreshDashboard}
        hideLabel
      />
      {exportAsExcel && (
        <ExportDropdown
          onExportExcel={handleExport}
          isExporting={isExporting}
        />
      )}
    </div>
  );
}
