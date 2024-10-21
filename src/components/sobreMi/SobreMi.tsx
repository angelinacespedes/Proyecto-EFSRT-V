import React from 'react';
import { HeaderCustom } from "../header/HeaderCustom.tsx";
import "./sobreMi.css";
import imagen4 from "../../assets/proyecto/img4.png";

const SobreMiPage: React.FC = () => {
    return (
        <div>
            <HeaderCustom />

            <main className="main-1">
                <section className="sobre-mi-container">
                    <div className="izquierda">
                        <img src={imagen4} alt="Servicios"/>
                    </div>
                    <div className="derecha">
                        <h2>HOLA Y <br /> BIENVENIDA</h2>
                        <p className="texto">
                            ¡Bienvenidos a NinaStore Online! 🌟 Tu tienda virtual de accesorios personalizados donde cada pieza cuenta una historia y está hecha a medida para ti. Desde pulseras hasta collares y más, diseñamos accesorios únicos que resaltan tu estilo y personalidad. Navega fácilmente desde la comodidad de tu hogar y descubre nuestras creaciones exclusivas. ¡En NinaStore, tu estilo es nuestro arte! 🛍️✨
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export { SobreMiPage };
