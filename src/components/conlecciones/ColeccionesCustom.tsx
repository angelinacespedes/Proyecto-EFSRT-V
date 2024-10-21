import React from 'react';
import "./coleccionesCustom.css"
import imagenN15 from "../../assets/proyecto/n15.jpg"
import imagenN12 from "../../assets/proyecto/n12.jpg"
import imagenN23 from "../../assets/proyecto/n23.jpg"

const ColeccionesPage: React.FC = () => {
    return (
        <div className="colecciones">
            <h2 className="h2-2">COLECCIONES</h2>

            <div className="section-2">
                <div>
                    <img src={imagenN12} alt="Servicios" className="imagenN12"/>
                    <h3>COLLARES</h3>
                    <span>Nuestros collares son más que simples accesorios, ¡son una expresión de tu estilo único! Diseñados con materiales de alta calidad y disponibles en una variedad de estilos, desde elegantes y minimalistas hasta llamativos y personalizados. Cada collar se puede personalizar con nombres, iniciales o detalles especiales que lo hacen perfecto para ti o como un regalo inolvidable.Nuestros collares son más que simples accesorios.</span>
                </div>

                <div>
                    <img src={imagenN23} alt="Servicios" className="imagenN23"/>
                    <h3>TOCADOS</h3>
                    <span>En NinaStore, nuestros tocados están diseñados para hacerte brillar en cualquier ocasión especial. Cada tocado es cuidadosamente elaborado con detalles únicos, desde flores delicadas hasta perlas y cristales, perfectos para bodas, fiestas, o simplemente para añadir un toque de elegancia a tu estilo diario. ¡Haz de cada momento algo inolvidable con los tocados exclusivos de NinaStore!</span>
                </div>

                <div>
                    <img src={imagenN15} alt="Servicios" className="imagenN15"/>
                    <h3>PULSERAS</h3>
                    <span>En NinaStore, nuestras pulseras son el accesorio perfecto para complementar tu estilo con un toque personal. Cada pulsera está hecha a mano, con materiales de alta calidad, y puede ser personalizada con nombres, iniciales, fechas o símbolos especiales. Desde pulseras minimalistas hasta diseños más llamativos, ofrecemos opciones para todos los gustos y ocasiones. ¡Encuentra la pulsera que mejor te define en NinaStore!</span>
                </div>
            </div>
        </div>
    );
};

export {ColeccionesPage};
