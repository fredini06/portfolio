import React from 'react';
import { Link } from 'react-scroll';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <a href="#">Accueil</a>
                    <hr />
                    <div className="col-lg-3 col-md-6 col-sm-6">
                            <p>Frédéric Iniesta</p>
                            <p>Copyright © 
                            {new Date().getFullYear()}&nbsp; Nice | Tous droits réservés</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a href="#" className="footer-nav">À propos de moi</a>
                                <br/>
                                <a href="#" className="footer-nav">Mes compétences</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a href="#" className="footer-nav">Print</a>
                                <br/>
                                <a href="#" className="footer-nav">Web</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a href="#" className="footer-nav">Editions</a>
                                <br/>
                                <a href="#" className="footer-nav">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;