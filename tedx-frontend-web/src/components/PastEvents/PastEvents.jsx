import React from "react";
import "tw-elements";
import { Carousel } from "3d-react-carousal";
import meraki from "../../assets/meraki_logo.png"
import divergent from "../../assets/divergent_logo.png"
import envisage from "../../assets/envisage_logo.png"
import ripple from "../../assets/ripple_logo.png"


function PastEvents() {
  let slides = [
    <img src={meraki} className="h-64" alt="1" />,
    <img src={divergent} className="h-64" alt="2" />,
    <img src={envisage} className="h-64" alt="3" />,
    <img src={ripple} className="h-64" alt="4" />,
  ];

  const callback = function (index) {
    console.log("callback", index);
  };
  return (

    <Carousel slides={slides} autoplay={false} interval={5000} onSlideChange={callback} arrows={true}/>
  );
}

export default PastEvents;
