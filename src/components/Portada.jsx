import React from 'react'
import usaclogo from '../assets/USAC_Logo_University_of_San_Carlos_of_Guatemala (2).svg';
import '../App.css'

export const Portada = () => {
  return (
    <>

    <div>
    <a target="_blank">
      <img src={usaclogo}  className="logo react"/>
    </a>
  
  
  </div>
  

  <div class="d-grid gap-5" col-12>
  
 
  <h1>Evento de Poesía 2023</h1>
  <button class="btn btn-primary" type="button">LLENAR EL SIGUIENTE FORMULARIO.</button>
</div>
</>
  )
}
