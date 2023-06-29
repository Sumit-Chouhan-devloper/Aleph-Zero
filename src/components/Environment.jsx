import React from "react";
import plant from "../assets/images/png/environment_pic.png";
import arrow from "../assets/images/png/environment_arrow.png";
const Environment = () => {
  return (
    <>
      <section className="bg_environment overflow-x-hidden">
        <div className="container pt-5 pb-5 pb-md-0 mt-5 mt-sm-0">
          <div className="row pt-md-5 mt-md-5">
            <div className="col-md-6 col-10 environment_card_bg  ">
              <div className="d-md-flex ">
                <div className="d-xl-flex bg_environment_pic trtl_80">
                  <div>
                    <img className="w_sm_100" src={plant} alt="plant" />
                  </div>
                  <div className="d-flex flex-column">
                    <div className="p-4 d-flex align-items-center justify-content-end">
                      <div className="green_height "></div>
                      <div className="ps-3">
                        <p className="color_white ff_inter fs_xxlg mb-0 fw-light">
                          Aleph Zero is designed to
                          <span className="fw-bold fs_xxlg">
                            {" "}
                            care for the{" "}
                          </span>
                          <span className="fs_xlg fw-bold"> environment </span>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end align-items-center pe-4">
                      <a className="color_lightgreen fw-medium ff_inter fs_xsm" href="#">Our carbon footprint <img src={arrow} alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Environment;
