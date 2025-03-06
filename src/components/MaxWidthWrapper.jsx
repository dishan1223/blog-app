"use client"
import React from 'react';
import { cn } from "@/lib/utils";

// for all the folks using TS
// interface MaxWidthWrapperProps {
//   children: React.ReactNode;
//   className?: string;
// }

const MaxWidthWrapper = ({children, className}) => {
  return (
    <div className={cn("mx-auto w-[90%] md:w-[736px] mt-10", className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper
