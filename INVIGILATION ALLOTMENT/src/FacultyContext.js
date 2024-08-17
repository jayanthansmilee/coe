import React, { createContext, useState, useContext } from 'react';

const FacultyContext = createContext();

export const FacultyProvider = ({ children }) => {
    const [faculties, setFaculties] = useState([]);

    const addFaculty = (faculty) => {
        setFaculties((prevFaculties) => [...prevFaculties, faculty]);
    };

    return (
        <FacultyContext.Provider value={{ faculties, addFaculty }}>
            {children}
        </FacultyContext.Provider>
    );
};

export const useFaculty = () => useContext(FacultyContext);
