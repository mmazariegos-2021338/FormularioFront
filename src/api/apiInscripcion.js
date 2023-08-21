import axios from 'axios';

const URL = 'http://localhost:8080/api/inscripcion'; 

export const apiInscripcion = async (
  carnet,
  nombre,
  direccion,
  genero,
  telefono,
  fechaNacimiento,
  carrera,
  generoPoesia
) => {
  try {
    const response = await axios.post(`${URL}/inscripcion`, {
      carnet,
      nombre,
      direccion,
      genero,
      telefono,
      fechaNacimiento,
      carrera,
      generoPoesia
    });

    return response.data;
  } catch (error) {
    // Puedes manejar el error aquí
    console.error('Error en la solicitud API:', error);
    return null;
  }
};
export const ListaInscripcion = async (
  ) => {
    try {
      const response = await axios.get(`${URL}/datos`);
        console.log(response.data.listaInscripciones)
      return response.data.listaInscripciones;
    } catch (error) {
      // Puedes manejar el error aquí
      console.error('Error en la solicitud API:', error);
      return null;
    }

  }