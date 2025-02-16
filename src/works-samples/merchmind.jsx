import { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const MerchmindWork = () => {
  const images = [
    "/img/work-samples/merchmind (1).png",
    "/img/work-samples/merchmind (2).png",
    "/img/work-samples/merchmind (3).png",
    "/img/work-samples/merchmind (4).png",
    "/img/work-samples/merchmind (5).png",
    "/img/work-samples/merchmind (6).png",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="zirox-projects zirox-section pt-5">
      <div className="container">
        <h6 data-aos="fade-up" className="text-center">
          MERCHMIND WORK
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="300" className="text-center">
          Igniting Your Digital <br /> Presence
        </h2>
        <div className="row flex-wrap align-items-center justify-content-center">
          {images.map((img, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 200} className="col-12 col-md-4 lg-3">
              <div
                className="zirox-projects-item"
                onClick={() => { setIndex(idx); setIsOpen(true); }}
                style={{
                  cursor: "pointer",
                  overflow: "hidden", // Hides overflow content
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={img}
                  alt={`Merchmind Project ${idx + 1}`}
                  style={{
                    width: "100%", // Ensures all images take full width
                    height: "250px", // Fixed height for uniformity
                    objectFit: "cover", // Ensures consistent image size while maintaining aspect ratio
                  }}
                />
                <div className="zirox-projects-item__detail">
                  <h3>Merchmind Project {idx + 1}</h3>
                  <p>E-Commerce, Web Design</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for Image Preview */}
      <Lightbox open={isOpen} close={() => setIsOpen(false)} index={index} slides={images.map((src) => ({ src }))} />
    </section>
  );
};

export default MerchmindWork;
