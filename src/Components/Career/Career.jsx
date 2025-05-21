import "./Career.css";
import Openings from "./Openings";
import { motion } from "framer-motion";
import ValuesSection from "./ValuesSection";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Career = () => {
  return (
    <div className="career-page">
      {/* Hero Section with Parallax */}
      <section className="career-hero">
        <motion.div
          className="hero-content"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1>Join Our Team at Infoziant</h1>
          <p className="tagline">Innovate. Collaborate. Thrive.</p>
          <p className="hero-description">
            At Infoziant, we’re more than a company—we’re a team of innovators
            passionate about building impactful solutions. Our culture values
            collaboration, creativity, and a shared commitment to excellence that
            drives everything we do.
          </p>
        </motion.div>
      </section>

      {/* About Us Cards Section */}
      <section className="about-us-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">OUR COMPANY</span>
            <h2>Who We Are</h2>
          </div>

          <motion.div
            className="about-cards"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div className="about-card" variants={fadeInUp}>
              <div className="about-card-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                Transforming the industry through cutting-edge technology and
                creative problem-solving approaches that lead to innovative
                solutions.
              </p>
            </motion.div>

            <motion.div className="about-card" variants={fadeInUp}>
              <div className="about-card-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Our People</h3>
              <p>
                We believe that our success is built on the strength of our team
                members, each bringing unique perspectives and talents.
              </p>
            </motion.div>

            <motion.div className="about-card" variants={fadeInUp}>
              <div className="about-card-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Our Culture</h3>
              <p>
                We're committed to fostering an environment of continuous growth,
                collaboration, and innovation where every voice is valued.
              </p>
            </motion.div>
          </motion.div>
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

          <motion.div
            className="benefits-grid"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {[
              {
                icon: "fas fa-lightbulb",
                title: "Innovative Projects",
                desc: "Tackle challenging projects that push the boundaries of technology and creativity.",
              },
              {
                icon: "fas fa-users",
                title: "Collaborative Culture",
                desc: "Thrive in an environment where teamwork and diverse perspectives are valued.",
              },
              {
                icon: "fas fa-chart-line",
                title: "Career Growth",
                desc: "Ample opportunities for professional development and clear paths for advancement.",
              },
              {
                icon: "fas fa-medal",
                title: "Competitive Benefits",
                desc: "Comprehensive health programs, flexible schedules, and retirement plans.",
              },
              {
                icon: "fas fa-handshake",
                title: "Inclusive Environment",
                desc: "A workplace that celebrates diversity and promotes equality for all.",
              },
              {
                icon: "fas fa-globe",
                title: "Global Opportunities",
                desc: "Work with clients and teams from around the world on impactful projects.",
              },
            ].map((item, index) => (
              <motion.div key={index} className="benefit-item" variants={fadeInUp}>
                <div className="benefit-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="benefit-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Categories Section */}
      <section className="job-categories-section" id="openings">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">POSITIONS</span>
            <h2>Career Opportunities</h2>
          </div>

          <motion.div
            className="categories-grid"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {[
              {
                icon: "fas fa-code",
                title: "Software Development",
                desc: "Build innovative solutions with creativity and technical expertise.",
              },
              {
                icon: "fas fa-bullhorn",
                title: "Marketing",
                desc: "Drive our brand forward with compelling strategies and creative campaigns.",
              },
              {
                icon: "fas fa-tasks",
                title: "Project Management",
                desc: "Lead cross-functional teams and deliver impactful projects on time.",
              },
              {
                icon: "fas fa-handshake",
                title: "Sales & Business Development",
                desc: "Cultivate client relationships and drive company growth.",
              },
            ].map((item, index) => (
              <motion.div key={index} className="category-card" variants={fadeInUp}>
                <div className="category-icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <ValuesSection />

      {/* How to Apply Section */}

      {/* Join Us CTA Section */}
      <Openings />
    </div>
  );
};

export default Career;
