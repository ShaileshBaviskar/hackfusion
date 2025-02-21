import React from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { FaHospital, FaUserMd, FaCalendarAlt } from 'react-icons/fa';

const HealthSystem = () => {
  return (
    <div className="health-system-container">
      <h2 className="text-center mb-4">
        <FaHospital className="me-2" />
        Health & Leave Management
      </h2>

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                <FaUserMd className="me-2" />
                Report Health Issue
              </Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Type of Issue</Form.Label>
                  <Form.Select>
                    <option>Select Issue Type</option>
                    <option>Illness</option>
                    <option>Injury</option>
                    <option>Mental Health</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary">Submit Report</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                <FaCalendarAlt className="me-2" />
                Request Leave
              </Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Leave Type</Form.Label>
                  <Form.Select>
                    <option>Select Leave Type</option>
                    <option>Medical Leave</option>
                    <option>Personal Leave</option>
                    <option>Emergency Leave</option>
                  </Form.Select>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>From Date</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>To Date</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Reason</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary">Submit Request</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card>
        <Card.Body>
          <Card.Title>Recent Health Notifications</Card.Title>
          <div className="notification-list">
            <div className="notification-item">
              <p className="mb-1"><strong>Medical Leave Approved</strong></p>
              <p className="text-muted small">Your medical leave request for Feb 20-21 has been approved.</p>
            </div>
            <div className="notification-item">
              <p className="mb-1"><strong>Doctor's Appointment</strong></p>
              <p className="text-muted small">Reminder: You have a follow-up appointment on Feb 25.</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HealthSystem;
