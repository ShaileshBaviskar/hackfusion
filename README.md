# College Management System

A comprehensive web-based platform for managing college administrative processes transparently and efficiently.

## Features

- Student Election System
- Automated Health & Leave Notifications
- Campus Facility Booking System
- Transparent Application & Approval System
- Academic Integrity & Cheating Record System
- Anonymous Complaint System
- Transparent College Budget & Sponsorship Tracking
- Restricted Access for College Members Only

## Technologies Used

- React.js
- Firebase (Authentication, Firestore, Storage)
- Bootstrap
- React Router
- React Icons
- Formik & Yup (Form handling and validation)

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Firebase account and project

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd college-management-system
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase:
   - Create a new Firebase project
   - Enable Authentication, Firestore, and Storage
   - Copy your Firebase configuration from the Firebase Console
   - Update the configuration in `src/firebase/config.js`

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
college-management-system/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   └── Login.js
│   │   ├── Elections.js
│   │   ├── HealthSystem.js
│   │   ├── FacilityBooking.js
│   │   ├── Applications.js
│   │   ├── AcademicIntegrity.js
│   │   ├── Complaints.js
│   │   ├── BudgetTracking.js
│   │   ├── Navigation.js
│   │   └── Home.js
│   ├── firebase/
│   │   └── config.js
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   └── index.js
└── package.json
```

## Security

- Access restricted to college email domains only
- Firebase Authentication for secure user management
- Data validation and sanitization
- Protected routes for authenticated users

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
