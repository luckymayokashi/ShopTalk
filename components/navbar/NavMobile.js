import { useState } from "react";
import Link from "next/dist/client/link";
import NavItemsMobile from "./NavItemsMobile";

const NavMobile = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    if (!isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <>
      <div id="mobile--nav-bar" className="style-1">
        <div
          id="mobile--nav-button"
          className={isActive ? "mobile-navv nav--active" : "mobile-navv"}
        >
          <Link href="#">
            <a onClick={handleToggle} className="nav__trigger">
              <span className="nav__icon" />
            </a>
          </Link>
          <nav className="nav">
            <button
              type="button"
              className="btn newsletter-mobile-btn nav__link"
              data-bs-toggle="modal"
              data-bs-target="#newsletterModal"
            >
              Newsletter Signup <i className="fas fa-angle-down" />
            </button>
            <div
              className="modal fade"
              id="newsletterModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      ShopTalk Newsletter
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <p>Stay up to date with new post and more!</p>
                    <input
                      type="text"
                      id="header_nav--signup-form-email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary shoptalk-btn-sec"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary shoptalk-btn"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <ul className="nav__list">
                <NavItemsMobile />
              </ul>
            </div>
            <div
              className="row justify-content-center"
              style={{ marginTop: "18rem" }}
            >
              <div className="swa-mobile-logo nav__link">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 656.96 331.99"
                >
                  <defs>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".cls-1{font-size:125px;}.cls-1,.cls-7{fill:#2f2f2f;}.cls-1,.cls-4{font-family:AvenirNext-Bold, Avenir Next;font-weight:700;}.cls-2,.cls-3{font-size:100px;}.cls-2{letter-spacing:-0.03em;}.cls-4{font-size:110px;fill:#363636;}.cls-5{letter-spacing:-0.02em;}.cls-6{letter-spacing:-0.03em;}",
                      }}
                    />
                  </defs>
                  <text className="cls-1" transform="translate(0 184.4)">
                    S
                    <tspan className="cls-2" x="73.87" y={0}>
                      T
                    </tspan>
                    <tspan className="cls-3" x="128.97" y={0}>
                      OCK
                    </tspan>
                    <tspan x="354.77" y={0}>
                      W
                    </tspan>
                    <tspan className="cls-3" x="482.9" y={0}>
                      ISE
                    </tspan>
                  </text>
                  <text className="cls-4" transform="translate(161.95 278.53)">
                    <tspan className="cls-5">A</tspan>
                    <tspan x="78.21" y={0}>
                      U
                    </tspan>
                    <tspan className="cls-6" x="159.39" y={0}>
                      T
                    </tspan>
                    <tspan x={220} y={0}>
                      O
                    </tspan>
                  </text>
                  <rect
                    className="cls-7"
                    x="13.96"
                    y="233.37"
                    width="138.86"
                    height={12}
                  />
                  <rect
                    className="cls-7"
                    x="482.45"
                    y="233.37"
                    width="138.86"
                    height={12}
                  />
                  <path
                    className="cls-7"
                    d="M238.19,95.86c-2.46,3.35-4.74,6.47-7.05,9.58q-4.68,6.3-9.4,12.57a1.2,1.2,0,0,1-1,.42c-2.46-.59-4.93-1.16-7.33-1.93-3.3-1-6.51-2.33-9.8-3.39-2.15-.7-4.35-1.26-6.55-1.74-3-.65-6.07-1.23-9.13-1.71-3.85-.62-7.72-1.11-11.73-1.67.53-.78,1.1-1.64,1.71-2.47l8.79-11.92c1.68-2.29,3.33-4.6,5.06-6.84a4,4,0,0,1,4.09-1.9c4.32.74,8.67,1.31,13,2,2.24.38,4.46.91,6.66,1.45,2.47.59,5,1.19,7.37,1.93q5,1.53,9.89,3.29C234.57,94.21,236.3,95.06,238.19,95.86Z"
                    transform="translate(0 -5.83)"
                  />
                  <path
                    className="cls-7"
                    d="M211,61l4.28-5.85c1.9-2.61,3.78-5.24,5.73-7.82,1.2-1.59,2.47-3.14,3.79-4.64a1.81,1.81,0,0,1,1.3-.48c2.06.1,4.12.33,6.18.46,4,.27,8,.39,12,.77s7.76,1,11.63,1.51c1.36.18,2.72.4,4.07.67,2.55.53,5.09,1.06,7.62,1.67,1.78.44,3.52,1,5.5,1.59L256.26,71.67c-.61-.22-1.1-.42-1.6-.58-2.9-.91-5.79-1.88-8.72-2.71-4.28-1.2-8.57-2.35-12.88-3.42-2.62-.65-5.28-1.21-7.95-1.66-3.93-.66-7.88-1.18-11.82-1.77C212.57,61.42,211.87,61.23,211,61Z"
                    transform="translate(0 -5.83)"
                  />
                  <path
                    className="cls-7"
                    d="M123.51,52.17c-.67.91-1.28,1.81-2,2.67q-3.69,4.74-7.4,9.45c-2.4,3-4.8,6-7.25,9a1.32,1.32,0,0,1-1.09.15c-.6-.15-1.15-.49-1.75-.7-2.45-.87-4.93-1.68-7.38-2.58q-4.45-1.65-8.87-3.41t-8.54-3.46c-2.55-1.07-5.08-2.19-7.6-3.32-1.3-.58-2.58-1.24-4-1.94.64-.83,1.26-1.63,1.89-2.41L79.83,42.89c1.25-1.55,2.47-3.13,3.73-4.68a2.09,2.09,0,0,1,2.54-.63c2.79,1.08,5.57,2.19,8.35,3.29l.47.18,7.3,2.77c3,1.14,5.9,2.3,8.85,3.43s6,2.28,9,3.44C121.16,51.14,122.27,51.64,123.51,52.17Z"
                    transform="translate(0 -5.83)"
                  />
                  <path
                    className="cls-7"
                    d="M271.46,111l-5.62-3.44c-1-.62-2-1.23-3.11-1.79-1.65-.88-3.3-1.76-5-2.56-2.73-1.29-5.47-2.58-8.26-3.76s-5.75-2.28-8.62-3.43c-.6-.24-1.18-.55-1.85-.87l5.32-7.29c2.36-3.22,4.7-6.46,7.09-9.67,1.32-1.76,2.69-3.48,4.07-5.19a1.07,1.07,0,0,1,.83-.37,20,20,0,0,1,2.55.57c1,.29,1.9.63,2.83,1,3.57,1.32,7.16,2.58,10.7,4,2.6,1,5.15,2.2,7.68,3.4,2.29,1.08,4.53,2.24,6.78,3.41.87.46,1.7,1,2.71,1.64Z"
                    transform="translate(0 -5.83)"
                  />
                  <path
                    className="cls-7"
                    d="M319.05,108.43c-1.67-1.43-3.27-2.79-4.85-4.16-.85-.73-1.63-1.56-2.52-2.25-3.35-2.63-6.71-5.25-10.1-7.83-2.25-1.71-4.55-3.35-6.83-5l-4.53-3.29c.63-.94,1.24-1.88,1.89-2.8l9.53-13.47q1.86-2.61,3.75-5.19c.81-1.1,1.79-1.08,3.37,0,1.12.78,2.22,1.58,3.32,2.38,1.95,1.4,4,2.7,5.81,4.24,2.9,2.44,5.67,5,8.46,7.58q2,1.86,3.89,3.87c1.24,1.35,2.4,2.77,3.56,4.19.71.86.08,1.65-.35,2.29-1.29,1.9-2.7,3.72-4.06,5.57q-3,4.11-6.07,8.2C321.93,104.64,320.51,106.49,319.05,108.43Z"
                    transform="translate(0 -5.83)"
                  />
                  <path
                    className="cls-7"
                    d="M124.35,51.63c.68-1,1.24-1.82,1.86-2.62q4.37-5.68,8.75-11.33c1.44-1.87,2.87-3.75,4.38-5.57a1.86,1.86,0,0,1,1.36-.68c1.83.22,3.66.59,5.48.92s3.75.7,5.63,1.06l10.4,2c2.62.52,5.23,1,7.85,1.55,3.34.64,6.69,1.23,10,1.88a6,6,0,0,1,1.25.51l-4.22,5.74c-1.91,2.6-3.8,5.23-5.74,7.81-1.67,2.21-3.38,4.38-5.12,6.53a1.67,1.67,0,0,1-1.08.55,22.9,22.9,0,0,1-3.51-.21c-2.81-.44-5.6-.94-8.4-1.45-3.42-.63-6.85-1.25-10.26-1.94-2.52-.51-5-1.07-7.52-1.72C131.81,53.74,128.16,52.68,124.35,51.63Z"
                    transform="translate(0 -5.83)"
                  />
                  <path
                    className="cls-7"
                    d="M91.28,94.44c1.22-1.65,2.35-3.22,3.52-4.75q3.72-4.89,7.48-9.75c1-1.3,2-2.57,3.06-3.83a2.76,2.76,0,0,1,2.82-.93c3,.57,5.9,1.19,8.85,1.78,1.91.37,3.83.71,5.74,1.08l10.05,2c2.59.51,5.19,1,7.77,1.56s5.28,1.15,8.1,1.76c-.57.84-1.09,1.63-1.65,2.39-2.49,3.38-5,6.79-7.49,10.13q-2.53,3.34-5.31,6.5a2.45,2.45,0,0,1-1.85.62c-1.64-.16-3.27-.53-4.91-.8-2.31-.39-4.63-.74-6.94-1.15q-4.42-.78-8.84-1.65c-2.72-.55-5.42-1.13-8.12-1.73s-5.27-1.21-7.89-1.87C94.26,95.4,92.88,94.93,91.28,94.44Z"
                    transform="translate(0 -5.83)"
                  />
                  <path
                    className="cls-7"
                    d="M209.93,62.11,205,68.89l-7.16,9.75c-1,1.31-2,2.6-3,3.92-.84,1.13-2.14,1.12-3.27,1.1-2,0-4.06-.44-6.09-.55-11.43-.64-22.87-.76-34.32-.63h-1.52c.72-1,1.28-1.89,1.88-2.71,2.34-3.16,4.71-6.3,7.05-9.47,1.83-2.46,3.58-5,5.45-7.4a4.82,4.82,0,0,1,4.07-2.14c7.82.14,15.64.08,23.46.29,5.89.15,11.77.62,17.66,1A5.82,5.82,0,0,1,209.93,62.11Z"
                    transform="translate(0 -5.83)"
                  />
                  <path
                    className="cls-7"
                    d="M103.29,13.83c1.56-2.35,3.34-4.32,6.31-4.79,1.35-.21,2.68-.56,4-.77,3.65-.57,7.31-1.06,11-1.67a64.78,64.78,0,0,1,16.1-.49c2,.16,3.82,1.23,5.72,1.91.25.08.44.29.68.39,2.14.92,4.29,1.83,6.42,2.77a8.11,8.11,0,0,1,1.19.75c-1.41,1.86-2.78,3.66-4.16,5.46L143,27.22c-.51.66-1,1.3-1.53,2a1.61,1.61,0,0,1-2.18.71c-2.4-.92-4.86-1.67-7.25-2.61-2.73-1.07-5.41-2.25-8.09-3.43q-3.79-1.66-7.54-3.42c-2.35-1.1-4.69-2.21-7-3.38C107.37,16.05,105.38,14.94,103.29,13.83Z"
                    transform="translate(0 -5.83)"
                  />
                  <path
                    className="cls-7"
                    d="M47.38,44.88l19.4,13.93-18,22.49C42,76.16,35.27,71,28.4,65.81,34.12,58,40.76,51.4,47.38,44.88Z"
                    transform="translate(0 -5.83)"
                  />
                  <path
                    className="cls-7"
                    d="M224.28,40.58l-41.84-2.3c.83-1.19,1.48-2.19,2.17-3.15Q188.29,30.08,192,25c.85-1.15,1.75-2.27,2.67-3.37a2.41,2.41,0,0,1,2.49-1,23.24,23.24,0,0,1,3.77,1.44,32,32,0,0,1,3.17,1.9c2.3,1.47,4.64,2.88,6.87,4.45s4.28,3.16,6.29,4.91c2.49,2.17,4.83,4.5,7.24,6.77Z"
                    transform="translate(0 -5.83)"
                  />
                  <path
                    className="cls-7"
                    d="M70.47,26.58c2.37-1.43,4.53-2.81,6.75-4.08,2.79-1.59,5.58-3.21,8.47-4.61,3.3-1.58,6.73-2.89,10.06-4.4a4.48,4.48,0,0,1,3.8-.42c.91.39,1.78.88,2.8,1.38-.7.93-1.37,1.86-2.09,2.76-2.5,3.12-5,6.22-7.53,9.34-2,2.49-4,5-6,7.5a2.38,2.38,0,0,1-3.2.84c-1.62-.81-3.15-1.83-4.71-2.77-1.14-.69-2.26-1.41-3.38-2.12-1.38-.87-2.77-1.74-4.14-2.63A9.85,9.85,0,0,1,70.47,26.58Z"
                    transform="translate(0 -5.83)"
                  />
                </svg>
                <h2>StockWise LLC</h2>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavMobile;
