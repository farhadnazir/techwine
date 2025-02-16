import { useRef, useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useEffect } from "react";
const Hero = () => {
  const [open, setOpen] = useState(false);
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
  };

  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState({ temp: 0, condition: "" });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    fetch("https://api.openweathermap.org/data/2.5/weather?q=ISLAMABAD&appid=67f7eff2930af884b35533523f92c0a8&units=metric")
      .then((response) => response.json())
      .then((data) => {
        setWeather({
          temp: data.main.temp,
          condition: data.weather[0].description,
        });
      });

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <section className="zirox-hero-section zirox-hero-section--home-2">
        <div className="zirox-hero-section__vectors">
          <img className="zirox-hero-section__vectors-left" src="/img/home-2/home-2-hero-left-vector.png" alt="" />
          <img className="zirox-hero-section__vectors-right" src="/img/home-2/home-2-hero-right-vector.png" alt="" />
        </div>
        <div className="container-fluid">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
            className="home-2-hero-slider"
          >
            {/* <!-- Slider Item --> */}
            <div className="zirox-hero__slider-item zirox-hero">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-12 col-xl-8 d-flex align-items-center px-0">
                    <div className="zirox-hero__content" data-aos="fade-up" data-aos-duration="1">
                      <h1 className="text-white">
                        Modern Business Developement <br /> Agency
                      </h1>
                      <Link to="/contact" className="zirox-button zirox-button-primary ">
                        Contact Us
                      </Link>
                      <div className="zirox-hero__content-popup">
                        <span onClick={() => setOpen(true)} className="zirox-hero__content-popup-video popup-youtube">
                          <i className="flaticon-play-button"></i>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
                          <defs>
                            <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle_top_1">
                              <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
                            </path>
                            <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250">
                              <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="195 250 250" to="555 250 250" repeatCount="indefinite" />
                            </path>
                          </defs>
                          <text dy="70" textLength="1220">
                            <textPath xlinkHref="#textcircle_top_1">Techwine Solutions</textPath>
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Slider Item End --> */}

            {/* <!-- Slider Item --> */}
            <div className="zirox-hero__slider-item zirox-hero">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-12 col-xl-8 d-flex align-items-center px-0">
                    <div className="zirox-hero__content" data-aos="fade-up" data-aos-duration="1">
                      <h1 className=" text-white">
                        Modern Digital Solutions <br /> Agency
                      </h1>
                      <Link to={"/contact"} className="zirox-button zirox-button-primary ">Contact Us</Link>
                      <div className="zirox-hero__content-popup">
                        <span onClick={() => setOpen(true)} className="zirox-hero__content-popup-video popup-youtube">
                          <i className="flaticon-play-button"></i>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
                          <defs>
                            <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle_top_2">
                              <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
                            </path>
                            <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250">
                              <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="195 250 250" to="555 250 250" repeatCount="indefinite" />
                            </path>
                          </defs>
                          <text dy="70" textLength="1220">
                            <textPath xlinkHref="#textcircle_top_2">Techwine Solutions</textPath>
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Slider Item End --> */}
          </Slider>
        </div>
        <ul className="zirox-hero-section__time">
          <li>
            <i className="flaticon-sun "></i>
            <p>{weather.temp} °C</p>
          </li>
          <li>
            <i className="flaticon-clock"></i>
            <p>TIME: {time.toLocaleTimeString()}</p>
          </li>
        </ul>
        <div className="zirox-hero-section__slider-btn">
          <button onClick={next} className="zirox-hero-section__slider-btn__next">
            <i className="flaticon-right-arrow-2"></i>
          </button>
          <button onClick={previous} className="zirox-hero-section__slider-btn__prev">
            <i className="flaticon-left-arrow-2"></i>
          </button>
        </div>
        <div className="zirox-hero-section__service">
          <div className="container" data-aos="fade-up" data-aos-duration="1">
            <ul>
              <li>
                <p>*</p>
                <h3>Designs</h3>
              </li>
              <li>
                <p>*</p>
                <h3>Development</h3>
              </li>
              <li>
                <p>*</p>
                <h3>Marketing</h3>
              </li>
              <li>
                <p>*</p>
                <h3>Creatives</h3>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={open} videoId="A7KgdoxGJAw" onClose={() => setOpen(false)} />
    </>
  );
};

export default Hero;
