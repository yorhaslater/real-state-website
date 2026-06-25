import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets'

const Acerca = () => {
    return (
        <section
            id="Acerca"
            className="w-full max-w-6xl mx-auto px-6 md:px-10 py-20">

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="max-w-2xl mb-16">

                <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
                    Acerca de nosotros
                </p>

                {/* LÍNEA */}
                <div className="w-15 h-px bg-gray-300 mt-2"></div>
                
                <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mt-3">
                    Espacios pensados para
                    <span className="block text-gray-400 font-light">
                        ser vividos, no solo vistos
                    </span>
                </h2>
            </motion.div>

            {/* CONTENIDO */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* IMAGEN GRANDE (YA ERA HORA) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative">
                    <img
                        src={assets.brand_img}
                        alt="Acerca de nosotros"
                        className="w-full h-[420px] object-cover rounded-xl"/>

                    {/* overlay sutil */}
                    <div className="absolute inset-0 rounded-xl border border-black/10"></div>
                </motion.div>

                {/* TEXTO */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-8">

                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        Diseñamos propiedades que no solo cumplen una función, sino que se integran de forma natural en la vida de quienes las habitan.
                    </p>

                    {/* STATS */}
                    <div className="flex gap-10 flex-wrap">

                        <div>
                            <p className="text-2xl font-semibold text-gray-900">10+</p>
                            <p className="text-xs text-gray-400">Años</p>
                        </div>

                        <div>
                            <p className="text-2xl font-semibold text-gray-900">12+</p>
                            <p className="text-xs text-gray-400">Proyectos</p>
                        </div>

                        <div>
                            <p className="text-2xl font-semibold text-gray-900">20+</p>
                            <p className="text-xs text-gray-400">Millones ft²</p>
                        </div>

                    </div>

                    {/* BOTÓN */}
                    <button className="mt-4 px-6 py-3 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-700 transition">
                        Conocer más
                    </button>

                </motion.div>
            </div>
        </section>
    )
}

export default Acerca