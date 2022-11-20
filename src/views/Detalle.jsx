import React, { useContext } from "react";
import Carousel from "../componentes/Carousel";
import ProductoContext from "../context/ProductoContext";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Detalle({ producto }) {
  const { listaProductos, totalPedido, setTotalPedido } =
    useContext(ProductoContext);

  const actualizarCarrito = async (producto) => {
    let verificar = totalPedido.find((item) => item.id === producto.id);
    if (verificar) {
      const actualizarProducto = totalPedido.map((pedido) => {
        if (pedido.id === producto.id) {
          return {
            ...pedido,
            cantidad: pedido.cantidad + 1,
          };
        }
        return pedido;
      });
      setTotalPedido(actualizarProducto);
    } else {
      setTotalPedido([
        ...totalPedido,
        {
          id: producto.id,
          cantidad: 1,
          precio: producto.price,
          name: producto.name,
          img: producto.img,
        },
      ]);
    }
  };

  return (
    <div
      className="container-fluid"
      style={{ marginLeft: "1%", marginRight: "1%", marginTop: 64 }}
    >
      <Carousel show={3}>
        {listaProductos.map((product, index) => (
          <div
            key={index}
            className="shadow-lg p-3 mb-5 bg-body rounded me-2 ms-2"
          >
            <div style={{ padding: 8 }}>
              <img
                src={product.img}
                alt="placeholder"
                style={{ width: "60%" }}
              />
              <h5>{product.name}</h5>
              <h5>{product.desc}</h5>
              <h5>${product.price}</h5>
              <button
                className="btn btn-warning"
                onClick={() => actualizarCarrito(product)}
              >
                {" "}
                <FontAwesomeIcon icon={faPlus} size="2x" color="white" />
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
