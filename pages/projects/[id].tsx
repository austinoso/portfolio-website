import React from "react";
import { getProject, loadProjectsList } from "../../lib/load-projects";
import ProjectDetails from "../../src/components/elements/projects/ProjectDetails";
import type { NextPageWithLayout } from "../../pages/_app";
import type { ReactElement } from "react";
import ProjectLayout from "../../src/layouts/ProjectLayout";

const Project: NextPageWithLayout = (projectData: any) => {
  const project = projectData.project.data;
  const relivantProjects = projectData.relivantProjects.data;

  return (
    <>
      <ProjectDetails
        project={projectData}
        relivantProjects={relivantProjects}
      />
    </>
  );
};

Project.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout>{page}</ProjectLayout>;
};

export async function getStaticProps(id: string) {
  const project = await getProject(id);
  const relivantProjects = await loadProjectsList();

  return {
    props: {
      project,
      relivantProjects,
    },
  };
}

export async function getStaticPaths() {
  const projects = await loadProjectsList();

  return {
    paths: projects.data.map((project: any) => ({
      params: { id: project.id.toString() },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

export default Project;
