import {Button} from "primereact/button";
import {Sidebar} from "primereact/sidebar";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCartShopping, faMagnifyingGlass, faUser} from "@fortawesome/free-solid-svg-icons";

const MenuPage = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="dropdown flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <a href="/">Inicio</a><br/>
                <a href="/">Pulseras</a><br/>
                <a href="/">Aretes</a><br/>
                <a href="/">Collares</a><br/>
            </Sidebar>
            <Button className="dropdown-btn"
                onClick={() => setVisible(true)}>
                <FontAwesomeIcon icon={faBars}/>
            </Button>
            <p className="titulo">NINA STORE</p>
            <Button className="dropdown-btn">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </Button>
            <Button className="dropdown-btn-icons">
                <FontAwesomeIcon icon={faCartShopping}/>
            </Button>
            <Button className="dropdown-btn-icons">
                <FontAwesomeIcon icon={faUser}/>
            </Button>
        </div>
    );
};

export default MenuPage;