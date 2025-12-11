import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";

/**
 * ErrorPage
 * ---------
 * Página genérica para rutas no encontradas (404).
 * - Muestra la ruta solicitada y ofrece acciones para volver al inicio
 *   o ver la lista de productos.
 *
 * Este archivo solo recibe un bloque de documentación inline; no se
 * modificó la estructura ni el comportamiento.
 */
export default function ErrorPage() {
  const location = useLocation();

  return (
    <Layout pageBg={'var(--color-white)'}>
      <section className="px-6 py-20 flex justify-center">
        <div className="w-full max-w-3xl mx-auto text-center">
          <h1 className="mx-auto text-h1">
            404 — Página no encontrada
          </h1>

          <div className="mt-4 text-center" style={{ color: 'var(--color-grey-2)', lineHeight: 1.6 }}>
            <p>No se encontró</p>
            <p className="font-semibold mt-1">{location.pathname}</p>
            <p className="mt-2">Es posible que la URL esté mal escrita o la página ya no exista.</p>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Link to="/" className="inline-block rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 button">
              Ir al inicio
            </Link>

            <Link to="/productos" className="inline-block rounded-full font-semibold border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 button">
              Ver productos
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
