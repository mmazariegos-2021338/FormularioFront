import React, { useEffect, useState } from "react";
import { ListaInscripcion, apiInscripcion } from "../api/apiInscripcion";


 const TablaEstudiantes = () => {
  const [listEstudiantes, setListEstudiantes] = useState([]);

  const viewEstudiantesList = async () => {
    try {
      const response = await ListaInscripcion();
      setListEstudiantes(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    viewEstudiantesList();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div>
            <strong className="titulo">
              Lista de Estudiantes Inscritos
            </strong>
          </div>
          {listEstudiantes.length === 0 ? (
            <h1 className="m-5 p-5">No hay datos de estudiantes</h1>
          ) : (
            <table className="table col-12">
              <thead>
                <tr>
                  <th scope="col">Carnet</th>
                  <th scope="col">Nombre completo</th>
                  <th scope="col">Dirección</th>
                  <th scope="col">Género</th>
                  <th scope="col">Teléfono</th>
                  <th scope="col">Fecha de nacimiento</th>
                  <th scope="col">Carrera</th>
                  <th scope="col">Género de poesía</th>
                </tr>
              </thead>
              <tbody>
                {listEstudiantes.map((estudiante) => (
                  <tr key={estudiante.carnet}>
                    <th scope="row">{estudiante.carnet}</th>
                    <td>{estudiante.nombre}</td>
                    <td>{estudiante.direccion}</td>
                    <td>{estudiante.genero}</td>
                    <td>{estudiante.telefono}</td>
                    <td>{estudiante.fechaNacimiento}</td>
                    <td>{estudiante.carrera}</td>
                    <td>{estudiante.generoPoesia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default TablaEstudiantes;