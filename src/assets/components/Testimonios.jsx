import React from 'react'
import { assets, testimoniosData } from '../assets'

const Testimonios = () => {

    return (
        <section
            id='Testimonios'
            className='w-full py-16 px-6 lg:px-32 bg-[#f8f7f5]'>

            {/* Animación */}
            <style>
                {`
                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(25px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .fadeUp {
                    animation: fadeUp 0.8s ease forwards;
                }
                `}
            </style>

            {/* Título */}
            <div className='text-center mb-16'>

                {/* Subtítulo */}
                <p className='text-xs tracking-widest text-gray-400 uppercase mb-3'>
                    Testimonios
                </p>

                {/* Título principal */}
                <h1 className='text-3xl sm:text-4xl font-semibold text-gray-800'>
                    Lo que dicen nuestros clientes
                </h1>

                {/* Línea decorativa */}
                <div className='w-12 h-[1px] bg-gray-300 mx-auto my-5'></div>

                {/* Descripción */}
                <p className='text-gray-500 max-w-md mx-auto text-sm leading-relaxed'>
                    Experiencias reales de personas que confiaron en nosotros para encontrar su hogar ideal.
                </p>

            </div>

            {/* Cards */}
            <div className='flex flex-wrap justify-center gap-8'>

                {testimoniosData.map((testimonio, index) => (

                    <div
                        key={index}
                        className='max-w-[320px] bg-white rounded-xl p-8 text-center
                        shadow-md
                        hover:shadow-2xl hover:-translate-y-2
                        transition-all duration-500 ease-out
                        opacity-0 fadeUp'

                        style={{ animationDelay: `${index * 0.2}s` }}>

                        {/* Imagen */}
                        <img
                            className='w-20 h-20 object-cover rounded-full mx-auto mb-4 border border-gray-200'
                            src={testimonio.image}
                            alt={testimonio.name}
                        />

                        {/* Nombre */}
                        <h2 className='text-lg font-medium text-gray-800'>
                            {testimonio.name}
                        </h2>

                        {/* Cargo */}
                        <p className='text-sm text-gray-400 mb-3'>
                            {testimonio.title}
                        </p>

                        {/* Estrellas */}
                        <div className='flex justify-center gap-1 mb-4'>
                            {Array.from({ length: testimonio.rating }).map((_, i) => (
                                <img
                                    key={i}
                                    src={assets.star_icon}
                                    className='w-4 h-4 opacity-80'
                                    alt='star' 
                                />
                            ))}
                        </div>

                        {/* Texto */}
                        <p className='text-gray-600 text-sm leading-relaxed'>
                            "{testimonio.text}"
                        </p>

                    </div>
                ))}
            </div>

        </section>
    )
}

export default Testimonios