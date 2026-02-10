import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Notice
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Infoziant IT Solutions Inc. is committed to protecting your privacy and personal data
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              Infoziant IT Solutions Inc. ("Company", "we", "us", or "our") is committed to protecting your privacy. 
              This Privacy Notice explains how we collect, use, store, disclose, and protect your personal data when 
              you visit our website or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By accessing our website or engaging with our services, you agree to the practices described in this Privacy Notice.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
              Personal Data We Collect
            </h2>
            <div className="ml-11 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">a) Information You Provide Directly</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Job title</li>
                  <li>Inquiry or contact form details</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">b) Automatically Collected Information</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>IP address</li>
                  <li>Browser type and device information</li>
                  <li>Website usage data</li>
                  <li>Cookies and analytics data</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">c) Business Relationship Information</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Contractual details</li>
                  <li>Communication records</li>
                  <li>Support requests</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
              Purposes of Personal Data Collection
            </h2>
            <div className="ml-11">
              <p className="text-gray-700 mb-3">We collect personal data for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>To respond to inquiries and provide services</li>
                <li>To manage business relationships</li>
                <li>To deliver cybersecurity and consulting services</li>
                <li>To improve website functionality and user experience</li>
                <li>To meet legal and regulatory obligations</li>
                <li>For internal operations and reporting</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">3</span>
              How Personal Data Is Used
            </h2>
            <div className="ml-11">
              <p className="text-gray-700 mb-3">Your personal data may be used to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Communicate with you</li>
                <li>Provide requested services</li>
                <li>Manage contracts and billing</li>
                <li>Conduct internal analysis</li>
                <li>Maintain system security</li>
                <li>Send service-related notifications</li>
              </ul>
              <p className="text-gray-700 mt-4 font-medium">
                We only use personal data for legitimate business purposes.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">4</span>
              Categories of Parties Personal Data Is Disclosed To
            </h2>
            <div className="ml-11">
              <p className="text-gray-700 mb-3">We may share personal data with:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Internal employees on a need-to-know basis</li>
                <li>Authorized service providers (IT, hosting, email platforms)</li>
                <li>Business partners (when contractually required)</li>
                <li>Legal or regulatory authorities (when required by law)</li>
              </ul>
              <p className="text-gray-700 mt-4 font-medium">
                All third parties are contractually obligated to protect your data.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">5</span>
              Storage of Personal Data
            </h2>
            <div className="ml-11">
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Personal data is stored in secure, access-controlled systems</li>
                <li>Encryption is applied where applicable</li>
                <li>Data is hosted on approved infrastructure</li>
                <li>Access is restricted based on job role</li>
              </ul>
              <p className="text-gray-700 mt-4 font-medium">
                We take reasonable technical and organizational measures to protect personal data.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">6</span>
              Deletion and Retention of Personal Data
            </h2>
            <div className="ml-11">
              <p className="text-gray-700 mb-3">Personal data is retained only as long as necessary for:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Business purposes</li>
                <li>Legal requirements</li>
                <li>Contractual obligations</li>
              </ul>
              <p className="text-gray-700 mt-4 font-medium">
                After the retention period, data is securely deleted or anonymized.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">7</span>
              Your Rights With Respect to Personal Data
            </h2>
            <div className="ml-11">
              <p className="text-gray-700 mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion</li>
                <li>Restrict processing</li>
                <li>Withdraw consent</li>
                <li>Object to processing</li>
              </ul>
              <div className="mt-4 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p className="text-gray-800">
                  <strong>Requests can be sent to:</strong>
                </p>
                <p className="text-blue-700 font-medium mt-1">
                  📧 privacy@infoziant.com
                </p>
              </div>
              <p className="text-gray-700 mt-4">
                We respond within reasonable timelines.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">8</span>
              Do We Sell Personal Data?
            </h2>
            <div className="ml-11">
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                <p className="text-gray-900 font-bold text-lg">
                  Infoziant IT Solutions Inc. does NOT sell personal data.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">9</span>
              Cookies and Tracking
            </h2>
            <div className="ml-11">
              <p className="text-gray-700">
                Our website may use cookies for basic functionality and analytics. You may disable cookies 
                through your browser settings.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">10</span>
              Data Security
            </h2>
            <div className="ml-11">
              <p className="text-gray-700 mb-3">We implement appropriate safeguards including:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access controls</li>
                <li>Encryption</li>
                <li>Monitoring and logging</li>
                <li>Periodic security assessments</li>
              </ul>
            </div>
          </section>

          {/* Section 11 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">11</span>
              Children's Privacy
            </h2>
            <div className="ml-11">
              <p className="text-gray-700">
                Our services are not intended for individuals under 18. We do not knowingly collect children's personal data.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">12</span>
              Changes to This Privacy Notice
            </h2>
            <div className="ml-11">
              <p className="text-gray-700">
                We may update this Privacy Notice periodically. Updates will be posted on this page with a 
                revised "Last Updated" date.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">13</span>
              Contact Information
            </h2>
            <div className="ml-11">
              <p className="text-gray-700 mb-3">For privacy-related questions:</p>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                <p className="text-gray-900 font-bold text-lg mb-2">Infoziant IT Solutions Inc</p>
                <p className="text-gray-700">
                  Email: <a href="mailto:privacy@infoziant.com" className="text-blue-600 hover:underline font-medium">privacy@infoziant.com</a>
                </p>
              </div>
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
