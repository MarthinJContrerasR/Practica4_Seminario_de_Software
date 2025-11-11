import { useState } from 'react'
import './App.css'
import { Link, Routes, Route } from 'react-router'
import { BrowserRouter } from "react-router";
import { Usuarios } from './pages/ListaUsuarios';
import { Inicio } from './pages/Inicio';
import { Productos } from './pages/Productos';
import { Tiempo } from './Tiempo';
import { ConversorDivisa } from './Divisa'

function App() {
  return (
    <>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Seminario de Software</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
        <Link className="nav-link" to="/clientes">Clientes</Link>
        <Link className="nav-link" to="/divisa">Convertidor Divisa</Link>
        <Link className="nav-link" to="/productos">Productos</Link>
        {/* <Link className="nav-link" to="/acercade">Acerca De</Link> */}
        <Link className="nav-link" to="/tiempo">Tiempo</Link>
      </div>
    </div>
  </div>
</nav>
  <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/clientes' element={<Usuarios/> } />
        <Route path='/divisa' element={<ConversorDivisa/> } />
        <Route path='/productos' element={<Productos/> } />
        <Route path='/tiempo' element={<Tiempo/> } />
      </Routes>


{/* 
      <nav>
        <Link to={"/"}>Inicio</Link>
        <Link to={"/clientes"}>Clientes</Link>
        <Link to={"/productos"}>Productos</Link>
        <Link to={"/acercade"}>Acerca De</Link>
        <Link to={"/tiempo"}>Tiempo</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/clientes' element={<Usuarios/> } />
        <Route path='/productos' element={<Productos/> } />
      </Routes> */}

    </>
  )
}

export default App
