import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blurVid } from "../data/asset-list";

gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    let st: ScrollTrigger | null = null;

    const onLoadedMetadata = async () => {
      let tl = gsap.timeline({
        defaults: { duration: 4 },
        scrollTrigger: {
          scrub: true,
          trigger: wrap,
          start: "top top",
          // end: "+=100%",
          end: "+=50%",
          pin: wrap,
          pinSpacing: true,
          pinType: "fixed",
        },
        onComplete: () => {
          wrapRef.current?.classList.add("ended");
        },
      });

      tl.fromTo(
        video,
        { currentTime: 0 },
        { currentTime: video.duration || 1 },
      );
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      // st?.kill();
    };
  }, []);

  return (
    <div ref={wrapRef} className='video-container'>
      <video ref={videoRef} src={blurVid} muted playsInline preload='auto' />
      <div className='overlay'></div>
    </div>
  );
}
