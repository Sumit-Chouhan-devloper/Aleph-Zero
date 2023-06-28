import React from "react";
import { Container, Row } from "react-bootstrap";
import box_img from "../assets/images/png/blockchanin_box_img.png";
import arrow_img from "../assets/images/png/deploy_arrow.png";
const BuildingBlockchain = () => {
  return (
    <>
      <section className="bg_darkgreen mt_-2  blockchain_bg">
        <Container className="h-100 pb-5">
          <Row className="justify-content-end py-5 align-items-center">
            <div className="col-6 ps-0 blockchain_box d-flex">
              <div>
                <img src={box_img} alt="box_img" className="h-100" />
              </div>
              <div className="d-flex flex-column justify-content-between">
                <p className="ff_inter fw-light fs_xxlg color_lightsky pt-3 mt-2 mw_280 ps-5 mb-0">
                  We're building a new take on
                  <span className="color_white fw-bold fs_xlg">
                    blockchaine infrastructure
                  </span>
                </p>
                <p className=" ff_inter fw-medium lh_21 ls_64 color_lightgreen mb-0 text-end">
                  Why Aleph Zero <img src={arrow_img} alt="green_arrow" />
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BuildingBlockchain;

{
  /* <div className="col-5">
              <div>
                <img src={transparent_img} alt="img" className="w-100" />
              </div>
            </div>
            <div className="col-6 ps-0 blockchain_box d-flex">
                <div><img src={box_img} alt="box_img" className="h-100"/></div>
              <div className="d-flex flex-column justify-content-between">
                <p className="ff_inter fw-light fs_xxlg color_lightsky pt-3 mt-2 mw_280 ps-5 mb-0">
                  We're building a new take on
                  <span className="color_white fw-bold fs_xlg">
                    blockchaine infrastructure
                  </span>
                </p>
                <p className=" ff_inter fw-medium lh_21 ls_64 color_lightgreen mb-0 text-end">
                  Why Aleph Zero <img src={arrow_img} alt="green_arrow" />
                </p>
              </div>
            </div> */
}
