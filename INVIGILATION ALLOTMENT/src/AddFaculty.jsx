import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddFaculty = () => {
    const navigate = useNavigate();
    const [facultyName, setFacultyName] = useState('');
    const [facultyId, setFacultyId] = useState('');
    const [designation, setDesignation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Redirect to a confirmation or home page, passing the faculty data
        navigate('/home', {
            state: {
                facultyName,
                facultyId,
                designation
            }
        });
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Add Faculty</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Faculty Name</label>
                    <input
                        type="text"
                        value={facultyName}
                        onChange={(e) => setFacultyName(e.target.value)}
                        style={styles.input}
                        placeholder="Enter Faculty Name"
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Faculty ID</label>
                    <input
                        type="text"
                        value={facultyId}
                        onChange={(e) => setFacultyId(e.target.value)}
                        style={styles.input}
                        placeholder="Enter Faculty ID"
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Designation</label>
                    <input
                        type="text"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        style={styles.input}
                        placeholder="Enter Designation"
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Add Faculty</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url("https://images.unsplash.com/photo-1532012197267-da84d127e765?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        boxSizing: 'border-box',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '20px',
        textAlign: 'center',
        color: '#ffffff',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '600px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        maxHeight: '80vh',
        overflowY: 'auto',
    },
    formGroup: {
        marginBottom: '20px',
    },
    label: {
        marginBottom: '8px',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        padding: '12px',
        fontSize: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box',
    },
    button: {
        padding: '12px',
        fontSize: '1.2rem',
        backgroundColor: '#007bff',
        color: '#ffffff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '20px',
    },
};

export default AddFaculty;
