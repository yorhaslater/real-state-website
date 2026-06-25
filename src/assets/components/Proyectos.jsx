import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { assets, proyectosData } from '../assets';

const Proyectos = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [cardsToShow, setCardsToShow] = React.useState(1);

    useEffect(() => {
        const update = () => {
            setCardsToShow(window.innerWidth >= 1024 ? 3 : 1);
        };

        update();
        window.addEventListener('resize', update);

        return () => window.removeEventListener('resize', update);
    }, []);

    const maxIndex = Math.max(0, proyectosData.length - cardsToShow);

    return (
        <section
            id="Proyectos"
            className="container mx-auto px-4 md:px-10 lg:px-20 py-10 overflow-hidden">

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-6">

                <h1 className="text-xl md:text-3xl font-semibold text-gray-900">
                    Proyectos{' '}
                    <span className="text-gray-500 font-light">
                        completados
                    </span>
                </h1>

                {/* Línea decorativa */}
                <div className="w-10 h-px bg-gray-300 mt-2"></div>

                <p className="text-xs md:text-sm text-gray-500 mt-3 max-w-xs">
                    Espacios diseñados para durar, no solo para impresionar.
                </p>

            </motion.div>

            {/* CONTROLES */}
            <div className="flex justify-between items-center mb-4">

                <p className="text-xs text-gray-400">
                    {currentIndex + 1} / {proyectosData.length}
                </p>

                <div className="flex gap-2">

                    {/* Botón de Flecha (Anterior) */}
                    <button
                        onClick={() =>
                            setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1)
                        }
                        className="p-2 border border-gray-200 rounded active:scale-90 transition">
                        <img src={assets.left_arrow} alt="Anterior" />
                    </button>
                    
                    {/* Botón de Flecha (Siguiente) */}
                    <button
                        onClick={() =>
                            setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1)
                        }
                        className="p-2 border border-gray-200 rounded active:scale-90 transition">
                        <img src={assets.right_arrow} alt="Siguiente" />
                    </button>

                </div>

            </div>

            {/* DESLIZADOR */}
            <div className="overflow-hidden">

                <div
                    className="flex gap-3 transition-transform duration-700 ease-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                    }}>

                    {proyectosData.map((proyecto, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0"
                            style={{ width: `${100 / cardsToShow}%` }}>

                            {/* TARJETAS */}
                            <div className="relative rounded-lg overflow-hidden group">

                                <img
                                    src={proyecto.image}
                                    alt={proyecto.title}
                                    className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105"/>

                                {/* overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80 group-hover:opacity-100 transition"></div>

                                {/* info */}
                                <div className="absolute bottom-0 p-3 text-white">

                                    <h2 className="text-sm font-medium">
                                        {proyecto.title}
                                    </h2>

                                    <p className="text-xs text-white/80">
                                        {proyecto.location}
                                    </p>

                                    <p className="text-[10px] text-white/70">
                                        {proyecto.price}
                                    </p>

                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Proyectos;