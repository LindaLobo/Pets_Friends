import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faHeadphones,
  faWallet,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Historia() {
  return (
    <div className="d-flex">
      <img
        className="imagenDetalle"
        style={{ width: "50%" }}
        src={
          "https://estaticosgn-cdn.deia.eus/clip/87e44446-e858-46d3-b313-9939182e8b0c_16-9-discover-aspect-ratio_default_0.jpg"
        }
        alt=""
      />
      <div className="d-flex flex-column container shadow p-3 mb-5 bg-body rounded">
        <div>
          <h1 className="conocenos"> Por qué escogernos</h1>
          <h4 className="conocenos-texto">
            {" "}
            Toda mascota es grandiosa. Pero resulta que algunos de ellos también
            pueden ser GENIOS. Según un nuevo estudios, algunas mascotas pueden
            aprender hasta 12 nuevos nombres de juguetes en solo una semana y
            recorda los nuevos nombres durtante al menos dos meses. NOSOTROS
            TENEMOS LOS MEJORES JUGUETES para que ellos aprendan
          </h4>
        </div>
        <div>
          <div className="soportes d-flex justify-content-between align-items-center me-2">
            <div className="text-center">
              <FontAwesomeIcon icon={faCar} size="2x" className="text-hero" />
              <p>Envio Gratuito</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon
                icon={faHeadphones}
                size="2x"
                className="text-hero"
              />
              <p>Soporte de Calidad</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon
                icon={faWallet}
                size="2x"
                className="text-hero"
              />
              <p>Envio Gratuito</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faPlus} size="2x" className="text-hero" />
              <p>Devolución Gratuita</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
