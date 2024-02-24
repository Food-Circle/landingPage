import React from "react";
import phoneImage from "../assets/images/fCMobile.png";
import { RiMapPinUserLine } from "react-icons/ri";
import { TfiBriefcase } from "react-icons/tfi";
import { FaRegCircleUser } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div
      className="bg-primary bg-opacity-100 w-full py-4 pb-20 relative"
      id="aboutUsSection"
    >
      <div className="container mt-2 mx-auto px-6">
        <section className="mt-32">
          <div className="container mx-auto text-center lg:text-left xl:px-32">
            <div className="flex grid items-center lg:grid-cols-3">
              <div className="mb-t lg:mb-0 lg:col-span-3 text-center">
                <h2 className="mb-8 text-3xl font-bold">
                  About The FoodCircle
                </h2>
                <div className="w-full flex items-center justify-center">
                  <p className="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0 lg:w-1/2 md:w-4/5 sm:w-full">
                    FOODcircle is an integrated application that offers
                    multipronged solutions to achieve household food security in
                    low resource rural and peri-urban settings.
                    {/* <h2 className="mb-2 text-xl font-bold ">Who are the Users?</h2> */}
                    {/* <p className="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0"> */}
                    FOODcircle is meant for anyone and everyone who is into food
                    wastage reduction. FOODCircle app is divided into 3
                    application levels: client App, food vendors App and
                    delivery App
                  </p>
                </div>
                <div className="mx-auto  grid lg:grid-cols-3 gap-1 ">
                  <div className=" rounded-lg mb-3 bg-dark px-3 py-4 text-primary">
                    <p className="mx-auto mb-4 flex flex-col items-center font-bold text-2xl gap- md:mx-0 md:mb-2 lg:mb-3">
                      <FaRegCircleUser className="text-5xl" />
                      <span className="text-white">Client App</span>
                    </p>
                    <button
                      type="button"
                      className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-dark shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Download Client App
                    </button>
                  </div>
                  <div className=" rounded-lg mb-3 bg-dark px-3 py-4 text-primary">
                    <p className="mx-auto mb-4 flex flex-col items-center font-bold text-2xl gap- md:mx-0 md:mb-2 lg:mb-3">
                      <TfiBriefcase className="text-5xl" />
                      <span className="text-white">Vendor App</span>
                    </p>
                    <button
                      type="button"
                      className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-dark shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Download Vendor App
                    </button>
                  </div>
                  <div className=" rounded-lg mb-3 bg-dark px-3 py-4 text-primary">
                    <p className="mx-auto mb-4 flex flex-col items-center font-bold text-2xl gap- md:mx-0 md:mb-2 lg:mb-3">
                      <RiMapPinUserLine className="text-5xl" />
                      <span className="text-white">Delivery App</span>
                    </p>
                    <button
                      type="button"
                      className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-dark shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Download Delivery App
                    </button>
                  </div>
                </div>
              </div>

              {/* <div>
                <img
                  src={phoneImage}
                  className="w-full rounded-lg  min-h-60"
                  alt="image"
                />
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
