import React from "react";
import {
  FaFingerprint,
  FaPeopleCarryBox,
  FaPeopleGroup,
  FaRegHourglassHalf,
} from "react-icons/fa6";

const Solution = () => {
  return (
    <div>
      <div className="container my-24 mx-auto px-6">
        <section className="mb-32 text-center mx-4">
          <div className="container mb-24">
            <h2 className="mb-6 text-3xl font-bold">
              Why choose{" "}
              <u className="text-primary dark:text-primary-400">Food Circle?</u>
            </h2>

            <p className="mb-12 text-neutral-500 dark:text-neutral-300">
              The Food Circle App is grounded on reduction of food waste loss
              through a digital redistribution concept. FOOD circle application
              features 4 integrated functionalities:
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-x-12 sm:gap-2">
            <div className="mb-12 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.09),0_10px_20px_-2px_rgba(0,0,0,0.07)] dark:bg-neutral-700">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-dark p-4 text-primary shadow-lg">
                    <FaRegHourglassHalf className="text-2xl" />
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">Food Hour</h5>
                  <p>
                    Foodhour is a B2C Marketplaces for unsold food as well as
                    edible food rejected due to cosmetic standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.09),0_10px_20px_-2px_rgba(0,0,0,0.07)] dark:bg-neutral-700">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-dark p-4 text-primary shadow-lg">
                    <FaFingerprint className="text-2xl" />
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">Food Print</h5>
                  <p>
                    Foodprint tracks expiry date of food items and alerts users
                    to avoid disposal
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.09),0_10px_20px_-2px_rgba(0,0,0,0.07)] dark:bg-neutral-700">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-dark p-4 text-primary shadow-lg">
                    <FaPeopleCarryBox className="text-2xl" />
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">Food Rescue</h5>
                  <p>
                    Foodrescue is a Marketplace that links food donors with
                    reall-time hunger-spots
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.09),0_10px_20px_-2px_rgba(0,0,0,0.07)] dark:bg-neutral-700">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-dark p-4 text-primary shadow-lg">
                    <FaPeopleGroup className="text-2xl" />
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">Food Crowd</h5>
                  <p>
                    FoodCrowd functionality seeks to address this institutional
                    void by crowdsourcing data on food insecure spots with an
                    aim of facilitating surplus donations and sale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solution;
