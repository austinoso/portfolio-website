interface Project {
  attributes: any;
  id: number;
}

import { useState, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Projects() {
  const [projects, setProjects] = useState([] as Project[]);

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    console.log(projects);
  }, [projects]);

  const getProjects = async () => {
    const projectRes = await fetch(
      "http://localhost:1337/api/projects?populate=%2A"
    );
    const projectData = await projectRes.json();
    setProjects(projectData.data);
  };

  const projectTags = (tags: any[]) => {
    console.log(tags);
    return tags.map((tag: any) => (
      <span
        key={tag.id}
        className="inline-flex items-center rounded-full bg-blue-500 px-3 py-0.5 text-sm font-medium text-white gap-1"
      >
        {tag.attributes.name}
      </span>
    ));
  };

  return (
    <div className="relative bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-3/5" />
      </div>
      <div className="relative mx-auto max-w-7xl py-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Recent Projects
          </h2>
          {/* <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p> */}
        </div>
        <div className="mx-auto mt-10 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.attributes.Title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              href={project.attributes.github}
              target="_blank"
            >
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    {/* <a href={project.Type.href} className="hover:underline"> */}
                    {project.attributes.Type}
                    {/* </a> */}
                  </p>
                  <span className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {project.attributes.Title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {project.attributes.Description}
                    </p>
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {project.attributes.project_tags &&
                    projectTags(project.attributes.project_tags.data)}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="py-8 text-center">
          <a href="/projects" target="_blank">
            <button className="inline-flex items-center px-3.5 py-2 border border-transparent leading-4 font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              View All
              <ArrowRightIcon className="ml-2 -mr-0.5 h-4 w-4" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
