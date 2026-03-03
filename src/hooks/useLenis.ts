import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.09,
      duration: 1.25,
      anchors: false, // disabled — we handle anchors manually below
      wheelMultiplier: 1.05,
    });

    lenisRef.current = lenis;

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const handleAnchorClick = (e: MouseEvent) => {
      const trigger = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-anchor-trigger]",
      );
      if (!trigger) return;

      const target = trigger.getAttribute("data-anchor-trigger");
      if (!target) return;

      e.preventDefault();

      const anchor = document.querySelector<HTMLElement>(
        `[data-anchor-location="${CSS.escape(target)}"]`,
      );

      if (!anchor) {
        console.warn("No anchor location found for target:", target);
        return;
      }

      lenis.scrollTo(anchor, {
        offset: 0,
        duration: 2,
        force: true,
      });
    };

    document.addEventListener("click", handleAnchorClick);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
