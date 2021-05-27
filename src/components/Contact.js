import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";


const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_9V6wIMRAHtSSU3FoTj6zp";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                email: data.email,
                objet: data.objet,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Merci. Message envoyé ! Je vous contacte aussi vite que possible.");
          }).catch(err => console.error(`Quelque chose ne va pas ${err}`));
      }

    return (
        <div className="contact">
            <h1 className="text-uppercase text-center py-5">contactez-moi</h1>
            <p>Merci de remplir les champs nécessaires</p>
            <span className="success-message">{successMessage}</span>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <input type="text" className="form-control"
                            placeholder="Nom"
                            name="name"
                            {...register('name',{
                                    required: "Merci de saisir votre nom",
                                    maxLength: {
                                        value: 20,
                                        message: "Merci de saisir un nom de moins de 20 caractères"
                                    }
                                })
                            }
                            />
                            <div className="line"></div>
                            <span className="error-message">
                            {errors.name && errors.name.message}
                            </span>
                            
                            <input type="email" className="form-control" placeholder="E-mail" 
                            name="email"
                            {...register('email',{
                                required: "Merci de saisir votre e-mail",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "e-mail invalide"
                                }
                                })
                            }
                            />
                            <div className="line"></div>
                            <span className="error-message">
                            {errors.email && errors.email.message}
                            </span>
                            
                            <input type="text" className="form-control" placeholder="Objet" 
                            name="objet"
                            {...register('objet',{
                                required: "Merci de saisir un objet",                                
                                })
                            }
                            />
                            <div className="line"></div>
                            <span className="error-message">
                            {errors.objet && errors.objet.message}
                            </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <textarea type="text" className="form-control" placeholder="Votre texte" 
                            name="description"
                            {...register('description',{
                                required: "Merci de saisir votre texte",                                
                                })
                            }
                            ></textarea>
                            <div className="line"></div>
                            <span className="error-message">
                            {errors.description && errors.description.message}
                            </span>
                            <button className="contact-btn" type="submit">Envoyer</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;