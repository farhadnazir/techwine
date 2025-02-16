const Footer = () => {
  return (
    <footer className="zirox-footer zirox-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-3">
            <div data-aos="fade-up" className="zirox-footer__about">
              <img src="/img/footer/footer-logo.png" alt="Logo" />
              <p className="zirox-footer__about-text">Welcome to our best digital agency, because it is pain, but occasionally circumstances.</p>
              <ul className="zirox-footer__about__socials">
                <li>
                  <a href="#">
                    <i className="flaticon-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="flaticon-facebook-logo-in-circular-shape"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="flaticon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="flaticon-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-2">
            <div data-aos="fade-up" data-aos-delay="200" className="zirox-footer__explore">
              <h3>Explore</h3>
              <ul>
                <li>
                  <a href="#">About Company</a>
                </li>
                <li>
                  <a href="#">Meet the Team</a>
                </li>
                <li>
                  <a href="#">News & Media</a>
                </li>
                <li>
                  <a href="#">Our Projects</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-3">
            <div data-aos="fade-up" data-aos-delay="400" className="zirox-footer__gallery">
              <h3>Gallery</h3>
              <div className="row">
                <div className="col-4 mb-3">
                  <a href="/img/footer/footer-img-1.png" className="footer-gallery-item" title="Image 1">
                    <img src="/img/footer/footer-img-1.png" alt="Image 1" />
                  </a>
                </div>
                <div className="col-4 mb-3">
                  <a href="/img/footer/footer-img-2.png" className="footer-gallery-item" title="Image 2">
                    <img src="/img/footer/footer-img-2.png" alt="Image" />
                  </a>
                </div>
                <div className="col-4 mb-3">
                  <a href="/img/footer/footer-img-3.png" className="footer-gallery-item" title="Image 3">
                    <img src="/img/footer/footer-img-3.png" alt="Image 3" />
                  </a>
                </div>
                <div className="col-4 mb-3">
                  <a href="/img/footer/footer-img-4.png" className="footer-gallery-item" title="Image 4">
                    <img src="/img/footer/footer-img-4.png" alt="Image 4" />
                  </a>
                </div>
                <div className="col-4 mb-3">
                  <a href="/img/footer/footer-img-5.png" className="footer-gallery-item" title="Image 5">
                    <img src="/img/footer/footer-img-5.png" alt="Image 5" />
                  </a>
                </div>
                <div className="col-4 mb-3">
                  <a href="/img/footer/footer-img-6.png" className="footer-gallery-item" title="Image 6">
                    <img src="/img/footer/footer-img-6.png" alt="Image 6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-4">
            <div data-aos="fade-up" data-aos-delay="600" className="zirox-footer__news-letter">
              <h3>Newsletter</h3>
              <form action="/" method="POST" id="news-letter-form">
                <input type="email" name="news-letter" id="news-letter" placeholder="Email address" required />
                <button type="submit" id="news-letter-submit">
                  <i className="flaticon-send-1"></i>
                </button>
              </form>
              <ul>
                <li>
                  <i className="flaticon-check-mark"></i>
                  Every Week Updates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="zirox-footer__bar">
        <div className="container">
          <div className="zirox-footer__bar-content">
            <a href="#" className="zirox-footer__bar-content-scroll-top scrollUp">
              <i className="flaticon-up-arrow"></i>
            </a>
            <p>&copy; Copyright {new Date().getFullYear()} zirox - All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
