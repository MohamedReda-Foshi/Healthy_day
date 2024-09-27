import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const handleInputChange = (e) => {
    setTasks(e.target.value);
  };

  const handleAddTask = () => {
    if (tasks) {
      setTodoItems([...todoItems, tasks]);
      setTasks("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTodoItems = todoItems.filter((_, i) => i !== index);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="p-6 w-72 bg-green-50 rounded-lg shadow-md h-full">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">To Do List</h2>
      <input
        type="text"
        value={tasks}
        onChange={handleInputChange}
        placeholder="Add a new task"
        className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring focus:ring-green-400"
      />
      <button
        onClick={handleAddTask}
        className="w-full mt-2 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"
      >
        Add Task
      </button>
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
            <button
              onClick={() => handleDeleteTask(index)}
              className="text-red-600 hover:text-red-800 transition duration-200"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
