import React, { useState, useEffect } from "react";
import fullstck from "./CourseImages/FullStack.jpg";

const PopupAd = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [fullstck, fullstck, fullstck];

  // Set popup expiry time (in milliseconds)
  const POPUP_EXPIRY = 2 * 60 * 1000; // 1 hour

  useEffect(() => {
    const lastSeen = localStorage.getItem("popupLastSeen");
    const now = Date.now();

    // Show popup if never seen or expired
    if (!lastSeen || now - parseInt(lastSeen, 10) > POPUP_EXPIRY) {
      const timer = setTimeout(() => {
        setShow(true);
        localStorage.setItem("popupLastSeen", now.toString());
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto slide images every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm bg-black/70">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-[90%] overflow-hidden animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold z-10"
        >
          ×
        </button>

        {/* Gradient Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-400 text-white p-6 text-center">
          <h2 className="text-3xl font-extrabold mb-2">Learn Without Limits</h2>
          <p className="text-white/90 text-base max-w-md mx-auto">
            Discover world-class courses taught by industry experts to help you
            master in-demand skills and advance your career.
          </p>
        </div>

        {/* Clickable Image Carousel */}
        <a
          href="https://aicl.infoziant.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full overflow-hidden"
        >
          <img
            src={images[currentImage]}
            alt="Course"
            className="w-full h-full object-cover transition-all duration-700 hover:opacity-90"
          />
        </a>

        {/* Button Section */}
        <div className="p-5 text-center">
          <a
            href="https://aicl.infoziant.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold px-6 py-2.5 rounded-lg shadow hover:opacity-90 transition-all duration-200"
          >
            Explore Courses
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopupAd;
