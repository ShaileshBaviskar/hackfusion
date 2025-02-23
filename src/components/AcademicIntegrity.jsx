import React, { useState } from 'react';
import { Card, Table, Badge, Form, Button } from 'react-bootstrap';
import { FaGraduationCap, FaExclamationTriangle, FaSearch } from 'react-icons/fa';

const AcademicIntegrity = () => {
  const [records] = useState([
    {
      id: 1,
      studentName: 'John Smith',
      course: 'Computer Science 101',
      date: '2025-02-15',
      violation: 'Plagiarism in Assignment',
      severity: 'High',
      status: 'Under Review'
      
    },
    {
      id: 2,
      studentName: 'Mary Johnson',
      course: 'Mathematics 202',
      date: '2025-02-10',
      violation: 'Unauthorized Collaboration',
      severity: 'Medium',
      status: 'Resolved'
    }
  ]);

  return (
    <div className="academic-integrity-container">
      <h2 className="text-center mb-4">
        <FaGraduationCap className="me-2" />
        Academic Integrity System
      </h2>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>
            <FaExclamationTriangle className="me-2" />
            Academic Integrity Violations
          </Card.Title>

          <div className="search-filter mb-3">
            <Form.Group>
              <div className="input-group">
                <span className="input-group-text">
                  <FaSearch />
                </span>
                <Form.Control type="text" placeholder="Search records..." />
              </div>
            </Form.Group>
          </div>

          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Course</th>
                <th>Date</th>
                <th>Violation</th>
                <th>Severity</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map(record => (
                <tr key={record.id}>
                  <td>{record.studentName}</td>
                  <td>{record.course}</td>
                  <td>{record.date}</td>
                  <td>{record.violation}</td>
                  <td>
                    <Badge bg={
                      record.severity === 'High' ? 'danger' :
                      record.severity === 'Medium' ? 'warning' :
                      'info'
                    }>
                      {record.severity}
                    </Badge>
                  </td>
                  <td>
                    <Badge bg={
                      record.status === 'Resolved' ? 'success' :
                      'warning'
                    }>
                      {record.status}
                    </Badge>
                  </td>
                  <td>
                    <Button variant="primary" size="sm">View Details</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Report Academic Integrity Violation</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Student Name</Form.Label>
              <Form.Control type="text" placeholder="Enter student name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <Form.Control type="text" placeholder="Enter course name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Type of Violation</Form.Label>
              <Form.Select>
                <option>Select Violation Type</option>
                <option>Plagiarism</option>
                <option>Cheating in Exam</option>
                <option>Unauthorized Collaboration</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe the violation in detail" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Evidence</Form.Label>
              <Form.Control type="file" multiple />
              <Form.Text className="text-muted">
                Upload any relevant documents, screenshots, or evidence
              </Form.Text>
            </Form.Group>
            <Button variant="primary">Submit Report</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AcademicIntegrity;
