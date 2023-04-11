import React from "react";
import { getProject, loadProjectsList } from "../../lib/load-projects";
import ProjectDetails from "../../src/components/elements/projects/ProjectDetails";
import type { NextPageWithLayout } from "../../pages/_app";
import type { ReactElement } from "react";
import ProjectLayout from "../../src/layouts/ProjectLayout";
import Head from "next/head";

const Project: NextPageWithLayout = (props: any) => {
  const project = props.project.data;

  return (
    <>
      <Head>
        <title>{project.attributes.Title}</title>
        <meta name="title" content="Austin Osorio | Projects"></meta>
        <meta
          name="keywords"
          content="software engineer, Austin Osorio, California"
        ></meta>
        <meta name="robots" content="noindex,nofollow"></meta>
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <meta name="language" content="English"></meta>
      </Head>
      <ProjectDetails />
    </>
  );
};

Project.getLayout = function getLayout(page: ReactElement) {
  const project = page.props.project.data;
  const relivantProjects = page.props.relivantProjects.data;

  return (
    <ProjectLayout project={project} projects={relivantProjects}>
      {page}
    </ProjectLayout>
  );
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
