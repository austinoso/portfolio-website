import ProjectNav from "./ProjectNav";
import ReactMarkdown from "react-markdown";

interface ProjectDetailsProps {
  project: any;
  relivantProjects: any;
}

export default function ProjectDetails(props: ProjectDetailsProps) {
  const project = props.project.project.data;
  const relivantProjects = props.relivantProjects;

  return (
    <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-12 lg:pb-28">
      <div className="relative mx-auto max-w-7xl flex flex-row flex-wrap">
        <div className="w-full sm:w-1/3 md:w-1/4 p-4">
          <h3 className="text-blue-600 text-lg font-bold">Other Projects</h3>
          <ProjectNav relivantProjects={relivantProjects} project={project} />
        </div>
        <div className="w-full sm:w-2/3 md:w-3/4 p-4 flex flex-col space-y-4">
          <h2 className="text-xl font-bold">{project.attributes.Title}</h2>
          <ReactMarkdown>{project.attributes.Description}</ReactMarkdown>
          <div>
            <a
              className="text-blue-500"
              target="_blank"
              href={project.attributes.github}
              rel="noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
