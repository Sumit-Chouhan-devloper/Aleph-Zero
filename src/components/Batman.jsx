import React from "react";
import batman from "../assets/images/png/batman_pic.png";
const Batman = () => {
  return (
    <section className="bg_darkgreen py-5">
      <div className="container">
        <div className="row align-items-center justify-content-start">
          <div className="col-lg-6">
            <div>
              <img className="w-100" src={batman} alt="batman" />
            </div>
          </div>
          <div className="col-lg-6 pt-3 pt-lg-0">
            <div className="d-flex flex-column  justify-content-start position-relative batman_flex">
              <div className="d-flex align-items-center ">
                <p className="color_white ff_inter mb-0 text-start fw-bold fs_2xl mb-0">
                  Community <span className="fw-light"> of over 100,000</span>
                </p>
                <p className="ff_inter fw-light fs_3xl color_white mb-0"></p>
              </div>
              <div>
                <p className="text-start mb-0 color_white ff_inter fw-light fs_4xl">
                  people
                </p>
              </div>
            </div>
            <div className="py-4 mt-4">
              <p className="ff_karla fs_md color_lightsky mw_445 fw-light ls_64 mb-0">
                Join us and get involved in a number of ongoing educational
                activities run not only by the core team but also by the
                community directly.
              </p>
            </div>
            <button className="ff_inter fs_xsm color_lightgreen bg_darkgreen border-0 bg_lightergreen py-3 px_26 rounded-5 gap-3 ls_64">
              Get involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Batman;
