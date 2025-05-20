import React, { useState } from "react";
import ApplyForm from "./ApplyForm";

const JobDetailsCard = ({ job }) => {
  const [showForm, setShowForm] = useState(false);

  if (!job) return <p className="text-center text-blue-800">Loading job details...</p>;

  return (
    <div className=" bg-gradient-to-br from-white to-blue-50 py-16 px-4 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white border border-teal-600 rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* LEFT: Job Info */}
          <div className="p-8 space-y-6 border-r border-gray-200">
            <div>
              <h1 className="text-4xl font-bold text-blue-800">{job.jobTitle}</h1>
              <p className="text-xl text-teal-600 font-medium mt-1">{job.organizationName.trim()}</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-800">Job Description</h2>
              <p className="text-gray-700">{job.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">Skills Required</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.split(",").map((skill, i) => (
                  <span key={i} className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm">
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="mt-6 inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-xl w-full font-medium hover:opacity-90 transition"
            >
              Apply Now
            </button>
          </div>

          {/* RIGHT: Summary Grid */}
          <div className="bg-blue-50 p-8 space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Job Summary</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Summary label="Location" value={job.Location} />
              <Summary label="Employment Type" value={job.employmentType} />
              <Summary label="Work Mode" value={job.jobLocationType} />
              <Summary label="Working Hours" value={job.workingHours} />
              <Summary label="Vacancy" value={job.Vacancy} />
              <Summary label="Salary" value={job.salaryRange} />
              <Summary label="Qualification" value={job.qualifications} />
              <Summary label="End Date" value={new Date(job.End_date).toDateString()} />
              <Summary label="Posted By" value={job.postedBy} />
              <Summary label="Posted On" value={new Date(job.datePosted).toDateString()} />
              <Summary label="Status" value={job.status} />
              <Summary label="Industry" value={job.industry} />
            </div>
          </div>
        </div>
      </div>

      {/* Popup Form Modal */}
      {showForm && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg p-6 w-full max-w-3xl relative shadow-lg border border-teal-600">
      <button
        className="absolute top-2 right-4 text-blue-800 text-xl font-bold"
        onClick={() => setShowForm(false)}
      >
        ×
      </button>
      <ApplyForm job={job} onClose={() => setShowForm(false)} />
    </div>
  </div>
)}

    </div>
  );
};

const Summary = ({ label, value }) => (
  <div>
    <p className="text-gray-600 font-medium">{label}</p>
    <p className="text-blue-800 font-semibold">{value}</p>
  </div>
);

export default JobDetailsCard;
