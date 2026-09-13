import { initNavigation } from "./modules/navigation.js";
import { renderProfile } from "./modules/profile.js";
import { renderProjects } from "./modules/projects.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderProfile("profileContainer");
  renderProjects("projectsContainer");
});
