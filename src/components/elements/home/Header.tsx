import React from "react";
import { DocumentArrowDownIcon, LinkIcon } from "@heroicons/react/20/solid";

function Header() {
  return (
    <div
      className="
        text-white bg-gradient-to-br from-teal-500 to-blue-500
          py-44
        
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex">
        <div className="space-y-2">
          <h1 className="text-lg">
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800 gap-1">
              Hi, I'm <span className="font-semibold">Austin Osorio</span>{" "}
              <span>👋</span>
            </span>
          </h1>
          <h3 className="text-3xl font-bold">Full-Stack Software Engineer</h3>
          <p className="pb-4">
            Full-stack web developer with experience in PHP, Perl, and
            JavaScript frameworks.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              My Resume
              <DocumentArrowDownIcon
                className="ml-1 -mr-1 h-5 w-5"
                aria-hidden="true"
              />
            </button>
            <a
              href="https://github.com/austinoso"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
              >
                GitHub
                <LinkIcon className="ml-1 -mr-1 h-5 w-5" aria-hidden="true" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
