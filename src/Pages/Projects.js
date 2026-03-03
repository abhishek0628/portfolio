import "../Style/Projects.css";

function Projects() {
  const projects = [
    {
      title: "MERN Blog App",
      desc: "Full-stack blog platform with authentication, CRUD posts, and likes.",
      github: "https://github.com/abhishek/mern-blog-app",
    },
    {
      title: "Spam Email Classifier",
      desc: "Machine learning project classifying emails as spam or not using SVM.",
      github: "https://github.com/abhishek/spam-classifier",
    },
    {
      title: "Compiler Frontend",
      desc: "Compiler project using Lex and Yacc to parse custom language.",
      github: "https://github.com/abhishek/compiler-frontend",
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