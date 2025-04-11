import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contacts from './Pages/Contacts';
import Presupuesto from './Pages/Presupuesto';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import usePageMeta from './Components/usePageMeta';
import './index.css';

function App() {
  usePageMeta();
  return (
    <div className="flex flex-col min-h-screen">
    <ScrollToTop />
      <Navbar />
      <main className="flex-grow bg-black text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/Presupuesto" element={<Presupuesto />} />
          <Route path="/contacto" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


export default App;
