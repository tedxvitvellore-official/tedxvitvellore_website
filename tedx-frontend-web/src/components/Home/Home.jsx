import React from "react";
import About from "../About/About";
import HeroSection from "../Hero/HeroSection";
import PastEvents from "../PastEvents/PastEvents";

function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <PastEvents />
    </div>
  );
}

export default Home;
