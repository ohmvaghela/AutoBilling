
import React from "react";
import { Link } from "react-router-dom";

const DropdownButton = ({ children }) => {
  return (
    <div className="dropdown group relative">
      <button className="dropdown-toggle flex items-center text-gray-700 dark:text-gray-300 rounded py-2 pl-4 pr-10 w-full focus:outline-none">
        {children}
        <svg
          className="transform transition group-hover:-rotate-180 absolute h-6 w-6 right-1 top-1/2 -translate-y-1/2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <ul className="dropdown-menu hidden group-hover:block absolute right-0 top-full py-1 bg-white rounded shadow z-50">
        <li>
          <Link
            to="#"
            className="dropdown-item block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            Logout
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="dropdown-item block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            Action 2
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="dropdown-item block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            Action 3
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownButton;
