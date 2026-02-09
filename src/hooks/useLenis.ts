// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "lenis";

// gsap.registerPlugin(ScrollTrigger);

// export default function useLenis() {
//   const lenisRef = useRef<Lenis | null>(null);

//   useEffect(() => {
//     const lenis = new Lenis({
//       lerp: 0.09,
//       duration: 1.25,
//       anchors: true,
//       wheelMultiplier: 1.05,
//     });

//     const onScroll = () => ScrollTrigger.update();
//     lenis.on("scroll", onScroll);

//     const onTick = (time: number) => {
//       lenis.raf(time * 1000);
//     };

//     gsap.ticker.add(onTick);
//     gsap.ticker.lagSmoothing(0);

//     requestAnimationFrame(() => ScrollTrigger.refresh());

//     return () => {
//       lenis.off("scroll", onScroll);
//       gsap.ticker.remove(onTick);
//       lenis.destroy();
//     };
//   }, []);

//   return lenisRef;
// }

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
      anchors: true, // will handle normal href="#id" links
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

    // ---- Custom "data-anchor-trigger/location" support ----
    const triggers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-anchor-trigger]"),
    );

    const clickHandlers = new Map<HTMLElement, (e: MouseEvent) => void>();

    triggers.forEach((trigger) => {
      const handler = (e: MouseEvent) => {
        const target = trigger.getAttribute("data-anchor-trigger");
        if (!target) return;

        e.preventDefault();

        const anchor = document.querySelector<HTMLElement>(
          `[data-anchor-location="${CSS.escape(target)}"]`,
        );

        if (!anchor) {
          console.warn("No anchor location found for target", target);
          return;
        }

        lenis.scrollTo(anchor, {
          offset: 0,
          duration: 2,
          force: true,
        });
      };

      trigger.addEventListener("click", handler);
      clickHandlers.set(trigger, handler);
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      // remove trigger listeners
      clickHandlers.forEach((handler, el) =>
        el.removeEventListener("click", handler),
      );
      clickHandlers.clear();

      lenis.off("scroll", onScroll);
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
