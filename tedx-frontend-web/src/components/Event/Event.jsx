import React from "react";

function Event({ imgURL, desc, dates, classStyle }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around w-3/4 text-white mt-20">
      <div className="flex flex-col items-center justify-around w-1/2">
        <img src={imgURL} alt="imgURL" className={classStyle}/>
        <div className="text-pm py-8 text-3xl text-center md:text-left">{dates}</div>
      </div>
      <div className="pl-4 max-w-lg text-center md:text-left">{desc}</div>
    </div>
  );
}

export default Event;
