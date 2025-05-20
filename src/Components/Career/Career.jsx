import React from "react";
import "./Career.css";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/career/openings"); // change to your actual route
  };

  return (
    <div className="career-page">
      {/* Career Banner Section */}
      <section className="career-banner-section">
        <div className="banner-content">
          <h1>Join Our Team at Infoziant</h1>
          <p>Innovate. Collaborate. Thrive.</p>
          <p>
            At Infoziant, we're more than just a company—we're a community of
            forward-thinking professionals dedicated to creating innovative
            solutions in our industry. Our commitment to excellence drives us to
            build a dynamic environment where every voice is valued and every
            idea matters.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="career-who-we-are">
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            Infoziant is on a mission to transform the way our industry works by
            leveraging cutting-edge technology and creative problem-solving. We
            believe that our success is built on the strength of our people, and
            we're committed to fostering a culture of continuous growth,
            collaboration, and innovation.
          </p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="career-benefits-section">
        <div className="container">
          <h6>BENEFITS</h6>
          <h2>Why Work at Infoziant?</h2>
          <div className="benefits-container">
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovative Projects</h3>
              <p>
                Tackle challenging projects that push the boundaries of
                technology and creativity.
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaborative Culture</h3>
              <p>
                Thrive in an environment where teamwork, open communication, and
                diverse perspectives are at the core.
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Career Growth</h3>
              <p>
                Ample opportunities for professional development, mentoring, and
                clear paths for advancement.
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-medal"></i>
              </div>
              <h3>Competitive Benefits</h3>
              <p>
                Comprehensive benefits including health programs, flexible
                schedules, and retirement plans.
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Inclusive Environment</h3>
              <p>
                A workplace that values diversity and promotes equality for all
                employees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="career-opportunities-section" id="openings">
        <div className="container">
          <h6>POSITIONS</h6>
          <h2>Career Opportunities</h2>
          <div className="opportunities-container">
            <div className="opportunity-item">
              <h3>Software Developers</h3>
              <p>
                Build innovative solutions with creativity and technical
                expertise.
              </p>
            </div>
            <div className="opportunity-item">
              <h3>Marketing Specialists</h3>
              <p>Drive our brand forward with compelling strategies.</p>
            </div>
            <div className="opportunity-item">
              <h3>Project Managers</h3>
              <p>Lead cross-functional teams and impactful projects.</p>
            </div>
            <div className="opportunity-item">
              <h3>Sales & Business Development</h3>
              <p>Cultivate client relationships and drive growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="career-values-section">
        <div className="container">
          <h6>PRINCIPLES</h6>
          <h2>Our Culture & Values</h2>
          <div className="values-container">
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Innovation</h3>
              <p>We continually push boundaries and explore new ideas.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Integrity</h3>
              <p>
                Honesty and transparency are at the heart of our operations.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Collaboration</h3>
              <p>Teamwork drives our success.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Excellence</h3>
              <p>We strive for outstanding performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="career-apply-section" id="apply">
        <div className="container">
          <h2>How to Apply</h2>
          <div className="apply-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Browse Current Openings</h3>
              <p>Find roles that match your skills and passions.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Submit Your Application</h3>
              <p>Send your resume and cover letter.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Interview Process</h3>
              <p>Showcase your talents and meet the team.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Join Us</h3>
              <p>Accept your offer and start your journey at SMI.</p>
            </div>
          </div>
          <div className="join-today">
            <h2>Join Us Today!</h2>
            <p>
              If you're ready to innovate, collaborate, and thrive, we'd love to
              hear from you.
            </p>
            <button className="show-openings-btn" onClick={handleRedirect}>
              Show Openings
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
