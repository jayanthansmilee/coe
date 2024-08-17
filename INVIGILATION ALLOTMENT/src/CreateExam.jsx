import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateExam = () => {
    const navigate = useNavigate();
    const [examType, setExamType] = useState('');
    const [examName, setExamName] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [examDate, setExamDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [allocatedRooms, setAllocatedRooms] = useState('');
    const [numStudents, setNumStudents] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Redirect to the ExamPage and pass the form data
        navigate('/exam', {
            state: {
                examType,
                examName,
                courseCode,
                examDate,
                startTime,
                endTime,
                allocatedRooms,
                numStudents
            }
        });
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Create Exam</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                {/* Form fields */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>Exam Type</label>
                    <select
                        value={examType}
                        onChange={(e) => setExamType(e.target.value)}
                        style={styles.input}
                        required
                    >
                        <option value="">Select Exam Type</option>
                        <option value="PT">PT</option>
                        <option value="Semester">Semester</option>
                    </select>
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Exam Name</label>
                    <select
                        value={examName}
                        onChange={(e) => setExamName(e.target.value)}
                        style={styles.input}
                        required
                    >
                        <option value="">Select Exam Name</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Maths">Maths</option>
                        <option value="Digital Logic Circuit">Digital Logic Circuit</option>
                        <option value="Algorithm and Data Structure">Algorithm and Data Structure</option>
                        <option value="Fluid and Thermodynamics">Fluid and Thermodynamics</option>
                        <option value="Electrical Circuit Design">Electrical Circuit Design</option>
                    </select>
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Course Code</label>
                    <select
                        value={courseCode}
                        onChange={(e) => setCourseCode(e.target.value)}
                        style={styles.input}
                        required
                    >
                        <option value="">Select Course Code</option>
                        <option value="22MA202">22MA202</option>
                        <option value="22CH001">22CH001</option>
                        <option value="22DC006">22DC006</option>
                        <option value="22FC008">22FC008</option>
                    </select>
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Exam Date</label>
                    <input
                        type="date"
                        value={examDate}
                        onChange={(e) => setExamDate(e.target.value)}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Start Time</label>
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>End Time</label>
                    <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>No of Rooms Required</label>
                    <input
                        type="text"
                        value={allocatedRooms}
                        onChange={(e) => setAllocatedRooms(e.target.value)}
                        style={styles.input}
                        placeholder="Enter The no of exam halls required"
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Number of Students</label>
                    <input
                        type="number"
                        value={numStudents}
                        onChange={(e) => setNumStudents(e.target.value)}
                        style={styles.input}
                        placeholder="Enter Number of Students"
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Create Exam</button>
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
        maxHeight: '80vh', // Reduce the height of the box
        overflowY: 'auto',  // Add scroll if the content overflows
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

export default CreateExam;
