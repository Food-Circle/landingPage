import React from "react";
import bm from "../assets/images/bm.jpg";
import ki from "../assets/images/ki.jpeg";
import mm from "../assets/images/mm.jpeg";
import pk from "../assets/images/pk.jpeg";

const Team = () => {
  return (
    <div className="bg-black w-full py-8" id="teamSection">
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-12 text-3xl font-bold text-white">
            Meet the <u className="text-primary dark:text-primary-400">team</u>
          </h2>

          <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="mb-12 lg:mb-0">
              <img
                className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px] border border-white"
                src={bm}
                alt="avatar"
              />
              <h5 className="mb-4 text-lg font-bold text-white">
                Benjamin Musungu
              </h5>
              <p className="mb-6 text-primary text-sm">
                Agri. Economic/Policy <br />
                8+ years experience <br />
                Regional Partnership Co-ordinator, AU{" "}
              </p>
            </div>
            <div className="mb-12 lg:mb-0">
              <img
                className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px] border border-white"
                src={ki}
                alt="avatar"
              />
              <h5 className="mb-4 text-lg font-bold text-white">
                Kevin Irungu
              </h5>
              <p className="mb-6 text-primary text-sm">
                Career Banker <br />
                10 years in Agri-Finance <br />
                Tea VC Specialist, Equity Bank
              </p>
            </div>
            <div className="mb-12 md:mb-0">
              <img
                className="mx-auto mb-6 h-[150px] object-cover rounded-lg shadow-lg dark:shadow-black/20 w-[150px] border border-white"
                src={mm}
                alt="avatar"
              />
              <h5 className="mb-4 text-lg font-bold text-white">
                Dr. Mary Mutembei
              </h5>
              <p className="mb-6 text-primary text-sm">
                Crop Scientist <br />
                20+ years experience <br />
                Ministry of Agriculture
              </p>
            </div>
            <div className="mb-12 md:mb-0">
              <img
                className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px] border border-white"
                src={pk}
                alt="avatar"
              />
              <h5 className="mb-4 text-lg font-bold text-white">
                Peter Kirimi
              </h5>
              <p className="mb-6 text-primary text-sm">
                Financial Inclusion Expert <br />
                20+ years Experience <br />
                Team Leader IFDC Global Financial inclusion team
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
