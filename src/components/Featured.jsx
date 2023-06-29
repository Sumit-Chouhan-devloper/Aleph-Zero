import React from "react";
import { Container } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import slide1 from "../assets/images/png/fe_slide1.png";
import slide2 from "../assets/images/png/fe_slide2.png";
import slide3 from "../assets/images/png/fe_slide3.png";
import slide4 from "../assets/images/png/fe_slide4.png";
import slide5 from "../assets/images/png/fe_slide5.png";
import slide6 from "../assets/images/png/fe_slide6.png";
import slide7 from "../assets/images/png/fe_slide7.png";
const Featured = () => {
  return (
    <>
      <section className="featured_bg pt-4 pb-5 mt_-2 featured_s" id="startedeco">
        <Container className="pb-lg-5">
          <p className="ff_inter fw-light color_white text-center fs_smx4 pb-sm-4 pb-3">
            FEATURED IN
          </p>
          <Splide
            options={{
              type: "loop",
              arrows: false,
              pagination: false,
              pauseOnHover:true,
              autoScroll: {
                speed: 1,
              },
              perPage: 7,
              gap: "4rem",
              breakpoints: {
                1200: {
                  perPage: 5,
                  gap: "3rem",
                },
                992: {
                  perPage: 4,
                  gap: "3rem",
                },
                768: {
                  perPage: 3,
                  gap: "3rem",
                },
                480: {
                  perPage: 2,
                  gap: "2rem",
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide>
              <img src={slide1} alt="slide_logo" className="w-100" />
            </SplideSlide>
            <SplideSlide>
              <img src={slide2} alt="slide_logo" className="w-100" />
            </SplideSlide>
            <SplideSlide>
              <img src={slide3} alt="slide_logo" className="w-100" />
            </SplideSlide>
            <SplideSlide>
              <img src={slide4} alt="slide_logo" className="w-100" />
            </SplideSlide>
            <SplideSlide>
              <img src={slide5} alt="slide_logo" className="w-100" />
            </SplideSlide>
            <SplideSlide>
              <img src={slide6} alt="slide_logo" className="w-100" />
            </SplideSlide>
            <SplideSlide>
              <img src={slide7} alt="slide_logo" className="w-100" />
            </SplideSlide>
            <SplideSlide>
              <img src={slide1} alt="slide_logo" className="w-100" />
            </SplideSlide>
            <SplideSlide>
              <img src={slide2} alt="slide_logo" className="w-100" />
            </SplideSlide>
            <SplideSlide>
              <img src={slide3} alt="slide_logo" className="w-100" />
            </SplideSlide>
            <SplideSlide>
              <img src={slide4} alt="slide_logo" className="w-100" />
            </SplideSlide>
            <SplideSlide>
              <img src={slide5} alt="slide_logo" className="w-100" />
            </SplideSlide>
          </Splide>
        </Container>
      </section>
    </>
  );
};

export default Featured;
