import logo from './logo.png'
import cross_icon from './cross_icon.webp'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'

import header_img from './header_img.png'
import brand_img from './brand_img.png'

import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'

import profile_img_1 from './profile_img_1.jpg'
import profile_img_2 from './profile_img_2.jpg'
import profile_img_3 from './profile_img_3.png'

/* =========================
   RECURSOS (ASSETS UI)
========================= */
export const assets = {
  logo,
  cross_icon,
  menu_icon,
  star_icon,
  header_img,
  brand_img,
  left_arrow,
  right_arrow,
}

/* =========================
   PROYECTOS INMOBILIARIOS
========================= */
export const proyectosData = [
  {
    title: "Skyline Haven",
    price: "$250,000",
    location: "California",
    image: project_img_1
  },
  {
    title: "Vista Verde",
    price: "$250,000",
    location: "San Francisco",
    image: project_img_2
  },
  {
    title: "Serenity Suites",
    price: "$250,000",
    location: "Chicago",
    image: project_img_3
  },
  {
    title: "Central Square",
    price: "$250,000",
    location: "Los Angeles",
    image: project_img_4
  },
  {
    title: "Oak Residence",
    price: "$250,000",
    location: "San Francisco",
    image: project_img_5
  },
  {
    title: "Aurora Heights",
    price: "$250,000",
    location: "Chicago",
    image: project_img_6
  },
]

/* =========================
   TESTIMONIOS (CLIENTES)
========================= */
export const testimoniosData = [
  {
    name: "Billie Eilish",
    title: "Cantante y compositora",
    image: profile_img_1,
    alt: "Retrato de Billie Eilish",
    rating: 5,
    text: "No esperaba que todo fuera tan directo. Normalmente estos procesos son agotadores, pero aquí fue simple. Sentí que entendían lo que quería sin hacerme repetirlo diez veces."
  },
  {
    name: "Tyron González",
    title: "Artista musical y productor",
    image: profile_img_2,
    alt: "Retrato de Tyron González",
    rating: 4,
    text: "Soy exigente con los espacios. Si no me transmite algo, no funciona. Aquí no tuve que explicar demasiado, ya habían captado la idea desde el inicio."
  },
  {
    name: "Alexandra Trúsova",
    title: "Atleta de patinaje artístico",
    image: profile_img_3,
    alt: "Retrato de Alexandra Trúsova",
    rating: 5,
    text: "Necesitaba un proceso claro y sin distracciones. Todo fue ordenado, rápido y sin complicaciones innecesarias. Eso es lo que más valoro."
  }
]