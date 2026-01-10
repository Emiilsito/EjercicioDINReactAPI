import ProductCard from "./ProductCard";
import { productos as defaultProductos } from "../data/productos";

/**
 * ProductList
 * Lista reutilizable de productos mostrada en una cuadrícula.
 */
function ProductList({ items = defaultProductos, onSelect }) {
  return (
    /* 1. Eliminamos id="main-content" y tabIndex={-1} porque ya están en el Layout.
       2. Añadimos max-w-6xl para alinear la cuadrícula con el Header.
    */
    <section 
      role="region" 
      className="w-full max-w-6xl mx-auto" 
      aria-labelledby="productos-heading"
    >
      {/* Usamos el gap-8 y las columnas responsivas de Tailwind que 
          respetan la estructura de tu index.css.
      */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch" 
        role="list" 
        aria-label="Lista de productos"
      >
        {items.map((p) => (
          <ProductCard key={p.id} producto={p} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;