// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { landingImage } from "../data/asset-list";

// gsap.registerPlugin(ScrollTrigger);

// export default function Video() {
//   // const videoRef = useRef<HTMLVideoElement | null>(null);
//   const wrapRef = useRef<HTMLDivElement | null>(null);
//   const imageRef = useRef<HTMLImageElement | null>(null);

//   useEffect(() => {
//     const wrap = wrapRef.current;
//     const image = imageRef.current;

//     if (!wrap || !image) return;

//      gsap.set(image, { willChange: "transform", force3D: true });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: wrap,
//         start: "top top",
//         end: "+=150%",
//         scrub: true,
//         pin: true,
//         pinSpacing: true,
//         markers: false,
//       },
//       onComplete: () => {
//         wrap.classList.add("ended");
//       },
//     });

//     // tl.fromTo(image, { filter: "blur(4rem)" }, { filter: "blur(0px)" });
//     tl.fromTo(image, { back }, { filter: "blur(0px)" });

//     return () => {
//       tl.scrollTrigger?.kill();
//       tl.kill();
//     };
//   }, []);

//   return (
//     <div ref={wrapRef} className='container'>
//       <div className='image-container'>
//         <img ref={imageRef} src={landingImage} alt='Landing' />
//       </div>
//       <div className='overlay'></div>
//     </div>
//   );
// }

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { landingImage } from "../data/asset-list";

gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const backdrop = backdropRef.current;
    if (!wrap || !backdrop) return;

    // Pre-set so there's no flash on mount
    gsap.set(backdrop, {
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: "top top",
        end: "+=150%",
        scrub: true,
        pin: true,
        pinSpacing: true,
        fastScrollEnd: true,
        preventOverlaps: true,
        invalidateOnRefresh: true,
        markers: false,
      },
      onComplete: () => wrap.classList.add("ended"),
    });

    // GSAP can tween backdropFilter as a string via a proxy
    const blurProxy = { val: 20 };
    tl.to(blurProxy, {
      val: 0,
      ease: "power2.inOut",
      onUpdate: () => {
        const v = `blur(${blurProxy.val.toFixed(1)}px)`;
        backdrop.style.backdropFilter = v;
        // backdrop.style.webkitBackdropFilter = v;
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div ref={wrapRef} className='container'>
      <div className='image-container'>
        <img
          src={landingImage}
          alt='Landing'
          decoding='async'
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            // Scale slightly so blurry edges never show
            transform: "scale(1.05)",
            transformOrigin: "center center",
          }}
        />
        {/*
          backdrop-filter blurs whatever is BEHIND this div.
          Safari composites this entirely on the GPU — no rasterization,
          no color space conversion, no edge artifacts, blacks stay black.
        */}
        <div
          ref={backdropRef}
          style={{
            position: "absolute",
            inset: 0,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            // Needed for Safari to actually apply backdrop-filter
            isolation: "isolate",
          }}
        />
      </div>
      <div className='overlay' />
    </div>
  );
}
