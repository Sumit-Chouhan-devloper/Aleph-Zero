import React from "react";
import { Container, Row } from "react-bootstrap";
import grid1 from "../assets/images/png/application_1_img.png";
import grid2 from "../assets/images/png/application_2_img.png";
import grid3 from "../assets/images/png/application_3_img.png";
import grid4 from "../assets/images/png/application_4_img.png";
import grid5 from "../assets/images/png/application_5_img.png";
import grid6 from "../assets/images/png/application_6_img.png";
import grid7 from "../assets/images/png/application_7_img.png";

const Applications = () => {
  return (
    <>
      <section className="bg_darkgreen py-5 mt_-2">
        <Container>
          <Row className="justify-content-between align-items-center flex-column-reverse flex-xl-row">
            <div className="col-xl-5 mt-4 mt-xl-0">
              <div className="grid_container">
                <div className="grids_item item1">
                  <img src={grid1} className="w-100" alt="application1" />
                </div>
                <div className="grids_item item2">
                  <img src={grid2} className="w-100" alt="application1" />
                </div>
                <div className="grids_item item3">
                  <img src={grid3} className="w-100" alt="application1" />
                </div>
                <div className="grids_item item4">
                  <img src={grid4} className="w-100" alt="application1" />
                </div>
                <div className="grids_item item5">
                  <img src={grid5} className="w-100" alt="application1" />
                </div>
                <div className="grids_item item6">
                  <img src={grid6} className="w-100" alt="application1" /> 
                </div>
                <div className="grids_item item7">
                  <img src={grid7} className="w-100" alt="application1" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 ">
              <div className="application_box">
                <h3 className="ff_inter fw-bold color_white mb-0 fs_2xl">Applications under</h3>
                <h3 className="ff_inter fw-light color_white mb-0 fs_2xl">development</h3>
                <p className="ff_karla color_lightsky fw-light ls_64 lh_27 pt-5 mb-0 pb-3">
                  <span className="application_green_line position-relative mw_475">With the</span> mainnet launch, Aleph Zero has seen a notable initial
                  adoption within the developer community. Our flexible
                  environment will be familiar for builders who are already
                  accustomed with Rust and the Substrate stack.
                </p>
                <button className="py-2 px-3 ff_inter fw-medium rounded-5 border-0 bg_lightergreen color_lightgreen">Explore the ecosystem</button>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Applications;
