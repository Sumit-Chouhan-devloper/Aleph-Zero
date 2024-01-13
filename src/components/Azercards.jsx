import React from "react";
import wallet from "../assets/images/png/wallet_pic.png";
import square from "../assets/images/png/azzero_square.png";
import arrow from "../assets/images/png/azer_arrow.png";
import card2 from "../assets/images/png/azero_explorer.png";
import card3 from "../assets/images/png/azero_utility.png";

const Azercards = () => {
  return (
    <>
      <section className="bg_azerocards mt_-2">
        <div className="container py-5 ">
          <div className="row py-5 my-3">
            <div className="col-md-4 col-sm-6 py-5">
              <div className="d-flex flex-column  justify-content-start  bg_card border_card overflow-x-hidden">
                <div className="bg_wallet">
                  <img className="ps-3" src={wallet} alt="wallet" />
                </div>
                <div className="d-flex align-items-center ps-4">
                  <div className="green_line"></div>
                  <h5 className="mb-0 color_white ff_inter fs_xmd fw-light ps-3">
                    AZERO
                  </h5>
                  <p className="mb-0 color_white ff_inter fw-bold fs_19 ps-1">
                    wallet
                  </p>
                </div>
                <div className="py-2 ps-4">
                  <p className="ff_karla fw-light fs_sm mb-0 color_lightsky fs_sm ls_64 mw_239">
                    Set up your Aleph Zero wallet to be able to hold, transfer,
                    or stake your AZERO coins.
                  </p>
                </div>
                <div className="position-relative  py-4 my-2">
                  <div className="square">
                    <a
                      className="color_lightgreen bg_lightergreen py-3 ps-3 pe-30 radius_top_bottom pb-3 ls_64"
                      href="#"
                    >
                      <img className="pe-4 pb-1" src={square} alt="square" />
                      Go to
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 py-5">
              <div className="d-flex flex-column  justify-content-start  bg_card border_card overflow-x-hidden">
                <div className="bg_explorer">
                  <img className="ps-3" src={card2} alt="wallet" />
                </div>
                <div className="d-flex align-items-center ps-4">
                  <div className="green_line"></div>
                  <h5 className="mb-0 color_white ff_inter fs_xmd fw-light ps-3">
                    AZERO
                  </h5>
                  <p className="mb-0 color_white ff_inter fw-bold fs_19 ps-1">
                    explorer
                  </p>
                </div>
                <div className="py-2 ps-4">
                  <p className="ff_karla fw-light fs_sm mb-0 color_lightsky fs_sm ls_64 mw_239">
                    Familiarize yourself with the Aleph Zero explorer launched
                    in collaboration with Subscan.
                  </p>
                </div>
                <div className="position-relative  py-4 my-2">
                  <div className="square">
                    <a
                      className="color_lightgreen bg_lightergreen py-3 ps-3 pe-30 radius_top_bottom pb-3 ls_64"
                      href="#"
                    >
                      <img className="pe-4 pb-1" src={square} alt="square" />
                      Go to
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 py-5">
              <div className="d-flex flex-column  justify-content-start  bg_card border_card overflow-x-hidden">
                <div className="bg_utility">
                  <img className="ps-3" src={card3} alt="wallet" />
                </div>
                <div className="d-flex align-items-center ps-4">
                  <div className="green_line"></div>
                  <h5 className="mb-0 color_white ff_inter fs_xmd fw-light ps-3">
                    AZERO
                  </h5>
                  <p className="mb-0 color_white ff_inter fw-bold fs_19 ps-1">
                    utility
                  </p>
                </div>
                <div className="py-2 ps-4">
                  <p className="ff_karla fw-light fs_sm mb-0 color_lightsky fs_sm ls_64 mw_239">
                    Learn more about the utility and economics behind AZERO -
                    Aleph Zero's native coin.
                  </p>
                </div>
                <div className="position-relative  py-4 my-2">
                  <div className="square">
                    <a
                      className="color_lightgreen bg_lightergreen py-3 ps-3 pe-30 radius_top_bottom pb-3 ls_64"
                      href="#"
                    >
                      <img className="pe-4 pb-1" src={arrow} alt="square" />
                      Go to
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

export default Azercards;
