import React from "react";
import tedx from "../../assets/tedx_logo.png";

function Footer() {
  return (
    <footer class="border-t border-gray-200 bg-black text-white">
      <div
        class="
          container
          flex flex-col flex-wrap
          px-4
          py-16
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
        "
      >
        <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <a
            class="
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              text-blue-700
              md:justify-start
            "
            href="https://www.tedxvitvellore.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tedx} alt="TEDxVITVellore Logo" className="md:w-3/3" />
          </a>
          {/* <p class="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            at sequi cum, impedit fuga in placeat illo eum minima possimus est
            perferendis distinctio explicabo eos natus consequuntur blanditiis
            odio optio?
          </p> */}
        </div>
        <div class="justify-between w-full mt-4 text-center lg:flex">
          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 class="mb-2 font-bold tracking-widest text-pd">
              Learn about TEDx
            </h2>
            <ul class="mb-8 space-y-2 text-sm list-none">
              <li>
                <a
                  class="text-gray-600 hover:text-pm"
                  href="https://www.ted.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  TED
                </a>
              </li>
              <li>
                <a
                  class="text-gray-600 hover:text-pm"
                  href="https://www.ted.com/about/programs-initiatives/tedx-program"
                  target="_blank"
                  rel="noreferrer"
                >
                  TEDx Program
                </a>
              </li>
              <li>
                <a
                  class="text-gray-600 hover:text-pm"
                  href="https://www.ted.com/about/our-organization/our-policies-terms/ted-com-terms-of-use"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  class="text-gray-600 hover:text-pm"
                  href="https://www.ted.com/about/our-organization/our-policies-terms/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 class="mb-2 font-bold tracking-widest text-pd">
              TEDxVITVellore
            </h2>
            <ul class="mb-8 space-y-2 text-sm list-none">
              <li>
                <a
                  class="text-gray-600 hover:text-pm"
                  href="https://www.linkedin.com/company/tedx-vitvellore/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  class="text-gray-600 hover:text-pm"
                  href="https://www.instagram.com/tedxvitvellore/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  class="text-gray-600 hover:text-pm"
                  href="https://twitter.com/TEDxVITVellore"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  class="text-gray-600 hover:text-pm"
                  href="https://www.linkedin.com/company/tedx-vitvellore/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Medium
                </a>
              </li>
              <li>
                <a
                  class="text-gray-600 hover:text-pm"
                  href="https://www.facebook.com/Tedxvitvellore/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 class="mb-2 font-bold tracking-widest text-pd">Contact Us</h2>
            <ul class="mb-8 space-y-2 text-sm list-none">
              <li>
                <p class="text-gray-600 hover:text-pm">+91-9179045326</p>
              </li>
              <li>
                <a
                  class="text-gray-600 hover:text-pm"
                  href="mailto:tedxvitvellore@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  tedxvitvellore@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <p class="text-sm text-td">
          This independent TEDx event is operated under license from TED.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
