import { Link } from "react-router-dom";
import Layout from "../components/Layout";

/**
 * AdminPage
 * Página de administración adaptada a las clases semánticas del CSS global.
 */
export default function AdminPage() {
  return (
    /* El prop pageBg aplicará la clase background_color_white definida en el CSS */
    <Layout pageBg={'var(--color-white)'}>
      
      {/* 1. Usamos 'form_card' para que la sección de herramientas tenga 
           el mismo estilo visual que los formularios (fondo, sombra y bordes).
        2. Al estar dentro de 'main_content', ya está centrado vertical y horizontalmente.
      */}
      <section 
        className="form_card" 
        aria-labelledby="admin-heading"
      >
        <h1 id="admin-heading" className="heading_h1">
          Página para Admins
        </h1>

        <div className="mt-10">
          <Link
            to="/formulario-productos"
            aria-label="Formulario para agregar productos"
            /* Usamos la clase semántica para botones con degradado */
            className="cta_button"
          >
            Agregar producto
          </Link>
        </div>
      </section>

    </Layout>
  );
}