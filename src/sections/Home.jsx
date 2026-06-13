import Hero from "./Hero";
import ServiceSummary from "./ServiceSummary";
import Services from "./Services";
import About from "./About";
import Works from "./Works";
import ContactSummary from "./ContactSummary";
import Contact from "./Contact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      setTimeout(() => {
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <Works />
      <ContactSummary />
      <Contact />
    </>
  );
};

export default Home;
