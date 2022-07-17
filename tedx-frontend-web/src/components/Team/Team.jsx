import React from "react";
import Member from "../Member/Member";

function Team() {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-around w-full md:px-52 px-20 ">
      <div className="border-pm border-b-2 font-bold text-4xl mt-2 text-center">
        Our Team
      </div>
      <div className="mt-4">Lead Organizer Licensee</div>
      <Member />
    </div>
  );
}

export default Team;
