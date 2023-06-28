import React from "react";
import MyNav from "./MyNav";
import {Row } from "react-bootstrap";
import btn_img from "../assets/images/png/hero_btn_arrow.png";
import hero_a from "../assets/images/png/hero_a.png";

const Hero = () => {
  return (
    <>
      <header className="hero_bg bg_darkgreen d-flex flex-column vh_xl_100">
        <MyNav />
        <section className="hero_s flex-grow-1 pb-5 pb-xl-0 py-lg-0 my-lg-5 my-xl-0">
          <div className="container h-100 py-md-5 py-xl-0">
            <Row className="align-items-center h-100 flex-column-reverse flex-md-row">
              <div className="col-md-6 ">
                <h2 className="fs_5xl ff_inter fw-bold color_white mb-0">
                  Zero-knowledge
                </h2>
                <h2 className="color_white ff_inter fw-light mb-0"><span className="hero_line position-relative">sca</span>lable layer 1</h2>
                <p className="color_lightsky ff_karla fw-light fs_md hero_para pt-5 pb-4 mb-0">
                  Aleph Zero is a layer 1 privacy-enhancing blockchain that
                  ensures scalability, low transaction fees, instant finality,
                  and optimal security.
                </p>
                <button className="hero_btn rounded-5 border-0 bg_lightergreen color_lightgreen"><span className="pe-2"><img src={btn_img} alt="btn_img" /></span> Start exploring</button>
              </div>
              <div className="col-md-6 ">
                <img src={hero_a} alt="hero_a" className="w-100" />
              </div>
            </Row>
          </div>
        </section>
      </header>
    </>
  );
};

export default Hero;
