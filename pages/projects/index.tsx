import ProjectLayout from "../../src/layouts/ProjectLayout";
import type { ReactElement } from "react";
import ProjectList from "../../src/components/elements/projects/ProjectList";
import { loadProjectsList } from "../../lib/load-projects";
import type { NextPageWithLayout } from "../../pages/_app";
import Head from "next/head";

const Projects: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Austin Osorio | Projects</title>
        <meta name="title" content="Austin Osorio | Projects"></meta>
        <meta
          name="description"
          content="Explore my software development portfolio showcasing proficiency in TypeScript, Next.js, Express, and NoSQL/SQL databases. Discover my capabilities as a developer."
        ></meta>
        <meta
          name="keywords"
          content="software engineer, Austin Osorio, California"
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <meta name="language" content="English"></meta>
      </Head>
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
