import React, { useState } from 'react';
import { Card, Form, Button, Table, Badge } from 'react-bootstrap';
import { FaComments, FaUserSecret, FaFilter } from 'react-icons/fa';

const Complaints = () => {
  const [complaints] = useState([
    {
      id: 1,
      title: 'Cafeteria Food Quality',
      category: 'Facilities',
      date: '2025-02-20',
      status: 'Under Review',
      votes: 15
    },
    {
      id: 2,
      title: 'Library Hours Extension',
      category: 'Academic',
      date: '2025-02-18',
      status: 'Resolved',
      votes: 45
    },
    {
      id: 3,
      title: 'Wi-Fi Connectivity Issues',
      category: 'Infrastructure',
      date: '2025-02-15',
      status: 'In Progress',
      votes: 30
    }
  ]);

  return (
    <div className="complaints-container">
      <h2 className="text-center mb-4">
        <FaComments className="me-2" />
        Anonymous Complaint System
      </h2>

      <Card className="mb-4">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Card.Title>Recent Complaints</Card.Title>
            <div className="d-flex">
              <Form.Select className="me-2" style={{ width: 'auto' }}>
                <option>All Categories</option>
                <option>Academic</option>
                <option>Facilities</option>
                <option>Infrastructure</option>
                <option>Administrative</option>
              </Form.Select>
              <Button variant="outline-secondary">
                <FaFilter className="me-2" />
                Filter
              </Button>
            </div>
          </div>

          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Date</th>
                <th>Status</th>
                <th>Votes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map(complaint => (
                <tr key={complaint.id}>
                  <td>{complaint.title}</td>
                  <td>{complaint.category}</td>
                  <td>{complaint.date}</td>
                  <td>
                    <Badge bg={
                      complaint.status === 'Resolved' ? 'success' :
                      complaint.status === 'In Progress' ? 'primary' :
                      'warning'
                    }>
                      {complaint.status}
                    </Badge>
                  </td>
                  <td>{complaint.votes}</td>
                  <td>
                    <Button variant="outline-primary" size="sm" className="me-2">
                      Vote
                    </Button>
                    <Button variant="primary" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>
            <FaUserSecret className="me-2" />
            Submit Anonymous Complaint
          </Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select>
                <option>Select Category</option>
                <option>Academic</option>
                <option>Facilities</option>
                <option>Infrastructure</option>
                <option>Administrative</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter complaint title" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Describe your complaint in detail" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Evidence (Optional)</Form.Label>
              <Form.Control type="file" multiple />
              <Form.Text className="text-muted">
                Upload any supporting documents or images (max 5MB per file)
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check 
                type="checkbox"
                label="I understand that my complaint will be visible to all students and faculty"
              />
            </Form.Group>
            <Button variant="primary">Submit Complaint</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Complaints;
