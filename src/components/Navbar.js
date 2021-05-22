import React from 'react';
import myPhoto from '../images/Photo-Fred.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="photo" src={myPhoto} alt="Ma photo" /></a>
                <p className="name">Frédéric Iniesta - <span style={{color:"rgb(144, 106, 248)"}} >Portfolio</span></p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}} />
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">À propos de moi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mes compétences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Print</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Web</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Éditions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;