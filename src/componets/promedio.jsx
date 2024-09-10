import Swal from "sweetalert2";
import { useState } from "react";

function Promedio() {
  const [primerParcial, setPrimerParcial] = useState(0);
  const [segundoParcial, setSegundoParcial] = useState(0);
  const [tercerParcial, setTercerParcial] = useState(0);
  const [notaFinal, setNotaFinal] = useState(0);

  return (
    <div className="container mt-2 contenedorPrincipal shadow bg-body-tertiary rounded">
      <div className="row">
        <h3>Calculadora de Nota Final</h3>
      </div>
      <div className="row mx-2">
        <div className="col-lg-4 col-sm-12">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Primer Parcial
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="30"
              value={primerParcial}
              onChange={(e) => setPrimerParcial(parseFloat(e.target.value))}
            />
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Segundo Parcial
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="30"
              value={segundoParcial}
              onChange={(e) => setSegundoParcial(parseFloat(e.target.value))}
            />
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Tercer Parcial
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="40"
              value={tercerParcial}
              onChange={(e) => setTercerParcial(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5 col-sm-12 mx-auto">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Nota Final
            </span>
            <input
              type="number"
              className="form-control"
              readOnly
              value={notaFinal}
              onChange={(e) => setNotaFinal(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-12 d-grid mx-auto">
          <button
            type="button"
            class="btn btn-success mb-3"
            onClick={(e) => calcular()}
            
          >
            Calcular
          </button>
          <button
            type="button"
            class="btn btn-danger mb-3"
            onClick={(e) => limpiar()}
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );

  function calcular() {
    
    setNotaFinal(primerParcial + segundoParcial + tercerParcial);
    if (primerParcial > 30 || segundoParcial > 30) {
      Swal.fire("Notas del primer y segundo parcial no pueden ser mayor a 30");
      return;
    } else if (tercerParcial > 40) {
      Swal.fire("Nota del Tercer Parcial no puede ser mayor a 40");
      return;
    } else {
    }

    mensajeNota(primerParcial + segundoParcial + tercerParcial);
  }

  function limpiar() {
    setPrimerParcial(0);
    setSegundoParcial(0);
    setTercerParcial(0);
    setNotaFinal(0);
  }

  function mensajeNota(final) {
    if (final < 60) {
      Swal.fire({
        title: "Reprobado",
        icon: "error",
      });
    } else if (final >= 60 && final < 80) {
      Swal.fire({
        title: "Bueno",
        icon: "success",
      });
    } else if (final >= 80 && final < 90) {
      Swal.fire({
        title: "Muy Bueno",
        icon: "success",
      });
    } else if (final >= 90 && final <= 100) {
      Swal.fire({
        title: "Sobresaliente",
        icon: "success",
      });
    }
  }
}

export default Promedio;
