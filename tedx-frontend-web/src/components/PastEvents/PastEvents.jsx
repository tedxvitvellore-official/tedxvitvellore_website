import React from "react";
import "tw-elements";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import meraki from "../../assets/meraki_logo.png";
import divergent from "../../assets/divergent_logo.png";
import envisage from "../../assets/envisage_logo.png";
import reunited from "../../assets/reunited_logo.png";

function PastEvents() {
  return (
    <div className="bg-black flex flex-col items-center justify-around w-full">
      <div className="border-pm border-b-2 font-bold text-4xl my-12">
        Past Events
      </div>
      <Carousel
        className="w-1/3 flex flex-col items-center justify-center"
        autoPlay={true}
        infiniteLoop={true}
        useKeyboardArrows={true}
      >
        <img src={meraki} className="w-1/4 bg-black" alt="1" />

        <img src={divergent} className="w-1/4 bg-black" alt="2" />
        <img src={envisage} className="w-1/4 bg-black" alt="3" />
        <img src={reunited} className="w-1/4 bg-black" alt="4" />
      </Carousel>
    </div>
  );
}

export default PastEvents;
