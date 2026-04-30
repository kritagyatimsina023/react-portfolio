import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        trigger: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        trigger: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: {
        trigger: "#title-service-3",
        start: "top 75%",
        // markers: true,
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: {
        trigger: "#title-service-4",
        start: "top 80%",

        scrub: true,
      },
    });
    gsap.to("#title-service-5", {
      xPercent: 100,
      scrollTrigger: {
        trigger: "#title-service-5",
        start: "top 80%",
        scrub: true,
      },
    });
  });
  return (
    <section
      className=" mt-20 overflow-hidden font-light 
    leading-snug text-center mb-42 contact-text-responsive"
    >
      <div id="title-service-1">
        <p>Fullstack</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="font-normal">Development</p>
        <div className="w-10 h-1 md:w-32 bg-gold"></div>
        <p>Deployment</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-288"
      >
        <p>APIS</p>
        <div className="w-10 h-1 md:w-32 bg-gold"></div>
        <p className="italic">Frontends</p>
        <div className="w-10 h-1 md:w-32 bg-gold"></div>
        <p>Scalability</p>
      </div>
      <div id="title-service-4" className="translate-x-48">
        <p>Databases</p>
      </div>
      <div
        id="title-service-5"
        className="flex items-center justify-center gap-3 -translate-x-48"
      >
        <p className="italic">Research based</p>
        <div className="w-10 h-1 md:w-32 bg-gold"></div>
        <p>AI/ML</p>
      </div>
      {/* <div id="title-service-1">
        <p>Full-Stack Architecture</p>
      </div>

      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3"
      >
        <p className="font-normal">Frontend (React / Next.js)</p>
        <div className="w-10 h-1 md:w-32 bg-gold"></div>
        <p>Backend (Node.js)</p>
      </div>

      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3"
      >
        <p>REST / APIs</p>
        <div className="w-10 h-1 md:w-32 bg-gold"></div>
        <p className="italic">Databases</p>
        <div className="w-10 h-1 md:w-32 bg-gold"></div>
        <p>System Design</p>
      </div>

      <div id="title-service-4">
        <p>Scalable Web Applications</p>
      </div> */}
    </section>
  );
};

export default ServiceSummary;
