import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = getAuth();

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="container">
        {/* Left Section */}
        <div className="form-section">
          <div className="logo-container">
            <img
              alt="St. Engineering College Logo"
              className="logo"
              src="https://s3-alpha-sig.figma.com/img/fc3c/5e08/cb583e095f8ec641750e3b9b78d9c8b0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jgjawRRISC1Hj1EbudYUg40lZgWq5jsVE4issWBFvNlggtXJCwlbFJ2c76YWz0ygPgAgpRefy7UTiTVIYLa5T8~r-xT~34FjpU2gmtvr1nEFMA7ug1oKeas6RjLAFs0Ks~FtWh~55CDrP86HO-A5Mko13wBLuc~IcJJWwz3ZE~DZ8mEm~AstGZ7vFjqtcPAPZv8OFUQJ5sudyDBx4INAWLlCKS5-wa6Cnd7Bcg7O5Gt2XCEE4osTK0eDxzwH6YUBa1Nnndq71AmzJ492pL8wwX~k0IRNtBhtNJ1hXYy97UdYH3dKAh7PdCb5YR3zLPrCVNfVPEJbOUrrtBTI6e3a9A_"
            />
          </div>
          <div className="login-text">
            <input className="form-checkbox" type="checkbox" />
            <span>Already Have an account !</span>
            <a className="text-blue-500" href="/login"></a>
          </div>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleEmailSignUp}>
            <input 
              className="input-field" 
              placeholder="Email Address" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              className="input-field" 
              placeholder="Password" 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input className="form-checkbox" type="checkbox" />
                <span className="ml-2">Remember Me</span>
              </label>
              <a className="text-blue-500" href="/forgot-password">Forgot Password?</a>
            </div>
            <button className="Login-but" type="submit"><Login></Login></button> {/* Changed button text */}
          </form>
          
          <div className="text-center mb-4">
            <span>Login With</span>
          </div>
          
          <div className="social-buttons">
            <button className="social-btn google" onClick={handleGoogleSignIn}>
              <FcGoogle className="text-xl" /> Google
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="illustration">
          <img
            alt="Illustration of students studying"
            className="illustration-img"
            src="https://storage.googleapis.com/a1aa/image/PPi3hM8E66Fo3hJsXLBLrVFfGLN2q_-BMXxM-X7bHfc.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;