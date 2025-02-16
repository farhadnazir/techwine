import { useState } from "react";

const ContactFormMap = () => {

  return (
    <section className="zirox-contact zirox-contact--single pt-5">
      <div className="zirox-contact__map ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13264.466069217557!2d72.71517985998496!3d33.783489154879845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa7933098fa61%3A0x55f27ad64d896d4b!2sLalarukh%20Colony%2C%20Wah%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1739553279666!5m2!1sen!2s"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="row">
          <div className="col-12 col-md-8 col-lg-4">
            <div className="zirox-contact__left">
              <div className="zirox-contact__left-box">
                <div className="zirox-contact__left-box-img">
                  <i className="flaticon-place"></i>
                </div>
                <div className="zirox-contact__left-box-detail">
                  <h3>Address</h3>
                  <address>Lala Rukh, Wah Cantt, Islamabad.</address>
                </div>
              </div>
              <div className="zirox-contact__left-box">
                <div className="zirox-contact__left-box-img">
                  <i className="flaticon-call"></i>
                </div>
                <div className="zirox-contact__left-box-detail">
                  <h3>Phone</h3>
                  <a href="tel:923099002311">+92 309 900 2311</a>
                  <a href="tel:923429902311">+92 342 990 2311</a>
                </div>
              </div>
              <div className="zirox-contact__left-box">
                <div className="zirox-contact__left-box-img">
                  <i className="flaticon-open-mail-1"></i>
                </div>
                <div className="zirox-contact__left-box-detail">
                  <h3>Email </h3>
                  <a href="mailto:techwinesolutions@gmail.com">techwinesolutions@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="zirox-contact__right">
              <div className="zirox-contact__right-form">
              <form
                  action="https://formsubmit.co/techwinesolutions@gmail.com"
                  method="POST"
                >
                  {/* Hidden input to bypass CAPTCHA */}
                  <input type="hidden" name="_captcha" value="false" />
                  {/* After submission, user stays on same page */}
                  <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

                  <div className="row">
                    <div className="col-12 col-md-6">
                      <input type="text" name="fullname" placeholder="Full Name" required />
                    </div>
                    <div className="col-12 col-md-6">
                      <input type="email" name="email" placeholder="Email Address" required />
                    </div>
                    <div className="col-12 col-md-6">
                      <input type="text" name="phone" placeholder="Phone" />
                    </div>
                    <div className="col-12 col-md-6">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                    <div className="col-12">
                      <textarea  rows="6"   name="message" placeholder="Your Message" required></textarea>
                    </div>
                  </div>
                  <button type="submit" className="zirox-button">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormMap;
