java script 

/ Mobile navigation toggle

/ Mobile navigation toggle

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

}


// Smooth scrolling

document.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", function(e){

    const target = this.getAttribute("href");

    if(target && target.startsWith("#")){

      e.preventDefault();

      document.querySelector(target)
      .scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});


// Dynamic project cards

const projects = [

  {
    title: "Portfolio Website",
    description:
    "Responsive personal portfolio using HTML, CSS, and JavaScript",
    link:"#"
  },

  {
    title:"Landing Page",
    description:
    "Modern UI landing page design",
    link:"#"
  }

];

const container = document.getElementById("project-container");


if(container){

projects.forEach(project => {

  const card = document.createElement("div");

  card.classList.add("project-card");

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}">View Project</a>
  `;

  container.appendChild(card);

});

}
