import React from 'react';
import {HeaderCustom} from "../header/HeaderCustom.tsx";
import "./serviciosCustom.css"
import imagenServicios from "../../../public/images/img4-servicios.webp";
import imagen1 from "../../../public/images/img1-servicios.webp";
import imagen2 from "../../../public/images/img2-servicios.webp";
import imagen3 from "../../../public/images/img3-servicios.webp";


const ServiciosCustom: React.FC = () => {
    return (
        <div>
            <HeaderCustom/>
            <main>
                <section className="section-5">
                    <div className="derecha">
                        <h2>NUESTROS SERVICIOS</h2>

                        <div className="derechaImagen1">
                            <img src={imagen1} alt="Servicios" className="imagen1"/>
                            <p>Diseño, concepto y producción de nuevas joyas desde
                                cero según la personalidad y el mensaje que quiera
                                transmitir el cliente.
                            </p>
                        </div>

                        <div className="derechaImagen2">
                            <img src={imagen2} alt="Servicios" className="imagen2"/>
                            <p>Diseño y producción de joyas para las manos y el
                                cuello, como collares, cadenas, pulseras. Producidas
                                con el más alto detalle y dedicación.
                            </p>
                        </div>

                        <div className="derechaImagen3">
                            <img src={imagen3} alt="Servicios" className="imagen3"/>
                            <p>Diseño y desarrollo de adornos para el cabello,
                                como tocados y diademas.
                            </p>
                        </div>
                    </div>

                    <div className="izquierda">
                        <img src={imagenServicios} alt="Servicios" className="servicios"/>
                    </div>
                </section>

            </main>
        </div>
    );
};

export {ServiciosCustom};
