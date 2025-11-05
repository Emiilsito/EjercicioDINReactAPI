export default function ProductCard({ producto }) {
  return (
  <div className="bg-white rounded-2xl shadow-custom p-4 flex flex-col items-center border border-(--color-grey-5) hover:scale-105 transition-transform duration-200 ease-in-out">
      {/* Contenedor de imagen con relación cuadrada */}
  <div className="w-full aspect-square overflow-hidden rounded-xl mb-3 flex items-center justify-center bg-(--color-white-2)">
        <img
          src={producto.img}
          alt={producto.nombre}
          className="object-contain w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Nombre del producto */}
  <h2 className="text-lg font-semibold text-(--color-grey-3) mb-1 text-center">
        {producto.nombre}
      </h2>

      {/* Precio del producto */}
  <p className="text-(--color-primary) text-base font-bold">
        {producto.precio}
      </p>
    </div>
  );
}
