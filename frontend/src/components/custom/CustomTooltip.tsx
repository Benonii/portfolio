import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { CustomTooltipProps } from '@/lib/types';
  

function CustomTooltip({ element, info }: CustomTooltipProps ) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{element}</TooltipTrigger>
        <TooltipContent 
          side="bottom" // Adjust positioning if needed
          className="ml-10 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 transition-all duration-300"
        >
          {info}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default CustomTooltip
