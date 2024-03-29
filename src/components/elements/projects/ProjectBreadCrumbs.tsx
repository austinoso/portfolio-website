import { HomeIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useProjectContext } from "../../../contexts/project.context";
import Link from "next/link";

export default function ProjectBreadCrumbs() {
  const { currentProject } = useProjectContext();

  const pages = [
    {
      name: "Projects",
      href: "/projects",
      current: currentProject ? false : true,
    },
  ];

  if (currentProject) {
    pages.push({
      name: currentProject.attributes.Title,
      href: `/projects/${currentProject.id}`,
      current: true,
    });
  }

  return (
    <nav
      className="flex mx-auto max-w-7xl items-center justify-between px-6 lg:px-8 py-6 lg:py-8"
      aria-label="Breadcrumb"
    >
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <Link
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
