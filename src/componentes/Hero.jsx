import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div>
      <div className="p-5 text-center bg-image rounded-3 banner">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="ofertas">
            <FontAwesomeIcon
              icon={faCircleCheck}
              size="2x"
              className="text-hero"
            />
            <p>Envio Gratuito</p>
            <FontAwesomeIcon
              icon={faCircleCheck}
              size="2x"
              className="text-hero"
            />
            <p>Devolución Gratuita</p>
          </div>
          <div className="text-white" style={{ display: "flex" }}>
            <div className="text-nav">
              <h1 style={{ fontSize: "xxx-large" }}> Los Mejores Productos</h1>
              <h4 className="mb-3"> Para tus mascotas!</h4>
            </div>
            <div>
              <img
                className="imagenHero"
                src={
                  "https://st2.depositphotos.com/1606449/7516/i/450/depositphotos_75163555-stock-photo-cats-and-dogs-hanging-paws.jpg"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
