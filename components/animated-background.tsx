"use client";

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <AnimatedGridPattern
        numSquares={60}
        maxOpacity={0.08}
        duration={4}
        repeatDelay={0.5}
        width={80}
        height={80}
        className={cn(
          "absolute inset-0 w-full h-full opacity-60"
        )}
      />
    </div>
  );
}

