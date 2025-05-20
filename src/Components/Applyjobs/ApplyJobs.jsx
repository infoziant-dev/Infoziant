import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import JobDetailsCard from './JobDetailsCard';


const ApplyJobs = () => {
  const [job, setJob] = useState(null);
  const location = useLocation();
  const id = location.state?.jobId;
  

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`https://infoziantbackend-production.up.railway.app/api/jobs/${id}`);
        const data = await res.json();
        console.log('Fetched job data:', data);
        setJob(data);
      } catch (err) {
        console.error('Failed to fetch job details:', err);
      }
    };

    fetchJob();
  }, [id]);





  return (
    <div >
      {job ? (
        <div >
          <JobDetailsCard job={job} />

        </div>
      ) : (
        <div className="flex items-center justify-center h-screen bg-white">
          <div className="text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-teal-500">
            Loading
            <span className="inline-block animate-typing-dot delay-0">.</span>
            <span className="inline-block animate-typing-dot delay-300">.</span>
            <span className="inline-block animate-typing-dot delay-600">.</span>
          </div>


        </div>


      )}
    </div>
  );
};

export default ApplyJobs;
