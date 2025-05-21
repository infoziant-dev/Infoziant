import { motion } from "framer-motion";

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeSlideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ValuesSection = () => {
  const values = [
    {
      icon: "fas fa-rocket",
      title: "Innovation",
      desc:
        "We continually push boundaries and explore new ideas to stay ahead of industry trends and deliver exceptional solutions.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Integrity",
      desc:
        "Honesty and transparency are at the heart of our operations and guide our interactions with clients and colleagues.",
    },
    {
      icon: "fas fa-hands-helping",
      title: "Collaboration",
      desc:
        "Teamwork drives our success as we combine diverse talents and perspectives to achieve exceptional results.",
    },
    {
      icon: "fas fa-award",
      title: "Excellence",
      desc:
        "We strive for outstanding performance in everything we do, maintaining the highest standards of quality.",
    },
  ];

  return (
    <section className="values-section">
      <div className="container">
        <div className="section-header light">
          <span className="section-tag">PRINCIPLES</span>
          <h2>Our Culture & Values</h2>
        </div>

        <motion.div
          className="values-showcase"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="value-row"
              variants={fadeSlideIn}
            >
              <div className="value-icon">
                <i className={item.icon}></i>
              </div>
              <div className="value-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
