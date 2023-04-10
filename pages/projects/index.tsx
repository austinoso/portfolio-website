import ProjectLayout from "../../src/layouts/ProjectLayout";
import type { ReactElement } from "react";
import ProjectList from "../../src/components/elements/projects/ProjectList";
import { loadProjectsList } from "../../lib/load-projects";
import type { NextPageWithLayout } from "../../pages/_app";

const Projects: NextPageWithLayout = () => {
  return (
    <div>
      <ProjectList />
    </div>
  );
};

Projects.getLayout = function getLayout(page: ReactElement) {
  const projects = page.props.projects;

  return <ProjectLayout projects={projects}>{page}</ProjectLayout>;
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
