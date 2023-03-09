import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

function Header() {
  return (
    <div
      className="
        text-white bg-gradient-to-br from-teal-500 to-blue-500
          py-24
          text-center
          relative
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">All Projects</h1>
        </div>
      </div>
      {/* <div className="mt-12 sm:mx-auto sm:flex sm:max-w-3xl absolute -bottom-6 left-1/2 transform -translate-x-1/2">
        <label htmlFor="search" className="sr-only">
          Search projects
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <input
              type="search"
              name="search"
              id="search"
              className="block w-full rounded-none rounded-l-md border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-lg text-gray-900"
              placeholder="Search projects"
            />
          </div>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
