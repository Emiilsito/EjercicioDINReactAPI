import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function InicioPage() {
  return (
    <Layout>
      {/* main_content aplica el centrado y el espaciado base */}
      <div className="main_content">
        
        <h1 className="heading_h1">
          Bienvenido a GameZone
        </h1>

        <h2 className="heading_h4 mt-6 max-w-2xl">
          Encuentra lo mejor en gaming al mejor precio.
        </h2>

        <div className="mt-10">
          <Link
            to="/productos"
            aria-label="Ir a Nuestros Productos"
            className="cta_button"
          >
            Nuestros Productos
          </Link>
        </div>

      </div>
    </Layout>
  );
}