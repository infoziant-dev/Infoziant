import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../css/Contact.css';
import ConsultationForm from "./ConsultationForm";
import { Helmet } from "react-helmet";
import Img1 from "../../assests/image.png";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us | Infoziant - Connect for Tailored Cybersecurity Solutions</title>
        <meta
          name="description"
          content="Reach out to Infoziant for innovative cybersecurity solutions. Contact us via phone or email, or fill out the form to get started!"
        />
      </Helmet>

      <div className='contact_page'>

        <div
          className="service-banner"
          style={{
            backgroundImage: `url(${Img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="sb-intro">
            <h1>Contact us</h1>
            <br />
            <p>
              Connect with us to explore innovative solutions tailored to your business needs.
            </p>
          </div>
        </div>

        <div className="contact-container-section">
          <div className="contact-header">
            <h1>Our Contact Information</h1>
          </div>

          <div className="contact-content">

            {/* LOCATION */}
            <div className="contact-column">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-info">
                  <div className="contact-info-title">Location</div>

                  <div className="contact-address">
                    <div>
                      <p><strong>India Office:</strong> Akshaya HQ, Rajiv Gandhi Salai, Kazhipattur, Tamil Nadu, Chennai - 603103.</p>
                    </div>

                    <div>
                      <p><strong>U.S. Office:</strong> 1401, 21st ST STE 6310, Sacramento, CA 95811, USA. <a href="tel:+19402907007">+1 (940) 290 7007</a></p>
                    </div>

                    <div>
                      <p><strong>Singapore Office:</strong> 60 Paya Lebar Road, #07-39, Paya Lebar Square, Singapore 409051.</p>
                    </div>

                    <div>
                      <p><strong>Dubai Office:</strong> Suite #724, Tamani Arts, Business Bay, Dubai, UAE.</p>
                    </div>

                    <div>
                      <p>
                        <strong>Registered Address:</strong><br/>
                        D401, Elcot Avenue Central Part West, Sholinganallur Kanchipuram Saidapet<br/>
                        Tamil Nadu 600119, Sholinganallur, Tamil Nadu 600119.
                      </p>
                    </div>

                    <div>
                      <p>
                        <strong>Operational Address:</strong><br/>
                        D401, Elcot Avenue Central Part West, Sholinganallur Kanchipuram Saidapet<br/>
                        Tamil Nadu 600119, Sholinganallur, Tamil Nadu 600119.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* PHONE + EMAIL */}
            <div className="contact-row">

              <div className="contact-column">
                <div className="contact-item">
                  <FaPhoneAlt className="contact-icon" />
                  <div className="contact-info">
                    <div className="contact-info-title">Phone</div>
                    <div className="contact-desc">
                      <p>India: <a href="tel:+919600085988">+91 9600085988</a></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-column">
                <div className="contact-item contact-email">
                  <FaEnvelope className="contact-icon" />
                  <div className="contact-info">
                    <div className="contact-info-title">Email</div>
                    <div className="contact-desc">
                      <a href="mailto:support@infoziant.com">support@infoziant.com</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <ConsultationForm />
      </div>

    </div>
  );
};

export default Contact;
