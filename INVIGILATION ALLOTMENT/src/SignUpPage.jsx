import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            // Fetch the existing users
            const response = await fetch('/users.json');
            const users = await response.json();

            // Check if the username already exists
            const userExists = users.some(user => user.username === username);
            if (userExists) {
                setError('Username already exists');
                return;
            }

            // Add the new user to the users array
            const updatedUsers = [...users, { username, password }];

            // Store updated users array in local storage (mocking writing to JSON file)
            localStorage.setItem('users', JSON.stringify(updatedUsers));

            // Redirect to the homepage after successful sign-up
            navigate('/home');
        } catch (error) {
            console.error('Error fetching users:', error);
            setError('Failed to sign up');
        }
    };

    return (
        <div style={styles.background}>
            <div style={styles.overlay}>
                <div style={styles.container}>
                    <h2 style={styles.title}>Sign Up</h2>
                    <form onSubmit={handleSignUp} style={styles.form}>
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
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            style={styles.input}
                            required
                        />
                        {error && <p style={styles.error}>{error}</p>}
                        <button type="submit" style={styles.button}>Sign Up</button>
                    </form>
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
    error: {
        color: 'red',
        textAlign: 'center',
        marginTop: '10px',
    },
};

export default SignUpPage;
