import React from 'react';
import { faPen, faDesktop, faFileCode, faFileImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">Mes Compétences</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                            <h3>Développement Web</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, adipisci!</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faPen} size="2x" /></div>
                            <h3>Web Design</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, adipisci!</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                            <h3>Frontend / Backend</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, adipisci!</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileImage} size="2x" /></div>
                            <h3>Infographie</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, adipisci!</p>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    );
};

export default Services;