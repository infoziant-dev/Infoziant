import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imag from "./img.png";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { step: 1, title: "Browse Current Openings", desc: "Find roles that match your skills and passions." },
  { step: 2, title: "Submit Your Application", desc: "Send your resume and cover letter." },
  { step: 3, title: "Interview Process", desc: "Showcase your talents and meet the team." },
  { step: 4, title: "Join Us", desc: "Accept your offer and start your journey at Infoziant." },
];

// Animation variants
const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const jobFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const buttonTap = {
  scale: 0.95,
};
const stepsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const stepCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};



const Openings = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showJobs, setShowJobs] = useState(false);
  const jobListRef = useRef(null);
  const navigate = useNavigate();

  const toggleJobs = () => {
    if (showJobs) {
      setShowJobs(false);
    } else {
      setLoading(true);
      fetch("https://infoziantbackend-production.up.railway.app/api/jobs/")
        .then((res) => res.json())
        .then((data) => {
          setJobs(data);
          setShowJobs(true);
        })
        .catch(() => alert("Failed to fetch jobs"))
        .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    if (showJobs && jobListRef.current) {
      jobListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showJobs]);

  const handleViewDetails = (job) => {
    const formattedTitle = encodeURIComponent(
      job.jobTitle.trim().toLowerCase().replace(/[\s/]+/g, "-")
    );
    navigate(`/job/${formattedTitle}`, {
      state: { jobId: job._id },
    });
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto font-sans">
      {/* How to Apply */}
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            HOW TO APPLY
          </span>
        </h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute top-9 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />

        <motion.div
  variants={stepsContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}  // animate once when 30% visible
  className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
>
  {steps.map(({ step, title, desc }) => (
    <motion.div
      key={step}
      variants={stepCardVariants}
      className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition"
    >
      <div className="mx-auto w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-400 text-white text-lg font-bold shadow-md">
        {step}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </motion.div>
  ))}
</motion.div>


        </div>
      </div>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Join Us Today!</h2>
          <p className="mb-6 text-gray-600 text-lg">
            If you're ready to innovate, collaborate, and thrive, we'd love to hear from you.
          </p>
          <motion.button
            onClick={toggleJobs}
            disabled={loading}
            whileTap={buttonTap}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg shadow-md hover:shadow-lg transition disabled:opacity-50"
          >
            {loading ? "Loading..." : showJobs ? "Close Openings" : "Show Openings"}
          </motion.button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img src={imag} alt="Careers at Infoziant" className="w-2/3 max-w-md" />
        </div>
      </div>

      {/* Job Listings */}
      <AnimatePresence>
        {showJobs && (
          <motion.div
            ref={jobListRef}
            className="pt-28 max-w-5xl mx-auto"
            id="job-listings"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerStagger}
          >
            <h3 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
              Available Job Openings
            </h3>

            {jobs.length === 0 ? (
              <p className="text-gray-500 text-center">No jobs available at the moment.</p>
            ) : (
              <motion.ul className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {jobs.map((job) => (
                  <motion.li
                    key={job._id}
                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition cursor-pointer"
                    variants={jobFadeIn}
                    onClick={() => handleViewDetails(job)}
                  >
                    <h4 className="text-xl font-semibold mb-2 text-blue-900">{job.jobTitle}</h4>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">Organization:</span> {job.organizationName.trim()}
                    </p>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">Location:</span> {job.Location}
                    </p>
                    <p className="text-gray-600 mb-4">
                      <span className="font-medium">Type:</span> {job.employmentType}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetails(job);
                      }}
                      className="w-full px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-600 text-white rounded-md hover:opacity-90 transition"
                    >
                      View Details
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Openings;
