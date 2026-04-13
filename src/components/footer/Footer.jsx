import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-main mt-3 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-3">
              <Link to="/" className="navbar-brand d-flex mb-3">
                <div className="logo-text">
                  <span className="logo-e">e</span>
                  <span className="logo-gov">GOV</span>
                </div>
                <div className="logo-foundation text-uppercase">Foundation</div>
              </Link>
              <p className="footer-tagline">
                Catalysing digital transformation in public service delivery at
                speed & scale.
              </p>
              <div className="social-icons-footer mt-4">
                <Link to="/">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link to="/">
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
                <Link to="/">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
                <Link to="/">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 mt-3">
              <h5 className="footer-heading">Useful Links</h5>
              <div className="row footer-links-col">
                <div className="col-6">
                  <Link to="/">Home</Link>
                  <Link to="/">Our Impact</Link>
                  <Link to="/">DIGIT Sandbox</Link>
                </div>
                <div className="col-6">
                  <Link to="/">Our People</Link>
                  <Link to="/">Financials</Link>
                  <Link to="/">Contact Us</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-3">
              <h5 className="footer-heading">Subscribe Now</h5>
              <p className="newsletter-desc">
                Receive regular updates of our monthly newsletter DOT – in your
                inbox.
              </p>
              <div className="subscribe-box">
                <input type="email" placeholder="Enter Your Email" />
                <button className="btn-subscribe">
                  <i className="fa-solid fa-envelope"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="copyright">©2026. eGov. All Rights Reserved.</div>
          <div className="footer-bottom-links d-flex align-items-center">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
