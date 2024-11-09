import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { styles } from '../styles/studentDashboard';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = ({ state, dispatch }) => {
    const navigate = useNavigate();
    const currentStudent = state.currentUser;

    // fallback to login page, if not student
    useEffect(() => {
        if (currentStudent?.role !== 'student') {
            if (currentStudent?.role === 'principal') {
                navigate('/principal-dashboard');
            }
            else if (currentStudent?.role === 'teacher') {
                navigate('/teacher-dashboard');
            }
        }
    }, [currentStudent])

    return (
        <div style={styles.container}>
            <Navbar state={state} dispatch={dispatch} />
            <div style={styles.content}>
                <h2 style={styles.heading}>Student Dashboard</h2>

                <div style={styles.section}>
                    <p style={styles.text}>Username: {currentStudent.userName}</p>
                </div>

                <div style={styles.section}>
                    <h3 style={styles.subheading}>Assigned Teacher</h3>
                    {currentStudent.teacher ? (
                        <p style={styles.text}>Teacher: {currentStudent.teacher}</p>
                    ) : (
                        <p style={styles.noTeacher}>No teacher assigned yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
