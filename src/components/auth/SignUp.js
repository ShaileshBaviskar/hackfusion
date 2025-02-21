import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import './SignUpDesign.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('Successfully signed up:', userCredential.user);
            // Redirect to home page after successful signup
            navigate('/home');
        } catch (error) {
            console.error('Error signing up:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            setError('');
            setLoading(true);
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            navigate('/home');
        } catch (error) {
            console.error('Error signing in with Google:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleFacebookSignIn = async () => {
        try {
            setError('');
            setLoading(true);
            const provider = new FacebookAuthProvider();
            await signInWithPopup(auth, provider);
            navigate('/home');
        } catch (error) {
            console.error('Error signing in with Facebook:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="container">
                <div className="form-section">
                    <div className="logo-container">
                        <img 
                            src="https://s3-alpha-sig.figma.com/img/fc3c/5e08/cb583e095f8ec641750e3b9b78d9c8b0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jgjawRRISC1Hj1EbudYUg40lZgWq5jsVE4issWBFvNlggtXJCwlbFJ2c76YWz0ygPgAgpRefy7UTiTVIYLa5T8~r-xT~34FjpU2gmtvr1nEFMA7ug1oKeas6RjLAFs0Ks~FtWh~55CDrP86HO-A5Mko13wBLuc~IcJJWwz3ZE~DZ8mEm~AstGZ7vFjqtcPAPZv8OFUQJ5sudyDBx4INAWLlCKS5-wa6Cnd7Bcg7O5Gt2XCEE4osTK0eDxzwH6YUBa1Nnndq71AmzJ492pL8wwX~k0IRNtBhtNJ1hXYy97UdYH3dKAh7PdCb5YR3zLPrCVNfVPEJbOUrrtBTI6e3a9A_"
                            alt="St. Engineering College Logo" 
                            className="logo"
                        />
                    </div>
                    {error && <div className="error-message text-red-500 text-center mb-4">{error}</div>}
                    <div className="login-text">
                        <span>Already Have an account !</span>
                        <Link to="/login" className="text-blue-500 ml-2">Login</Link>
                    </div>
                    <form onSubmit={handleSignUp}>
                        <input 
                            type="email" 
                            className="input-field" 
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input 
                            type="password" 
                            className="input-field" 
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        
                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center">
                                <input 
                                    type="checkbox" 
                                    className="form-checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <span className="ml-2">Remember Me</span>
                            </label>
                            <Link to="/forgot-password" className="text-blue-500">Forgot Password?</Link>
                        </div>
                        <button 
                            type="submit" 
                            className="signup-btn" 
                            disabled={loading}
                        >
                            {loading ? 'Signing up...' : 'Sign Up'}
                        </button>
                    </form>
                    
                    <div className="text-center mb-4">
                        <span>Login With</span>
                    </div>
                    
                    <div className="social-buttons">
                        <button 
                            className="social-btn google" 
                            onClick={handleGoogleSignIn}
                            disabled={loading}
                        >
                            <i className="fab fa-google mr-2"></i> Google
                        </button>
                        <button 
                            className="social-btn facebook" 
                            onClick={handleFacebookSignIn}
                            disabled={loading}
                        >
                            <i className="fab fa-facebook-f mr-2"></i> Facebook
                        </button>
                    </div>
                </div>

                <div className="illustration">
                    <img 
                        src="https://storage.googleapis.com/a1aa/image/PPi3hM8E66Fo3hJsXLBLrVFfGLN2q_-BMXxM-X7bHfc.jpg"
                        alt="Illustration of students studying" 
                        className="illustration-img"
                    />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
