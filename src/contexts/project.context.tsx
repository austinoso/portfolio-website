import { createContext, useContext, useState } from "react";

interface IProjectContext {
  currentProject: any;
  projects: any[];
}

const ProjectContext = createContext<IProjectContext>({
  currentProject: null,
  projects: [],
});

export const ProjectProvider = ({
  children,
  currentProject,
  projects,
}: any) => {
  return (
    <ProjectContext.Provider value={{ currentProject, projects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => useContext(ProjectContext);
