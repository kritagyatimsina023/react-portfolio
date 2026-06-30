import { useParams, useNavigate } from "react-router-dom";
import {
  useRef,
  useState,
  useEffect,
  useCallback,
  lazy,
  Suspense,
} from "react";
import { projects } from "../contants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGreensock,
  SiAxios,
  SiZod,
  SiReactquery,
  SiStripe,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiCloudinary,
  SiPrisma,
  SiClerk,
  SiGsap,
  SiPython,
  SiFlask,
  SiPytorch,
  SiSocketdotio,
} from "react-icons/si";

// ─── Lazy-load the heavy Icon component ──────────────────────────────────────
// @iconify-icon/react pulls in a large icon registry; defer it out of the
// initial chunk so it doesn't block the first paint.
const Icon = lazy(() =>
  import("@iconify-icon/react").then((m) => ({ default: m.Icon })),
);

// ─── GSAP plugins registered once at module level ────────────────────────────
gsap.registerPlugin(ScrollTrigger, SplitText);

// ─── Helpers ─────────────────────────────────────────────────────────────────
const toSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const formatTime = (s) => {
  if (isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

// ─── Tiny icon fallback while the lazy chunk loads ───────────────────────────
const IconFallback = () => (
  <span className="inline-block h-5 w-5 rounded bg-black/10 animate-pulse" />
);

// ─── Memoised video player sub-component ─────────────────────────────────────
// Extracted so ProjectInfo's re-renders never re-mount the <video> element.
const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const wrapperRef = useRef(null);
  const hideTimer = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [buffered, setBuffered] = useState(0);

  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      setShowControls(false);
    }, 2800);
  }, []);

  useEffect(() => () => clearTimeout(hideTimer.current), []);

  useEffect(() => {
    if (!playing) {
      setShowControls(true);
      clearTimeout(hideTimer.current);
    }
  }, [playing]);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
    resetHideTimer();
  }, [resetHideTimer]);

  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    setCurrentTime(v.currentTime);
    if (v.buffered.length > 0)
      setBuffered((v.buffered.end(v.buffered.length - 1) / v.duration) * 100);
  }, []);

  const handleProgressClick = useCallback((e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const ratio = Math.max(
      0,
      Math.min(1, (e.clientX - rect.left) / rect.width),
    );
    videoRef.current.currentTime = ratio * videoRef.current.duration;
  }, []);

  const skip = useCallback(
    (seconds) => {
      const v = videoRef.current;
      if (!v) return;
      v.currentTime = Math.max(
        0,
        Math.min(v.duration, v.currentTime + seconds),
      );
      resetHideTimer();
    },
    [resetHideTimer],
  );

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, []);

  const handleVolume = useCallback((e) => {
    const val = parseFloat(e.target.value);
    videoRef.current.volume = val;
    setVolume(val);
    setMuted(val === 0);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      wrapperRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  const progressPct = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={wrapperRef}
      className="pi-video-wrapper group"
      onMouseMove={resetHideTimer}
      onMouseLeave={() => playing && setShowControls(false)}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
        onEnded={() => setPlaying(false)}
        playsInline
        preload="metadata" // only fetch metadata, not full video on mount
      />

      {/* Centre play/pause */}
      <div
        className={`pi-big-play ${playing && !showControls ? "opacity-0" : "opacity-100"}`}
      >
        <button
          type="button"
          className="pi-big-play-btn relative z-50"
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          aria-label={playing ? "Pause" : "Play"}
        >
          <Suspense fallback={<IconFallback />}>
            {playing ? (
              <Icon
                icon="tabler:player-pause-filled"
                width={28}
                color="white"
              />
            ) : (
              <Icon
                icon="tabler:player-play-filled"
                width={28}
                color="white"
                style={{ marginLeft: 3 }}
              />
            )}
          </Suspense>
        </button>
      </div>

      {/* Bottom controls */}
      <div
        className={`pi-controls-overlay ${showControls ? "" : "hidden"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          ref={progressRef}
          className="pi-progress-bar"
          onClick={handleProgressClick}
        >
          <div className="pi-buffered" style={{ width: `${buffered}%` }} />
          <div
            className="pi-progress-fill"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <div className="flex items-center gap-2">
          <Suspense fallback={<IconFallback />}>
            <button
              className="pi-ctrl-btn"
              onClick={togglePlay}
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? (
                <Icon
                  icon="tabler:player-pause-filled"
                  width={20}
                  color="white"
                />
              ) : (
                <Icon
                  icon="tabler:player-play-filled"
                  width={20}
                  color="white"
                />
              )}
            </button>
            <button
              className="pi-ctrl-btn"
              onClick={() => skip(-10)}
              aria-label="Back 10s"
            >
              <Icon
                icon="tabler:rotate-clockwise-2"
                width={18}
                color="white"
                style={{ transform: "scaleX(-1)" }}
              />
            </button>
            <button
              className="pi-ctrl-btn"
              onClick={() => skip(10)}
              aria-label="Forward 10s"
            >
              <Icon icon="tabler:rotate-clockwise-2" width={18} color="white" />
            </button>
          </Suspense>

          <span
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.85)",
              fontWeight: 400,
              marginLeft: 4,
              letterSpacing: "0.02em",
            }}
          >
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <div className="flex-1" />

          <Suspense fallback={<IconFallback />}>
            <button
              className="pi-ctrl-btn"
              onClick={toggleMute}
              aria-label="Toggle mute"
            >
              {muted || volume === 0 ? (
                <Icon icon="tabler:volume-3" width={18} color="white" />
              ) : volume < 0.5 ? (
                <Icon icon="tabler:volume-2" width={18} color="white" />
              ) : (
                <Icon icon="tabler:volume" width={18} color="white" />
              )}
            </button>
          </Suspense>

          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={muted ? 0 : volume}
            onChange={handleVolume}
            className="pi-volume-slider"
            style={{ "--vol": `${(muted ? 0 : volume) * 100}%` }}
          />

          <Suspense fallback={<IconFallback />}>
            <button
              className="pi-ctrl-btn"
              onClick={toggleFullscreen}
              aria-label="Fullscreen"
            >
              {isFullscreen ? (
                <Icon icon="tabler:arrows-minimize" width={18} color="white" />
              ) : (
                <Icon icon="tabler:arrows-maximize" width={18} color="white" />
              )}
            </button>
          </Suspense>
        </div>
      </div>
    </div>
  );
};
const frameworkIcons = {
  React: {
    icon: SiReact,
    color: "#61DAFB",
  },
  "Next.js": {
    icon: SiNextdotjs,
    color: "#000000",
  },
  TypeScript: {
    icon: SiTypescript,
    color: "#3178C6",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  GSAP: {
    icon: SiGsap,
    color: "#88CE02",
  },
  Clerk: {
    icon: SiClerk,
  },
  "Socket.io": {
    icon: SiSocketdotio,
  },
  PyTorch: {
    icon: SiPytorch,
    color: "#fcba03",
  },
  Python: {
    icon: SiPython,
    color: "#3776AB",
  },
  Flask: {
    icon: SiFlask,
  },
  Axios: {
    icon: SiAxios,
    color: "#5A29E4",
  },
  Zod: {
    icon: SiZod,
    color: "#3068B7",
  },
  "React Query": {
    icon: SiReactquery,
    color: "#FF4154",
  },
  "Node.js": {
    icon: SiNodedotjs,
    color: "#339933",
  },
  "Express.js": {
    icon: SiExpress,
    color: "#000000",
  },
  MongoDB: {
    icon: SiMongodb,
    color: "#47A248",
  },
  JWT: {
    icon: SiJsonwebtokens,
    color: "#D63AFF",
  },
  Stripe: {
    icon: SiStripe,
    color: "#635BFF",
  },
  Cloudinary: {
    icon: SiCloudinary,
    color: "#3448C5",
  },
  "Prisma ORM": {
    icon: SiPrisma,
    color: "#3448C5",
  },
};
// ─── Main component ───────────────────────────────────────────────────────────
const ProjectInfo = () => {
  const rootRef = useRef(null);
  const navRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const tagsRef = useRef(null);
  const heroDescRef = useRef(null);
  const videoSectionRef = useRef(null);
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const highlightsTitleRef = useRef(null);
  const highlightsGridRef = useRef(null);
  const ctaRef = useRef(null);
  const bgImageRef = useRef(null);
  const bgImageInnerRef = useRef(null);

  const { slug } = useParams();
  const navigate = useNavigate();
  // useMemo so the find() only re-runs when slug changes
  const project = projects.find((p) => toSlug(p.name) === slug);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  // GSAP animations
  useGSAP(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      const run = () => {
        const splits = [];

        if (labelRef.current) {
          const sLabel = new SplitText(labelRef.current, { type: "chars" });
          splits.push(sLabel);
          gsap.from(sLabel.chars, {
            yPercent: 120,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.02,
          });
        }

        if (titleRef.current) {
          const sTitle = new SplitText(titleRef.current, {
            type: "lines,words",
            linesClass: "overflow-hidden",
          });
          splits.push(sTitle);
          gsap.from(sTitle.words, {
            yPercent: 110,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            stagger: 0.06,
            delay: 0.1,
          });
        }

        if (bgImageRef.current && bgImageInnerRef.current) {
          gsap.fromTo(
            bgImageRef.current,
            {
              y: 80,
              opacity: 0,
              clipPath: "inset(12% 12% 12% 12% round 32px)",
            },
            {
              y: 0,
              opacity: 1,
              clipPath: "inset(0% 0% 0% 0% round 32px)",
              duration: 1.4,
              ease: "power4.out",
              delay: 0.25,
            },
          );
          gsap.fromTo(
            bgImageInnerRef.current,
            { scale: 0.96 },
            { scale: 1, duration: 1.8, ease: "power3.out", delay: 0.2 },
          );
          gsap.to(bgImageInnerRef.current, {
            scale: 1.25,
            ease: "none",
            scrollTrigger: {
              trigger: bgImageRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          });
        }

        if (navRef.current)
          gsap.from(navRef.current, {
            y: -20,
            duration: 0.7,
            ease: "power2.out",
          });

        if (tagsRef.current) {
          gsap.to(tagsRef.current.querySelectorAll(".pi-tag"), {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.08,
            delay: 0.5,
          });
        }

        if (heroDescRef.current) {
          const sDesc = new SplitText(heroDescRef.current, { type: "lines" });
          splits.push(sDesc);
          gsap.from(sDesc.lines, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            delay: 0.6,
          });
        }

        if (videoSectionRef.current) {
          gsap.fromTo(
            videoSectionRef.current,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: videoSectionRef.current,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }

        [aboutRef.current, techRef.current].forEach((section) => {
          if (!section) return;
          section.querySelectorAll("h2, h3").forEach((h) => {
            const s = new SplitText(h, { type: "words,chars" });
            splits.push(s);
            gsap.from(s.chars, {
              scrollTrigger: {
                trigger: h,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              yPercent: 100,
              opacity: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.015,
            });
          });
          section.querySelectorAll("p").forEach((p) => {
            const s = new SplitText(p, { type: "lines" });
            splits.push(s);
            gsap.from(s.lines, {
              scrollTrigger: {
                trigger: p,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
              y: 24,
              opacity: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.06,
            });
          });
        });

        if (highlightsTitleRef.current) {
          const sH = new SplitText(highlightsTitleRef.current, {
            type: "chars,words",
          });
          splits.push(sH);
          gsap.from(sH.chars, {
            scrollTrigger: {
              trigger: highlightsTitleRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            yPercent: 110,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.02,
          });
        }

        if (highlightsGridRef.current) {
          gsap.from(Array.from(highlightsGridRef.current.children), {
            scrollTrigger: {
              trigger: highlightsGridRef.current,
              start: "-140px 70%",
            },
            y: 60,
            opacity: 1,
            scale: 0.96,
            duration: 0.8,
            stagger: 0.12,
          });
        }

        if (ctaRef.current) {
          gsap.from(ctaRef.current, {
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        }

        // Refresh after fonts ensure correct measurements
        document.fonts.ready.then(() => ScrollTrigger.refresh());

        return () => splits.forEach((s) => s.revert?.());
      };

      document.fonts?.ready ? document.fonts.ready.then(run) : run();
    }, rootRef);

    return () => ctx.revert();
  }, [project, slug]);

  // ── 404 ──
  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-800 mb-4">
            Project not found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="text-sm uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="min-h-screen bg-white"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Back nav */}
      <div
        ref={navRef}
        className="px-8 md:px-16 py-6 flex items-center justify-between border-b border-black/8"
      >
        <button className="pi-back-btn" onClick={() => navigate(-1)}>
          <Suspense fallback={<IconFallback />}>
            <Icon icon="tabler:arrow-left" width={14} />
          </Suspense>
          All Work
        </button>
        <span className="text-xs text-gray-400 tracking-widest uppercase">
          {project.name}
        </span>
      </div>

      {/* Hero */}
      <div className="pi-hero-gradient px-8 md:px-16 pt-12 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-2">
            <div ref={labelRef} className="pi-gradient-badge">
              {project.case}
            </div>
          </div>
          <h1
            ref={titleRef}
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            className="text-4xl md:text-6xl text-black leading-tight mt-4 mb-6"
          >
            {project.name}
          </h1>

          {/* Background image */}
          <div
            ref={bgImageRef}
            className="relative overflow-hidden rounded-3xl border border-black/10 mb-8 mt-8"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />
            <img
              ref={bgImageInnerRef}
              src={project.bgImage}
              alt={`${project.name} background`}
              className="w-full h-[260px] md:h-[420px] object-cover will-change-transform"
              loading="eager" // hero image — load immediately
              decoding="async"
            />
            <div className="absolute bottom-0 left-0 z-20 p-6 md:p-10">
              <p className="text-white/70 uppercase tracking-[0.3em] text-xs mb-2">
                Project Showcase
              </p>
              <h2
                className="text-white text-2xl md:text-4xl leading-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 500,
                }}
              >
                {project.name}
              </h2>
            </div>
          </div>
          {/* Tags */}
          <TooltipProvider>
            <div ref={tagsRef} className="mb-8 flex flex-wrap gap-2">
              {project.frameworks.map((fw) => {
                const framework = frameworkIcons[fw.name];
                if (!framework) return null;

                const Icon = framework.icon;

                return (
                  <Tooltip key={fw.id}>
                    <TooltipTrigger asChild>
                      <span className="pi-tag flex cursor-pointer items-center gap-2 transition-all duration-200 hover:scale-105">
                        <Icon size={18} color={framework.color || ""} />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>{fw.name}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </TooltipProvider>
          {/* <div ref={tagsRef} className="mb-8 flex flex-wrap gap-2">
            {project.frameworks.map((fw) => {
              const framework = frameworkIcons[fw.name];
              if (!framework) return null;
              const Icon = framework.icon;
              return (
                <span
                  key={fw.id}
                  className="pi-tag hover:scale-101! transition-all duration-200 ease-linear flex items-center gap-2"
                >
                  <Icon size={18} color={framework.color} />
                </span>
              );
            })}
          </div> */}
          <p
            ref={heroDescRef}
            className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl font-light"
          >
            {project.description}
          </p>
        </div>
      </div>

      {/* Main content */}
      <main>
        <div className="max-w-5xl mx-auto px-8 md:px-16 py-14">
          {/* Video / fallback image */}
          {project.video ? (
            <section ref={videoSectionRef} className="mb-16">
              <p className="pi-section-label">Project Demo</p>
              <VideoPlayer src={project.video} />
            </section>
          ) : (
            <div
              className="mb-16 relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "16/9" }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="pi-img-overlay" />
            </div>
          )}

          {/* About + Tech */}
          <section ref={aboutRef} className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <p className="pi-section-label">About the Project</p>
              <div className="pi-accent-line" />
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 28,
                  fontWeight: 500,
                }}
                className="text-black mb-5 leading-snug"
              >
                Overview
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px] font-light mb-4">
                {project.overview_One}
              </p>
              <p className="text-gray-500 leading-relaxed text-[15px] font-light">
                {project.overview_Two || ""}
              </p>
            </div>

            <section ref={techRef}>
              <p className="pi-section-label">Tech Stack</p>
              <div className="pi-accent-line" />
              <div className="flex flex-col gap-3">
                {project.frameworks.map((fw, i) => (
                  <div
                    key={fw.id}
                    className="flex items-center justify-between py-3 border-b border-black/8"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <span className="text-sm font-medium text-gray-800">
                      {fw.name}
                    </span>
                    <span
                      className="text-xs text-gray-400"
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </section>

          <div
            className="w-full h-px mb-16"
            style={{
              background:
                "linear-gradient(to right, transparent, #d0cfc9, transparent)",
            }}
          />

          {/* Highlights */}
          <section className="mb-16">
            <p ref={highlightsTitleRef} className="pi-section-label">
              Highlights
            </p>
            <div className="pi-accent-line" />
            <div ref={highlightsGridRef} className="grid md:grid-cols-3 gap-6">
              {project.highlights.map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl border border-black/8 hover:border-black/20 transition-colors"
                  style={{
                    background: "linear-gradient(135deg, #fefefe, #f9f8f5)",
                  }}
                >
                  <div className="mb-4">
                    <Suspense fallback={<IconFallback />}>
                      <Icon
                        icon={item.icon}
                        width={28}
                        className="text-gray-700"
                      />
                    </Suspense>
                  </div>
                  <h3 className="font-medium text-black text-[15px] mb-2">
                    {item.label}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          {project.href && (
            <div ref={ctaRef} className="flex justify-center pt-4">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white text-sm tracking-widest uppercase rounded-full hover:bg-gray-800 transition-colors"
              >
                View Live Project
                <Suspense fallback={<IconFallback />}>
                  <Icon icon="tabler:arrow-up-right" width={16} />
                </Suspense>
              </a>
            </div>
          )}
        </div>
      </main>

      <div
        className="w-full h-2 mt-8"
        style={{
          background: "linear-gradient(90deg, #e8e4dc, #d0ccc2, #e8e4dc)",
        }}
      />
    </div>
  );
};

export default ProjectInfo;
