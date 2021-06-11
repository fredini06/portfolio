import React from 'react';
import author from "../images/Photo-Fred2.png"

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="photo de moi" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">À propos de moi</h1>
                    <p className="about-text">
                    Après plusieurs années d’expériences professionnelles diverses dans le milieu de l’infographie (dans les domaines de l'édition et de l'imprimerie), et après deux années passées dans l’Education Nationale, je suis actuellement en pleine reconversion dans un domaine qui me passionne : le Web. Touche à tout et toujours en quête de savoir, je suis rigoureux, sérieux et sociable.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;