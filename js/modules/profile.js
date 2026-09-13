// Academic & Profile Details Module
const profileDetails = {
  name: "Yash Kumar",
  course: "B.Tech in Computer Science & Engineering",
  class: "Second Year / 3rd Semester",
  university: "Guru Ghashidas University(GGU)",
  graduationYear: "2029",
};

export function renderProfile(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const fields = [
    { label: "Name", value: profileDetails.name },
    { label: "Course", value: profileDetails.course },
    { label: "Class / Semester", value: profileDetails.class },
    { label: "University", value: profileDetails.university },
    { label: "Graduation Year", value: profileDetails.graduationYear },
  ];

  container.innerHTML = fields
    .map(
      (field) => `
    <div class="info-card">
      <h4>${field.label}</h4>
      <p>${field.value}</p>
    </div>
  `,
    )
    .join("");
}
