import React from 'react';

function Header() {

    const edad = 19;
    let mensaje;
    if(edad == 18){
        mensaje = 'el numero es 18';
    }else{
        mensaje = 'el numero no es 18'
    }
    return (
        <h1>El numero:{edad} {mensaje}</h1>
    )
    
}

export default Header;