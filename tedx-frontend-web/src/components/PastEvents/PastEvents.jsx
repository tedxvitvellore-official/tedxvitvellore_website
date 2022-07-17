import React from "react";
import "tw-elements";
import { Carousel } from "3d-react-carousal";
import meraki from "../../assets/meraki_logo.png";
import divergent from "../../assets/divergent_logo.png";
import envisage from "../../assets/envisage_logo.png";
import reunited from "../../assets/reunited_logo.png";
import ripple from "../../assets/ripple_logo.png";

function PastEvents() {
  let slides = [
    <img src={meraki} className="h-64 bg-black" alt="1" />,
    <img src={divergent} className="h-64 bg-black" alt="2" />,
    <img src={envisage} className="h-64 bg-black" alt="3" />,
    <img src={reunited} className="h-64 bg-black" alt="4" />,
  ];

  const callback = function (index) {
    console.log("callback", index);
  };
  return (
    <div className="bg-black flex flex-col items-center justify-around">
      <div className="border-pm border-b-2 font-bold text-4xl mt-2">Past Events</div>
      <Carousel
        slides={slides}
        autoplay={false}
        interval={5000}
        onSlideChange={callback}
        arrows={true}
        
      />
    </div>
  );
}

export default PastEvents;
