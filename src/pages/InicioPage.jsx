import { Link } from "react-router-dom";
import Layout from "../components/Layout";

/**
 * InicioPage
 * ---------
 * Página de inicio (hero) con un título de bienvenida y un CTA hacia
 * `/productos`.
 *
 * Objetivo: presentar el sitio y dirigir al usuario a la lista de productos.
 * Este bloque es puramente presentacional; no se cambió ninguna lógica.
 */
export default function InicioPage() {
  return (
    <Layout pageBg={'var(--color-white)'}>
      <div className="px-6 py-16 text-center">
        <h1 className="text-h1">
          Bienvenido a GameZone
        </h1>

        <div className="mt-6 flex justify-center">
          <h2 className="max-w-2xl text-center text-h4"
          >
            Encuentra lo mejor en gaming al mejor precio.
          </h2>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/productos"
            aria-label="Ir a Nuestros Productos"
            className="inline-block rounded-full font-semibold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 button"
          >
            Nuestros Productos
          </Link>
        </div>
      </div>

      {/* La página de inicio es simple: hero + enlace a /productos */}
    </Layout>
  );
}
