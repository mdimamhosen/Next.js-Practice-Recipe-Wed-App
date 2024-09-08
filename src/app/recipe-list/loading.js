import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div>
      <Skeleton className="h-4 w-1/2 mb-4" />
    </div>
  );
};

export default Loading;
