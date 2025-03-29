# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# User Management App

The **User Management App** is a React-based web application built with Vite. It allows users to manage a list of users, including functionalities like viewing, editing, and deleting user information. The app is designed with a clean and responsive UI and integrates with a backend API for data management.

---

## Features

- **View Users**: Display a paginated list of users fetched from the backend API.
- **Edit Users**: Update user details such as first name, last name, and email.
- **Delete Users**: Remove users from the list with a confirmation.
- **Responsive Design**: Fully responsive UI for desktop and mobile devices.
- **Toast Notifications**: Provides feedback for user actions (e.g., success or error messages).
- **Loading Indicators**: Displays a loading spinner while fetching data from the API.

---

## Tech Stack

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Framer Motion**: For smooth animations and transitions.
- **React Toastify**: For toast notifications.
- **React Icons**: For modern and customizable icons.

### Backend
- **API Integration**: The app communicates with a backend API to fetch, update, and delete user data.

---

#live link
```bash
https://ggsl-assignment-sable.vercel.app/
```

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-management-app.git
   cd user-management-app
   ```
- install dependencies
```bash
npm install
```
* Start the development server:
 ```bash
 npm run dev
 ```
