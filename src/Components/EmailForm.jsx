import React, { useState } from 'react';
import './css/Emailform.css'; // Import the separated CSS

const EmailForm = ({ closeModal }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("https://mailer-api-production-76e4.up.railway.app/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                message: "Requesting free version of DAST Tool",
                time: new Date().toLocaleString()
            }),
        });

        if (response.ok) {
            alert("Email submitted successfully!");
            closeModal();
        } else {
            const errorText = await response.text();
            console.error("Server Error:", errorText);
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        alert("An error occurred. Please try again.");
    }
};


    return (
        <div className="overlay">
            <div className="form-container">
                {/* Close button */}
                <button className="close-button" onClick={closeModal}>X</button>
                <h2>DAST Tool Free Version</h2>
                <p>Want this for free? Enter the email address we should send it to below.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EmailForm;
