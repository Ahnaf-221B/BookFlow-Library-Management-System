# BookFlow - Library Management System

BookFlow is a modern and user-friendly library management web application built with React. It allows users to explore, borrow, and manage books efficiently in an online environment. The system features real-time book tracking, user authentication, and a smooth borrowing process with return date management.

---

## Live Demo

Live Site: [https://bookflow-library-mangement.web.app/]

---

## Key Features

- Add Books – Admins can add new books with details like title, author, category, image, rating, and quantity.
- Book Details – View detailed information about each book including description, author, ratings, and availability.
- Borrow Books – Users can borrow available books by selecting a return date. Borrowing updates the quantity in real time.
- Return Books – Users can return borrowed books, and the quantity is updated accordingly.
- Authentication – Firebase-based login and logout system to manage user sessions securely.
- Borrow Button Auto-disable – If a book is out of stock or already borrowed by the user, the borrow button is disabled.
- Responsive Design – Optimized for desktop, tablet, and mobile devices.

---

## Tech Stack

### Frontend
- React
- React Router DOM
- Tailwind CSS
- Axios
- React Hook Form
- SweetAlert2
- Framer Motion

### Backend
- REST API (Node.js / Express hosted externally)
- Firebase Authentication
- MongoDB (via REST API)

---

## Installed Packages

```json
"@tailwindcss/vite": "^4.1.8",
"axios": "^1.9.0",
"firebase": "^11.9.0",
"framer-motion": "^12.18.1",
"motion": "^12.18.1",
"prop-types": "^15.8.1",
"react": "^19.1.0",
"react-dom": "^19.1.0",
"react-hook-form": "^7.57.0",
"react-icons": "^5.5.0",
"react-rating": "^2.0.5",
"react-rating-stars-component": "^2.2.0",
"react-router-dom": "^7.6.2",
"react-toastify": "^11.0.5",
"react-tooltip": "^5.29.1",
"sweetalert2": "^11.22.0",
"swiper": "^11.2.8",
"tailwindcss": "^4.1.8"


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
