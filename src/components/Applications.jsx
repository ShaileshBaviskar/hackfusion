import React, { useState } from 'react';
import { Card, Button, Form, Table, Badge } from 'react-bootstrap';
import { FaFileAlt, FaSearch, FaPlus } from 'react-icons/fa';

const Applications = () => {
  const [applications] = useState([
    { 
      id: 1, 
      type: 'Event Organization', 
      title: 'Annual Tech Fest',
      status: 'Pending',
      submittedDate: '2025-02-15',
      priority: 'High'
    },
    { 
      id: 2, 
      type: 'Budget Approval', 
      title: 'Department Workshop',
      status: 'Approved',
      submittedDate: '2025-02-10',
      priority: 'Medium'
    },
    { 
      id: 3, 
      type: 'Sponsorship', 
      title: 'Sports Tournament',
      status: 'Under Review',
      submittedDate: '2025-02-18',
      priority: 'Low'
    }
  ]);

  return (
    <div className="applications-container">
      <h2 className="text-center mb-4">
        <FaFileAlt className="me-2" />
        Application & Approval System
      </h2>

      <Card className="mb-4">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Card.Title>My Applications</Card.Title>
            <Button variant="success">
              <FaPlus className="me-2" />
              New Application
            </Button>
          </div>

          <div className="search-filter mb-3">
            <Form.Group>
              <div className="input-group">
                <span className="input-group-text">
                  <FaSearch />
                </span>
                <Form.Control type="text" placeholder="Search applications..." />
              </div>
            </Form.Group>
          </div>

          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Type</th>
                <th>Submitted Date</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => (
                <tr key={app.id}>
                  <td>{app.title}</td>
                  <td>{app.type}</td>
                  <td>{app.submittedDate}</td>
                  <td>
                    <Badge bg={
                      app.status === 'Approved' ? 'success' :
                      app.status === 'Pending' ? 'warning' :
                      'info'
                    }>
                      {app.status}
                    </Badge>
                  </td>
                  <td>
                    <Badge bg={
                      app.priority === 'High' ? 'danger' :
                      app.priority === 'Medium' ? 'warning' :
                      'info'
                    }>
                      {app.priority}
                    </Badge>
                  </td>
                  <td>
                    <Button variant="primary" size="sm" className="me-2">View</Button>
                    <Button variant="secondary" size="sm">Track</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Submit New Application</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Application Type</Form.Label>
              <Form.Select>
                <option>Select Type</option>
                <option>Event Organization</option>
                <option>Budget Approval</option>
                <option>Sponsorship</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter application title" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Priority</Form.Label>
              <Form.Select>
                <option>Select Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary">Submit Application</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Applications;
