import { createContext, useContext, useState } from "react";

interface IProjectContext {
  currentProject: any;
  setCurrentProject: (project: any) => void;
  projects: any[];
  setProjects: (projects: any[]) => void;
}

const ProjectContext = createContext<IProjectContext>({
  currentProject: null,
  setCurrentProject: () => {},
  projects: [],
  setProjects: () => {},
});

export const ProjectProvider = ({ children }: any) => {
  const [currentProject, setCurrentProject] = useState<any>(null);
  const [projects, setProjects] = useState<any[]>([]);

  return (
    <ProjectContext.Provider
      value={{ currentProject, setCurrentProject, projects, setProjects }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => useContext(ProjectContext);
