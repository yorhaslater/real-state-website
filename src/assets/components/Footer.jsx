import React from 'react'
import { assets } from '../assets'

const Footer = () => {
    return (
        <footer
            className='bg-gray-900 text-neutral-400 px-6 md:px-20 lg:px-32 pt-14 pb-6 animate-fade-up'
            id='Footer'
        >

            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>

                {/* Logo */}
                <div className='transition-all duration-500 hover:-translate-y-1'>

                    <img
                        src={assets.logo}
                        alt="logo"
                        className='h-17 mb-1 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500'
                    />

                    <p className='text-sm leading-relaxed'>
                        Encuentra propiedades exclusivas con un enfoque moderno,
                        claro y confiable. Simplificamos el proceso para que
                        tomes mejores decisiones.
                    </p>

                </div>

                {/* Navegación */}
                <div className='transition-all duration-500 hover:-translate-y-1'>

                    <h3 className='text-white text-sm font-semibold mb-4 tracking-wide'>
                        NAVEGACIÓN
                    </h3>

                    <ul className='space-y-2 text-sm'>

                        <li>
                            <a
                                href="#Header"
                                className='hover:text-white transition-all duration-300 ease-in-out hover:translate-x-1 inline-block'
                            >
                                Inicio
                            </a>
                        </li>

                        <li>
                            <a
                                href="#Acerca"
                                className='hover:text-white transition-all duration-300 ease-in-out hover:translate-x-1 inline-block'
                            >
                                Acerca
                            </a>
                        </li>

                        <li>
                            <a
                                href="#Proyectos"
                                className='hover:text-white transition-all duration-300 ease-in-out hover:translate-x-1 inline-block'
                            >
                                Proyectos
                            </a>
                        </li>

                        <li>
                            <a
                                href="#Contacto"
                                className='hover:text-white transition-all duration-300 ease-in-out hover:translate-x-1 inline-block'
                            >
                                Contacto
                            </a>
                        </li>

                    </ul>

                </div>

                {/* Suscripción */}
                <div className='transition-all duration-500 hover:-translate-y-1'>

                    <h3 className='text-white text-sm font-semibold mb-4 tracking-wide'>
                        SUSCRIPCIÓN
                    </h3>

                    <p className='text-sm mb-4'>
                        Recibe nuevas propiedades y oportunidades.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-2'>

                        <input
                            type="email"
                            placeholder='Tu correo'
                            className='px-3 py-2 text-sm bg-neutral-800 border border-neutral-700 rounded outline-none w-full
                            focus:border-neutral-500 focus:ring-2 focus:ring-neutral-600
                            hover:border-neutral-500 transition-all duration-300'
                        />

                        <button
                            className='px-4 py-2 text-sm bg-white text-black rounded
                            hover:bg-neutral-200 hover:-translate-y-1
                            active:translate-y-0 shadow-md hover:shadow-lg
                            transition-all duration-300 ease-in-out'
                        >
                            Enviar
                        </button>

                    </div>

                </div>

            </div>

            <div className='border-t border-neutral-800 mt-10 pt-4 text-center text-xs text-neutral-500'>
                © 2026 Goldwing. Todos los derechos reservados.
            </div>

        </footer>
    )
}

export default Footer