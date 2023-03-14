import Head from "next/head";
import Header from "../src/components/elements/home/Header";
import About from "../src/components/elements/home/About";
import Projects from "../src/components/elements/home/Projects";
import Experience from "../src/components/elements/home/Experience";

export default function Home(props: any) {
  return (
    <div>
      <Head>
        <title>Austin Osorio | Full-Stack Software Engineer</title>
        <meta
          name="title"
          content="Austin Osorio | Full-Stack Software Engineer"
        ></meta>
        <meta
          name="description"
          content="Hi, I'm Austin Osorio. I'm a full-stack software engineer with experience in PHP, Perl, and JavaScript frameworks based in California."
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
      <Header />
      <About />
      <Projects projects={props.projects} />
      <Experience />
    </div>
  );
}

import { loadProjects } from "../lib/load-projects";

export async function getStaticProps() {
  const projects = await loadProjects();

  return {
    props: {
      projects: projects.data,
    },
  };
}
