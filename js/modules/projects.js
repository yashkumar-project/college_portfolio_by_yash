// Dynamic Projects Module
const projectData = [
  {
    title: "Web Application Platform",
    description:
      "A full-stack responsive web application built using the MERN stack with complete authentication and database management.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "#contact",
  },
  {
    title: "DSA Visualizer",
    description:
      "An interactive algorithm visualizer designed to demonstrate dynamic programming techniques and data structure operations.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    link: "#contact",
  },
  {
    title: "RESTful API Service",
    description:
      "A secure and scalable microservice backend architecture implementing JWT auth and automated testing.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    link: "#contact",
  },
];

export function renderProjects(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = projectData
    .map(
      (project) => `
    <article class="project-card">
      <div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
      <a href="${project.link}" class="project-link">View Details &rarr;</a>
    </article>
  `,
    )
    .join("");
}
