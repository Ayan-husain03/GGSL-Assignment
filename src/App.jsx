import React from "react";
import Login from "./components/Login";
import UserList from "./components/UserList";
import { ToastContainer } from "react-toastify";
import { Navigate, Route, Routes } from "react-router";


function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" />;
}
