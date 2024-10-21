import React from 'react';
import "./propiedadesCaracteristicasCustom.css"
import imagen7 from "../../assets/proyecto/img7.jpg";


const PropiedadesCaracteristicasPage: React.FC = () => {
    return (
        <div>
            <main>
                <section className="section-6">
                    <div className="izquierda">
                        <h2>PRODUCTOS <br/>MEMORABLES</h2>
                        <span>En NinaStore, nuestros productos memorables están diseñados para capturar momentos especiales y convertirlos en piezas únicas e inolvidables. Desde accesorios personalizados con nombres y fechas hasta diseños que celebran hitos importantes, cada creación es un reflejo de lo que realmente importa en tu vida. Ya sea un regalo para alguien especial o un recordatorio de tus propios logros, estos productos están hechos para durar y acompañarte en cada paso del camino. ¡Haz que cada momento cuente con los productos memorables de NinaStore!
                        </span>
                    </div>
                    <div className="centro">
                        <img src={imagen7} alt="Servicios" className="imagen7"/>
                    </div>
                </section>
            </main>
        </div>
    );
};

export {PropiedadesCaracteristicasPage};
