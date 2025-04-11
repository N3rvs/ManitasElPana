import ContactForm from '../Components/ContactForm';
import fondoContacto from '../assets/images/formulario.png'; // poné tu imagen aquí

const Contact = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-black"
      style={{
        backgroundImage: `url(${fondoContacto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Capa de oscurecimiento */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-2xl">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
