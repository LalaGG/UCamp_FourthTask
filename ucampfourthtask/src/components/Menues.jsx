import React from "react";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
} from "firebase/firestore/lite";
import { dbConfig } from "../config/firebase";

export const Menues = () => {

    const [listadoPlatillos, setListaPlatillos] = useState([]);

    const obtenerPlatos = async () => {
        try {
        const db = collection(dbConfig, "dishes");
        const listadoDePlatos = await getDocs(db);
        const listadoFinal = listadoDePlatos.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
        setListaPlatillos(listadoFinal);
        } catch (error) {
        console.log("Hubo un error!");
        console.log(error);
        }
    };

    useEffect(() => {
        obtenerPlatos();
    }, []);

  return (
    <>
      <div id="card-content">
        {listadoPlatillos.map((item) => (
          <div key={item.id} className="card">
            <div className="card-body">
              <h5 className="card-title"> {item.nombre} || <span className="card-text">Precio:</span> S/.{item.precio}</h5>
              <h6 className="card-text"> {item.descripcion}</h6>
              <img className="card-image" src={item.url} />

            </div>
          </div>
        ))}
      </div>
    </>
  );
};
