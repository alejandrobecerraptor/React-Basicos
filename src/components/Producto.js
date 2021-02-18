import React from 'react';

const Producto = ({producto,carrito,agregarProducto,productos}) => {

    const {nombre , precio , id} = producto;

    //Agregar producto al carrito funcion

    const seleccionarProducto = id => {
        
        const producto = productos.filter(producto => producto.id === id);
        console.log(producto);
         
    }
     
    return ( 
       <div>
           <h2>{nombre}</h2>
           <p>${precio}</p>
           <button
           type = "button"
           onClick = { () => seleccionarProducto(id) }>
               comprar
           </button>
       </div>
     );
}
 
export default Producto;