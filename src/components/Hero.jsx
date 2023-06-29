import React from "react";
import MyNav from "./MyNav";
import { Row } from "react-bootstrap";
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
                <h2 className="color_white ff_inter fw-light mb-0">
                  <span className="hero_line position-relative">sca</span>lable
                  layer 1
                </h2>
                <p className="color_lightsky ff_karla fw-light fs_md hero_para pt-5 pb-4 mb-0">
                  Aleph Zero is a layer 1 privacy-enhancing blockchain that
                  ensures scalability, low transaction fees, instant finality,
                  and optimal security.
                </p>
                <a href="#startedeco">
                  <button className="hero_btn rounded-5 border-0 bg_lightergreen color_lightgreen ff_inter fw-medium">
                    <span className="down_arrow_animaton">
                      <svg
                        width="25"
                        height="26"
                        viewBox="0 0 25 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_0_323)">
                          <path
                            d="M7.5078 2.01917C6.47548 2.01917 5.4979 2.21469 4.57507 2.60572C3.66787 2.99675 2.87408 3.53247 2.19369 4.21286C1.51329 4.89325 0.977578 5.68705 0.586547 6.59424C0.195516 7.51707 0 8.49465 0 9.52697V15.5332C0 16.5655 0.195516 17.5431 0.586547 18.4659C0.977578 19.3731 1.51329 20.1669 2.19369 20.8473C2.87408 21.5277 3.66787 22.0634 4.57507 22.4545C5.4979 22.8455 6.47548 23.041 7.5078 23.041C8.54012 23.041 9.5177 22.8455 10.4405 22.4545C11.3477 22.0634 12.1415 21.5277 12.8219 20.8473C13.5023 20.1669 14.038 19.3731 14.4291 18.4659C14.8201 17.5431 15.0156 16.5655 15.0156 15.5332V9.52697C15.0156 8.49465 14.8201 7.51707 14.4291 6.59424C14.038 5.68705 13.5023 4.89325 12.8219 4.21286C12.1415 3.53247 11.3477 2.99675 10.4405 2.60572C9.5177 2.21469 8.54012 2.01917 7.5078 2.01917ZM1.50156 9.52697C1.50156 8.69799 1.65797 7.91593 1.9708 7.18079C2.28362 6.46129 2.71376 5.82782 3.2612 5.28038C3.80864 4.73293 4.44212 4.3028 5.16161 3.98997C5.89675 3.67715 6.67881 3.52073 7.5078 3.52073C8.33679 3.52073 9.11885 3.67715 9.85399 3.98997C10.5735 4.3028 11.207 4.73293 11.7544 5.28038C12.3018 5.82782 12.732 6.46129 13.0448 7.18079C13.3576 7.91593 13.514 8.69799 13.514 9.52697V15.5332C13.514 16.3622 13.3576 17.1443 13.0448 17.8794C12.732 18.5989 12.3018 19.2324 11.7544 19.7798C11.207 20.3273 10.5735 20.7574 9.85399 21.0702C9.11885 21.383 8.33679 21.5395 7.5078 21.5395C6.67881 21.5395 5.89675 21.383 5.16161 21.0702C4.44212 20.7574 3.80864 20.3273 3.2612 19.7798C2.71376 19.2324 2.28362 18.5989 1.9708 17.8794C1.65797 17.1443 1.50156 16.3622 1.50156 15.5332V9.52697ZM6.75702 6.52385V9.52697H8.25858V6.52385H6.75702ZM6.75702 11.0285V16.7298L5.0443 14.9936L3.96506 16.0728L6.96818 19.076H8.04742L11.0505 16.0728L9.9713 14.9936L8.25858 16.7298V11.0285H6.75702Z"
                            fill="#00CCAB"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_323">
                            <rect
                              width="24.64"
                              height="25"
                              fill="white"
                              transform="matrix(1 0 0 -1 0 25.03)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>{" "}
                    Start exploring
                  </button>
                </a>
              </div>
              <div className="col-md-6 ">
                <img src={hero_a} alt="hero_a" className="w-100 hero_a" />
              </div>
            </Row>
          </div>
        </section>
      </header>
    </>
  );
};

export default Hero;
