import React from 'react';

const Producto = ({producto}) => {

    const {nombre , precio , id} = producto;

    //Agregar producto al carrito funcion

    const seleccionarProducto = id => {
        return ( 
            console.log('comprando',id)
         );
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