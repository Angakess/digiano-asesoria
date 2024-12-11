import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div className="font-sans">
        <Header />
        <main>
          <Hero />
          <div data-aos="fade-up">
            <Services />
          </div>
          <div data-aos="fade-up">
            <About />
          </div>
          <div data-aos="fade-up">
            <CallToAction />
          </div>
          <div data-aos="fade-up">
            <Testimonials />
          </div>
          <div>
            <Contact />
          </div>
        </main>
        <SocialMedia />
        <Footer />
      </div>
    </>
  );
}

export default App;
