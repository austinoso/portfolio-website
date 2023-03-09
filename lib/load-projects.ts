export async function loadProjects() {
  const res = await fetch(
    "http://51.81.211.148:1337/api/projects?populate=%2A&pagination[page]=1&pagination[pageSize]=3&sort=relevance%3Adesc"
  );
  const projects = await res.json();

  return projects;
}
