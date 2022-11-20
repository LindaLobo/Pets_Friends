import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import NavBar from "./componentes/NavBar";
import Carrito from "./views/Carrito";
import Historia from "./views/Historia";
import Detalle from "./views/Detalle";
import Registro from "./views/Registro";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import ProductoContext from "./context/ProductoContext";
import data from "./products.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [listaProductos, setlistaProductos] = useState([]);
  const [totalPedido, setTotalPedido] = useState([]);
  async function producto() {
    setlistaProductos(data);
  }
  useEffect(() => {
    producto();
  }, []);

  return (
    <div className="App">
      <ProductoContext.Provider
        value={{
          listaProductos,
          setlistaProductos,
          totalPedido,
          setTotalPedido,
        }}
      >
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/productos" element={<Detalle />}></Route>
            <Route path="/conocenos" element={<Historia />}></Route>
            <Route path="/carrito" element={<Carrito />}></Route>
            <Route path="/registro" element={<Registro />}></Route>
            <Route path="/not_found" element={<NotFound />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ProductoContext.Provider>
    </div>
  );
}

export default App;
