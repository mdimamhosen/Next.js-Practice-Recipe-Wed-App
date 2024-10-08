import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="text-center flex justify-center items-center h-screen">
        <Skeleton className="h-4 w-1/2 mb-4" />
      </div>
    </div>
  );
};

export default Loading;
