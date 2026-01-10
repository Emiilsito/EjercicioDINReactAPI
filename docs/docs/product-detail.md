---
id: product-detail
title: ProductDetailPage
sidebar_label: ProductDetailPage
---

import React from 'react';

# ProductDetailPage

El componente **ProductDetailPage** se utiliza para mostrar la información
detallada de un producto seleccionado desde la tienda. Gestiona la visualización
completa del producto y el manejo de errores si el producto no existe.

---

## Por qué existe

- Centraliza la lógica de detalle del producto.
- Obtiene el `id` desde la URL.
- Busca el producto en el catálogo.
- Renderiza **nombre, descripción, precio, categoría e imagen**.
- Gestiona errores mostrando un mensaje y botón para volver a la tienda.
- Mejora accesibilidad con `aria-labelledby` y etiquetas semánticas.

---

## Cómo se utiliza

- Se accede mediante ruta dinámica: `/productos/:id`.
- Se muestra la información completa del producto.
- Historias de Storybook se usan como ejemplos interactivos.
- Se aplica **accesibilidad** con:
  - `aria-labelledby` en el título del producto.
  - Botones con etiquetas descriptivas para lectores de pantalla.
  - Uso de `<section>` y `<article>` para estructura semántica.

---

## Badge de categoría

Por ejemplo, si un producto pertenece a la categoría **Electrónica**, se muestra un badge así:

<span style={{ backgroundColor: '#4f46e5', color: 'white', padding: '0.25em 1em', borderRadius: '9999px', fontWeight: 'bold', fontSize: '0.75rem' }}>
  Electrónica
</span>

---

## Ejemplos de historias

### Producto existente

<iframe
  src="http://localhost:6006/?path=/story/pages-productdetailpage--producto-valido"
  style={{ width: '100%', height: '500px', border: 0 }}
  title="Producto existente"
/>

### Producto no encontrado

<iframe
  src="http://localhost:6006/?path=/story/pages-productdetailpage--producto-no-encontrado"
  style={{ width: '100%', height: '500px', border: 0 }}
  title="Producto no encontrado"
/>
