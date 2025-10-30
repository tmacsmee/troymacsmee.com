"use client";

import { useEffect, useRef, useState } from "react";

export default function Shockwave() {
  const [circles, setCircles] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const id = Date.now();
      setCircles((circles) => [
        ...circles,
        { id, x: event.clientX, y: event.clientY },
      ]);
      setTimeout(() => {
        setCircles((circles) => circles.filter((circle) => circle.id !== id));
      }, 900);
    }

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {circles.map((circle) => (
        <div
          key={circle.id}
          style={{ left: circle.x, top: circle.y }}
          className="absolute border-2 border-black/50 translate-x-[-50%] translate-y-[-50%] rounded-full shockwave pointer-events-none"
        />
      ))}
    </div>
  );
}
