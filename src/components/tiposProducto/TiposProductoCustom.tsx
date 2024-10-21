import React from 'react';
import "./tiposProductoCustom.css"

import arete from "../../../public/images/argollas.png";
import anillo from "../../assets/proyecto/n28.jpg";
import collar from "../../assets/proyecto/n29.jpg";
import pendientes from "../../assets/proyecto/n27.jpg";
import pulseras from "../../../public/images/pulseras.png";
import adornos from "../../../public/images/adornos.png";


const TiposProductosPage: React.FC = () => {
    return (
        <div>
            <main>
                <section className="section-7">
                    <article className="primero">
                        <div>
                            <img src={arete} alt="Servicios" className="primeroimg"/>
                            <h2>Argollas</h2>
                            <p>Nuestras argollas están elaboradas con materiales de alta calidad como oro, plata y acero inoxidable, ofrecen una combinación perfecta de durabilidad y sofisticación. Disponibles en diversos diseños, desde los clásicos lisos hasta los modernos con incrustaciones de piedras.</p>
                        </div>

                        <div>
                            <img src={pulseras} alt="Servicios" className="primeroimg"/>
                            <h2>Pulseras</h2>
                            <p>Nuestras pulseras combinan elegancia y estilo para cualquier ocasión. Ofrecemos una amplia variedad de diseños: desde pulseras delicadas y minimalistas hasta piezas más llamativas y modernas. Nuestras pulseras son perfectas para expresar tu personalidad.</p>
                        </div>

                        <div>
                            <img src={collar} alt="Servicios" className="primeroimg"/>
                            <h2>Collares</h2>
                            <p>Ofrecemos desde collares minimalistas y delicados hasta diseños más audaces y detallados. Perfectos para cualquier ocasión, nuestros collares son el complemento ideal para destacar y añadir un toque sofisticado a tu look. ¡Encuentra el collar que mejor refleje tu personalidad!</p>
                        </div>
                    </article>

                    <article className="segundo">
                        <div>
                            <img src={pendientes} alt="Servicios" className="segundoimg"/>
                            <h2>Pendientes</h2>
                            <p>Nuestros pendientes son el toque perfecto de elegancia para completar cualquier atuendo. Ideales para el día a día o para ocasiones especiales, nuestros pendientes destacan por su delicadeza y sofisticación. ¡Descubre los pendientes que mejor reflejan tu estilo!</p>
                        </div>

                        <div>
                            <img src={anillo} alt="Servicios" className="segundoimg"/>
                            <h2>Anillos</h2>
                            <p>Nuestros anillos están diseñados para ser más que un simple accesorio; son una declaración de estilo y personalidad. Confeccionados en materiales premium como oro, plata, y acero inoxidable. Desde anillos delicados y minimalistas hasta opciones más audaces con incrustaciones preciosas.</p>
                        </div>

                        <div>
                            <img src={adornos} alt="Servicios" className="segundoimg"/>
                            <h2>Adornos</h2>
                            <p>Nuestros adornos están diseñados para transformar cualquier espacio con estilo y elegancia. Con una selección de piezas únicas en materiales como cerámica, madera y metal, aportan un toque distintivo y acogedor a tu hogar u oficina. ¡Descubre la pieza perfecta para decorar!</p>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
};

export { TiposProductosPage };
