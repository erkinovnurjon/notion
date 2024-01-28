import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

export const TrashBox = () => {
  return (
    <div className=" text-sm">
      <div className="flex items-center gap-x-1 p-2">
        <Search className="w-4 h-4" />
        <Input />
      </div>
      <div className="mt-2 px-1 pb-1">
        <p className="hidden last:block text-xs text-center text-muted-foreground">
          No documents in trash
        </p>
      </div>
    </div>
  );
};
