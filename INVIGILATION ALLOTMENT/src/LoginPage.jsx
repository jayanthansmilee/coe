// src/LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from './firebase'; // Import firebase auth and provider
import { signInWithPopup } from 'firebase/auth'; // Import signInWithPopup

const LoginPage = () => {
    // Set initial state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if the credentials match the default ones
        if (username === 'admin' && password === 'admin@123') {
            console.log('Login successful');
            navigate('/home');
        } else {
            setError('Invalid username or password');
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log('Google sign-in successful:', user);
            navigate('/home');
        } catch (error) {
            console.error('Error during Google sign-in:', error.message);
            setError('Failed to sign in with Google');
        }
    };

    return (
        <div style={styles.background}>
            <div style={styles.overlay}>
                <div style={styles.container}>
                    <h2 style={styles.title}>Login</h2>
                    <form onSubmit={handleLogin} style={styles.form}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={styles.input}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                            required
                        />
                        <button type="submit" style={styles.button}>Login</button>
                        {error && <p style={styles.error}>{error}</p>}
                    </form>
                    <button onClick={handleGoogleSignIn} style={styles.googleButton}>
                        Sign in with Google
                    </button>
                    <p style={styles.signupText}>
                        Don't have an account? <a href="/signup" style={styles.signupLink}>Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    background: {
        backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bit-aerial-view.jpg/1024px-Bit-aerial-view.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '',
        padding: '40px',
        borderRadius: '50px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '90%',
        maxWidth: '400px',
    },
    title: {
        marginBottom: '20px',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        padding: '10px',
        marginBottom: '10px',
        fontSize: '16px',
        borderRadius: '45px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '45px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
        marginBottom: '10px',
    },
    googleButton: {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '45px',
        border: 'none',
        backgroundColor: '#DB4437',
        color: '#fff',
        cursor: 'pointer',
        marginBottom: '10px',
        width: '100%',
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginTop: '10px',
    },
    signupText: {
        marginTop: '20px',
        textAlign: 'center',
        color: 'white',
    },
    signupLink: {
        color: 'white',
        textDecoration: 'none',
    },
};

export default LoginPage;
