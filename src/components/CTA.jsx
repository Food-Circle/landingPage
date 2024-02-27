import React from "react";
import gps from "../assets/images/google-play.webp";

const CTA = () => {
  return (
    <div className="mt-10 mx-auto px-6 bg-primary">
      <section className=" text-center">
        <div className="px-6 py-12 md:px-12">
          <h2 className="mt-12 text-5xl font-bold tracking-tight">
            Take A Step <br />
            <span className="text-white dark:text-primary-400 mt-4">
              Join Us Today
            </span>
          </h2>
          <p className="my-8 ">
            Download the App from Google play store and Register an account with
            us
          </p>
          <a
            className="mb-2 inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal"
            href="#!"
          >
            <img src={gps} alt="play store" className="h-20 w-40" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CTA;
