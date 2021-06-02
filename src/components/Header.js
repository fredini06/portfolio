import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Développeur Web & Infographiste</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web design", "Développement Web", "Frontend", "Backend", "Infographie", "Mise en page", "Design"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth="true" to="contact" offset={-110} href="#" className="btn-header">Contactez-moi</Link>
            </div>
        </div>
    );
};

export default Header;