import { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";

function App() {
  //crear un listado de productos
  // asi se crean los state
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "camisa react", precio: 50 },
    { id: 2, nombre: "camisa laravel", precio: 40 },
    { id: 3, nombre: "camisa node", precio: 30 },
    { id: 4, nombre: "camisa php", precio: 20 },
  ]);

  //state para carrito de compras
  const [carrito, agregarProducto] = useState([]);

  //obtener fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda Virtual" />

      <h1>Lista de Productos:</h1>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={productos}
          agregarProducto={agregarProducto}
        />
      ))}

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
