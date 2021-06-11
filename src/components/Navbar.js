import React from 'react';
import myPhoto from '../images/Photo-Fred.png';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="photo" src={myPhoto} alt="Ma photo" /></a>
                <p className="name">Frédéric Iniesta - <span style={{color:"rgb(144, 106, 248)"}} >Portfolio</span></p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}} />
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link smooth="true" to="about" offset={-110} className="nav-link" href="#">À propos de moi</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth="true" to="services" offset={-110} className="nav-link" href="#">Mes compétences</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth="true" to="editions" offset={-110} className="nav-link" href="#">Éditions</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth="true" to="print" offset={-110} className="nav-link" href="#">Print</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth="true" to="web" offset={-110} className="nav-link" href="#">Web</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth="true" to="contact" offset={-110} className="nav-link" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;