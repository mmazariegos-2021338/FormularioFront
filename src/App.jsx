import React, { Fragment } from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
import { CreateInscripcion } from "./components/CreateInscripcion";
import { Portada } from "./components/Portada";
import TablaEstudiante from "./components/TablaEstudiante";


function App() {

 
  
  return (
    <Fragment>
       <Routes>
       <Route> <Route path="/" element={<Portada/>} /> </Route>
        <Route path="/inscripcion" element={<CreateInscripcion/>}></Route>
        <Route path="/datos" element={<TablaEstudiante/>}></Route>
       </Routes>
     
  
    </Fragment>
   
  )
}

export default App
