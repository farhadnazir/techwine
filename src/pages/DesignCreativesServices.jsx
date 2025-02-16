import Customer from "@/components/home3/Customer";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const tabData = [
  {
    id: "specializations",
    title: "Creative Excellence",
    content: `
        At Techwine Solutions, we bring ideas to life through stunning visuals and captivating video content. 
        From high-quality video editing to eye-catching graphics, we specialize in creating content that engages, informs, and converts.
      `,
    listItems: [
      "Professional Video Editing & Post-Production",
      "Promotional Videos & Social Media Reels",
      "Creative Motion Graphics & Animation",
    ],
  },
  {
    id: "intelligence",
    title: "Innovative Visual Storytelling",
    content: `
        Our team combines creativity with cutting-edge technology to produce visually compelling content. 
        Whether it's a corporate video, product showcase, or branding animation, we craft designs that leave a lasting impact.
      `,
    listItems: [],
  },
  {
    id: "precautions",
    title: "Quality & Performance",
    content: `
        We ensure every video and design is optimized for maximum clarity, engagement, and platform compatibility. 
        Our process includes high-resolution rendering, seamless transitions, and strategic branding elements.
      `,
    listItems: [
      "High-definition video rendering & color grading",
      "Optimized visuals for web, mobile, and social media",
    ],
  },
  {
    id: "super-support",
    title: "Ongoing Creative Support",
    content: `
        Our services go beyond just delivery. We offer ongoing revisions, updates, and creative support to ensure your visuals remain fresh and engaging.
      `,
    listItems: ["Regular content updates & creative consulting"],
  },
];

const DesignCreativesServices = () => {
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
                  <img src="/img/services/services-detail-img-4.png" alt="Creative Services" />
                </div>
                <div className="zirox-services-details__left-data-visualization">
                  <h3>Video Editing & Graphic Design</h3>
                  <p>
                    At Techwine Solutions, we craft professional video content and visually stunning designs that make an impact. 
                    Whether you need promotional reels, branded animations, or dynamic social media content, we deliver excellence.
                  </p>

                  <p>
                    Our team specializes in post-production editing, visual effects, branding animations, and high-quality graphics, 
                    ensuring your content stands out in the digital space.
                  </p>

                  <ul>
                    <li>
                      <span>
                        <i className="flaticon-check"></i>
                      </span>
                      <p>Professional video editing with seamless transitions & effects</p>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-check"></i>
                      </span>
                      <p>Engaging social media reels, ads, and promotional content</p>
                    </li>
                  </ul>

                  <p>
                    We use<span className="text-danger">Adobe Premiere Pro, After Effects, Photoshop, and Illustrator</span> to create visually appealing content that tells your brand’s story effectively.
                  </p>
                </div>

                <div className="zirox-services-details__left-video">
                  <div className="zirox-services-details__left-video-img">
                    <img src="/img/services/video-1.jpg" alt="Video Editing Showcase" />
                    <div className="zirox-services-video__popup">
                      <span onClick={() => setOpen(true)} className="cursor-pointer zirox-services-video__popup-img popup-youtube">
                        <span>
                          <i className="flaticon-play-button"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <p>Check out our latest video projects and see our creativity in action.</p>
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
                  <h3>Creative Services</h3>
                  <div className="zirox-services-details__right-box-category-btns">
                    <a href="#">Video Editing <i className="flaticon-right-arrow"></i></a>
                    <a href="#">Promotional Videos<i className="flaticon-right-arrow"></i></a>
                    <a href="#">Graphic Designs<i className="flaticon-right-arrow"></i></a>
                    <a href="#">Branding & Visual Identity <i className="flaticon-right-arrow"></i></a>
                    <a href="#">Social Media Content Creation <i className="flaticon-right-arrow"></i></a>
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
                    <p>Need help with your creative project? Contact us for expert guidance.</p>
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

      <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={open} videoId="2FZOnH-VSGI" onClose={() => setOpen(false)} />
    </>
  );
};

export default DesignCreativesServices;
