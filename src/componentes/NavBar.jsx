import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ProductoContext from "../context/ProductoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faPaw,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const { totalPedido } = useContext(ProductoContext);
  let precioTotal = totalPedido
    .map((item) => item.precio * item.cantidad)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <div className="navbar d-flex justify-content-around">
      <div>
        <nav className="navbar">
          <div className="d-flex">
            <NavLink to="/" className="text-nav">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faPaw} size="1x" className="text-nav" />
                <h5 className="ms-3 text-nav ">Home</h5>
              </div>
            </NavLink>
            <NavLink to="/productos" className="text-nav">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faPaw} size="1x" className="text-nav" />
                <h5 className="ms-3 text-nav ">Productos</h5>
              </div>
            </NavLink>
            <NavLink to="/conocenos" className="text-nav">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faPaw} size="1x" className="text-nav" />
                <h5 className="ms-3 text-nav ">Conócenos</h5>
              </div>
            </NavLink>
          </div>
        </nav>
      </div>
      <div>
        <nav className="navbar">
          <div className="container-fluid">
            <NavLink to="/carrito" className="text-nav">
              <div className="d-flex">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="2x"
                  className="text-nav"
                />
                <h4 className="ms-2 text-nav">${precioTotal}</h4>
              </div>
            </NavLink>
            <NavLink to="/registro">
              <div className="d-flex">
                <FontAwesomeIcon
                  icon={faUsers}
                  size="2x"
                  className="text-nav"
                />
              </div>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
