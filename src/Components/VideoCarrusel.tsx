import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const videos = [
    'https://www.youtube.com/embed/gp2grHiyrNU',
  'https://www.youtube.com/embed/VJL36TDoz00',
  'https://www.youtube.com/embed/jP_lTq7iQN4',
];

const VideoCarrusel = () => {
  const [current, setCurrent] = useState(0);

  const prevVideo = () => {
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-yellow-400">Técnicas que nos pueden ayudar</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Descubre cómo trabajar con técnicas efectivas.
        </p>

        <div className="relative w-full h-72 md:h-96 max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <iframe
            src={videos[current]}
            title={`Video ${current + 1}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Botones */}
          <button
            onClick={prevVideo}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextVideo}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoCarrusel;
