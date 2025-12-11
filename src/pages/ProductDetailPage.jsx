import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { productos } from "../data/productos";

/**
 * ProductDetailPage
 * Página de detalle de un producto.
 * - Lee el parámetro `id` de la ruta mediante `useParams`.
 * - Busca el producto en `src/data/productos` y lo muestra dentro de una tarjeta centrada.
 * Accesibilidad:
 *  - El título del producto tiene un id `product-title-{id}` y la sección está etiquetada con `aria-labelledby`.
 */
export default function ProductDetailPage() {
  const { id } = useParams();
  const productId = Number(id);
  const producto = productos.find((p) => p.id === productId);

  if (!producto) {
    return (
      <Layout bgPage={'var(--color-white)'}>
        <div className="min-h-screen px-6 py-20 text-center">
          <h2 className="text-h2">Producto no encontrado</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout bgPage={'var(--color-white)'}>
      <div className="min-h-screen">
        {/* Outer wrapper: page background should be grey; card remains white */}
        <section aria-labelledby={`product-title-${producto.id}`} style={{ backgroundColor: 'var(--color-grey-5)', paddingTop: '2rem' }}>
          <div className="div-asside">
            <aside aria-hidden="true asside-color" />

            {/* Center column with the card (vertically centered) */}
            <div className="div-article">
              <article className="w-full max-w-6xl bg-white rounded-lg shadow-custom" style={{ padding: '4.5rem 2rem' }}>
                {/* Back button was here but moved into the details column to avoid overlapping the image */}
                  <div className="mb-8">
                    <Link
                      to="/productos"
                      aria-label="Volver a la lista de productos"
                      title="Volver a la lista de productos"
                      tabIndex={0}
                      className="inline-block rounded-full font-semibold transition-transform transform hover:scale-105 focus:outline-none focus-ring-primary button"
                    >
                      Volver
                    </Link>
                  </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  {/* Imagen */}
                  <div className="flex items-center justify-center">
                    <div className="w-full max-w-[520px]">
                      <div className="rounded-lg p-6 flex items-center justify-center" style={{ border: '1px solid var(--color-grey-5)', backgroundColor: 'var(--color-white)' }}>
                        <img src={producto.img} alt={producto.nombre} className="w-full object-contain" style={{ maxHeight: '74vh' }} />
                      </div>
                    </div>
                  </div>

                  {/* Details */}

                  <div className="flex flex-col justify-center px-2 md:px-8">

                    <h1 id={`product-title-${producto.id}`} className="text-4xl md:text-5xl font-extrabold" style={{ color: 'var(--color-black-2)' }}>{producto.nombre}</h1>

                    <div className="mt-4" role="group" aria-labelledby={`product-title-${producto.id}`}>
                      {producto.categoria ? (
                        <span className="inline-block" style={{ backgroundColor: 'var(--color-secondary)', color: '#fff', padding: '6px 10px', borderRadius: '9999px', fontSize: '0.9rem' }}>{producto.categoria}</span>
                      ) : (
                        <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">General</span>
                      )}
                    </div>

                    <p className="mt-6 text-lg" style={{ color: 'var(--color-grey-3)', lineHeight: 1.9 }}>{producto.descripcion}</p>

                    <div className="mt-8">
                      <p className="text-4xl font-bold" style={{ color: 'var(--color-primary)' }}>{producto.precio}</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <aside aria-hidden="true aside-color"/>
          </div>
        </section>
  </div>
    </Layout>
  );
}
