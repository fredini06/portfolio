import React from 'react';
import web01 from '../images/Web-01.jpg';
import web01Xl from '../images/Web-01-XL.jpg';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

const Web = () => {

    //img1
    const openPopupboxImg1 = () => {
        const content = (
            <div className="web-imgXL-wrap">
                <img className="web-imgXL" src={web01Xl} alt="Site web 1" />
                <b className="link">Lien : </b><a className="hyper-link" onClick={() => window.open("https://fredini06.github.io/Anim-responsive/")}>https://fredini06.github.io/Anim-responsive/</a>
            </div>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigImg1 = {
        titleBar: {
            enable: true
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id="web" className="web-wrap">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Web</h1>
                <div className="row">
                    <div className="col-md-6 web-image-box" onClick={openPopupboxImg1}>
                        <img className="web-img" src={web01} alt="Site web 1" />
                        <div className="overflow-web"></div>
                        <FontAwesomeIcon className="web-icon" icon={faSearchPlus} size="2x" />
                    </div>
                    <div className="col-md-6 web-image-box" onClick={openPopupboxImg1}>
                        <img className="web-img" src={web01} alt="Site web 1" />
                        <div className="overflow-web"></div>
                        <FontAwesomeIcon className="web-icon" icon={faSearchPlus} size="2x" />
                    </div>
                    <p className="other">Et bien d'autres... à venir !</p>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigImg1}/>
        </div>
    );
};

export default Web;