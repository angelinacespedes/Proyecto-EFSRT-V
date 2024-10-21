import MenuPage from "../../components/MenuPage.tsx";
import "./inicioPage.css"
import {CaracteristicasProductoPage} from "../../components/caractesticasProducto/CaracteristicasProductoCustom.tsx";
import {ColeccionesPage} from "../../components/conlecciones/ColeccionesCustom.tsx";
import {
    PropiedadesCaracteristicasPage
} from "../../components/propiedadesCaracteristicas/PropiedadesCaracteristicasCustom.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTiktok} from "@fortawesome/free-brands-svg-icons";


const InicioPage = () => {

    return (
        <>
            <MenuPage/>
            <section className="inicioPage">
                <div className="div-inicio">
                    <h1>ACCEORIOS PERZONALIZADOS HECHOS A MANOS</h1>
                    <h3>Porque todos merecemos cosas <strong>únicas</strong></h3>
                    <p><a href="#div-2">VER MAS</a></p>
                </div>

                <div id="div-2" className="div-2">
                    <CaracteristicasProductoPage/>
                </div>

                <div id="div-3" className="div-3">
                    <ColeccionesPage/>
                </div>

                <div id="div-4" className="div-4">
                    <PropiedadesCaracteristicasPage/>
                </div>

                <div className="div-5">
                    <h2>NUESTRAS REDES</h2>

                    <div className="redes">
                        <a href="https://www.facebook.com/profile.php?id=100094365156531"><FontAwesomeIcon className="iconos" icon={faFacebook}/></a>
                        <a href="https://www.tiktok.com/@ninistore02?lang=es"><FontAwesomeIcon className="iconos" icon={faTiktok}/></a>
                        <a href="https://www.instagram.com/n.i.n.a_store/"><FontAwesomeIcon className="iconos" icon={faInstagram}/></a>
                    </div>
                </div>
            </section>
        </>
    );
};

export {InicioPage};