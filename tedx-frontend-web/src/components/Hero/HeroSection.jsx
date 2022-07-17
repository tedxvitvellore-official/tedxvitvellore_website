import React from "react";
import ripple from "../../assets/ripple_logo.png";
import Wave from "react-wavify";

function HeroSection() {
  return (
    <div className="flex flex-col h-full items-center justify-around bg-black">
      <img src={ripple} className="w-1/3" alt="ripple_logo" />

      <div className="flex flex-col md:flex-row justify-around w-1/2">
        <div className="flex flex-col items-center md:flex-wrap">
          <div className="hidden md:block font-bold text-4xl mb-4">Ripple</div>
        
          <div className="text-pd mb-4">24th July</div>
          <a
            href="http://localhost:3000/"
            target="_blank"
            rel="noreferrer"
            className="py-4 px-6 text-lg rounded-md font-semibold bg-pm max-w-1/2"
          >
            Register
          </a>
        </div>
        <div className="text-sm md:text-base p-4 text-center md:text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          distinctio atque laboriosam laborum, excepturi aliquid iusto ipsam
          porro ullam nisi qui voluptas tempora quas modi unde architecto, eos
          at molestiae nesciunt laudantium non dignissimos. Reprehenderit eos
          non consequuntur totam dolores iure quae tenetur alias mollitia
          aspernatur. Incidunt assumenda mollitia saepe!f
        </div>
      </div>
      <Wave
        fill="#E62B1E"
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
