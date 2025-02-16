const Testimonial = () => {
  return (
    <section className="zirox-testimonials zirox-section">
      <div className="container">
        <div className="zirox-testimonials__header">
          <div>
            <h6 data-aos="fade-up">Testimonials</h6>
            <h2 data-aos="fade-up" data-aos-delay="200">
              What They&apos;re Saying Happy Clients
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="zirox-button text-bold">
              Client Feedback
            </div>
          </div>
        </div>
        <div className="row">
          {/* MerchMind Development */}
          <div className="col-12 col-md-6 col-xl-4">
            <div className="zirox-testimonials__item ">
              <div className="zirox-testimonials__item-header">
                <div className="zirox-testimonials__item-header-img">
                  <img src="/img/testimonials/author-1.png" alt="Author" />
                  <span>
                    <i className="flaticon-left-quotes-sign"></i>
                  </span>
                </div>
                <div className="zirox-testimonials__item-header-stars">
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                </div>
              </div>
              <p className="zirox-testimonials__item-text">
                "Techwine Solutions transformed our vision into a powerful, scalable platform with MerchMind. Their expertise in MERN stack development ensured a seamless user experience and robust functionality. Highly recommended!"
              </p>
              <div className="zirox-testimonials__item-author-info">
                <h3 className="text-center">MerchMind Team</h3>
                <h6 className="text-center">E-commerce Platform</h6>
              </div>
            </div>
          </div>

          {/* CDB Properties Lahore (Design & Video Creative Services) */}
          <div className="col-12 col-md-6 col-xl-4">
            <div className="zirox-testimonials__item ">
              <div className="zirox-testimonials__item-header">
                <div className="zirox-testimonials__item-header-img">
                  <img src="/img/testimonials/author-2.png" alt="Author" />
                  <span>
                    <i className="flaticon-left-quotes-sign"></i>
                  </span>
                </div>
                <div className="zirox-testimonials__item-header-stars">
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                </div>
              </div>
              <p className="zirox-testimonials__item-text">
                "Working with Techwine Solutions was an absolute pleasure. They provided outstanding graphic design and video creative services for CDB Properties Lahore, elevating our brand presence and marketing efforts. Exceptional quality and professionalism!"
              </p>
              <div className="zirox-testimonials__item-author-info">
                <h3 className="text-center">CDB Properties Lahore</h3>
                <h6 className="text-center">Hamza Sher Marketing Head</h6>
              </div>
            </div>
          </div>

          {/* Asaan Optics Flutter Dart App - Sultan Muhammad */}
          <div className="col-12 col-md-6 col-xl-4">
            <div className="zirox-testimonials__item ">
              <div className="zirox-testimonials__item-header">
                <div className="zirox-testimonials__item-header-img">
                  <img src="/img/testimonials/author-3.png" alt="Author" />
                  <span>
                    <i className="flaticon-left-quotes-sign"></i>
                  </span>
                </div>
                <div className="zirox-testimonials__item-header-stars">
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                </div>
              </div>
              <p className="zirox-testimonials__item-text">
                "Techwine Solutions delivered a top-notch Flutter Dart application for Asaan Optics. The app is user-friendly, fast, and feature-rich, meeting all our business needs. Their commitment to quality and innovation is truly commendable."
              </p>
              <div className="zirox-testimonials__item-author-info">
                <h3 className="text-center">Sultan Muhammad</h3>
                <h6 className="text-center">Founder, Asaan Optics</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
