# Paradise Nursery — Final Project (IBM Coursera, Course 5: Developing Front-End Apps with React)

A single-page React shopping app for a houseplant nursery. Browse plants by
category, add them to a cart, change quantities, delete items, and see the
cart total. Checkout is marked "Coming Soon".

## Features

- **ProductList** — 4 categories, 6 unique houseplants per category (24 plants):
  Air Purifying Plants, Aromatic Fragrant Plants, Insect Repellent Plants,
  Medicinal Plants. Each plant has a name, image, price and description.
  The "Add to Cart" button disables after a plant is added, and the cart
  count in the navbar increments.
- **Cart (Redux Toolkit)** — `CartSlice.jsx` with `addItem`, `removeItem`,
  `updateQuantity` and `clearCart`; the store tracks `totalQuantity` and
  `totalAmount`.
- **CartItem** — cart totals, quantity + / - buttons, per-item subtotal,
  delete button, "Continue Shopping", and a "Checkout — Coming Soon" button.
- **AboutUs** — about the nursery.
- **App** — navbar with cart icon + count, hero / landing section,
  product list, cart view, and About Us section.

## How to run

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Tech

- React 18 + Vite
- Redux Toolkit + React-Redux
- Plain CSS (`App.css`), responsive layout

## Files submitted to Mark

- `README.md`
- `src/AboutUs.jsx`
- `src/App.css`
- `src/App.jsx`
- `src/CartSlice.jsx`
- `src/ProductList.jsx`
- `src/CartItem.jsx`
