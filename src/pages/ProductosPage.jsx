import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import { productos } from "../data/productos";
import { useState, useMemo } from "react";
import SearchBar from "../components/SearchBar";

/**
 * ProductosPage
 * ----------------
 * Página que muestra la lista de productos dentro de una tarjeta centrada.
 * - Usa `ProductList` para renderizar la rejilla de productos.
 * - Mantiene la tarjeta blanca centrada con padding y títulos.
 *
 * Nota: Solo se añade documentación inline aquí; no se modifica la lógica ni
 * el layout existente.
 */
export default function ProductosPage() {
    const [searchTerm, setSearchTerm] = useState("");

    // Usamos useMemo para memorizar la lista filtrada.
    // Solo se recalcula si 'searchTerm' cambia.
    const filteredProductos = useMemo(() => {
        if (!searchTerm) {
            return productos;
            // Si no hay término, devuelve la lista completa
        }
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return productos.filter((producto) =>
            // Filtra por el nombre del producto
            producto.nombre.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }, [searchTerm]);


  return (
    <Layout>
      {/* Usamos un contenedor flex para centrar la tarjeta blanca en la pantalla */}
      <div className="min-h-screen flex items-center justify-center px-6" style={{ paddingTop: 'calc(var(--header-height) + 2rem)', paddingBottom: 'calc(var(--footer-height) + 2rem)' }}>
        <section className="max-w-6xl bg-white rounded-2xl p-8 w-full" style={{ marginTop: '0' }} aria-labelledby="productos-heading">
          {/* Contenedor que usa todo el ancho disponible de la tarjeta blanca para que la rejilla no deje huecos */}
          <header className="mx-auto w-full text-center flex flex-col items-center">
            <h1 id="productos-heading"
              style={{
                fontSize: 'var(--heading-h1-font-size)',
                fontWeight: 'var(--heading-h1-font-weight)',
                color: 'var(--color-primary)'
              }}
              className="text-center mx-auto"
            >
              Nuestros Productos
            </h1>

            <p className="mt-4 mb-16 mx-auto max-w-4xl text-center" style={{ fontSize: 'var(--heading-h4-font-size)', color: 'var(--color-grey-2)', lineHeight: 1.4 }}>
              Nuestro compromiso es claro: <strong>Ofrecer calidad al mejor precio</strong>
            </p>

            <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Buscar productos..."
            />

            {/* Rejilla de productos ahora vive dentro del mismo contenedor para asegurar alineación */}
            <div className="w-full mt-8">
              <ProductList items={filteredProductos} onSelect={(p) => console.log('Producto seleccionado:', p.id)} />
            </div>
          </header>
        </section>
      </div>
    </Layout>
  );
}
