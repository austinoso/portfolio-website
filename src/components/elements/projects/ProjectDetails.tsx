interface ProjectDetailsProps {
  project: any;
}

export default function ProjectDetails(props: ProjectDetailsProps) {
  const project = props.project.project.data;
  console.log(project);

  return (
    <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-12 lg:pb-28">
      <div className="relative mx-auto max-w-7xl">
        {project.attributes.Description}
      </div>
    </div>
  );
}
