const Footer = () => {
  return (
    <footer className="bg-black/80 text-white py-10 backdrop-blur-md shadow-inner w-full mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 min-h-[120px]">
        <p className="text-center md:text-left text-sm text-gray-300">
          &copy; {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">Manitas El Pana</span>. Todos los derechos reservados.
        </p>
        <a
          href="mailto:info@manitaselpana.es"
          className="text-sm text-gray-300 hover:text-yellow-400 transition"
        >
          info@manitaselpana.es
        </a>
        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/34685425615"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium text-sm shadow transition-transform transform hover:scale-105"
          >
            WhatsApp Directo
          </a>
       </div>
      </div>
      
    </footer>
  );
};

export default Footer;
