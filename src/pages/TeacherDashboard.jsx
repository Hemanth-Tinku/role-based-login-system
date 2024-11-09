import React, { useState } from 'react';
import { useReducer } from 'react';
import { userReducer, getInitialState } from '../reducer/userReducer';
import Navbar from '../components/Navbar';

function TeacherDashboard() {
    const [state, dispatch] = useReducer(userReducer, getInitialState());
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

    return (
        <div>
            <Navbar />
            <h2>Teacher Dashboard</h2>
            <h3>Profile</h3>
            <p>Username: {currentTeacher.userName}</p>
            <p>Status: {currentTeacher?.approved ? 'Approved' : 'Pending'}</p>

            {currentTeacher?.approved ? (
                <>
                    <h3>Students</h3>
                    <ul>
                        {state.students.length === 0 ? (
                            <p>No students assigned</p>
                        ) : (
                            state.students
                                .filter((student) => student.teacher === currentTeacher.userName)
                                .map((student) => (
                                    <li key={student.userName}>
                                        <p>{student.userName}</p>
                                    </li>
                                ))
                        )}
                    </ul>

                    <h3>Add New Student</h3>
                    <form onSubmit={handleAddStudent}>
                        <div>
                            <label>Student Username:</label>
                            <input
                                type="text"
                                value={studentUsername}
                                onChange={(e) => setStudentUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Student Password:</label>
                            <input
                                type="password"
                                value={studentPassword}
                                onChange={(e) => setStudentPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Add Student</button>
                    </form>
                </>
            ) : (
                <p>Your Profile should be approved by principal</p>
            )}

        </div>
    );
}

export default TeacherDashboard;
