import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
const PopularServices = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="zirox-services zirox-section">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-6 col-lg">
              <div data-aos="fade-up" className="zirox-services-box ">
                <div className="zirox-services-box__img">
                  <i className="flaticon-software-development"></i>
                </div>
                <h3>Websites & Apps</h3>
                <p>Developing dynamic web and mobile solutions tailored to your business needs.</p>
                <a href="/development-services" className="zirox-services-box-icon">
                  <i className="flaticon-plus"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg">
              <div data-aos="fade-up" data-aos-delay="300" className="zirox-services-box ">
                <div className="zirox-services-box__img">
                  <i className="flaticon-marketing-strategy"></i>
                </div>
                <h3>Digital Marketing</h3>
                <p>Driving targeted traffic and boosting your online presence through strategic digital marketing.</p>
                <Link to="/digital-marketing-services" className="zirox-services-box-icon">
                  <i className="flaticon-plus"></i>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <div data-aos="fade-up" data-aos-delay="400" className="zirox-services-text ">
                <h6>Our Services</h6>
                <h2 className="text-white">Solution We provide Services</h2>
                <p>Techwine Solutions is a leading digital agency specializing in design, development, marketing, and creative solutions. We empower businesses to thrive online.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <div data-aos="fade-up" data-aos-delay="500" className="zirox-services-video ">
                <img src="/img/services/service-img.png" alt="Video" />
                <div className="zirox-services-video__popup">
                  <span onClick={() => setOpen(true)} className="zirox-services-video__popup-img popup-youtube">
                    <span>
                      <i className="flaticon-play-button-arrowhead"></i>
                    </span>
                  </span>
                  <h3 className="text-white text-center">
                    Techwine Digital <br /> Solutions
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg d-flex align-items-end">
              <div data-aos="fade-up" data-aos-delay="600" className="zirox-services-box ">
                <div className="zirox-services-box__img">
                  <i className="flaticon-sketch"></i>
                </div>
                <h3>Videos & Designs</h3>
                <p>Creating engaging video content and stunning designs that capture your brand's essence.</p>
                <Link to="/design-creatives-services" className="zirox-services-box-icon">
                  <i className="flaticon-plus"></i>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg d-flex align-items-end">
              <div data-aos="fade-up" data-aos-delay="700" className="zirox-services-box ">
                <div className="zirox-services-box__img">
                  <i className="flaticon-data-security"></i>
                </div>
                <h3>SEO Optimization</h3>
                <p>Improving your search engine rankings and organic visibility to attract more customers.</p>
                <Link to="/seo-services" className="zirox-services-box-icon">
                  <i className="flaticon-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={isOpen} videoId="A7KgdoxGJAw" onClose={() => setOpen(false)} />
    </>
  );
};

export default PopularServices;
