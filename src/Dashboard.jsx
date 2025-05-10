// src/Dashboard.jsx
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { getStudents } from "./data/studentsData";

const Dashboard = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");

  const loadStudents = () => {
    const mockStudents = getStudents();
    const storedStudents = JSON.parse(localStorage.getItem("students") || "[]");

    const storedWithIds = storedStudents.map((s, index) => ({
      id: mockStudents.length + index + 1,
      ...s,
    }));

    const combined = [...mockStudents, ...storedWithIds];
    setStudents(combined);
  };

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/");
      return;
    }

    setMessage("Loading students...");
    setTimeout(() => {
      loadStudents();
      setMessage("");
    }, 1000);
  }, [navigate]);

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleClearStudents = () => {
    localStorage.removeItem("students");
    loadStudents(); // Reload mock data only
  };

  const filteredStudents = students.filter((student) =>
    student.course.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 px-4 py-8">
      <div className="bg-white w-full max-w-4xl mx-auto p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Student Dashboard</h2>

        {message && (
          <p className="text-center text-sm text-red-500 mb-4">{message}</p>
        )}

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Filter by Course
          </label>
          <input
            type="text"
            placeholder="Filter by course"
            className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mb-4">Students List</h3>

        {filteredStudents.length === 0 ? (
          <p className="text-gray-600">No students match the filter.</p>
        ) : (
          <ul className="space-y-4">
            {filteredStudents.map((student) => (
              <li key={student.id} className="p-4 border border-gray-200 rounded-md shadow-sm">
                <h4 className="font-bold text-lg">{student.name}</h4>
                <p>{student.email}</p>
                <p className="italic text-gray-600">{student.course}</p>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap justify-between items-center mt-6 gap-4">
          <button
            onClick={() => navigate("/add-student")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
          >
            Add Student
          </button>
          <button
            onClick={handleClearStudents}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
          >
            Clear All Added Students
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
