import React from "react";
import ripple from "../../assets/ripple_logo.png";
import Wave from "react-wavify";

function HeroSection() {
  return (
    <div className="flex flex-col h-screen items-center justify-around bg-black">
      <img src={ripple} className="w-4/5 md:w-3/5 lg:w-1/3" alt="ripple_logo" />

      <div className="flex flex-col md:flex-row justify-around w-4/5 md:w-3/4 lg:w-3/5">
        <div className="flex flex-col items-center md:flex-wrap">
          <div className="hidden md:block font-bold text-4xl mb-4">Ripple</div>

          <div className="text-am mb-4">24th July</div>
          <a
            href="https://bit.ly/3v02X9a"
            target="_blank"
            rel="noreferrer"
            className="py-4 px-6 text-lg rounded-md font-semibold bg-ad text-am max-w-1/2"
          >
            Register
          </a>
        </div>
        <div className="text-sm md:text-base p-4 text-center md:text-left">
          We tend to glance over the little things we do, the small actions that
          have massive consequences beyond the scope of our understanding.
          Smaller life choices can be analogized through ripples in water or a
          flap of a butterfly's wing. The concept that a butterfly's wings
          flapping can cause a tornado or a small ripple can spread through
          streams is at the core of the theme of the event.
        </div>
      </div>
      <Wave
        fill="#1E0644"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.5,
          points: 4,
        }}
      />
    </div>
  );
}

export default HeroSection;
