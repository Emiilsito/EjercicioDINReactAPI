import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProductDetailPage from "./ProductDetailPage";
import { productos } from "../data/productos";

export default {
  title: "Pages/ProductDetailPage",
  tags: ["autodocs"],
  component: ProductDetailPage,
  parameters: {
    docs: {
      description: {
        component: `
El componente **ProductDetailPage** sirve para mostrar el detalle completo de un producto
seleccionado desde la tienda. Gestiona tanto la visualización de la información del producto
como el manejo de errores si el producto no existe.

## Por qué existe

- Centraliza la lógica de detalle del producto.
- Obtiene el \`id\` desde la URL.
- Busca el producto en el catálogo.
- Renderiza nombre, descripción, precio, categoría e imagen.
- Gestiona el caso de error mostrando un mensaje y un botón para volver a la tienda.
- Aplica buenas prácticas de accesibilidad con \`aria-labelledby\` y etiquetas semánticas.

## Cómo se utiliza

- Se accede mediante una ruta dinámica: \`/productos/:id\`.
- Las stories ya envuelven el componente en un \`MemoryRouter\` para simular navegación.
- Renderiza el contenido dentro de un \`Layout\`, con sección y artículo semánticos.
- Muestra un botón de “Volver” con etiqueta accesible.

## Accesibilidad

- Uso de \`aria-labelledby\` para vincular el título del producto.
- Botones con etiquetas descriptivas para lectores de pantalla.
- Estructura semántica con \`<section>\` y \`<article>\`.

`
      }
    }
  }
};

// Plantilla que envuelve la página en MemoryRouter
const Template = (id) => (
  <MemoryRouter initialEntries={[`/productos/${id}`]}>
    <Routes>
      <Route path="/productos/:id" element={<ProductDetailPage />} />
    </Routes>
  </MemoryRouter>
);

// Historia: Producto existente
export const ProductoValido = {
  name: "Producto existente",
  render: () => Template(productos[0].id)
};

// Historia: Producto no encontrado
export const ProductoNoEncontrado = {
  name: "Producto no encontrado",
  render: () => Template(9999)
};
