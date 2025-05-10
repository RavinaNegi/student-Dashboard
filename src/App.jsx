import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./AuthPage";
import Dashboard from "./Dashboard";
import AddStudentPage from "./AddStudentPage";
import ProtectedRoute from "./ProtectedRoute"; // Import the ProtectedRoute component
import { auth } from "./firebase";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<AuthPage />} />

        {/* Protected Route for Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected Route for Add Student */}
        <Route
          path="/add-student"
          element={
            <ProtectedRoute>
              <AddStudentPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
