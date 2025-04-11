const services = [
  {
    title: 'Fontanería',
    icon: '🔧',
    description:
      'Sustitución de grifos, reparación de cisternas, impermeabilización, purgar radiadores, reparación de fugas.',
  },
  {
    title: 'Electricidad',
    icon: '💡',
    description:
      'Instalación de lámparas y enchufes, solución de averías, cambio de mecanismos y ubicación de tomas eléctricas.',
  },
  {
    title: 'Pintura',
    icon: '🎨',
    description:
      'Pintamos interiores y exteriores. Temple, plástica, acrílica, antioxidante. Aplicaciones en techos, paredes y más.',
  },
  {
    title: 'Persianas',
    icon: '🪟',
    description:
      'Reparación de persianas atascadas, cambio de cuerdas, recogedores, lamas rotas y flejes.',
  },
  {
    title: 'Cerrajería',
    icon: '🔐',
    description:
      'Sustitución e instalación de cerraduras, puertas metálicas, muelles y soldaduras de bisagras.',
  },
  {
    title: 'Bricolaje',
    icon: '🛠️',
    description:
      'Montaje de muebles, soportes, colgar cuadros, cortinas, sellado, tiradores y accesorios.',
  },
  {
    title: 'Reparaciones',
    icon: '🧰',
    description:
      'Desde arreglos de muebles hasta mantenimiento general del hogar. Práctico, rápido y profesional.',
  }
];

const Services = () => {
  return (
    <section className="py-20 px-6 bg-white/85">
      <div className="max-w-6xl mx-auto text-center">
      
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Nuestros Servicios</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-50 hover:bg-white border border-transparent hover:border-blue-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
