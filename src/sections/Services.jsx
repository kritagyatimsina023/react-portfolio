import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../contants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const text = `I build scalable full-stack applications  
and explore AI-driven systems using modern tech stacks  
focused on clean architecture, and real-world impact`;
  const serviceRef = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); // 768px
  useGSAP(() => {
    serviceRef.current.forEach((el) => {
      if (!el) return;
      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);
  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        withScrollTrigger={true}
        subTitle={"Building what users don’t see, but always feel"}
        title={"Service"}
        text={text}
        textColor={"text-white"}
      />
      {servicesData.map((service, idx) => (
        <div
          ref={(el) => (serviceRef.current[idx] = el)}
          key={idx}
          className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30 top-0"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${idx * 5}em)`,
                  marginBottom: `${(servicesData.length - idx - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.items.map((item, itemIdx) => (
                  <div key={`item-${idx}-${itemIdx}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIdx + 1}
                      </span>
                      {item.title}
                    </h3>
                    <h4 className="ml-12 mt-2 text-lg text-white/30">
                      {item.description}
                    </h4>
                    {itemIdx < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
