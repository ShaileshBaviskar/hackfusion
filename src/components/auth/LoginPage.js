import React from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./LoginPage.css";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    try {
      // Show success message
      await Swal.fire({
        icon: 'success',
        title: 'Successfully Registered! 🎉',
        text: 'Welcome to our platform!',
        confirmButtonColor: '#28a745',
        timer: 2000,
        showConfirmButton: false
      });

      // Redirect to Elections page after the alert
      navigate('/elections');
    } catch (error) {
      console.error('Registration error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: 'Please try again',
        confirmButtonColor: '#dc3545'
      });
    }
  };

  return (
    <div className="register-container">
      {/* Form Section */}
      <div className="register-form-section">
        <div className="logo-container">
          <img
            alt="College Logo"
            className="college-logo"
            src="https://storage.googleapis.com/a1aa/image/TBzdI9vdRZ3a-NCA0kdpKIZCHuhJjhpGLWckhfpvgc0.jpg"
          />
        </div>
        <h2 className="register-title">Register Here</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="input-row">
            <input className="input-field" placeholder="First Name" type="text" />
            <input className="input-field" placeholder="Last Name" type="text" />
          </div>
          <div className="input-row">
            <input className="input-field" placeholder="Email" type="email" />
            <input className="input-field" placeholder="PRN" type="text" />
          </div>
          <div className="input-row">
            <input className="input-field" placeholder="Password" type="password"/>
            <input className="input-field" placeholder="Confirm Password" type="confirm password"/>
          </div>
          <div className="input-row">
            <input className="input-field" placeholder="Mobile No" type="text" />
            <select className="input-field">
              <option>Department</option>
              <option>Computer Engineering</option>
              <option>Information Technology</option>
              <option>Electronics Engineering</option>
              <option>Mechanical Engineering</option>
              <option>Civil Engineering</option>
              <option>Electrical Engineering</option>
              <option>Chemical Engineering</option>
              <option>Biomedical Engineering</option>
              <option>Aerospace Engineering</option>
              <option>Environmental Engineering</option>
              <option>Industrial Engineering</option>
            </select>
          </div>
          <div className="input-row">
            <input className="input-field" placeholder="Roll no" type="text" />
            <select className="input-field">
              <option>Year</option>
              <option>First Year</option>
              <option>Second Year</option>
              <option>Third Year</option>
              <option>Fourth Year</option>
            </select>
          </div>
          <div className="gender-section">
            <span className="gender-label">Gender</span>
            <div className="gender-options">
              <label className="gender-option">
                <input type="radio" name="gender" /> Male
              </label>
              <label className="gender-option">
                <input type="radio" name="gender" /> Female
              </label>
              <label className="gender-option">
                <input type="radio" name="gender" /> Other
              </label>
            </div>
          </div>
          <button className="register-button" type="submit">Register</button>
          <div className="social-login">
            <p>Sign in with</p>
            <button className="google-button">
              <i className="fab fa-google"></i>
              <span>Google</span>
            </button>
          </div>
        </form>
      </div>
      {/* Image Section */}
      <div className="illustration-section">
        <img
          alt="Illustration of students studying with a large book and laptop"
          src="https://storage.googleapis.com/a1aa/image/xPx0OnaeNUfAet3ec-u9DkYEnzixHpYYrAxIcFctkU4.jpg"
        />
      </div>
    </div>
  );
};

export default Register;