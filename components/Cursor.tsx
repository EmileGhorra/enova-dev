'use client';

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let frame = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const loop = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      if (dot.current) {
        dot.current.style.transform = `translate(${cx}px, ${cy}px)`;
      }
      frame = requestAnimationFrame(loop);
    };

    const enter = () => dot.current?.classList.add("expanded");
    const leave = () => dot.current?.classList.remove("expanded");

    window.addEventListener("mousemove", move);
    frame = requestAnimationFrame(loop);

    const links = document.querySelectorAll("a, button");
    links.forEach((link) => {
      link.addEventListener("mouseenter", enter);
      link.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", enter);
        link.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return <div ref={dot} className="cursor-dot" />;
}
