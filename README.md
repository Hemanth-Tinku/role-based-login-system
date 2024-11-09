# Role Based Login System

This project is a simple, role-based user authentication system using React. It supports login and registration for Principal, Teacher, and Student roles, with each role having access to specific dashboard functionalities. The app is designed to demonstrate state management, conditional rendering, and basic form validation in React.

- **[Live Demo](https://role-based-login-system-hemanth-kumars-projects-54558d95.vercel.app/)**

## Features

- **Role-Based Access Control**: Each user role (Principal, Teacher, Student) has access to a unique dashboard.
- **Teacher Registration Approval**: Teachers must register, and the Principal must approve their accounts.
- **Global State Management**: State is managed with `useReducer` and `useContext`, handling roles and actions across the app.
- **Conditional Navigation**: Redirects users to different dashboards based on their role.
- **Form Validation**: Includes basic validation, such as checking for password match during registration.

## How to Use

### 1. Principal Dashboard

- **Login with Principal Credentials**: Use the credentials below to log in as the Principal and access the dashboard:
  - **Username**: `principal`
  - **Password**: `1234`
- **Approve Teachers**: After logging in, the Principal can view a list of teacher registration requests and approve them.
  
### 2. Teacher Registration and Dashboard

- **Register as a Teacher**: Click the "Register" link on the login page and fill in the form with a username and password to register as a teacher. Upon registration:
  - An alert will confirm the request.
  - The teacher profile will be in "Pending" status until approved by the Principal.
- **Access Teacher Dashboard**: Once approved, teachers can log in and view their assigned students.

### 3. Student Dashboard

- **Login as a Student**: Students can log in directly with pre-existing credentials (or credentials set by a teacher).
- **View Assigned Teacher**: On the Student Dashboard, students can view their assigned teacher's name.

## Component Overview

- **Login.js**  
  Handles the login and registration forms, enabling users to log in based on their role or register as a teacher.

- **PrincipalDashboard.js**  
  Displays a list of teacher registration requests, allowing the principal to approve or deny teacher accounts.

- **TeacherDashboard.js**  
  Shows students assigned to the logged-in teacher, allowing the teacher to add new students and view their profiles.

- **StudentDashboard.js**  
  Displays profile details for the logged-in student, including information about the assigned teacher.



