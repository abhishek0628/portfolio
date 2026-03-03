
import "../Style/Home.css";
import { Link } from "react-router-dom";

function Home(){
  return(
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Hi, I'm Abhishek Kumar</h1>
        <h2>Computer Science Student | Developer</h2>

        <p>
          I enjoy building software, solving problems with algorithms,
          and exploring system design and machine learning.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn">View Projects</Link>
          <Link to="/contacts" className="btn-outline">Contact Me</Link>
        </div>
      </section>


      {/* SKILLS */}
      <section className="skills">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">C / C++</div>
          <div className="skill-card">Java</div>
          <div className="skill-card">Python</div>
          <div className="skill-card">MERN</div>
          <div className="skill-card">Machine Learning</div>
          <div className="skill-card">sql</div>
        </div>
      </section>


      {/* PROJECT PREVIEW */}
      <section className="projects-preview">
        <h2>Featured Projects</h2>

        <div className="project-grid">

          <div className="project-card">
            <h3>Blog Platform</h3>
            <p>
              Full stack blog app using Node.js, Express, MongoDB,
              authentication and post interactions.
            </p>
          </div>

          <div className="project-card">
            <h3>Image Differentiator</h3>
            <p>
              Finding differences in two images
            </p>
          </div>

          <div className="project-card">
            <h3>Real time Object detection</h3>
            <p>
              Detecting object in video
            </p>
          </div>

        </div>

        <Link to="/projects" className="btn">See All Projects</Link>

      </section>

    </div>
  )
}

export default Home;