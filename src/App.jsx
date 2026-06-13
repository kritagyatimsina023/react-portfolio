import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import ReactLenis from "lenis/react";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useProgress } from "@react-three/drei";

import Navbar from "./sections/Navbar";

// ─── Lazy-loaded routes ───────────────────────────────────────────────────────
// Each route becomes its own JS chunk. The browser only downloads
// ProjectInfo's bundle when the user navigates to /project/:slug.
const Home = lazy(() => import("./sections/Home"));
const ProjectInfo = lazy(() => import("./sections/ProjectInfo"));

// ─── GSAP registered once at module level ────────────────────────────────────
gsap.registerPlugin(ScrollTrigger);

const HOLD_AFTER_LOAD_MS = 800;
const EASE_SPEED = 0.18;

// Lenis singleton — never re-created on re-renders
let lenisInstance = null;

// ─── Minimal fallback shown while a lazy chunk is fetched ────────────────────
// No external deps so it paints instantly.
const RouteFallback = () => (
  <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black">
    <div
      className="h-10 w-10 animate-spin rounded-full"
      style={{
        background:
          "conic-gradient(from 0deg, transparent 0%, #ffffff 40%, #777777 70%, transparent 100%)",
        mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
        WebkitMask:
          "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
        animationDuration: "1.2s",
      }}
    />
  </div>
);

const App = () => {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const rafRef = useRef(null);
  const startedHoldRef = useRef(false);
  const holdStartRef = useRef(0);
  const progressRef = useRef(progress);
  progressRef.current = progress;

  // Lenis + ScrollTrigger — once
  useEffect(() => {
    if (!lenisInstance) {
      lenisInstance = new Lenis();
    }
    const lenis = lenisInstance;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off("scroll", ScrollTrigger.update);
    };
  }, []);

  // Loader RAF loop
  useEffect(() => {
    if (isReady) return;

    const mountTime = performance.now();

    const tick = () => {
      const currentProgress = progressRef.current;
      const elapsedTotal = performance.now() - mountTime;
      // Guarantee progress reaches 100% within 2.5 seconds
      const simulatedProgress = Math.min((elapsedTotal / 2500) * 100, 100);
      const effectiveProgress = Math.max(currentProgress, simulatedProgress);

      setDisplayProgress((prev) => {
        let target;

        if (effectiveProgress >= 100) {
          if (!startedHoldRef.current) {
            startedHoldRef.current = true;
            holdStartRef.current = performance.now();
          }
          const elapsed = performance.now() - holdStartRef.current;
          const t = Math.min(elapsed / HOLD_AFTER_LOAD_MS, 1);
          target = prev + (100 - prev) * t;

          if (t >= 1 && prev >= 99.5) {
            setIsReady(true);
            return 100;
          }
        } else {
          target = Math.max(prev, effectiveProgress);
        }

        const next = prev + (target - prev) * EASE_SPEED;
        return Math.abs(target - next) < 0.1 ? target : next;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady]);

  const pct = Math.min(Math.floor(displayProgress), 100);

  return (
    <ReactLenis root>
      {/* ── Initial 3D/asset loader ── */}
      {!isReady && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8">
            <div className="relative flex h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 items-center justify-center">
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
              <div className="absolute inset-2 rounded-full bg-black/80 backdrop-blur-sm" />
              <div className="relative font-mono text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white tabular-nums">
                {pct}%
              </div>
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-white text-center">
              Loading Experience
            </h2>
            <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/50 text-center">
              Preparing Portfolio
            </p>

            <div className="relative mt-2 h-[3px] w-52 sm:w-64 md:w-72 overflow-hidden rounded-full bg-white/10">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-white transition-[width] duration-75 ease-out"
                style={{ width: `${displayProgress}%` }}
              />
              <div
                className="absolute top-1/2 h-2.5 w-2.5 sm:h-3 sm:w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_4px_rgba(255,255,255,0.4)] transition-[left] duration-75 ease-out"
                style={{ left: `${displayProgress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ── Suspense wraps lazy routes so each chunk has its own fallback ── */}
      <Navbar />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectInfo />} />
        </Routes>
      </Suspense>
    </ReactLenis>
  );
};

export default App;
