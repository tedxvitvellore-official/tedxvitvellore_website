import React from "react";
import Member from "../Member/Member";
import Karthikeyan from "../../assets/Board/Karthikeyan Sivashanmugam.jpg"
import Aman from "../../assets/Board/Aman Anand.jpg"
import Ria from "../../assets/Board/Ria Arun.jpg"
import Siddhant from "../../assets/Board/Siddhant Kumar.jpg"
import Sahil from "../../assets/Board/Sahil Mahajan.jpg"
import Varshaa from "../../assets/Board/Varshaa Moorthy.jpg"
import Aayushi from "../../assets/Board/Aayushi Pandit.jpg"
import Anmol from "../../assets/Board/Anmol Bhardwaj.jpg"
import Indrayudd from "../../assets/Board/Indrayudd Roy Chowdhury.jpg"
import Jatin from "../../assets/Board/Jatin Sohlot.jpg"
import Mainak from "../../assets/Board/Mainak Ghosh.jpg"
import Mohit from "../../assets/Board/Mohit Reddy.jpg"
import Oishika from "../../assets/Board/Oishika Sah.jpg"
import Palak from "../../assets/Board/Palak Teotia.jpg"
import Rishabh from "../../assets/Board/Rishabh Dhotrekar.jpg"
import Shrujal from "../../assets/Board/Shrujal.jpg"
import Tanishq from "../../assets/Board/Tanishq Agrawal.jpg"




function Team() {

  // code to import all images from a folder, but not working
  // function importAll(r) {
  //   let images = {};
  //    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  //   return images
  //  }
  //  const images = importAll(require.context('../../assets', false, /\.(png|jpe?g|svg)$/));
  return (
    <div className="bg-black text-white flex flex-col items-center justify-around w-full md:px-52 px-20 text-center">
      <div className="border-pm border-b-2 font-bold text-4xl mt-2 text-center">
        Our Team
      </div>
      <div className="mt-4 text-pm flex-wrap text-xl">Lead Organizer Licensee</div>
      <Member imgURL={Karthikeyan} name="Karthikeyan Sivashanmugam"/>
      <div className="mt-4 text-pm flex-wrap text-xl">Event Directors</div>
      <div className="flex flex-col md:flex-row lg:w-4/5 md:w-full justify-around items-center ">
        <Member imgURL={Aman} name="Aman Anand" className="" />
        <Member imgURL={Ria} name="Ria Arun"  className=""/>
      </div>
      <div className="mt-4 text-pm flex-wrap text-xl text-center">Associate Event Directors</div>
      <div className="flex w-full flex-wrap justify-around items-center border-pm border-b-2 pb-4 ">
        <Member imgURL={Siddhant} name="Siddhant Kumar" className="mx-4" />
        <Member imgURL={Sahil} name="Sahil Mahajan"  className="mx-4"/>
        <Member imgURL={Varshaa} name="Varshaa Moorthy"  className="mx-4"/>
        
      </div>
      <div className="flex w-full flex-wrap justify-around items-center mt-4 ">
        <Member imgURL={Aayushi} name="Aayushi Pandit" title="Director of Speakers" className="mx-4" />
        <Member imgURL={Anmol} name="Anmol Bhardwaj" title="Technical Director" className="mx-4" />
        <Member imgURL={Indrayudd} name="Indrayudd Roy Chowdhury" title="Director of Public Relations" className="mx-4" />
        <Member imgURL={Jatin} name="Jatin Sohlot" title="Director of Sponsorship and Finance" className="mx-4" />
        <Member imgURL={Mainak} name="Mainak Ghosh" title="Director of Human Resources" className="mx-4" />
        <Member imgURL={Mohit} name="Mohit Reddy" title="Director of Logistics" className="mx-4" />
        <Member imgURL={Oishika} name="Oishika Sah" title="Director of Editorial" className="mx-4" />
        <Member imgURL={Palak} name="Palak Teotia" title="Director of Guest Care" className="mx-4" />
        <Member imgURL={Rishabh} name="Rishabh Dhotrekar" title="Director of Video Production" className="mx-4" />
        <Member imgURL={Shrujal} name="Shrujal Agarwal" title="Director of Marketing" className="mx-4" />
        <Member imgURL={Tanishq} name="Tanishq Agrawal" title="Director of Design" className="mx-4" />
        
      </div>

    </div>
  );
}

export default Team;
