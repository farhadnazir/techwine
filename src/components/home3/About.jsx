import { Link } from "react-router-dom";

const AboutUs3 = () => {
  return (
    <section className="zirox-about zirox-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="zirox-about__wrapper">
              <div data-aos="fade-up" className="zirox-about__left ">
                <div data-aos="fade-up" data-aos-delay="300" className="zirox-about__left-exp">
                  <h3>10+</h3> {/* Example: Replace with actual years or a relevant metric */}
                  <p>Years of Experience</p> {/* Or "Years in Business," "Projects Completed," etc. */}
                </div>
                <div className="zirox-about__left__bg__img overflow-hidden">
                  {/* Background Image -  Consider using an image relevant to Techwine's work */}
                </div>
                <div className="zirox-about__left__front__img overflow-hidden">
                   {/* Foreground Image - Consider using an image relevant to Techwine's work */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="zirox-about__right ">
              <h6 data-aos="fade-up" data-aos-delay="300">
                Get To Know Us
              </h6>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Leading The Best Digital Solutions Company
              </h2>
              <p data-aos="fade-up" data-aos-delay="500" className="zirox-about__right-text ">
                Techwine Solutions is a leading digital agency specializing in design, development, marketing, and creative solutions. We empower businesses to thrive online by crafting innovative and results-driven strategies. Our team of experts is passionate about helping our clients achieve their goals through cutting-edge technology and creative thinking. We offer a wide range of services, from web design and development to digital marketing and branding, all tailored to meet your unique needs.
              </p>
              <div className="row align-items-center mb-3">
                <div className="col-12 col-md-6">
                  <div data-aos="fade-up" data-aos-delay="600" className="zirox-box">
                    <div className="zirox-box-img">
                      <i className="flaticon-group"></i> {/* Consider a more relevant icon */}
                    </div>
                    <h3>Our Mission</h3>
                    <p>To deliver exceptional digital solutions that drive growth and maximize our clients' ROI.</p> {/* Replace with Techwine's actual mission */}
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div data-aos="fade-up" data-aos-delay="700" className="zirox-box">
                    <div className="zirox-box-img">
                      <i className="flaticon-watch-tv"></i> {/* Consider a more relevant icon */}
                    </div>
                    <h3>Our Vision</h3>
                    <p>To be the most trusted and innovative digital agency, setting the standard for excellence in the industry.</p> {/* Replace with Techwine's actual vision */}
                  </div>
                </div>
              </div>
              <Link data-aos="fade-up" data-aos-delay="800" to="/contact" className="zirox-button">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs3;