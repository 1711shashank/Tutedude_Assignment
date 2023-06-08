import React, { useState } from 'react';
import './AlumniRegistrationForm.css'

const AlumniRegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);


    const isNameValid = name.trim() !== '';
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


    const handleNameChange = (e) => {
        setName(e.target.value);
        if (!nameTouched) {
            setNameTouched(true);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!emailTouched) {
            setEmailTouched(true);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to the server
        console.log('Name:', name);
        console.log('Email:', email);
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Alumni Registration Form</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className={`form-input ${(!nameTouched) ? 'default' : (isNameValid ? 'valid' : 'invalid')}`}
                        value={name}
                        onChange={handleNameChange}
                        onClick={handleNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className={`form-input ${(!emailTouched) ? 'default' : (isEmailValid ? 'valid' : 'invalid')}`}
                        value={email}
                        onChange={handleEmailChange}
                        onClick={handleEmailChange}
                    />
                </div>
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    );
};

export default AlumniRegistrationForm;
