import React from "react";

import { NavBar } from "../navBar";
import { Footer } from "../footer";
import { ContactForm } from "./contactForm";

export const ContactUs = () => {
    return (
        <div>
            <NavBar />
            <div style={{ background: '#1e1e1e' }}>
                <div className="container" style={{ background: '#1e1e1e' }}>
                    <div className="py-5">
                        <div className="row">
                            <div className="col message" style={{ marginLeft: '105px'}}>
                                <div className="first section">
                                    <p className="heading-one" style={{ color: '#4ca1f9', marginTop: '-5px' }}>SCHEDULE A CONSULTATION</p>
                                    <h1 className="heading-two"
                                        style={{
                                            color: 'white',
                                            width: '450px',
                                            font: '100px'
                                        }}>
                                        Reduce the manual tasks and accelerate growth
                                    </h1>
                                    <p className="pitch" style={{ width: '450px', color: 'white', font: '12px', fontWeight: '300', marginTop: '20px' }}>
                                        Simple to extensive warehousing.
                                        Easy to learn platform.
                                        Short lead time to market and affordable costs.
                                    </p>
                                </div>
                            </div>
                            <div className="col p-1" style={{ marginLeft: '105px'}}>
                                <ContactForm className=""/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};
