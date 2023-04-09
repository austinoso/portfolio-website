import ProjectLayout from "../../src/layouts/ProjectLayout";
import type { ReactElement } from "react";
import ProjectList from "../../src/components/elements/projects/ProjectList";
import { loadProjectsList } from "../../lib/load-projects";
import type { NextPageWithLayout } from "../../pages/_app";

const Projects: NextPageWithLayout = (props: any) => {
  return (
    <div>
      <ProjectList projects={props.projects} />
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
