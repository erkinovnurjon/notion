import { Id } from '@/convex/_generated/dataModel'
import React from 'react'

interface DocumetIdPageProps{
      params : {
            documentId : Id<"documents">
      }
}

const DocumentIdPage = ({params} : DocumetIdPageProps) => {
  return (
    <div>{params.documentId}</div>
  )
}

export default DocumentIdPage