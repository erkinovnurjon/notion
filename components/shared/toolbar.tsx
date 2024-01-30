import { Doc } from "@/convex/_generated/dataModel";
import React from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";

interface ToolbarProps {
  document: Doc<"documents">;
  preview?: boolean;
}

export const Toolbar = ({ document, preview }: ToolbarProps) => {
  return (
    <div className=" pl-[54px] group relative">
      {!!document.icon && !preview && (
        <div className="flex items-center gap-x-2 group/icon pt-6">
          <IconPicker>
            <p className=" text-6xl hover:opacity-70 transition">
              {document.icon}
            </p>
          </IconPicker>
          <Button
            className=" rounded-full opacity-0 group-hover/icon:opacity-100
            tranisition text-muted-foreground text-xs"
            variant={"outline"}
            size={"icon"}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      {document.icon && preview && (
        <p className="text-6xl pt-6">{document.icon}</p>
      )}
    </div>
  );
};
