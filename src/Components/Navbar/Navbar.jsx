import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa'; // Import search icon
import './Navbar.css'; 

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Axtra Digital Agency</a>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/team">Team</a></li>
                <li><a href="/blog"> Create Crud</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="navbar-search">
                <FaSearch className="search-icon" onClick={toggleSearch} />
                <div    className={`search-input ${isSearchOpen ? 'open' : ''}`}>
                <input
                    type="text"
                 
                    placeholder="Search..."
                />
                </div>
            
            </div>
        </nav>
    );
}

export default Navbar;
