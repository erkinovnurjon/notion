"use client";

import { useSearch } from "@/hooks/use-search";
import { useUser } from "@clerk/clerk-react";

export const SearchCommand = () => {
  const { user } = useUser();

  const search = useSearch();
  const { isOpen, onClose, onOpen, onToggle } = search;
  return <div>SearchCommand</div>;
};
