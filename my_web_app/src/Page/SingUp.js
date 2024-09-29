import React from "react";

function SingUp() {
  return (
    <div>
      <div id="SingUp" className="isolate px-6 py-10 sm:py-10 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#203359] dark:text-white sm:text-4xl">
            SingUp
          </h2>
        </div>
        <form action="#" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
            <div>
              <label
                htmlFor="Full name"
                className="block text-sm font-semibold leading-6 text-[#203359] dark:text-white"
              >
                Full name
              </label>
              <div className="mt-2.5">
                <input
                  type="Full name"
                  name="Full name"
                  id="Full name"
                  autoComplete="Full name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#203359] shadow-sm ring-1 ring-inset dark:text-black  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-semibold leading-6 text-[#203359] dark:text-white"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring dark:text-black  focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold leading-6 text-[#203359] dark:text-white"
              >
                Password
              </label>
              <div className="mt-2.5">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#203359] shadow-sm ring-1 ring-inset dark:text-black  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-semibold leading-6 text-[#203359] dark:text-white"
              >
                Verify your password
              </label>
              <div className="mt-2.5">
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  autoComplete="new-password"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[#203359] shadow-sm ring-1 ring-inset dark:text-black  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 space-y-3">
            <button
              type="submit"
              className="block w-full rounded-md bg-[#339300] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-green-600"
            >
              SingUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SingUp;
