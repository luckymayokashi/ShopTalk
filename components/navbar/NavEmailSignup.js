const NavEmailSignup = () => {
  //API for Mailchip to adda subscriber and also animation for successful signup

  return (
    <div className="col-sm-6 col-md-6 col-lg-5 d-flex justify-content-end">
      <div
        className="d-none d-sm-none d-md-flex flex-column justify-content-end align-items-baseline"
        id="header_nav--signup-form"
      >
        <p className="text-end" id="header_nav--signup-form-text">
          Great to see you, let&apos;s keep in touch.
        </p>
        <div>
          <input
            type="text"
            id="header_nav--signup-form-email"
            placeholder="Email Address"
          />
          <button
            className="btn btn-primary btn-sm shoptalk-btn sub-btn"
            id="header_nav--signup-form-btn"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavEmailSignup;
