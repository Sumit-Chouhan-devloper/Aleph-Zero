import { useState } from "react";
import { Nav } from "react-bootstrap";
import navlogo from "../assets/images/png/nav_logo.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const MyNav = () => {
  const [show, setshow] = useState(true);
  function showNav() {
    setshow(!show);
  }
  if (!show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <>
        <Nav className="py-3 px-3">
          <div className=" container-fluid d-flex justify-content-between align-items-center">
            <div className="logo c_pointer">
              <img src={navlogo} alt="logo" />
            </div>
            <ul className="d-lg-flex gap-4 mb-0 d-none d-block align-items-center list-unstyled">
              <li>
                <a href="you.com">Explore</a>
              </li>
              <li>
                <a href="you.com">Build</a>
              </li>
              <li>
                <a href="you.com">Community</a>
              </li>
              <li>
                <a href="you.com">Content</a>
              </li>
            </ul>
            <span className="d-none d-lg-inline-block">
              <button className="nav_btn">
                <a href="youtube.com">Explore the ecosystem</a>
              </button>
            </span>

            <div
              className="d-flex justify-content-between flex-column d-lg-none menu_box z_index_100 position-relative z_50"
              onClick={showNav}
            >
              <h2 className="text-white fs_2xl">
                {show ? <HiMenuAlt1 /> : <AiOutlineClose />}
              </h2>
            </div>
            <ul
              className={`d-flex gap-4 mb-0 sm_nav mb-0 ps-0 d-lg-none list-unstyled ${
                show ? "" : "start-0"
              }`}
            >
              <li>
                <a href="you.com">Explore</a>
              </li>
              <li>
                <a href="you.com">Build</a>
              </li>
              <li>
                <a href="you.com">Community</a>
              </li>
              <li>
                <a href="you.com">Content</a>
              </li>

              <span>
                <button className="nav_btn">
                  <a href="youtube.com">Explore the ecosystem</a>
                </button>
              </span>
            </ul>
          </div>
        </Nav>
      </>
    </>
  );
};

export default MyNav;
