"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,                    // smooth speed
      easing: (t: number) => t ** 0.8,  // floaty easing
      lerp: 0.08,                        // momentum
      smoothWheel: true,                 // smooth wheel scrolling
    });

    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // expose globally for menu anchor links
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}