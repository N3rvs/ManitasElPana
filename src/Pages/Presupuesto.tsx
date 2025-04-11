const fondoPresupuesto = "/images/fondo-presupuesto.png";

const Presupuesto = () => {
  return (
    <section
      className="relative text-white py-32 px-6 min-h-screen bg-black overflow-hidden"
    >
      {/* Fondo animado con zoom */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat bg-zoom"
        style={{
          backgroundImage: `url(${fondoPresupuesto})`,
        }}
      />

      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
        <h2 className="text-4xl font-extrabold mb-4 text-yellow-400">Pide tu Presupuesto</h2>
        <p className="text-lg text-gray-200 mb-4">
          ¿Tienes una reparación o trabajo puntual? Podemos darte presupuesto inmediato si es algo sencillo.
        </p>

        <p className="mb-10 text-gray-100">
          <span className="inline-flex items-center gap-2 font-semibold">
            📧 Email:
            <a
              href="mailto:info@manitaselpana.es"
              className="text-yellow-300 hover:text-yellow-400 underline transition"
            >
              info@manitaselpana.es
            </a>
          </span>
        </p>

        {/* Tarjeta de info */}
        <div className="bg-white/80 text-gray-900 rounded-2xl p-8 shadow-xl max-w-xl mx-auto backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-center mb-5">📅 Presupuestos en el día</h3>
          <p className="text-sm text-center text-gray-700 mb-6">
            Envíanos una lista con lo que necesitas a nuestro correo y te daremos el presupuesto que mejor se ajuste a tus necesidades.
          </p>

          <ul className="text-sm text-left text-gray-700 space-y-4 pl-4 list-disc list-inside">
            <li><strong className="text-green-600">💶 Coste:</strong> 70,00 € (desplazamiento incluido)</li>
            <li><strong className="text-orange-500">⏱️ Servicio mínimo:</strong> 1 hora + 20 min. de cortesía</li>
            <li><strong className="text-red-500">🧰 Incluye:</strong> tacos, tornillos, siliconas, pegamentos, clavos, etc.</li>
            <li><strong className="text-yellow-600">📌 Nota:</strong> Precios sin IVA</li>
          </ul>
        </div>

        {/* Botón WhatsApp */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/34685425615?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20un%20presupuesto%20con%20Manitas%20El%20Pana%20👷🔧"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-sm shadow-lg transition-transform transform hover:scale-105"
          >
            📲 Pedir presupuesto por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Presupuesto;
