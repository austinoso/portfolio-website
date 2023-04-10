import Header from "../components/elements/projects/Header";
import { ProjectProvider } from "../contexts/project.context";
import ProjectBreadCrumbs from "../components/elements/projects/ProjectBreadCrumbs";

export default function ProjectLayout({ children, project, projects }: any) {
  return (
    <ProjectProvider currentProject={project} projects={projects}>
      <Header />
      <ProjectBreadCrumbs />
      {children}
    </ProjectProvider>
  );
}
