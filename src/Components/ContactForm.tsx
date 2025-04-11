import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

const ContactForm = () => {
  const [form, setForm] = useState({
    nombre: '',
    codigo: '',
    telefono: '',
    descripcion: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'formularios'), {
        ...form,
        fecha: new Date().toISOString(),
      });
      setEnviado(true);
    } catch (error) {
      console.error('Error al enviar:', error);
    }
  };

  return (
    <div className="bg-grey rounded-xl shadow-lg max-w-xl mx-auto p-8 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-white-800 text-center">Formulario de Contacto</h2>
      {enviado ? (
        <p className="text-green-600 font-semibold text-center">¡Gracias! Hemos recibido tu solicitud.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white-700">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-white-400 focus:outline-none"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-white-700">Código de área</label>
              <input
                type="text"
                name="codigo"
                value={form.codigo}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-white-700">Teléfono</label>
              <input
                type="text"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-white-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white-700">Descripción de la avería</label>
            <textarea
              name="descripcion"
              rows={4}
              value={form.descripcion}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
