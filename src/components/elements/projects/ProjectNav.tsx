import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface ProjectNavProps {
  relivantProjects: any;
  project: any;
}

export default function ProjectNav(props: ProjectNavProps) {
  const relivantProjects = props.relivantProjects;
  const currentProject = props.project;

  return (
    <nav className="space-y-1" aria-label="Sidebar">
      {relivantProjects.map((project: any) => {
        if (project.id === currentProject.id) return null;

        return (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className={classNames(
              project.id === currentProject.id
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
              "flex projects-center rounded-md px-3 py-2 text-sm font-medium"
            )}
            aria-current={project.id === currentProject.id ? "page" : undefined}
          >
            <span className="truncate">{project.attributes.Title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
