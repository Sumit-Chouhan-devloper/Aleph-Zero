import React from "react";
import alphalogo from "../assets/images/png/Aleph_footer.png";
import location from "../assets/images/png/location_footer.png";
import mail from "../assets/images/png/mail_footer.png";
import carnival from "../assets/images/png/CardinalsLogo_footer.png";
import globe from "../assets/images/png/global_footer.png";
const footercard = () => {
  return (
    <>
      <section className="bg_darkgreen py-5 mt_-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex flex-column align-items-center border_style_footer pb-5 pt-3 px-4 h-100">
                <div className="d-flex justify-content-between">
                  <div className="pt-4 ps-3">
                    <img src={alphalogo} alt="alphalogo" />
                  </div>
                  <div className="ps-4">
                    <h4 className="ff_inter fw-light color_white fs_smx mb-0">
                      Aleph Zero Foundation
                    </h4>
                    <p className="ff_karla fw-light fs_sm color_lightsky pt-2 mb-0 ls_64 lh_21">
                      The Aleph Zero Foundation is responsible for overseeing
                      the development of Aleph Zero protocol. The Foundation is
                      also the issuer of the AZERO coin.
                    </p>
                  </div>
                </div>
                <div className="lower_border my-3"></div>
                <div className="d-flex align-items-center justify-content-between w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="pe-3">
                      <img src={location} alt="location" />
                    </div>
                    <div>
                      <p className="ff_karla fw-light color_lightsky mb-0 fs_sm ls_64">
                        Bergliweg 15, 6300 Zug, Switzerland
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="pe-3">
                      <img src={mail} alt="mail" />
                    </div>
                    <div>
                      <p className="ff_karla fw-light color_lightsky mb-0 fs_sm ls_64 ">
                        hello@alephzero.org
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="d-flex flex-column align-items-center border_style_footer pb-5 pt-3 px-4 h-100">
                <div className="d-flex justify-content-between">
                  <div className="pt-4 ps-3">
                    <img src={carnival} alt="alphalogo" />
                  </div>
                  <div className="ps-4">
                    <h4 className="ff_inter fw-light color_white fs_smx mb-0">
                      Cardinal Cryptography sp. z o.o.
                    </h4>
                    <p className="ff_karla fw-light fs_sm color_lightsky ls_64 lh_21 pt-2 mb-0">
                      Aleph Zero core developer responsible for research,
                      development, cryptography, native tooling, and incubating
                      use cases deploying on top of the network.
                    </p>
                  </div>
                </div>
                <div className="lower_border my-3"></div>
                <div className="d-flex align-items-center justify-content-between w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="pe-3">
                      <img src={location} alt="location" />
                    </div>
                    <div>
                      <p className="ff_karla fw-light color_lightsky mb-0 fs_sm ls_64 ">
                        Zamoyskiego 79A, 30-519 Krakow, Poland
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex  align-items-center">
                      <div className="pe-3">
                        <img src={globe} alt="globe" />
                      </div>
                      <div>
                        <p className="ff_karla fw-light color_lightsky text-start mb-0 fs_sm ls_64 ">
                          www.cardinal.co
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="pe-3">
                        <img src={mail} alt="mail" />
                      </div>
                      <div>
                        <p className="ff_karla fw-light color_lightsky mb-0 fs_sm ls_64 ">
                          hello@cardinals.cc
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center py-3">
            <div>
              <p className="ff_inter fw-medium fs_smx color_lightsky mb-0 ls_98">
                Aleph Zero Foundation © 2018-2023, design and development by
                Cardinal
              </p>
            </div>
            <div className="d-flex">
              <p className="ff_inter fw-medium fs_smx color_lightsky mb-0 pe-3">
                Privacy Policy
              </p>
              <p className="ff_inter fw-medium fs_smx color_lightsky mb-0">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default footercard;
