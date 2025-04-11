import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import fondoServicios from '../assets/images/fondo-servicios.png';
import VideoCarrusel from '../Components/VideoCarrusel'; // Importá tu carrusel de videos
import img1 from '../assets/images/1img.png'
import img2 from '../assets/images/2img.png'
import img3 from '../assets/images/3img.png'
import img4 from '../assets/images/4img.png'

const Home = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    img1,
    img2,
    img3,
    img4
  ];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const navItem = document.querySelector('a[href="/opiniones"]');
    if (navItem) {
      navItem.textContent = 'Presupuesto';
      navItem.setAttribute('href', '/');
    }
  }, []);

  return (
    <>
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-zoom"
          style={{ backgroundImage: `url(${fondoServicios})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-white animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow">
            Solucionamos tus problemas del hogar
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Fontanería, electricidad, pintura y más — todo en un solo lugar. Profesionalismo, rapidez y calidad a tu alcance.
          </p>
        </div>
      </section>

      <VideoCarrusel />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Trabajos realizados</h2>
          <div className="relative w-full h-60 sm:h-72 overflow-hidden rounded-xl shadow-lg">
            <img
              src={images[current]}
              alt={`Trabajo ${current + 1}`}
              className="w-full h-full object-contain transition duration-500 ease-in-out"
            />
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Home;
