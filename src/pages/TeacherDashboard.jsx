import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { styles } from '../styles/teacherDashboard';
import { useNavigate } from 'react-router-dom';

function TeacherDashboard({ state, dispatch }) {
    const navigate = useNavigate();
    const currentTeacher = state.currentUser;

    const [studentUsername, setStudentUsername] = useState('');
    const [studentPassword, setStudentPassword] = useState(123456);

    const handleAddStudent = (e) => {
        e.preventDefault();
        if (!studentUsername || !studentPassword) {
            alert('Please provide both username and password for the student');
            return;
        }

        dispatch({
            type: 'ADD_STUDENT',
            payload: {
                userName: studentUsername,
                password: studentPassword,
                role: 'student',
                teacher: currentTeacher.userName,
            },
        });

        setStudentUsername('');
        setStudentPassword('');
    };

    // fallback to login page, if not teacher
    useEffect(() => {
        if (currentTeacher?.role !== 'teacher') {
            if (currentTeacher?.role === 'principal') {
                navigate('/principal-dashboard');
            }
            else if (currentTeacher?.role === 'student') {
                navigate('/student-dashboard');
            }
        }
    }, [currentTeacher])

    return (
        <div style={styles.container}>
            <Navbar state={state} dispatch={dispatch} />
            <div style={styles.content}>
                <h2 style={styles.heading}>Teacher Dashboard</h2>
                <p style={styles.text}>Username: {currentTeacher.userName}</p>
                <p style={styles.text}>
                    Status: {currentTeacher?.approved ? 'Approved' : 'Pending'}
                </p>

                {currentTeacher?.approved ? (
                    <>
                        <h3 style={styles.subheading}>Students</h3>
                        <ul style={styles.studentList}>
                            {state.students.length === 0 ? (
                                <p style={styles.noStudents}>No students assigned</p>
                            ) : (
                                state.students
                                    .filter((student) => student.teacher === currentTeacher.userName)
                                    .map((student) => (
                                        <li key={student.userName} style={styles.studentItem}>
                                            <p style={styles.studentInfo}>{student.userName}</p>
                                        </li>
                                    ))
                            )}
                        </ul>

                        <h3 style={styles.subheading}>Add New Student</h3>
                        <form onSubmit={handleAddStudent} style={styles.form}>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Student Username:</label>
                                <input
                                    type="text"
                                    value={studentUsername}
                                    onChange={(e) => setStudentUsername(e.target.value)}
                                    required
                                    style={styles.input}
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Student Password:</label>
                                <input
                                    type="password"
                                    value={studentPassword}
                                    onChange={(e) => setStudentPassword(e.target.value)}
                                    required
                                    style={styles.input}
                                />
                            </div>
                            <button type="submit" style={styles.submitButton}>
                                Add Student
                            </button>
                        </form>
                    </>
                ) : (
                    <p style={styles.noApprovalText}>Your Profile should be approved by principal</p>
                )}
            </div>
        </div>
    );
}

export default TeacherDashboard;
