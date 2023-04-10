import ProjectLayout from "../../src/layouts/ProjectLayout";
import type { ReactElement } from "react";
import ProjectList from "../../src/components/elements/projects/ProjectList";
import { loadProjectsList } from "../../lib/load-projects";
import type { NextPageWithLayout } from "../../pages/_app";
import { useProjectContext } from "../../src/contexts/project.context";

const Projects: NextPageWithLayout = (props: any) => {
  const { setProjects } = useProjectContext();
  setProjects(props.projects);

  return (
    <div>
      <ProjectList />
    </div>
  );
};

Projects.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout>{page}</ProjectLayout>;
};

export async function getStaticProps() {
  const projects = await loadProjectsList();

  return {
    props: {
      projects: projects.data,
    },
  };
}

export default Projects;
