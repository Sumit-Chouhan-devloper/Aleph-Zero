import React from "react";
import network from "../assets/images/png/network.png";
import arrow from "../assets/images/png/environment_arrow.png";
import bgnetwork from "../assets/images/png/network_card_bg.png";
const Network = () => {
  return (
    <>
      <section className="bg_network position-relative  overflow-x-hidden ">
        <div className="network_bg">
          <img className="w-100" src={bgnetwork} alt="network" />
        </div>
        <div className="container pt-md-5 pt-0">
          <div className="row py-5 mt-md-5 mt-0">
            <div className="col-md-6">
              <div className="d-xl-flex bg_environment_pic trtl_n80 z-2 position-relative pt-0 pt-md-5 mt-0 mt-md-5">
                <div>
                  <img className="w_sm_100" src={network} alt="plant" />
                </div>
                <div className="d-flex flex-column">
                  <div className="p-4 d-flex align-items-center justify-content-end">
                    <div className="green_height "></div>
                    <div className="ps-3">
                      <p className="color_white ff_inter fs_xxlg mb-0 fw-light">
                        Curious about
                        <span className="fw-bold fs_xxlg">upcoming </span>
                        <span className="fs_xlg fw-bold">
                          network upgrades?
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center pe-4">
                    <a
                      className="color_lightgreen fw-medium ff_inter fs_xsm"
                      href="#"
                    >
                      Our carbon footprint <img src={arrow} alt="" />
                    </a>
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

export default Network;
