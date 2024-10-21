import React from 'react';
import "./caracteristicasProductosCustom.css"
import pulseras from "../../assets/proyecto/n6.jpg";
import celular from "../../assets/proyecto/n37.jpg";
import pulseras1 from "../../assets/proyecto/n13.jpg";

const CaracteristicasProductoPage: React.FC = () => {
    return (
        <div>
            <main>
                <section className="section-3">
                    <article className="article">
                        <div>
                            <img src={pulseras} alt="Servicios" className="imagen-principal"/>
                            <h3>PULSERAS DE HILO</h3>
                        </div>
                    </article>

                    <article className="article">
                        <div>
                            <img src={celular} alt="Servicios" className="imagen-principal"/>
                            <h3>ACCESORIOS PARA CELULAR</h3>
                        </div>
                    </article>

                    <article className="article">
                        <div>
                            <img src={pulseras1} alt="Servicios" className="imagen-principal"/>
                            <h3>PULSERAS DE HILO</h3>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
};

export {CaracteristicasProductoPage};
