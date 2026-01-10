import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioPage from "./pages/InicioPage";
import ProductosPage from "./pages/ProductosPage";
import AdminPage from "./pages/AdminPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ErrorPage from "./pages/ErrorPage";
import FormularioControladoProductos from "./pages/FormularioControladoProductos";

/**
 * App
 * Componente raíz de la aplicación que orquesta rutas, estado global y carga inicial.
 *
 * Props:
 * @param {Object} props - Props del componente.
 * @param {Object} [props.initialState] - Estado inicial opcional para hidratar la app.
 *
 * Uso:
 * - Inicializa providers (context, redux).
 * - Define rutas principales.
 * - Maneja estado de autenticación y carga global.
 */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/formulario-productos" element={<FormularioControladoProductos />} />
        <Route path="/productos/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
