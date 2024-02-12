import React from "react";

const CTA = () => {
  return (
    <div className="container my-10 mx-auto px-6">
      <section className="mb-32 text-center">
        <div className="px-6 py-12 md:px-12">
          <h2 className="mt-12 text-5xl font-bold tracking-tight">
            Take A Step <br />
            <span className="text-primary dark:text-primary-400">
              Join Us Today
            </span>
          </h2>
          <p className="my-8 ">
            Downloan the App from Google play store and Registeran account with
            us
          </p>
          <a
            className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
            data-te-ripple-init
            data-te-ripple-color="light"
            href="#!"
            role="button"
          >
            Download App
          </a>
          <a
            className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
            data-te-ripple-init
            data-te-ripple-color="light"
            href="/"
            role="button"
          >
            Learn more
          </a>
        </div>
      </section>
    </div>
  );
};

export default CTA;
