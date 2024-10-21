
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import "./App.css"
import {InicioPage} from "./modulos/inicio/InicioPage.tsx";
import {ContactCustom} from "./components/contact/ContactCustom.tsx";
import {ServiciosCustom} from "./components/servicios/ServiciosCustom.tsx";
import {SobreMiPage} from "./components/sobreMi/SobreMi.tsx";
import {ColeccionesPage} from "./components/conlecciones/ColeccionesCustom.tsx";
import {
    PropiedadesCaracteristicasPage
} from "./components/propiedadesCaracteristicas/PropiedadesCaracteristicasCustom.tsx";
import {TiposProductosPage} from "./components/tiposProducto/TiposProductoCustom.tsx";
import {ComprasPage} from "./components/compras/ComprasCustom.tsx";
import {CaracteristicasProductoPage} from "./components/caractesticasProducto/CaracteristicasProductoCustom.tsx";
import {Categorias} from "./components/categorias/categorias.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/inicio" element={<InicioPage />} />
                <Route path="/sobremi" element={<SobreMiPage />} />
                <Route path="/categorias" element={<Categorias />} />
                <Route path="/servicios" element={<ServiciosCustom />} />
                <Route path="/contact" element={<ContactCustom />} />
                <Route path="/coleccion" element={<ColeccionesPage />} />
                <Route path="/propiedades" element={<PropiedadesCaracteristicasPage />} />
                <Route path="/tipos" element={<TiposProductosPage />} />
                <Route path="/compras" element={<ComprasPage />} />
                <Route path="/caracteristicas" element={<CaracteristicasProductoPage />} />

                <Route path="*" element={<Navigate to="/inicio" />} />
            </Routes>
        </Router>
    );
}

export default App;
