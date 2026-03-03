// import "../Style/About.css";

// function About() {
//   const skills = ["React.js", "Node.js", "Express", "MongoDB", "Python", "Machine Learning", "C/C++", "Java"];

//   return (
//     <section className="about" id="about">
//       <h1>About Me</h1>

//       <div className="about-container">
//         <div className="about-text">
//           <p>
//             I am Abhishek Kumar, a B.Tech student passionate about building
//             web applications, exploring machine learning, and solving complex
//             problems. I enjoy learning new technologies and applying them in
//             real-world projects.
//           </p>
//         </div>

//         <div className="about-skills">
//           <h3>Skills</h3>
//           <div className="skills-list">
//             {skills.map((skill, index) => (
//               <span className="skill" key={index}>{skill}</span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
import "../Style/About.css";

function About(){
  return(
    <section className="about">

      <h1>About Me</h1>

      <div className="about-container">

        <div className="about-text">

          <p>
            Hello! I'm <b>Abhishek Kumar</b>, a Computer Science student who enjoys
            building software and exploring how systems actually work under the hood.
          </p>

          <p>
            My interests include <b>data structures, system design, machine learning,
            and full-stack development</b>. I like solving algorithmic problems and
            building projects that combine theory with practical implementation.
          </p>

          <p>
            Recently I have worked on projects involving <b>React applications,
            compiler design using Lex and Yacc, spam detection using SVM,
            and networking labs involving routing protocols like RIP and OSPF</b>.
          </p>

          <p>
            I enjoy learning new technologies and continuously improving my
            problem-solving skills through coding and real-world projects.
          </p>

        </div>

        <div className="about-info">

          <div className="info-card">
            <h3>Education</h3>
            <p>B.Tech in Computer Science</p>
          </div>

          <div className="info-card">
            <h3>Interests</h3>
            <p>Algorithms, Machine Learning, System Design</p>
          </div>

          <div className="info-card">
            <h3>Tech Stack</h3>
            <p>React, Node.js, C/C++, Python, MongoDB</p>
          </div>

          <div className="info-card">
            <h3>Goals</h3>
            <p>Build scalable systems and meaningful software</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About;