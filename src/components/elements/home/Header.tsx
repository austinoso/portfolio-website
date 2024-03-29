import React from "react";
import { UserIcon, CodeBracketIcon } from "@heroicons/react/20/solid";

function Header() {
  return (
    <div
      className="
        text-white
        bg-[url(/images/hero.webp)]
        bg-cover
        bg-center
      "
    >
      <div
        className="
        bg-black
        bg-opacity-60
        backdrop-blur-sm
      "
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex py-44 xl:py-72">
          <div className="space-y-2">
            <h1 className="text-lg">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800 gap-1">
                Hi, I&apos;m{" "}
                <span className="font-semibold">Austin Osorio</span>{" "}
                <span>👋</span>
              </span>
            </h1>
            <h3 className="text-3xl font-bold">Full-Stack Software Engineer</h3>
            <p className="pb-4 text-gray-300 max-w-md">
              Full-stack software developer with over 2 years experience in PHP,
              Perl, and JavaScript frameworks.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/austinoso/"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  LinkedIn
                  <UserIcon className="ml-1 -mr-1 h-5 w-5" aria-hidden="true" />
                </button>
              </a>
              <a
                href="https://github.com/austinoso"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                >
                  GitHub
                  <CodeBracketIcon
                    className="ml-1 -mr-1 h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
