import React from 'react';
import author from "../images/Photo-Fred2.png"

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="photo de moi" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">À propos de moi</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, error? Et maxime magnam laudantium architecto suscipit eligendi! Soluta facilis perspiciatis beatae ipsam ducimus asperiores assumenda! Quos nesciunt facilis ipsa neque.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;