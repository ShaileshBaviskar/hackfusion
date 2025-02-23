import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Show welcome message if user just registered
    if (location.state?.showLoginSuccess) {
      setEmail(location.state.email); // Pre-fill email
      Swal.fire({
        icon: 'success',
        title: 'Welcome! 👋',
        text: 'Please login with your email and PRN',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);

      // Show loading alert
      Swal.fire({
        title: 'Logging in...',
        html: 'Please wait while we verify your credentials',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });
      
      await signInWithEmailAndPassword(auth, email, password);
      
      // Close loading alert
      Swal.close();

      // Show success message
      await Swal.fire({
        icon: 'success',
        title: 'Login Successful! 🎉',
        text: 'Welcome back to College ERP',
        timer: 2000,
        showConfirmButton: false
      });

      navigate('/');
    } catch (err) {
      Swal.close();
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Card style={{ maxWidth: '400px', width: '100%' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password (PRN)</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your PRN as password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              className="w-100"
              type="submit"
              disabled={loading}
              variant="primary"
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;

// filepath: /e:/wtcclg/collegeerp/src/components/auth/SignUp.js
// At the bottom of the file
