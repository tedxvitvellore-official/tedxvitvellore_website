import React from "react";
import "./navbar.css"
import tedx from "../../assets/tedx_logo.png"

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
        className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
        for="menu-btn"
      >
        <span className="navicon bg-grey-darkest flex items-center relative"></span>
      </label>

      <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
        <li className="border-t md:border-none">
          <a
            href="/"
            className="block md:inline-block px-4 py-3 no-underline text-white hover:text-pm font-bold"
          >
            Home
          </a>
        </li>

        <li className="border-t md:border-none">
          <a
            href="/about/"
            className="block md:inline-block px-4 py-3 no-underline text-white hover:text-pm"
          >
            About Us
          </a>
        </li>

        <li className="border-t md:border-none">
          <a
            href="/events/"
            className="block md:inline-block px-4 py-3 no-underline text-white hover:text-pm"
          >
            Events
          </a>
        </li>
        <li className="border-t md:border-none">
          <a
            href="/contact/"
            className="block md:inline-block px-4 py-3 no-underline text-white hover:text-pm"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
