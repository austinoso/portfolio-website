import React from "react";
import { getProject, loadProjectsList } from "../../lib/load-projects";
import ProjectDetails from "../../src/components/elements/projects/ProjectDetails";

function Project(projectData: any) {
  const project = projectData.project.data;

  return (
    <>
      <div
        className="
        text-white bg-gradient-to-br from-teal-500 to-blue-500
          py-24
          text-center
          relative
      "
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{project.attributes.Title}</h1>
            <p className="text-lg">{project.attributes.Type}</p>
          </div>
        </div>
      </div>
      <ProjectDetails project={projectData} />
    </>
  );
}

export default Project;

export async function getStaticProps(id: string) {
  const project = await getProject(id);

  return {
    props: {
      project,
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
