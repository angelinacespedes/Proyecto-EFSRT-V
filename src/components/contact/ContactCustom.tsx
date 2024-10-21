import React from 'react';
import { HeaderCustom } from "../header/HeaderCustom.tsx";
import "./contactCustom.css";

const ContactCustom: React.FC = () => {
    return (
        <div>
            <HeaderCustom/>

            <main>
                <section className="contact-container">
                    <div className="contact-arc">
                        <h2>CONTACTOS</h2>
                        <h3>Dirección de tienda:</h3>
                        <p>Calle Micaela Bastidas, Puente Piedra, Lima</p>

                        <h3>Teléfonos:</h3>
                        <p>+51 911 234 567</p>

                        <h3>Email:</h3>
                        <p>ninastore@gmail.com</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export { ContactCustom };
