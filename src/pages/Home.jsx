import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Solution from "../components/Solution";
import Stats from "../components/Stats";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Team from "../components/Team";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Solution />
      <Stats />
      {/* <Faqs /> */}
      <CTA />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
