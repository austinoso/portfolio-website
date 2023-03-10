import Header from "../src/components/elements/home/Header";
import About from "../src/components/elements/home/About";
import Projects from "../src/components/elements/home/Projects";
import Experience from "../src/components/elements/home/Experience";

export default function Home(props: any) {
  return (
    <div>
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
