import React from 'react';
import { useReducer } from 'react';
import { userReducer, getInitialState } from '../reducer/userReducer';
import Navbar from '../components/Navbar';

const StudentDashboard = () => {
    const [state, dispatch] = useReducer(userReducer, getInitialState());
    const currentStudent = state.currentUser;

    return (
        <div>
            <Navbar />
            <h2>Student Dashboard</h2>
            <>
                <h3>Profile</h3>
                <p>Username: {currentStudent.userName}</p>

                <h3>Assigned Teacher</h3>
                {currentStudent.teacher ? (
                    <p>Teacher: {currentStudent.teacher}</p>
                ) : (
                    <p>No teacher assigned yet.</p>
                )}
            </>
        </div>
    );
};

export default StudentDashboard;
