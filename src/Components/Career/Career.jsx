
import "./Career.css";
import Openings from "./Openings";

const Career = () => {




  return (
    <div className="career-page">
      {/* Hero Section with Parallax */}
      <section className="career-hero">
        
        <div className="hero-content">
          <h1>Join Our Team at Infoziant</h1>
          <p className="tagline">Innovate. Collaborate. Thrive.</p>
          <p className="hero-description">
            At Infoziant, we're more than just a company—we're a community of
            forward-thinking professionals dedicated to creating innovative
            solutions in our industry. Our commitment to excellence drives us to
            build a dynamic environment where every voice is valued and every
            idea matters.
          </p>
          
        </div>
      </section>

      {/* About Us Cards Section */}
      <section className="about-us-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">OUR COMPANY</span>
            <h2>Who We Are</h2>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                Transforming the industry through cutting-edge technology and
                creative problem-solving approaches that lead to innovative
                solutions.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Our People</h3>
              <p>
                We believe that our success is built on the strength of our team
                members, each bringing unique perspectives and talents.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Our Culture</h3>
              <p>
                We're committed to fostering an environment of continuous
                growth, collaboration, and innovation where every voice is
                valued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Image Grid */}
      <section className="benefits-section">
        <div className="benefits-overlay"></div>
        <div className="container">
          <div className="section-header light">
            <span className="section-tag">BENEFITS</span>
            <h2>Why Work at Infoziant?</h2>
          </div>

          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="benefit-content">
                <h3>Innovative Projects</h3>
                <p>
                  Tackle challenging projects that push the boundaries of
                  technology and creativity.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="benefit-content">
                <h3>Collaborative Culture</h3>
                <p>
                  Thrive in an environment where teamwork and diverse
                  perspectives are valued.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="benefit-content">
                <h3>Career Growth</h3>
                <p>
                  Ample opportunities for professional development and clear
                  paths for advancement.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-medal"></i>
              </div>
              <div className="benefit-content">
                <h3>Competitive Benefits</h3>
                <p>
                  Comprehensive health programs, flexible schedules, and
                  retirement plans.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <div className="benefit-content">
                <h3>Inclusive Environment</h3>
                <p>
                  A workplace that celebrates diversity and promotes equality
                  for all.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-globe"></i>
              </div>
              <div className="benefit-content">
                <h3>Global Opportunities</h3>
                <p>
                  Work with clients and teams from around the world on impactful
                  projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories Section */}
      <section className="job-categories-section" id="openings">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">POSITIONS</span>
            <h2>Career Opportunities</h2>
          </div>

          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Software Development</h3>
              <p>
                Build innovative solutions with creativity and technical
                expertise.
              </p>
              
            </div>

            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-bullhorn"></i>
              </div>
              <h3>Marketing</h3>
              <p>
                Drive our brand forward with compelling strategies and creative
                campaigns.
              </p>
              
            </div>

            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-tasks"></i>
              </div>
              <h3>Project Management</h3>
              <p>
                Lead cross-functional teams and deliver impactful projects on
                time.
              </p>
              
            </div>

            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Sales & Business Development</h3>
              <p>Cultivate client relationships and drive company growth.</p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        
        <div className="container">
          <div className="section-header light">
            <span className="section-tag">PRINCIPLES</span>
            <h2>Our Culture & Values</h2>
          </div>

          <div className="values-showcase">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Innovation</h3>
              <p>
                We continually push boundaries and explore new ideas to stay
                ahead of industry trends and deliver exceptional solutions.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Integrity</h3>
              <p>
                Honesty and transparency are at the heart of our operations and
                guide our interactions with clients and colleagues.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Collaboration</h3>
              <p>
                Teamwork drives our success as we combine diverse talents and
                perspectives to achieve exceptional results.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Excellence</h3>
              <p>
                We strive for outstanding performance in everything we do,
                maintaining the highest standards of quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
     <Openings />
    </div>
  );
};

export default Career;
