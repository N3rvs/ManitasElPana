import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const titleMap: Record<string, string> = {
      '/': 'Inicio | Manitas El Pana',
      '/servicios': 'Servicios | Manitas El Pana',
      '/presupuesto': 'Presupuesto | Manitas El Pana',
      '/contacto': 'Contacto | Manitas El Pana',
    };

    const descMap: Record<string, string> = {
      '/': 'Solucionamos tus problemas del hogar con servicios de fontanería, electricidad y más.',
      '/servicios': 'Reparaciones del hogar, bricolaje, pintura, cerrajería, electricidad y más.',
      '/presupuesto': 'Solicita presupuesto inmediato y sin compromiso.',
      '/contacto': 'Estamos para ayudarte. Contáctanos fácilmente.',
    };

    document.title = titleMap[pathname] || 'Manitas El Pana';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', descMap[pathname] || '');
  }, [pathname]);
};

export default usePageMeta;
