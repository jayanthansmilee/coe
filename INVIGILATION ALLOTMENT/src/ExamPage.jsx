import React from 'react';
import { useLocation } from 'react-router-dom';

const ExamPage = () => {
    const location = useLocation();
    const { state } = location;

    if (!state) {
        return <p>No exam data found.</p>;
    }

    const {
        examType,
        examName,
        courseCode,
        examDate,
        startTime,
        endTime,
        allocatedRooms,
        numStudents
    } = state;

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Exam Details</h1>
            <div style={styles.details}>
                <p><strong>Exam Type:</strong> {examType}</p>
                <p><strong>Exam Name:</strong> {examName}</p>
                <p><strong>Course Code:</strong> {courseCode}</p>
                <p><strong>Exam Date:</strong> {examDate}</p>
                <p><strong>Start Time:</strong> {startTime}</p>
                <p><strong>End Time:</strong> {endTime}</p>
                <p><strong>Allocated Rooms:</strong> {allocatedRooms}</p>
                <p><strong>Number of Students:</strong> {numStudents}</p>
            </div>
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
        backgroundImage: 'url("")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        boxSizing: 'border-box',
        backgroundColor:'black'
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '20px',
        textAlign: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    },
    details: {
        width: '80%',
        maxWidth: '800px',
        backgroundColor: 'grey',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    },
};

export default ExamPage;
