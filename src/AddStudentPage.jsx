import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";

const AddStudentPage = () => {
  const navigate = useNavigate();
  const [newStudent, setNewStudent] = useState({ name: "", email: "", course: "" });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (!newStudent.name || !newStudent.email || !newStudent.course) {
      setMessage("⚠️ Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(newStudent.email)) {
      setMessage("⚠️ Please enter a valid email.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const stored = JSON.parse(localStorage.getItem("students") || "[]");
      const lastId = stored.length > 0 ? stored[stored.length - 1].id : 0;
      const newEntry = { ...newStudent, id: lastId + 1 };

      stored.push(newEntry);
      localStorage.setItem("students", JSON.stringify(stored));

      setIsLoading(false);
      setMessage("✅ Student added!");
      setTimeout(() => navigate("/dashboard"), 1000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 px-4 py-8">
      <div className="bg-white w-full max-w-4xl mx-auto p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Add New Student</h2>

        {message && <p className="text-center text-sm text-red-500 mb-4">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Course"
            value={newStudent.course}
            onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
          >
            {isLoading ? "Adding..." : "Add Student"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudentPage;
