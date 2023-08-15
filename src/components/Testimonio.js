import React from 'react';
import '../css/Testimonio.css'

function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <img
                className='imagen-testimonio'
                src={require(`../images/${props.imagen}.jpg`)}
                alt='Fotografia'
            />

            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><strong>{props.nombre} en {props.pais}</strong></p>
                <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
                <p className='texto-testimonio'>{props.testimonio}</p>
            </div>
        </div>
    );
}

export default Testimonio;