import React, { Fragment } from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
import { CreateInscripcion } from "./components/CreateInscripcion";
import { Portada } from "./components/Portada";


function App() {
  
  return (
    <Fragment>
       <Routes>
       <Route> <Route path="/" element={<Portada/>} /> </Route>
    <Route path="/inscripcion" element={<CreateInscripcion/>}></Route>
       </Routes>
     
  
    </Fragment>
   
  )
}

export default App
