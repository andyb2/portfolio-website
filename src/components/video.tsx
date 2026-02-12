import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blurVidWebm, landingImage } from "../data/asset-list";

gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  // const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const image = imageRef.current;
    if (!wrap || !image) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: "top top",
        end: "+=150%",
        scrub: true,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
      onComplete: () => {
        wrap.classList.add("ended");
      },
    });

    tl.fromTo(image, { filter: "blur(4rem)" }, { filter: "blur(0px)" });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div ref={wrapRef} className='container'>
      <div className='image-container'>
        <img ref={imageRef} src={landingImage} alt='Landing' />
      </div>
      <div className='overlay'></div>
    </div>
  );
}
