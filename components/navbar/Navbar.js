import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavMobile from "./NavMobile";
import NavItems from "./NavItems";
import NavEmailSignup from "./NavEmailSignup";

import SWALogo from "../../public/SWA-Logo-Site.png";

//build out local object to store all categories, then use this to build both menus. maybe store somewhere where it can be accessed from anywhere?
const categories = {
  tags: [{ name: "Auto", meta: "auto" }],
};

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="row" id="header_nav">
            <div className="col-4 col-sm-4 col-md-3 col-lg-3 d-none d-sm-none d-md-flex">
              <div
                className="d-flex flex-row justify-content-start align-items-baseline"
                id="header_nav--brand"
              >
                <Link href="https://www.stockwiseauto.com/">
                  <a>
                    <Image
                      id="header_nav--logo"
                      src="/SWA-Logo-Site.png"
                      alt="StockWiseAuto Logo"
                      width={158}
                      height={72}
                    ></Image>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-8 col-sm-9 col-md-3 col-lg-3 col-xl-3 col-xxl-3 offset-md-0 offset-lg-1 d-flex flex-row align-items-center justify-content-sm-start align-items-sm-center justify-content-md-center align-items-md-end justify-content-lg-center justify-content-xl-center">
              <div style={{ height: "32px" }}>
                <Link href="/">
                  <a style={{ textDecoration: "none" }}>
                    <h2 id="header_nav--title">
                      <span
                        className="title-tall-smaller"
                        style={{ color: "#2f2f2f" }}
                      >
                        S
                      </span>
                      <span
                        className="title-smaller-tall"
                        style={{ color: "#2f2f2f" }}
                      >
                        HOP
                      </span>
                      <span
                        className="title-tall-smaller"
                        style={{ color: "#fa7700" }}
                      >
                        T
                      </span>
                      <span
                        className="title-smaller-tall"
                        style={{ color: "#fa7700" }}
                      >
                        ALK
                      </span>
                    </h2>
                  </a>
                </Link>
              </div>
            </div>
            <NavEmailSignup />
          </div>
        </div>
      </header>
      <nav className="navbar navbar-light navbar-expand-md sticky-top bg-white navigation-clean">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navcol-1"
          >
            <ul className="navbar-nav">
              <NavItems />
            </ul>
          </div>
        </div>
      </nav>
      <NavMobile />
    </div>
  );
};

export default Navbar;
