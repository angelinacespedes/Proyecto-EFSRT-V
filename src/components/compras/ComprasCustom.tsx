import React from 'react';
import "./conprasCustom.css"
import imagen1 from "../../assets/proyecto/n30.jpg";
import imagen2 from "../../assets/proyecto/n31.jpg";
import imagen3 from "../../assets/proyecto/n32.jpg";
import imagen4 from "../../assets/proyecto/n33.jpg";
import imagen5 from "../../assets/proyecto/n34.jpg";
import imagen6 from "../../assets/proyecto/n35.jpg";

const ComprasPage: React.FC = () => {
    return (
        <div>
            <main>
                <section className="section-9">
                    <article className="primero">
                        <div className="div-9">
                            <img src={imagen1} alt="Servicios" className="imagenPrimero"/>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="carro">
                                <p className="p-4">$900</p>
                                <i className="pi pi-cart-minus" style={{fontSize: '1.5rem'}}></i>
                            </div>
                        </div>

                        <div className="div-9">
                        <img src={imagen2} alt="Servicios" className="imagenPrimero"/>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="carro">
                                <p className="p-4">$900</p>
                                <i className="pi pi-cart-minus" style={{fontSize: '1.5rem'}}></i>
                            </div>
                        </div>

                        <div className="div-9">
                        <img src={imagen3} alt="Servicios" className="imagenPrimero"/>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="carro">
                                <p className="p-4">$900</p>
                                <i className="pi pi-cart-minus" style={{fontSize: '1.5rem'}}></i>
                            </div>
                        </div>
                    </article>

                    <article className="segundo">

                        <div className="div-9">
                            <img src={imagen4} alt="Servicios" className="imagenSegundo"/>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="carro">
                                <p className="p-4">$900</p>
                                <i className="pi pi-cart-minus" style={{fontSize: '1.5rem'}}></i>
                            </div>
                        </div>
                        <div className="div-9">
                        <img src={imagen5} alt="Servicios" className="imagenSegundo"/>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="carro">
                                <p className="p-4">$900</p>
                                <i className="pi pi-cart-minus" style={{fontSize: '1.5rem'}}></i>
                            </div>
                        </div>

                        <div className="div-9">
                            <img src={imagen6} alt="Servicios" className="imagenSegundo"/>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="carro">
                                <p className="p-4">$900</p>
                                <i className="pi pi-cart-minus" style={{fontSize: '1.5rem'}}></i>
                            </div>
                        </div>

                    </article>
                </section>
            </main>
        </div>
    );
};

export {ComprasPage};
