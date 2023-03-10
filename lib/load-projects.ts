export async function loadProjects() {
  const res = await fetch(
    "http://51.81.211.148:1337/api/projects?populate=%2A&pagination[page]=1&pagination[pageSize]=3&sort=relevance%3Adesc"
  );
  const projects = await res.json();

  return projects;
}

export async function loadProjectsList() {
  const res = await fetch(
    "http://51.81.211.148:1337/api/projects?populate=%2A&pagination[page]=1&pagination[pageSize]=10&sort=relevance%3Adesc"
  );
  const projects = await res.json();

  return projects;
}

export async function getProject(params: any) {
  const { id } = params.params;

  const res = await fetch(`http://51.81.211.148:1337/api/projects/${id}`);

  const project = await res.json();

  return project;
}
