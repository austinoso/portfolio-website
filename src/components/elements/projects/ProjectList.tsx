interface Project {
  attributes: any;
  id: number;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects(props: ProjectsProps) {
  const projects = props.projects;

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
    <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-12 lg:pb-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mt-10 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.attributes.Title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              href={project.attributes.github}
              target="_blank"
              rel="noreferrer"
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
