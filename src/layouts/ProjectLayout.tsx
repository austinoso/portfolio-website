import Header from "../components/elements/projects/Header";
import { ProjectProvider } from "../contexts/project.context";

export default function ProjectLayout({ children }: any) {
  return (
    <ProjectProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        {children}
      </div>
    </ProjectProvider>
  );
}
