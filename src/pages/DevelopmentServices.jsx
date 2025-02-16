import Customer from "@/components/home3/Customer";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const tabData = [
  {
    id: "specializations",
    title: "Our Expertise",
    content: `
        At Techwine Solutions, we specialize in developing high-performance websites and mobile applications that elevate businesses in the digital era. Our solutions are tailored to meet specific client needs, ensuring efficiency, scalability, and a seamless user experience.
      `,
    listItems: [
      "Custom Website Development for businesses of all sizes",
      "Cross-platform Mobile App Development (iOS & Android)",
      "E-commerce Solutions & CMS Development",
    ],
  },
  {
    id: "intelligence",
    title: "Cutting-Edge Technology",
    content: `
        We integrate the latest technologies, including AI, cloud computing, and automation, to create intelligent, future-ready digital products that enhance business growth and customer engagement.
      `,
    listItems: [],
  },
  {
    id: "precautions",
    title: "Security & Performance",
    content: `
        Security and performance are at the core of every project we undertake. Our development process includes rigorous testing, optimization, and cybersecurity measures to ensure a reliable and robust digital presence.
      `,
    listItems: [
      "End-to-end security implementation",
      "Speed optimization for seamless user experience",
    ],
  },
  {
    id: "super-support",
    title: "Ongoing Support & Maintenance",
    content: `
        Our commitment extends beyond development. We provide continuous support, updates, and maintenance services to ensure your website or app remains functional, secure, and up to date.
      `,
    listItems: ["Regular updates & technical support"],
  },
];

const DevelopmentServices = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("specializations");

  return (
    <>
      <section className="zirox-services-details zirox-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="zirox-services-details__left">
                <div className="zirox-services-details__left-main-img">
                  <img src="/img/services/development-service.jpg" alt="Main Image" />
                </div>
                <div className="zirox-services-details__left-data-visualization">
                  <h3>Website & App Development</h3>
                  <p>
                    Techwine Solutions is your trusted partner in building top-tier websites and applications that drive business success. 
                    We create <span className="text-danger">scalable, secure, and high-performing digital solutions</span>that enhance brand presence and customer engagement.
                  </p>

                  <p>
                    Our team specializes in full-stack development, covering frontend, backend, UI/UX design, and system architecture, ensuring a seamless user experience.
                  </p>

                  <ul>
                    <li>
                      <span>
                        <i className="flaticon-check"></i>
                      </span>
                      <p>Custom web & mobile app solutions tailored to your business</p>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-check"></i>
                      </span>
                      <p>End-to-end development, from planning to deployment</p>
                    </li>
                  </ul>

                  <p>
                    We utilize the latest frameworks, including React, Flutter, Laravel, and Node.js**, to develop robust and intuitive digital solutions that elevate businesses.
                  </p>
                </div>

                <div className="zirox-services-details__left-video">
                  <div className="zirox-services-details__left-video-img">
                    <img src="/img/services/development-service-2.jpg" alt="Video" />
                    <div className="zirox-services-video__popup">
                      <span onClick={() => setOpen(true)} className="cursor-pointer zirox-services-video__popup-img popup-youtube">
                        <span>
                          <i className="flaticon-play-button"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <p>Explore our work and see how we bring ideas to life with powerful digital solutions.</p>
                </div>

                <div className="zirox-services-details__left-tab">
                  <ul className="zirox-services-details__left-tab-links">
                    {tabData.map((tab) => (
                      <li key={tab.id}>
                        <button
                          className={`zirox-services-details__left-tab-links-link ${
                            activeTab === tab.id ? "zirox-services-details__left-tab-links-link--active" : ""
                          }`}
                          onClick={() => setActiveTab(tab.id)}
                        >
                          {tab.title}
                        </button>
                      </li>
                    ))}
                  </ul>

                  {tabData.map(
                    (tab) =>
                      activeTab === tab.id && (
                        <div key={tab.id} className="zirox-services-details__left-tab-content">
                          <p>{tab.content}</p>
                          {tab.listItems.length > 0 && (
                            <ul>
                              {tab.listItems.map((item, index) => (
                                <li key={index}>
                                  <i className="flaticon-play-3"></i>
                                  <p>{item}</p>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ),
                  )}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="zirox-services-details__right">
                <div className="zirox-services-details__right-box">
                  <h3>Search</h3>
                  <div className="zirox-services-details__right-box-search">
                    <input type="text" placeholder="Search.." />
                    <div className="zirox-services-details__right-box-search-btn">
                      <button>
                        <i className="flaticon-search-1"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="zirox-services-details__right-box">
                  <h3>Services Category</h3>
                  <div className="zirox-services-details__right-box-category-btns">
                    <a href="#">UI/UX Designing <i className="flaticon-right-arrow"></i></a>
                    <a href="#">Website Development <i className="flaticon-right-arrow"></i></a>
                    <a href="#">E-commerce Solutions <i className="flaticon-right-arrow"></i></a>
                    <a href="#">Custom Software Development <i className="flaticon-right-arrow"></i></a>
                  </div>
                </div>

                <div className="zirox-services-details__right-box">
                  <h3>Have A Question?</h3>
                  <div className="zirox-services-details__right-box-ques">
                    <form>
                      <div className="zirox-services-details__right-box-ques-input">
                        <input type="text" placeholder="Name" />
                        <i className="flaticon-user"></i>
                      </div>
                      <div className="zirox-services-details__right-box-ques-input">
                        <textarea rows="5" placeholder="Your Message"></textarea>
                        <i className="flaticon-open-mail"></i>
                      </div>
                      <button className="zirox-button">Submit Now</button>
                    </form>
                  </div>
                </div>
                <div className="zirox-services-details__right-box zirox-services-details__right-box--support ">
                  <div className="zirox-services-details__right-box-support-content">
                    <h3>We Are Always Support</h3>
                    <p>Great fruit grass their are first over spirit good whose very subdue</p>
                    <a href="contact.html" className="zirox-button">
                      Send Message
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

      </section>
        <Customer />

      <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={open} videoId="A7KgdoxGJAw" onClose={() => setOpen(false)} />
    </>
  );
};

export default DevelopmentServices;
