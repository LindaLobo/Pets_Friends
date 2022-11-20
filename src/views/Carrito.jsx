import React, { useContext } from "react";
import ProductoContext from "../context/ProductoContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

export default function Carrito({ eliminarProducto }) {
  const navigate = useNavigate();
  const { totalPedido, setTotalPedido } = useContext(ProductoContext);

  let precioTotal = totalPedido
    .map((item) => item.precio * item.cantidad)
    .reduce((prev, curr) => prev + curr, 0);

  const handleEliminar = (id) => {
    Swal.fire({
      title: "¿Esta seguro de eliminar?",
      text: "Los productos eliminados tendras que volver agregarlos!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("totalPedido", totalPedido);

        let products = totalPedido
          .map((item) => {
            if (item.id === id && item.cantidad > 1) {
              item.cantidad--;
              return item;
            } else if (item.id === id && item.cantidad === 1) {
              // setTotalPedido([]);
              return undefined
            } else {
              return item;
            }
          })
          .filter((item) => item !== undefined);
        setTotalPedido(products);
        Swal.fire("Borrado!", "Sigue comprando", "success");
      }
    });
  };

  return (
    <div className="container shadow-lg p-3 mb-5 bg-body rounded p-5 mt-5">
      <div className="d-flex justify-content-around mb-5">
        <h1 className="detalle-font ">Detalles del Pedido</h1>
        <button onClick={() => navigate(`/`)} className="btn btn-primary">
          <FontAwesomeIcon icon={faBackward} className="me-2" color="white" />
          Seguir Comprando
        </button>
      </div>
      {totalPedido.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-around shadow-lg p-3 mb-5 bg-body rounded p-5"
        >
          <div className="d-flex">
            <img src={item.img} width="200" alt="" />
            <h6 className="ms-3 d-flex align-items-center">
              {item.name.toUpperCase()}
            </h6>
          </div>
          <h6 className="d-flex align-items-center">$ {item.precio}</h6>
          <h6 className="d-flex align-items-center">{item.cantidad}</h6>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => handleEliminar(item.id)}
          >
            Eliminar
          </button>
        </div>
      ))}
      <h4 className="mt-3 detalle-font ">Total Pedido: {precioTotal}</h4>
    </div>
  );
}
