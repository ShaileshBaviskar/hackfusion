import React from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';

export const ModernCard = ({ children, className = '', ...props }) => (
  <Card className={`modern-card ${className}`} {...props}>
    {children}
  </Card>
);

export const ModernButton = ({ children, className = '', loading = false, ...props }) => (
  <Button 
    className={`btn-modern ${className}`} 
    disabled={loading}
    {...props}
  >
    {loading ? (
      <>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          className="me-2"
        />
        Loading...
      </>
    ) : children}
  </Button>
);

export const StatCard = ({ title, value, icon, color = 'primary' }) => (
  <div className="stat-card">
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <div className="stat-card-title">{title}</div>
        <div className="stat-card-value">{value}</div>
      </div>
      <div className={`text-${color} fs-1`}>
        {icon}
      </div>
    </div>
  </div>
);

export const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center p-5">
    <div className="spinner-modern" />
  </div>
);

export const Badge = ({ children, variant = 'primary', className = '' }) => (
  <span className={`badge-modern bg-${variant} ${className}`}>
    {children}
  </span>
);

export const SearchInput = ({ value, onChange, placeholder = 'Search...', className = '' }) => (
  <div className="position-relative">
    <input
      type="text"
      className={`form-control-modern ${className}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    <i className="fas fa-search position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
  </div>
);

export const EmptyState = ({ icon, title, description }) => (
  <div className="text-center py-5">
    <div className="text-muted mb-3 fs-1">
      {icon}
    </div>
    <h4>{title}</h4>
    <p className="text-muted">{description}</p>
  </div>
);
