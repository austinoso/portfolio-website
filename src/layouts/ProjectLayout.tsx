import Header from "../components/elements/projects/Header";
import { ProjectProvider } from "../contexts/project.context";

export default function ProjectLayout({ children, project, projects }: any) {
  return (
    <ProjectProvider currentProject={project} projects={projects}>
      <Header />
      {children}
    </ProjectProvider>
  );
}
