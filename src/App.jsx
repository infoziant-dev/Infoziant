import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = () => {
  const fetchData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1500);
    });
  };
  return (
    <Router>
      <ScrollToTop />

      <Loader fetchData={fetchData}>
        <Header />

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

          <Route
            path="/aiml"
            element={
              <Redirect link="https://aicl.infoziant.com/courses/680a024024dff2cef862633e" />
            }
          />
          <Route
            path="/web"
            element={
              <Redirect link="https://aicl.infoziant.com/courses/680a024024dff2cef8626340" />
            }
          />
          <Route
            path="/cybersecFS"
            element={
              <Redirect link="https://aicl.infoziant.com/courses/680a024024dff2cef862633f" />
            }
          />

          <Route
            path="/aimlFS"
            element={
              <Redirect link="https://aicl.infoziant.com/courses/68234801248526e958dd4d8b" />
            }
          />
          <Route
            path="/webFS"
            element={
              <Redirect link="https://aicl.infoziant.com/courses/68234801248526e958dd4d8d" />
            }
          />
          <Route
            path="/cybersec"
            element={
              <Redirect link="https://aicl.infoziant.com/courses/68234801248526e958dd4d8c" />
            }
          />
          <Route
            path="/techcamp"
            element={
              <Redirect link="https://aicl.infoziant.com/courses/683048add177c19178d55b56" />
            }
          />
          <Route
            path="/job/:title"
            element={<ApplyJobs />}
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Loader>
    </Router>
  );
};

export default App;
