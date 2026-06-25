import React from 'react';
import NavBar from './NavBar';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header
            id="Header"
            className="min-h-screen flex items-center relative overflow-hidden"
            style={{
                backgroundImage: "url('/header_img.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/80 z-0"></div>

            <NavBar />

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-32 text-white">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-2xl">

                    {/* MINI LABEL */}
                    <p className="text-xs tracking-[0.3em] text-white/50 uppercase mb-6">
                        Inmobiliaria Goldwing
                    </p>

                    {/* LÍNEA */}
                    <div className="w-16 h-[2px] bg-white/40 mb-6"></div>

                    {/* TÍTULO */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight">
                        Espacios que se sienten
                        <span className="block text-white/70 font-light">
                            como hogar desde el inicio
                        </span>
                    </h1>

                    {/* TEXTO */}
                    <p className="mt-6 text-white/70 text-sm md:text-base leading-relaxed max-w-lg">
                        Diseñamos propiedades pensadas para vivir con equilibrio, funcionalidad y estilo. Sin exceso. Sin complicaciones.
                    </p>

                    {/* BOTONES */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">

                        <a
                            href="#Proyectos"
                            className="px-7 py-3 border border-white/30 text-white text-sm tracking-wide hover:bg-white hover:text-black transition">
                            Ver proyectos
                        </a>

                        <a
                            href="#Contáctanos"
                            className="px-7 py-3 bg-white text-black text-sm tracking-wide hover:bg-white/80 transition shadow-lg">
                            Contactar
                        </a>

                    </div>

                </motion.div>

            </div>

        </header>
    );
};

export default Header;