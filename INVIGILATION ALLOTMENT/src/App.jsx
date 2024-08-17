import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import CreateExam from './CreateExam';
import ExamPage from './ExamPage';
import AddFaculty from './AddFaculty';
import Allotment from './Allotment';
import SignUpPage from './SignUpPage'; // Import the SignUpPage component
import signout from './signout.jsx';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/create-exam" element={<CreateExam />} />
                <Route path="/exam" element={<ExamPage />} />
                <Route path="/add-faculty" element={<AddFaculty />} />
                <Route path="/allotment" element={<Allotment />} />
                <Route path="/signup" element={<SignUpPage />} /> {/* Add route for SignUpPage */}
                <Route path="/signout" element={<signout />} />
          
            </Routes>
        </Router>
    );
};

export default App;
