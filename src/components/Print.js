import React from 'react';
import pr01 from '../images/Pr-01.jpg';
import pr01Xl from '../images/Pr-01-XL.jpg';
import pr02 from '../images/Pr-02.jpg';
import pr02Xl from '../images/Pr-02-XL.jpg';
import pr03 from '../images/Pr-03.jpg';
import pr03Xl from '../images/Pr-03-XL.jpg';
import pr04 from '../images/Pr-04.jpg';
import pr04Xl from '../images/Pr-04-XL.jpg';
import pr05 from '../images/Pr-05.jpg';
import pr05Xl from '../images/Pr-05-XL.jpg';
import pr06 from '../images/Pr-06.jpg';
import pr06Xl from '../images/Pr-06-XL.jpg';
import pr07 from '../images/Pr-07.jpg';
import pr07Xl from '../images/Pr-07-XL.jpg';
import pr08 from '../images/Pr-08.jpg';
import pr08Xl from '../images/Pr-08-XL.jpg';
import pr09 from '../images/Pr-09.jpg';
import pr09Xl from '../images/Pr-09-XL.jpg';
import pr10 from '../images/Pr-10.jpg';
import pr10Xl from '../images/Pr-10-XL.jpg';
import pr11 from '../images/Pr-11.jpg';
import pr11Xl from '../images/Pr-11-XL.jpg';
import pr12 from '../images/Pr-12.jpg';
import pr12Xl from '../images/Pr-12-XL.jpg';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

const Print = () => {

    //img1
    const openPopupboxImg1 = () => {
        const content = (
            <div>
                <img className="imgXL" src={pr01Xl} alt="Des impressions" />
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
                <img className="imgXL" src={pr02Xl} alt="Des impressions" />
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
                <img className="imgXL" src={pr03Xl} alt="Des livres" />
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
                <img className="imgXL" src={pr04Xl} alt="Des impressions" />
            </div>
        )
        PopupboxManager.open({ content })
    }

    //img5
    const openPopupboxImg5 = () => {
        const content = (
            <div>
                <img className="imgXL" src={pr05Xl} alt="Des impressions" />
            </div>
        )
        PopupboxManager.open({ content })
    }

    //img6
    const openPopupboxImg6 = () => {
        const content = (
            <div>
                <img className="imgXL" src={pr06Xl} alt="Des impressions" />
            </div>
        )
        PopupboxManager.open({ content })
    }

    //img7
    const openPopupboxImg7 = () => {
        const content = (
            <div>
                <img className="imgXL" src={pr07Xl} alt="Des impressions" />
            </div>
        )
        PopupboxManager.open({ content })
    }

    //img8
    const openPopupboxImg8 = () => {
        const content = (
            <div>
                <img className="imgXL" src={pr08Xl} alt="Des impressions" />
            </div>
        )
        PopupboxManager.open({ content })
    }
    
    //img9
    const openPopupboxImg9 = () => {
        const content = (
            <div>
                <img className="imgXL" src={pr09Xl} alt="Des impressions" />
            </div>
        )
        PopupboxManager.open({ content })
    }
    
    //img10
    const openPopupboxImg10 = () => {
        const content = (
            <div>
                <img className="imgXL" src={pr10Xl} alt="Des impressions" />
            </div>
        )
        PopupboxManager.open({ content })
    }
    
    //img11
    const openPopupboxImg11 = () => {
        const content = (
            <div>
                <img className="imgXL" src={pr11Xl} alt="Des impressions" />
            </div>
        )
        PopupboxManager.open({ content })
    }
    
    //img12
    const openPopupboxImg12 = () => {
        const content = (
            <div>
                <img className="imgXL" src={pr12Xl} alt="Des impressions" />
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
        <div id="print" className="edit-wrap">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Print</h1>
                <div className="row">
                    <div className="col-md-3 col-sm-6 portfolio-image-box" onClick={openPopupboxImg1}>
                        <img className="edit-img" src={pr01} alt="Photos impressions" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="edit-icon" icon={faSearchPlus} size="2x" />
                    </div>
                    <div className="col-md-3 col-sm-6 portfolio-image-box" onClick={openPopupboxImg2}>
                        <img className="edit-img" src={pr02} alt="Des impressions" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="edit-icon" icon={faSearchPlus} size="2x" />
                    </div>
                    <div className="col-md-3 col-sm-6 portfolio-image-box" onClick={openPopupboxImg3}>
                        <img className="edit-img" src={pr03} alt="Des livres" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="edit-icon" icon={faSearchPlus} size="2x" />
                    </div>
                    <div className="col-md-3 col-sm-6 portfolio-image-box" onClick={openPopupboxImg4}>
                        <img className="edit-img" src={pr04} alt="Des livres" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="edit-icon" icon={faSearchPlus} size="2x" />
                    </div>

                    <div className="col-md-3 col-sm-6 portfolio-image-box" onClick={openPopupboxImg5}>
                        <img className="edit-img" src={pr05} alt="Des livres" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="edit-icon" icon={faSearchPlus} size="2x" />
                    </div>
                    <div className="col-md-3 col-sm-6 portfolio-image-box" onClick={openPopupboxImg6}>
                        <img className="edit-img" src={pr06} alt="Des livres" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="edit-icon" icon={faSearchPlus} size="2x" />
                    </div>
                    <div className="col-md-3 col-sm-6 portfolio-image-box" onClick={openPopupboxImg7}>
                        <img className="edit-img" src={pr07} alt="Des livres" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="edit-icon" icon={faSearchPlus} size="2x" />
                    </div>
                    <div className="col-md-3 col-sm-6 portfolio-image-box" onClick={openPopupboxImg8}>
                        <img className="edit-img" src={pr08} alt="Des livres" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="edit-icon" icon={faSearchPlus} size="2x" />
                    </div>
                    
                    <div className="col-md-3 col-sm-6 portfolio-image-box" onClick={openPopupboxImg9}>
                        <img className="edit-img" src={pr09} alt="Des livres" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="edit-icon" icon={faSearchPlus} size="2x" />
                    </div>
                    <div className="col-md-3 col-sm-6 portfolio-image-box" onClick={openPopupboxImg10}>
                        <img className="edit-img" src={pr10} alt="Des livres" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="edit-icon" icon={faSearchPlus} size="2x" />
                    </div>
                    <div className="col-md-3 col-sm-6 portfolio-image-box" onClick={openPopupboxImg11}>
                        <img className="edit-img" src={pr11} alt="Des livres" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="edit-icon" icon={faSearchPlus} size="2x" />
                    </div>
                    <div className="col-md-3 col-sm-6 portfolio-image-box" onClick={openPopupboxImg12}>
                        <img className="edit-img" src={pr12} alt="Des livres" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="edit-icon" icon={faSearchPlus} size="2x" />
                    </div>
                    <p className="other">Et bien d'autres...</p>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigImg1}/>
        </div>
    );
};

export default Print;