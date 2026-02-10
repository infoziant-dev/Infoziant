import React from "react";

export default function Refund() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            How to cancel or seek a refund for products/services purchased through our platform
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <p className="text-gray-700 leading-relaxed mb-8">
            This refund and cancellation policy outlines how you can cancel or seek a refund for a 
            product/service that you have purchased through the Platform. Under this policy:
          </p>

          {/* Cancellation Policy */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              Cancellation Policy
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">General Cancellations</h3>
              <p className="text-gray-700 mb-3">
                <strong>Cancellations will only be considered if the request is made within 7 days of placing the order.</strong>
              </p>
              <p className="text-gray-700">
                However, cancellation requests may not be entertained if the orders have been communicated 
                to such sellers/merchant(s) listed on the Platform.
              </p>
            </div>
          </section>

          {/* Refund Policy */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              Refund Policy
            </h2>
            
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Product/Service Not As Expected</h3>
              <p className="text-gray-700 mb-3">
                In case you feel that the product/service received is not as shown on the site or as per 
                your expectations, you must bring it to the notice of our customer service within{" "}
                <strong>7 days of receiving the product/service access</strong>.
              </p>
              <p className="text-gray-700">
                The customer service team after looking into your complaint will take an appropriate decision.
              </p>
            </div>
          </section>

          {/* Refund Processing Time */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              Refund Processing Time
            </h2>
            <p className="text-gray-700">
              In case of any refunds approved by{" "}
              <span className="text-blue-600 font-semibold">Calebinfoziant OPC private limited</span>, 
              it will take <strong>7 days</strong> for the refund to be processed to you.
            </p>
          </section>

          {/* How to Request */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              How to Request a Cancellation or Refund
            </h2>
            <ul className="space-y-3 ml-6">
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                Contact our customer service team through the contact information provided on our website
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                Provide your order details and reason for cancellation/refund
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                Our team will review your request and respond within 2-3 business days
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                Follow any additional instructions provided by our customer service team
              </li>
            </ul>
          </section>

          {/* Contact Customer Service */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              Contact Customer Service
            </h2>
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg space-y-3">
              <p className="text-gray-700">
                <strong className="text-gray-900">Email:</strong>{" "}
                <a href="mailto:support@infoziant.com" className="text-blue-600 hover:underline">
                  support@infoziant.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong className="text-gray-900">Phone:</strong> Monday - Friday (9:00 AM - 6:00 PM)
              </p>
              <p className="text-gray-700">
                <strong className="text-gray-900">Address:</strong> Akshaya HQ, Rajiv Gandhi
Salai, Kazhipattur,
Tamil Nadu, Chennai - 603103, India
              </p>
            </div>
          </section>

          {/* Important Notes */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              Important Notes
            </h2>
            <ul className="space-y-3 ml-6">
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                All refund and cancellation requests must be made within the specified timeframes
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                Refunds will be processed to the original payment method used for the purchase
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                The decision of Calebinfoziant OPC private limited regarding refunds and cancellations is final
              </li>
            </ul>
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
