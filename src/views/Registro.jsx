import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import nose from "../assets/img/dog.gif";

export default function Registro() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      Swal.fire("El email esta vacio, debe registrar los campos");
    } else {
      Swal.fire({
        title:
          "Su comentario u opinión ha sido enviada, nos contactaremos a la brevedad",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
        rgba(0,0,201,0.4)
        url("${nose}")
        left top
        no-repeat
      `,
      });
    }
  };

  return (
    <div className="form  text-white">
      <div className="d-flex justify-content-center">
        <form className="shadow p-3 mb-5 rounded" onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <legend>Contactanos</legend>

            <div className="correoForm d-block ">
              <label htmlFor="email">Email del Cliente</label>
              <input
                id="email"
                type="email"
                placeholder="Email del Cliente"
                className="border-2 w-full p-2 m-2 placeholder-stone-400 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="claveForm">
              <label htmlFor="email" className="block text-gray-700 uppercase">
                Comentario/Opinión
              </label>
              <textarea
                id="opinion"
                className="border-2 w-full p-2 m-2 placeholder-stone-400 rounded-md"
                placeholder="Escribe tu opinión"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </fieldset>
        </form>
        <div>
          <img
            className="img-registro"
            src="https://www.educaborras.com/wp-content/uploads/19293_02.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
