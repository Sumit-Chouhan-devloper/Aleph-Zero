import React from "react";
import { Container, Row } from "react-bootstrap";
import transparent_img from "../assets/images/png/blockchain_light_img.png";
import box_img from "../assets/images/png/blockchanin_box_img.png";
import arrow_img from "../assets/images/png/deploy_arrow.png"
const BuildingBlockchain = () => {
  return (
    <>
      <section className="bg_darkgreen mt_-2 py-5">
        <Container>
          <Row>
            <div className="col-6">
              <div>
                <img src={transparent_img} alt="img" className="w-100" />
              </div>
            </div>
            <div className="col-4">
              <div className="d-flex">
                <div>
                  <img src={box_img} alt="box_img" className="w-100" />
                </div>
                <p className="ff_inter fw-light fs_xxlg color_lightsky">We're building a new take on <span className="color_white fw-bold fs_xlg">blockchaine infrastructure</span></p>
              </div>
                <p className="text-end ff_inter fw-medium">Why Aleph Zero <img src={arrow_img} alt="green_arrow" /></p>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BuildingBlockchain;
