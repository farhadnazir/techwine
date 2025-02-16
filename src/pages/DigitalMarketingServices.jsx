import Customer from "@/components/home3/Customer";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const tabData = [
  {
    id: "specializations",
    title: "Comprehensive Marketing",
    content: `
        At Techwine Solutions, we drive business growth through result-oriented digital marketing strategies. 
        Our team specializes in **SEO, social media marketing, paid advertising, and content marketing** to 
        boost brand visibility, generate leads, and increase conversions.
      `,
    listItems: [
      "Data-driven Social Media Marketing (SMM)",
      "Search Engine Optimization (SEO) for higher rankings",
      "Pay-Per-Click (PPC) Advertising & Google Ads",
    ],
  },
  {
    id: "intelligence",
    title: "AI-Powered Strategies",
    content: `
        We leverage AI and data analytics to craft personalized marketing campaigns. 
        Our intelligent approach ensures targeted reach, higher engagement, and optimized ad spend for maximum ROI.
      `,
    listItems: [],
  },
  {
    id: "precautions",
    title: "Brand Positioning & Online Reputation",
    content: `
        Our strategies go beyond ads – we **enhance brand identity, manage online reputation, and optimize user engagement** 
        to establish your brand as an authority in your industry.
      `,
    listItems: [
      "Brand awareness and reputation management",
      "Engaging content marketing and storytelling",
    ],
  },
  {
    id: "super-support",
    title: "Ongoing Support",
    content: `
        Marketing is an ongoing process, and we stay with you every step of the way. 
        We provide **real-time performance tracking, optimization, and continuous strategy updates** to keep your business ahead of the competition.
      `,
    listItems: ["Regular campaign monitoring & performance reports"],
  },
];

const DigitalMarketingServices = () => {
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
                  <img src="/img/services/marketing-2.png" alt="Marketing Services" />
                </div>
                <div className="zirox-services-details__left-data-visualization">
                  <h3>Strategic Digital Marketing</h3>
                  <p>
                    Techwine Solutions helps businesses grow through **customized digital marketing solutions** 
                    that drive engagement, generate leads, and increase revenue.
                  </p>

                  <p>
                    We focus on creating high-impact campaigns that deliver **measurable results**, ensuring your brand stays ahead of the competition.
                  </p>

                  <ul>
                    <li>
                      <span>
                        <i className="flaticon-check"></i>
                      </span>
                      <p>Targeted social media marketing and brand promotions</p>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-check"></i>
                      </span>
                      <p>Optimized SEO strategies for long-term visibility</p>
                    </li>
                  </ul>

                  <p>
                    We utilize the best marketing platforms, including **Google Ads, Facebook Ads, Instagram, LinkedIn, and TikTok**, 
                    ensuring maximum reach and engagement for your business.
                  </p>
                </div>

                <div className="zirox-services-details__left-video">
                  <div className="zirox-services-details__left-video-img">
                    <img src="/img/services/marketing.png" alt="Marketing Video" />
                    <div className="zirox-services-video__popup">
                      <span onClick={() => setOpen(true)} className="cursor-pointer zirox-services-video__popup-img popup-youtube">
                        <span>
                          <i className="flaticon-play-button"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <p>Discover how our data-driven marketing strategies help brands succeed.</p>
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
                  <h3>Marketing Services</h3>
                  <div className="zirox-services-details__right-box-category-btns">
                    <a href="#">Social Media Marketing <i className="flaticon-right-arrow"></i></a>
                    <a href="#">Search Engine Optimization <i className="flaticon-right-arrow"></i></a>
                    <a href="#">Google & Meta Ads <i className="flaticon-right-arrow"></i></a>
                    <a href="#">Email & Content Marketing <i className="flaticon-right-arrow"></i></a>
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

                <div className="zirox-services-details__right-box zirox-services-details__right-box--support">
                  <div className="zirox-services-details__right-box-support-content">
                    <h3>We Are Always Support</h3>
                    <p>Need help with your marketing strategy? Contact us today.</p>
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

export default DigitalMarketingServices;
