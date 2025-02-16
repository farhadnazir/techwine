import Projects from "@/components/home3/Projects";

const DevelopmentWork = () => {
  return (
    <section className="zirox-portfolio-detail zirox-section">
      <div className="container">
        <div className="zirox-portfolio-detail-items">
          <div className="zirox-portfolio-detail-items-item">
            <div className="zirox-portfolio-detail-items-item-img">
              <img src="/img/portfolio/merchmind.png" alt="MerchMind - AI Powered Custom Printing" />
            </div>
            <div className="zirox-portfolio-detail-items-item-info ">
              <div className="row align-items-center">
                <div className="col-6 col-md line">
                  <div className="zirox-portfolio-detail-items-item-info-box">
                    <p>Clients:</p>
                    <h4>MerchMind</h4>
                  </div>
                </div>
                <div className="col-6 col-md text-md-center line">
                  <div className="zirox-portfolio-detail-items-item-info-box">
                    <p>Category:</p>
                    <h4>MERN Stack Development, AI Integration</h4>
                  </div>
                </div>
                <div className="col-6 col-md text-md-center line">
                  <div className="zirox-portfolio-detail-items-item-info-box">
                    <p>Date:</p>
                    <h4>January 2024</h4>
                  </div>
                </div>
                <div className="col-6 col-md">
                  <ul className="zirox-portfolio-detail-items-item-info-socials">
                    <li>
                      <a href="#">
                        <i className="flaticon-facebook-app-symbol"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="zirox-portfolio-detail-items-item-title">
              MerchMind - AI Powered Custom Printing Ecommerce
            </h3>
            <p className="zirox-portfolio-detail-items-item-text">
              MerchMind is an innovative <span className="text-danger">AI-powered custom printing ecommerce web application</span> designed to transform how businesses and individuals create personalized merchandise. The platform leverages AI-based design automation, real-time visualization, and a seamless ordering system to offer a frictionless user experience.
            </p>

            <p className="zirox-portfolio-detail-items-item-text">
              Built on the MERN stack <span className="text-danger">(MongoDB, Express.js, React, and Node.js)</span>, MerchMind ensures scalability, security, and high performance. The AI-driven system enables customers to generate unique designs, preview them in real time, and place orders effortlessly. The backend is optimized for efficient data handling, and the system integrates with multiple payment gateways and automated order management.
            </p>

            <p className="zirox-portfolio-detail-items-item-text">
              With responsive UI/UX design, MerchMind provides an intuitive and engaging experience for users across devices. From on-demand printing to automated fulfillment, this solution is revolutionizing the custom printing industry.
            </p>
          </div>
        </div>
        <div className="zirox-portfolio-detail-btns">
          <a href="#" className="zirox-portfolio-detail-btns-prev">
            <i className="flaticon-left-arrow"></i> Previous
          </a>
          <a href="#" className="zirox-portfolio-detail-btns-next">
            Next<i className="flaticon-right-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentWork;
