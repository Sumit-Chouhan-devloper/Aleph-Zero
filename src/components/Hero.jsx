import React from "react";
import MyNav from "./MyNav";
import {Row } from "react-bootstrap";
import btn_img from "../assets/images/png/hero_btn_arrow.png";
import hero_a from "../assets/images/png/hero_a.png";

const Hero = () => {
  return (
    <>
      <header className="hero_bg bg_darkgreen">
        <MyNav />
        <section className=" hero_s">
          <div className="container h-100">
            <Row className="align-items-center h-100">
              <div className="col-6">
                <h2 className="fs_5xl ff_intel fw-bold color_white">
                  Zero-knowledge
                </h2>
                <h2 className="color_white ff_intel fw-light"><span className="hero_line position-relative">sca</span>lable layer 1</h2>
                <p className="color_lightsky ff_karla fw-light fs_md hero_para pt-5 pb-4">
                  Aleph Zero is a layer 1 privacy-enhancing blockchain that
                  ensures scalability, low transaction fees, instant finality,
                  and optimal security.
                </p>
                <button><span><img src={btn_img} alt="btn_img" /></span> Start exploring</button>
              </div>
              <div className="col-6">
                <img src={hero_a} alt="hero_a" />
              </div>
            </Row>
          </div>
        </section>
      </header>
    </>
  );
};

export default Hero;
