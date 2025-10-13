import { useState, useEffect, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./InquiryModal.css";

const InquiryModal = ({ isOpen, onClose, course, onEnrollmentSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    degree: "",
    year: "",
    department: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [inquiryId, setInquiryId] = useState(null);
  const [showPaymentButton, setShowPaymentButton] = useState(false);
  const razorpayContainerRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    )
      newErrors.email = "Please enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, "")))
      newErrors.phone = "Please enter a valid 10-digit phone number";
    if (!formData.organization.trim())
      newErrors.organization = "Organization/College is required";
    if (!formData.degree.trim()) newErrors.degree = "Degree is required";
    if (!formData.year.trim()) newErrors.year = "Year of study is required";
    if (!formData.department.trim())
      newErrors.department = "Department is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (!showPaymentButton || !razorpayContainerRef.current) return;

    if (inquiryId) {
      localStorage.setItem("currentInquiryId", inquiryId);
      localStorage.setItem("currentOrganization", formData.organization || "");
      console.log("Stored inquiry ID:", inquiryId);
    }

    razorpayContainerRef.current.innerHTML = "";

    const form = document.createElement("form");
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";

    if (course.price === 1499)
      script.setAttribute("data-payment_button_id", "pl_QM0XW5mBpfdpqZ");
    else if (course.price === 4999)
      script.setAttribute("data-payment_button_id", "pl_QWJ2Ir5MdgiDc8");
    else script.setAttribute("data-payment_button_id", "pl_QYKoogXOZceEX5");

    script.async = true;
    form.appendChild(script);
    razorpayContainerRef.current.appendChild(form);

    console.log("Razorpay button added to DOM");
  }, [showPaymentButton, inquiryId, formData.organization, course.price]);

  useEffect(() => {
    let isMounted = true;

    const handleMessage = async (event) => {
      if (event.origin !== "https://your-expected-origin.com") return;
      if (!event.data?.razorpay_payment_id) return;

      try {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/course-inquiries/verify-payment`,
          {
            razorpayOrderId: event.data.razorpay_order_id,
            razorpayPaymentId: event.data.razorpay_payment_id,
            razorpaySignature: event.data.razorpay_signature,
            inquiryId,
            organization: formData.organization,
          }
        );

        if (!isMounted) return;
        toast.success("Enrollment successful! We will contact you shortly.");
        onClose();

        onEnrollmentSuccess?.({
          _id: inquiryId,
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          courseName: course.title,
          status: "enrolled",
        });
      } catch (error) {
        console.error("Payment verification failed:", error);
        if (isMounted)
          toast.error("Payment verification failed. Please try again.");
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      isMounted = false;
      window.removeEventListener("message", handleMessage);
    };
  }, [
    inquiryId,
    formData.name,
    formData.email,
    formData.organization,
    course.title,
    onEnrollmentSuccess,
    onClose,
  ]);


  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_VTA_API_URL}/course-inquiries`,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          degree: formData.degree,
          year: formData.year,
          department: formData.department,
          courseId: course._id,
        }
      );
      setInquiryId(response.data._id);
      setShowPaymentButton(true);
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      if (error.response?.status === 404)
        toast.error("Server endpoint not found.");
      else toast.error(error.response?.data?.message || "Submission failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Enroll in {course.title}</h2>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>

        {!showPaymentButton ? (
          <form onSubmit={handleSubmit} className="inquiry-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={errors.name ? "error" : ""}
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className={errors.phone ? "error" : ""}
              />
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="organization">Organization/College</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Enter your organization/college"
                className={errors.organization ? "error" : ""}
              />
              {errors.organization && (
                <span className="error-message">{errors.organization}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="degree">Degree</label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                placeholder="Enter your degree"
                className={errors.degree ? "error" : ""}
              />
              {errors.degree && (
                <span className="error-message">{errors.degree}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="year">Year of Study</label>
              <input
                type="text"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="Enter your year of study"
                className={errors.year ? "error" : ""}
              />
              {errors.year && (
                <span className="error-message">{errors.year}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Enter your department"
                className={errors.department ? "error" : ""}
              />
              {errors.department && (
                <span className="error-message">{errors.department}</span>
              )}
            </div>

            <div className="course-info-summary">
              <p>
                <strong>Course:</strong> {course.title}
              </p>
              <p>
                <strong>Price:</strong> ₹{course.price}
              </p>
              <p>
                <strong>Duration:</strong> {course.duration}
              </p>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Continue to Payment"}
              </button>
            </div>
          </form>
        ) : (
          <div className="payment-section">
            <div className="payment-info">
              <p>Please complete your payment to enroll in the course.</p>
              <div className="course-info-summary">
                <p>
                  <strong>Name:</strong> {formData.name}
                </p>
                <p>
                  <strong>Email:</strong> {formData.email}
                </p>
                <p>
                  <strong>Phone:</strong> {formData.phone}
                </p>
                <p>
                  <strong>Organization:</strong> {formData.organization}
                </p>
                <p>
                  <strong>Degree:</strong> {formData.degree}
                </p>
                <p>
                  <strong>Year:</strong> {formData.year}
                </p>
                <p>
                  <strong>Department:</strong> {formData.department}
                </p>
                <p>
                  <strong>Course:</strong> {course.title}
                </p>
                <p>
                  <strong>Price:</strong> ₹{course.price}
                </p>
              </div>
            </div>

            <div className="payment-alert">
              <div className="alert alert-warning">
                <i className="fas fa-exclamation-triangle"></i>
                <strong>Important:</strong> After clicking the payment button,
                please DO NOT manually close the payment window or click "Done"
                button. Let the payment process complete and redirect
                automatically to verify your payment successfully.
              </div>
            </div>

            <div className="razorpay-container" ref={razorpayContainerRef}>
              {/* Razorpay button will be added here dynamically */}
            </div>

            <div className="form-actions payment-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InquiryModal;
