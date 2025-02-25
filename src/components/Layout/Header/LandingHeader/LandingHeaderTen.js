import React from "react";
import { demoLinkData } from "../data";
import { Link } from "react-router-dom";

export default function LandingHeaderTen() {
  return (
    <div className="fixed top-0 z-20 justify-center hidden w-full h-24 xl:flex bg-main-black">
      <div className="px-[70px] w-full">
        <header className="relative flex items-center justify-between w-full h-full py-6 mx-auto">
          <div className="flex items-center gap-24">
            <Link href="#">
              <img src="/assets/images/home-ten/logo.svg" alt="logo" />
            </Link>
          </div>
          <ul className="flex items-center gap-10 text-base font-medium leading-5 text-white font-inter h-fit">
            <li className="group">
              <a
                className="home-two-nav-item leading-5 relative before:content-['Home'] before:text-white before:border-white w-fit before:h-[20px] flex items-center gap-2"
                href="#banner"
              >
                Home
                {/* <svg
                  className="transition-all duration-300 group-hover:rotate-180"
                  width="10"
                  height="10"
                  viewBox="0 0 19 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L9.5 8L17 2"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg> */}
              </a>
              {/* <div className="absolute px-[18px] left-0 h-0 group-hover:h-[660px] overflow-hidden top-[96px] transition-all duration-700 z-50 bg-main-black group-hover:border-b group-hover:border-r group-hover:border-l border-white/10">
                <ul className="max-h-fit min-w-[200px] mt-8 transition-all duration-300 overflow-hidden px-10 top-20 pb-4 rounded-b-md w-full flex flex-wrap gap-10">
                  
                  {demoLinkData.map((item, index) => (
                    <li
                      key={index}
                      className="relative py-1 flex flex-col items-center bg-[#171E2D]"
                    >
                      <div className="relative flex flex-col items-center gap-5 pb-3 overflow-hidden font-medium leading-5 group/item hover:text-purple w-fit text-paragraph font-inter">
                        <div className="absolute flex flex-col items-center w-full h-full gap-5 transition-all duration-300 opacity-0 pt-14 bg-black/80 group-hover/item:opacity-100">
                          <Link to={item.landingLink}>
                            <div className="home-two-btn-white group/btn px-10 py-1.5 before:bg-purple after:bg-purple border-purple hover:border-white">
                              <span className="relative z-10 py-1 text-sm font-semibold text-white transition-all duration-300 font-inter">
                                Single Page
                              </span>
                            </div>
                          </Link>
                          <Link to={item.demoLink}>
                            <div className="home-two-btn-white-rev group/btn px-10 py-1.5 before:bg-purple after:bg-purple border-white hover:border-purple">
                              <span className="text-sm text-white transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
                                Multi page
                              </span>
                            </div>
                          </Link>
                        </div>
                        <img
                          src={item.demoThumb}
                          alt=""
                          className="w-[240px] transition-all duration-300"
                        />
                        <span className="relative font-medium leading-5 text-white home-two-nav-item group-hover/item:before:w-full group-hover/item:text-white before:border-white w-fit font-inter">
                          <span className="w-fit">{item.demoTitle}</span>
                        </span>
                      </div>
                    </li>
                  ))}
                  
                  <li className="relative py-1 flex flex-col items-center bg-[#171E2D]">
                    <a
                      href=""
                      className="relative flex flex-col items-center gap-5 pb-3 overflow-hidden font-medium leading-5 group/item hover:text-purple w-fit text-paragraph font-inter"
                      aria-disabled="true"
                    >
                      <img
                        src="/assets/images/demo-8.png"
                        alt=""
                        className="w-[240px] group-hover/item:scale-110 transition-all duration-300 blur-sm"
                      />
                      <span className="relative font-medium leading-5 text-white home-two-nav-item group-hover/item:before:w-full group-hover/item:text-white before:border-white w-fit font-inter">
                        <span className="w-fit">Coming Soon</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div> */}
            </li>
            <li>
              <a
                href="#features"
                className="home-two-nav-item relative before:content-['Features'] before:text-white before:border-white before:h-[20px]"
              >
                Features
              </a>
            </li>
            <li>
              {/* <a
                className="home-two-nav-item relative before:content-['Works'] before:text-white before:border-white before:h-[20px]"
                href="#video editing"
              >
                Works
              </a> */}
            </li>

            <li class="relative group">
              <a
              
                class="flex items-center gap-2 font-semibold text-white hover:underline "
                href="#video editing"
              >
                Works
                <svg
                  class="transition-all duration-300 group-hover:rotate-180"
                  width="10"
                  height="10"
                  viewBox="0 0 19 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L9.5 8L17 2"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
              <div class="absolute px-2 -left-7 h-0 group-hover:h-[480px] overflow-hidden top-5 transition-all duration-700">
                <ul class="max-h-fit min-w-[200px] bg-white mt-8 transition-all duration-300 overflow-hidden px-5 top-20 pb-4 rounded-b-md">
                  <li class="relative py-1">
                    <a
                      class="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter"
                      href="#video editing"
                    >
                      Video editing
                    </a>
                  </li>
                  <li class="relative py-1">
                    <a
                      class="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter"
                      href="#Podcast"
                    >
                      Podcast
                    </a>
                  </li>
                  <li class="relative py-1">
                    <a
                      class="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter"
                      href="#Audio Editing"
                    >
                      Audio Editing
                    </a>
                  </li>
                  <li class="relative py-1">
                    <a
                      class="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter"
                      href="#2D/3D Animation"
                    >
                      2D/3D Animation
                    </a>
                  </li>
                  <li class="relative py-1">
                    <a
                      class="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter"
                      href="#Graphic Design"
                    >
                      Graphic Design
                    </a>
                  </li>
                  <li class="relative py-1">
                    <a
                      class="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter"
                      href="/pricing"
                    >
                      Digital Marketing
                    </a>
                  </li>
                  <li class="relative py-1">
                    <a
                      class="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter"
                      href="/teams"
                    >
                      Web Development
                    </a>
                  </li>
                  <li class="relative py-1">
                    <a
                      class="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter"
                      href="/faqs"
                    >
                      Shorts Video
                    </a>
                  </li>
                
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#about"
                className="home-two-nav-item relative before:content-['About'] before:text-white before:border-white before:h-[20px]"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="home-two-nav-item relative before:content-['Recent Projects'] before:text-white before:border-white before:h-[20px]"
                href="#Recent Projects"
              >
                Recent Projects
              </a>
            </li>
            <li>
              <a
                className="home-two-nav-item relative before:content-['Pricing'] before:text-white before:border-white before:h-[20px]"
                href="#pricing"
              >
                Pricing
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-7">
            <a href="#" className="flex gap-2.5 group">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 5L12 5M22 5C22 4.43982 20.604 3.39322 20.25 3M22 5C22 5.56018 20.604 6.60678 20.25 7M12 5C12 4.43982 13.396 3.39322 13.75 3M12 5C12 5.56018 13.396 6.60678 13.75 7"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-base font-bold leading-5 tracking-tight text-white">
                Call : +880 (1710) 618285
              </span>
            </a>
            <Link to="/contact">
              <div className="home-two-btn-bg py-2.5 group bg-caribbean-green border-caribbean-green">
                <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-main-black text-main-black font-inter">
                  Contact US
                </span>
                <svg
                  className="relative z-10"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-all duration-300 group-hover:stroke-main-black"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}
