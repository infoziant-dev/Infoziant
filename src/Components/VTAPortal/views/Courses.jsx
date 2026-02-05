import { useState, useEffect } from 'react';
import { getAllCourses } from '../utils/api';
import CourseCard from '../components/CourseCard';
import toast from 'react-hot-toast';
import './Courses.css';

const VTACourses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true);
        const data = await getAllCourses();
        setCourses(data);
        setFilteredCourses(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
        toast.error('Failed to load courses. Please try again later.');
        setIsLoading(false);
      }
    };
    
    fetchCourses();
  }, []);
  
  
 
  const clearFilters = () => {
   
    setFilteredCourses(courses);
  };
  
 
  
  return (
    <div className="courses-page section">
      <div className="container">
        <h1 className="section-title text-center">Explore Our Courses</h1>
        
        {/* Filters Section */}
        
        
        {/* Courses Display */}
        {isLoading ? (
          <div className="loading">
            <i className="fas fa-spinner fa-spin"></i> Loading courses...
          </div>
        ) : (
          <>
            {filteredCourses.length === 0 ? (
              <div className="no-courses">
                <p>No courses match your filter criteria.</p>
                <button className="btn btn-primary" onClick={clearFilters}>
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="courses-grid">
                {filteredCourses.map((course) => (
                  <CourseCard key={course._id} course={course} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default VTACourses; 