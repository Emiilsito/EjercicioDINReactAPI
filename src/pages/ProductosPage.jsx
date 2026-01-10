import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import { productos } from "../data/productos";
import { useState, useMemo } from "react";
import SearchBar from "../components/SearchBar";

/**
 * ProductosPage
 * Página que muestra la lista de productos filtrable.
 */
export default function ProductosPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProductos = useMemo(() => {
    if (!searchTerm) return productos;
    
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  return (
    <Layout>
      {/* El contenedor <main> del Layout ya tiene la clase .main_content, 
        por lo que aquí solo organizamos el contenido interior.
      */}
      <div className="w-full max-w-6xl mx-auto">
        
        <header className="w-full mb-12">
          {/* Usamos las clases de tipografía semántica del index.css */}
          <h1 id="productos-heading" className="heading_h1">
            Nuestros Productos
          </h1>

          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Buscar productos..."
          />

          <p className="heading_h4 mx-auto mt-6">
            Nuestro compromiso es claro: <strong>Ofrecer calidad al mejor precio</strong>
          </p>
        </header>

        {/* ProductList ya tiene su propio grid interno y max-width, 
          así que solo le pasamos los productos filtrados. 
        */}
        <div className="w-full">
          <ProductList 
            items={filteredProductos} 
            onSelect={(p) => console.log('Producto seleccionado:', p.id)} 
          />
        </div>
        
      </div>
    </Layout>
  );
}