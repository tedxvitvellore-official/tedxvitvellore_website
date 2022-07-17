import React from "react";

function Member({ imgURL, name }) {
  return (
    <div className="flex flex-col items-center justify-around min-h-1/2">
      <img src={imgURL} alt={imgURL} className="rounded-full" />
      <div className="font-bold">{name}</div>
    </div>
  );
}

export default Member;
