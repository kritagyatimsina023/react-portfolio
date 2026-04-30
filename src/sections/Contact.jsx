import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { contacts, socials } from "../contants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  const text = `Got a question, how or project Idea?
WE’D love to hear from you and discus further!`;
  const items2 = [
    "Just Imagine i code",
    "Just Imagine i code",
    "Just Imagine i code",
    "Just Imagine i code",
  ];
  const contactRef = useRef(null);
  useGSAP(() => {
    gsap.from(contactRef.current.children, {
      y: 100,
      stagger: 0.3,
      ease: "back.out",
      opacity: 0,
      duration: 2,
      delay: 0.5,
      scrollTrigger: {
        trigger: contactRef.current,
      },
    });
  }, []);

  return (
    <section id="contact" className="section-contact  min-h-screen bg-black">
      <AnimatedHeaderSection
        withScrollTrigger={true}
        title={"contact"}
        subTitle={"You Dream It, I Code it"}
        text={text}
        textColor={"text-white"}
      />
      <div className="" ref={contactRef}>
        {contacts.map((items, idx) => (
          <div
            className="text-white text-3xl font-light 
            px-8 md:px-9 
            leading-10 flex flex-col gap-2 mb-10  "
            key={idx}
          >
            <p className="uppercase text-"> {items.name}</p>
            <div className="bg-white/60 w-full h-[1px]"></div>
            <p className="tracking-wider text-2xl">{items.contactInfo}</p>
          </div>
        ))}
        <div
          className="text-white text-3xl font-light 
            px-8 md:px-9 
            leading-10 flex flex-col gap-2 mb-10"
        >
          <p className="uppercase text-">Social Media</p>
          <div className="bg-white/60 w-full h-[1px]"></div>
          <div className="tracking-wider text-white flex gap-4 mt-3">
            {socials.map((item, i) => {
              const Icon = item.icon;
              return (
                <a key={i} href={item.href}>
                  <Icon size={30} color="white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-white bg-transparent"
        iconclassName="stroke:gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default Contact;
