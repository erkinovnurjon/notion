import ConfirmModal from "@/components/modals/confirm-modals";
import { Input } from "@/components/ui/input";
import { Loader } from "@/components/ui/loader";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { Search, Trash, Undo } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export const TrashBox = () => {
  const router = useRouter();

  const documents = useQuery(api.document.getTrashDocuments);

  if (documents === undefined) {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <Loader size={"lg"} />
      </div>
    );
  }

  const onRemove = (documentId : Id<"documents">) => {};
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

        {documents.map((document) => (
          <div
            key={document._id}
            className="text-sm w-full hover:bg-primary/5 flex items-center text-primary
            justify-between"
            role="button"
          >
            <span className=" truncate pl-2">{document.title}</span>

            <div className="flex items-center">
              <div
                className=" rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                role="button"
              >
                <Undo className="w-4 h-4" />
              </div>
              <ConfirmModal onConfirm={() => onRemove(document._id)}>
                <div
                  className=" rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                  role="button"
                >
                  <Trash className="w-4 h-4" />
                </div>
              </ConfirmModal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
