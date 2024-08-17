import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sidebarRef = useRef(null);
    const navigate = useNavigate(); // For navigation

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const handleLogout = () => {
        // Perform any logout logic here (e.g., clear user session)
        console.log('Logging out...');
        
        // Redirect to the Sign In with Google page
        navigate('');
    };

    return (
        <div style={styles.container}>
            <div style={styles.hamburger} onClick={toggleMenu}>
                &#9776; {/* Unicode for the three-bar icon */}
            </div>
            {isMenuOpen && (
                <div style={styles.sidebar} ref={sidebarRef}>
                    <ul style={styles.menuList}>
                        <li style={styles.menuItem}><Link to="/create-exam" style={styles.link}>Create Exam</Link></li>
                        <li style={styles.menuItem}><Link to="/add-faculty" style={styles.link}>Add Faculty</Link></li>
                        <li style={styles.menuItem}><Link to="/update-faculty" style={styles.link}>Update Faculty</Link></li>
                        <li style={styles.menuItem}><Link to="/allotment" style={styles.link}>Allotment</Link></li>
                        <li style={styles.menuItem}><Link to="/exam" style={styles.link}>Exam</Link></li>
                    </ul>
                </div>
            )}
            <button onClick={handleLogout} style={styles.signOutButton}>
                Sign Out
            </button>
            <div style={styles.content}>
                <h1 style={styles.title}>Welcome to the Invigilation System</h1>
                <p style={styles.subtitle}>Education is the key to unlocking the world, a passport to freedom.</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        backgroundColor: '#f0f0f0',
        backgroundImage: 'url("https://www.bitsathy.ac.in/wp-content/uploads/slider-03-1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
    },
    hamburger: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        fontSize: '2rem',
        color: '#ffffff',
        cursor: 'pointer',
        zIndex: 2,
    },
    sidebar: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '200px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        zIndex: 1,
    },
    menuList: {
        listStyleType: 'none',
        padding: 0,
        marginTop: '50px', // Lower the menu items a bit more
    },
    menuItem: {
        marginBottom: '20px',
    },
    link: {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '1.2rem',
    },
    signOutButton: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: '#ff4d4d',
        border: 'none',
        color: '#ffffff',
        padding: '10px 20px',
        borderRadius: '5px',
        fontSize: '1rem',
        cursor: 'pointer',
        zIndex: 2,
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: '250px',
    },
    title: {
        fontSize: '3rem',
        color: '#ffffff',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        margin: '0 20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    subtitle: {
        fontSize: '1.5rem',
        color: '#ffffff',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        margin: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
};

export default HomePage;
