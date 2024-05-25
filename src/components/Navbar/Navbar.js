import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import ListingPage from '../../pages/ListingPage';
import DetailsPage from '../../pages/DetailsPage'
import './Navbar.css';

const Navbar = () => (
    <Router>
    <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-brand">Wall Street Journal</div>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Lists</Link>
            </div>
        </div>
    </nav>
    <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/details/:author" element={<DetailsPage/>}/>
    </Routes>
    </Router>
);

export default Navbar;
