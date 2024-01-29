"use client";

import { useSearch } from "@/hooks/use-search";
import { useUser } from "@clerk/clerk-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { File } from "lucide-react";
import { useRouter } from "next/navigation";

export const SearchCommand = () => {
  const { user } = useUser();
  const router = useRouter();

  const documents = useQuery(api.document.getSearch);

  const search = useSearch();
  const { isOpen, onClose, onOpen, onToggle } = search;

  const onSelect = (id: string) => {
    router.push(`/documents/${id}`);
    onClose();
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <CommandInput placeholder={`Search ${user?.fullName}'s Notion`} />
      <CommandList>
        <CommandEmpty>No results fond.</CommandEmpty>
        <CommandGroup heading={"Documents"}>
          {documents?.map((document) => (
            <CommandItem
              key={document._id}
              value={`${document._id}`}
              title={document.title}
              onSelect={onSelect}
            >
              {document.icon ? (
                <>
                  <p className="mr-2 text-[18px]">{document.icon}</p>
                </>
              ) : (
                <>
                  <File className="mr-2 h-4 w-4" />
                </>
              )}
              <span>{document.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
