import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaClipboardList,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaVoteYea,
  FaBullhorn,
  FaCog
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Student Portal",
      icon: <FaUserGraduate size={30} />,
      description: "Access academic records, attendance, and course materials",
      link: "/student-portal"
    },
    {
      title: "Faculty Section",
      icon: <FaChalkboardTeacher size={30} />,
      description: "Manage classes, upload materials, and track student progress",
      link: "/faculty"
    },
    {
      title: "Course Management",
      icon: <FaBook size={30} />,
      description: "Browse courses, access study materials, and view schedules",
      link: "/courses"
    },
    {
      title: "Elections",
      icon: <FaVoteYea size={30} />,
      description: "Participate in student body elections and view results",
      link: "/elections"
    },
    {
      title: "Events Calendar",
      icon: <FaCalendarAlt size={30} />,
      description: "Stay updated with college events and important dates",
      link: "/calendar"
    },
    {
      title: "Announcements",
      icon: <FaBullhorn size={30} />,
      description: "View latest news and announcements from the college",
      link: "/announcements"
    },
    {
      title: "Attendance",
      icon: <FaClipboardList size={30} />,
      description: "Track and manage attendance records",
      link: "/attendance"
    },
    {
      title: "Settings",
      icon: <FaCog size={30} />,
      description: "Manage your account settings and preferences",
      link: "/settings"
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="hero-title">Welcome to St. Engineering College</h1>
              <p className="hero-subtitle">
                Your comprehensive portal for academic excellence and campus management
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img 
                src="https://s3-alpha-sig.figma.com/img/fc3c/5e08/cb583e095f8ec641750e3b9b78d9c8b0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jgjawRRISC1Hj1EbudYUg40lZgWq5jsVE4issWBFvNlggtXJCwlbFJ2c76YWz0ygPgAgpRefy7UTiTVIYLa5T8~r-xT~34FjpU2gmtvr1nEFMA7ug1oKeas6RjLAFs0Ks~FtWh~55CDrP86HO-A5Mko13wBLuc~IcJJWwz3ZE~DZ8mEm~AstGZ7vFjqtcPAPZv8OFUQJ5sudyDBx4INAWLlCKS5-wa6Cnd7Bcg7O5Gt2XCEE4osTK0eDxzwH6YUBa1Nnndq71AmzJ492pL8wwX~k0IRNtBhtNJ1hXYy97UdYH3dKAh7PdCb5YR3zLPrCVNfVPEJbOUrrtBTI6e3a9A_"
                alt="College Logo"
                className="hero-image"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Grid */}
      <Container className="features-section">
        <Row>
          {features.map((feature, index) => (
            <Col key={index} lg={3} md={4} sm={6} className="mb-4">
              <Card 
                className="feature-card h-100" 
                onClick={() => navigate(feature.link)}
              >
                <Card.Body>
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <Card.Title className="feature-title">
                    {feature.title}
                  </Card.Title>
                  <Card.Text className="feature-description">
                    {feature.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Quick Stats Section */}
      <div className="stats-section">
        <Container>
          <Row>
            <Col md={3} sm={6} className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Students</div>
            </Col>
            <Col md={3} sm={6} className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Faculty Members</div>
            </Col>
            <Col md={3} sm={6} className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Courses</div>
            </Col>
            <Col md={3} sm={6} className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Placement Rate</div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
