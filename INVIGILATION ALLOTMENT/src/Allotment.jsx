import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import data from './facultyData.json'; // Adjust the path if necessary
import venuesData from './venues.json'; // Venues data
import relivementData from './relivementData.json'; // Relivement data

const Allotment = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [relievers, setRelievers] = useState([]);

  useEffect(() => {
    // Load initial faculty data from local storage or use default data
    const storedData = JSON.parse(localStorage.getItem('facultyData'));
    if (storedData) {
      setFacultyData(storedData);
    } else {
      setFacultyData(data);
    }
    // Load relievers data
    setRelievers(relivementData.relievers); // Adjust if necessary
  }, []);

  // Function to shuffle the venues and relievers
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleAllotClick = () => {
    const shuffledVenues = shuffleArray([...venuesData.venues]); // Shuffle venues
    const shuffledRelievers = shuffleArray([...relievers]); // Shuffle relievers
    const dates = ['13/04/24', '14/04/24', '15/04/24']; // Default dates

    const updatedFacultyData = facultyData.map((faculty, index) => {
      const isLevel1Or2 = faculty.Designation.includes('Assistant Professor Level I') || faculty.Designation.includes('Assistant Professor Level II');
      const isLevel3 = faculty.Designation.includes('Assistant Professor Level III');
      const isProfessor = faculty.Designation.includes('Professor');

      if (isLevel1Or2) {
        // Allocate 3 different venues on 3 different dates
        return {
          ...faculty,
          AllotedVenue: [shuffledVenues[index % shuffledVenues.length], shuffledVenues[(index + 1) % shuffledVenues.length], shuffledVenues[(index + 2) % shuffledVenues.length]],
          AllotedDate: [dates[0], dates[1], dates[2]], // Fixed dates
          AllotedTime: ["09:00 AM - 12:00 PM", "01:00 PM - 04:00 PM", "09:00 AM - 12:00 PM"], // Example times
          Releivement: [shuffledRelievers[index % shuffledRelievers.length], shuffledRelievers[(index + 1) % shuffledRelievers.length], shuffledRelievers[(index + 2) % shuffledRelievers.length]], // Different reliever for each venue
        };
      } else if (isLevel3) {
        // Allocate 2 different venues on 2 different dates
        return {
          ...faculty,
          AllotedVenue: [shuffledVenues[index % shuffledVenues.length], shuffledVenues[(index + 1) % shuffledVenues.length]],
          AllotedDate: [dates[0], dates[1]], // Fixed dates
          AllotedTime: ["09:00 AM - 12:00 PM", "01:00 PM - 04:00 PM"], // Example times
          Releivement: [shuffledRelievers[index % shuffledRelievers.length], shuffledRelievers[(index + 1) % shuffledRelievers.length]], // Different reliever for each venue
        };
      } else if (isProfessor) {
        // Allocate 1 venue
        return {
          ...faculty,
          AllotedVenue: shuffledVenues[index % shuffledVenues.length],
          AllotedDate: dates[0], // Fixed date
          AllotedTime: "09:00 AM - 12:00 PM", // Example time
          Releivement: shuffledRelievers[index % shuffledRelievers.length], // Assign reliever
        };
      } else {
        // Allocate at least 1 venue for other Assistant Professors
        return {
          ...faculty,
          AllotedVenue: shuffledVenues[index % shuffledVenues.length],
          AllotedDate: dates[0], // Fixed date
          AllotedTime: "09:00 AM - 12:00 PM", // Example time
          Releivement: shuffledRelievers[index % shuffledRelievers.length], // Assign reliever
        };
      }
    });

    setFacultyData(updatedFacultyData);
    localStorage.setItem('facultyData', JSON.stringify(updatedFacultyData)); // Save data to local storage
    alert('Venues and relievers have been allotted!');
  };

  // Function to clear the allocations
  const handleClearClick = () => {
    setFacultyData(data); // Reset to initial data
    localStorage.removeItem('facultyData'); // Clear local storage
    alert('Allocations have been cleared!');
  };

  // Function to export the table to PDF
  const exportToPDF = () => {
    const input = document.getElementById('faculty-table');

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('faculty_allotment.pdf');
    });
  };

  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#ffffff', // Adjust text color for contrast against background
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
      backgroundColor: 'black', // Semi-transparent background for readability
    },
    th: {
      border: '1px solid black',
      padding: '8px',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    td: {
      border: '1px solid black',
      padding: '8px',
      textAlign: 'center',
    },
    trEven: {
      backgroundColor: '',
    },
    trHover: {
      backgroundColor: 'lightblue',
      color: 'white',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1rem',
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      position: 'absolute',
      top: '20px',
      right: '20px',
    },
    exportButton: {
      padding: '10px 20px',
      fontSize: '1rem',
      backgroundColor: '#28a745',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      position: 'absolute',
      top: '20px',
      right: '120px',
    },
    clearButton: {
      padding: '10px 20px',
      fontSize: '1rem',
      backgroundColor: '#dc3545',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      position: 'absolute',
      top: '20px',
      right: '290px',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Faculty Allotment</h1>
      <button style={styles.button} onClick={handleAllotClick}>Allot</button>
      <button style={styles.exportButton} onClick={exportToPDF}>Export as PDF</button>
      <button style={styles.clearButton} onClick={handleClearClick}>Clear</button>
      <div id="faculty-table">
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Faculty ID</th>
              <th style={styles.th}>Designation</th>
              <th style={styles.th}>Alloted Venue</th>
              <th style={styles.th}>Alloted Date</th>
              <th style={styles.th}>Alloted Time</th>
              <th style={styles.th}>Releivement</th>
            </tr>
          </thead>
          <tbody>
            {facultyData.map((faculty, index) => (
              <tr
                key={faculty.ID}
                style={index % 2 === 0 ? styles.trEven : {}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.trHover.backgroundColor}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
              >
                <td style={styles.td}>{faculty.ID}</td>
                <td style={styles.td}>{faculty.Name}</td>
                <td style={styles.td}>{faculty.FacultyID}</td>
                <td style={styles.td}>{faculty.Designation}</td>
                <td style={styles.td}>{Array.isArray(faculty.AllotedVenue) ? faculty.AllotedVenue.join(", ") : faculty.AllotedVenue}</td>
                <td style={styles.td}>{Array.isArray(faculty.AllotedDate) ? faculty.AllotedDate.join(", ") : faculty.AllotedDate}</td>
                <td style={styles.td}>{Array.isArray(faculty.AllotedTime) ? faculty.AllotedTime.join(", ") : faculty.AllotedTime}</td>
                <td style={styles.td}>{Array.isArray(faculty.Releivement) ? faculty.Releivement.join(", ") : faculty.Releivement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allotment;
