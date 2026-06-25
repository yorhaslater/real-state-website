import React from 'react'
import Header from './assets/components/Header'
import Acerca from './assets/components/Acerca'
import Proyectos from './assets/components/Proyectos'
import Testimonios from './assets/components/Testimonios'
import Contacto from './assets/components/Contacto'
import Footer from './assets/components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='relative w-full min-h-screen bg-[#f5f1eb]'>

      {/* Diseño del Fondo */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#e8dccb] rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#d6c5a3] rounded-full blur-[120px] opacity-50"></div>
      </div>

      {/* Contenido */}
      <div className='relative z-10'>
        <ToastContainer/>
        <Header />
        <Proyectos />
        <Acerca />
        <Testimonios />
        <Contacto />
        <Footer/>
      </div>

    </div>
  )
}
export default App