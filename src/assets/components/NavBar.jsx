import React, { useEffect, useState } from 'react';
import { assets } from '../assets';

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [inHeader, setInHeader] = useState(true);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [showMobileMenu]);

  useEffect(() => {
    const header = document.getElementById('Header');
    if (!header) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInHeader(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const links = [
    { name: "Inicio", href: "#Header" },
    { name: "Proyectos", href: "#Proyectos" },
    { name: "Acerca", href: "#Acerca" },
    { name: "Testimonios", href: "#Testimonios" },
    { name: "Contacto", href: "#Contacto" }
  ];

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50">

        <div
          className={`
            w-full transition-all duration-300
            ${
              inHeader
                ? "bg-transparent"
                : "bg-black/40 border-b border-white/10"
            }`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">

            {/* Logo */}
            <img
              src={assets.logo}
              className="w-28 md:w-32 object-contain"
              alt="Logo"/>

            {/* Links desktop */}
            <ul className="hidden md:flex gap-10 text-white text-sm tracking-wide">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group">
                  <span className="opacity-80 group-hover:opacity-100 transition">
                    {link.name}
                  </span>

                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}

            </ul>

            {/* Botón contacto */}
            <a
              href="#Contacto"
              className="hidden md:block border border-white/20 px-5 py-2 text-sm rounded-full text-white hover:bg-white hover:text-black transition">
              Contacto
            </a>

            {/* Mobile icon */}
            <img
              onClick={() => setShowMobileMenu(true)}
              src={assets.menu_icon}
              className="md:hidden w-6 cursor-pointer"
              alt="Menu"
            />

          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {showMobileMenu && (
        <div
          onClick={() => setShowMobileMenu(false)}
          className="fixed inset-0 bg-black/60 z-[998]"
        ></div>
      )}

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden fixed top-0 right-0 h-full w-[80%] max-w-sm
          bg-black/95 backdrop-blur-xl text-white
          transform transition-transform duration-300
          z-[999]
          ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}
        `}>

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10">

          <span className="text-xs tracking-[0.3em] text-white/60 uppercase">
            Menú
          </span>

          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-5 cursor-pointer"
            alt="Cerrar"/>

        </div>

        {/* Links */}
        <ul className="flex flex-col gap-8 p-6 mt-6 text-lg">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setShowMobileMenu(false)}
              className="border-b border-white/10 pb-4 hover:opacity-70 transition">
              {link.name}
            </a>
          ))}

        </ul>

        {/* Botón */}
        <div className="p-6 mt-auto">

          <a
            href="#Contacto"
            onClick={() => setShowMobileMenu(false)}
            className="w-full block text-center py-3 border border-white/20 text-white text-sm rounded-md hover:bg-white hover:text-black transition">
            Contactar
          </a>

        </div>
      </div>
    </>
  );
};

export default NavBar;