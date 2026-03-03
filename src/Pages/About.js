import "./About.css";

function About() {
  const skills = ["React.js", "Node.js", "Express", "MongoDB", "Python", "Machine Learning", "C/C++", "Java"];

  return (
    <section className="about" id="about">
      <h1>About Me</h1>

      <div className="about-container">
        <div className="about-text">
          <p>
            I am Abhishek Kumar, a B.Tech student passionate about building
            web applications, exploring machine learning, and solving complex
            problems. I enjoy learning new technologies and applying them in
            real-world projects.
          </p>
        </div>

        <div className="about-skills">
          <h3>Skills</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span className="skill" key={index}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;