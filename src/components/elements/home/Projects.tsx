const posts = [
  {
    title: "My Portfolio",
    href: "#",
    category: { name: "Personal", href: "#" },
    description:
      "Built with Tailwind CSS and Next.js. My personal website and portfolio.",
    datetime: "2020-03-16",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "SAMHSA Restricted-use Data Analysis System Scraper",
    href: "#",
    category: { name: "Freelance", href: "#" },
    description:
      "Scraper built in NodeJS for SAMHSA's Restricted-use Data Analysis System. Created as an easier method of obtaining data opposed to running a crosstab.",
    datetime: "2020-03-10",
    skills: ["Node.js", "JavaScript"],
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    skills: [],
  },
];

interface Project {
  attributes: any;
  id: number;
}

import { useState, useEffect } from "react";

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
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-12 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
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
      </div>
    </div>
  );
}
