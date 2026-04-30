import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedTextSlide from "../components/AnimatedTextSlide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imgRef = useRef(null);
  const text = `I care about clean architecture and real-world scalability  
Building fast, reliable full-stack systems  
from concept to production`;
  // const aboutTxt = `Obsessed with building fast, intuitive apps—from pixel-perfect React UIs to bulletproof serverless backends. Every line of code is a promise: quality that users feel.
  // When I’m not shipping:
  // ⚡️ Open-sourcing my latest experiment (or hacking on yours)
  // 🎥 Teaching devs on Twitch/YouTube—because rising tides lift all ships
  // 🧗 Rock climbing (problem-solving with real stakes)
  // 🎸 Strumming chords while CI pipelines pass (multitasking at its finest)`;

  const aboutTxt = `  Focused on building fast, intuitive applications,from responsive React interfaces to scalable backend systems. Every line of code is written with performance, clarity, and user experience in mind.
When I’m not shipping:
Football matches or late-night gaming sessions
Lifting weights and staying consistent with bodybuilding
Exploring new tech stacks and side projects for fun`;

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
      },
      ease: "power1.inOut",
    });
    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100% , 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: imgRef.current,
      },
    });
  }, []);
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Turning ideas into scalable products"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          className="w-md rounded-3xl"
          src="/images/man.jpg"
          alt=""
        />
        <AnimatedTextSlide text={aboutTxt} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
