# 🌿 Plant Shop (Next.js + MongoDB)

A simple plant shop application built with **Next.js (App Router)** and **MongoDB**.  
Users can browse plant products, view details, and (if authenticated) add new plants to the database.

---

## 🚀 Features
- Landing page with product listings.
- Product details page.
- Admin/Product management page (protected).
- Add new plant form with image, price, description, and stock.
- MongoDB integration for storing plant data.

---

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/plant-shop.git
   cd plant-shop


### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory:

```
MONGO_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_random_secret
```

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Route Summary

### Public Routes

| Route           | Method   | Description         |
| --------------- | -------- | ------------------- |
| `/`             | GET      | Home page           |
| `/products`     | GET      | List all products   |
| `/products/:id` | GET      | Product detail page |
| `/login`        | GET/POST | Login page          |
| `/register`     | GET/POST | Registration page   |
| `/about`        | GET      | About page          |
| `/contact`      | GET      | Contact page        |

### Protected Routes

| Route                    | Method   | Description                           |
| ------------------------ | -------- | ------------------------------------- |
| `/dashboard/add-product` | GET/POST | Add new product (authenticated users) |

### API Routes

| Route           | Method  | Description                    |
| --------------- | ------- | ------------------------------ |
| `/api/products` | POST    | Add a new product              |
| `/api/auth/...` | Various | NextAuth authentication routes |


---

## Tech Stack

* **Frontend:** Next.js 15, React, TailwindCSS
* **Backend:** Next.js App Router API, Node.js
* **Database:** MongoDB
* **Authentication:** NextAuth.js

---

## Notes

* Ensure your MongoDB database is running and accessible via URI.
* This project uses **FormData** for adding products. For file uploads, integrate `imgbb` or another storage service.
* Dark/Light mode toggle is available in the navbar.
* Admin users can manage products via protected routes.

---

## License

MIT License
