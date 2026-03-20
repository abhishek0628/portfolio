import "../Style/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Blogging Platform",
      desc: "Full-stack blog platform with authentication, CRUD posts, and likes.",
      github: "https://github.com/abhishek0628/Blog",
    },
    {
      title: "Image differentiator",
      desc: "Finding difference between two images.",
      github: "https://github.com/abhishek0628/ImageDiff",
    },
    {
      title: "Real Object Detection",
      desc: "Detecting images from video",
      github: "https://github.com/abhishek0628/RealVision",
    },
    {
      title: "College-Assignment",
      desc: "Assignments during college",
      github: "https://github.com/abhishek0628/College-Assignments",
    },
    {
      title: "Movie Recommendation System",
      desc: "Recommending movie from given movie",
      github: "https://github.com/abhishek0628/CINEMATE",
    },
    {
      title: "Final Year Project",
      desc: "safety checking in OMAS using RBN",
      github: "https://github.com/abhishek0628/College-Assignments/tree/main/FYP",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;