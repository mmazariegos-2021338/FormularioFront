import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usaclogo from '../assets/USAC_Logo_University_of_San_Carlos_of_Guatemala (2).svg';
import Drama from '../assets/Drama-icon.svg.png';
import LITTLE from '../assets/Total_Drama_Action.webp'
import '../App.css'
import { apiInscripcion } from '../api/apiInscripcion';


export const CreateInscripcion = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        carnet: "",
        nombre: "",
        direccion: "",
        genero: "",
        telefono: "",
        fechaNacimiento: "",
        carrera: "",
        generoPoesia: ""
    });

    // Resto del código del componente...

    // Dentro de la función handleInputChange
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Dentro de la función handleSubmit
const handleSubmit = async (event) => {
  event.preventDefault();
  // ... Otras acciones previas al envío

  // Llamar a la API y manejar la respuesta
  const response = await apiInscripcion(
    formData.carnet,
    formData.nombre,
    formData.direccion,
    formData.genero,
    formData.telefono,
    formData.fechaNacimiento,
    formData.carrera,
    formData.generoPoesia
  );

  if (response) {
    // Manejar la respuesta exitosa
    console.log('Inscripción exitosa:', response);
  } else {
    // Manejar el error
    console.log('Hubo un error al inscribirse');
  }
};
   
    return (

        
  
        <div className="container">
            <div className="row justify-content-center">
                
    <div>
   
    
  
  
  </div>

 
    
    <div>
    <a target="_blank">
      <img src={usaclogo}  className="logo react"/>
    </a>

    
  
  
  </div>
  
 
                <div className="col-md-6">
                    <h1 className="mt-4 mb-4">Formulario de Inscripción</h1>
                    <form onSubmit={handleSubmit}>
                    <hr></hr>
                    <div className="mb-3">
                            <label htmlFor="carnet" className="form-label">Carnet</label>
                            <input type="text" className="form-input" id="carnet" name="carnet" value={formData.carnet} onChange={handleInputChange} maxLength={6} />
                        </div>
                        <hr></hr>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre completo</label>
                            <input type="text" className="form-input" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} />
                        </div>
                        <hr></hr>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Dirección</label>
                            <input type="text" className="form-input" id="direccion" name="direccion" value={formData.direccion} onChange={handleInputChange} />
                        </div>
                        <hr></hr>
                        <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input type="text" className="form-input" id="telefono" name="telefono" value={formData.telefono} onChange={handleInputChange} />
                    </div>
                    <hr></hr>
                        <div className="mb-3">
                            <label htmlFor="genero" className="form-label">Género</label>
                            <select className="form-select" id="genero" name="genero" value={formData.genero} onChange={handleInputChange}>
                                <option value="">Seleccionar</option>
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                            </select>
                        </div>
                        <hr></hr>
                        <div className="mb-3">
                            <label htmlFor="fechaNacimiento" className="form-label">Fecha de nacimiento</label>
                            <input type="date" className="form-input" id="fechaNacimiento" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleInputChange} />
                        </div>
                        <hr></hr>
                        <div className="mb-3">
                            <label htmlFor="carrera" className="form-label">Carrera del estudiante</label>
                            <input type="text" className="form-input" id="carrera" name="carrera" value={formData.carrera} onChange={handleInputChange} />
                        </div>
                        <hr></hr>
                        <div className="mb-3">
                            <label htmlFor="generoPoesia" className="form-label">Género de poesía</label>
                            <select className="form-select" id="generoPoesia" name="generoPoesia" value={formData.generoPoesia} onChange={handleInputChange}>
                                <option value="">Seleccionar</option>
                                <option value="lírica">lírica</option>
                                <option value="épica">épica</option>
                                <option value="dramática">dramática</option>
                            </select>
                        </div>
                       
                      
                    
                                            <hr></hr>
                                            <div className="center-button-container">
                                        <button type="submit" className="form-button">
                                            Enviar
                                        </button>
                                        </div>
                                        

                       
                    </form>
                    <h1>ESCUELA DE ARTES VISUALES  USAC 2023 © </h1>
  
 
                </div>
            </div>
        </div>
    );
};


