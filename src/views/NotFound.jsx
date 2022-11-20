import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div>
          <img
            src="https://us.123rf.com/450wm/monicaclick/monicaclick1705/monicaclick170500023/79069305-perro-pug-con-amarillo-casco-y-cono-de-seguridad-constructor-y-error-404-y-callej%C3%B3n-sin-salida-en-po.jpg?ver=6"
            width={900}
            alt="Not_Found"
          />
          <h2 className="text-center m-5 detalle-font">Página no encotrada</h2>
        </div>
        <div>
          <div>
            <Link to={"/"} className="btn btn-primary ms-5">
              🔙 Volver atrás
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
