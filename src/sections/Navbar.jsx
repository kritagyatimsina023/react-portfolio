import React, { useEffect, useRef, useState } from "react";
import { socials } from "../contants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  //   console.log(linksRef);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconsTimeline = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], { autoAlpha: 0, x: -20 }); //autoAlpha is shortcut for opacity=0 and visibility=hidden
    tl.current = gsap
      .timeline({ paused: true }) // helps in controlling the animation manually
      .to(navRef.current, { xPercent: 0, duration: 1, ease: "power3.out" })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<", // start the animation at the same time of the previous animation
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2", //start the animation after 0.2 sec after the previous animation
      );
    iconsTimeline.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          ease: "power2.inOut",
          duration: 0.3,
        },
        "<",
      );
  }, []);
  const handleNavClick = (section) => {
    // if already on home page
    if (location.pathname === "/") {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // go home with hash
      navigate(`/#${section}`);
    }

    // close menu
    if (isOpen) {
      tl.current.reverse();
      iconsTimeline.current.reverse();
      setIsOpen(false);
    }
  };
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true, // optimized scrolling performance
    });
    // for cleaning up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconsTimeline.current.reverse();
    } else {
      tl.current.play();
      iconsTimeline.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between w-full h-full px-10
       uppercase bg-black
     text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2"
      >
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
          {["home", "services", "about", "work", "contact"].map(
            (section, index) => (
              <div ref={(el) => (linksRef.current[index] = el)} key={index}>
                {/* <Link
                  to={`/${section}`}
                  smooth
                  offset={0}
                  duration={2000}
                  className="transition-all duration-300 cursor-pointer hover:text-white"
                >
                  {section}
                </Link> */}
                <div
                  onClick={() => handleNavClick(section)}
                  className="transition-all duration-300 cursor-pointer hover:text-white"
                >
                  {section}
                </div>
              </div>
            ),
          )}
        </div>
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider">E-mail</p>
            <p className="text-xl tracking-widest lowercase text-pretty">
              kritagyatimsina@gmail.com
            </p>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2 mt-3">
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
      </nav>
      <div
        onClick={toggleMenu}
        className="fixed z-50 flex flex-col justify-center items-center gap-1 transition-all top-8 right-10
       duration-300 bg-black rounded-full cursor-pointer w-12 h-12 md:w-18 md:h-18"
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0.9% at 50% 50%)" }
        }
      >
        <span
          ref={topLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
        <span
          ref={bottomLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
      </div>
    </>
  );
};

export default Navbar;
