import React, { useState } from "react";
import axios from "axios";
const ApplyForm = ({ job, onClose }) => {
  const [form, setForm] = useState({
    applicantName: "",
    currentDesignation: "",
    experience: "",
    qualification: "",
    currentCTC: "",
    expectedCTC: "",
    keySkills: "",
    languages: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    currentAddress: "",
    permanentAddress: "",
    zipCode: "",
    whyInterested: "",
    resume: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit  = async (e) =>{
    e.preventDefault();
    const applicationData = {
      ...form,
      jobId: job._id,
      jobtitle: job.jobTitle,
      keySkills: form.keySkills.split(',').map((skill) => skill.trim()),
      appliedAt: new Date(),
      status: "Pending",
    };

    const applicationDataa = {
      ...form,
      mailTo: "recruiter@infoziant.com",
      jobId: job._id,
      jobtitle: job.jobTitle,
      keySkills: form.keySkills.split(',').map((skill) => skill.trim()),
      appliedAt: new Date().toLocaleString(),
      status: "Pending",
    };
    //console.log("Submitted:", applicationData);
    try {
    const res = await axios.post("https://infoziantbackend-production.up.railway.app/api/applications", applicationData);
    const res1 = await axios.post("https://mailer-api-production-76e4.up.railway.app/send-email", applicationDataa);

    console.log("Email sent:", res1.data);
    //console.log("Application Submitted:", res.data);
    alert("Application submitted successfully!");
    onClose(); // Close the form after submission
    
  } catch (err) {
    console.error("Submission error:", err);
    alert("Something went wrong!");
  }
  };

  return (
    <div className="bg-white text-blue-800 max-h-[80vh] overflow-y-scroll p-2 rounded-lg ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Apply for {job.jobTitle}</h2>
        
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="applicantName" label="Full Name" value={form.applicantName} onChange={handleChange} />
          <Input name="currentDesignation" label="Current Designation" value={form.currentDesignation} onChange={handleChange} />
          <Input name="experience" label="Experience" value={form.experience} onChange={handleChange} />
          <Input name="qualification" label="Qualification" value={form.qualification} onChange={handleChange} />
          <Input name="currentCTC" label="Current CTC" value={form.currentCTC} onChange={handleChange} />
          <Input name="expectedCTC" label="Expected CTC" value={form.expectedCTC} onChange={handleChange} />
          <Input name="keySkills" label="Key Skills (comma separated)" value={form.keySkills} onChange={handleChange} />
          <Input name="languages" label="Languages Known" value={form.languages} onChange={handleChange} />
          <Input name="email" label="Email" type="email" value={form.email} onChange={handleChange} />
          <Input name="phone" label="Phone" type="tel" value={form.phone} onChange={handleChange} />
          <Input name="dateOfBirth" label="Date of Birth" type="date" value={form.dateOfBirth} onChange={handleChange} />
          <Input name="gender" label="Gender" value={form.gender} onChange={handleChange} />
          <Input name="currentAddress" label="Current Address" value={form.currentAddress} onChange={handleChange} />
          <Input name="permanentAddress" label="Permanent Address" value={form.permanentAddress} onChange={handleChange} />
          <Input name="zipCode" label="Zip Code" value={form.zipCode} onChange={handleChange} />
          <Input name="resume" label="Resume Google Drive Link" value={form.resume} onChange={handleChange} />
        </div>

        <div>
          <label className="block font-medium text-sm">Why are you interested in this job?</label>
          <textarea
            name="whyInterested"
            value={form.whyInterested}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-600"
            required
          ></textarea>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-800 to-teal-600 text-white font-semibold py-2 rounded-md shadow hover:opacity-90"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-800"
      required
    />
  </div>
);

export default ApplyForm;