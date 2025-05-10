const defaultStudents = [
  { id: 1, name: "John Doe", email: "john@example.com", course: "Philosophy" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", course: "Science" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", course: "Math" },
  { id: 4, name: "Alice Williams", email: "alice@example.com", course: "History" },
];

export const getStudents = () => {
  const localData = JSON.parse(localStorage.getItem("students"));
  if (!localData || localData.length === 0) {
    localStorage.setItem("students", JSON.stringify(defaultStudents));
    return defaultStudents;
  }
  return localData;
};
