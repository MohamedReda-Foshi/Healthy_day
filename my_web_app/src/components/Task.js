import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);

  // Simulate fetching data from a database
  useEffect(() => {
    // Replace this with your actual database fetching logic
    const fetchData = async () => {
      // Simulated database response
      const tasksFromDatabase = [
        "Drink whater  10 xp",
        "Eat healthy 15 xp",
        "Sleep at 10:pm  15 xp",
        "Change your underwar 15 xp",
      ];
      setTodoItems(tasksFromDatabase);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-xl bg-green-50 rounded-3xl shadow-md h-full">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">To Do List</h2>

      <ul className="mt-4">
        {todoItems.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-3 my-2 bg-white border rounded-lg border-green-200 shadow hover:bg-green-50 transition duration-200"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-3"
                // Logic for managing checkbox state can be added here
              />
              <span className="text-gray-700 font-medium">{task}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
