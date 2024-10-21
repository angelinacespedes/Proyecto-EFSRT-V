import React from 'react';
import {Link} from 'react-router-dom';
import './HeaderCustom.css';

const HeaderCustom: React.FC = () => {
    return (
        <header>
            <nav>
                <ul className="nav-links">
                    <li><Link className="a" to="/servicios">Servicios</Link></li>
                    <li><Link className="a" to="/categorias">Categorías</Link></li>
                    <li><Link className="inicio" to="/inicio">NINA STORE</Link></li>
                    <li><Link className="a" to="/sobremi">Sobre Nosotros</Link></li>
                    <li><Link className="a" to="/contact">Contactos</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export {HeaderCustom};
