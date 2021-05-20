import React from 'react';
import ed01 from '../images/Ed-01.jpg';
import ed01Xl from '../images/Ed-01-XL.jpg';
import ed02 from '../images/Ed-02.jpg';
import ed02Xl from '../images/Ed-02-XL.jpg';
import ed03 from '../images/Ed-03.jpg';
import ed03Xl from '../images/Ed-03-XL.jpg';
import ed04 from '../images/Ed-04.jpg';
import ed04Xl from '../images/Ed-04-XL.jpg';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

const Editions = () => {

    //img1
    const openPopupboxImg1 = () => {
        const content = (
            <div>
                <img className="imgXL" src={ed01Xl} alt="Des cartes de visite" />
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
    
    //img2
    const openPopupboxImg2 = () => {
        const content = (
            <div>
                <img className="imgXL" src={ed02Xl} alt="Des catalogues" />
            </div>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigImg2 = {
        titleBar: {
            enable: true
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    
    //img3
    const openPopupboxImg3 = () => {
        const content = (
            <div>
                <img className="imgXL" src={ed03Xl} alt="Des livres" />
            </div>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigImg3 = {
        titleBar: {
            enable: true
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    
    //img4
    const openPopupboxImg4 = () => {
        const content = (
            <div>
                <img className="imgXL" src={ed04Xl} alt="Des cartes de visite" />
            </div>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigImg4 = {
        titleBar: {
            enable: true
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div className="edit-wrap">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Éditions</h1>
                <div className="row">
                    <div className="col-md-3 col-sm-6 portfolio-image-box" onClick={openPopupboxImg1}>
                        <img className="edit-img" src={ed01} alt="Des cartes de visite" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="edit-icon" icon={faSearchPlus} size="2x" />
                    </div>
                    <div className="col-md-3 col-sm-6 portfolio-image-box" onClick={openPopupboxImg2}>
                        <img className="edit-img" src={ed02} alt="Des catalogues" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="edit-icon" icon={faSearchPlus} size="2x" />
                    </div>
                    <div className="col-md-3 col-sm-6 portfolio-image-box" onClick={openPopupboxImg3}>
                        <img className="edit-img" src={ed03} alt="Des livres" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="edit-icon" icon={faSearchPlus} size="2x" />
                    </div>
                    <div className="col-md-3 col-sm-6 portfolio-image-box" onClick={openPopupboxImg4}>
                        <img className="edit-img" src={ed04} alt="Des livres" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="edit-icon" icon={faSearchPlus} size="2x" />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigImg1}/>
        </div>
    );
};

export default Editions;