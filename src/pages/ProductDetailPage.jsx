import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { productos } from "../data/productos";

/**
 * Componente de página que renderiza la vista detallada de un producto específico.
 * * Gestiona la lógica de búsqueda del producto mediante el parámetro `id` de la URL 
 * y maneja estados de error si el producto no existe.
 * * @component
 * @returns {JSX.Element} Estructura de la página que incluye el Layout, la imagen del producto 
 * y sus especificaciones detalladas.
 * * @accessibility
 * - Utiliza `aria-labelledby` para vincular la sección con el título del producto.
 * - El botón "Volver" incluye un `aria-label` descriptivo para lectores de pantalla.
 * - Emplea etiquetas semánticas como `<section>` y `<article>` para una correcta jerarquía del DOM.
 */
export default function ProductDetailPage() {
  const { id } = useParams();
  const productId = Number(id);
  const producto = productos.find((p) => p.id === productId);

  // Caso: Producto no encontrado
  if (!producto) {
    return (
      <Layout pageBg={'var(--color-white)'}>
        <div className="text-center">
          <h2 className="heading_h2">Producto no encontrado</h2>
          <Link to="/productos" className="cta_button mt-8">
            Volver a la tienda
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* El Layout ya proporciona el fondo gris y el main_content centrado */}
      <section 
        aria-labelledby={`product-title-${producto.id}`} 
        className="w-full max-w-6xl mx-auto"
      >
        <article className="background_color_white rounded-lg shadow-[var(--dropshadow)] p-8 md:p-16">
          
          {/* Botón Volver con la clase cta_button del CSS */}
          <div className="mb-12">
            <Link
              to="/productos"
              aria-label="Volver a la lista de productos"
              className="cta_button"
            >
              Volver
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Contenedor de Imagen */}
            <div className="flex items-center justify-center">
              <div className="w-full rounded-lg p-6 border-2 border-[var(--color-grey-5)] bg-white flex items-center justify-center">
                <img 
                  src={producto.img} 
                  alt={producto.nombre} 
                  className="w-full object-contain max-h-[50vh]" 
                />
              </div>
            </div>

            {/* Detalles del Producto */}
            <div className="flex flex-col items-start text-left">
              
              <h1 
                id={`product-title-${producto.id}`} 
                className="heading_h1"
                style={{ color: 'var(--color-black-2)' }}
              >
                {producto.nombre}
              </h1>

              {/* Categoría / Badge */}
              <div className="mt-4">
                <span 
                  className="inline-block px-4 py-1.5 rounded-full text-white font-bold text_small"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  {producto.categoria || "General"}
                </span>
              </div>

              {/* Descripción */}
              <p 
                className="text_normal mt-8" 
                style={{ color: 'var(--color-grey-3)', lineHeight: '1.8' }}
              >
                {producto.descripcion}
              </p>

              {/* Precio */}
              <div className="mt-10">
                <p 
                  className="heading_h2" 
                  style={{ color: 'var(--color-primary)' }}
                >
                  {producto.precio}
                </p>
              </div>

            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
}