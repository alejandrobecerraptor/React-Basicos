import React from 'react';
import Producto from "./Producto";
import './carrito.css';

const Carrito = ({carrito}) => (
    <div className="carrito">
        <h2>Tu carrito de Compras</h2>
        
        {carrito.length === 0 
            ? <p> no hay elementos en el carrito</p> 
            : carrito.map(producto => (
                <Producto 
                    key = {producto.id}
                    producto = {producto}
                />
        ))}
    </div>
);
 
export default Carrito;