import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [reEnteredPassword, setReEnteredPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = (e) => {
        e.preventDefault();
        if (!isLogin && password !== reEnteredPassword) {
            alert('Passwords do not match!');
            return;
        }
        
    };

    return (
        <div>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {
                    !isLogin && (
                        <input
                            type="password"
                            placeholder="Re-enter Password"
                            value={reEnteredPassword}
                            onChange={(e) => setReEnteredPassword(e.target.value)}
                            required
                        />
                    )
                }
                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)} style={{ border: 'none', background: 'none', color: 'blue', cursor: 'pointer', textDecoration: 'underline', marginTop: '10px' }}>
                {isLogin ? 'Register' : 'Back to Login'}
            </button>
        </div>
    );
}

export default Login;
