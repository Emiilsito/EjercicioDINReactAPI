import { Link } from "react-router-dom";

/**
 * @component ProductCard
 * @description Representación visual de un producto individual en el catálogo. 
 * Utiliza variables de tema para asegurar la consistencia con el diseño global.
 * * @param {Object} props - Propiedades del componente.
 * @param {Object} props.producto - Objeto con la información del producto.
 * @param {number} props.producto.id - Identificador único del producto.
 * @param {string} props.producto.nombre - Nombre comercial del producto.
 * @param {string} props.producto.precio - Precio formateado (ej: "89.99 €").
 * @param {string} props.producto.img - URL de la imagen del producto.
 * @param {string} props.producto.descripcion - Breve reseña del producto.
 * @param {Function} [props.onSelect] - Callback opcional que se dispara al hacer clic, recibiendo el objeto producto.
 * * @accessibility
 * - Encapsulado en un `Link` con `aria-label` descriptivo para navegación fluida.
 * - Usa `role="listitem"` para indicar su posición dentro de una lista de productos.
 */
export default function ProductCard({ producto, onSelect }) {
  return (
    <Link
      to={`/productos/${producto.id}`}
      onClick={() => onSelect?.(producto)}
      aria-label={`Ver detalles de ${producto.nombre}`}
      role="listitem"
      /* Usamos la variable de color primario para el anillo de enfoque */
      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 no-underline block"
    >
      <article
        /* - bg y border usan las variables del theme.css directamente.
           - shadow usa la variable --dropshadow definida en index.css.
        */
        className="rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-200 ease-in-out bg-[var(--color-white-2)] border border-[var(--color-grey-5)] shadow-[var(--dropshadow)]"
      >
        {/* Imagen: contenedor centrado */}
        <figure
          className="w-full h-48 overflow-hidden rounded-xl mb-3 flex items-center justify-center bg-[var(--color-white-2)]"
        >
          <img
            src={producto.img}
            alt={producto.nombre}
            className="object-contain max-h-full max-w-full"
            loading="lazy"
          />
          <figcaption className="sr-only">{producto.nombre}</figcaption>
        </figure>

        {/* Nombre: usamos text_normal con peso extra */}
        <h2
          id={`product-card-title-${producto.id}`}
          className="text_normal font-bold mb-2 text-center text-[var(--color-grey-2)]"
        >
          {producto.nombre}
        </h2>

        {/* Descripción: usamos text_small para jerarquía */}
        <h3 className="text_small mb-6 text-center text-[var(--color-grey-3)]">
          {producto.descripcion}
        </h3>

        {/* Precio: destacado con el color primario del tema */}
        <p className="text_normal font-bold text-[var(--color-primary)]">
          {producto.precio}
        </p>
      </article>
    </Link>
  );
}