// import { ArrowRight, ArrowUpRight } from "lucide";
// import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
// import { projects } from "../contants";
// import { Icon } from "@iconify-icon/react";
// import { useRef, useState } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// // import { overlay } from "three/tsl";

// const Works = () => {
//   const [currentIndex, setCurrentIndex] = useState(null);
//   const previewRef = useRef(null);
//   const text = `Featured projects
//     that have been meticulously
// crafted with passion to drive
// results and impact.`;
//   const move_X = useRef(null);
//   const move_Y = useRef(null);
//   const overlayRef = useRef([]);
//   const mouse = useRef({ x: 0, y: 0 });

//   useGSAP(() => {
//     // since on moving the mouse cursor the value is continuously changing so use quickTo
//     move_X.current = gsap.quickTo(previewRef.current, "x", {
//       duration: 1.5,
//       ease: "power3.out",
//     });
//     move_Y.current = gsap.quickTo(previewRef.current, "y", {
//       duration: 2,
//       ease: "power3.out",
//     });
//     gsap.from("#project", {
//       y: 100,
//       opacity: 0,
//       delay: 0.5,
//       duration: 1,
//       stagger: 0.3,
//       ease: "back.out",
//       scrollTrigger: {
//         trigger: "#project",
//       },
//     });
//   }, []);

//   const handleMouseEnter = (idx) => {
//     if (window.innerWidth < 768) return;
//     setCurrentIndex(idx);
//     const el = overlayRef.current[idx];
//     if (!el) return;
//     // kill any existing animtaion on this element
//     gsap.killTweensOf(el);
//     gsap.fromTo(
//       el,
//       {
//         clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
//       },
//       {
//         clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
//         duration: 0.15,
//         ease: "power2.out",
//       }
//     );
//     gsap.to(previewRef.current, {
//       opacity: 1,
//       scale: 1,
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   };
//   const handleMouseLeave = (idx) => {
//     if (window.innerWidth < 768) return;
//     setCurrentIndex(null);
//     const el = overlayRef.current[idx];
//     if (!el) return;
//     // kill any existing animtaion on this element
//     gsap.killTweensOf(el);
//     gsap.to(el, {
//       clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
//       duration: 0.2,
//       ease: "power2.in",
//     });
//     gsap.to(previewRef.current, {
//       opacity: 0,
//       scale: 0.5,
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   };
//   const handleMouseMove = (e) => {
//     if (window.innerWidth < 768) return;
//     mouse.current.x = e.clientX + 24; // pushing this image slightly away from the cursor
//     console.log(e.clientX);
//     mouse.current.y = e.clientY + 24;
//     move_X.current(mouse.current.x);
//     move_Y.current(mouse.current.y);
//   };

//   return (
//     <section id="work" className="flex flex-col min-h-screen">
//       <AnimatedHeaderSection
//         subTitle={"Logic meets Aesthetics, Seamlessly"}
//         title={"Works"}
//         text={text}
//         textColor={"text-black"}
//       />
//       <div
//         onMouseMove={handleMouseMove}
//         className="relative flex flex-col font-light"
//       >
//         {projects.map((project, idx) => (
//           <div
//             key={project.id}
//             id="project"
//             className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
//             onMouseEnter={() => handleMouseEnter(idx)}
//             onMouseLeave={() => handleMouseLeave(idx)}
//           >
//             {/* overlay  */}
//             <div
//               ref={(el) => {
//                 overlayRef.current[idx] = el;
//               }}
//               className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
//             ></div>

//             {/* title  */}
//             <div className="flex justify-between items-center px-10 text-black transition-all duration-500 md:group-hover:px-12 group-hover:text-white">
//               <h2 className="lg:text-[32px] text-[26px] leading-9">
//                 {project.name}
//               </h2>
//               <Icon icon="tabler:arrow-up-right" className="md:size-6 size-5" />
//             </div>
//             {/* divider  */}
//             <div className="w-full h-0.5 bg-black/80" />
//             {/* framework  */}
//             <div className="flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-10">
//               {project.frameworks.map((framework) => (
//                 <p
//                   key={framework.id}
//                   className="text-black transition-colors
//                    duration-500 md:group-hover:text-white"
//                 >
//                   {framework.name}
//                 </p>
//               ))}
//             </div>
//             {/* Mobile preview image  */}
//             <div className="relative flex items-center justify-center px-10 md:hidden h-[400px]">
//               <img
//                 className="object-cover w-full h-full rounded-md brightness-50"
//                 src={project.bgImage}
//                 alt={`${project.name}`}
//               />
//               <img
//                 src={project.image}
//                 alt={`${project.name}-image`}
//                 className="absolute bg-center px-14 rounded-xl"
//               />
//             </div>
//           </div>
//         ))}
//         {/* desktop floating img  */}

//         {projects[currentIndex] && projects[currentIndex].video ? (
//           <div
//             ref={previewRef}
//             className="fixed -top-2/6 left-0 z-50 overflow-hidden opacity-0 border-8 border-black
//         pointer-events-none w-[960px] md:block hidden"
//           >
//             {currentIndex !== null && (
//               <video
//                 src={projects[currentIndex].video}
//                 autoPlay
//                 loop
//                 muted
//                 className="object-cover w-full h-full "
//               />
//               // <img
//               //   src={projects[currentIndex].image}
//               //   alt={`preview`}
//               //   className="object-cover w-full h-full "
//               // />
//             )}
//           </div>
//         ) : (
//           <div
//             ref={previewRef}
//             className="fixed -top-2/6 left-0 z-50 overflow-hidden opacity-0 border-8 border-black
//         pointer-events-none w-[960px] md:block hidden"
//           >
//             {currentIndex !== null && (
//               <img
//                 src={projects[currentIndex].image}
//                 alt={`preview`}
//                 className="object-cover w-full h-full "
//               />
//             )}
//           </div>
//         )}

//         {/* <div
//           ref={previewRef}
//           className="fixed -top-2/6 left-0 z-50 overflow-hidden opacity-0 border-8 border-black
//         pointer-events-none w-[960px] md:block hidden"
//         >
//           {currentIndex !== null && (
//             <img
//               src={projects[currentIndex].image}
//               alt={`preview`}
//               className="object-cover w-full h-full "
//             />
//           )}
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Works;
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../contants";
import { Icon } from "@iconify-icon/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toast";

// Helper: convert project name to URL slug
export const toSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const previewRef = useRef(null);
  const navigate = useNavigate();
  const hasShownToast = useRef(false);
  const [videoLoading, setVideoLoading] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoDelayTimer = useRef(null);

  const text = `Featured projects 
    that have been meticulously
crafted with passion to drive
results and impact.`;
  const move_X = useRef(null);
  const move_Y = useRef(null);
  const overlayRef = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  useGSAP(() => {
    move_X.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    move_Y.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });
    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseEnter = (idx) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(idx);
    setVideoLoading(true);
    setVideoReady(false);

    const el = overlayRef.current[idx];
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" },
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
        duration: 0.15,
        ease: "power2.out",
      },
    );
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    // Wait 3 seconds before marking video as ready to play
    clearTimeout(videoDelayTimer.current);
    videoDelayTimer.current = setTimeout(() => {
      setVideoReady(true);
      setVideoLoading(false);
    }, 3000);
  };

  const handleMouseLeave = (idx) => {
    if (window.innerWidth < 768) return;
    clearTimeout(videoDelayTimer.current); // cancel pending delay
    setCurrentIndex(null);
    setVideoReady(false);
    setVideoLoading(false);

    const el = overlayRef.current[idx];
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
      duration: 0.2,
      ease: "power2.in",
    });
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    move_X.current(mouse.current.x);
    move_Y.current(mouse.current.y);
  };

  const handleProjectClick = (project) => {
    navigate(`/project/${toSlug(project.name)}`);
  };
  // useEffect(() => {
  //   if (currentIndex === null) return;

  //   const video = document.createElement("video");
  //   video.src = projects[currentIndex]?.video;
  //   video.preload = "auto";
  //   video.oncanplaythrough = () => {
  //     setVideoReady(true);
  //     setVideoLoading(false);
  //   };
  // }, [currentIndex]);

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Blending logic with aesthetic precision"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
      />
      <div
        onMouseMove={handleMouseMove}
        className="relative flex flex-col font-light "
      >
        {projects.map((project, idx) => (
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0 "
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            onClick={() => handleProjectClick(project)}
          >
            {/* overlay */}
            <div
              // onMouseEnter={showMessage}
              ref={(el) => {
                overlayRef.current[idx] = el;
              }}
              className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
            ></div>

            {/* title */}
            <div className="flex justify-between items-center px-10 text-black transition-all duration-500 md:group-hover:px-12 group-hover:text-white">
              <h2 className="lg:text-[32px] text-[26px] leading-9">
                {project.name}
              </h2>
              <div className="flex items-center">
                <Icon
                  icon="tabler:arrow-up-right"
                  className="md:size-6 size-5"
                />
                <p className="ml-2 leading-9">Details</p>
              </div>
            </div>
            {/* divider */}
            <div className="w-full h-0.5 bg-black/80" />
            {/* framework */}
            <div className="flex px-10  flex flex-col gap-3 md:flex-row  text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-10">
              {project.summary_Frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-black transition-colors duration-500 md:group-hover:text-white"
                >
                  {framework.name}
                </p>
              ))}
            </div>
            {/* Mobile preview image */}
            <div className="relative flex items-center justify-center px-10 md:hidden h-[400px]">
              <img
                className="object-cover w-full h-full rounded-md brightness-50"
                src={project.bgImage}
                alt={`${project.name}`}
              />
              <img
                src={project.image}
                alt={`${project.name}-image`}
                className="absolute bg-center px-14 rounded-xl"
              />
            </div>
          </div>
        ))}

        {/* Desktop floating preview */}
        {/* {projects[currentIndex] && projects[currentIndex].video ? (
          <div
            ref={previewRef}
            className="fixed -top-2/6 left-0 z-50 overflow-hidden opacity-0 border-8 border-black pointer-events-none w-[960px] md:block hidden"
          >
            {currentIndex !== null && (
              <video
                src={projects[currentIndex].video}
                autoPlay
                loop
                muted
                className="object-cover w-full h-full"
              />
            )}
          </div>
        ) : (
          <div
            ref={previewRef}
            className="fixed -top-2/6 left-0 z-50 overflow-hidden opacity-0 border-8 border-black pointer-events-none w-[960px] md:block hidden"
          >
            {currentIndex !== null && (
              <img
                src={projects[currentIndex]?.image}
                alt={`preview`}
                className="object-cover w-full h-full"
              />
            )}
          </div>
        )} */}
        {/* Desktop floating preview */}
        <div
          ref={previewRef}
          className="fixed -top-2/6 left-0 z-50 overflow-hidden opacity-0 border-8 border-black pointer-events-none w-[960px] md:block hidden"
        >
          {currentIndex !== null && (
            <>
              {projects[currentIndex]?.video && !videoReady && (
                <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
                  <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                </div>
              )}

              {/* Video */}
              {projects[currentIndex]?.video ? (
                <video
                  key={currentIndex} // forces remount on project change
                  src={projects[currentIndex].video}
                  autoPlay
                  loop
                  muted
                  onCanPlay={() => {
                    setVideoReady(true);
                    setVideoLoading(false);
                  }}
                  className={`object-cover w-full h-full transition-opacity duration-300 ${
                    videoReady ? "opacity-100" : "opacity-0"
                  }`}
                />
              ) : (
                <img
                  src={projects[currentIndex]?.image}
                  alt="preview"
                  className="object-cover w-full h-full"
                />
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
