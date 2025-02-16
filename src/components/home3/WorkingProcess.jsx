const WorkingProcess = () => {
  return (
    <section className="zirox-working-process zirox-section">
      <div className="container">
        <h6 data-aos="fade-up" className="text-center">
          Working Process
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="300" className="text-center text-white mx-auto">
        Crafting Digital Strategies That Deliver Results
        </h2>
        <div className="row flex-row">
          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3">
            <div className="zirox-working-process-box">
              <div className="zirox-working-process-box__img">
                <i className="flaticon-planning" style={{ transform: "scaleX(-1)" }}></i>
              </div>
              <h3 className="text-white mb-2">Strategic <br /> Planning</h3>
              <p>We analyze business needs and create a tailored digital roadmap for success.</p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="col-12 col-md-6 col-lg-3">
            <div className="zirox-working-process-box">
              <div className="zirox-working-process-box__img">
                <i className="flaticon-technical-service"></i>
              </div>
              <h3 className="text-white mb-2">Innovative Development</h3>
              <p>Our team builds scalable and cutting-edge IT solutions that drive efficiency.</p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className="col-12 col-md-6 col-lg-3">
            <div className="zirox-working-process-box">
              <div className="zirox-working-process-box__img">
                <i className="flaticon-business"></i>
              </div>
              <h3 className="text-white mb-2">Data-Driven Optimization</h3>
              <p>We use data analytics to enhance digital performance and business growth.</p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="col-12 col-md-6 col-lg-3">
            <div className="zirox-working-process-box">
              <div className="zirox-working-process-box__img">
                <i className="flaticon-user-data"></i>
              </div>
              <h3 className="text-white mb-2">Smooth Deployment & Support</h3>
              <p>From launch to continuous improvement, we ensure smooth execution and support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
