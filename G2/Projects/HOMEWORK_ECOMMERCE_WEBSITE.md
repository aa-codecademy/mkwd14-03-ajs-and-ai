# 🛒 Homework Task: E-Commerce Website

**Deadline:** `09.03.2026 (preferably)`     
**Submission:** Send the GitHub Pages URL via `email` or as a `comment` on the Trello task

---

## 🎯 Objective

Build a fully functional **E-Commerce website** using HTML, CSS, and JavaScript. 
- Product data must be fetched **live from a public REST API**. 
- The site must support **browsing products**, **managing a shopping cart**, and optionally **completing a checkout flow**. 
- The final site must be live and publicly accessible via **GitHub Pages**.

---

## 📋 Requirements

### 1. General Structure

Your e-commerce site must include the following pages or sections:

- **Hero / Banner** — A promotional header with a call-to-action (e.g. "Shop Now")
- **Product Listing** — A grid/list of all available products with filtering and/or sorting
- **Product Detail** — A detailed view of a single product (can be a modal or a separate page)
- **Shopping Cart** — A cart panel or page showing selected items, quantities, and totals
- **Checkout Summary** — An order summary screen (a fully wired payment flow is not required)
- **Header / Navigation** — Logo, nav links, and a cart icon with an item count badge

> ⭐ **Bonus 1 — Checkout Form with Validation:** Build a multi-step checkout form (shipping info → order review → confirmation) with proper client-side validation on each step. 

> ⭐ **Bonus 2 — Order Confirmation Email:** After a successful checkout, send the user a real order confirmation email (with a summary of their cart) using [EmailJS](https://www.emailjs.com/) — no backend required.

---

### 2. Technologies

You must use the following technologies:

- **HTML5** — Semantic markup (`<section>`, `<article>`, `<nav>`, `<main>`, etc.)
- **CSS3** — Custom styling; use of CSS variables, Flexbox and/or Grid is expected
- **Vanilla JavaScript (ES6+)** — DOM manipulation, event handling, async/await, modules

- At least **one external library**, for example:
  - [Bootstrap](https://getbootstrap.com/) — responsive grid, components, and utility classes
  - [Animate.css](https://animate.style/) — CSS animations
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) — scroll-triggered animations
  - [Swiper.js](https://swiperjs.com/) — touch-friendly product carousel
  - [Font Awesome](https://fontawesome.com/) — icons (cart, star ratings, etc.)
  - [Notyf](https://github.com/caroso1222/notyf) or [SweetAlert2](https://sweetalert2.github.io/) — toast/alert notifications

> You are free to use additional libraries as needed

---

### 3. API Integration & Fetch *(replaces local JSON files)*

All product and category data **must be fetched live from a public REST API** using the `fetch()` API with `async/await`. You must make **at least two distinct API calls** (e.g. fetch all products, fetch categories, fetch a single product by ID).

### 🔌 Suggested Free Product APIs

Choose **one primary API** for your product data. You may combine APIs if you need data the primary one doesn't provide.

| API | Base URL | Notes |
|---|---|---|
| **Fake Store API** | `https://fakestoreapi.com` | Simple, no auth, perfect for a general store |
| **DummyJSON** | `https://dummyjson.com` | Supports search & pagination params, richer data |
| **Best Buy Open API** | `https://bestbuyapis.github.io/api-documentation/#overview` | Requires a free API key from [developer.bestbuy.com](https://developer.bestbuy.com/) |

> 💡 **Tip:** **DummyJSON** and **Fake Store API** are the most beginner-friendly and support the most useful query parameters out of the box. Start there if you're unsure which to pick.

#### Example API Calls

**Fetch all products (DummyJSON):**
```js
async function fetchProducts({ limit = 20, skip = 0, category = '' } = {}) {
  const url = category
    ? `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
    : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch products: ${response.status}`);

  const data = await response.json();
  return data.products.map(raw => new Product(raw)); // always map to your model
}
```

**Fetch a single product by ID (Fake Store API):**
```js
async function fetchProductById(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) throw new Error(`Product not found: ${id}`);

  const raw = await response.json();
  return new Product(raw);
}
```

**Fetch categories (Platzi Fake Store API):**
```js
async function fetchCategories() {
  const response = await fetch('https://api.escuelajs.co/api/v1/categories');
  if (!response.ok) throw new Error('Failed to fetch categories');

  const data = await response.json();
  return data.map(raw => new Category(raw));
}
```

> ⚠️ **CORS:** All APIs listed above support CORS and can be called directly from the browser — no backend proxy needed.

> ⚠️ **API Keys:** If you use an API that requires a key (e.g. Best Buy), store it in a `config.js` file added to `.gitignore` and document the setup in your `README.md`. Never commit API keys to a public repo.

---

### 4. Data Modelling

Even though data comes from an external API, you must still **map raw API responses to model objects** before using them anywhere in the app. This normalizes the data shape so your rendering logic doesn't depend on the API's specific field names and improves the rendering performance.

**`js/models/Product.js`** — example for DummyJSON:
```js
export class Product {
  constructor({ id, title, price, description, category, thumbnail, rating, stock }) {
    this.id          = id;
    this.name        = title;           // normalize: API uses "title", we use "name"
    this.price       = price;
    this.description = description;
    this.category    = category;
    this.image       = thumbnail;
    this.rating      = rating?.rate ?? rating ?? 0;
    this.stock       = stock ?? 0;
  }

  get isInStock()        { return this.stock > 0; }
  get formattedPrice()   { return `$${this.price.toFixed(2)}`; }
  get shortDescription() {
    return this.description.length > 100
      ? `${this.description.slice(0, 100)}…`
      : this.description;
  }
}
```

**`js/models/CartItem.js`:**
```js
export class CartItem {
  constructor(product, quantity = 1) {
    this.product  = product;
    this.quantity = quantity;
  }

  get lineTotal()      { return this.product.price * this.quantity; }
  get formattedTotal() { return `$${this.lineTotal.toFixed(2)}`; }
  increment()          { if (this.quantity < this.product.stock) this.quantity++; }
  decrement()          { if (this.quantity > 1) this.quantity--; }
}
```

---

### 5. Cart Functionality *(Core Requirement)*

The shopping cart is the central feature of this project. It must support the following:

- **Add to cart** — Add a product from the listing or detail view
- **Remove from cart** — Remove an individual item from the cart
- **Update quantity** — Increase or decrease item quantities (with stock limit awareness)
- **Cart total** — Dynamically recalculate and display the subtotal, and optionally tax and shipping
- **Cart persistence** — Use `localStorage` so the cart survives a page refresh
- **Cart badge** — Show the number of items in the cart icon in the navbar, updated in real time
- **Empty state** — Show a friendly message and a "Continue Shopping" link when the cart is empty

Cart state must be managed in a dedicated JavaScript module (e.g. `cartService.js`) — **not** scattered across multiple files.

---

### 6. Product Listing Features

Your product listing page must include at least **two** of the following interactive features:

- **Filter by category** — Use the API's category endpoint to fetch filtered results
- **Search** — Client-side filtering by name/description, or via the API's search endpoint if supported
- **Sort** — Sort products by price (low→high, high→low) or rating
- **Pagination** — Use the API's `limit` and `skip` (or `page`) query params to paginate results

---

### 7. Code Quality

Since you have completed Advanced JavaScript, the following is expected:

- Use **ES6+ syntax** throughout (`const`/`let`, arrow functions, template literals, destructuring, spread, etc.)
- Organize your JS into **separate files or modules** — see the suggested file structure for guidance
- Avoid spaghetti code — use **functions with single responsibilities**
- Handle **fetch errors** gracefully with `try/catch` — show a user-friendly error message in the UI, not just a `console.log`
- Use **higher-order functions** (`map`, `filter`, `reduce`, `sort`...) when processing data — avoid manual `for` loops where a cleaner alternative exists
- **Always map raw API responses to model objects** before passing data to render functions
- Cart logic must be encapsulated in its own module and must **not** directly manipulate the DOM — keep data logic and rendering logic separate
- Your code should be readable and reasonably commented and documented

---

### 8. Design & UX

- The website must be **responsive** (works on both desktop and mobile)
- Use a consistent color palette and typography
- Include **loading states** (e.g. a spinner or skeleton cards) while API data is being fetched
- Show **error states** if an API call fails (e.g. *"Oops, couldn't load products. Try again."*)
- Show **user feedback** for cart actions (e.g. a toast notification: *"Item added to cart!"*)
- Avoid a generic look — choose a product theme and commit to it (e.g. a tech store, a bookshop, a clothing brand)
- Add a **Personal Touch** — design it as if it were a real store you would actually use

---

## 🌐 Inspiration & Resources

| Resource | Link |
|---|---|
| "How to Build a Shopping Cart with Vanilla JS" — freeCodeCamp | [freecodecamp.org](https://www.freecodecamp.org/news/how-to-build-a-shopping-cart-with-javascript/) |
| Fake Store API Docs | [fakestoreapi.com](https://fakestoreapi.com/) |
| DummyJSON Docs | [dummyjson.com/docs](https://dummyjson.com/docs/products) |
| Platzi Fake Store API Docs | [api.escuelajs.co/docs](https://api.escuelajs.co/docs) |
| Open Food Facts API Docs | [openfoodfacts.github.io](https://openfoodfacts.github.io/api-documentation/) |
| Awwwards E-Commerce Examples | [awwwards.com](https://www.awwwards.com/websites/e-commerce/) |

> Study how real stores handle product grids, cart interactions, loading states, and error states — then make it your own.

---

## 🚀 Hosting with GitHub Pages

Your site **must be hosted live** using GitHub Pages. Follow these steps:

1. Create a GitHub repository named `ecommerce` (or any name you prefer)
2. Push all your project files to the `main` branch
3. Go to your repository → **Settings** → **Pages**
4. Under **Source**, select `main` branch and `/ (root)` folder, then click **Save**
5. Wait a minute — your site will be live at:
   `https://yourusername.github.io/ecommerce/`

---

## 📦 File Structure (Example)

```
ecommerce/
├── index.html
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── config.js              # API base URLs and keys (add to .gitignore if keys present)
│   ├── services/
│   │   ├── apiService.js      # All fetch() calls — fetchProducts, fetchCategories,
│   │   │                      # fetchProductById... Maps raw responses through models
│   │   └── cartService.js     # Cart state — addItem, removeItem, updateQty, getTotal,
│   │                          # saveToStorage, loadFromStorage...
│   │
│   ├── models/
│   │   ├── Product.js         # Class: properties (id, name, price, stock..) & methods
│   │   │                      # (isInStock, formattedPrice, shortDescription...)
│   │   └── CartItem.js        # Class: properties (product, quantity) & methods
│   │                          # (lineTotal, increment, decrement...)
│   │
│   └── utils/
│       ├── render.js          # DOM helpers — renderProductGrid, renderCartPanel,
│       │                      # renderEmptyCart, renderError, updateCartBadge...
│       └── formatters.js      # Helpers — formatPrice, formatRating, truncateText...
│
├── images/
│   └── ...
│
└── README.md                  # Project description, chosen API, and live URL
```

> 📝 Note: There is no `data/` folder — all data comes from live API calls, not local files.

---

## ✅ Submission Checklist

Before submitting, verify:

- [ ] All sections are present (Hero, Product Listing, Product Detail, Cart, Checkout Summary)
- [ ] At least **two distinct API calls** are made using `fetch()` and `async/await`
- [ ] Raw API responses are mapped to model objects before rendering
- [ ] At least one external library integrated
- [ ] Cart supports: add, remove, update quantity, total calculation, and persistence via `localStorage`
- [ ] Cart badge in navbar updates in real time
- [ ] At least 2 product listing features implemented (filter, search, sort, or pagination)
- [ ] Loading state shown while API data is being fetched
- [ ] Error state shown if an API call fails
- [ ] User feedback shown on cart actions (toast or similar)
- [ ] Site is responsive on mobile
- [ ] Code uses ES6+ features, is well-structured, and cart logic is in its own module
- [ ] Fetch errors are handled with `try/catch`
- [ ] No API keys committed to the public repository
- [ ] Site is live on GitHub Pages
- [ ] GitHub repository is **public**
- [ ] `README.md` includes the chosen API, a short description, and the live URL

---

### 🚀 Good luck — build something you'd actually want to shop at! 🛍️
