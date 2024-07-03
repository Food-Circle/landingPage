import React from "react";
import dg from "../assets/images/deliveryGuy.jpg";
import phoneImage from "../assets/images/fCMobile.png";

const Stats = () => {
  return (
    <section
      className="mb-32 bg-white text-center lg:text-left"
      id="statSection"
    >
      <div className="container mx-auto text-center lg:text-left xl:px-32">
        <div className="lg:grid items-center lg:grid-cols-2 sm:flex sm:flex-col">
          <div className="mb-12 lg:mb-0">
            <div className="relative z-[1] block rounded-lg bg-white bg-opacity-70 px-6 py-12  dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
              <h2 className="mb-6 text-4xl font-bold">Client App</h2>
              <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                The Client App of FOODCircle empowers users to easily discover
                surplus food from local vendors, fostering a community-driven
                approach to reducing food wastage by connecting individuals with
                excess food to those in need.
              </p>
            </div>
          </div>

          <div>
            <img src={phoneImage} className="w-full " alt="" />
          </div>
        </div>

        <div className="lg:grid items-center lg:grid-cols-2 sm:flex sm:flex-col-reverse">
          <div>
            <img src={phoneImage} className="w-full object-cover " alt="" />
          </div>
          <div className="mb-12 lg:mb-0">
            <div className="relative z-[1] block rounded-lg bg-white bg-opacity-70 px-6 py-12  dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-ml-14 backdrop-blur-[30px]">
              <h2 className="mb-6 text-4xl font-bold">Vendor App</h2>
              <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                The Food Vendors App within FOODCircle enables participating
                food establishments to efficiently upload surplus food
                offerings, allowing them to contribute to the mission of
                minimizing food waste while reaching a broader audience of
                potential recipients.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:grid items-center lg:grid-cols-2 sm:flex sm:flex-col pb-20">
          <div className="mb-12 lg:mb-0">
            <div className="relative z-[1] block rounded-lg bg-white bg-opacity-70 px-6 py-12  dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
              <h2 className="mb-6 text-4xl font-bold">Delivery App</h2>
              <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                The Delivery App streamlines the process of facilitating food
                rescue by connecting delivery personnel with available surplus
                food, ensuring swift and reliable food redistribution efforts.
              </p>
            </div>
          </div>

          <div>
            <img src={phoneImage} className="w-full " alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
