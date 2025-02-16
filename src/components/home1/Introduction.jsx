import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <section className="zirox-about zirox-about--introduction zirox-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="zirox-about__left">
              <img src="/img/about/introduction-left.png" alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="zirox-about__right">
              <h6 data-aos="fade-up">Our Introduction</h6>
              <h2 data-aos="fade-up" data-aos-delay="200">
                You&apos;re Ready To grow Your Business With <span className="text-danger">T</span>echwine
              </h2>
              <p className="zirox-about__right-text" data-aos="fade-up" data-aos-delay="400">
              Techwine Solutions is your dedicated partner, offering comprehensive services in design, development, marketing, and creative solutions. We empower businesses to grow by crafting dynamic websites, implementing modern marketing strategies, and delivering impactful creative assets. From startups to established enterprises, we tailor our expertise to meet your unique needs and drive excellent results.
              </p>
              <ul data-aos="fade-up" data-aos-delay="600">
                <li>
                  <i className="flaticon-tick-inside-circle"></i>
                  <p>Digital Marketing</p>
                </li>
                <li>
                  <i className="flaticon-tick-inside-circle"></i>
                  <p>Designs & Creatives</p>
                </li>
                <li>
                  <i className="flaticon-tick-inside-circle"></i>
                  <p>Social Media Management</p>
                </li>
                <li>
                  <i className="flaticon-tick-inside-circle"></i>
                  <p>Development</p>
                </li>
              </ul>
              <Link to="/contact" className="zirox-button">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
