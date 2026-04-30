import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const AnimatedTextSlide = ({ text, className }) => {
  const containerRef = useRef(null);
  const lineRef = useRef([]);
  const lines = text.split("\n").filter((line) => line.trim() !== "");
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (lineRef.current.length > 0) {
      gsap.from(lineRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "back.out",
        scrollTrigger: {
          trigger: containerRef.current,
        },
      });
    }
  }, []);
  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, idx) => (
        <span
          className="block leading-relaxed tracking-wide text-pretty"
          key={idx}
          ref={(el) => (lineRef.current[idx] = el)}
        >
          {line}
        </span>
      ))}
    </div>
  );
};
export default AnimatedTextSlide;
