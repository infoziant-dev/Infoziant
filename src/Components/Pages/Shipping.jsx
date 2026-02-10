import React from "react";

export default function Shipping() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shipping & Delivery Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Information about our service delivery and digital product access
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              Infoziant IT Solutions Inc. primarily provides digital services, software solutions, and IT consulting. 
              This Shipping & Delivery Policy outlines how we deliver our services and products to our customers.
            </p>
          </div>

          {/* Digital Services */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              Digital Services & Products
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Digital Delivery</h3>
              <p className="text-gray-700 mb-3">
                Most of our services and digital products are delivered electronically and are accessible immediately 
                upon successful payment confirmation.
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-gray-700 flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  Software licenses and access credentials
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  Online training and course materials
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  Digital documentation and reports
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  API keys and developer tools
                </li>
              </ul>
            </div>
          </section>

          {/* Service Delivery */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              Consulting & Professional Services
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                For consulting services, cybersecurity assessments, and custom software development:
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Timeline & Delivery</h3>
                <ul className="space-y-3">
                  <li className="text-gray-700 flex items-start">
                    <span className="text-green-600 mr-3 font-bold">•</span>
                    <span>Service delivery timelines are agreed upon during project scoping</span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-green-600 mr-3 font-bold">•</span>
                    <span>Deliverables are provided as per the Statement of Work (SOW)</span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-green-600 mr-3 font-bold">•</span>
                    <span>Regular project updates and status reports are provided</span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-green-600 mr-3 font-bold">•</span>
                    <span>Final deliverables are sent via secure electronic channels</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Access Credentials */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              Access to Digital Products
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                Upon successful purchase and payment verification:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-700 flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>You will receive access credentials via email within 24 hours</span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>Login details for online platforms and portals will be sent to your registered email</span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>Download links for software and tools will be provided in your account dashboard</span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>Course enrollments will be activated immediately after payment confirmation</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Physical Products */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              Physical Products (If Applicable)
            </h2>
            
            <p className="text-gray-700 mb-4">
              In rare cases where physical items are shipped (hardware, documentation, etc.):
            </p>
            
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg space-y-3">
              <p className="text-gray-700">
                <strong className="text-gray-900">Domestic Shipping (India):</strong> 5-7 business days
              </p>
              <p className="text-gray-700">
                <strong className="text-gray-900">International Shipping:</strong> 10-15 business days
              </p>
              <p className="text-gray-700">
                <strong className="text-gray-900">Tracking Information:</strong> Provided via email once shipped
              </p>
              <p className="text-gray-700">
                <strong className="text-gray-900">Shipping Charges:</strong> Calculated based on location and product weight
              </p>
            </div>
          </section>

          {/* Delays */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              Service Delays
            </h2>
            
            <p className="text-gray-700 mb-4">
              While we strive for timely delivery, delays may occur due to:
            </p>
            
            <ul className="space-y-3 ml-6">
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>Technical issues or system maintenance</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>Payment verification delays</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>Force majeure events</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>Incomplete or incorrect information provided</span>
              </li>
            </ul>
            
            <p className="text-gray-700 mt-4">
              We will notify you promptly of any expected delays.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              Delivery Support
            </h2>
            
            <p className="text-gray-700 mb-4">
              If you have questions about your service delivery or have not received access to your purchase:
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong className="text-gray-900">Email:</strong>{" "}
                <a href="mailto:support@infoziant.com" className="text-blue-600 hover:underline font-medium">
                  support@infoziant.com
                </a>
              </p>
              <p className="text-gray-700 mt-2">
                <strong className="text-gray-900">Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST
              </p>
            </div>
          </section>

          {/* Last Updated */}
          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="text-sm text-gray-500 text-center">
              Last Updated: February 10, 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
