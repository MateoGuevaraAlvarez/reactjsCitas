import React from "react";
import { PropTypes } from "prop-types";
const Formulario = (props) => {


  return (

    <div>

      <h2>Crear mi Cita</h2>

      <div >
        <label>Nombre Mascota</label>
        <input type="text" id="Mascota" className="u-full-width" placeholder="Nombre Mascota"></input>
        <label>Nombre Dueño</label>
        <input type="text" id="Dueño" className="u-full-width" placeholder="Nombre dueño de la mascota"></input>
        <label>Fecha</label>
        <input type="date" id="Fecha" className="u-full-width"></input>
        <label>hora</label>
        <input type="time" id="Hora" className="u-full-width"></input>
        <label>Sintomas</label>
        <textarea id="Sintomas" className="u-full-width"></textarea>
        <button type="button" className="u-full-width button-primary" onClick={() => props.setCitas([...props.citas, { Mascota: document.getElementById("Mascota").value, Dueño: document.getElementById("Dueño").value, Fecha: document.getElementById("Fecha").value, Hora: document.getElementById("Hora").value, Sintomas: document.getElementById("Sintomas").value }])}>Agregar Cita</button>
      </div>

    </div>

  );  
}
Formulario.propTypes = {
  citas: PropTypes.array.isRequired,
  setCitas: PropTypes.func.isRequired
}


export default Formulario;


