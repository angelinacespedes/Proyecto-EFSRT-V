import React from "react";
import {HeaderCustom} from "../header/HeaderCustom.tsx";
import {TiposProductosPage} from "../tiposProducto/TiposProductoCustom.tsx";

const Categorias : React.FC = () => {
    return (
        <div>
            <HeaderCustom/>
            <TiposProductosPage/>
        </div>
    );
};

export {Categorias};