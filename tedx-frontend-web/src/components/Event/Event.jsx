import React from "react";

function Event({ imgURL, desc, dates, classStyle }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around w-3/4 text-white mt-20">
      <div className="flex flex-col items-center justify-around w-1/2">
        <img src={imgURL} alt="imgURL" className={classStyle}/>
      </div>
      <div className="pl-4 pt-10 flex flex-col">
      <div className=" max-w-lg text-center md:text-left">{desc}</div>
      <div className="flex items-center ">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
      </svg>
        <div className="text-pm py-8 text-xl text-center md:text-left px-2">{dates}</div>  
      </div>
      </div>
      
    </div>
  );
}

export default Event;
