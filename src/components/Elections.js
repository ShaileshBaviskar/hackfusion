import React, { useState, useEffect } from 'react';
import { Container, Table, Form, Button, Alert } from 'react-bootstrap';
import { FaUsers } from 'react-icons/fa';
import '../styles/Elections.css';

const Elections = () => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: 'John Doe', position: 'President', votes: 45, hasVoted: false },
    { id: 2, name: 'Jane Smith', position: 'Vice President', votes: 40, hasVoted: false },
    { id: 3, name: 'Mike Johnson', position: 'Secretary', votes: 35, hasVoted: false }
  ]);

  const [hasVoted, setHasVoted] = useState(false);
  const [votedCandidate, setVotedCandidate] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [electionDate, setElectionDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'long' });
    const day = today.getDate();
    const year = today.getFullYear();
    setElectionDate(`${month} ${day}, ${year}`);
  }, []);

  const handleVote = (candidateId) => {
    if (!hasVoted) {
      setCandidates(candidates.map(candidate => 
        candidate.id === candidateId 
          ? { ...candidate, votes: candidate.votes + 1, hasVoted: true }
          : candidate
      ));
      setHasVoted(true);
      setVotedCandidate(candidates.find(c => c.id === candidateId).name);
      setShowAlert(true);
      
      // Hide alert after 5 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };

  const handleSubmitCandidacy = (e) => {
    e.preventDefault();
    alert('Your application has been submitted successfully!');
    e.target.reset();
  };

  return (
    <Container className="py-5">
      {showAlert && (
        <Alert 
          variant="success" 
          onClose={() => setShowAlert(false)} 
          dismissible
          className="mb-4 fade-in"
        >
          <Alert.Heading>Vote Cast Successfully!</Alert.Heading>
          <p>
            Thank you for voting! You have voted for <strong>{votedCandidate}</strong>.
            Your vote has been recorded and cannot be changed.
          </p>
        </Alert>
      )}

      <h2 className="text-center mb-4 d-flex align-items-center justify-content-center">
        <FaUsers className="me-2" />
        Student Council Elections
      </h2>

      <div className="bg-white shadow rounded p-4 mb-5">
        <h3 className="h4 mb-3">Current Election Status</h3>
        <p className="text-muted mb-4">
          Elections are currently open. Cast your vote before {electionDate}.
        </p>

        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>Candidate Name</th>
              <th>Position</th>
              <th>Current Votes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map(candidate => (
              <tr key={candidate.id}>
                <td>{candidate.name}</td>
                <td>{candidate.position}</td>
                <td className={candidate.hasVoted ? 'vote-count-change' : ''}>
                  {candidate.votes}
                </td>
                <td>
                  <Button
                    variant={candidate.hasVoted ? "success" : hasVoted ? "secondary" : "primary"}
                    disabled={hasVoted}
                    onClick={() => handleVote(candidate.id)}
                    className={`vote-button ${candidate.hasVoted ? 'voted' : ''}`}
                  >
                    {candidate.hasVoted ? 'Voted ✓' : 'Vote'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="bg-white shadow rounded p-4">
        <h3 className="h4 mb-4">Submit Your Candidacy</h3>
        <Form onSubmit={handleSubmitCandidacy}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Position</Form.Label>
            <Form.Select required>
              <option value="">Select Position</option>
              <option>President</option>
              <option>Vice President</option>
              <option>Secretary</option>
            </Form.Select>
          </Form.Group>

          <Button variant="success" type="submit">
            Submit Application
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Elections;
