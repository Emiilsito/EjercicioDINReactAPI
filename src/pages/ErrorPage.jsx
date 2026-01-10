import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";

/**
 * ErrorPage
 * Página genérica para rutas no encontradas (404).
 */
export default function ErrorPage() {
  const location = useLocation();

  return (
    <Layout pageBg={'var(--color-white)'}>
      {/* El main_content del Layout ya centra el contenido. 
          Solo limitamos el ancho máximo para legibilidad. 
      */}
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="heading_h1">
          404 — Página no encontrada
        </h1>

        <div className="mt-6 text_normal">
          <p>No se encontró la ruta:</p>
          <p className="font-bold mt-1 color_primary">{location.pathname}</p>
          <p className="mt-4 text_small">
            Es posible que la URL esté mal escrita o la página ya no exista.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Link to="/" className="cta_button">
            Ir al inicio
          </Link>

          <Link to="/productos" className="cta_button">
            Ver productos
          </Link>
        </div>
      </div>
    </Layout>
  );
}