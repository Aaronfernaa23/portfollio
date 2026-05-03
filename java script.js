java script 

/ Mobile navigation toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth scrolling
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    }
  });
});

  title: "Portfolio Website",
    description: "Responsive personal portfolio using HTML, CSS, and JavaScript",
    link: "#"
  
  {
    title: "Landing Page",
    description: "Modern UI landing page design",
    link: "#"
  }
];

const container = document.getElementById("project-container");

card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}">View Project</a>
  `;

  container.appendChild(card);
});