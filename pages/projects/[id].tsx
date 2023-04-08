import React from "react";
import { getProject, loadProjectsList } from "../../lib/load-projects";
import ProjectDetails from "../../src/components/elements/projects/ProjectDetails";
import Header from "../../src/components/elements/projects/Header";

function Project(projectData: any) {
  const project = projectData.project.data;
  const relivantProjects = projectData.relivantProjects.data;

  return (
    <>
      <Header />
      <ProjectDetails
        project={projectData}
        relivantProjects={relivantProjects}
      />
    </>
  );
}

export default Project;

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
