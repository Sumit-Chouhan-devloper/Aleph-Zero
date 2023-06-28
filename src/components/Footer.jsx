import React from "react";
import telegram from "../assets/images/png/telegram.png";
import discord from "../assets/images/png/discord.png";
import insta from "../assets/images/png/instagram.png";
import twitter from "../assets/images/png/twitter.png";
import linked from "../assets/images/png/in.png";
import smile from "../assets/images/png/smile.png";
import youtube from "../assets/images/png/youtube.png";
import arrow from "../assets/images/png/arrow.png";
const Footer = () => {
  return (
    <>
      <section className="bg_darkgreen py-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4">
              <div className="flex-column justiy-content-start">
                <div className="d-flex justify-content-start align-items-center">
                  <div className="green_line me-3"></div>
                  <div>
                    <h5 className=" ff_inter fw-light color_white fs_xl mb-0 pe-2">
                      Be
                    </h5>
                  </div>
                  <div>
                    <h4 className="ff_inter fw-bold fs_xxlg color_white mb-0">
                      future-ready
                    </h4>
                  </div>
                </div>
                <div className="py-4">
                  <p
                    className="ff_karla fw-light fs_sm color_lightsky mb-0 lh_21  ls_64
                  "
                  >
                    Get the latest from the Aleph Zero ecosystem and engineering
                    updates, straight to your inbox.
                  </p>
                </div>
                <div className="d-flex justify-content-between allign-items-center  serch_bg border_input">
                  <input
                    type="text"
                    placeholder="Your email"
                    className="w-100 serch_bg footer_input color_lightsky ff_karla fw-light fs_msm   "
                  />
                  <a
                    className="subscribe d-flex alin-items-center gap-3 fw-medium"
                    href="#"
                  >
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.2821 0.807373H18.3446L18.8983 1.36108V8.57983H17.7909V2.46851L10.1415 8.35425H9.48523L1.83582 2.46851V13.9324H11.1259V15.0398H1.2821L0.728394 14.4861V1.36108L1.2821 0.807373ZM16.745 1.91479H2.88171L9.81335 7.22632L16.745 1.91479ZM12.4384 13.7273V12.6199H15.1659V9.89233H16.2733V12.6199H19.0009V13.7273H16.2733V16.4548H15.1659V13.7273H12.4384Z"
                        fill="#111B24"
                      />
                    </svg>
                    Subscribe
                  </a>
                </div>
                <div className="d-flex  align-items-start justify-content-start py-4">
                  <div>
                    <input className="fotter_checkbox" type="checkbox" />
                  </div>
                  <div className="ps-2">
                    <p className="ff_karla fw-light color_lightsky fs_sm3  ls-77 lh-18 mb-0 text-start">
                      I consent to receive commercial information in the form of
                      a newsletter sent to the e-mail address provided by the
                      Aleph Zero Foundation with registered seat in Bergliweg
                      15, 6300 Zug. Providing consent is voluntary. Consent may
                      be revoked at any time.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="px_12 ps-0">
                    <a href="#">
                      <img src={discord} alt="discord" />
                    </a>
                  </div>
                  <div className="px_12">
                    <a href="#">
                      <img src={telegram} alt="discord" />
                    </a>
                  </div>
                  <div className="px_12">
                    <a href="#">
                      <img src={twitter} alt="discord" />
                    </a>
                  </div>
                  <div className="px_12">
                    <a href="#">
                      <img src={linked} alt="discord" />
                    </a>
                  </div>
                  <div className="px_12">
                    <a href="#">
                      <img src={smile} alt="discord" />
                    </a>
                  </div>
                  <div className="px_12">
                    <a href="#">
                      <img src={youtube} alt="discord" />
                    </a>
                  </div>
                  <div className="px_12">
                    <a href="#">
                      <img src={insta} alt="discord" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="row pt-5 py-xl-0">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <h5 className="pt-xl-0  mb-0 ff_inter fw-bold pe-3 color_white fs_xsm">
                    Explore
                  </h5>
                  <ul className="mb-0 ps-0 footer_ul ">
                    <li>
                      <a href="#">Why Aleph Zero</a>
                    </li>
                    <li>
                      <a href="#">Roadmap</a>
                    </li>
                    <li>
                      <a href="#">Utility & Economics</a>
                    </li>
                    <li>
                      <a href="#">Use Cases</a>
                    </li>
                    <li>
                      <a href="#">
                        FAQ <img className="ps-2" src={arrow} alt="arrow" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Whitepapers
                        <img className="ps-2" src={arrow} alt="arrow" />
                      </a>
                    </li>
                    <li>
                      <a href="#">Carbon Footprint</a>
                    </li>
                    <li className="pt-5">
                      <a className="fw-light fs_11 ls_2" href="#">
                        NETWORK
                      </a>
                    </li>
                    <li className="pt-4">
                      <a className="fs_sm" href="#">
                        Wallet
                        <img className="ps-2" src={arrow} alt="arrow" />
                      </a>
                    </li>
                    <li className="pt-4">
                      <a className="fs_sm" href="#">
                        Staking
                      </a>
                    </li>
                    <li className="pt-4">
                      <a className="fs_sm" href="#">
                        Explorer
                        <img className="ps-2" src={arrow} alt="arrow" />
                      </a>
                    </li>
                    <li className="pt-4">
                      <a className="fs_sm" href="#">
                        Ecosystem
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                  <h5 className="pt-xl-0 pt-5 mb-0 ff_inter fw-bold pe-3 color_white fs_xsm">
                    Build
                  </h5>
                  <ul className="mb-0 ps-0 footer_ul">
                    <li>
                      <a href="#">Funding Program</a>
                    </li>
                    <li>
                      <a href="#">
                        Testnet <img className="ps-2" src={arrow} alt="arrow" />
                      </a>
                    </li>

                    <li className="pt-5">
                      <a className="fw-light fs_11 ls_2" href="#">
                        Dev space
                      </a>
                    </li>
                    <li className="pt-4">
                      <a className="fs_sm" href="#">
                        Dev Portal
                        <img className="ps-2" src={arrow} alt="arrow" />
                      </a>
                    </li>
                    <li className="pt-4">
                      <a className="fs_sm" href="#">
                        Code repository
                        <img className="ps-2" src={arrow} alt="arrow" />
                      </a>
                    </li>
                    <li className="pt-4">
                      <a className="fs_sm" href="#">
                        Documentation
                        <img className="ps-2" src={arrow} alt="arrow" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <h5 className="pt-xl-0 pt-5 mb-0 ff_inter fw-bold pe-3 color_white fs_xsm">
                    Community
                  </h5>
                  <ul className="mb-0 ps-0 footer_ul">
                    <li>
                      <a href="#">Social Platforms</a>
                    </li>
                    <li>
                      <a href="#">Upcoming Events</a>
                    </li>
                    <li>
                      <a href="#">Ambassador Program</a>
                    </li>
                    <li>
                      <a href="#">Press / Media Kit</a>
                    </li>
                    <li>
                      <a href="#">
                        Careers
                        <img className="ps-2" src={arrow} alt="arrow" />
                      </a>
                    </li>
                    <li>
                      <a href="#">Core Team</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <h5 className="pt-xl-0 pt-5 mb-0 ff_inter fw-bold pe-3 color_white fs_xsm">
                    Content
                  </h5>
                  <ul className="mb-0 ps-0 footer_ul">
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">
                        Videos <img className="ps-2" src={arrow} alt="arrow" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
