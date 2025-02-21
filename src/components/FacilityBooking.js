import React, { useState } from 'react';
import { Card, Button, Form, Row, Col, Table } from 'react-bootstrap';
import { FaCalendarCheck, FaBuilding, FaClock } from 'react-icons/fa';

const FacilityBooking = () => {
  const [facilities] = useState([
    { id: 1, name: 'Auditorium', status: 'Available', capacity: 500 },
    { id: 2, name: 'Tennis Court', status: 'Booked', capacity: 4 },
    { id: 3, name: 'Conference Room', status: 'Available', capacity: 50 },
    { id: 4, name: 'Computer Lab', status: 'Maintenance', capacity: 100 }
  ]);

  return (
    <div className="facility-booking-container">
      <h2 className="text-center mb-4">
        <FaCalendarCheck className="me-2" />
        Facility Booking System
      </h2>

      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                <FaBuilding className="me-2" />
                Available Facilities
              </Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Facility Name</th>
                    <th>Status</th>
                    <th>Capacity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {facilities.map(facility => (
                    <tr key={facility.id}>
                      <td>{facility.name}</td>
                      <td>
                        <span className={`status-badge ${facility.status.toLowerCase()}`}>
                          {facility.status}
                        </span>
                      </td>
                      <td>{facility.capacity}</td>
                      <td>
                        <Button 
                          variant="primary" 
                          size="sm"
                          disabled={facility.status !== 'Available'}
                        >
                          Book Now
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                <FaClock className="me-2" />
                Quick Booking
              </Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Select Facility</Form.Label>
                  <Form.Select>
                    <option>Choose Facility</option>
                    {facilities.map(facility => (
                      <option key={facility.id} disabled={facility.status !== 'Available'}>
                        {facility.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Start Time</Form.Label>
                      <Form.Control type="time" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>End Time</Form.Label>
                      <Form.Control type="time" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Purpose</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="success" className="w-100">Submit Booking</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FacilityBooking;
