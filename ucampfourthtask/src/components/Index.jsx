import { React, useState } from "react";
import {
  addDoc,
  collection,
} from "firebase/firestore/lite";
import Iframe from "react-iframe";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { dbConfig } from "../config/firebase";
import '../style/main.css'
import mainImage from '../images/elpezperuano.png'

export const Index = () => {
    const MySwal = withReactContent(Swal)

    const [cliente, setCliente] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');

    const handleFormCliente = (texto) => {
        setCliente(texto);
    };

    const handleFormCorreo = (texto) => {
        setCorreo(texto);
    };

    const handleFormTelefono = (texto) => {
        setTelefono(texto);
    };

    const handleFormFecha = (texto) => {
        setFecha(texto);
    };

    const handleFormHora = (texto) => {
        setHora(texto);
    };

    const guardarReserva = async () => {
        try {
        const reserva = {
            cliente,
            correo,
            telefono,
            fecha,
            hora,
        };
        const db = collection(dbConfig, "reservation");
        await addDoc(db, reserva);
        await MySwal.fire({
            title: <strong>¡Reserva Guardada!</strong>,
            html: <i>En breves recibiras un correo con la confirmación de tu reserva. muchas gracias por preferirnos</i>,
            icon: 'success'
        })
        } catch (error) {
        console.log("Hubo un error");
        console.log(error);
        }
    };

    const limpiarFormReserva = () => {
        setCliente('');
        setCorreo('');
        setTelefono('');
        setFecha('');
        setHora('');
    }

    const guardarReservaSubmit = (e) => {
        e.preventDefault();
        guardarReserva();
        limpiarFormReserva();
    };

  return (
        <>
            <div className="row mt-4 p-5 text-black rounded main-content">
                <div className='col-sm-6 col-xs-12 image-container'>
                    <img src={mainImage} alt="mainImage" />
                </div>
                <div className='col-sm-6 col-xs-12 information-container'>
                    <h3>En el pez peruano nos especializamos en la preparación de deliciosos potajes con ingredientes provinientes del mar</h3>
                    <h5>Recuerda que tenemos espacios para comer en mesa o para pedir adomicilio</h5>
                </div>
            </div>
            <div className="row mt-4 p-5 text-black rounded ">
                <div className='col-sm-6 col-xs-12 reserva-text-container'>
                    <h1>Para comer en el restaurante ¡Haz tu reserva!</h1>
                    <h5>llena el siguiente formulario de manera rapida y sencilla para reservar un espacio</h5>
                </div>
                <div className='col-sm-6 col-xs-12'>
                    <form id="form-reserva" onSubmit={guardarReservaSubmit}>
                        <label className="form-label">Nombres y apellidos</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => handleFormCliente(e.target.value)}
                            value={cliente}
                        />

                        <label className="form-label">Correo</label>
                        <input
                            type="email"
                            className="form-control"
                            onChange={(e) => handleFormCorreo(e.target.value)}
                            value={correo}
                        />

                        <label className="form-label">Teléfono</label>
                        <input
                            type="tel"
                            className="form-control"
                            onChange={(e) => handleFormTelefono(e.target.value)}
                            value={telefono}
                        />

                        <label className="form-label">Fecha</label>
                        <input
                            type="date"
                            className="form-control"
                            onChange={(e) => handleFormFecha(e.target.value)}
                            value={fecha}
                        /> 
                        
                        <label className="form-label">Hora</label>
                        <input
                            type="time"
                            className="form-control"
                            onChange={(e) => handleFormHora(e.target.value)}
                            value={hora}
                        />
                        <div className="submitButton">
                            <button id="form-submit" type="submit" className="btn btn-dark reservar-button">
                                Agregar Reserva
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
            <div className="row">
                <div className='col-sm-6 col-xs-12'>
                    <Iframe id="google-map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15603.184251968029!2d-77.0288968!3d-12.1261017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd12f72cb9467846!2sEl%20Pez%20On!5e0!3m2!1ses-419!2spe!4v1643343884739!5m2!1ses-419!2spe"
                        allowfullscreen=""
                        loading="lazy"
                    ></Iframe>
                </div>
                <div className='col-sm-6 col-xs-12 ubicanos-text-container'>
                    <h1>Una vez tengas tu reserva hecha ¡Encuentranos!</h1>
                    <h5>usa el siguiente mapa para encontrarnos</h5>
                </div>
            </div>
        </>
    );
};
