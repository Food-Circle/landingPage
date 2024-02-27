import React from "react";
import Header from "./Header";
import phoneImage from "../assets/images/fCMobile.png";
import gps from "../assets/images/google-play.webp";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <div
        className="px-6 py-12 text-center md:px-12 lg:py-24 lg:text-left bg-primary"
        id="heroSection"
      >
        <div className="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0 z-10 ">
              <h1 className="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(0,0%,0%)]">
                The FoodCircle
                <br />
                <span className="text-4xl">Eat to Save!</span>
              </h1>
              <p className="opacity-70 text-gray mb-12">
                FOODcircle seeks to accelerate Kenya’s net zero transition from
                a linear to a circular food economy. FOODcircle is an integrated
                application that offers multipronged solutions to achieve
                household food security in low resource rural and peri-urban
                settings.
              </p>
              <a
                className="mb-2 inline-block rounded  text-sm font-medium uppercase leading-normal"
                href="#!"
              >
                <img src={gps} alt="play store" className="h-20 w-40" />
              </a>
            </div>
            <div
              className="relative mb-12 lg:mb-0 ounded "
              // id="radius-shape-0"
            >
              <div
                id="radius-shape-1"
                className="absolute rounded-full shadow-lg"
              ></div>
              <div
                id="radius-shape-2"
                className="absolute shadow-lg z-99"
              ></div>
              <div
                id="radius-shape-3"
                className="absolute shadow-lg z-99"
              ></div>
              <div className="relative md:px-12 min-h-full w-full">
                <img
                  src={phoneImage}
                  alt=""
                  className="animate-bounce-slow mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
