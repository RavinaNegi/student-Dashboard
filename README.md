# 🎓 React Student Dashboard App

A responsive React app for managing students – includes login via Firebase, adding new students, filtering by course, and editing/deleting entries. Data is stored using `localStorage`, making it easy to test without a backend.

## 🚀 Features

- 🔐 Firebase Authentication (Email/Password)
- ➕ Add new student (name, email, course)
- 📋 View list of students with filtering
- ✏️ Edit or 🗑️ Delete individual students
- 🧹 Clear all students (testing utility)
- 🧠 Preloaded with default mock data (10 students)
- ⚙️ Simulated API loading using `setTimeout`
- 📱 Fully responsive UI with Tailwind CSS

## 📦 Tech Stack

- React (via Vite or Create React App)
- Tailwind CSS
- Firebase (Auth only)
- LocalStorage (for persistence)
- React Router (for navigation)

---

## 📁 Folder Structure

src/
│
├── components/
│ └── StudentCard.jsx # Renders each student with Edit/Delete
│
├── data/
│ └── studentsData.js # Mock data loader and helper functions
│
├── pages/
│ ├── Dashboard.jsx # Main student list and controls
│ └── AddStudentPage.jsx # Form to add a new student
│
├── firebase.js # Firebase setup
├── App.jsx # Route config
└── main.jsx # Entry point

yaml
Copy
Edit

---

## 🔧 Setup Instructions

### 1. Clone & Install

```bash
git clone https://github.com/RavinaNegi/student-Dashboard.git
cd student-dashboard
npm install
2. Firebase Setup
Go to Firebase Console

Create a new project

Enable Email/Password authentication under Authentication

Copy your Firebase config and paste into firebase.js like so:

js
Copy
Edit
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
3. Start Development Server
bash
Copy
Edit
npm run dev
# or for CRA
npm start