import React from "react";
import { Link } from "react-router-dom";

const Approaches = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 mt-3">
            <h5>Big problems need</h5>
            <h2 className="fw-bold">bold approaches</h2>

            <div className="mt-4">
              <button className="btn btn-primary w-100 mb-2">Health</button>
              <button className="btn btn-outline-primary w-100 mb-2">
                Social Finance
              </button>
              <button className="btn btn-outline-primary w-100 mb-2">
                Local Governance
              </button>
              <button className="btn btn-outline-primary w-100">
                Water & Sanitation
              </button>
            </div>
          </div>

          <div className="col-lg-4 mt-3">
            <div className="card shadow-sm">
              <div className="position-relative">
                <img
                  src="https://blocks.astratic.com/img/general-img-square.png"
                  className="card-img-top"
                />
              </div>
              <div className="card-body">
                <h3>210 +</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perspiciatis
                </p>
                <Link to="/" className="text-decoration-none btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-3">
            <div className="card shadow-sm">
              <div className="position-relative">
                <img
                  src="https://blocks.astratic.com/img/general-img-square.png"
                  className="card-img-top"
                />
              </div>
              <div className="card-body">
                <h3>2 Bn</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perspiciatis
                </p>
                <Link to="/" className="text-decoration-none btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approaches;
