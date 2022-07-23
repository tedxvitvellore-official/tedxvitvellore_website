import React from "react";
import "./navbar.css"
import tedx from "../../assets/tedx_logo.png"
import {
	Link
} from 'react-router-dom';

function Navbar() {
  // const button = document.querySelector("#menu-button");
  // const menu = document.querySelector("#menu");

  // button.addEventListener("click", () => {
  //   menu.classNameNameList.toggle("hidden");
  // });
  return (
    <nav className="nav flex flex-wrap items-center justify-between px-4">
      <div className="flex w-1/3 items-center mr-6 py-3 text-grey-darkest">
        <img src={tedx} alt="TEDxVITVellore Logo" className="md:w-1/3" />
      </div>
    
      <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon block  cursor-pointer md:hidden px-2 py-4 relative select-none"
        for="menu-btn"
      >
        <span className="navicon bg-white flex items-center relative"></span>
      </label>

      <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
        <li className="border-t md:border-none">
          <Link
            to="/"
            className="block md:inline-block px-4 py-3 no-underline text-white hover:text-pm font-bold"
          >
            Home
          </Link>
        </li>

        <li className="border-t md:border-none">
          <Link
            to="/about"
            className="block md:inline-block px-4 py-3 no-underline text-white hover:text-pm"
          >
            About Us
          </Link>
        </li>

        <li className="border-t md:border-none">
          <Link
            to="/events"
            className="block md:inline-block px-4 py-3 no-underline text-white hover:text-pm"
          >
            Events
          </Link>
        </li>
        {/* <li className="border-t md:border-none">
          <Link
            to="/contact"
            className="block md:inline-block px-4 py-3 no-underline text-white hover:text-pm"
          >
            Contact Us
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
