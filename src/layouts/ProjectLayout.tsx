import Header from "../components/elements/projects/Header";
import { ProjectProvider } from "../contexts/project.context";

export default function ProjectLayout({ children }: any) {
  return (
    <ProjectProvider>
      <Header />
      {children}
    </ProjectProvider>
  );
}
