import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { styles } from '../styles/principalDashboard';
import { useNavigate } from 'react-router-dom';

const PrincipalDashboard = ({ state, dispatch }) => {
    const navigate = useNavigate();
    const approveTeacher = (teacherUserName) => {
        dispatch({
            type: 'APPROVE_TEACHER',
            payload: teacherUserName,
        });
    };

    // fallback to login page, if not principal
    useEffect(() => {
        const currentUser = state.currentUser;
        if (currentUser?.role !== 'principal') {
            if (currentUser?.role === 'student') {
                navigate('/student-dashboard');
            }
            else if (currentUser?.role === 'teacher') {
                navigate('/teacher-dashboard');
            }
        }
    }, [state.currentUser])

    return (
        <div style={styles.container}>
            <Navbar state={state} dispatch={dispatch} />
            <div style={styles.content}>
                <h2 style={styles.heading}>Principal Dashboard</h2>
                <h3 style={styles.subheading}>List of Teachers</h3>
                <ul style={styles.teacherList}>
                    {state.teachers.length === 0 ? (
                        <p style={styles.noTeachers}>No teachers to approve</p>
                    ) : (
                        state.teachers.map((teacher) => (
                            <li key={teacher.userName} style={styles.teacherItem}>
                                <p style={styles.teacherInfo}>
                                    {teacher.userName} -{' '}
                                    <span style={teacher.approved ? styles.approved : styles.pending}>
                                        {teacher.approved ? 'Approved' : 'Pending'}
                                    </span>
                                </p>
                                {!teacher.approved && (
                                    <button
                                        style={styles.approveButton}
                                        onClick={() => approveTeacher(teacher.userName)}
                                    >
                                        Approve
                                    </button>
                                )}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};



export default PrincipalDashboard;
