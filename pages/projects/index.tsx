import Header from "../../src/components/elements/projects/Header";
import ProjectList from "../../src/components/elements/projects/ProjectList";
import { loadProjectsList } from "../../lib/load-projects";

export default function Projects(props: any) {
  return (
    <div>
      <Header />
      <ProjectList projects={props.projects} />
    </div>
  );
}

export async function getStaticProps() {
  const projects = await loadProjectsList();

  return {
    props: {
      projects: projects.data,
    },
  };
}
