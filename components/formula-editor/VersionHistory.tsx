"use client";
import { GitBranch, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface Version {
  id: string;
  version_number: string;
  version_label?: string | null;
  batch_size_grams: number;
  created_at?: Date | null;
}

interface Props {
  versions: Version[];
  activeVersionId: string;
  onSelect: (v: Version) => void;
}

export function VersionHistory({ versions, activeVersionId, onSelect }: Props) {
  return (
    <div className="space-y-1">
      {versions.map((v) => (
        <button
          key={v.id}
          onClick={() => onSelect(v)}
          className={cn(
            "w-full text-left px-3 py-2.5 rounded-lg border transition-all",
            v.id === activeVersionId
              ? "bg-primary/8 border-primary/20 text-foreground"
              : "border-border hover:bg-muted/50 text-muted-foreground hover:text-foreground"
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GitBranch className="h-3.5 w-3.5 shrink-0" />
              <span className="text-xs font-semibold font-mono">v{v.version_number}</span>
            </div>
            {v.id === activeVersionId && (
              <span className="text-xs text-primary font-medium">active</span>
            )}
          </div>
          {v.version_label && (
            <p className="text-xs mt-0.5 ml-5.5 opacity-70">{v.version_label}</p>
          )}
          {v.created_at && (
            <div className="flex items-center gap-1 mt-1 ml-5.5 text-xs opacity-50">
              <Clock className="h-2.5 w-2.5" />
              {format(new Date(v.created_at), "MMM d, yyyy")}
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
