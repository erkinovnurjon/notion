import { api } from "@/convex/_generated/api";
import { useCoverImage } from "@/hooks/use-cover-image";
import { useEdgeStore } from "@/lib/edgestore";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const CoverImageModal = () => {
  const params = useParams();
  const updateFields = useMutation(api.document.updateFields);
  const { edgestore } = useEdgeStore();
  const coverImage = useCoverImage();

  const [file, setFile] = useState<File>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  return <div>CoverImageModal</div>;
};

export default CoverImageModal;
