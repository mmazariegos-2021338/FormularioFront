import React from 'react'
import usaclogo from '../assets/USAC_Logo_University_of_San_Carlos_of_Guatemala (2).svg';
import Drama from '../assets/Drama-icon.svg.png';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css'


export const Portada = () => {
    const navigate = useNavigate();
  return (
    <>

    <div>
    <a target="_blank">
      <img src={usaclogo}  className="logo react"/>
    </a>
  
  
  </div>
  <div>
    <a target="_blank">
      <img src={Drama}  className="logo react"/>
    </a>
  
  
  </div>

  <div className="d-grid gap-5" >
  
 
  <h1>Evento de Poesía 2023</h1>
  <button className="btn btn-primary" type="button" onClick={() => navigate("/inscripcion")}>LLENAR EL SIGUIENTE FORMULARIO.</button>
</div>
</>
  )
}
