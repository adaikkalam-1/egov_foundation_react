const Hero = () => {
  return (
    <section className="hero d-flex align-items-center">
      <div className="container py-3">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4">
            <div className="animate-up">
              <h1 className="hero-title">
                20 years of digital transformation in public service delivery
              </h1>
              <span className="hero-highlight mb-2">It's possible.</span>
              <p className="hero-description mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                fugit necessitatibus placeat in minima laborum harum nihil
                accusamus sequi repellat sit dicta eos aliquam praesentium
                voluptates non, autem tempore. Dolor! accusamus sequi repellat
              </p>
              <div className="d-flex flex-wrap gap-3 mt-1">
                <button className="btn btn-primary px-3">Our Approach</button>
                <button className="btn btn-outline-primary px-3">
                  Our Impact
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 text-center animate-up delay-1">
            <div className="position-relative">
              <img
                src="https://blocks.astratic.com/img/general-img-square.png"
                alt="Digital Transformation Illustration"
                className="img-fluid rounded-4 border border-2"
                style={{ maxHeight: "400px" }}
              />
              <div
                className="position-absolute top-0 start-0 translate-middle p-2 bg-white rounded-3 shadow-sm d-none d-lg-block"
                style={{ zIndex: 1 }}
              >
                <span className="fw-bold text-primary">20+</span>
                <small className="text-muted">Years</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
