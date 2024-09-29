import React, { useState } from "react";
import axios from "axios"; // Import Axios
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate for navigation

function Loginp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // State to handle errors
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://your-laravel-api-url/api/login", formData);
      console.log(response.data); // Log response data
      // Handle successful login (e.g., store token, navigate to home)
      navigate("/Home");
    } catch (err) {
      // Handle error
      console.error(err);
      setError("Invalid email or password"); // Set error message
    }
  };

  return (
    <div className="py-6 px-80">
      <div id="Contact" className="isolate sm:py-2 lg:px-4 border-2  border-green-600 dark:border-green-300 rounded-2xl">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#203359] dark:text-white sm:text-4xl">
            Login
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl">
          {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-[#203359] dark:text-white">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  onChange={handleChange} // Handle input changes
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#203359] dark:text-white dark:bg-stone-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="password" className="block text-sm font-semibold leading-6 text-[#203359] dark:text-white">
                Password
              </label>
              <div className="mt-2.5">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  onChange={handleChange} // Handle input changes
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#203359] dark:text-white dark:bg-stone-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-3">
            <button 
              type="submit"
              className="block w-full rounded-md bg-[#339300] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-green-600"
            >
              Loginp
            </button>
            <p>
              If you don't have an account?{" "}
              <Link to="/SingUp" className="text-[#339300] hover:underline">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginp;
