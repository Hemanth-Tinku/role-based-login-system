import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from '../styles/login';

function Login({ state, dispatch }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [reEnteredPassword, setReEnteredPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!isLogin && password !== reEnteredPassword) {
            alert('Passwords do not match!');
            return;
        }
        if (isLogin) {
            const user =
                state.principal.userName === username && state.principal.password === password
                    ? state.principal
                    : state.teachers.find(
                        (teacher) => teacher.userName === username && teacher.password === password
                    ) ||
                    state.students.find(
                        (student) => student.userName === username && student.password === password
                    );
            if (user) {
                dispatch({ type: 'LOGIN_USER', payload: user })
                if (user?.role === 'principal') {
                    navigate('/principal-dashboard')
                }
                else if (user?.role === 'teacher') {
                    navigate('/teacher-dashboard')
                } else if (user?.role === 'student') {
                    navigate('/student-dashboard')
                }
            }
            else {
                alert('Invalid username or password!')
            }
        } else {
            dispatch({
                type: 'ADD_TEACHER',
                payload: {
                    userName: username,
                    password: password,
                    role: 'teacher'
                }
            })
            alert('Registered successfully! Principal needs to approve your profile')
            window.location.reload();
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>{isLogin ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleLogin} style={styles.form}>
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.input}
                />
                {
                    !isLogin && (
                        <input
                            type="password"
                            placeholder="Re-enter Password"
                            value={reEnteredPassword}
                            onChange={(e) => setReEnteredPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                    )
                }
                <button type="submit" style={styles.button}>{isLogin ? 'Login' : 'Register'}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)} style={styles.toggleButton}>
                {isLogin ? 'Register' : 'Back to Login'}
            </button>
        </div>
    );
}

export default Login;
