import React, { useState, useEffect, Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";
import WebandApp from "./Components/Services/Web&app development";
import Talent from "./Components/Talent/Talent";
import Placement_Support from "./Components/c2cservices/Placement_Support";
import Internship_Programs from "./Components/c2cservices/Intership_Programs";
import COE from "./Components/c2cservices/COE";
import Testing from "./Components/Testing/Testing";
import CodeChef from "./Components/c2cservices/CodeChef";
import PageNotFound from "./Components/PageNotFound";
import ScrollToTop from "./Components/ScrollToTop";
import Loader from "./Components/Loader";
import Layout from "./Components/Cyber/Layout";
import Products from "./Components/products/Product";
import Edutech_Platform from "./Components/c2cservices/Edutech";
import Blog from "./Components/c2cservices/Blog/Blog";
import LLM from "./Components/AI/LLM/LLM.jsx";

// CSS imports
import "./Components/css/Awards.css";
import "./Components/css/BlogDetail.css";
import "./Components/css/Blogs.css";
import "./Components/css/ServicesList.css";

import About from "./Components/About/About";
import Awards from "./Components/Pages/Awards";
import Contact from "./Components/Pages/Contact";
import Career from "./Components/Career/Career.jsx";
import Openings from "./Components/Career/Openings.jsx";
import Vapt from "./Components/VAPT/Vapt";
import WebAndMobile from "./Components/VAPTservices/WebAndMobile";
import NetworkInfrastructure from "./Components/VAPTservices/NetworkInfrastructure";
import CloudInfrastructure from "./Components/VAPTservices/CloudInfrastructure";
import ApiVapt from "./Components/VAPTservices/ApiVapt";
import Siem from "./Components/VAPTservices/Siem";
import GenAI from "./Components/Genai/GenAI.jsx";
import RedirectAicl from "./Components/RedirectAicl.jsx";
import BlogDetail from "./Components/c2cservices/Blog/BlogDetail.jsx";
import Redirect from "./Components/Redirect.jsx";
import ApplyJobs from "./Components/Applyjobs/ApplyJobs.jsx";

// VTA Portal
import VTANavBar from "./Components/VTAPortal/components/VTANavbar.jsx";
import VTAHome from './Components/VTAPortal/views/Home.jsx';
import VTACourses from "./Components/VTAPortal/views/Courses.jsx";
import VTALogin from "./Components/VTAPortal/views/Login.jsx";
import VTARegister from "./Components/VTAPortal/views/Register.jsx";
import VTACourseDetails from "./Components/VTAPortal/views/CourseDetails.jsx";
import VTAPaymentSuccess from "./Components/VTAPortal/views/PaymentSuccess.jsx";
import VTAForgotPassword from "./Components/VTAPortal/views/ForgotPassword.jsx";
import VTAResetPassword from "./Components/VTAPortal/views/ResetPassword.jsx";
import VTAVerifyEmail from "./Components/VTAPortal/views/VerifyEmail.jsx";
import VTAResendVerification from "./Components/VTAPortal/views/ResendVerification.jsx";

import VTADashboard from "./Components/VTAPortal/views/Dashboard.jsx";
import VTAProfile from "./Components/VTAPortal/views/Profile.jsx";
import VTAEnrolledCourses from "./Components/VTAPortal/views/EnrolledCourses.jsx";
import VTAPaymentHistory from "./Components/VTAPortal/views/PaymentHistory.jsx";
import VTAInquiries from "./Components/VTAPortal/views/Inquiries.jsx";
import VTANotFound from "./Components/VTAPortal/views/NotFound.jsx";
import VTAInquiryPage from "./Components/VTAPortal/views/InquiryPage.jsx";

import VTAFooter from "./Components/VTAPortal/components/VTAFooter.jsx";

function VTALayout() {
  return <div className="vta_portal"><Outlet /></div>;
}

const App = () => {

  const location = useLocation();
  const isVtaRoute = location.pathname.startsWith("/tech");

  // ! This piece of code is copied from VTA Portal. Please make sure to update in both places if any changes are made.
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for both user and token
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    } else {
      // Clear both if either is missing
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser(null);
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    // Note: token is already saved in the loginUser function in api.js
  };

  const handleLoguot = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const fetchData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1500);
    });
  };

  return (
    <Fragment>
      <ScrollToTop />
      <Toaster position="top-center" />

      <Loader fetchData={fetchData}>
        {
          (isVtaRoute) ?  <VTANavBar /> : <Header />
        }

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career/openings" element={<Openings />} />
          <Route path="/services/placement" element={<Placement_Support />} />
          <Route
            path="/services/internship"
            element={<Internship_Programs />}
          />
          <Route path="/services/training" element={<RedirectAicl />} />
          <Route path="/services/coe" element={<COE />} />
          <Route path="/services/edutech" element={<Edutech_Platform />} />
          <Route path="/services/codechef" element={<CodeChef />} />
          <Route path="/services/techtalent" element={<Talent />} />
          <Route path="/services/cybersecurity" element={<Layout />} />
          <Route path="/services/webapp" element={<WebandApp />} />
          <Route path="/services/testing" element={<Testing />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/services/vapt" element={<Vapt />} />
          <Route path="/services/network" element={<NetworkInfrastructure />} />
          <Route path="/services/websecure" element={<WebAndMobile />} />
          <Route path="/services/cloud" element={<CloudInfrastructure />} />
          <Route path="/services/apivapt" element={<ApiVapt />} />
          <Route path="/services/siem" element={<Siem />} />
          <Route path="/services/llm" element={<LLM />} />
          <Route path="/services/genai" element={<GenAI />} />

          {/* VTA Portal */}
          <Route path="/tech/" element={<VTALayout />}>
            <Route index path="/tech/" element={<VTAHome />} />
            <Route path="/tech/courses" element={<VTACourses />} />
            <Route path="/tech/courses/:id" element={<VTACourseDetails user={user} />} />

            <Route path="/tech/success" element={<VTAPaymentSuccess />} />

            {/* Auth Routes */}
            <Route path="/tech/login" element={<VTALogin handleLogin={handleLogin} user={user} />} />
            <Route path="/tech/register" element={<VTARegister handleLogin={handleLogin} user={user} />} />
            <Route path="/tech/forgot-password" element={<VTAForgotPassword />} />
            <Route path="/tech/reset-password/:token" element={<VTAResetPassword />} />
            <Route path="/tech/verify-email/:token" element={<VTAVerifyEmail />} />
            <Route path="/tech/resend-verification" element={<VTAResendVerification />} />

            {/* Protected Routes */}
            <Route path="/tech/dashboard" element={user ? <VTADashboard user={user} /> : <VTALogin handleLogin={handleLogin} user={user} />} />
            <Route path="/tech/profile" element={user ? <VTAProfile user={user} setUser={setUser} /> : <VTALogin handleLogin={handleLogin} user={user} />} />
            <Route path="/tech/enrolled-courses" element={user ? <VTAEnrolledCourses user={user} /> : <VTALogin handleLogin={handleLogin} user={user} />} />
            <Route path="/tech/payment-history" element={user ? <VTAPaymentHistory user={user} /> : <VTALogin handleLogin={handleLogin} user={user} />} />
            <Route path="/tech/inquiries" element={user ? <VTAInquiries user={user} /> : <VTALogin handleLogin={handleLogin} user={user} />} />
            <Route path="*" element={<VTANotFound />} />

            <Route path="/tech/payment" element={<VTAInquiryPage />} />

          </Route>

          <Route
            path="/webfs"
            element={
              <Redirect link="https://infoziant.com/tech/courses/680a024024dff2cef8626340" />
            }
          />
          <Route
            path="/web1"
            element={
              <Redirect link="https://infoziant.com/tech/courses/68234801248526e958dd4d8d" />
            }
          />
          <Route
            path="/aiml"
            element={
              <Redirect link="https://infoziant.com/tech/courses/680a024024dff2cef862633e" />
            }
          />
          <Route
            path="/aiml1"
            element={
              <Redirect link="https://infoziant.com/tech/courses/68234801248526e958dd4d8b" />
            }
          />
          <Route
            path="/cs"
            element={
              <Redirect link="https://infoziant.com/tech/courses/68234801248526e958dd4d8c" />
            }
          />
          <Route
            path="/cs1"
            element={
              <Redirect link="https://infoziant.com/tech/courses/680a024024dff2cef862633f" />
            }
          />
          <Route
            path="/techcamp"
            element={
              <Redirect link="https://infoziant.com/tech/courses/683048add177c19178d55b56" />
            }
          />
          <Route path="/job/:title" element={<ApplyJobs />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {
          (isVtaRoute) ?  <VTAFooter /> : <Footer />
        }
      </Loader>
    </Fragment>
  );
};

export default App;
