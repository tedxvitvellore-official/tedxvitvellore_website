import React from "react";

function Member({ imgURL, name, title }) {
  return (
    <div className="flex flex-col items-center justify-around min-h-1/2 w-36 text-center md:mx-4">
      <img src={imgURL} alt={imgURL} className="rounded-full h-32 w-32 mt-4" />
      {title && <div className="text-pm break-words flex-wrap mt-4 font-medium text-">{title}</div>}
      <div className="font-bold text-white text-lg mt-4">{name}</div>
    </div>
  );
}

export default Member;
