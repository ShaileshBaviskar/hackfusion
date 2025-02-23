import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';
import "./Register.css";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBszRTKMKtgrhGAfQvn1u_U4sTFaX0cpXQ",
  authDomain: "collegeerp-96236.firebaseapp.com",
  projectId: "collegeerp-96236",
  storageBucket: "collegeerp-96236.firebasestorage.app",
  messagingSenderId: "188014603856",
  appId: "1:188014603856:web:7487224312af7949c76b55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    prn: "",
    mobile: "",
    department: "",
    rollNo: "",
    year: "",
    gender: "",
    password: "",
    confirmPassword: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    // First Name validation
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    } else if (!/^[A-Za-z\s]{2,30}$/.test(formData.firstName)) {
      errors.firstName = "First name should be 2-30 characters long and contain only letters";
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    } else if (!/^[A-Za-z\s]{2,30}$/.test(formData.lastName)) {
      errors.lastName = "Last name should be 2-30 characters long and contain only letters";
    }

    // Email validation
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    // PRN validation
    if (!formData.prn) {
      errors.prn = "PRN is required";
    } else if (!/^\d{10}$/.test(formData.prn)) {
      errors.prn = "PRN must be 10 digits";
    }

    // Mobile validation
    if (!formData.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }

    // Department validation
    if (!formData.department) {
      errors.department = "Please select your department";
    }

    // Roll Number validation
    if (!formData.rollNo) {
      errors.rollNo = "Roll number is required";
    } else if (!/^\d{1,4}$/.test(formData.rollNo)) {
      errors.rollNo = "Roll number must be between 1-4 digits";
    }

    // Year validation
    if (!formData.year) {
      errors.year = "Please select your year";
    }

    // Gender validation
    if (!formData.gender) {
      errors.gender = "Please select your gender";
    }

    // Password validation
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password should be at least 6 characters long";
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fix all the errors in the form',
        confirmButtonColor: '#dc3545'
      });
      return;
    }

    try {
      setLoading(true);

      // Show processing alert
      Swal.fire({
        title: 'Processing...',
        html: 'Creating your account, please wait...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });
      
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );

      // Store additional user data in Firestore
      await addDoc(collection(db, "students"), {
        uid: userCredential.user.uid,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        prn: formData.prn,
        mobile: formData.mobile,
        department: formData.department,
        rollNo: formData.rollNo,
        year: formData.year,
        gender: formData.gender,
        createdAt: new Date().toISOString()
      });

      // Close the processing alert
      Swal.close();

      // Show success alert
      await Swal.fire({
        icon: 'success',
        title: 'Registration Successful! 🎉',
        html: `
          <div class="text-center">
            <h4>Welcome ${formData.firstName}!</h4>
            <p>Your account has been created successfully.</p>
            <p>Please use these credentials to login:</p>
            <div class="alert alert-info">
              <strong>Email:</strong> ${formData.email}<br>
              <strong>Password:</strong> ${formData.password}
            </div>
          </div>
        `,
        showConfirmButton: true,
        confirmButtonText: 'Proceed to Login',
        confirmButtonColor: '#28a745',
        allowOutsideClick: false,
        width: '400px'
      });

      // Navigate to login
      navigate('/login', { 
        state: { 
          showLoginSuccess: true,
          email: formData.email 
        } 
      });

    } catch (err) {
      // Close the processing alert if there's an error
      Swal.close();
      
      // Show error alert
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: err.message,
        confirmButtonColor: '#dc3545'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/login');
  };

  return (
    <>
      <div className="register-container">
        <div className="register-form-section">
          <div className="logo-container">
            <img
              alt="College Logo"
              className="college-logo"
              src="https://storage.googleapis.com/a1aa/image/TBzdI9vdRZ3a-NCA0kdpKIZCHuhJjhpGLWckhfpvgc0.jpg"
            />
          </div>
          <h2 className="register-title">Register Here</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="input-group">
                <input 
                  className={`input-field ${formErrors.firstName ? 'error' : ''}`}
                  placeholder="First Name" 
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
              </div>
              <div className="input-group">
                <input 
                  className={`input-field ${formErrors.lastName ? 'error' : ''}`}
                  placeholder="Last Name" 
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <input 
                  className={`input-field ${formErrors.email ? 'error' : ''}`}
                  placeholder="Email" 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>
              <div className="input-group">
                <input 
                  className={`input-field ${formErrors.prn ? 'error' : ''}`}
                  placeholder="PRN" 
                  type="text"
                  name="prn"
                  value={formData.prn}
                  onChange={handleInputChange}
                />
                {formErrors.prn && <span className="error-message">{formErrors.prn}</span>}
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <input 
                  className={`input-field ${formErrors.mobile ? 'error' : ''}`}
                  placeholder="Mobile No" 
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
                {formErrors.mobile && <span className="error-message">{formErrors.mobile}</span>}
              </div>
              <div className="input-group">
                <select 
                  className={`input-field ${formErrors.department ? 'error' : ''}`}
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                >
                  <option value="">Department</option>
                  <option value="Computer Engineering">Computer Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Electronics Engineering">Electronics Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Chemical Engineering">Chemical Engineering</option>
                  <option value="Biomedical Engineering">Biomedical Engineering</option>
                  <option value="Aerospace Engineering">Aerospace Engineering</option>
                  <option value="Environmental Engineering">Environmental Engineering</option>
                  <option value="Industrial Engineering">Industrial Engineering</option>
                </select>
                {formErrors.department && <span className="error-message">{formErrors.department}</span>}
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <input 
                  className={`input-field ${formErrors.rollNo ? 'error' : ''}`}
                  placeholder="Roll no" 
                  type="text"
                  name="rollNo"
                  value={formData.rollNo}
                  onChange={handleInputChange}
                />
                {formErrors.rollNo && <span className="error-message">{formErrors.rollNo}</span>}
              </div>
              <div className="input-group">
                <select 
                  className={`input-field ${formErrors.year ? 'error' : ''}`}
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                >
                  <option value="">Year</option>
                  <option value="First Year">First Year</option>
                  <option value="Second Year">Second Year</option>
                  <option value="Third Year">Third Year</option>
                  <option value="Fourth Year">Fourth Year</option>
                </select>
                {formErrors.year && <span className="error-message">{formErrors.year}</span>}
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <input 
                  className={`input-field ${formErrors.password ? 'error' : ''}`}
                  placeholder="Password" 
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {formErrors.password && <span className="error-message">{formErrors.password}</span>}
              </div>
              <div className="input-group">
                <input 
                  className={`input-field ${formErrors.confirmPassword ? 'error' : ''}`}
                  placeholder="Confirm Password" 
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                {formErrors.confirmPassword && <span className="error-message">{formErrors.confirmPassword}</span>}
              </div>
            </div>
            <div className="gender-section">
              <span className="gender-label">Gender</span>
              <div className="gender-options">
                <label className="gender-option">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleInputChange}
                  /> Male
                </label>
                <label className="gender-option">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleInputChange}
                  /> Female
                </label>
                <label className="gender-option">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleInputChange}
                  /> Other
                </label>
              </div>
              {formErrors.gender && <span className="error-message">{formErrors.gender}</span>}
            </div>
            <button className="register-button" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
        <div className="illustration-section">
          <img
            alt="Illustration of students studying with a large book and laptop"
            src="https://storage.googleapis.com/a1aa/image/xPx0OnaeNUfAet3ec-u9DkYEnzixHpYYrAxIcFctkU4.jpg"
          />
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        className="registration-success-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Registration Successful! 🎉</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <i className="fas fa-check-circle text-success" style={{ fontSize: '4rem', color: '#28a745' }}></i>
            <h4 className="mt-3">Welcome to College ERP!</h4>
            <p className="mt-3">Your account has been successfully created.</p>
            <p>Please log in using your email and password.</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Proceed to Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Register;