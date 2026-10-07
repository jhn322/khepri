import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function DragScroll({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [fade, setFade] = useState({ l: false, r: true });
  const drag = useRef({ down: false, x: 0, s: 0 });

  const update = () => {
    const el = ref.current;
    if (!el) return;
    setFade({ l: el.scrollLeft > 4, r: el.scrollLeft + el.clientWidth < el.scrollWidth - 4 });
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="relative">
      <div
        ref={ref}
        onScroll={update}
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse") return;
          drag.current = { down: true, x: e.clientX, s: ref.current!.scrollLeft };
        }}
        onPointerMove={(e) => {
          if (!drag.current.down) return;
          ref.current!.scrollLeft = drag.current.s - (e.clientX - drag.current.x);
        }}
        onPointerUp={() => (drag.current.down = false)}
        onPointerLeave={() => (drag.current.down = false)}
        className={cn(
          "no-scrollbar flex cursor-grab overflow-x-auto select-none active:cursor-grabbing",
          className,
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background to-transparent transition-opacity sm:w-28",
          fade.l ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background to-transparent transition-opacity sm:w-28",
          fade.r ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
