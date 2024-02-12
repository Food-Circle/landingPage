import React from "react";

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
                className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
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
                className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).jpg"
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
                className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).jpg"
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
                className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).jpg"
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
