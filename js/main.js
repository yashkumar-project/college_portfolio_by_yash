import { initNavigation } from "./modules/navigation.js";
import { renderProfile } from "./modules/profile.js";
import { renderProjects } from "./modules/projects.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderProfile("profileContainer");
  renderProjects("projectsContainer");
});

const backToTop = document.querySelector(".back-to-top");

backToTop.addEventListener("click", (e) => {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
