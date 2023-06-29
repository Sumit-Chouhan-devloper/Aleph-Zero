import React from "react";
import batman from "../assets/images/png/batman_pic.png";
const Batman = () => {
  return (
    <section className="bg_darkgreen">
      <div className="container">
        <div className="row align-items-center justify-content-start">
          <div className="col-lg-6">
            <div>
              <img className="w-100" src={batman} alt="batman" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex flex-column  justify-content-start">
              <div className="d-flex align-items-center">
                <h4 className="color_white ff_inter mb-0 text-start fw-bold fs_2xl mb-0">
                  Community
                </h4>
                <p className="ff_inter fw-light fs_3xl color_white mb-0">
                  of over 100,000
                </p>
              </div>
              <div>
                <p className="text-start mb-0">people</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Batman;
