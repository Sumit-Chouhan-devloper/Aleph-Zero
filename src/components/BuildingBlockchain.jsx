import React from "react";
import {Container, Row } from "react-bootstrap";
import blockcard from "../assets/images/png/blockchanin_box_img.png";
import blockimg from "../assets/images/png/block_img.png";
import green_arrow from "../assets/images/png/deploy_arrow.png"
const BuildingBlockchain = () => {
  return (
    <>
      <div className="position-relative bg_darkgreen z_0">
        <section className="blockchain_bg position-relative z_0 mt_-2">
          <Container>
            <div className="pt-xl-5 pt-0">
              <div className="pt-lg-5 pt-0">
                <div>
                  <div className="pt-5">
                    <Row className="pt-1">
                      <div className="col-xl-6 col-lg-5">
                        <div className="position-absolute bottom-0">
                          <img
                            src={blockimg}
                            alt="blockchainimage"
                            className="w-100 h_298"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-7">
                        <div className="py-lg-5 ">
                          <div className="blockchain_box position-relative z-0 bg_darkgreen overflow-hidden">
                            <div className="d-flex flex-sm-row flex-column position-relative">
                             <img src={blockcard} alt="blockchain_card" className="w_100 w_sm_50" />
                              <div className="px-sm-4 pt_32 pb_18 m-0 ">
                                <div className="d-flex">
                                  <div className="blockchain_line"></div>
                                  <div>
                                    <p className="ff_inter color_white ff_xxlg fw-light ls-77 lh_27 mw_200 pt-4 blockchain_box_line position-relative ps-sm-3 ps-2">We're building a new take on <span className="fw-bold">blockchain infrastructure</span></p>
                                  </div>
                                </div>
                              </div>
                                <div className="position-absolute bottom-0 end-0">
                                  <p className="pe-2 pe-sm-4 mt-3 pb-sm-2 ff_inter fw-medium color_lightgreen fs_xsm">Why Aleph Zero <img className="ps-2 arrow_animation" src={green_arrow} alt="arrow" /></p>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default BuildingBlockchain;
