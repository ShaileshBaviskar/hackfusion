import React, { useState } from 'react';
import { Card, Table, Button, Form, Row, Col, ProgressBar } from 'react-bootstrap';
import { FaMoneyBillWave, FaChartLine, FaFileInvoice } from 'react-icons/fa';

const BudgetTracking = () => {
  const [budgets] = useState([
    {
      id: 1,
      department: 'Computer Science',
      allocated: 100000,
      spent: 65000,
      remaining: 35000,
      lastUpdated: '2025-02-20'
    },
    {
      id: 2,
      department: 'Student Activities',
      allocated: 50000,
      spent: 30000,
      remaining: 20000,
      lastUpdated: '2025-02-19'
    },
    {
      id: 3,
      department: 'Library',
      allocated: 75000,
      spent: 45000,
      remaining: 30000,
      lastUpdated: '2025-02-18'
    }
  ]);

  return (
    <div className="budget-tracking-container">
      <h2 className="text-center mb-4">
        <FaMoneyBillWave className="me-2" />
        Budget & Sponsorship Tracking
      </h2>

      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                <FaChartLine className="me-2" />
                Department Budgets
              </Card.Title>
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>Department</th>
                    <th>Allocated</th>
                    <th>Spent</th>
                    <th>Remaining</th>
                    <th>Progress</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {budgets.map(budget => (
                    <tr key={budget.id}>
                      <td>{budget.department}</td>
                      <td>${budget.allocated.toLocaleString()}</td>
                      <td>${budget.spent.toLocaleString()}</td>
                      <td>${budget.remaining.toLocaleString()}</td>
                      <td>
                        <ProgressBar now={(budget.spent/budget.allocated)*100} 
                          variant={
                            (budget.spent/budget.allocated) > 0.8 ? 'danger' :
                            (budget.spent/budget.allocated) > 0.6 ? 'warning' :
                            'success'
                          }
                        />
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
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Quick Stats</Card.Title>
              <div className="stats-container">
                <div className="stat-item">
                  <h4>Total Budget</h4>
                  <p className="h3">$225,000</p>
                </div>
                <div className="stat-item">
                  <h4>Total Spent</h4>
                  <p className="h3">$140,000</p>
                </div>
                <div className="stat-item">
                  <h4>Total Remaining</h4>
                  <p className="h3">$85,000</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card>
        <Card.Body>
          <Card.Title>
            <FaFileInvoice className="me-2" />
            Submit Expense Report
          </Card.Title>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Department</Form.Label>
                  <Form.Select>
                    <option>Select Department</option>
                    {budgets.map(budget => (
                      <option key={budget.id}>{budget.department}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Expense Amount</Form.Label>
                  <Form.Control type="number" placeholder="Enter amount" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Expense Category</Form.Label>
              <Form.Select>
                <option>Select Category</option>
                <option>Equipment</option>
                <option>Supplies</option>
                <option>Events</option>
                <option>Maintenance</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload Receipt</Form.Label>
              <Form.Control type="file" />
              <Form.Text className="text-muted">
                Upload receipt or invoice (PDF, JPG, PNG format)
              </Form.Text>
            </Form.Group>
            <Button variant="primary">Submit Expense</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BudgetTracking;
