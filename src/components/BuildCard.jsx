import React from "react";
import { Container, Row } from "react-bootstrap";
import build_card from "../assets/images/png/build_card_img.png";
import scale_card from "../assets/images/png/scale_card_img.png";
import arrow from "../assets/images/png/deploy_arrow.png";
const BuildCard = () => {
  return (
    <>
      <section className="bg_darkgreen mt_-2 py-5 build_s">
        <Container className="py-5">
          <Row>
            <div className="col-md-6">
              <div className="build_cards h-100">
                <div>
                  <img src={build_card} alt="card_img" className="w-100" />
                </div>
                <div className="ps-sm-5 ps-3 pe-2 pe-sm-0">
                  <h4 className=" ff_inter fw-bold color_white fs_xlg mb-0 ps-4 green_line">
                    Build<span className="fw-light ps-2 fs_xxlg">fast</span>
                  </h4>
                  <p className="ff_karla fw-light fs_msm color_lightsky pt-3 mb-0">
                    Benefit from a unique combination of our consensus protocol,
                    AlephBFT, and ink!, the Rust-based WASM programming
                    environment.
                  </p>
                </div>
                <div className="text-end pe-4 ff_inter fw-medium fs_xsm color_lightgreen py-4 my-2 c_pointer">
                  Deploy apps <img src={arrow} alt="arrow" className="ms-1" />
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3 mt-md-0">
              <div className="build_cards h-100">
                <div>
                  <img src={scale_card} alt="card_img" className="w-100" />
                </div>
                <div className="ps-sm-5 ps-3 pe-2 pe-sm-0">
                  <h4 className=" ff_inter fw-bold color_white fs_xlg mb-0 ps-4 green_line">
                    Scale<span className="fw-light ps-2 fs_xxlg">easy</span>
                  </h4>
                  <p className="ff_karla fw-light fs_msm color_lightsky pt-3 mb-0">
                    Stake your AZERO with a trusted network of validators—or
                    help scale Aleph Zero and make it more secure for everyone
                    involved by becoming one yourself.
                  </p>
                </div>
                <div className="text-end pe-4 ff_inter fw-medium fs_xsm color_lightgreen py-4 my-2 c_pointer">
                  Validate and nominate
                  <img src={arrow} alt="arrow" className="ms-1" />
                </div>
              </div>
            </div>
          </Row>
          <Row className="justify-content-between align-items-center py-5 my-xl-5">
            <div className="col-lg-2  col-sm-6 d-flex justify-content-lg-start justify-content-center">
              <div className="d-flex flex-column align-items-center">
                <h5 className="ff_inter fw-bold fs_lg color_white mb-0 pb-3">
                  0.09 sec
                </h5>
                <span className="bottom_p_line position-relative"></span>
                <p className="ff_karla fw-light fs_msm mb-0 color_lightsky pt-3 ">
                  Time to finality
                </p>
              </div>
            </div>
            <div className="col-lg-2  col-sm-6 d-flex justify-content-center mt-5 mt-sm-0">
              <div className="d-flex flex-column align-items-center">
                <h5 className="ff_inter fw-bold fs_lg color_white mb-0 pb-3">
                0.0003 AZERO
                </h5>
                <span className="bottom_p_line position-relative"></span>
                <p className="ff_karla fw-light fs_msm mb-0 color_lightsky pt-3 ws_nowrap">
                Avg cost per transaction
                </p>
              </div>
            </div>
            <div className="col-lg-2  col-sm-6 d-flex justify-content-center mt-5 mt-lg-0">
              <div className="d-flex flex-column align-items-center">
                <h5 className="ff_inter fw-bold fs_lg color_white mb-0 pb-3">
                57449
                </h5>
                <span className="bottom_p_line position-relative"></span>
                <p className="ff_karla fw-light fs_msm mb-0 color_lightsky pt-3">
                Accounts
                </p>
              </div>
            </div>
            <div className="col-lg-2  col-sm-6 d-flex justify-content-lg-end justify-content-center mt-5 mt-lg-0">
              <div className="d-flex flex-column align-items-center">
                <h5 className="ff_inter fw-bold fs_lg color_white mb-0 pb-3">
                 123
                </h5>
                <span className="bottom_p_line position-relative"></span>
                <p className="ff_karla fw-light fs_msm mb-0 color_lightsky pt-3">
                Mainnet validators
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BuildCard;
