import React from "react";

import CountUp from "react-countup";
import { Link } from "react-router-dom";

export default function FeatureThree() {
  return (
    <section className="py-[70px] sm:py-[130px] bg-white">
      <div className="theme-container mx-auto grid grid-cols-6 lg:grid-cols-12 sm:gap-[63px]">
        <div className="col-span-6">
          <h1 className="px-5 bg-main-gray border border-it-blue/20 text-it-blue font-medium rounded-[30px] w-fit">
            Business Benefits
          </h1>
          <h2 className="mt-5 text-2xl font-semibold sm:text-48 text-main-black">
            IT business offer numerous benefits to both their clients & the
            broader economy
          </h2>
          <ul className="mb-[30px] max-w-full">
            <li className="flex flex-col sm:flex-row gap-[30px] items-start mt-10">
              <div className="w-[30px] aspect-square rounded-full bg-it-blue flex items-center justify-center">
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.6907 0.612031C15.1811 0.993484 15.2695 1.70029 14.888 2.19073L8.87753 9.91852C7.94196 11.1214 6.18214 11.2775 5.04945 10.2581L1.24742 6.83626C0.785601 6.42062 0.748162 5.70929 1.1638 5.24747C1.57945 4.78564 2.29077 4.7482 2.75259 5.16385L6.55462 8.58567C6.71643 8.7313 6.96783 8.709 7.10149 8.53716L13.112 0.809368C13.4934 0.318928 14.2003 0.230577 14.6907 0.612031Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h1 className="font-semibold text-main-black text-20">
                  Innovation & Technological Advancement
                </h1>
                <p className="text-paragraph max-w-[466px]">
                  IT businesses drive innovation by developing new technologies,
                  software solutions, and digital platforms that enhance
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row gap-[30px] items-start mt-6">
              <div className="w-[30px] aspect-square rounded-full bg-it-blue flex items-center justify-center">
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.6907 0.612031C15.1811 0.993484 15.2695 1.70029 14.888 2.19073L8.87753 9.91852C7.94196 11.1214 6.18214 11.2775 5.04945 10.2581L1.24742 6.83626C0.785601 6.42062 0.748162 5.70929 1.1638 5.24747C1.57945 4.78564 2.29077 4.7482 2.75259 5.16385L6.55462 8.58567C6.71643 8.7313 6.96783 8.709 7.10149 8.53716L13.112 0.809368C13.4934 0.318928 14.2003 0.230577 14.6907 0.612031Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h1 className="font-semibold text-main-black text-20">
                  Enhanced Customer Experience
                </h1>
                <p className="text-paragraph max-w-[466px]">
                  IT businesses drive innovation by developing new technologies,
                  software solutions, and digital platforms that enhance
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row gap-[30px] items-start mt-6">
              <div className="w-[30px] aspect-square rounded-full bg-it-blue flex items-center justify-center">
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.6907 0.612031C15.1811 0.993484 15.2695 1.70029 14.888 2.19073L8.87753 9.91852C7.94196 11.1214 6.18214 11.2775 5.04945 10.2581L1.24742 6.83626C0.785601 6.42062 0.748162 5.70929 1.1638 5.24747C1.57945 4.78564 2.29077 4.7482 2.75259 5.16385L6.55462 8.58567C6.71643 8.7313 6.96783 8.709 7.10149 8.53716L13.112 0.809368C13.4934 0.318928 14.2003 0.230577 14.6907 0.612031Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h1 className="font-semibold text-main-black text-20">
                  Security and Risk Management
                </h1>
                <p className="text-paragraph max-w-[466px]">
                  IT businesses drive innovation by developing new technologies,
                  software solutions, and digital platforms that enhance
                </p>
              </div>
            </li>
          </ul>
          <Link to="/contact">
            <div className="home-two-btn-bg py-3.5 group bg-it-black border-it-black w-fit mt-2.5">
              <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-it-black font-inter">
                Learn More
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
                  className="transition-all duration-300 group-hover:stroke-it-black"
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
        <div className="col-span-6 mt-5 md:mt-0">
          <div className="relative flex justify-end w-full">
            <img
              src="/assets/images/home-seven/business.png"
              alt=""
              className="max-w-full"
            />
            <div className="bg-it-blue p-4 sm:p-[30px] rounded-2xl absolute z-20 bottom-16 left-2 sm:left-0 w-48 sm:w-[295px]">
              <img
                src="/assets/images/home-five/hero/about-card-shape.webp"
                alt=""
                className="absolute right-2 top-bottom-moving"
              />
              <div className="flex items-center gap-2.5">
                <svg
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.28753 7.01343L8.90454 1.36956M8.90454 1.36956L3.26066 1.75255M8.90454 1.36956L1.01321 10.4099"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm leading-8 text-white">We have</span>
              </div>

              <h1
                className="text-[27px] leading-[35px] text-white font-semibold tracking-tight max-w-[170px]"
                data-scroll-qs="scroll"
                data-count-qs="25"
                data-type-qs="+ Years of Experience"
                data-speed-qs="1000"
              >
                <CountUp start={0} end={15} /> + Years of Experience
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
