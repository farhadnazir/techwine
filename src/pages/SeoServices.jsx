import Customer from "@/components/home3/Customer";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const tabData = [
  {
    id: "specializations",
    title: "Advanced SEO Strategies",
    content: `
        At Techwine Solutions, we specialize in data-driven Search Engine Optimization (SEO) techniques 
        to enhance organic traffic, increase visibility, and improve search rankings across Google and other platforms.
      `,
    listItems: [
      "On-Page & Off-Page SEO Optimization",
      "Technical SEO & Site Performance Enhancements",
      "Keyword Research & Competitive Analysis",
    ],
  },
  {
    id: "intelligence",
    title: "AI-Driven SEO & Analytics",
    content: `
        Our AI-powered SEO strategies ensure real-time performance tracking, predictive analysis, and intelligent keyword optimization**, 
        helping businesses stay ahead in search engine rankings.
      `,
    listItems: [],
  },
  {
    id: "precautions",
    title: "SEO for Long-Term Growth",
    content: `
        SEO is an ongoing process, and we focus on long-term strategies that provide sustained organic growth, 
        audience retention, and improved conversion rates.
      `,
    listItems: [
      "Content optimization for higher search rankings",
      "Link-building strategies for domain authority improvement",
    ],
  },
  {
    id: "super-support",
    title: "Continuous SEO Monitoring & Support",
    content: `
        We provide regular SEO audits, performance monitoring, and continuous improvements 
        to ensure that your website maintains top search rankings.
      `,
    listItems: ["Monthly SEO performance reports & strategy refinement"],
  },
];

const SeoServices = () => {
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
                  <img src="/img/services/seo.png" alt="SEO Services" />
                </div>
                <div className="zirox-services-details__left-data-visualization">
                  <h3>SEO Solutions for Business Growth</h3>
                  <p>
                    Techwine Solutions provides <span className="text-danger">customized SEO strategies </span> that help businesses rank higher, attract quality leads, and increase conversions.
                  </p>

                  <p>
                    Our expert team uses <span className="text-danger">proven techniques and the latest Google algorithms</span> to <span className="text-danger">enhance online presence</span> and drive targeted traffic.
                  </p>

                  <ul>
                    <li>
                      <span>
                        <i className="flaticon-check"></i>
                      </span>
                      <p>Keyword research & competitive analysis</p>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-check"></i>
                      </span>
                      <p>Website speed & technical SEO optimization</p>
                    </li>
                  </ul>

                  <p>
                    We use the best SEO tools, including <span className="text-danger">Google Search Console, SEMrush, Ahrefs, and Yoast SEO</span>, ensuring data-driven insights and measurable success.
                  </p>
                </div>

                <div className="zirox-services-details__left-video">
                  <div className="zirox-services-details__left-video-img">
                    <img src="/img/services/seo-2.png" alt="SEO Video" />
                    <div className="zirox-services-video__popup">
                      <span onClick={() => setOpen(true)} className="cursor-pointer zirox-services-video__popup-img popup-youtube">
                        <span>
                          <i className="flaticon-play-button"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <p>Discover how our SEO strategies drive results and business success.</p>
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
                  <h3>SEO Services</h3>
                  <div className="zirox-services-details__right-box-category-btns">
                    <a href="#">Technical SEO <i className="flaticon-right-arrow"></i></a>
                    <a href="#">On-Page & Off-Page SEO <i className="flaticon-right-arrow"></i></a>
                    <a href="#">Local SEO Optimization <i className="flaticon-right-arrow"></i></a>
                    <a href="#">SEO Audits & Reports <i className="flaticon-right-arrow"></i></a>
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
                    <p>Need help with SEO? Contact us today.</p>
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

export default SeoServices;
