// function Home(){
//     return(
//         // <Navbar>
//         //     <h1>hello</h1>
//         // </Navbar>
//         <div>
//             <h1>hello</h1>
//         </div>

//     )
// }
// export default Home;
import { Link } from "react-router-dom";
import "../Style/Home.css";

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Abhishek Kumar</h1>
        <h2>Full Stack Developer & Machine Learning Enthusiast</h2>
        <p>
          I build web applications, machine learning projects, and software
          solutions. Check out my work below.
        </p>
        <Link to="/projects" className="hero-btn">
          View Projects
        </Link>
      </div>
    </section>
  );
}

export default Home;