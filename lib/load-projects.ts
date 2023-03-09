export async function loadProjects() {
  const res = await fetch(
    "http://localhost:1337/api/projects?populate=%2A&pagination[page]=1&pagination[pageSize]=3&sort=relevance%3Adesc"
  );
  const projects = await res.json();

  return projects;
}
