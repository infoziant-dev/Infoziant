import React from 'react';
import Banner from './Banner/Banner';
import Whatweoffer from './Whatweoffer/Whatweoffer';
import placementImage from "../../assests/Images/Banner/coes1.png";
import WhyChoose from './WhyChoose/WhyChoose';
import WhyChooseImage from "../../assests/Images/Banner/whycoe3.png";
import WhatImage from "../../assests/Images/Banner/empowering3.png";
import carrerempowerment from "../../assests/Images/Banner/team-leader-teamwork-concept.png";
import KeyHighlights from './KeyHighlights/KeyHighlights';
import ConsultationFormForCo from '../Pages/ConsultationFormForCo';
import WhatIsCodeChef from './WhatIs/WhatIs';
import Achievements from "./WhatWeCOE/WhatWeCOE";
import achievementImg from "./WhatWeCOE/broadcast_gif2.gif"; 
import JoinCoEMovement from "./JoinCoe/JoinCoe";
import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaCertificate,
  FaTools,
} from "react-icons/fa";


const COE = () => {
    const offerHeading = "What We Do";
    const offerPoints = [
      "Set up CoEs with industry-standard tools & infra",
      "Curriculum design in sync with job roles",
      "Training by real-world practitioners",
      "Hands-on use cases & labs",
      "Global certifications & internship pathway",
    ];

    const highlights = "Key Highlights";
    const points = [
        "240+ Hours of expert-led training (Cybersecurity / AI)",
        "Real-world projects and industry case studies",
        "Certification, Badges, and international visits (optional)",
        "Access to exclusive Hackathons & Challenges",
        "Faculty Enablement Workshops",
    ];

    const codechefData = {
      heading: "Empowering Campuses. Enabling Careers",
      description: `At Infoziant, our Centre of Excellence (CoE) program transforms academic institutions into innovation hubs by bridging the gap between industry and academia.
              We equip colleges with the skills, tools, and expert training needed to build futureready
              professionals in Cybersecurity and Artificial Intelligence.`,
    };

    const achievementData = [
      {
        title: "Turnkey CoE Setup",
        desc: "Industry-grade infrastructure, labs, and licensed tools tailored to Cybersecurity and AI.",
        icon: <FaTools />,
        color: "from-pink-500 to-pink-700",
      },
      {
        title: "Job-Oriented Curriculum",
        desc: "Aligned with current and emerging industry roles and mapped to global standards.",
        icon: <FaLaptopCode />,
        color: "from-blue-400 to-blue-600",
      },
      {
        title: "Expert-Led Training",
        desc: "Courses delivered by seasoned professionals with real-world experience.",
        icon: <FaChalkboardTeacher />,
        color: "from-green-400 to-green-600",
      },
      {
        title: "Project-Based Learning",
        desc: "Practical labs, real-time use cases, and hands-on problem-solving scenarios.",
        icon: <FaProjectDiagram />,
        color: "from-yellow-400 to-yellow-600",
      },
      {
        title: "Global Certification Pathway",
        desc: "Internationally recognized certifications and internship opportunities.",
        icon: <FaCertificate />,
        color: "from-indigo-400 to-indigo-600",
      },
    ];


  return (
    <div>
      <Banner
        badgeText="Campus to Corporate Services"
        title="Centre Of Excellence"
        subtitle="Turning Campuses into Innovation Hubs"
        description="Our Centre of Excellence (CoE) initiative is a strategic industry-academia collaboration where we empower colleges to build self-sustained, skill-driven learning environments in emerging domains like Cybersecurity & AI."
        primaryBtnText="Explore CoE"
        primaryBtnLink="#get-started"
        secondaryBtnText="Contact Us"
        secondaryBtnLink="#contact"
        image={placementImage}
      />

      <div id="get-started">
      <WhatIsCodeChef 
        heading={codechefData.heading}
        subheading={codechefData.subheading}
        description={codechefData.description}
        image={carrerempowerment}
        ctaText={codechefData.ctaText}
        ctaLink={codechefData.ctaLink}
      />
      </div>
     



       <WhyChoose
          heading="Why Infoziant CoEs?"
          description="We are committed to building a self-sustained CoE that not only meets the immediate needs of students but also prepares them for future challenges. Our approach is designed to ensure that your institution remains at the forefront of technological advancements."
          points={[
            "Designed by domain experts (Ex-Symantec, EMC, McAfee)",
            "Industry-mapped curriculum and tools",
            "Long-term academic partnership model",
            "Customizable delivery (hybrid/fully offline)",
            "Proven success across 30+ institutions",
          ]}
          image = {WhyChooseImage} 
        />
        
       <Whatweoffer heading={offerHeading} points={offerPoints} image={WhatImage} />

        <Achievements
          title="What Makes Our CoE Unique"
          subtitle="Empowering talent with industry-driven excellence"
          image={achievementImg}
          achievements={achievementData}
        />

            <KeyHighlights heading={highlights} points={points}/>


          <JoinCoEMovement />

          <ConsultationFormForCo />
    </div>
  );
};

export default COE;
