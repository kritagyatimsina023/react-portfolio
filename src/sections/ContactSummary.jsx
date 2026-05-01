import { useRef } from "react";

import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Innovation",
    "Precision",
    "Excellence",
    "Collaboration",
    "Creativity",
    "Performance",
    "Scalability",
    "Impact",
  ];

  const items2 = [
    "Get in touch",
    "Send a message",
    "Start a project",
    "Let’s collaborate",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center", // end position is after 800px later
        scrub: 0.5,
        pin: true,
        pinSpacer: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col justify-between items-center min-h-screen gap-12 mt-16"
    >
      {/* marqueel  */}
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          "Let's build a <br />
          <span className="font-normal">performant & production-ready</span>
          <br />
          web applications together <br />
        </p>
      </div>
      <a
        href="/assets/resume/KritagyaTimsinaResume.pdf"
        download="Kritagya_Timsina_Resume.pdf"
        className="inline-block mt-6 px-6 py-2 text-sm font-medium border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
      >
        Download Resume (PDF)
      </a>
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconclassName="stroke:gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
