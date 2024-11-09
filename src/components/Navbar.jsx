import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReducer } from 'react';
import { userReducer, getInitialState } from '../reducer/userReducer';

const Navbar = () => {
    const [state, dispatch] = useReducer(userReducer, getInitialState());
    const navigate = useNavigate();
    const currentUser = state.currentUser;

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT_USER' });
        navigate('/');
    };

    // fallback to login page, if not logged in
    useEffect(()=>{
        if(!Object.keys(currentUser)?.length){
            navigate('/');
        }
    },[currentUser])

    return (
        <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
            <div>
                {currentUser ? (
                    <h3>Welcome, {currentUser.userName}</h3>
                ) : (
                    <h3>Welcome, Guest</h3>
                )}
            </div>
            {currentUser && (
                <button
                    onClick={handleLogout}
                    style={{
                        backgroundColor: '#f44336',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 20px',
                        cursor: 'pointer',
                        borderRadius: '5px',
                    }}
                >
                    Logout
                </button>
            )}
        </nav>
    );
};

export default Navbar;
