// src/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { auth } from "./firebase"; // Firebase setup file

const ProtectedRoute = ({ children }) => {
  // Check if the user is logged in
  if (!auth.currentUser) {
    // If no user, redirect to login page
    return <Navigate to="/" />;
  }

  // If logged in, render the child components (protected route)
  return children;
};

export default ProtectedRoute;
