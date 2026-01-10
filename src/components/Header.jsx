import { Link, useLocation } from "react-router-dom";

/**
 * @component Header
 * @description Barra de navegación principal de la aplicación. Gestiona el logo y los enlaces de navegación, 
 * resaltando visualmente la ruta activa.
 * * @param {Object} props - Propiedades del componente.
 * @param {Function} [props.onNavigate] - Callback opcional para manejar eventos de navegación personalizados.
 * * @returns {JSX.Element} Cabecera con fondo `var(--color-primary)` y diseño responsivo.
 * * @accessibility
 * - Incluye un "Skip Link" invisible para permitir a usuarios de teclado saltar al contenido principal.
 * - Define un `role="banner"` y etiquetas `aria-label` para identificar claramente las regiones de navegación.
 * - Utiliza `aria-current="page"` para marcar dinámicamente el enlace de la página activa.
 */

export default function Header({ onNavigate }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="navigation_bar" role="banner">
      <div className="header_container">
        
        {/* Logo a la izquierda del todo */}
        <Link 
          to="/" 
          className="logo_and_title heading_h5"
          aria-label="GameZone - Inicio"
        >
          GameZone
        </Link>

        {/* Navegación a la derecha del todo */}
        <nav role="navigation">
          <ul className="navigation_links">
            <li>
              <Link 
                to="/" 
                className={`nav_link text_normal ${path === '/' ? 'bg-white/20 font-bold' : 'hover:bg-white/10'}`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/productos" 
                className={`nav_link text_normal ${path === '/productos' ? 'bg-white/20 font-bold' : 'hover:bg-white/10'}`}
              >
                Productos
              </Link>
            </li>
            <li>
              <Link 
                to="/admin" 
                className={`nav_link text_normal ${path === '/admin' ? 'bg-white/20 font-bold' : 'hover:bg-white/10'}`}
              >
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}