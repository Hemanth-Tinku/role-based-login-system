import React, { useReducer } from 'react';
import { userReducer, getInitialState } from '../reducer/userReducer';
import Navbar from '../components/Navbar';

const PrincipalDashboard = () => {
    const [state, dispatch] = useReducer(userReducer, getInitialState());

    const approveTeacher = (teacherUserName) => {
        dispatch({
            type: 'APPROVE_TEACHER',
            payload: teacherUserName,
        });
    };
    return <div>
        <Navbar />
        <h2>Principal Dashboard</h2>
        <h3>List of Teachers</h3>
        <ul>
            {state.teachers.length === 0 ? (
                <p>No teachers to approve</p>
            ) : (
                state.teachers.map((teacher) => (
                    <li key={teacher.userName}>
                        <p>{teacher.userName} - {teacher.approved ? 'Approved' : 'Pending'}</p>
                        {!teacher.approved && (
                            <button onClick={() => approveTeacher(teacher.userName)}>Approve</button>
                        )}
                    </li>
                ))
            )}
        </ul>
    </div>
}

export default PrincipalDashboard;