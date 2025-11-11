import './App.css'
import { Link, Routes, Route } from 'react-router'
import { Usuarios } from './pages/ListaUsuarios';
import { Inicio } from './pages/Inicio';
import { Productos } from './pages/Productos';
import { Tiempo } from './Tiempo';
import { ConversorDivisa } from './Divisa'

function App() {
  return (
    <div className="app-container">
      {/* Navbar centrado y responsive */}
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Seminario de Software</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <Link className="nav-link" to="/">Inicio</Link>
              <Link className="nav-link" to="/clientes">Clientes</Link>
              <Link className="nav-link" to="/divisa">Convertidor Divisa</Link>
              <Link className="nav-link" to="/productos">Productos</Link>
              <Link className="nav-link" to="/tiempo">Tiempo</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/clientes' element={<Usuarios/> } />
          <Route path='/divisa' element={<ConversorDivisa/> } />
          <Route path='/productos' element={<Productos/> } />
          <Route path='/tiempo' element={<Tiempo/> } />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer-custom">
        <div className="container-fluid">
          <p>SEMINARIO-TALLER DE SOFTWARE - Todos los Derechos reservados - Marthin Contreras</p>
        </div>
      </footer>
    </div>
  )
}

export default App