import React, { useEffect, useState, useRef } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import { Routes, Route } from "react-router-dom";
import Home from "./sections/Home";
import ProjectInfo from "./sections/ProjectInfo";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useProgress } from "@react-three/drei";

const HOLD_AFTER_LOAD_MS = 4000;
const EASE_SPEED = 0.08;

const App = () => {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const rafRef = useRef(null);
  const startedHoldRef = useRef(false);
  const holdStartRef = useRef(0);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    if (isReady) return;

    const tick = () => {
      setDisplayProgress((prev) => {
        let target;

        if (progress >= 100) {
          if (!startedHoldRef.current) {
            startedHoldRef.current = true;
            holdStartRef.current = performance.now();
          }
          const elapsed = performance.now() - holdStartRef.current;
          const t = Math.min(elapsed / HOLD_AFTER_LOAD_MS, 1);
          target = prev + (100 - prev) * t;

          if (t >= 1 && prev >= 99.9) {
            setIsReady(true);
            return 100;
          }
        } else {
          target = progress;
        }

        const next = prev + (target - prev) * EASE_SPEED;
        return Math.abs(target - next) < 0.05 ? target : next;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [progress, isReady]);

  const pct = Math.floor(displayProgress);

  return (
    <ReactLenis root>
      {!isReady && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black">
          {/* Background glow (monochrome) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

          {/* Animated grid (black & white) */}
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Loader content */}
          <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8">
            {/* Rotating ring */}
            <div className="relative flex h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 items-center justify-center">
              {/* Spinning monochrome ring */}
              <div
                className="absolute inset-0 animate-spin rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, #ffffff 40%, #777777 70%, transparent 100%)",
                  animationDuration: "2s",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))",
                }}
              />

              {/* Inner dark disc */}
              <div className="absolute inset-2 rounded-full bg-black/80 backdrop-blur-sm" />

              {/* Percentage */}
              <div className="relative font-mono text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white tabular-nums">
                {pct}%
              </div>
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-white text-center">
              Loading Experience
            </h2>

            {/* Subtitle */}
            <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/50 text-center">
              Preparing Portfolio
            </p>

            {/* Progress bar */}
            <div className="relative mt-2 h-[3px] w-52 sm:w-64 md:w-72 overflow-hidden rounded-full bg-white/10">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-white transition-[width] duration-100 ease-out"
                style={{ width: `${displayProgress}%` }}
              />

              {/* Glow dot */}
              <div
                className="absolute top-1/2 h-2.5 w-2.5 sm:h-3 sm:w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_4px_rgba(255,255,255,0.4)] transition-[left] duration-100 ease-out"
                style={{ left: `${displayProgress}%` }}
              />
            </div>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectInfo />} />
      </Routes>
    </ReactLenis>
  );
};

export default App;
